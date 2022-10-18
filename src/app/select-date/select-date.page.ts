import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.page.html',
  styleUrls: ['./select-date.page.scss'],
})
export class SelectDatePage implements OnInit {
  date:any;
  minDate = format(parseISO(new Date().toISOString()),'yyyy-MM-dd');
  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
    console.log(this.minDate);
    
  }
  formattedString(dateVal){
    console.log('date parameter:',dateVal);
    
    const formattedString = format(parseISO(dateVal), 'dd MMM, yyyy');
    // =====dashed date for summary page=====
    const dashedDate = format(parseISO(dateVal), 'dd-MM-yyyy');
    console.log(dashedDate);
    // ============done================
    this.date=formattedString;
    console.log(this.date);
  }
  done(){
    console.log(this.date);
    if(this.date != undefined){
      return this.modalCtrlr.dismiss(this.date, 'dateSelected')
    }
    
  }

}
