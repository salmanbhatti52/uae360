import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GiveRatingsPopupPage } from '../give-ratings-popup/give-ratings-popup.page';
import { CancelBookingPopupPage } from '../cancel-booking-popup/cancel-booking-popup.page';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { format, parseISO } from 'date-fns';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {
  previous_tab=false;
  upcoming_tab=false;
  previousItemdetails = false;
  upcomingItemdetails = false;
  previousBookingRecords = [];
  upcomingBookingRecords = [];
  selectedid = 0
  bookingRecordData:any;
  recievedObject: any;
  constructor(public navCtrlr:NavController,
    public modalCtrlr:ModalController,
    public api:ApiService,
    public checkUser:CheckUserService,
    public location:Location,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // this.previousTab('previous');
    this.bookingRecordData = JSON.parse(this.activatedRoute.snapshot.params['data']) ;
    console.log('bookingRecordData: ',this.bookingRecordData);
    
    this.previous_tab  = this.activatedRoute.snapshot.params['previous_tab']  ;
    console.log('previous_tab: ',this.previous_tab);
    this.upcoming_tab = this.activatedRoute.snapshot.params['upcoming_tab'] ;
    console.log('upcoming_tab: ',this.upcoming_tab);
  }
  goBack(){
    this.location.back();
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
  async openCancelBookingModal(bookingId){
    console.log("showBookingId", bookingId);
    
    const modal = await this.modalCtrlr.create({
      component:CancelBookingPopupPage,
      cssClass: 'cancel_booking',
      componentProps: {booking_id:bookingId} ,
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

  showDetails(data){
    console.log(data);

    if( this.selectedid == data.car_id)
    {
      this.selectedid = 0
    }else{
      this.selectedid = data.car_id

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
