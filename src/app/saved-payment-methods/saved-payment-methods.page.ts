import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NewPaymentMethodPage } from '../new-payment-method/new-payment-method.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-saved-payment-methods',
  templateUrl: './saved-payment-methods.page.html',
  styleUrls: ['./saved-payment-methods.page.scss'],
})
export class SavedPaymentMethodsPage implements OnInit {

  constructor(public location:Location,
    public modalCtrlr:ModalController) { }

  ngOnInit() {
  }
  
  goBack(){
    this.location.back();
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
