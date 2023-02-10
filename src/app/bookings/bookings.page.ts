import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { format, parseISO } from 'date-fns';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  
  previous_tab = 'true';
  upcoming_tab = 'false';
  
  previousBookingRecords = [];
  upcomingBookingRecords = [];
  topPreviousBookingRecords = [];
  topUpcomingBookingRecords = [];
  response = 'true';

  constructor(
    public modalCtrlr:ModalController,
    public api:ApiService,
    public checkUser:CheckUserService,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      this.ngOnInit();
      this.ionViewWillEnter();
      event.target.complete();
    }, 2000);
  };

  ionViewWillEnter(){

    if(this.api.showNewBookings == 'true'){
      this.api.showNewBookings = ''
      this.upcomingTab();
    }else{
      if(this.previous_tab == 'true'){
        this.previousTab();
      }else{
        this.upcomingTab();
      }
    }
    
   
  }
  
  
  previousTab(){
  
      this.previous_tab = 'true';
      this.upcoming_tab = 'false';
      console.log("this.previous_tab: ",this.previous_tab);
      console.log("this.upcoming_tab: ",this.upcoming_tab);
      this.getPreviousBookings();

  }
  
  getPreviousBookings(){
    this.topPreviousBookingRecords = [];
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
          rec.f_start_date = format(parseISO(new Date(rec.start_date).toISOString()),'dd-MM-yyyy')
          rec.f_end_date = format(parseISO(new Date(rec.end_date).toISOString()),'dd-MM-yyyy')
        }
        this.api.hideLoading();
        console.log('previousBookingRecords: ',this.previousBookingRecords);

        for(let i = this.previousBookingRecords.length - 1; i>=0; i--){
          this.topPreviousBookingRecords.push(this.previousBookingRecords[i]);
        }
        console.log("NF. List: ",this.topPreviousBookingRecords);

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

  upcomingTab(){
   
      this.previous_tab = 'false';
      this.upcoming_tab = 'true';
      console.log("this.previous_tab: ",this.previous_tab);
      console.log("this.upcoming_tab: ",this.upcoming_tab);
      this.getUpcomingBookings();
  
  }
  getUpcomingBookings(){
    this.topUpcomingBookingRecords = []
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
          rec.f_start_date = format(parseISO(new Date(rec.start_date).toISOString()),'dd-MM-yyyy')
          rec.f_end_date = format(parseISO(new Date(rec.end_date).toISOString()),'dd-MM-yyyy')
        }
        this.api.hideLoading();
        console.log('upcomingBookingRecords: ',this.upcomingBookingRecords);
        for(let i = this.upcomingBookingRecords.length - 1; i>=0; i--){
          this.topUpcomingBookingRecords.push(this.upcomingBookingRecords[i]);
        }
        console.log("NF. List: ",this.topUpcomingBookingRecords);
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
    this.router.navigate(['/home-cars-after-login']);
  }
  messagesTab(){
    this.router.navigate(['/messages']);
  }
  bookingTab(){
    this.router.navigate(['/bookings']);
  }
  favoriteTab(){
    this.router.navigate(['/favorites']);
  }

  showDetails(data){

    console.log(data);
    this.router.navigate(['/booking-details',{
      data: JSON.stringify(data) ,
      previous_tab: this.previous_tab,
      upcoming_tab: this.upcoming_tab
    }]);
    
    
  }

}
