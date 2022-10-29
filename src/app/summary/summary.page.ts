import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
   startDate = '22-12-2020';
   endDate = '22-12-2020';
   startTime = '06:30 pm';
   endTime = '09:00 am';
  latitude: number;
  longitude: number;
  firstResult: string;

  constructor(public location:Location,
    public navCtrlr:NavController,
    public nativeGeoCoder:NativeGeocoder) { }

  ngOnInit() {
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(this.startDate);
    console.log(this.endTime);
    this.fetchLocation();
  }

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  async fetchLocation(){
    const getCurrentLocation = await Geolocation.getCurrentPosition({
      enableHighAccuracy:true
    });
    console.log('Current Location: ',getCurrentLocation);
    this.latitude = getCurrentLocation.coords.latitude;
    this.longitude = getCurrentLocation.coords.longitude;
    console.log('Latitude: ',this.latitude);
    console.log('Longitude: ',this.longitude);
    this.fetchAddress();
    
  }
  fetchAddress(){
    this.nativeGeoCoder.reverseGeocode(this.latitude,this.longitude,this.options)
    .then((result:NativeGeocoderResult[])=>{
      console.log('Result: ', result);
      console.log('Result 0: ', result[0]);
      
      this.firstResult = result[0].subAdministrativeArea + ', ' 
      + result[0].administrativeArea + ', ' + result[0].countryCode;
    },(err)=>{
      console.log('Error:', err);
      
    });
  }
  goBack(){
    this.location.back();
  }
  startPaymentProcess(){
    this.navCtrlr.navigateRoot('payment-details');
  }
}
