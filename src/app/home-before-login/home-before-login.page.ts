import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-home-before-login',
  templateUrl: './home-before-login.page.html',
  styleUrls: ['./home-before-login.page.scss'],
})
export class HomeBeforeLoginPage implements OnInit {
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
  
  showCategories = false;
  rentCategories = [{category:'Day'},{category:'Month'}]
  categoryVal = 'Day';
  
  // pickups = [
  //   {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
  //   {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
  //   {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
  //   {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
  //   {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269}
  // ]
  pickups = [];
  selectedCarID: any = 0;
  constructor(public router:Router,
    public api:ApiService,
    public checkUser:CheckUserService,
    public appComponent:AppComponent) { }

  // displayCategories(car_id){
  //   if(car_id !=null){

  //   }
  //   if(car_id !=null){
  //     this.showCategories = true;
  //   }
  //   else{
  //     this.showCategories = false;
  //   }
  // }
  // selectedCategory(val,id){
  //   console.log(val);
  //   console.log('iiiii',id);
  //   this.selectedCarID = id
  //   console.log('fffff',this.selectedCarID);
  //   this.categoryVal = val;
  // }
  ngOnInit() {
    this.checkUser.appUserId = null;
    console.log(this.checkUser.appUserId);
    
    this.checkUser.checkUser();
    console.log(this.checkUser.appPages);
    this.appComponent.appPages = this.checkUser.appPages; 
    
    this.getCarTypes();
    this.getCars();

  }

  getCars(){
    this.api.showLoading();
    this.api.getData('cars').subscribe((res:any)=>{
      this.api.hideLoading();
      console.log(res);
      if(res.status == 'success'){
        console.log(res.data);
        this.pickups = res.data;
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log(err);
      
    })
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
        // this.api.presentToast('Success!')
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
}
