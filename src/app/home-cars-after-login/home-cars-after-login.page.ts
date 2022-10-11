import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';
import { ApiService } from '../services/api.service';
import { MenuController } from '@ionic/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-home-cars-after-login',
  templateUrl: './home-cars-after-login.page.html',
  styleUrls: ['./home-cars-after-login.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeCarsAfterLoginPage implements OnInit {
  totalNotifications = 6;
  item1 = true;
  item2 = false;
  item3 = false;
  item4 = false;
  item5 = false;
  
  // pickups = [
  //   {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
  //   {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
  //   {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
  //   {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
  //   {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269}
  // ]
  pickups = [];
  constructor(public router:Router,
    public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public appComponent:AppComponent,
    public api:ApiService,
    public menuCtrlr:MenuController) {}

  ngOnInit() {
   // ===update appPages===========
   console.log(this.checkUser.appUserId);
   this.checkUser.checkUser();
   console.log(this.checkUser.appPages);
   this.appComponent.appPages = this.checkUser.appPages;
   // =======done============
   this.getCars();
  }

  getCars(){
    this.api.showLoading();
    this.api.getData('cars').subscribe((res:any)=>{
      console.log(res);
      if(res.status == 'success'){
        this.api.hideLoading();
        this.pickups = res.data;
      }
    },(err)=>{
      this.api.hideLoading();
      console.log(err);
      
    })
  }
  gotoFilter(){
    this.router.navigate(['/filters']);
  }
  gotoCarDetails(car_id){
    this.api.showLoading();
    let data = {
      car_id: car_id
    }
    this.api.sendRequest('getCarsById',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('api response:',res);
      if(res.status == 'success'){
        this.api.carDataById = res.data;
        console.log('carDataById:',this.api.carDataById);
        this.router.navigate(['/car-details']);
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log(err);
      
    })
  }
  selectItem(itemVal){
    if(itemVal == 'all'){
      this.item1 = true;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false; 
      this.getCars();
    }else if(itemVal == 'hatchback'){
      this.item1 = false;
      this.item2 = true;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      
      this.api.showLoading();
        let data = {
          car_type: 'Hatchback'
        }
        this.api.sendRequest('getCarsByCarType',data).subscribe((res:any)=>{
          console.log(res);
          if(res.status == 'success'){
            this.api.hideLoading();
            this.pickups = res.data;
          }
        },(err)=>{
          this.api.hideLoading();
          console.log(err);
          
        })
    }else if(itemVal == 'sedan'){
      this.item1 = false;
      this.item2 = false;
      this.item3 = true;
      this.item4 = false;
      this.item5 = false;

      this.api.showLoading();
        let data = {
          car_type: 'Sedan'
        }
        this.api.sendRequest('getCarsByCarType',data).subscribe((res:any)=>{
          console.log(res);
          if(res.status == 'success'){
            this.api.hideLoading();
            this.pickups = res.data;
          }
        },(err)=>{
          this.api.hideLoading();
          console.log(err);
          
        })
    }else if(itemVal == 'bus'){
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = true;
      this.item5 = false;

      this.api.showLoading();
        let data = {
          car_type: 'Bus'
        }
        this.api.sendRequest('getCarsByCarType',data).subscribe((res:any)=>{
          console.log(res);
          if(res.status == 'success'){
            this.api.hideLoading();
            this.pickups = res.data;
          }
        },(err)=>{
          this.api.hideLoading();
          console.log(err);
          
        })
    }else if(itemVal == 'suv'){
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = true;

      this.api.showLoading();
        let data = {
          car_type: 'SUV'
        }
        this.api.sendRequest('getCarsByCarType',data).subscribe((res:any)=>{
          console.log(res);
          if(res.status == 'success'){
            this.api.hideLoading();
            this.pickups = res.data;
          }
        },(err)=>{
          this.api.hideLoading();
          console.log(err);
          
        })
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
