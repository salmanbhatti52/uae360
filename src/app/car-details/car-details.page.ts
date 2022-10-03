import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  showCategories = false;
  rentCategories = [{category:'day'},{category:'Month'}]
  categoryVal = 'day';
  constructor(public location:Location,
    public navCtrlr:NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
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
  gotoRatings(){
    this.navCtrlr.navigateRoot('ratings');
  }
  startCarBooking(){
    this.navCtrlr.navigateRoot('car-booking');
  }
  startChatwithOwner(){
    this.navCtrlr.navigateRoot('message-owner-side');
  }
}
