import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications = [];
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
        this.notifications = res.data;
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
