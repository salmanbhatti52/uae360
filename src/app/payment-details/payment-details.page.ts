import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NewPaymentMethodPage } from '../new-payment-method/new-payment-method.page';
import { BookedPage } from '../booked/booked.page';
import { ModalController } from '@ionic/angular';
import { loadScript } from "@paypal/paypal-js";
import { ApiService } from '../services/api.service';
import {loadStripe} from '@stripe/stripe-js';
import { HttpClient } from "@angular/common/http";
declare var Stripe;
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
  currency: string = 'USD';
  paid_username:any;
  // currencyIcon: string = '₹';

  stripe = Stripe('pk_test_51MQ37qDFPlDlGxkdw91wUybcouQFM0EOUev6HlGRi86QjYCu3tITcy1KzcDJGrSncQ8G2rHYxPmiDAm4Y027ff6g00Es0yT7y1');
  card: any;
  constructor(public location:Location,
    public modalCtrlr:ModalController,
    public api:ApiService,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.paid_username = undefined
    this.renderPayWithPaypal();
    this.setupStripe();
  }
  ionViewWillEnter(){
    

  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });
    console.log(this.card);
    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log(event)

      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
          this.makePayment(result.id);
        }
      });
    });
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
    if(val == 'master'){
      if(this.master == false){
        this.master = true;
        this.visa = false;
        this.paypal = false;
      }else{
        this.master = false;
        this.visa = false;
        this.paypal = false;
      }
    }else if(val == 'visa'){
      if(this.visa == false){
        this.visa = true;
        this.master = false;
        this.paypal = false;
      }else{
        this.master = false;
        this.visa = false;
        this.paypal = false;
      }
    }else if(val == 'paypal'){
      if(this.paypal == false){
        this.paypal = true;
        this.master = false;
        this.visa = false;
      }else{
        this.master = false;
        this.visa = false;
        this.paypal = false;
      }
    }else{

    }

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
