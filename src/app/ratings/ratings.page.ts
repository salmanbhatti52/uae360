import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {
  carData: any;
  carRatings: any;
  imageUrlString = 'https://360uae.eigix.net/public/';
  constructor(public location:Location,
    public navCtrlr:NavController,
    public api:ApiService) { }

  ngOnInit() {
    this.carData = this.api.carDataById;
    if(this.carData !== undefined){
      console.log('CarDataRatingsPage: ',this.carData);
      
      for(let data of this.carData){
        if(data.cars_ratings.length > 0){
          this.carRatings = data.cars_ratings;
        }

      }
      console.log("My carRatings array: ",this.carRatings);
      
    }
    
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
