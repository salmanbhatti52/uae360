import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
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
