import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectDatePage } from '../select-date/select-date.page';
import { SelectTimePage } from '../select-time/select-time.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.page.html',
  styleUrls: ['./car-booking.page.scss'],
})
export class CarBookingPage implements OnInit {
startDate:any; 
endDate:any;
startTime:any; 
endTime:any;

  constructor(public modalCtrlr:ModalController,
    public location:Location,
    public navCtrlr:NavController) { }

  ngOnInit() {
    console.log(this.startDate);
  }
  goBack(){
    this.location.back();
  }
  async openDateModal(dateVal){
    const modal = await this.modalCtrlr.create({
      component: SelectDatePage,
      showBackdrop:true,
      cssClass:'date_modal',
    });
    modal.present();
    const {data, role} = await modal.onWillDismiss();
    if(role === 'dateSelected'){
      console.log(data);
      if(dateVal == 'startDate'){
        this.startDate = data;
        console.log('startDate==',this.startDate);
      }
      else if( dateVal == 'endDate'){
        this.endDate = data;
        console.log('endDate==',this.endDate);
      }
      else{

      }
      
      
    }
  }
  async openTimeModal(timeVal){
    const modal = await this.modalCtrlr.create({
      component: SelectTimePage,
      showBackdrop: true,
      cssClass: 'time_modal',
    });
    modal.present();

    const {data, role} = await modal.onWillDismiss();
    if (role === 'timeSelected'){
      console.log(data);
      if(timeVal == 'startTime'){
        this.startTime = data;
        console.log('startTime==',this.startTime);
      }
      else if( timeVal == 'endTime'){
        this.endTime = data;
        console.log('endTime==',this.endTime);
      }
      else{
        
      }
      
    }
  }

  showSummary(){
    localStorage.setItem('startDate',this.startDate);
    localStorage.setItem('endDate',this.endDate);
    localStorage.setItem('startTime',this.startTime);
    localStorage.setItem('endTime',this.endTime);
    console.log(localStorage.getItem('startDate'));
    console.log(localStorage.getItem('endDate'));
    console.log(localStorage.getItem('startTime'));
    console.log(localStorage.getItem('endTime'));
    
    this.navCtrlr.navigateRoot('summary');
  }
}
