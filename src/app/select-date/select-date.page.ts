import { Component, OnInit } from '@angular/core';
import {format, parseISO,addDays,isDate, getDate,getMonth,getYear} from 'date-fns';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.page.html',
  styleUrls: ['./select-date.page.scss'],
})
export class SelectDatePage implements OnInit {
  dateRange:any;
  date:any;
  datesArray = [];
  minDate = format(parseISO(new Date().toISOString()),'yyyy-MM-dd');
  arraymonth: any;
  matched = false;
  bookedDates = [];
  bookedStDate:any;
  bookedEndDate:any;

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  
  constructor(public modalCtrlr:ModalController,
    public api:ApiService) { }

  ngOnInit() {
    this.datesArray = this.api.datesToDisable;
    this.bookedDates = this.api.bookedDates;
    console.log('Dates to disable: ',this.datesArray);
    console.log('Booked Dates: ',this.datesArray);
     
  }
  // onChangeDate(ev){
  //   console.log('hello');
    
  //   console.log(ev);
    
  // }

  getStartHours(){
    console.log('getStartHours',this.dateRange);
    if (true) {

     let sDate = format(parseISO(new Date(this.dateRange?.from).toISOString()),'yyyy-MM-dd');
    
      console.log('start date: ',sDate);

    
     let eDate = format(parseISO(new Date(this.dateRange?.to).toISOString()),'yyyy-MM-dd'); 
     console.log('end date: ',eDate);
     
    }
  }

  formattedString(dateVal){
    const formattedString = format(parseISO(dateVal), 'dd MMM, yyyy');
    console.log('DateValues: ',dateVal);
    
    // ==============to fectch booked dates=================
    
    for(let d of this.datesArray){
      
      // ================dates formatting=============
      const arrayDate = format(parseISO(new Date(d).toISOString()),'yyyy-MM-dd');
      const newFormat = format(parseISO(arrayDate), 'dd MMM, yyyy');
      //==================done===================
      
      if(formattedString === newFormat){
        const formattedDate = parseISO(new Date(formattedString).toISOString());
        console.log('Formatted Date: ',formattedDate);
        
        let dateValue = getDate(formattedDate);
        
        let dateMonth =  getMonth(formattedDate);
        dateMonth++;
       
        let dateYear =  getYear(formattedDate);

        for(let d of this.bookedDates){
          const st_Date = parseISO(new Date(d.start_date).toISOString());
          const end_Date = parseISO(new Date(d.end_date).toISOString());
          
          for(let stDate:any = st_Date; stDate<=end_Date; stDate = addDays(stDate,1)){
            let bookedDateValue = getDate(stDate);

            let bookedMonth =  getMonth(stDate);
            bookedMonth++;
            
            let bookedYear =  getYear(stDate);
            
            if(dateValue == bookedDateValue && dateMonth == bookedMonth && dateYear == bookedYear){
              this.bookedStDate = st_Date;
              this.bookedEndDate = end_Date;
              // ================dates formatting=============
              const matchedStartDate = format(parseISO(new Date(this.bookedStDate).toISOString()),'yyyy-MM-dd');
              this.bookedStDate = format(parseISO(matchedStartDate), 'dd MMM, yyyy');
              
              const matchedEndDate = format(parseISO(new Date(this.bookedEndDate).toISOString()),'yyyy-MM-dd');
              this.bookedEndDate = format(parseISO(matchedEndDate), 'dd MMM, yyyy');
              //==================done===================

            }
          }
          
        }
        this.matched = true;
        
        break;
      }
      else if(formattedString !== newFormat){
        this.matched = false;
      }else{

      }
    }
    
    if(this.matched == false){
      this.date = formattedString;  
    }
  }
  done(){
    console.log(this.date);
    if(this.date != undefined){
      return this.modalCtrlr.dismiss(this.date, 'dateSelected')
    }

  }

}
