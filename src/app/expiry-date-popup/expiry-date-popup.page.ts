import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-expiry-date-popup',
  templateUrl: './expiry-date-popup.page.html',
  styleUrls: ['./expiry-date-popup.page.scss'],
})
export class ExpiryDatePopupPage implements OnInit {
  date: any;
  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
  }
  formattedString(value){
    const formattedString = format(parseISO(value), 'dd MMM, yyyy');
    // =====dashed date for summary page=====
    const dashedDate = format(parseISO(value), 'dd-MM-yyyy');
    this.date = dashedDate;
    console.log(dashedDate);
    // ============done================
    this.date=formattedString;
    console.log(this.date);
    return this.modalCtrlr.dismiss(dashedDate, 'expiry_date');
  }
  cancel(ev){
    this.modalCtrlr.dismiss(null, 'cancel');
  }
}
