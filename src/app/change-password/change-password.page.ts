import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  showPassword=false;
  getType='password';
  oldPasswordField= false;
  newPasswordField= false;
  confirmPasswordField= false;
  constructor(public location:Location,
    public navCtrlr:NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  toggleGetType(){
    if(this.getType == 'password'){
      this.getType = 'text';
      this.showPassword = true;
    }else{
      this.getType = 'password';
      this.showPassword = false;
    }
  }
  activate(val){
    if(val == 'old_pwd'){
      this.oldPasswordField = true;
      this.newPasswordField= false;
      this.confirmPasswordField= false;
    }
    else if(val == 'new_pwd'){
      this.oldPasswordField = false;
      this.newPasswordField= true;
      this.confirmPasswordField= false;
    }
    else if(val == 'confirm_new_pwd'){
      this.oldPasswordField = false;
      this.newPasswordField= false;
      this.confirmPasswordField= true;
    }
    else{

    }
  }
  updatePassword(){
    this.oldPasswordField = false;
    this.newPasswordField= false;
    this.confirmPasswordField= false;
    this.navCtrlr.navigateRoot('settings');
  }
}
