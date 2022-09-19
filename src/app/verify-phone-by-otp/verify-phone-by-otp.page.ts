import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-phone-by-otp',
  templateUrl: './verify-phone-by-otp.page.html',
  styleUrls: ['./verify-phone-by-otp.page.scss'],
})
export class VerifyPhoneByOtpPage implements OnInit {
  otp:Number;
  otp_active = false;
  constructor(public location:Location,
    public router:Router) { }

  ngOnInit() {
  }
  onOtpChange(otp){
    this.otp_active = true;
    this.otp = otp;
    console.log(this.otp);
  }
  goBack(){
    this.location.back();
  }
  gotoTermsAndServices(){
    this.router.navigate(['/terms-and-services']);
  }

}
