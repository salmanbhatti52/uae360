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

  showCategories = false;
  rentCategories = [{category:'day'},{category:'Month'}]
  categoryVal = 'day';
  
  pickups = [
    {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
    {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
    {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
    {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
    {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269}
  ]
  constructor(public router:Router,
    public api:ApiService,
    public checkUser:CheckUserService,
    public appComponent:AppComponent) { }

  displayCategories(){
    if(this.showCategories== false){
      this.showCategories = true;
    }
    else{
      this.showCategories = false;
    }
  }
  selectedCategory(val){
    console.log(val);
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
    this.api.getData('cars').subscribe((res:any)=>{
      console.log(res);
      
    },(err)=>{
      console.log(err);
      
    })
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
}
