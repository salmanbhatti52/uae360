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
  // minTime = format(parseISO(new getTime().toISOString()),'')
  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
    console.log(this.selectedTime);
    
  }
  formattedString(timeVal){
    console.log('parameter time:',timeVal);
    
    this.selectedTime = format(parseISO(timeVal), "hh:mm aaa");
    console.log(this.selectedTime);
  }
  done(){
    console.log(this.selectedTime);
    if(this.selectedTime != undefined){
      return this.modalCtrlr.dismiss(this.selectedTime, 'timeSelected')
    }
  }
}
