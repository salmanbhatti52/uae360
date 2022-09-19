import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-terms-and-services',
  templateUrl: './terms-and-services.page.html',
  styleUrls: ['./terms-and-services.page.scss'],
})
export class TermsAndServicesPage implements OnInit {

  constructor(public location:Location,
    public router:Router) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  gotoHomeBeforeLogin(){
    this.router.navigate(['/home-before-login']);
  }
  gotoSignUp(){
    this.router.navigate(['/sign-up']);
  }
}
