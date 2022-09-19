import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-by-email',
  templateUrl: './otp-by-email.page.html',
  styleUrls: ['./otp-by-email.page.scss'],
})
export class OtpByEmailPage implements OnInit {

  constructor(public location:Location,
    public router:Router) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  gotoSignIn(){
    this.router.navigate(['/sign-in']);
  }
}
