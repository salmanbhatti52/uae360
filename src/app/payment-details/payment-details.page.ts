import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NewPaymentMethodPage } from '../new-payment-method/new-payment-method.page';
import { BookedPage } from '../booked/booked.page';
import { ModalController } from '@ionic/angular';
import { loadScript } from "@paypal/paypal-js";
import { ApiService } from '../services/api.service';
import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
import { CheckUserService } from '../check-user.service';
import Cleave from 'node_modules/cleave.js/dist/cleave-esm.min.js';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {
  [x: string]: any;
  master = false;
  visa = false;
  paypal = false;
  paymentMethodsData = true;
  paymentAmount: string = this.api.bookingResponse.total_cost;
  // paymentAmount: string = '10';
  currency: string = 'USD';
  paid_username:any;
  card: any;
  cardType = '';
  cardNumber = '';
  cardsList = [];
  selected = 0;
  payPalPaymentDetails: any;
  bookingId:any;
  tokenId:any;
  selectedCard:any;
  errorMessage = 'Transaction for this booking already exists.';
  constructor(public location:Location,
    public modalCtrlr:ModalController,
    public api:ApiService,
    private stripe: Stripe,
    public checkUser:CheckUserService
    ) {
      this.stripe.setPublishableKey('pk_test_51MQ37qDFPlDlGxkdw91wUybcouQFM0EOUev6HlGRi86QjYCu3tITcy1KzcDJGrSncQ8G2rHYxPmiDAm4Y027ff6g00Es0yT7y1');
     }

  ngOnInit() {
    this.paid_username = undefined
    this.renderPayWithPaypal();
  }
  ionViewWillEnter(){
    this.getToken();
    this.getCardsList();
    console.log(this.api.bookingResponse);
    
    this.bookingId = this.api.bookingResponse.booking_id;
    console.log('Booking Id: ',this.bookingId);
    
  }
  
  goBack(){
    this.location.back();
  }

  getCardsList(){
    this.paymentMethodsData = true
    let data = {
      appuser_id:this.checkUser.appUserId
    }
    this.api.showLoading();
    this.api.sendRequest('get_cards_list',data).subscribe((res:any)=>{
      // console.log("Response: ",res);
      if(res.status == 'success'){
        this.cardsList = res.data;
        // console.log("card list: ",this.cardsList);
        
        var creditCardType = require("credit-card-type");
       
        for(let data of this.cardsList){
          data.sm_card_number = data.card_number.substring(0,4)
          let visaCards = creditCardType(data.card_number);
          // console.log(visaCards);
          if(visaCards.length != 0){
            data.card_type = visaCards[0].type;
          }else{
            data.card_type = 'unknown'
          }
        }
        // console.log("card list: ",this.cardsList);
        this.selectedCard = this.cardsList[0]
        this.api.hideLoading();
        if(this.cardsList.length == 0){
          this.paymentMethodsData = false
        }
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log("Api error",err);
      
    })
     
  }

  getToken(){
    let card = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2025,
      cvc: '220'
    }
     
    this.stripe.createCardToken(card).then(token => {
      // console.log("token.id: ",token.id);
      this.tokenId = token.id
      // console.log("this.tokenId: ",this.tokenId);
    })
    .catch(error => {
      console.error("error: ",error);
      this.api.presentToast(error);
    });
  }

  selectMethod(val,cardData){
    console.log(val);
    this.selected = val;
    this.selectedCard = cardData
  }
  makePayment(){
    if(this.paymentAmount != '0'){
      let data = {
        booking_id:this.bookingId,
        payment_gateways:"Credit Card",
        payer_name:this.selectedCard.holder_name,
        paid_amount:this.paymentAmount,
        token_id:this.tokenId,
        currency:"USD",
        gateway_status:"Pending",
        transactions_status:"Pending"
      }
      // console.log("Data: ",data);
  
      this.api.sendRequest("storeCarsBookingTransactions",data).subscribe((res:any)=>{
        // console.log("Response: ",res);
        if(res.status == 'success'){
          this.paymentAmount = '0';
          this.openBookedModal();
        }else if(res.status == 'error'){
          this.api.presentToast(res.message)
          this.paymentAmount = '0';
          this.openBookedModal();
        }else{
          
        }
      },(err)=>{
        console.log("Api Error: ",err);
        
      })
    }else{
      this.api.presentToast(this.errorMessage);
      this.openBookedModal();
    }
   
    
  }
 
  async openBookedModal(){
    
    const modal  = await this.modalCtrlr.create({
      component:BookedPage,
      showBackdrop:true,
      cssClass:'booked_modal'
    });
    modal.present();
    // else{
    //   this.api.presentToast('Hmm! You forgot to pay the amount.')
    // }
    
    //   "client-id": 'ARQ1XpBx7JkSr3FZEhw7dnUGMS_gmTuDq-oHta6H3S89qx23gtBpaWGSYqw7ql6BpUseTIKD58dS40Wz',
    //   "data-page-type": "checkout",
    //   currency: "USD",
    //   components: "buttons,marks,messages"
  }

  async renderPayWithPaypal(){
    let _this = this;
    setTimeout(async () => {
      
      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({

        // Set up the transaction
        createOrder: function (data, actions) {
          if(_this.paymentAmount == '0'){
            _this.api.presentToast(_this.errorMessage);
            _this.openBookedModal();
          }
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: _this.paymentAmount
              }
            }]
          });
        },

        // Finalize the transaction
        onApprove: function (data, actions) {
          return actions.order.capture()
            .then(function (details) {
              // console.log("PayPal Payment Details: ",details);
              _this.payPalPaymentDetails = details;
             
              // if(_this.paymentAmount != '0'){
                // Show a success message to the buyer
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
                // console.log('amount: ',_this.paymentAmount);
                _this.paymentAmount = '0'
                // console.log('amount: ',_this.paymentAmount);
              // }
              // else{
              //   this.api.presentToast(_this.errorMessage);
              // }
              _this.sendPayPalDetails();
            })
            .catch(err => {
              console.log(err);
            })
        }
      }).render('#your-container-element');
      
      
    }, 500)
   
    // this.api.presentToast(_this.errorMessage);
  }

  sendPayPalDetails(){
      
    let data = {
      booking_id:this.bookingId,
      payment_gateways:"Paypal",
      payer_paypal_email:this.payPalPaymentDetails.payer.eamil_address,
      payer_name:this.payPalPaymentDetails.payer.name.given_name,
      paid_amount:this.payPalPaymentDetails.purchase_units[0].amount.value,
      payee_paypal_email:this.payPalPaymentDetails.purchase_units[0].payee.email_address,
      gateway_status:this.payPalPaymentDetails.purchase_units[0].payments.captures[0].status,
      transactions_status:this.payPalPaymentDetails.status
    }
    // console.log("Data: ",data);
    this.api.showLoading();
    this.api.sendRequest("storeCarsBookingTransactions",data).subscribe((res:any)=>{
      // console.log("Response: ",res);
      this.api.hideLoading();
      if(res.status == 'success'){
        this.openBookedModal();
      }else if(res.status == 'error'){
        this.openBookedModal();
        this.api.presentToast(res.message)
      }else{

      }
    },(err)=>{
      this.api.hideLoading();
      console.log("Api Error: ",err);
      
    })
  }
  

  
  async addPaymentMethod(){
    const modal = await this.modalCtrlr.create({
      component:NewPaymentMethodPage,
      showBackdrop:true,
      cssClass:'add_payment_method'
    });
    modal.present();
    const {data,role} = await modal.onWillDismiss();
    if(role == 'status'){
      const status = data;
      // console.log(status);
      this.getCardsList();
      
    }
  }

  ionViewWillLeave(){
    console.log('leave view');
    this.paid_username = '';
  }
}
