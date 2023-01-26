import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NewPaymentMethodPage } from '../new-payment-method/new-payment-method.page';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
@Component({
  selector: 'app-saved-payment-methods',
  templateUrl: './saved-payment-methods.page.html',
  styleUrls: ['./saved-payment-methods.page.scss'],
})
export class SavedPaymentMethodsPage implements OnInit {
  cardsList = [];
  constructor(public location:Location,
    public modalCtrlr:ModalController,
    public api:ApiService,
    public checkUser:CheckUserService) { }

  ngOnInit() {
  }
  
  goBack(){
    this.location.back();
  }

  ionViewWillEnter(){
    this.getCardsList();
  }

  getCardsList(){
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
          console.log(visaCards);
          if(visaCards.length != 0){
            data.card_type = visaCards[0].type;
          }else{
            data.card_type = 'unknown'
          }
        }
        // console.log("card list: ",this.cardsList);
        this.api.hideLoading();
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log("Api error",err);
      
    })
     
  }
  
  getCardsList2(){
    let data = {
      appuser_id:this.checkUser.appUserId
    }
    // this.api.showLoading();
    this.api.sendRequest('get_cards_list',data).subscribe((res:any)=>{
      // console.log("Response: ",res);
      if(res.status == 'success'){
        this.cardsList = res.data;
        // console.log("card list: ",this.cardsList);
        
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
        // console.log("card list: ",this.cardsList);
        // this.api.hideLoading();
      }
      
    },(err)=>{
      // this.api.hideLoading();
      console.log("Api error",err);
      
    })
     
  }
  deletePaymentMethod(cardId){
    let data = {
      appuser_id:this.checkUser.appUserId,
      appUsers_cards_id:cardId
    }
    this.api.showLoading();
    this.api.sendRequest('delete_cards_list',data).subscribe((res:any)=>{
      console.log("Response: ",res);
      if(res.status == 'success'){
        // console.log("card list: ",this.cardsList);
        this.getCardsList2();
        this.api.hideLoading();
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log("Api error",err);
      
    })
     
  }
  async addPaymentMethod(){
    const modal = await this.modalCtrlr.create({
      component:NewPaymentMethodPage,
      showBackdrop:true,
      cssClass:'add_payment_method'
    });
    modal.present();
    // let _this = this;
    
    const {data,role} = await modal.onWillDismiss();
    if(role == 'status'){
      const status = data;
      console.log(status);
      this.getCardsList();
    }
  }
}
