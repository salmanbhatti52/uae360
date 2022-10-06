import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

  constructor(public location:Location,
    public navCtrlr:NavController,
    public checkUser:CheckUserService) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  gotoHomeAfterLogin(){
    if(this.checkUser.appUserId == null){
      this.navCtrlr.navigateRoot('home-before-login');
    }
    else if(this.checkUser.appUserId != null){
      this.navCtrlr.navigateRoot('home-cars-after-login');
    }
    else{
      
    }
    
  }
}
