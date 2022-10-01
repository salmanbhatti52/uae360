import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

  constructor(public location:Location,
    public navCtrlr:NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  gotoHomeAfterLogin(){
    this.navCtrlr.navigateRoot('home-cars-after-login');
  }
}
