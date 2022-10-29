import { Component, OnInit } from '@angular/core';
import { differenceInBusinessDays, format, parseISO} from 'date-fns';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.page.html',
  styleUrls: ['./select-date.page.scss'],
})
export class SelectDatePage implements OnInit {
  date:any;
  datesArray = [];
  minDate = format(parseISO(new Date().toISOString()),'yyyy-MM-dd');

  // isWeekday = (dateString: string) => {
  //   const date = new Date(dateString);
  //   const utcDay = date.getUTCDay();
    
  //   /**
  //    * Date will be enabled if it is not
  //    * Sunday or Saturday
  //    */
  //   return utcDay !== 0 && utcDay !== 6;
  // };
  constructor(public modalCtrlr:ModalController,
    public api:ApiService) { }

  ngOnInit() {
    console.log(this.minDate);
    this.datesArray = this.api.datesToDisable;
    console.log('DatesArray: ',this.datesArray);
    // ===============dates==================
    for(let d of this.datesArray){
      const date = format(parseISO(new Date(d).toISOString()),'yyyy-MM-dd');
      console.log('Day: ',date);
      
    }
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
