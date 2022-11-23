import { Component, OnInit } from '@angular/core';
import { format, getTime, parseISO } from 'date-fns';
import { ModalController } from '@ionic/angular';
import parse from 'date-fns/parse';
@Component({
  selector: 'app-select-time',
  templateUrl: './select-time.page.html',
  styleUrls: ['./select-time.page.scss'],
})
export class SelectTimePage implements OnInit {
  selectedTime:any;
  selectedTimeForDb:any;
  dates = {
    timeForUser: '',
    timeForDB: '',
    calendarDateTimeString: ''
  }
  // minTime = format(parseISO(new getTime().toISOString()),'')
  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
    console.log(this.selectedTime);
    
  }
  formattedString(timeVal){
    this.dates.calendarDateTimeString = timeVal
    // console.log('calendarDateTimeString',this.dates.calendarDateTimeString);
    
    this.selectedTime = format(parseISO(timeVal), "hh:mm aaa");
    this.selectedTimeForDb = format(parseISO(timeVal), "HH:mm:ss");
    this.dates.timeForUser = this.selectedTime;
    this.dates.timeForDB = this.selectedTimeForDb;
  }
  done(){
    console.log(this.selectedTime);
    if(this.selectedTime != undefined){
      return this.modalCtrlr.dismiss(this.dates, 'timeSelected')
    }
  }
}
