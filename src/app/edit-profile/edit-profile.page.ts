import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
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
  profileImg = '';
  base64String: string;
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

  async addNewProfile(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt
    });
    console.log(image.base64String);
    this.profileImg = `data:image/jpeg;base64,${image.base64String}`
    this.base64String = image.base64String;
  }
}
