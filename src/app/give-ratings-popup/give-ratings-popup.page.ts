import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonTextarea, ModalController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-give-ratings-popup',
  templateUrl: './give-ratings-popup.page.html',
  styleUrls: ['./give-ratings-popup.page.scss'],
})
export class GiveRatingsPopupPage implements OnInit {
  @ViewChild(IonTextarea) textarea:IonTextarea;
  rateStar1 = false;
  rateStar2 = false;
  rateStar3 = false;
  rateStar4 = false;
  rateStar5 = false;
  ratingValue : any;
  feedback: string;
  @Input() car_id:any;
  constructor(public modalCtrlr:ModalController,
    public checkUser:CheckUserService,
    public api:ApiService) { }

  ngOnInit() {
  }
  closeModal(){
    return this.modalCtrlr.dismiss(null, 'closeModal');
  }
  sendFeedback(){
    let data = {
      users_customers_id: this.checkUser.appUserId,
      cars_id : this.car_id,
      comments: this.textarea.value,
      rate_stars: this.ratingValue
    }
    console.log("Data Obj: ",data);
    this.api.showLoading();
    this.api.sendRequest('rate_cars',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('Response: ',res);
      
      if(res.status == 'success'){
        this.api.presentToast('Rated Successfully');
      }else if(res.status == 'error'){
        this.api.presentToast(res.message);
      }else{
        
      }
    },(err)=>{
      this.api.hideLoading();
      console.log("API Call Error: ",err);
      
    })
    return this.modalCtrlr.dismiss(this.feedback, 'sendFeedback');
  }
  
  rateStar(val){
    if(val == 1){
      this.ratingValue = val;
      if(this.rateStar1 == false){
        this.rateStar1 = true;
      }else{
        this.rateStar1 = false;
        this.rateStar2 = false;
        this.rateStar3 = false;
        this.rateStar4 = false;
        this.rateStar5 = false;
      }
    }
    else if(val == 2){
      this.ratingValue = val;
      if(this.rateStar2 == false){
        this.rateStar1 = true;
        this.rateStar2 = true;
      }else{
        this.rateStar2 = false;
        this.rateStar3 = false;
        this.rateStar4 = false;
        this.rateStar5 = false;
      }
    }
    else if(val == 3){
      this.ratingValue = val;
      if(this.rateStar3 == false){
        this.rateStar1 = true;
        this.rateStar2 = true;
        this.rateStar3 = true;
      }else{
        this.rateStar3 = false;
        this.rateStar4 = false;
        this.rateStar5 = false;
      }
    }
    else if(val == 4){
      this.ratingValue = val;
      if(this.rateStar4 == false){
        this.rateStar1 = true;
        this.rateStar2 = true;
        this.rateStar3 = true;
        this.rateStar4 = true;
      }else{
        this.rateStar4 = false;
        this.rateStar5 = false;
      }
    }
    else if(val == 5){
      this.ratingValue = val;
      if(this.rateStar5 == false){
        this.rateStar1 = true;
        this.rateStar2 = true;
        this.rateStar3 = true;
        this.rateStar4 = true;
        this.rateStar5 = true;
      }else{
        this.rateStar5 = false;
      }
    }
    else{
      
    }
  }
}
