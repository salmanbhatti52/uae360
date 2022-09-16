import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  showPassword=false;
  getType='password';
  activateEmailField= false;
  activatePasswordField= false;
  constructor(public  location:Location) {
    
   }

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
    if(val == 'email'){
      this.activateEmailField= true;
      this.activatePasswordField= false;
    }
    else if(val == 'pwd'){
      this.activateEmailField= false;
      this.activatePasswordField= true;
    }
    else{

    }
  }
  gotoHome(){
    this.activateEmailField = false;
    this.activatePasswordField = false;
  }
}
