import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExpiryDatePopupPage } from '../expiry-date-popup/expiry-date-popup.page';
import Cleave from 'node_modules/cleave.js/dist/cleave-esm.min.js';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-new-payment-method',
  templateUrl: './new-payment-method.page.html',
  styleUrls: ['./new-payment-method.page.scss'],
})
export class NewPaymentMethodPage implements OnInit {
  card_type = '';
  name_box_active = false;
  card_box_active = false;
  cvc_box_active = false;
  date_box_active = false;
  email_box_active = false;
  data: any;
  expiryDate = 'Expire Date';
  cardNumber: any;
  userName: any;
  cvc: any;
  month: any;
  year: any;
  constructor(public modalCtrlr:ModalController,
    public checkUser:CheckUserService,
    public api:ApiService
    ) {}

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.userName = '';
    this.cardNumber = '';
    this.cvc = '';
    this.month = '';
    this.year = '';
  }
  
  getUserName(ev){
    // console.log(ev);
    
    this.userName = ev.detail.value;
    // console.log("username:",this.userName);
    
  }

  getCvc(ev){
    // console.log(ev);
    
    this.cvc = ev.detail.value;
    // console.log("cvc:",this.cvc);
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
      this.month = data.substring(3,5)
      this.year = data.substring(6,10)

      this.expiryDate = `${this.month}/${this.year}`;
    }
    this.activate('date');
  }

  checkCardType(ev){
    // console.log(ev);
    this.cardNumber = ev.detail.value
    // console.log("Card Number:",this.cardNumber);
    console.log("checkCarType Called");
    let _this = this;
    
    var cleave = new Cleave('.input-element', {
      
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        // update UI ...
        _this.card_type = type
        // console.log("card_type: ",_this.card_type);
        
      }
    });
    // console.log("Cleave: ",cleave);
    
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

    let cardArray = this.cardNumber.split(' ');
    // console.log(cardArray);
    let cardNumWithoutSpace = '';

    for(let i = 0; i<cardArray.length; i++){
      // console.log(cardArray[i]);
      cardNumWithoutSpace =  cardNumWithoutSpace.concat(cardArray[i])
    }
    // console.log("cardNumWithoutSpace: ",cardNumWithoutSpace);
    this.cardNumber = cardNumWithoutSpace;
    // console.log("Card Number: ",this.cardNumber);

    if(this.userName == ''){
      this.api.presentToast('Please enter username')
    }else if(this.cardNumber == ''){
      this.api.presentToast('Please enter card number')
    }else if(this.cvc == '' ){
      this.api.presentToast('Please enter cvc')
    }else if(this.cvc.length < 3){
      this.api.presentToast('CVC is incomplete')
    }else if(this.month == '' || this.year == ''){
      this.api.presentToast('Please select expire date')
    }else{
      let data = {
        appuser_id:this.checkUser.appUserId,
        holder_name:this.userName,
        card_number:this.cardNumber,
        expiry_month:this.month,
        expiry_year:this.year,
        cvv:this.cvc
      }
      this.api.sendRequest('store_cards_list',data).subscribe((res:any)=>{
        // console.log(res);
        if(res.status == 'success'){
          this.api.presentToast("Success!")
          //  this.modalCtrlr.dismiss();
           return this.modalCtrlr.dismiss(res.status, 'status')
        }
      },(err)=>{
        console.log("Api error:",err);
        this.api.presentToast('Oops! something went wrong');
        this.modalCtrlr.dismiss();
      })
      
    }
    
  }
}
