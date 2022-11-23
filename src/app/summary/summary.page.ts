import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  startDate = '';
  endDate = '';
  startTime = '';
  endTime = '';
  totalCost = '';
  getLocation = ''
  bookingResponse:any;
  carData = [];
  vehicleName: any;
  drivingLicense:any;

  constructor(
    public location:Location,
    public navCtrlr:NavController,
    public api:ApiService) { }

  ngOnInit() {
    this.carData = this.api.carDataById;
    this.bookingResponse = this.api.bookingResponse;
    if(this.bookingResponse !== undefined){
      this.startDate = this.bookingResponse.start_date;
      this.endDate = this.bookingResponse.end_date;
      this.startTime = this.bookingResponse.start_time;
      this.endTime = this.bookingResponse.end_time;
      this.totalCost = this.bookingResponse.total_cost;
      this.drivingLicense = this.bookingResponse.license_img;
      this.getLocation = this.bookingResponse.location;
    }
    if (this.carData != undefined) {
      for (let data of this.carData) {
        this.vehicleName = data.vehical_name
      }
    }

    
  }
  
  goBack(){
    this.location.back();
  }
  startPaymentProcess(){
    this.navCtrlr.navigateRoot('payment-details');
  }
}
