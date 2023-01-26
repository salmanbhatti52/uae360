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
import { Share } from '@capacitor/share';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-home-cars-after-login',
  templateUrl: './home-cars-after-login.page.html',
  styleUrls: ['./home-cars-after-login.page.scss'],
})
export class HomeCarsAfterLoginPage implements OnInit {
  totalNotifications:Number;
  interval:any;
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
  // public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  // public results = [...this.data];
  result = [];
  showContent = true;
  pickups = [];
  constructor(public router:Router,
    public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public appComponent:AppComponent,
    public api:ApiService,
    public menuCtrlr:MenuController,
    public nativeGeoCoder: NativeGeocoder
    ) {}

  ngOnInit() {
   // =======update appPages===========
   console.log('AppUserId: ',this.checkUser.appUserId);
   this.checkUser.checkUser();
   console.log("AppPages: ",this.checkUser.appPages);
   this.appComponent.appPages = this.checkUser.appPages;
   // =======done============

  // ==============localUserData====================
 
   this.api.localUserData = JSON.parse(localStorage.getItem('localUserData'));
    console.log('localUserData: ',this.api.localUserData);
    
  // ================================================
   this.getCarTypes();
   this.getCars();
   this.fetchLocation();
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      this.item1 = true;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      this.ngOnInit();
      this.ionViewWillEnter();
      event.target.complete();
    }, 2000);
  };

  ionViewWillEnter(){
    // ================notifications status check===================
    // console.log('notificationVal: ',localStorage.getItem('notificationVal'));
    let toggleVal =  localStorage.getItem('notificationVal');
    if(toggleVal == 'true'){
      this.api.toggleVal = true;
    }else if(toggleVal == 'false'){
      this.api.toggleVal = false;
    }else{
      this.api.toggleVal = true;
    }
    
    console.log('api.toggleVal',this.api.toggleVal);
    // ====================done=====================

    if(this.result.length > 0){
      this.showContent = false;
    }else{
      this.showContent = true;
    }
    
    this.getNotifications();
    this.getCars();
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
  handleChange(event){
    this.result = []
    console.log('Event: ',event);
    
    const query = event.target.value.toLowerCase();
    console.log('query: ',query);

    if(query == ''){
      this.showContent = true;
      
    }
    if(query != ''){
      let data = {
        users_customers_id:this.checkUser.appUserId,
        keyword:query
      };
      this.api.showLoading();
      this.api.sendRequest('getCarsByFiltersByName',data).subscribe((res:any)=>{
        console.log("Response: ",res);
        this.api.hideLoading();
        if(res.status == 'success'){
          this.showContent = false;
          this.result = res.data;

        }else if(res.status == 'error'){
          if(res.message != 'Keyword Required'){
            this.api.presentToast(res.message);
          }
        }else{
  
        }
        
      },(err)=>{
        this.api.hideLoading();
        console.log("API Call Error: ",err);
        
      })
    }
    
  }
  
  clearResult(){
    this.result = []
    this.showContent = true;
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
    // this.api.showLoading();
    this.api.sendRequest('carType').subscribe((res:any)=>{
      // this.api.hideLoading();
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
        
      }
      
    },(err:any)=>{
      console.log('Error',err);
      // this.api.hideLoading();
    })
  }

  getCars(){
    let data = {
      user_id: this.checkUser.appUserId
    }
    this.api.showLoading();
    this.api.sendRequest('cars',data).subscribe((res:any)=>{
      console.log(res);
      if(res.status == 'success'){
        this.pickups = res.data;
        this.api.allCars = res.data;
        console.log("api.allCars: ",this.api.allCars);
        
      }
      // else if(res.staus == 'error'){
      //   this.api.presentToast(res.message);
      // }
      setTimeout(() => {
        this.api.hideLoading();
      }, 2000);
    },(err)=>{
      setTimeout(() => {
        this.api.hideLoading();
      }, 2000);
      console.log(err);
      
    })
  }
  gotoFilter(){
    this.router.navigate(['/filters']);
  }
  gotoCarDetails(car_id){
    let data = {
      car_id: car_id,
      user_id: this.checkUser.appUserId
    }
    this.api.showLoading();
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
    }else if(itemVal == 'Sports'){
      this.pickups = [];
      this.item1 = false;
      this.item2 = true;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      
        let data = {
          car_type_id: this.carTypeOneId
        }
        this.api.showLoading();
        this.api.sendRequest('getCarsByCarType',data).subscribe((res:any)=>{
          this.api.hideLoading();
          console.log(res);
          if(res.status == 'success'){
            
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

      
        let data = {
          car_type_id: this.carTypeTwoId
        }
        this.api.showLoading();
        this.api.sendRequest('getCarsByCarType',data).subscribe((res:any)=>{
          this.api.hideLoading();
          console.log(res);
          if(res.status == 'success'){
            
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

      
        let data = {
          car_type_id: this.carTypeThreeId
        }
        this.api.showLoading();
        this.api.sendRequest('getCarsByCarType',data).subscribe((res:any)=>{
          this.api.hideLoading();
          console.log(res);
          if(res.status == 'success'){
            
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

      
        let data = {
          car_type_id: this.carTypeFourId
        }
        this.api.showLoading();
        this.api.sendRequest('getCarsByCarType',data).subscribe((res:any)=>{
          this.api.hideLoading();
          console.log(res);
          if(res.status == 'success'){
            
            this.pickups = res.data;
          }
        },(err)=>{
          this.api.hideLoading();
          console.log(err);
          
        })
    }else{
      
    }
  }

  async inviteOthers(){
    await Share.share({
      title: 'Book Cars Online at 360UAE',
      text: 'Really awesome cars you can book',
      url: 'https://dubai360.com/',
      dialogTitle: 'Share with buddies',
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
}
