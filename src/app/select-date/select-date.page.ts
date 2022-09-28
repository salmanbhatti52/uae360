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
  

  constructor(public modalCtrlr:ModalController) { }

  ngOnInit() {
  }
  formattedString(){
    const formattedString = format(parseISO(this.date), 'dd MMM, yyyy');
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
