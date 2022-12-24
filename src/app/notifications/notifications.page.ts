import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
import { format } from 'path';
import { getHours, getMinutes, getTime, parseISO, parseJSON } from 'date-fns';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications: any;
  response = true;
  constructor(public location:Location,
    public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public api:ApiService) { }

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
        
          let date = new Date(data.notification_date).toLocaleTimeString();

          console.log("DateandTime: ",date);
          console.log(date.substring(0, 4));
          console.log(date.substring(8,10));
          let time = date.substring(0, 4);
          let format = date.substring(8,10);
          console.log("complete Date: ",`${time} ${format}`);
          data.notification_date = `${time} ${format}`;
          console.log("Response: ",res);

        }
        
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
}
