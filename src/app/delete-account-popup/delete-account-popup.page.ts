import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-delete-account-popup',
  templateUrl: './delete-account-popup.page.html',
  styleUrls: ['./delete-account-popup.page.scss'],
})
export class DeleteAccountPopupPage implements OnInit {

  constructor(public modalCtrlr:ModalController,
    public checkUser:CheckUserService,
    public navCtrlr:NavController) { }

  ngOnInit() {
  }
  justCloseModal(){
    return this.modalCtrlr.dismiss(null, 'closeModal');
  }
  deleteAccount(){
    this.checkUser.appUserId = null;
    localStorage.removeItem('appUserId');
    console.log('appUserId removed');
    console.log(this.checkUser.appUserId);
    this.navCtrlr.navigateRoot('sign-in');
    return this.modalCtrlr.dismiss('delete my account', 'delete_account');
  }
}
