import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {

  showCategories = false;
  rentCategories = [{category:'Day'},{category:'Month'}]
  categoryVal = 'Day';
  carData = [];
  
  slideOpts = {
    intialSlide: 0,
    speed: 400,
    slidesPerView:1
  };
  constructor(public location:Location,
    public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public api:ApiService) { }

  ngOnInit() {
    this.carData = this.api.carDataById;
    console.log('car_data:',this.carData);
    
  }
  goBack(){
    this.location.back();
  }
  displayCategories(){
    if(this.showCategories== false){
      this.showCategories = true;
    }
    else{
      this.showCategories = false;
    }
  }
  selectedCategory(val){
    console.log(val);
    this.categoryVal = val;
  }
  gotoRatings(){
    if(this.checkUser.appUserId == null){
      this.navCtrlr.navigateRoot('sign-in');
    }else if(this.checkUser.appUserId != null){
      this.navCtrlr.navigateRoot('ratings');
    }else{

    }
  }
  startCarBooking(){
    if(this.checkUser.appUserId == null){
      this.navCtrlr.navigateRoot('sign-in');
    }else if(this.checkUser.appUserId != null){
      this.navCtrlr.navigateRoot('car-booking');
    }else{

    }
    
  }
  startChatwithOwner(){
    if(this.checkUser.appUserId == null){
      this.navCtrlr.navigateRoot('sign-in');
    }else if(this.checkUser.appUserId != null){
      this.navCtrlr.navigateRoot('message-owner-side');
    }else{

    }
    
  }
}
