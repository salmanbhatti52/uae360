import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-account-popup',
  templateUrl: './delete-account-popup.page.html',
  styleUrls: ['./delete-account-popup.page.scss'],
})
export class DeleteAccountPopupPage implements OnInit {

  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
  }
  justCloseModal(){
    return this.modalCtrlr.dismiss(null, 'closeModal');
  }
  deleteAccount(){
    return this.modalCtrlr.dismiss('delete my account', 'delete_account');
  }
}
