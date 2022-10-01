import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  firstName = false;
  lastName = false;
  about = false;
  email = false;
  address = false;

  constructor(public location:Location,
    public navCtrlr:NavController ) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  activate(val){
    if( val == 'first_name'){
      this.firstName = true;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = false;
    }
    else if( val == 'last_name'){
      this.firstName = false;
      this.lastName = true;
      this.about = false;
      this.email = false;
      this.address = false;
    }
    else if( val == 'about'){
      this.firstName = false;
      this.lastName = false;
      this.about = true;
      this.email = false;
      this.address = false;
    }
    else if( val == 'email'){
      this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = true;
      this.address = false;
    }
    else if( val == 'address'){
      this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = true;
    }
    else{

    }
  }

  updateProfile(){
    this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = false;
    this.navCtrlr.navigateRoot('settings');
  }
}
