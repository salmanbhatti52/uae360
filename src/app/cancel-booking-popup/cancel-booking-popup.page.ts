import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-cancel-booking-popup',
  templateUrl: './cancel-booking-popup.page.html',
  styleUrls: ['./cancel-booking-popup.page.scss'],
})
export class CancelBookingPopupPage implements OnInit {
  cancel:string
  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
  }
  justCloseModal(){
    return this.modalCtrlr.dismiss(null, 'closeModal');
  }
  cancelBooking(){
    return this.modalCtrlr.dismiss('Booking Canceled', 'cancelBooking');
  }
}
