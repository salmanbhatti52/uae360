import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DeleteAccountPopupPage } from '../delete-account-popup/delete-account-popup.page';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  english_language = true;
  arabic_language = false;
  toggleVal = true;
  constructor(public navCtrlr:NavController,
    public modalCtrlr:ModalController) { }

  ngOnInit() {
    
  }
  toggleNotifications(){
    if(this.toggleVal == true){
      this.toggleVal = false;
    }
    else{
      this.toggleVal = true;
    }
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
    this.navCtrlr.navigateForward('change-password');
  }
  goForPaymentDetails(){
    this.navCtrlr.navigateForward('saved-payment-methods');
  }
  editProfile(){
    this.navCtrlr.navigateForward('edit-profile');
  }
  async deleteAccountModal(){
    const modal = await this.modalCtrlr.create({
      component:DeleteAccountPopupPage,
      showBackdrop:true,
      cssClass:'delete_account'
    });
    modal.present();
    const {data, role} = await modal.onWillDismiss();
    if(role == 'delete_account'){
      const response = data;
      console.log(response);      
    }
  }
}
