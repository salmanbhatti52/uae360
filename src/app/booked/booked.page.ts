import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-booked',
  templateUrl: './booked.page.html',
  styleUrls: ['./booked.page.scss'],
})
export class BookedPage implements OnInit {

  constructor(public modalCtrlr:ModalController,
    public navCtrlr:NavController,
    public api:ApiService) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalCtrlr.dismiss();
    this.api.showNewBookings = 'true';
    this.navCtrlr.navigateForward('bookings');
  }
}
