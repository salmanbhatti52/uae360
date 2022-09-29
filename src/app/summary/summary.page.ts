import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
   startDate = '22-12-2020';
   endDate = '22-12-2020';
   startTime = '06:30 pm';
   endTime = '09:00 am'
  constructor(public location:Location,
    public navCtrlr:NavController) { }

  ngOnInit() {
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(this.startDate);
    console.log(this.endTime);
    
  }
  goBack(){
    this.location.back();
  }
  startPaymentProcess(){
    this.navCtrlr.navigateRoot('payment-details');
  }
}
