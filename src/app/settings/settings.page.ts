import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  english_language = true;
  arabic_language = false;
  constructor(public navCtrlr:NavController) { }

  ngOnInit() {
  }
  changeLanguage(){
    if(this.english_language == true){
      this.english_language = false;
      this.arabic_language = true;
    }else if (this.arabic_language == true){
      this.arabic_language = false;
      this.english_language = true;
    }else{
      
    }
  }
  goForChangePassword(){
    this.navCtrlr.navigateRoot('change-password');
  }
  goForPaymentDetails(){
    this.navCtrlr.navigateRoot('saved-payment-methods');
  }
}
