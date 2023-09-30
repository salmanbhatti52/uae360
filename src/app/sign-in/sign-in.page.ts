import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup,Validators,FormBuilder,FormControl } from '@angular/forms';
import { isPlatform, MenuController, NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Capacitor } from '@capacitor/core';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
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
    about:'',
    account_type:''
  };
  token: any;
  oneSignalUserId:any;
  fbUserData: Object;
  constructor(public  location:Location,
    public router:Router,
    public menuCtrl:MenuController,
    private fb:FormBuilder,
    public api:ApiService,
    public checkUser:CheckUserService,
    public appComponent:AppComponent,
    public http:HttpClient,
    public navCtrl:NavController) {
      this.createForm();
   }
   createForm(){
    this.angForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',Validators.required]
    });
   }

  ngOnInit() {
    this.oneSignalUserId = localStorage.getItem('oneSignalUserId');
    console.log('oneSignalUserId: ',this.oneSignalUserId);
    
  }
  
  goBack(){
    this.location.back()
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
        this.localUserData.account_type = res.data.account_type;
        this.api.localUserData = this.localUserData;
        localStorage.setItem('localUserData',JSON.stringify(this.localUserData));
        
        
        // ===update appPages===========
        console.log(this.checkUser.appUserId);
        this.checkUser.checkUser();

        // =============  ==============
        localStorage.setItem("appPagesAfterLogin", JSON.stringify(this.checkUser.appPages));
        console.log(localStorage.getItem('appPagesAfterLogin'));
        this.appComponent.appPages = JSON.parse(localStorage.getItem('appPagesAfterLogin')); 

        // =======done============
        this.navCtrl.navigateRoot('home-cars-after-login');
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
    this.api.presentToast('Accessing Your Facebook Account');
    await (<FacebookLoginResponse><unknown>(
      FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS }).then((res:any)=>{
        
        const result = res;
        console.log("Result: ",result);

        if(result.accessToken && result.accessToken.userId){
          this.token = result.accessToken;
          //Login Successful.
          this.api.presentToast('Facebook Account Identified');
          console.log(`Facebook access token is ${result.accessToken.token}`);  
          this.loadUserData();    
        }

      },(err)=>{
        console.log("Error: ",err);
        this.api.presentToast(err);
        
      })
    ));
    
  }

  loadUserData(){

    const url = 'https://graph.facebook.com/'+this.token.userId+'?fields=id,name,picture.width(720),birthday,email&access_token='+this.token.token;
    this.api.showLoading();
    this.http.post(url, {}, {}).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('Response: ' ,res);
      this.fbUserData = res;
      
      let data={
        username: res.name,
        email: res.email,
        one_signal_id: this.oneSignalUserId,
        google_access_token: this.token.token,
        profile_pic: res.picture.data.url,
        account_type : "SignupWithSocial",
        social_acc_type:"Facebook",
        password:"dummy",
        status:"Active",
        phone:"dummy",
        verify_code:"dummy",
      }
      if(data.email == undefined){
        data.email = "dummy@email.com" 
      }
      //remove it later-----------------------
      console.log("Facebook User Data: ",data);
      
      localStorage.setItem('facebookUserData',JSON.stringify(data));
      //------------------------------------

      
      this.api.showLoading();
      this.api.sendRequest('signupwithsocial',data).subscribe((res:any)=>{
        this.api.hideLoading();
        console.log('Response: ',res);
        if(res.status == 'success'){
            // this.api.presentToast('Success! Welcome')
          localStorage.setItem('appUserId',res.data[0].appUserId);
          console.log('appUserId',res.data[0].appUserId);
          this.checkUser.appUserId = res.data[0].appUserId;
          // =============localUserData fetch===================
          this.localUserData.profile_pic = res.data[0].profile_pic;
          this.localUserData.username = res.data[0].username;
          this.localUserData.location = res.data[0].location;
          this.localUserData.email = res.data[0].email;
          this.localUserData.about = res.data[0].about;
          this.localUserData.account_type = res.data[0].account_type;
          this.api.localUserData = this.localUserData;
          localStorage.setItem('localUserData',JSON.stringify(this.localUserData));
          
          
          // ======update appPages===========
          console.log(this.checkUser.appUserId);
          this.checkUser.checkUser();

          // =============  ==============
          localStorage.setItem("appPagesAfterLogin", JSON.stringify(this.checkUser.appPages));
          console.log(localStorage.getItem('appPagesAfterLogin'));
          this.appComponent.appPages = JSON.parse(localStorage.getItem('appPagesAfterLogin')); 

          // =======done============
        this.navCtrl.navigateRoot('home-cars-after-login');
      }
        
      },(err)=>{
        this.api.hideLoading();
        console.log("Error: ",err);
        this.api.presentToast(err);
      });
      
      
    },(err)=>{
      this.api.hideLoading();
      console.log("Error: ",err);
      this.api.presentToast(err);
    })
  }
  // =============================================================

  // ====================signInWithGoogle==========================
  async signInWithGoogle(){
    // this.api.showLoading();
    this.api.presentToast('Accessing Your Google Account');
    await GoogleAuth.signIn().then((res:any)=>{
      // this.api.hideLoading();
      this.api.presentToast('Google Account Identified');
      console.log('GoogleUserResponse: ',res);
      this.googleUserData = res;
    },(err)=>{
      // this.api.hideLoading();
      this.api.presentToast(err);
      console.log("Error: ",err);
      
    });
    console.log('GoogleUserResponse: ',this.googleUserData);
    this.api.googleSignInResponse = this.googleUserData;
    
    let data={
      username: this.googleUserData.displayName,
      email: this.googleUserData.email,
      one_signal_id: this.oneSignalUserId ,
      google_access_token:this.googleUserData.authentication.accessToken,
      profile_pic: this.googleUserData.imageUrl,
      account_type : "SignupWithSocial",
      social_acc_type:"Google",
      password:"dummy",
      status:"Active",
      phone:"dummy",
      verify_code:"dummy",
    }
    //remove it later-----------------------
    console.log("Google User Data: ",data);
    localStorage.setItem('googleUserData',JSON.stringify(data));
    //------------------------------------
    this.api.showLoading();
    this.api.sendRequest('signupwithsocial',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('Response: ',res);
      if(res.status=='success'){
        // this.api.presentToast('Success! Welcome')
        localStorage.setItem('appUserId',res.data[0].appUserId);
        console.log('appUserId',res.data[0].appUserId);
        this.checkUser.appUserId = res.data[0].appUserId;
        // =============localUserData fetch===================
        this.localUserData.profile_pic = res.data[0].profile_pic;
        this.localUserData.username = res.data[0].username;
        this.localUserData.location = res.data[0].location;
        this.localUserData.email = res.data[0].email;
        this.localUserData.about = res.data[0].about;
        this.localUserData.account_type = res.data[0].account_type;
        this.api.localUserData = this.localUserData;
        localStorage.setItem('localUserData',JSON.stringify(this.localUserData));
        
        
        // ======update appPages===========
        console.log(this.checkUser.appUserId);
        this.checkUser.checkUser();

        // =============  ==============
        localStorage.setItem("appPagesAfterLogin", JSON.stringify(this.checkUser.appPages));
        console.log(localStorage.getItem('appPagesAfterLogin'));
        this.appComponent.appPages = JSON.parse(localStorage.getItem('appPagesAfterLogin')); 

        // =======done============
        this.navCtrl.navigateRoot('home-cars-after-login');
      }
      
    },(err)=>{
      this.api.hideLoading();
      this.api.presentToast(err);
      console.log("Error: ",err);
      
    });
  }
  
  // ==========================done======================================
}
