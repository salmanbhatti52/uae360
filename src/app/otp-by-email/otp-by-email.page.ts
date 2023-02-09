import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-otp-by-email',
  templateUrl: './otp-by-email.page.html',
  styleUrls: ['./otp-by-email.page.scss'],
})
export class OtpByEmailPage implements OnInit {

  appUserId:any;
  otpValue:any;
  user_email: any;

  constructor(public location:Location,
    public router:Router,
    public api:ApiService,
    public activatedRoute:ActivatedRoute) {}

  ngOnInit(){
    this.appUserId = localStorage.getItem('appUserId');
    console.log(this.appUserId);
    this.user_email = this.activatedRoute.snapshot.params['user_email'];
    console.log('user_email: ',this.user_email);
    
  }
  onOtpChange(otp){
    console.log(otp);
    this.otpValue = otp
  }
  goBack(){
    this.location.back();
  }
  gotoSignIn(){
    console.log(this.otpValue);
    
    let data = {
      appUserId:this.appUserId,
      forgotPasswrodOtp:this.otpValue
    }
    this.api.sendRequest('verifyForgetPasswordOtp',data).subscribe((res:any)=>{
      console.log(res);
      if(res.status == 'success'){
        this.api.presentToast('Success!');
        this.router.navigate(['/set-new-password']);
      }else if(res.status == 'error'){
        this.api.presentToast(res.message);
      }else{
        
      }

    },(err)=>{
      console.log(err);
      
    })
   
  }
  getNewOtp(){
    console.log(this.user_email);
    
    let data = {
      email: this.user_email
    }
    this.api.sendRequest('forgotPasswordApi',data).subscribe((res:any)=>{
      console.log(res);
      if(res.status=='success'){
        let id = res.data.appUserId
        // this.api.presentToast('Your OTP is ' + res.data.forgotPasswrodOtp);
        // this.router.navigate(['/otp-by-email'], id);
        // localStorage.setItem('appUserId',id);
      }else if(res.status=='error'){
        this.api.presentToast(res.message);
      }else{
        
      }
    },(err)=>{
      console.log(err);
      
    })
    
  }
}
