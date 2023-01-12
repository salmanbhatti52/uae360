import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NewPaymentMethodPage } from '../new-payment-method/new-payment-method.page';
import { BookedPage } from '../booked/booked.page';
import { ModalController } from '@ionic/angular';
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { loadScript } from "@paypal/paypal-js";
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {
  master = false;
  visa = false;
  paypal = false;

  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '₹';
  constructor(public location:Location,
    public modalCtrlr:ModalController,
    // public payPal:PayPal
    ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.renderPayWithPaypal();
  }
  goBack(){
    this.location.back();
  }
  async openBookedModal(){
    // const modal  = await this.modalCtrlr.create({
    //   component:BookedPage,
    //   showBackdrop:true,
    //   cssClass:'booked_modal'
    // });
    // modal.present();

    //   "client-id": 'ARQ1XpBx7JkSr3FZEhw7dnUGMS_gmTuDq-oHta6H3S89qx23gtBpaWGSYqw7ql6BpUseTIKD58dS40Wz',
    //   "data-page-type": "checkout",
    //   currency: "USD",
    //   components: "buttons,marks,messages"
  }

  async renderPayWithPaypal(){
    let paypal;

    try {
        paypal = await loadScript({ "client-id": "ARQ1XpBx7JkSr3FZEhw7dnUGMS_gmTuDq-oHta6H3S89qx23gtBpaWGSYqw7ql6BpUseTIKD58dS40Wz" });
    } catch (error) {
        console.error("failed to load the PayPal JS SDK script", error);
    }

    if (paypal) {
        try {
            await paypal.Buttons().render("#your-container-element");
        } catch (error) {
            console.error("failed to render the PayPal Buttons", error);
        }
    }
  }

  // payWithPaypal() {
  //   this.payPal.init({
  //     PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
  //     PayPalEnvironmentSandbox: 'ARQ1XpBx7JkSr3FZEhw7dnUGMS_gmTuDq-oHta6H3S89qx23gtBpaWGSYqw7ql6BpUseTIKD58dS40Wz'
  //   }).then(() => {
  //     // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  //     this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
  //       // Only needed if you get an "Internal Service Error" after PayPal login!
  //       //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  //     })).then(() => {
  //       let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
  //       this.payPal.renderSinglePaymentUI(payment).then((res) => {
  //         console.log(res);
  //         // Successfully paid
  //       }, () => {
  //         // Error or render dialog closed without being successful
  //       });
  //     }, () => {
  //       // Error in configuration
  //     });
  //   }, () => {
  //     // Error in initialization, maybe PayPal isn't supported or something else
  //   });
  // }

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
