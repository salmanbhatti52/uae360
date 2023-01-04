import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  totalNotifications:Number;
  favorites:any;
  favoriteCars = [];
  // imageUrlString = 'https://360uae.eigix.net/public/';
  constructor(public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public api:ApiService,
    public router:Router) { }

  ngOnInit() {
    this.getFavoriteCars();
  }
  ionViewWillEnter(){
    this.getNotifications();
  }
  getNotifications(){
    let data = {
      users_id:this.checkUser.appUserId
    };
    this.api.sendRequest('notifications_unread',data).subscribe((res:any)=>{
      console.log("Notification Respone: ",res);
      if(res.status == 'success'){
        if(res.data.length > 0){
          this.totalNotifications = res.data.length
        }else if(res.data.length == 0){
          this.totalNotifications = 0;
        }
        
      }else if(res.status == 'error'){

      }
      
    },(err)=>{
      console.log("Api Error: ",err);
      
    })
  }
  
  gotoNotifications(){
    this.router.navigate(['/notifications']);
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
  makeUnFavorite(carId){
    let data = {
      favourite_car_id:carId,
      user_id:this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('favouriteCars',data).subscribe((res:any)=>{
      this.getFavoriteCars();
      this.api.hideLoading();
      console.log('res: ',res);
      
    },(err)=>{
      this.api.hideLoading();
      console.log(err);
      
    })

  }
  getFavoriteCars(){
    let data = {
      user_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest("getFavouriteCars",data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('Favorite cars are: ',res);
      if(res.status == 'success'){
        this.favoriteCars = res.data;
        this.favorites = res.data.length
      }
    },(err)=>{
      this.api.hideLoading();
      console.log(err);
    })
  }
}
