import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
import {format, parseISO } from 'date-fns';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications: any;
  response = true;
  topNotifications= [];
  constructor(public location:Location,
    public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public api:ApiService,
    public router:Router) { }

  ngOnInit() {
    this.getNotifications();
  }
  getNotifications(){
    let data = {
      users_id:this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('notifications',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("Response: ",res);
      if(res.status == 'success'){
        if(res.data.length == 0){
          this.response = false;
        }
        this.notifications = res.data;
        for(let data of this.notifications){
          let dateString = data.notification_date
          let datePartOne = dateString.substring(0,10)
          let datePartTwo = dateString.substring(11)
          let formattedDate = `${datePartOne}T${datePartTwo}+05:00`
          console.log(`My Formatted Date: ${datePartOne}T${datePartTwo}+05:00`);
          console.log(`ionChangeTimeVal: 2022-12-29T11:28:00+05:00`);
          data.notification_date = format(parseISO(formattedDate), "h:mm aaa");
          
        }

        for(let i = this.notifications.length - 1; i>=0; i--){
          this.topNotifications.push(this.notifications[i]);
        }
        console.log("NF. List: ",this.topNotifications);
        
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log("API call Error: ",err);
      
    })
  }
  goBack(){
    this.location.back();
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
  // homeTab(){
  //   this.navCtrlr.navigateRoot('home-cars-after-login');
  // }
  // messagesTab(){
  //   this.navCtrlr.navigateRoot('messages');
  // }
  // bookingTab(){
  //   this.navCtrlr.navigateRoot('bookings');
  // }
  // favoriteTab(){
  //   this.navCtrlr.navigateRoot('favorites');
  // }
}
