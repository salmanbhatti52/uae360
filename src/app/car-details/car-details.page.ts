import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  favorites = '';
  showCategories = false;
  rentCategories = [{category:'Day'},{category:'Month'}]
  categoryVal = 'Day';
  carData = [];
  vehicleName:any;
  carId: any;
  appUserId: string;
  
  constructor(public location:Location,
    public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public api:ApiService,
    public router:Router) { }

  ngOnInit() {
    this.carData = this.api.carDataById;
    if (this.carData != undefined) {
      for (let data of this.carData) {
        this.vehicleName = data.vehical_name;
        this.carId = data.car_id;
        if(!data.favourite_status){
          this.favorites = 'dislike';
        }else{
          this.favorites = data.favourite_status;
        }
        
      }
    }

    this.appUserId = localStorage.getItem('appUserId');
    if(this.appUserId == null){
      console.log('appUserIdonCar_Details: ',this.appUserId);
      this.favorites = 'dislike';
    }
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
  makefavorite(){
    if(this.appUserId == null){
      this.navCtrlr.navigateRoot('sign-in');
    }else{
      this.api.showLoading();
      let data = {
        favourite_car_id: this.carId,
        user_id:this.appUserId,
      };
      this.api.sendRequest('favouriteCars',data).subscribe((res:any)=>{
        console.log('Favorite Api Response: ',res);
        if(res.status == 'success'){
          this.favorites = res.data
        }
        this.api.hideLoading();
        // else if(res.status == 'error'){
        //   this.api.presentToast()
        // }
        
      },(err)=>{
        this.api.hideLoading();
        console.log('Error', err);
        
      });
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
      this.router.navigate(['/sign-in']);
    }else if(this.checkUser.appUserId != null){
      this.router.navigate(['/car-booking']);
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
