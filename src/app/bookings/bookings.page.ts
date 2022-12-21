import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GiveRatingsPopupPage } from '../give-ratings-popup/give-ratings-popup.page';
import { CancelBookingPopupPage } from '../cancel-booking-popup/cancel-booking-popup.page';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { format, parseISO } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  imageUrlString = 'https://360uae.eigix.net/public/';
  previous_tab = true;
  upcoming_tab = false;
  previousItemdetails = false;
  upcomingItemdetails = false;
  previousBookingRecords = [];
  upcomingBookingRecords = [];
  selectedid = 0
  ratingValue: number;
  constructor(public navCtrlr:NavController,
    public modalCtrlr:ModalController,
    public api:ApiService,
    public checkUser:CheckUserService) { }

  ngOnInit() {
    this.previousTab('previous')
  }
  previousTab(tabVal){
    if(tabVal = 'previous'){
      console.log(tabVal);
      this.previous_tab = true;
      this.upcoming_tab = false;
      console.log("this.upcoming_tab: ",this.upcoming_tab);
      console.log("this.previous_tab: ",this.previous_tab);
      this.previousItemdetails = false;
      this.upcomingItemdetails = false;
      this.getPreviousBookings();
    }
  }
  
  getPreviousBookings(){
    let data = {
      appuser_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('getCarsBookingPrevious',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("Response: ",res);
      if(res.status == 'success'){

        this.previousBookingRecords = res.data;
        for(let rec of this.previousBookingRecords){
          rec.start_date = format(parseISO(new Date(rec.start_date).toISOString()),'dd-MM-yyyy')
          rec.end_date = format(parseISO(new Date(rec.end_date).toISOString()),'dd-MM-yyyy')
        }
        console.log('previousBookingRecords: ',this.previousBookingRecords);
        
      }else if(res.status == 'error'){

      }else{
        
      }
    },(err)=>{
      this.api.hideLoading();
      console.log("Api Call Error: ",err);
      
    });
  }

  upcomingTab(tabVal){
    if(tabVal = 'upcoming'){
      console.log(tabVal)
      this.upcoming_tab = true;
      this.previous_tab = false;
      console.log("this.upcoming_tab: ",this.upcoming_tab);
      console.log("this.previous_tab: ",this.previous_tab);
      this.previousItemdetails = false;
      this.upcomingItemdetails = false;
      this.getUpcomingBookings();
    }
  }
  getUpcomingBookings(){
    let data = {
      appuser_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('getCarsBookingUpcoming',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("Response: ",res);
      if(res.status == 'success'){
        this.upcomingBookingRecords = res.data;
        for(let rec of this.upcomingBookingRecords){
          rec.start_date = format(parseISO(new Date(rec.start_date).toISOString()),'dd-MM-yyyy')
          rec.end_date = format(parseISO(new Date(rec.end_date).toISOString()),'dd-MM-yyyy')
          if(rec.cars_details[0].rating == 0 ){
            rec.cars_details[0].rating = Number(rec.cars_details[0].rating);
            console.log("Rating Value: ",rec.cars_details[0].rating); 
          }
        }
        console.log('upcomingBookingRecords: ',this.upcomingBookingRecords);
        
      }else if(res.status == 'error'){

      }else{

      }
    },(err)=>{
      this.api.hideLoading();
      console.log("Api Call Error: ",err);
      
    });
  }
  
  async openModal() {
    const modal = await this.modalCtrlr.create({
      component: GiveRatingsPopupPage,
      cssClass: 'give_ratings',
      showBackdrop: true
    });
    modal.present();

    const {data, role}= await modal.onWillDismiss();
    if(role === 'sendFeedback'){
      console.log(data);
    }
  }
  async openCancelBookingModal(){
    const modal = await this.modalCtrlr.create({
      component:CancelBookingPopupPage,
      cssClass: 'cancel_booking',
      showBackdrop:true
    });
    modal.present();
    const {data, role} = await modal.onWillDismiss();
    if(role === 'cancelBooking'){
      console.log(data);
    }
  }

  // updateFavoriteStatus(carId){
  //   let data = {
  //     favourite_car_id:carId,
  //     user_id:this.checkUser.appUserId
  //   };
  //   this.api.showLoading();
  //   this.api.sendRequest('favouriteCars',data).subscribe((res:any)=>{
  //     this.api.hideLoading();
  //     console.log("Response: ",res);
  //     if(res.status == 'success'){

  //     }else if(res.status == 'error'){
  //       this.api.presentToast(res.message);
  //     }else{

  //     }
  //   },(err)=>{
  //     console.log("Error: ",err);
  //     this.api.hideLoading();
  //   })
  // }
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

  showDetails(data){
    console.log(data);

    if( this.selectedid == data.car_id)
    {
      this.selectedid = 0
    }else{
      this.navCtrlr.navigateRoot(['/booking-details',{
        data: JSON.stringify(data) ,
        previous_tab: this.previous_tab,
        upcoming_tab: this.upcoming_tab
      }])
      // this.selectedid = data.car_id;

    }
    
    // if(this.previousItemdetails == true || this.upcomingItemdetails == true){
    //   this.previousItemdetails = false;
    //   this.upcomingItemdetails = false;
    // }
    // else if(this.previousItemdetails == false || this.upcomingItemdetails == false){
    //   this.previousItemdetails = true;
    //   this.upcomingItemdetails = true;

    // }
    
  }

  startCarBooking(){
    this.navCtrlr.navigateRoot('car-booking');
  }
}
