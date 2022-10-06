import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-home-cars-after-login',
  templateUrl: './home-cars-after-login.page.html',
  styleUrls: ['./home-cars-after-login.page.scss'],
})
export class HomeCarsAfterLoginPage implements OnInit {
  totalNotifications = 6;
  item1 = false;
  item2 = false;
  item3 = false;
  item4 = true;
  item5 = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.17,
    spaceBetween : 6,
  };
  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 4.4,
    // spaceBetween : 9,
  };
  pickups = [
    {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
    {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
    {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
    {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
    {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269}
  ]
  constructor(public router:Router,
    public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public appComponent:AppComponent) {}

  ngOnInit() {
   // ===update appPages===========
   console.log(this.checkUser.appUserId);
   this.checkUser.checkUser();
   console.log(this.checkUser.appPages);
   this.appComponent.appPages = this.checkUser.appPages;
   // =======done============
  }
  gotoFilter(){
    this.router.navigate(['/filters']);
  }
  gotoCarDetails(){
    this.router.navigate(['/car-details']);
  }
  selectItem(itemVal){
    if(itemVal == 1){
      this.item1 = true;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
    }else if(itemVal == 2){
      this.item1 = false;
      this.item2 = true;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
    }else if(itemVal == 3){
      this.item1 = false;
      this.item2 = false;
      this.item3 = true;
      this.item4 = false;
      this.item5 = false;
    }else if(itemVal == 4){
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = true;
      this.item5 = false;
    }else if(itemVal == 5){
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = true;
    }else{
      
    }
  }
  gotoNotifications(){
    this.navCtrlr.navigateRoot('notifications');
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
