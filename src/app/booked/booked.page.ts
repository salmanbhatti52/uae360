import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-booked',
  templateUrl: './booked.page.html',
  styleUrls: ['./booked.page.scss'],
})
export class BookedPage implements OnInit {

  constructor(public modalCtrlr:ModalController,
    public navCtrlr:NavController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalCtrlr.dismiss();
    this.navCtrlr.navigateRoot('bookings');
  }
}
