import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup,Validators,FormBuilder,FormControl } from '@angular/forms';
import { isPlatform, MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Capacitor } from '@capacitor/core';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { Plugins } from 'protractor/built/plugins';
import { HttpClient } from '@angular/common/http';
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
  googleUserData:any;
  localUserData = {
    profile_pic: "",
    username:'',
    location: '',
    email:'',
    about:''
  };
  token: any;
  constructor(public  location:Location,
    public router:Router,
    public menuCtrl:MenuController,
    private fb:FormBuilder,
    public api:ApiService,
    public checkUser:CheckUserService,
    public appComponent:AppComponent,
    public http:HttpClient) {
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
         // this.api.presentToast('Success! Welcome')
        localStorage.setItem('appUserId',res.data.appUserId);
        console.log('appUserId',res.data.appUserId);
        this.checkUser.appUserId = res.data.appUserId;
        // =============localUserData fetch===================
        this.localUserData.profile_pic = res.data.profile_pic;
        this.localUserData.username = res.data.username;
        this.localUserData.location = res.data.location;
        this.localUserData.email = res.data.email;
        this.localUserData.about = res.data.about;
        this.api.localUserData = this.localUserData;
        localStorage.setItem('localUserData',JSON.stringify(this.localUserData));
        
        
        // ===update appPages===========
        console.log(this.checkUser.appUserId);
        this.checkUser.checkUser();

        // =============Maybe for Learning or used in app==============
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

  // ====================signInWithFacebook===========================
  async signInWithFacebook(){
    const FACEBOOK_PERMISSIONS = [
      'email',
      'user_birthday',
      'user_photos',
      'user_gender',
    ];
    const result = await (<FacebookLoginResponse><unknown>(
      FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS })
    ));

    console.log("Result: ",result);
    if(result.accessToken && result.accessToken.userId){
      this.token = result.accessToken;
      //Login Successful.
      console.log(`Facebook access token is ${result.accessToken.token}`);  
      this.loadUserData();    
    }
  }
  loadUserData(){
    const url = 'https://graph.facebook.com/'+this.token.userId+'?fields=id,name,picture.width(720),birthday,email&access_token='+this.token.token;
    this.http.post(url, {}, {}).subscribe(res=>{
      console.log('resp=' ,res);
      
    })
  }
  // =============================================================

  // ====================signInWithGoogle==========================
  async signInWithGoogle(){
    this.googleUserData = await GoogleAuth.signIn();
    console.log('GoogleUserResponse: ',this.googleUserData);
    this.api.googleSignInResponse = this.googleUserData;
    // if(this.googleUserData.authentication.accessToken !== ''){
    //   console.log('AccessToken: ',this.googleUserData.authentication.accessToken);
    //   this.router.navigate(['/home-cars-after-login']);
    // }
    
    // let data={
    //   username: ,
    //   email: ,
    //   one_signal_id: ,
    //   google_access_token:,
    //   profile_pic: ,
    //   account_type : "SignupWithSocial",
    //   social_acc_type:"Google",
    //   password:"dummy",
    //   status:"Active",
    //   phone:"dummy",
    //   verify_code:"dummy",
    // }
    // this.api.sendRequest('signupwithsocial',data).subscribe((res:any)=>{
    //   console.log('Response: ',res);
      
    // },(err)=>{
    //   console.log("Error: ",err);
      
    // });
  }
  // async refresh(){
  //   const authCode = await GoogleAuth.refresh();
  //   console.log('refresh: ',authCode);
  // }
  // ==========================done======================================
}
