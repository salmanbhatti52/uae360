import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { ExpiryDatePopupPage } from '../expiry-date-popup/expiry-date-popup.page';


@Component({
  selector: 'app-new-payment-method',
  templateUrl: './new-payment-method.page.html',
  styleUrls: ['./new-payment-method.page.scss'],
})
export class NewPaymentMethodPage implements OnInit {
  name_box_active = false;
  card_box_active = false;
  cvc_box_active = false;
  date_box_active = false;
  email_box_active = false;
  data: any;
  expiryDate = 'Expiry date';
  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
  }
  async openDateModal(){
    const modal = await this.modalCtrlr.create({
      component: ExpiryDatePopupPage, 
      showBackdrop: true,
      cssClass: 'expiry_date'
    })
    modal.present();
    const {data, role} = await modal.onWillDismiss();
    if(role == 'expiry_date'){
      this.expiryDate = data;
    }
    this.activate('date');
  }
  activate(box_val){
    if(box_val == 'name'){
      this.name_box_active = true;
      this.card_box_active = false;
      this.cvc_box_active = false;
      this.date_box_active = false;
      this.email_box_active = false;
    }else if(box_val == 'card_number'){
      this.name_box_active = false;
      this.card_box_active = true;
      this.cvc_box_active = false;
      this.date_box_active = false;
      this.email_box_active = false;
    }else if(box_val == 'cvc'){
      this.name_box_active = false;
      this.card_box_active = false;
      this.cvc_box_active = true;
      this.date_box_active = false;
      this.email_box_active = false;
    }else if(box_val == 'date'){
      this.name_box_active = false;
      this.card_box_active = false;
      this.cvc_box_active = false;
      this.date_box_active = true;
      this.email_box_active = false;
    }else if(box_val == 'email'){
      this.name_box_active = false;
      this.card_box_active = false;
      this.cvc_box_active = false;
      this.date_box_active = false;
      this.email_box_active = true;
    }else{

    }
  }
  savePaymentMethod(){
    this.name_box_active = false;
    this.card_box_active = false;
    this.cvc_box_active = false;
    this.date_box_active = false;
    this.email_box_active = false;
    return this.modalCtrlr.dismiss(this.data, 'new_method_data')
  }
}
