import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  number:any;
  getFocus=false;
  showPassword=false;
  getType='password';
  activateUserNameField = false;
  activateEmailField= false;
  activatePasswordField= false;
  constructor(public  location:Location,public router:Router) { }

  ngOnInit() {
  }
  // =======================international phone input code =====================
  onCountryChange(event){

    console.log(event.dialCode);
    console.log(event.name);
    console.log(event.iso2);
    }
    telInputObject(obj) {
      console.log(obj);
      obj.setCountry('in');
    }
    hasError(err){
      console.log(err);
    }
    getNumber(number){
      console.log(number);
    }
    focus(){
      this.getFocus=true;
    }
  // ===========================done========================================
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
    if(val == 'userName'){
      this.activateUserNameField=true;
      this.activateEmailField= false;
      this.activatePasswordField= false;
      this.getFocus = false;
    }else if(val == 'phoneNumber'){
      this.getFocus = true;
      this.activateEmailField= false;
      this.activateUserNameField = false;
      this.activatePasswordField= false;
      
    }
    else if(val == 'email'){
      this.activateEmailField= true;
      this.activateUserNameField = false;
      this.activatePasswordField= false;
      this.getFocus = false;
    }
    else if(val == 'pwd'){
      this.activatePasswordField= true;
      this.activateEmailField= false;
      this.activateUserNameField = false;
      this.getFocus = false;
    }
    else{

    }
  }
  gotoSignIn(){
    this.router.navigate(['/sign-in']);
  }
  gotoVerifyPhoneOtp(){
    this.router.navigate(['/verify-phone-by-otp']);
  }
}
