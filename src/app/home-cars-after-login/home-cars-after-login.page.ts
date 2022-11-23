import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';
import { ApiService } from '../services/api.service';
import { MenuController } from '@ionic/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-home-cars-after-login',
  templateUrl: './home-cars-after-login.page.html',
  styleUrls: ['./home-cars-after-login.page.scss'],
})
export class HomeCarsAfterLoginPage implements OnInit {
  totalNotifications = 6;
  item1 = true;
  item2 = false;
  item3 = false;
  item4 = false;
  item5 = false;
  carTypes = [];
  carTypeOne = '';
  carTypeTwo = '';
  carTypeThree = '';
  carTypeFour = '';
  carTypeOneId= '';
  carTypeTwoId = '';
  carTypeThreeId = '';
  carTypeFourId = '';

  latitude: number;
  longitude: number;
  userLocation: string = '';
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
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
    public menuCtrlr:MenuController,
    public nativeGeoCoder: NativeGeocoder) {}

  ngOnInit() {
   // =======update appPages===========
   console.log('AppUserId: ',this.checkUser.appUserId);
   this.checkUser.checkUser();
   console.log("AppPages: ",this.checkUser.appPages);
   this.appComponent.appPages = this.checkUser.appPages;
   // =======done============

  // ==============localUserData====================
  // this.api.localUserData = undefined;
   this.api.localUserData = JSON.parse(localStorage.getItem('localUserData'));
  //  JSON.parse(localStorage.getItem('appPagesAfterLogin')); 
    // this.api.localUserData.profile_pic = userData.profile_pic;
    // this.api.localUserData.username = userData.username;
    // this.api.localUserData.location = userData.location;

    console.log('localUserData: ',this.api.localUserData);
    
  // ================================================
   this.getCarTypes();
   this.getCars();
   this.fetchLocation();
  }
  async fetchLocation(){
    const getCurrentLocation = await Geolocation.getCurrentPosition({
      enableHighAccuracy:true
    });
    console.log('Current Location: ',getCurrentLocation);
    this.latitude = getCurrentLocation.coords.latitude;
    this.longitude = getCurrentLocation.coords.longitude;
    console.log('Latitude: ',this.latitude);
    console.log('Longitude: ',this.longitude);
    this.fetchAddress();
    
  }
  fetchAddress(){
    this.nativeGeoCoder.reverseGeocode(this.latitude,this.longitude,this.options)
    .then((result:NativeGeocoderResult[])=>{
      console.log('Result: ', result);
      console.log('Result 0: ', result[0]);
      
      this.api.fetchLocation= result[0].countryName;
    },(err)=>{
      console.log('Error:', err);
      
    });
  }
  getCarTypes(){
    this.api.showLoading();
    this.api.sendRequest('carType').subscribe((res:any)=>{
      console.log('getCarTypes: ',res);
      if(res.status=='success'){
        this.carTypes = res.data;
        this.carTypeOne = this.carTypes[0].car_type;
        this.carTypeTwo = this.carTypes[1].car_type;
        this.carTypeThree = this.carTypes[2].car_type;
        this.carTypeFour = this.carTypes[3].car_type;

        this.carTypeOneId = this.carTypes[0].car_type_id;
        this.carTypeTwoId = this.carTypes[1].car_type_id;
        this.carTypeThreeId = this.carTypes[2].car_type_id;
        this.carTypeFourId = this.carTypes[3].car_type_id;
        this.api.hideLoading();
      }
      
    },(err:any)=>{
      console.log('Error',err);
      this.api.hideLoading();
    })
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
      car_id: car_id,
      user_id: this.checkUser.appUserId
    }
    this.api.sendRequest('getCarsById',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('api response:',res);
      if(res.status == 'success'){
        this.api.carDataById = res.data;
        // if(!res.data.favourite_status){
        //   console.log("Favorite status not found");
        //   this.api.favorite_status = false;
        // }
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
    }else if(itemVal == 'Sports'){
      this.pickups = [];
      this.item1 = false;
      this.item2 = true;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      
      this.api.showLoading();
        let data = {
          car_type_id: this.carTypeOneId
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
    }else if(itemVal == 'Luxury'){
      this.pickups = [];
      this.item1 = false;
      this.item2 = false;
      this.item3 = true;
      this.item4 = false;
      this.item5 = false;

      this.api.showLoading();
        let data = {
          car_type_id: this.carTypeTwoId
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
    }else if(itemVal == 'Pickup'){
      this.pickups = [];
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = true;
      this.item5 = false;

      this.api.showLoading();
        let data = {
          car_type_id: this.carTypeThreeId
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
    }else if(itemVal == 'SUV'){
      this.pickups = [];
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = true;

      this.api.showLoading();
        let data = {
          car_type_id: this.carTypeFourId
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
