import { Component, OnInit } from '@angular/core';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { SelectDatePage } from '../select-date/select-date.page';
import { SelectTimePage } from '../select-time/select-time.page';
import { Location } from '@angular/common';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { CheckUserService } from '../check-user.service';
import { format, parseISO, addDays, setDate, getDate, isDate, getTime, getMonth, getYear, eachHourOfInterval, getHours, getMinutes, eachMinuteOfInterval  } from 'date-fns';
// import { format,parseISO} from 'date-fns';
import { CalendarComponentOptions } from 'ion2-calendar';
// import { logging } from 'protractor';


const IMAGE_DIR = 'stored-image'
interface LocalFile {
  name: string;
  path: string;
  data: string;
}


@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.page.html',
  styleUrls: ['./car-booking.page.scss'],
})
export class CarBookingPage implements OnInit {
  imageUrlString = 'https://360uae.eigix.net/public/';
  favorites = '';
  dateRange:any;
  type: 'string';
  start_date: any;
  end_date: any;
  dates = {
    start_date: '',
    end_date: '',
  }

  userSelectedDates = [];
 
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  
  image: LocalFile[] = [];
  startDate: any;
  endDate: any;
  startTime: any;
  endTime: any;
  startTimeString: any;
  endTimeString: any;
  carData = [];
  datesArray = [];
  base64Image :any;
  imageURL= '';
  dbBookedDates = [];
  bookedDates = false;
  checkDate = 'undefined';
  carId: any;
  matchedRangeSdate = '';
  matchedRangeEdate = '';
  bookingObj = {
    car_id: '',
    app_user_id: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    license_img: '',
    location: '',
    total_cost: ''
  }
  drivingLicense: any;
  selectedTimeForDb: string;
  startTimeForDb: string;
  endTimeForDb: string;
  endDateForDB: string;
  endDateForSummary: string;
  startDateForDB = '';
  startDateForSummary = '';
  costPerDay:any;
  costPerMonth:any;
  totalCost:any;
  vehicleName:any;
  base64Data: string;
  calendarStartDateTimeString:any;
  calendarEndDateTimeString:any;
  getDates = false;
  olddateRange: any;
  oldDateRange: any;
  company_location: any;
  constructor(public modalCtrlr: ModalController,
    public location: Location,
    public navCtrlr: NavController,
    public api: ApiService,
    public alertCtrlr: AlertController,
    public checkUser: CheckUserService,
    private platform: Platform) { }

  ionViewWillEnter(){
    this.carData = this.api.carDataById;
    
    if (this.carData != undefined) {
      for (let data of this.carData) {
        this.carId = data.car_id;
        this.costPerDay = new Number(data.rent_cost_day);
        this.costPerMonth = new Number(data.rent_cost_month);
        this.vehicleName = data.vehical_name;
        this.company_location = data.company_location;
        if(!data.favourite_status){
          this.favorites = 'dislike';
        }else{
          this.favorites = data.favourite_status;
        }
      }
    }
    this.getBooking();
  }
  ngOnInit() {
    
    this.loadFiles();
  }
  getStartHours(){
    console.log('getStartHours: ',this.dateRange);
    this.getDates = true;
    
    if (this.dateRange !== undefined) {
      this.dates.start_date = '';
      this.dates.end_date = '';

      let sDate = format(parseISO(new Date(this.dateRange?.from).toISOString()),'yyyy-MM-dd');
      console.log('start date: ',sDate);
      
      let eDate = format(parseISO(new Date(this.dateRange?.to).toISOString()),'yyyy-MM-dd'); 
      console.log('end date: ',eDate);

      if(sDate === eDate){
        this.dateRange = undefined;
        this.dates = {start_date: '', end_date: ''};
        this.getDates = true; 
        this.startDate = undefined;
        this.endDate = undefined;
      }else if(sDate !== eDate){
        this.dates.start_date = sDate;
        this.dates.end_date = eDate;
        this.getDates = false;
        this.checkDates();
      }else{

      }
      
    }
    
  }
  // newDate(ev){
  //   console.log('event is: ssssss: ', ev);
  //   console.log('Date Range: ',this.dateRange);
  //   console.log('Old Date Range: ',this.oldDateRange);
    
  //   if (this.oldDateRange == undefined) {
  //     this.oldDateRange = this.dateRange;
  //     console.log('Old Date Range: ',this.oldDateRange);
  //   }
  //   else {
  //     console.log('oldRange: ',this.oldDateRange);
  //     console.log('dateRange: ',this.dateRange);
    
  //     if(this.oldDateRange == this.dateRange) {
  //       this.dateRange = '';
  //       this.oldDateRange = '';
  //       this.startDateForDB = '';
  //       this.endDateForDB = '';
  //       this.startDateForSummary = '';
  //       this.endDateForSummary = '';
  //       this.startDate = undefined;
  //       this.endDate = undefined; 
  //       this.matchedRangeSdate = '';
  //       this.matchedRangeEdate = '';
  //       console.log('startDateForDB: ',this.startDateForDB);
  //       console.log('endDateForDB: ',this.endDateForDB);
  //       console.log('startDateForSummary: ',this.startDateForSummary);
  //       console.log('endDateForSummary: ',this.endDateForSummary);
        
  //     }
  //     else{
  //       this.oldDateRange = this.dateRange;
  //       console.log('old date Range: ',this.oldDateRange);
        
  //     }
      
      
  //   }
  //   if (this.dateRange !== undefined){
  //     let sDate = format(parseISO(new Date(this.dateRange?.from).toISOString()),'yyyy-MM-dd');
  //     console.log('New start date: ',sDate);
  
  //     let eDate = format(parseISO(new Date(this.dateRange?.to).toISOString()),'yyyy-MM-dd'); 
  //     console.log('New end date: ',eDate);
      
  //     console.log("this.dateRange: ",this.dateRange);
  //   }
  
  // }
  getBooking() {
    this.api.showLoading();
    let data = {
      appuser_id: this.checkUser.appUserId,
      car_id: this.carId,
    };

    this.api.sendRequest('getCarsBooking', data).subscribe((res: any) => {

      if (res.status == 'success') {
        console.log('Api Response: ', res);
        let booked = res.data;
        this.dbBookedDates = res.data;

        // ======for user======
        // if (this.dbBookedDates.length !== 0) {
        //   // this.api.bookedDates = this.dbBookedDates;
        //   for (let rec of this.dbBookedDates) {
        //     rec.start_date = format(parseISO(new Date(rec.start_date).toISOString()), 'dd MMM, yyyy')
        //     rec.end_date = format(parseISO(new Date(rec.end_date).toISOString()), 'dd MMM, yyyy')
        //   }

        //   this.bookedDates = true;
        // }
        // =========done===========

        for (let rec of booked) {

          let st_date = parseISO(new Date(rec.start_date).toISOString());
          let end_date = parseISO(new Date(rec.end_date).toISOString());
          for (let stDate: any = st_date; stDate <= end_date; stDate = addDays(stDate, 1)) {
            this.datesArray.push(stDate);
          }
        }

        this.api.datesToDisable = this.datesArray;
        this.api.hideLoading();
      } else if (res.status == 'error') {
        console.log('Error: ', res);
        this.api.hideLoading();
      } else {
        this.api.hideLoading();
      }

    }, (err) => {
      console.log('error: ', err);
      this.api.hideLoading();
    });

  }
  checkDates(){
    this.userSelectedDates = [];
    this.matchedRangeSdate = '';
    this.matchedRangeEdate = '';
    this.startDateForSummary = '';
    this.endDateForSummary = '';
    console.log('Dates: ',this.dates);

    let st_date = parseISO(new Date(this.dates.start_date).toISOString());
    let nd_date = parseISO(new Date(this.dates.end_date).toISOString());
    for (let stDate: any = st_date; stDate <= nd_date; stDate = addDays(stDate, 1)) {
      this.userSelectedDates.push(stDate);
    }
    console.log('BookedDates: ',this.datesArray);
    
    console.log('userSelectedDates: ',this.userSelectedDates);
    console.log('dbBookedDates: ',this.dbBookedDates);
    for(let d of this.dbBookedDates){
      for(let usd of this.userSelectedDates){
        const st_Date = parseISO(new Date(d.start_date).toISOString());
        const nd_Date = parseISO(new Date(d.end_date).toISOString());
        for(let stDate:any = st_Date; stDate<=nd_Date; stDate = addDays(stDate,1)){
          let bookedDateDay = getDate(stDate);
          let bookedDateMonth =  getMonth(stDate);
          bookedDateMonth++;
          let bookedDateYear =  getYear(stDate);
          
          let selectedDateDay = getDate(usd);
          let selectedDateMonth =  getMonth(usd);
          selectedDateMonth++;
          let selectedDateYear =  getYear(usd);

          if(selectedDateDay == bookedDateDay && selectedDateMonth == bookedDateMonth && selectedDateYear == bookedDateYear){
            console.log('MatchedRangeRecievedStDate: ',st_Date);
            console.log('MatchedRangeRecievedEndDate: ',  nd_Date);
            
            this.matchedRangeSdate = format(parseISO(new Date(d.start_date).toISOString()),'dd MMM, yyyy');
            this.matchedRangeEdate = format(parseISO(new Date(d.end_date).toISOString()),'dd MMM, yyyy');
            console.log('MatchedRangeFormattedStDate: ',this.matchedRangeSdate);
            console.log('MatchedRangeFormattedEndDate: ',this.matchedRangeEdate);
            break;
          }
        }
      }
      
    }
    if(this.matchedRangeSdate == '' && this.matchedRangeEdate == ''){
      this.startDateForDB = this.dates.start_date;
      this.endDateForDB = this.dates.end_date;
      this.startDateForSummary = format(parseISO(new Date(this.startDateForDB).toISOString()),'dd-MM-yyyy');
      this.endDateForSummary = format(parseISO(new Date(this.endDateForDB).toISOString()),'dd-MM-yyyy');
      this.startDate = format(parseISO(new Date(this.startDateForDB).toISOString()),'dd MMM, yyyy');
      this.endDate = format(parseISO(new Date(this.endDateForDB).toISOString()),'dd MMM, yyyy');
      
    }
      
  }

  makefavorite(){

    let data = {
      favourite_car_id: this.carId,
      user_id:this.checkUser.appUserId,
    };
    this.api.showLoading();
    this.api.sendRequest('favouriteCars',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('Favorite Api Response: ',res);
      if(res.status == 'success'){
        this.favorites = res.data
        this.getCarDataById();
      }
      // else if(res.status == 'error'){
      //   this.api.presentToast()
      // }
      
    },(err)=>{
      this.api.hideLoading();
      console.log('Error', err);
      
    });

  }

  getCarDataById(){
    
    let data = {
      car_id: this.carId,
      user_id: this.checkUser.appUserId
    }
    this.api.showLoading();
    this.api.sendRequest('getCarsById',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('api response:',res);
      if(res.status == 'success'){
        this.api.carDataById = res.data;
        // if(!res.data.favourite_status){
        //   console.log("Favorite status not found");
        //   this.api.favorite_status = false;
        // }
        console.log('carDataById:',this.api.carDataById);
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log(err);
      
    })
  }
  async loadFiles() {
    this.image = [];
    this.api.showLoading();
    await Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR
    }).then(result => {
      console.log('Files on load: ', result);
      this.loadFileData(result.files);
    }, (err) => {
      console.log(err);
      Filesystem.mkdir({
        directory: Directory.Data,
        path: IMAGE_DIR
      });
      console.log("New Folder Created");


    }).then(_ => {
      this.api.hideLoading();
    })
    return;
  }

  async loadFileData(files) {
    for (let f of files) {
      const filePath = `${IMAGE_DIR}/${f.name}`
      const fileData = await Filesystem.readFile({
        directory: Directory.Data,
        path: filePath
      });
      console.log('READ :', fileData);
      this.imageURL = `data:image/jpeg;base64,${fileData.data}`;
      this.base64Data = fileData.data;
      this.base64Image= `data:image/jpeg;base64,${fileData.data}`
      this.image.push({
        name: f.name,
        path: filePath,
        data: `data:image/jpeg;base64,${fileData.data}`
      });
      console.log('ImageArray: ', this.image);

    }
  }
  goBack() {
    this.location.back();
  }
  // async openDateModal(dateVal) {
  //   const modal = await this.modalCtrlr.create({
  //     component: SelectDatePage,
  //     showBackdrop: true,
  //     cssClass: 'date_modal',
  //   });
  //   modal.present();
  //   const { data, role } = await modal.onWillDismiss();
  //   if (role === 'dateSelected') {

  //     if (dateVal == 'startDate') {
  //       if (this.endDate) {
  //         const sDate = new Date(data);
  //         const eDate = new Date(this.endDate);

  //         if (sDate <= eDate) {
  //           this.startDate = data;
  //         } else {
  //           this.api.presentToast('Oops! StartDate should be less or Equal to EndDate.')
  //         }
  //       } else {
  //         this.startDate = data;
  //       }

  //       const sDate = new Date(data);
  //       this.startDateForDB = format(parseISO(new Date(sDate).toISOString()), 'yyyy-MM-dd');
  //       this.startDateForSummary = format(parseISO(new Date(sDate).toISOString()), 'dd-MM-yyyy');

  //     }
  //     else if (dateVal == 'endDate') {

  //       if (this.startDate) {
  //         const sDate = new Date(this.startDate)
  //         const eDate = new Date(data);
  //         if (eDate >= sDate) {
  //           this.endDate = data;
  //         } else {
  //           this.api.presentToast('Oops! EndDate should be greater or Equal to StartDate.')
  //         }
  //       } else {
  //         this.api.presentToast('Please Select StartDate First.')
  //       }


  //       const eDate = new Date(data);
  //       this.endDateForDB = format(parseISO(new Date(eDate).toISOString()), 'yyyy-MM-dd');
  //       this.endDateForSummary = format(parseISO(new Date(eDate).toISOString()), 'dd-MM-yyyy');

  //     }
  //     else {

  //     }


  //   }
  // }
  async openTimeModal(timeVal) {
    const modal = await this.modalCtrlr.create({
      component: SelectTimePage,
      showBackdrop: true,
      cssClass: 'time_modal',
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'timeSelected') {
      if (timeVal == 'startTime') {
        this.startTime = data.timeForUser;
        this.calendarStartDateTimeString = data.calendarDateTimeString;
        this.startTimeForDb = data.timeForDB;
      }
      else if (timeVal == 'endTime') {
        this.endTime = data.timeForUser;
        this.endTimeForDb = data.timeForDB;
        this.calendarEndDateTimeString = data.calendarDateTimeString;
      }
      else {

      }

    }
  }

  async addLicense() {
    // const alert  = await this.alertCtrlr.create({
    //   header: 'Choose From',
    //   buttons: [
    //     {
    //       text: 'Camera',
    //       role: 'camera',
    //       handler: ()=>{

    //       },
    //     },
    //     {
    //       text: 'Gallery',
    //       role: 'upload',
    //       handler: ()=>{

    //      },
    //     },
    //   ],
    // });
    // await alert.present();
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    });
    console.log(image);
    if (image) {
      // this.imageURL = image.webPath;
      this.readDir(image);
    } else {
      this.api.presentToast("Please add image in 'JPEG' format.");
    }
  }
  async readDir(photo: Photo) {
    await Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR
    }).then(result => {
      if (result.files.length == 0) {
        this.saveImage(photo);
      }
      else if (result.files.length > 0) {
        let fileName = ''
        for (let f of result.files) {
          fileName = `${IMAGE_DIR}/${f.name}`;
        }
        console.log('Previous fileName: ', fileName);

        Filesystem.deleteFile({
          directory: Directory.Data,
          path: fileName
        });

        this.saveImage(photo);
      } else {

      }

    });
  }
  async saveImage(photo: Photo) {
    let imageBase64 = await this.readAsBase64(photo);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: `${IMAGE_DIR}/${fileName}`,
      data: imageBase64
    });
    console.log('File Saved: ', savedFile);
    this.drivingLicense = savedFile.uri;
    this.loadFiles();
  }

  async readAsBase64(photo: Photo) {
    // "hybrid" will detect Cordova or Capacitor
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: photo.path
      });

      return file.data;
    }
    else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
  }

  //Helper Function
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


  async showSummary() {
    if(this.startDateForDB == ''){
      this.api.presentToast('Plz Select Start Date');
    }else if(this.endDateForDB == ''){
      this.api.presentToast('Plz Select End Date');
    }else if(this.startTimeForDb == undefined){
      this.api.presentToast('Plz Select Start Time');
    }else if(this.endTimeForDb == undefined){
      this.api.presentToast('Plz Select End Time');
    }else if(this.base64Data == undefined){
      this.api.presentToast('Plz Select Image');
    }else{
      this.api.showLoading();
      console.log('calendarStartDateTimeString',this.calendarStartDateTimeString);
      console.log('calendarEndDateTimeString',this.calendarEndDateTimeString);
      // ========================dates conversion================
      let startDateISO_string = parseISO(new Date(this.startDateForDB).toISOString());
      let endDateISO_String = parseISO(new Date(this.endDateForDB).toISOString());
      console.log("startDateISO_string: ",startDateISO_string);
      console.log("endDateISO_String: ",endDateISO_String);
      // ===========================done=============================
      
      const stDateGetHour = getHours(new Date(this.calendarStartDateTimeString));
      const stDateGetMinute = getMinutes(new Date(this.calendarStartDateTimeString)); 
      const stDateDay = getDate(startDateISO_string);
      const stDateMonth = getMonth(startDateISO_string);
      const stDateYear = getYear(startDateISO_string);

      const endDateGetHour = getHours(new Date(this.calendarEndDateTimeString));
      const endDateGetMinute = getMinutes(new Date(this.calendarEndDateTimeString)); 
      const endDateDay = getDate(endDateISO_String);
      const endDateMonth = getMonth(endDateISO_String);
      const endDateYear = getYear(endDateISO_String);
      console.log('start Date :', `${stDateDay}-${stDateMonth}-${stDateYear}`);
      console.log('End Date :', `${endDateDay}-${endDateMonth}-${endDateYear}`);
      console.log('Start Time :', `${stDateGetHour}:${stDateGetMinute}`);
      console.log('End Time :', `${endDateGetHour}:${endDateGetMinute}`);
      
      const result = eachMinuteOfInterval({
        start: new Date(stDateYear, stDateMonth , stDateDay, stDateGetHour, stDateGetMinute),
        end: new Date(endDateYear, endDateMonth, endDateDay, endDateGetHour, endDateGetMinute)
      })
      console.log('Result: ',result);

      const hours_with_decimal = result.length / 60;
      console.log('hours_with_decimal:',hours_with_decimal);
      
      let hours_without_decimal = Math.trunc(hours_with_decimal);
      console.log('hours_without_decimal: ',hours_without_decimal);
      
      // ===================== selected days ==================
      let selectedDays_with_decimal = hours_without_decimal / 24;
      // selectedDays_with_decimal =  Math.round((selectedDays_with_decimal + Number.EPSILON) * 100) / 100;
      console.log('selectedDays_with_decimal: ', selectedDays_with_decimal);
      // =====================================================
      
      // ============= total_cost based on (total hours) and (cost per day)=============
      let cost_per_hour = this.costPerDay / 24;
      console.log('cost_per_hour: ',cost_per_hour);
      let t_cost = hours_without_decimal * cost_per_hour;
      t_cost =  Math.round((t_cost + Number.EPSILON) * 100) / 100
      console.log('Total Cost: ',t_cost);
      // =============================================================
      
      if(selectedDays_with_decimal == 30 || selectedDays_with_decimal == 31){
        this.totalCost = this.costPerMonth;
        console.log('cost for month: ',this.totalCost);
        
      }else{  
        this.totalCost = t_cost;
        console.log('cost for days and selected hours: ',this.totalCost);
      }

      // ================================================
      console.log('startDate: ', this.startDateForDB);
      console.log('endDate: ', this.endDateForDB);
      console.log('startTimeForDB: ', this.startTimeForDb);
      console.log('endTimeForDB: ', this.endTimeForDb);
      console.log('appUserId: ', this.checkUser.appUserId);
      console.log('CarId: ', this.carId);
      console.log('Driving Liscence: ', this.base64Data);
      console.log('Total Cost: ', this.totalCost);

      let data = {
        start_date: this.startDateForDB,
        end_date: this.endDateForDB,
        start_time: this.startTimeForDb,
        end_time: this.endTimeForDb,
        appuser_id: this.checkUser.appUserId,
        car_id: this.carId,
        driving_liscence: this.base64Data,
        total_cost:this.totalCost
      }

      this.api.sendRequest('storeCarsBooking', data).subscribe((res: any) => {
    
        console.log('StoredCarBooking: ', res);
        if (res.status == 'success') {
          this.bookingObj.app_user_id = this.checkUser.appUserId;
          this.bookingObj.car_id = this.carId;
          this.bookingObj.start_date = this.startDateForSummary;
          this.bookingObj.end_date = this.endDateForSummary;
          this.bookingObj.start_time = this.startTime;
          this.bookingObj.end_time = this.endTime;
          this.bookingObj.total_cost = this.totalCost;
          this.bookingObj.license_img = this.imageURL;
          this.bookingObj.location = this.company_location
          console.log('BookingObject: ', this.bookingObj);

          this.api.bookingResponse = this.bookingObj;
          this.api.hideLoading();
          this.navCtrlr.navigateRoot('summary');

        }else if(res.status == 'error'){
          
          this.api.hideLoading();
        
        }else{

        }

        }, (err: any) => {
          console.log('Error: ', err);
          this.api.hideLoading();
      });
    }
    

  }
}

