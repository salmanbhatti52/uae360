import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';

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
  
  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 4.4,
    // spaceBetween : 9,
  };
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.4,
    spaceBetween : 9,
  };
  showCategories = false;
  rentCategories = [{category:'Day'},{category:'Month'}]
  categoryVal = 'Day';
  // category
  
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

  displayCategories(car_id){
    if(car_id !=null){

    }
    if(car_id !=null){
      this.showCategories = true;
    }
    else{
      this.showCategories = false;
    }
  }
  selectedCategory(val,id){
    console.log(val);
    console.log('iiiii',id);
    this.selectedCarID = id
    console.log('fffff',this.selectedCarID);
    this.categoryVal = val;
  }
  ngOnInit() {
    console.log(this.checkUser.appUserId);
    
    this.checkUser.checkUser();
    console.log(this.checkUser.appPages);
    this.appComponent.appPages = this.checkUser.appPages; 

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
        this.api.presentToast('Success!')
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
}
