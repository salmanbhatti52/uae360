import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-otp-by-email',
  templateUrl: './otp-by-email.page.html',
  styleUrls: ['./otp-by-email.page.scss'],
})
export class OtpByEmailPage implements OnInit {

  appUserId:any;
  otpValue:any;

  constructor(public location:Location,
    public router:Router,
    public api:ApiService) {}

  ngOnInit(){
    this.appUserId = localStorage.getItem('appUserId');
    console.log(this.appUserId);
    
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
}
