import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {

  constructor(public location:Location,
    public navCtrlr:NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  gotoRatings(){
    this.navCtrlr.navigateRoot('ratings');
  }
}
