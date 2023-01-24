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
  paymentAmount: string = this.api.bookingResponse.total_cost;
  // paymentAmount: string = '10';
  currency: string = 'USD';
  paid_username:any;
  card: any;
  cardType = '';
  cardNumber = '';
  cardsList = [];
  selected = 0;
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
  }
  
  getCardsList(){
    let data = {
      appuser_id:this.checkUser.appUserId
    }
    this.api.showLoading();
    this.api.sendRequest('get_cards_list',data).subscribe((res:any)=>{
      console.log("Response: ",res);
      if(res.status == 'success'){
        this.cardsList = res.data;
        console.log("card list: ",this.cardsList);
        
        var creditCardType = require("credit-card-type");
       
        for(let data of this.cardsList){
          data.sm_card_number = data.card_number.substring(0,4)
          let visaCards = creditCardType(data.card_number);
          console.log(visaCards);
          if(visaCards.length != 0){
            data.card_type = visaCards[0].type;
          }else{
            data.card_type = 'unknown'
          }
        }
        console.log("card list: ",this.cardsList);
        this.api.hideLoading();
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
      console.log("token.id: ",token.id);
      this.makePayment(token.id);
    })
    .catch(error => {
      console.error("error: ",error);
      this.api.presentToast(error);
    });
  }

  makePayment(tokenId){
    // remove tokenId from console after testing
    console.log(tokenId);
    
  }
  ionViewWillLeave(){
    console.log('leave view');
    this.paid_username = '';
  }
  goBack(){
    this.location.back();
  }
  async openBookedModal(){
    console.log("paid_username: ",this.paid_username);
    
    if(this.paid_username !== undefined){
      const modal  = await this.modalCtrlr.create({
        component:BookedPage,
        showBackdrop:true,
        cssClass:'booked_modal'
      });
      modal.present();
    }else{
      this.api.presentToast('Hmm! You forgot to pay the amount.')
    }
    
    //   "client-id": 'ARQ1XpBx7JkSr3FZEhw7dnUGMS_gmTuDq-oHta6H3S89qx23gtBpaWGSYqw7ql6BpUseTIKD58dS40Wz',
    //   "data-page-type": "checkout",
    //   currency: "USD",
    //   components: "buttons,marks,messages"
  }

  async renderPayWithPaypal(){
    let _this = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({

        // Set up the transaction
        createOrder: function (data, actions) {
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
              console.log("PayPal Payment Details: ",details);
              
              _this.paid_username = details.payer.name.given_name
              // Show a success message to the buyer
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
            })
            .catch(err => {
              console.log(err);
            })
        }
      }).render('#your-container-element');
    }, 500)

    
  
    // let paypal;

    // try {
    //     paypal = await loadScript({ "client-id": "ARQ1XpBx7JkSr3FZEhw7dnUGMS_gmTuDq-oHta6H3S89qx23gtBpaWGSYqw7ql6BpUseTIKD58dS40Wz" });
    // } catch (error) {
    //     console.error("failed to load the PayPal JS SDK script", error);
    // }

    // if (paypal) {
    //     try {
    //         await paypal.Buttons().render("#your-container-element");
    //     } catch (error) {
    //         console.error("failed to render the PayPal Buttons", error);
    //     }
    // }
  }

  

  selectMethod(val){
    console.log(val);
    this.selected = val;
    

  }
  async addPaymentMethod(){
    const modal = await this.modalCtrlr.create({
      component:NewPaymentMethodPage,
      showBackdrop:true,
      cssClass:'add_payment_method'
    });
    modal.present();
    const {data,role} = await modal.onWillDismiss();
    if(role == 'new_method_data'){
      const new_method_data = data;
      console.log(new_method_data);
      
    }
  }
}
