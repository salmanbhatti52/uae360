import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { format, parseISO } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking2',
  templateUrl: './booking2.page.html',
  styleUrls: ['./booking2.page.scss'],
})
export class Booking2Page implements OnInit {

  previousBookingRecords = [];
  upcomingBookingRecords = [];
  response = 'true';
  segmentModel = "previous"
  previous_tab = 'true';
  upcoming_tab = 'false';
  constructor(public router:Router,
    public modalCtrlr:ModalController,
    public api:ApiService,
    public checkUser:CheckUserService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getPreviousBookings()
    this.getUpcomingBookings()
  }

  segmentChanged(event: any) {
    console.log("rrr", this.segmentModel);
    console.log("eee", event);
  }

  getPreviousBookings(){
    let data = {
      appuser_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('getCarsBookingPrevious',data).subscribe((res:any)=>{
      
      console.log("Response: ",res);
      if(res.status == 'success'){
        this.response = 'true';
        this.previousBookingRecords = res.data;
        for(let rec of this.previousBookingRecords){
          rec.start_date = format(parseISO(new Date(rec.start_date).toISOString()),'dd-MM-yyyy')
          rec.end_date = format(parseISO(new Date(rec.end_date).toISOString()),'dd-MM-yyyy')
        }
        this.api.hideLoading();
        console.log('previousBookingRecords: ',this.previousBookingRecords);
        
      }else if(res.status == 'error'){
        this.api.hideLoading();
        this.response = 'false';
      }else{
        
      }
    },(err)=>{
      this.api.hideLoading();
      console.log("Api Call Error: ",err);
      
    });
  }

  getUpcomingBookings(){
    let data = {
      appuser_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('getCarsBookingUpcoming',data).subscribe((res:any)=>{
      
      console.log("Response: ",res);
      if(res.status == 'success'){

        this.response = 'true';
        this.upcomingBookingRecords = res.data;
        for(let rec of this.upcomingBookingRecords){
          rec.start_date = format(parseISO(new Date(rec.start_date).toISOString()),'dd-MM-yyyy')
          rec.end_date = format(parseISO(new Date(rec.end_date).toISOString()),'dd-MM-yyyy')
          if(rec.cars_details[0].rating == 0 ){
            rec.cars_details[0].rating = Number(rec.cars_details[0].rating);
            console.log("Rating Value: ",rec.cars_details[0].rating); 
          }
        }
        this.api.hideLoading();
        console.log('upcomingBookingRecords: ',this.upcomingBookingRecords);
        
      }else if(res.status == 'error'){
        this.api.hideLoading();
        this.response = 'false';
        
      }else{

      }
    },(err)=>{
      this.api.hideLoading();
      console.log("Api Call Error: ",err);
      
    });
  }
  
  homeTab(){
    this.router.navigate(['home-cars-after-login']);
  }
  messagesTab(){
    this.router.navigate(['messages']);
  }
  bookingTab(){
    this.router.navigate(['booking2']);
  }
  favoriteTab(){
    this.router.navigate(['favorites']);
  }
  showDetails(data){

    if(this.segmentModel == "previous"){
      this.previous_tab = "true"
      this.upcoming_tab = "false"
    }else{
      this.previous_tab = "false"
      this.upcoming_tab = "true"
    }
    console.log(data);
    this.router.navigate(['/booking-details',{
      data: JSON.stringify(data) ,
      previous_tab: this.previous_tab,
      upcoming_tab: this.upcoming_tab
    }]);
   
    
  }

  startCarBooking(){
    this.router.navigate(['car-booking']);
  }
}
