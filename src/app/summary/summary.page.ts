import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  favorites = '';
  startDate = '';
  endDate = '';
  startTime = '';
  endTime = '';
  totalCost = '';
  getLocation = ''
  bookingResponse:any;
  carData = [];
  vehicleName: any;
  drivingLicense:any;
  carId: any;

  constructor(
    public location:Location,
    public navCtrlr:NavController,
    public api:ApiService,
    public checkUser:CheckUserService) { }

  ngOnInit() {
    // this.carData = this.api.carDataById;
    // this.bookingResponse = this.api.bookingResponse;
    // if(this.bookingResponse !== undefined){
    //   this.startDate = this.bookingResponse.start_date;
    //   this.endDate = this.bookingResponse.end_date;
    //   this.startTime = this.bookingResponse.start_time;
    //   this.endTime = this.bookingResponse.end_time;
    //   this.totalCost = this.bookingResponse.total_cost;
    //   this.drivingLicense = this.bookingResponse.license_img;
    //   this.getLocation = this.bookingResponse.location;
    // }
    // if (this.carData != undefined) {
    //   for (let data of this.carData) {
    //     this.vehicleName = data.vehical_name
    //   }
    // }

    
  }
  ionViewWillEnter(){
    this.carData = this.api.carDataById;
    this.bookingResponse = this.api.bookingResponse;
    if(this.bookingResponse !== undefined){
      this.startDate = this.bookingResponse.start_date;
      this.endDate = this.bookingResponse.end_date;
      this.startTime = this.bookingResponse.start_time;
      this.endTime = this.bookingResponse.end_time;
      this.totalCost = this.bookingResponse.total_cost;
      this.drivingLicense = this.bookingResponse.license_img;
      this.getLocation = this.bookingResponse.location;
    }
    
    if (this.carData != undefined) {
      for (let data of this.carData) {
        this.carId = data.car_id
        this.vehicleName = data.vehical_name;
        if(!data.favourite_status){
          this.favorites = 'dislike';
        }else{
          this.favorites = data.favourite_status;
        }
      }
    }
  }
  

  makefavorite(){

    let data = {
      favourite_car_id: this.carId,
      user_id:this.checkUser.appUserId,
    };
    this.api.showLoading();
    this.api.sendRequest('favouriteCars',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('Favorite Api Response: ',res);
      if(res.status == 'success'){
        this.favorites = res.data
        this.getCarDataById();
      }
      // else if(res.status == 'error'){
      //   this.api.presentToast()
      // }
      
    },(err)=>{
      this.api.hideLoading();
      console.log('Error', err);
      
    });

  }

  getCarDataById(){
    
    let data = {
      car_id: this.carId,
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
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log(err);
      
    })
  }
  goBack(){
    this.location.back();
  }
  startPaymentProcess(){
    this.navCtrlr.navigateForward('payment-details');
  }
}
