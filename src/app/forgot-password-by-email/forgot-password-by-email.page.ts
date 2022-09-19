import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-forgot-password-by-email',
  templateUrl: './forgot-password-by-email.page.html',
  styleUrls: ['./forgot-password-by-email.page.scss'],
})
export class ForgotPasswordByEmailPage implements OnInit {
  activateEmailField = false;
  constructor(public router:Router,
    public location:Location) { }

  ngOnInit() {
  }
  activate(){
    this.activateEmailField = true;
  }
  gotoOtpByEmail(){
    this.router.navigate(['/otp-by-email']);
  }
  goBack(){
    this.location.back();
  }
}
