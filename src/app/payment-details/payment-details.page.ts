import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NewPaymentMethodPage } from '../new-payment-method/new-payment-method.page';
import { BookedPage } from '../booked/booked.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {
  
  constructor(public location:Location,
    public modalCtrlr:ModalController) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  async openBookedModal(){
    const modal  = await this.modalCtrlr.create({
      component:BookedPage,
      showBackdrop:true,
      cssClass:'booked_modal'
    });
    modal.present();
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
