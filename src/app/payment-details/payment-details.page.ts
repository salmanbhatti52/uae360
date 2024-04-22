import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NewPaymentMethodPage } from '../new-payment-method/new-payment-method.page';
import { BookedPage } from '../booked/booked.page';
import { ModalController } from '@ionic/angular';
import { loadScript } from "@paypal/paypal-js";
import { ApiService } from '../services/api.service';
// import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
// import { PaymentSheetEventsEnum, Stripe } from '@capacitor-community/stripe';
import { CheckUserService } from '../check-user.service';
import * as creditCardType from 'credit-card-type';
import Cleave from 'node_modules/cleave.js/dist/cleave-esm.min.js';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {
  // [x: string]: any;
  master = false;
  visa = false;
  paypal = false;
  paymentMethodsData = true;
  paymentAmount: any = this.api.bookingResponse.total_cost;
  amount: any = 0;
  customerId: any;
  ephemeralKey: any;
  paymentIntent: any;
  // paymentAmount: string = '10';
  currency: string = 'USD';
  paid_username: any;
  card: any;
  cardType = '';
  cardNumber = '';
  cardsList: any = [];
  selected = 0;
  payPalPaymentDetails: any;
  bookingId: any;
  tokenId: any;
  txnsId: any;
  selectedCard: any;
  errorMessage = 'Transaction for this booking already exists.';
  constructor(public location: Location,
    public modalCtrlr: ModalController,
    public api: ApiService,
    // private stripe: Stripe,
    public checkUser: CheckUserService
  ) {
    // client_test_key: pk_test_51N01szFT2B9ZAxHdS85H9SlFpWmvVlFLiBT35BvQMUKZvkx70Km2wmVJxqH7rhwCIZE4rbzgZam2MwMBtSkmtrzd00JJtLMnv4
    // My_test_key: pk_test_51MQ37qDFPlDlGxkdw91wUybcouQFM0EOUev6HlGRi86QjYCu3tITcy1KzcDJGrSncQ8G2rHYxPmiDAm4Y027ff6g00Es0yT7y1
    // this.stripe.setPublishableKey('pk_test_51N01szFT2B9ZAxHdS85H9SlFpWmvVlFLiBT35BvQMUKZvkx70Km2wmVJxqH7rhwCIZE4rbzgZam2MwMBtSkmtrzd00JJtLMnv4');
    // Stripe.initialize({
    //   publishableKey: 'pk_test_51NLjiSCq21ty1Wx6S2nBXtuBtmDqGwwAbCPA4rt1oXxlr9sTRamGNjF5KpTZfrWbDsVwPDhqaNwAJDOA9pKz80cF00IgQ0c5Yn',
    // });
  }

  ngOnInit() {
    this.paid_username = undefined
    this.renderPayWithPaypal();
  }

  ionViewWillEnter() {
    this.getCardsList();
    console.log(this.api.bookingResponse);

    this.bookingId = this.api.bookingResponse.booking_id;
    console.log('Booking Id: ', this.bookingId);

  }

  goBack() {
    this.location.back();
  }

  getCardsList() {
    this.paymentMethodsData = true
    let data = {
      appuser_id: this.checkUser.appUserId
    }
    this.api.showLoading();
    this.api.sendRequest('get_cards_list', data).subscribe((res: any) => {
      console.log("Response: ", res);
      if (res.status == 'success') {
        this.cardsList = res.data;
        // console.log("card list: ",this.cardsList);

        // var creditCardType = require("credit-card-type");

        for (let data of this.cardsList) {
          data.sm_card_number = data.card_number.substring(0, 4)
          let visaCards = creditCardType(data.card_number);
          // console.log(visaCards);
          if (visaCards.length != 0) {
            data.card_type = visaCards[0].type;
          } else {
            data.card_type = 'unknown'
          }
        }
        // console.log("card list: ",this.cardsList);
        this.selectedCard = this.cardsList[0];
        // this.getToken();
        this.api.hideLoading();
        if (this.cardsList.length == 0) {
          this.paymentMethodsData = false
        }
      }

    }, (err) => {
      this.api.hideLoading();
      console.log("Api error", err);

    })

  }

  //  getToken(){
  //   this.tokenId = undefined;
  //   let card = {
  //     // number: '4242424242424242',
  //     // expMonth: 12,
  //     // expYear: 2025,
  //     // cvc: '220'
  //     number: this.selectedCard.card_number,
  //     expMonth: this.selectedCard.expiry_month,
  //     expYear: this.selectedCard.expiry_year,
  //     cvc: this.selectedCard.cvv
  //   }
  //    console.log("selected Card: ", card );

  //   // //  this.stripe.createCardToken(card).then(token => {
  //   // //   // console.log("token.id: ",token.id);
  //   // //   this.tokenId = token.id
  //   // //   // console.log("this.tokenId: ",this.tokenId);
  //   // // })
  //   // .catch(error => {
  //   //   console.error("error: ",error);
  //   //   this.api.presentToast(error);
  //   // });
  // }

  httpPost() {
    // let amount = String(this.rest.billDetails.total_bill * 100)
    console.log("Amount before multiply by 100: ", this.paymentAmount);
    this.amount = this.paymentAmount * 100
    this.amount = this.convertInDecimal(this.amount);
    console.log("Amount after multiply by 100: ", this.amount);

    let data = {
      name: this.api.localUserData.username,
      email: this.api.localUserData.email,
      amount: this.amount,
      currency: "USD"
    }
    console.log("payload for payment sheet api: ", data);

    this.api.sendRequest('payment_sheet', data).subscribe((res: any) => {
      console.log("Ress: ", res);
      this.customerId = res.customer;
      this.ephemeralKey = res.ephemeralkey?.secret;
      this.paymentIntent = res.paymentintent?.client_secret;
      console.log("customerId: ", this.customerId);
      console.log("ephemeralKey: ", this.ephemeralKey);
      console.log("paymentIntent: ", this.paymentIntent);

    })


  }

  convertInDecimal(x: any) {
    let decimalString = Number.parseFloat(x).toFixed(2);
    console.log("dec str: ", decimalString);
    return Number.parseFloat(decimalString);
  }

  // payCash(paymentType:any){
  //   let discountStatus = 'pending';
  //   if(this.rest.claimDiscount == true){
  //     discountStatus = 'claimed';
  //   }
  //   if(this.rest.discountedAmount == undefined){
  //     this.rest.discountedAmount = 0
  //   }
  //   let data = {
  //     events_id:this.rest.billDetails.event_id,
  //     user_id:this.userId,
  //     user_business_id:this.rest.billDetails.user_business_id,
  //     number_of_ticket:this.rest.billDetails.ticket_requested,
  //     package_name:this.rest.billDetails.package_name,
  //     package_type:this.rest.billDetails.package_type,
  //     package_price: this.rest.billDetails.package_price,
  //     booking_percentage: this.rest.booking_percentage,
  //     price_per_ticket:this.rest.billDetails.price_per_ticket,
  //     total_amount:this.rest.billDetails.total_bill,
  //     paid_amount:this.rest.billDetails.pre_pay_amount,
  //     remaining_amount: this.rest.billDetails.remaining_amount,
  //     transiction_id:this.txnsId,
  //     transiction_status:"Paid",
  //     payment_type:paymentType,
  //     claim_discounts:discountStatus,
  //     discounted_amount:this.rest.discountedAmount
  //   }
  //   console.log('pay with cash dataaa: ',data);
  //   this.rest.presentLoader();
  //   this.rest.sendRequest('event_bookings',data).subscribe((res:any)=>{
  //     this.rest.dismissLoader();
  //     console.log("Resssss: ",res);
  //     if(res.status == 'success'){
  //       this.rest.ticketTokens = res.data.tickets;
  //       this.rest.eventBookingId = res.data.event_booking_id;
  //       this.rest.eventId = res.data.events_id;
  //       this.rest.bookingStatus = res.data.status;
  //       this.rest.transactionStatus = res.data.transiction_status;

  //       this.rest.presentToast('Success');
  //       this.paynow();
  //     }

  //   }
  //   // ,(err)=>{
  //   //   this.rest.dismissLoader();
  //   //   console.log("Errr: ",err );

  //   // }
  //   )

  // }

  async paymentSheet() {
    // if(this.api.localUserData.username != ''){
    //   try {
    //     this.paymentIntent = undefined;
    //     this.customerId = undefined;
    //     this.ephemeralKey = undefined;
    //     // be able to get event of PaymentSheet
    //     this.api.showLoading();
    //     this.httpPost();

    //     Stripe.addListener(PaymentSheetEventsEnum.Completed, () => {
    //       console.log('PaymentSheetEventsEnum.Completed');
    //     });

    //     // Connect to your backend endpoint, and get every key.

    //     setTimeout(async () => {
    //       console.log("If PaymentIntent: ",this.paymentIntent);
    //       // prepare PaymentSheet with CreatePaymentSheetOption.
    //       await Stripe.createPaymentSheet({
    //         // enableGooglePay:true,
    //         // enableApplePay:true,
    //         paymentIntentClientSecret: this.paymentIntent,
    //         customerId: this.customerId,
    //         customerEphemeralKeySecret: this.ephemeralKey,
    //         merchantDisplayName: 'Getbootstrap'
    //       });
    //       this.api.hideLoading();
    //       console.log("createPaymentSheet");
    //     }, 3000);

    //     setTimeout(async () => {
    //       // present PaymentSheet and get result.
    //       const result = await Stripe.presentPaymentSheet();
    //       console.log('Result: ',result);

    //       if (result.paymentResult === PaymentSheetEventsEnum.Completed) {
    //         this.splitAndJoin(this.paymentIntent);
    //         console.log("paymentIntent",this.paymentIntent);
    //         this.pay();
    //         // Happy path
    //       }
    //     }, 3000);



    //   } catch (error) {
    //     console.log("Error catched: ",error);

    //   }
    // }else{
    //   this.api.presentToast("Plz add your name in Profile section.");
    // }



  }

  splitAndJoin(paymentIntent: any) {
    const result = paymentIntent.split('_').slice(0, 2).join('_');
    this.txnsId = result;
    console.log("txnsId: ", this.txnsId);
    console.log("Result: ", result);
    return result;

  }

  selectMethod(val, cardData) {
    this.selectedCard = cardData;
    // this.getToken();
    console.log(val);
    this.selected = val;
  }



  pay() {
    this.api.showLoadWd();
    setTimeout(() => {
      this.makePayment();
    }, 2000);
  }

  makePayment() {
    console.log("Payment Amount: ", this.paymentAmount);

    if (this.paymentAmount != '0') {
      let data = {
        booking_id: this.bookingId,
        payment_gateways: "Credit Card",
        payer_name: this.selectedCard.holder_name,
        paid_amount: this.paymentAmount,
        token_id: this.txnsId,
        currency: "USD",
        // gateway_status:"Pending",
        transactions_status: "Paid"
      }
      console.log("Make Payment Data: ", data);

      this.api.sendRequest("storeCarsBookingTransactions", data).subscribe((res: any) => {
        this.api.hideLoading();
        console.log("Response: ", res);
        if (res.status == 'success') {
          this.api.presentToast(`Transaction Status: ${res.data.bookings_txns.transactions_status}`);
          this.paymentAmount = '0';
          this.openBookedModal();
        } else if (res.status == 'error') {
          this.api.presentToast(res.message)
          this.paymentAmount = '0';
          this.openBookedModal();
        } else {

        }
      }, (err) => {
        this.api.hideLoading();
        console.log("Api Error: ", err);
        this.api.presentToast(`Error is: ${err}`);
      })
    } else {
      this.api.hideLoading();
      this.api.presentToast(this.errorMessage);
      this.openBookedModal();
    }


  }

  async openBookedModal() {

    const modal = await this.modalCtrlr.create({
      component: BookedPage,
      showBackdrop: true,
      cssClass: 'booked_modal'
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

  async renderPayWithPaypal() {
    let _this = this;
    setTimeout(async () => {

      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({

        // Set up the transaction
        createOrder: function (data, actions) {
          if (_this.paymentAmount == '0') {
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

  sendPayPalDetails() {

    let data = {
      booking_id: this.bookingId,
      payment_gateways: "Paypal",
      payer_paypal_email: this.payPalPaymentDetails.payer.eamil_address,
      payer_name: this.payPalPaymentDetails.payer.name.given_name,
      paid_amount: this.payPalPaymentDetails.purchase_units[0].amount.value,
      payee_paypal_email: this.payPalPaymentDetails.purchase_units[0].payee.email_address,
      gateway_status: this.payPalPaymentDetails.purchase_units[0].payments.captures[0].status,
      transactions_status: this.payPalPaymentDetails.status
    }
    // console.log("Data: ",data);
    this.api.showLoading();
    this.api.sendRequest("storeCarsBookingTransactions", data).subscribe((res: any) => {
      // console.log("Response: ",res);
      this.api.hideLoading();
      if (res.status == 'success') {
        this.openBookedModal();
      } else if (res.status == 'error') {
        this.openBookedModal();
        this.api.presentToast(res.message)
      } else {

      }
    }, (err) => {
      this.api.hideLoading();
      console.log("Api Error: ", err);

    })
  }



  async addPaymentMethod() {
    const modal = await this.modalCtrlr.create({
      component: NewPaymentMethodPage,
      showBackdrop: true,
      cssClass: 'add_payment_method'
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role == 'status') {
      const status = data;
      // console.log(status);
      this.getCardsList();

    }
  }

  ionViewWillLeave() {
    console.log('leave view');
    this.paid_username = '';
  }
}
