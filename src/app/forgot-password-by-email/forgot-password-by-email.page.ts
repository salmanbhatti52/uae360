import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-forgot-password-by-email',
  templateUrl: './forgot-password-by-email.page.html',
  styleUrls: ['./forgot-password-by-email.page.scss'],
})
export class ForgotPasswordByEmailPage implements OnInit {
  angForm:FormGroup;
  activateEmailField = false;
  constructor(public router:Router,
    public location:Location,
    private fb:FormBuilder,
    public api:ApiService) { 
      this.createForm();
    }
  
  createForm(){
    this.angForm = this.fb.group({
      email:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]]
    });
  }
  ngOnInit() {
  }
  activate(){
    this.activateEmailField = true;
  }
  gotoOtpByEmail(){
    console.log(this.angForm.value.email);
    
    let data = {
      email: this.angForm.value.email
    }
    this.api.sendRequest('forgotPasswordApi',data).subscribe((res:any)=>{
      console.log(res);
      if(res.status=='success'){
        let id = res.data.appUserId
        // this.api.presentToast('Your OTP is ' + res.data.forgotPasswrodOtp);
        this.router.navigate(['/otp-by-email',{
          user_email: this.angForm.value.email,
        }]);
        // this.router.navigate(['/otp-by-email'], id);
        localStorage.setItem('appUserId',id);
      }else if(res.status=='error'){
        this.api.presentToast(res.message);
      }else{
        
      }
    },(err)=>{
      console.log(err);
      
    })
    
  }
  goBack(){
    this.location.back();
  }
}
