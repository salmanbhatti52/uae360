import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { DeleteAccountPopupPage } from '../delete-account-popup/delete-account-popup.page';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  english_language = true;
  arabic_language = false;
  toggleVal: any;
  constructor(public navCtrlr: NavController,
    public checkUser: CheckUserService,
    public modalCtrlr: ModalController,
    public api: ApiService) { }

  ngOnInit() {

  }

  onChange(event) {
    console.log("Event: ", event);
    console.log(event.detail.checked);
    let toggleVal;
    if (event.detail.checked == true) {
      this.api.toggleVal = event.detail.checked
      localStorage.setItem('notificationVal', 'true');
      toggleVal = 'Yes'
    } else {
      this.api.toggleVal = event.detail.checked
      localStorage.setItem('notificationVal', 'false');
      toggleVal = 'No'
    }
    let data = {
      user_id: this.checkUser.appUserId,
      notifications: toggleVal
    }
    this.api.sendRequest('updateAppUserProfileNotifications', data).subscribe((res: any) => {
      console.log("Response: ", res);
      if (res.status == 'success') {

      } else if (res.staus == 'error') {

      } else {

      }
    }, (err) => {
      console.log("Api Error: ", err);

    })

  }
  changeLanguage() {
    if (this.english_language == true) {
      this.english_language = false;
      this.arabic_language = true;
    } else if (this.arabic_language == true) {
      this.arabic_language = false;
      this.english_language = true;
    } else {

    }
  }
  goForChangePassword() {
    this.navCtrlr.navigateForward('change-password');
  }
  goForPaymentDetails() {
    this.navCtrlr.navigateForward('saved-payment-methods');
  }
  editProfile() {
    // this.navCtrlr.navigateForward('edit-profile');
    this.navCtrlr.navigateForward('profile');
  }
  async deleteAccountModal() {
    const modal = await this.modalCtrlr.create({
      component: DeleteAccountPopupPage,
      showBackdrop: true,
      cssClass: 'delete_account'
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role == 'delete_account') {
      const response = data;
      console.log(response);
    }
  }
}
