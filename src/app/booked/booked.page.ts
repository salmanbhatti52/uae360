import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-booked',
  templateUrl: './booked.page.html',
  styleUrls: ['./booked.page.scss'],
})
export class BookedPage implements OnInit {

  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalCtrlr.dismiss();
  }
}
