import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GiveRatingsPopupPage } from '../give-ratings-popup/give-ratings-popup.page';
import { CancelBookingPopupPage } from '../cancel-booking-popup/cancel-booking-popup.page';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { differenceInHours, format, getDate, getTime, parseISO } from 'date-fns';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {
  previous_tab='false';
  upcoming_tab='false';
  previousItemdetails = 'false';
  upcomingItemdetails = 'false';
  previousBookingRecords = [];
  upcomingBookingRecords = [];
  selectedid = 0
  bookingRecordData:any;
  recievedObject: any;
  favorites = '';
  carTerms = {
    car_type: '',
    rent_cost_day: '',
    rent_cost_month: '',
    favorite_status: '',
    company_name: '',
  };
  sameTypeCars = [];
  selectedCar:any;
  constructor(public navCtrlr:NavController,
    public modalCtrlr:ModalController,
    public api:ApiService,
    public checkUser:CheckUserService,
    public location:Location,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    console.log("api.allCars: ",this.api.allCars);
    
    
    this.bookingRecordData = JSON.parse(this.activatedRoute.snapshot.params['data']) ;
    console.log('bookingRecordData: ',this.bookingRecordData);
    
    this.previous_tab = this.activatedRoute.snapshot.params['previous_tab'];
    console.log('previous_tab: ',this.previous_tab);
    this.upcoming_tab = this.activatedRoute.snapshot.params['upcoming_tab'];
    console.log('upcoming_tab: ',this.upcoming_tab);
    this.carTerms.car_type = this.bookingRecordData.cars_details[0].car_type;
    this.carTerms.rent_cost_day = this.bookingRecordData.cars_details[0].rent_cost_day;
    this.carTerms.rent_cost_month = this.bookingRecordData.cars_details[0].rent_cost_month;

    // this.carTerms.favorite_status = this.bookingRecordData.user_favourite_cars[0].status;
    this.carTerms.company_name = this.bookingRecordData.users_company_details[0].company_name;

    console.log("Car Terms: ",this.carTerms);
    
  }

  ionViewWillEnter(){
    console.log("Selected Car: ",this.selectedCar);
    
    for(let i= 0; i<this.api.allCars.length ; i++){
      if(this.carTerms.car_type == this.api.allCars[i].car_type){
        //seperate same type cars
        this.sameTypeCars.push(this.api.allCars[i]);
      }
    }
    console.log("sameTypeCars: ",this.sameTypeCars);
    
    if(this.sameTypeCars.length > 0){
      let arrayLength = this.sameTypeCars.length
      console.log("arrayLength: ",arrayLength);
      
      let randomValue = Math.floor(Math.random() * arrayLength)
      console.log("randomValue: ",randomValue);
      this.selectedCar = this.sameTypeCars[randomValue];
      console.log("Selected Car: ",this.selectedCar);
      
    }
  }


  goBack(){
    this.location.back();
  }
  
  async openModal() {
    const modal = await this.modalCtrlr.create({
      component: GiveRatingsPopupPage,
      cssClass: 'give_ratings',
      showBackdrop: true,
      componentProps: {car_id: this.bookingRecordData.car_id}
    });
    modal.present();

    const {data, role}= await modal.onWillDismiss();
    if(role === 'sendFeedback'){
      console.log(data);
    }
  }
  
  async openCancelBookingModal(bookingId){
    console.log(format(parseISO(new Date(this.bookingRecordData.start_date).toISOString()),'yyyy-MM-dd'));
     
    console.log(`${this.bookingRecordData.start_date} ${this.bookingRecordData.start_time}`);
    const stDate = new Date(`${this.bookingRecordData.start_date} ${this.bookingRecordData.start_time}`);
    console.log("startDateTime: ",stDate);
    
    let todayDate = new Date(); 
    console.log("NewDateTime: ",todayDate);
    
    
    // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
    let result = differenceInHours(
      stDate,
      todayDate
    )
    console.log("result = ", result);
    //=> 12
  
    console.log("showBookingId", bookingId);
    
    const modal = await this.modalCtrlr.create({
      component:CancelBookingPopupPage,
      cssClass: (result>24)? 'cancel_booking' : 'cancel_booking2',
      componentProps: {booking_id:bookingId, hours_left:result} ,
      showBackdrop:true
    });
    modal.present();
    const {data, role} = await modal.onWillDismiss();
    if(role === 'cancelBooking'){
      console.log(data);
      this.location.back();
    }
  }

  updateFavoriteStatus(carId){
    let data = {
      favourite_car_id:carId,
      user_id:this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('favouriteCars',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("Response: ",res);
      if(res.status == 'success'){
        if(this.bookingRecordData.car_id == this.selectedCar.car_id){
          this.favorites = res.data;
          this.bookingRecordData.user_favourite_cars.length = 0;
          this.selectedCar.favourite_status = res.data;
          
        }else{
          
          this.favorites = res.data;
          this.bookingRecordData.user_favourite_cars.length = 0;
        }
        
      }else if(res.status == 'error'){
        this.api.presentToast(res.message);
      }else{

      }
    },(err)=>{
      console.log("Error: ",err);
      this.api.hideLoading();
    })
  }

  homeTab(){
    this.navCtrlr.navigateRoot('home-cars-after-login');
  }
  messagesTab(){
    this.navCtrlr.navigateRoot('messages');
  }
  bookingTab(){
    this.navCtrlr.navigateRoot('bookings');
  }
  favoriteTab(){
    this.navCtrlr.navigateRoot('favorites');
  }

  startCarBooking(){
    let carData  = {
      car_id: this.bookingRecordData.car_id,
      rent_cost_day: this.bookingRecordData.cars_details[0].rent_cost_day,
      rent_cost_month: this.bookingRecordData.cars_details[0].rent_cost_month,
      vehical_name: this.bookingRecordData.cars_details[0].vehical_name,
      users_company: [
        {
          company_location: this.bookingRecordData.users_company_details[0].company_location
        }
      ]
      ,
      favourite_status: this.bookingRecordData.user_favourite_cars[0].status,
      image1: this.bookingRecordData.cars_details[0].image1,
      rating: this.bookingRecordData.cars_details[0].rating,
      total_bookings: this.bookingRecordData.total_bookings,
    }
    let carDataById = [];
    carDataById[0] = carData;
    console.log("CAR DATA BY ID ARRAY: ",carDataById);
    this.api.carDataById = carDataById;
    
    this.navCtrlr.navigateForward('car-booking');
  }

  startCarBooking2(){
    let carData  = {
      car_id: this.selectedCar.car_id,
      rent_cost_day: this.selectedCar.rent_cost_day,
      rent_cost_month: this.selectedCar.rent_cost_month,
      vehical_name: this.selectedCar.vehical_name,
      users_company: [
        {
          company_location: this.selectedCar.users_company[0].company_location
        }
      ]
      ,
      favourite_status: this.selectedCar.favourite_status,
      image1: this.selectedCar.image1,
      rating: this.selectedCar.rating,
      total_bookings: this.selectedCar.total_bookings,
    }
    let carDataById = [];
    carDataById[0] = carData;
    console.log("CAR DATA BY ID ARRAY: ",carDataById);
    this.api.carDataById = carDataById;
    
    this.navCtrlr.navigateForward('car-booking');
  }

  updateFavoriteStatus2(carId){
    let data = {
      favourite_car_id:carId,
      user_id:this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('favouriteCars',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("Response: ",res);
      if(res.status == 'success'){
        if(this.bookingRecordData.car_id == carId){
          this.selectedCar.favourite_status= res.data;
          this.bookingRecordData.user_favourite_cars.length = 0;
          this.favorites = res.data;
        }else{
          this.selectedCar.favourite_status= res.data;
        }
        
      }else if(res.status == 'error'){
        this.api.presentToast(res.message);
      }else{

      }
    },(err)=>{
      console.log("Error: ",err);
      this.api.hideLoading();
    })
  }

}
