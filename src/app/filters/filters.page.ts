import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  lastEmittedValue: RangeValue;
  // rentCostDayStart = 20;
  // rentCostDayEnd = 200;
  // rentCostMonthStart = 20;
  // rentCostMonthEnd:any = 1000;
  rentCostDayStart:any;
  rentCostDayEnd:any;
  rentCostMonthStart:any;
  rentCostMonthEnd:any;
  result = [];
  constructor(public location:Location,
    public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public api:ApiService,
    public router:Router) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    
  }
  goBack(){
    this.location.back();
  }
  onIonChangePerDay(event){
    console.log("EventForDay: ",event);
    this.rentCostDayStart = event.detail.value.lower;
    this.rentCostDayEnd = event.detail.value.upper;
    console.log("rent_cost_day_start",this.rentCostDayStart);
    console.log("rent_cost_day_end",this.rentCostDayEnd);
    
  }
  onIonChangePerMonth(event){
    console.log("EventForMonth: ",event);
    this.rentCostMonthStart = event.detail.value.lower;
    this.rentCostMonthEnd = event.detail.value.upper;
    console.log("rent_cost_month_start",this.rentCostMonthStart);
    console.log("rent_cost_month_end",this.rentCostMonthEnd);

  }
  applyFilter(){
    this.result = [];
    if(this.checkUser.appUserId == null){
      this.navCtrlr.navigateForward('sign-in');
    }
    else if(this.checkUser.appUserId != null){
      console.log("rent_cost_day_start",this.rentCostDayStart);
      console.log("rent_cost_day_end",this.rentCostDayEnd);
      console.log("rent_cost_month_start",this.rentCostMonthStart);
      console.log("rent_cost_month_end",this.rentCostMonthEnd);
      // console.log();
      
      if(this.rentCostDayStart == undefined ){
        this.api.presentToast("Plz specify your range for day");
      }else if(this.rentCostMonthStart == undefined){
        this.api.presentToast("Plz specify your range for month");
      }else{
        let data = {
          users_customers_id: this.checkUser.appUserId,
          rent_cost_day_start: this.rentCostDayStart,
          rent_cost_day_end: this.rentCostDayEnd,
          rent_cost_month_start:this.rentCostMonthStart,
          rent_cost_month_end:this.rentCostMonthEnd
        };
        this.api.showLoading();
        this.api.sendRequest('getCarsByFilters',data).subscribe((res:any)=>{
          this.api.hideLoading();
          console.log('Response: ',res);
          if(res.status == 'success'){
            this.result = res.data;
          }else if(res.status == 'error'){
            if(res.message == 'Cars are empty.'){
              this.api.presentToast('No car found in this range.')
            }
            
          }
        },(err)=>{
          this.api.hideLoading();
          console.log("API call Error: ",err);
          
        })
      }
      // this.navCtrlr.navigateRoot('home-cars-after-login');
    }
    else{
      
    }
    
  }
  gotoCarDetails(car_id){
    // this.showContent = false;
    let data = {
      car_id: car_id,
      user_id: this.checkUser.appUserId
    }
    this.api.showLoading();
    this.api.sendRequest('getCarsById',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('api response:',res);
      if(res.status == 'success'){
        this.api.carDataById = res.data;
        // if(!res.data.favourite_status){
        //   console.log("Favorite status not found");
        //   this.api.favorite_status = false;
        // }
        console.log('carDataById:',this.api.carDataById);
        this.router.navigate(['/car-details']);
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log(err);
      
    })
  }
  // gotoHomeAfterLogin(){
  //   if(this.checkUser.appUserId == null){
  //     this.navCtrlr.navigateRoot('home-before-login');
  //   }
  //   else if(this.checkUser.appUserId != null){
  //     this.navCtrlr.navigateRoot('home-cars-after-login');
  //   }
  //   else{
      
  //   }
    
  // }
}
