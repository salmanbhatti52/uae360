import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup,Validators,FormBuilder,FormControl } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  angForm:FormGroup;
  showPassword=false;
  getType='password';
  activateEmailField= false;
  activatePasswordField= false;
  constructor(public  location:Location,
    public router:Router,
    public menuCtrl:MenuController,
    private fb:FormBuilder,
    public api:ApiService,
    public checkUser:CheckUserService,
    public appComponent:AppComponent) {
      this.createForm();
    
   }
   createForm(){
    this.angForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',Validators.required]
    });
   }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }
  // ionViewWillEnter(){
  //   this.menuCtrl.close();
  // }
  goBack(){
    this.router.navigate(['/home-before-login']);
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
    
    console.log(this.angForm.value.email);
    console.log(this.angForm.value.password);
    
    let data = {
      email: this.angForm.value.email,
      password: this.angForm.value.password,
    }
    this.api.sendRequest('loginHereNow',data).subscribe((res:any)=>{
      console.log(res);
      if(res.status == 'success'){
        localStorage.setItem('appUserId',res.data.appUserId);
        console.log('appUserId',res.data.appUserId);
        this.checkUser.appUserId = res.data.appUserId;
        // this.api.presentToast('Success! Welcome')
        // ===update appPages===========
        console.log(this.checkUser.appUserId);
        this.checkUser.checkUser();
        localStorage.setItem("appPagesAfterLogin", JSON.stringify(this.checkUser.appPages));
        console.log(localStorage.getItem('appPagesAfterLogin'));
        this.appComponent.appPages = JSON.parse(localStorage.getItem('appPagesAfterLogin')); 

        // =======done============
        this.router.navigate(['/home-cars-after-login']);
      }else if(res.status == 'error'){
        this.api.presentToast(res.message);
      }else{

      }
    },(error:any)=>{
      console.log(error);
      this.api.presentToast(error);
    })

    
  }
  gotoSignUp(){
    this.router.navigate(['/sign-up']);
  }
  gotoForgotPasswordByEmail(){
    this.router.navigate(['/forgot-password-by-email']);
  }
}
