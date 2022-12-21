"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_car-booking_car-booking_module_ts"],{

/***/ 3565:
/*!***********************************************************!*\
  !*** ./src/app/car-booking/car-booking-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarBookingPageRoutingModule": () => (/* binding */ CarBookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _car_booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-booking.page */ 45040);




const routes = [
    {
        path: '',
        component: _car_booking_page__WEBPACK_IMPORTED_MODULE_0__.CarBookingPage
    }
];
let CarBookingPageRoutingModule = class CarBookingPageRoutingModule {
};
CarBookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarBookingPageRoutingModule);



/***/ }),

/***/ 45333:
/*!***************************************************!*\
  !*** ./src/app/car-booking/car-booking.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarBookingPageModule": () => (/* binding */ CarBookingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _car_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-booking-routing.module */ 3565);
/* harmony import */ var _car_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-booking.page */ 45040);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion2-calendar */ 8325);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);








let CarBookingPageModule = class CarBookingPageModule {
};
CarBookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule.forRoot({
                doneLabel: 'Save',
                closeIcon: true
            }),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _car_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarBookingPageRoutingModule
        ],
        declarations: [_car_booking_page__WEBPACK_IMPORTED_MODULE_1__.CarBookingPage]
    })
], CarBookingPageModule);



/***/ }),

/***/ 45040:
/*!*************************************************!*\
  !*** ./src/app/car-booking/car-booking.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarBookingPage": () => (/* binding */ CarBookingPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _car_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-booking.page.html?ngResource */ 3387);
/* harmony import */ var _car_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-booking.page.scss?ngResource */ 14915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _select_time_select_time_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-time/select-time.page */ 79226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 28920);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 97064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 14190);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 81385);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 50586);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 53820);




 // import {MatDatepickerModule} from '@angular/material/datepicker';









 // import { logging } from 'protractor';

const IMAGE_DIR = 'stored-image';
let CarBookingPage = class CarBookingPage {
  constructor(modalCtrlr, location, navCtrlr, api, alertCtrlr, checkUser, platform) {
    this.modalCtrlr = modalCtrlr;
    this.location = location;
    this.navCtrlr = navCtrlr;
    this.api = api;
    this.alertCtrlr = alertCtrlr;
    this.checkUser = checkUser;
    this.platform = platform;
    this.imageUrlString = 'https://360uae.eigix.net/public/';
    this.favorites = '';
    this.dates = {
      start_date: '',
      end_date: ''
    };
    this.userSelectedDates = [];
    this.optionsRange = {
      pickMode: 'range'
    };
    this.image = [];
    this.carData = [];
    this.datesArray = [];
    this.imageURL = '';
    this.dbBookedDates = [];
    this.bookedDates = false;
    this.checkDate = 'undefined';
    this.matchedRangeSdate = '';
    this.matchedRangeEdate = '';
    this.bookingObj = {
      car_id: '',
      app_user_id: '',
      start_date: '',
      end_date: '',
      start_time: '',
      end_time: '',
      license_img: '',
      location: '',
      total_cost: ''
    };
    this.startDateForDB = '';
    this.startDateForSummary = '';
    this.getDates = false; //Helper Function

    this.convertBlobToBase64 = blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(blob);
    });
  }

  ionViewWillEnter() {
    this.carData = this.api.carDataById;

    if (this.carData != undefined) {
      for (let data of this.carData) {
        this.carId = data.car_id;
        this.costPerDay = new Number(data.rent_cost_day);
        this.costPerMonth = new Number(data.rent_cost_month);
        this.vehicleName = data.vehical_name;
        this.company_location = data.company_location;

        if (!data.favourite_status) {
          this.favorites = 'dislike';
        } else {
          this.favorites = data.favourite_status;
        }
      }
    }

    this.getBooking();
  }

  ngOnInit() {
    this.loadFiles();
  }

  getStartHours() {
    console.log('getStartHours: ', this.dateRange);
    this.getDates = true;

    if (this.dateRange !== undefined) {
      this.dates.start_date = '';
      this.dates.end_date = '';
      let sDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(this.dateRange?.from).toISOString()), 'yyyy-MM-dd');
      console.log('start date: ', sDate);
      let eDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(this.dateRange?.to).toISOString()), 'yyyy-MM-dd');
      console.log('end date: ', eDate);

      if (sDate === eDate) {
        this.dateRange = undefined;
        this.dates = {
          start_date: '',
          end_date: ''
        };
        this.getDates = true;
        this.startDate = undefined;
        this.endDate = undefined;
      } else if (sDate !== eDate) {
        this.dates.start_date = sDate;
        this.dates.end_date = eDate;
        this.getDates = false;
        this.checkDates();
      } else {}
    }
  } // newDate(ev){
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
      car_id: this.carId
    };
    this.api.sendRequest('getCarsBooking', data).subscribe(res => {
      if (res.status == 'success') {
        console.log('Api Response: ', res);
        let booked = res.data;
        this.dbBookedDates = res.data; // ======for user======
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
          let st_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(rec.start_date).toISOString());
          let end_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(rec.end_date).toISOString());

          for (let stDate = st_date; stDate <= end_date; stDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(stDate, 1)) {
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
    }, err => {
      console.log('error: ', err);
      this.api.hideLoading();
    });
  }

  checkDates() {
    this.userSelectedDates = [];
    this.matchedRangeSdate = '';
    this.matchedRangeEdate = '';
    this.startDateForSummary = '';
    this.endDateForSummary = '';
    console.log('Dates: ', this.dates);
    let st_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(this.dates.start_date).toISOString());
    let nd_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(this.dates.end_date).toISOString());

    for (let stDate = st_date; stDate <= nd_date; stDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(stDate, 1)) {
      this.userSelectedDates.push(stDate);
    }

    console.log('BookedDates: ', this.datesArray);
    console.log('userSelectedDates: ', this.userSelectedDates);
    console.log('dbBookedDates: ', this.dbBookedDates);

    for (let d of this.dbBookedDates) {
      for (let usd of this.userSelectedDates) {
        const st_Date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(d.start_date).toISOString());
        const nd_Date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(d.end_date).toISOString());

        for (let stDate = st_Date; stDate <= nd_Date; stDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(stDate, 1)) {
          let bookedDateDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(stDate);
          let bookedDateMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(stDate);
          bookedDateMonth++;
          let bookedDateYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(stDate);
          let selectedDateDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(usd);
          let selectedDateMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(usd);
          selectedDateMonth++;
          let selectedDateYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(usd);

          if (selectedDateDay == bookedDateDay && selectedDateMonth == bookedDateMonth && selectedDateYear == bookedDateYear) {
            console.log('MatchedRangeRecievedStDate: ', st_Date);
            console.log('MatchedRangeRecievedEndDate: ', nd_Date);
            this.matchedRangeSdate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(d.start_date).toISOString()), 'dd MMM, yyyy');
            this.matchedRangeEdate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(d.end_date).toISOString()), 'dd MMM, yyyy');
            console.log('MatchedRangeFormattedStDate: ', this.matchedRangeSdate);
            console.log('MatchedRangeFormattedEndDate: ', this.matchedRangeEdate);
            break;
          }
        }
      }
    }

    if (this.matchedRangeSdate == '' && this.matchedRangeEdate == '') {
      this.startDateForDB = this.dates.start_date;
      this.endDateForDB = this.dates.end_date;
      this.startDateForSummary = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(this.startDateForDB).toISOString()), 'dd-MM-yyyy');
      this.endDateForSummary = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(this.endDateForDB).toISOString()), 'dd-MM-yyyy');
      this.startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(this.startDateForDB).toISOString()), 'dd MMM, yyyy');
      this.endDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(this.endDateForDB).toISOString()), 'dd MMM, yyyy');
    }
  }

  makefavorite() {
    let data = {
      favourite_car_id: this.carId,
      user_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('favouriteCars', data).subscribe(res => {
      this.api.hideLoading();
      console.log('Favorite Api Response: ', res);

      if (res.status == 'success') {
        this.favorites = res.data;
        this.getCarDataById();
      } // else if(res.status == 'error'){
      //   this.api.presentToast()
      // }

    }, err => {
      this.api.hideLoading();
      console.log('Error', err);
    });
  }

  getCarDataById() {
    let data = {
      car_id: this.carId,
      user_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('getCarsById', data).subscribe(res => {
      this.api.hideLoading();
      console.log('api response:', res);

      if (res.status == 'success') {
        this.api.carDataById = res.data; // if(!res.data.favourite_status){
        //   console.log("Favorite status not found");
        //   this.api.favorite_status = false;
        // }

        console.log('carDataById:', this.api.carDataById);
      }
    }, err => {
      this.api.hideLoading();
      console.log(err);
    });
  }

  loadFiles() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.image = [];

      _this.api.showLoading();

      yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Filesystem.readdir({
        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Directory.Data,
        path: IMAGE_DIR
      }).then(result => {
        console.log('Files on load: ', result);

        _this.loadFileData(result.files);
      }, err => {
        console.log(err);
        _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Filesystem.mkdir({
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Directory.Data,
          path: IMAGE_DIR
        });
        console.log("New Folder Created");
      }).then(_ => {
        _this.api.hideLoading();
      });
      return;
    })();
  }

  loadFileData(files) {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (let f of files) {
        const filePath = `${IMAGE_DIR}/${f.name}`;
        const fileData = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Filesystem.readFile({
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Directory.Data,
          path: filePath
        });
        console.log('READ :', fileData);
        _this2.imageURL = `data:image/jpeg;base64,${fileData.data}`;
        _this2.base64Data = fileData.data;
        _this2.base64Image = `data:image/jpeg;base64,${fileData.data}`;

        _this2.image.push({
          name: f.name,
          path: filePath,
          data: `data:image/jpeg;base64,${fileData.data}`
        });

        console.log('ImageArray: ', _this2.image);
      }
    })();
  }

  goBack() {
    this.location.back();
  } // async openDateModal(dateVal) {
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


  openTimeModal(timeVal) {
    var _this3 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrlr.create({
        component: _select_time_select_time_page__WEBPACK_IMPORTED_MODULE_3__.SelectTimePage,
        showBackdrop: true,
        cssClass: 'time_modal'
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'timeSelected') {
        if (timeVal == 'startTime') {
          _this3.startTime = data.timeForUser;
          _this3.calendarStartDateTimeString = data.calendarDateTimeString;
          _this3.startTimeForDb = data.timeForDB;
        } else if (timeVal == 'endTime') {
          _this3.endTime = data.timeForUser;
          _this3.endTimeForDb = data.timeForDB;
          _this3.calendarEndDateTimeString = data.calendarDateTimeString;
        } else {}
      }
    })();
  }

  addLicense() {
    var _this4 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Prompt
      });
      console.log(image);

      if (image) {
        // this.imageURL = image.webPath;
        _this4.readDir(image);
      } else {
        _this4.api.presentToast("Please add image in 'JPEG' format.");
      }
    })();
  }

  readDir(photo) {
    var _this5 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Filesystem.readdir({
        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Directory.Data,
        path: IMAGE_DIR
      }).then(result => {
        if (result.files.length == 0) {
          _this5.saveImage(photo);
        } else if (result.files.length > 0) {
          let fileName = '';

          for (let f of result.files) {
            fileName = `${IMAGE_DIR}/${f.name}`;
          }

          console.log('Previous fileName: ', fileName);
          _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Filesystem.deleteFile({
            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Directory.Data,
            path: fileName
          });

          _this5.saveImage(photo);
        } else {}
      });
    })();
  }

  saveImage(photo) {
    var _this6 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let imageBase64 = yield _this6.readAsBase64(photo);
      const fileName = new Date().getTime() + '.jpeg';
      const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Filesystem.writeFile({
        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Directory.Data,
        path: `${IMAGE_DIR}/${fileName}`,
        data: imageBase64
      });
      console.log('File Saved: ', savedFile);
      _this6.drivingLicense = savedFile.uri;

      _this6.loadFiles();
    })();
  }

  readAsBase64(photo) {
    var _this7 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // "hybrid" will detect Cordova or Capacitor
      if (_this7.platform.is('hybrid')) {
        // Read the file into base64 format
        const file = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Filesystem.readFile({
          path: photo.path
        });
        return file.data;
      } else {
        // Fetch the photo, read as a blob, then convert to base64 format
        const response = yield fetch(photo.webPath);
        const blob = yield response.blob();
        return yield _this7.convertBlobToBase64(blob);
      }
    })();
  }

  showSummary() {
    var _this8 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.startDateForDB == '') {
        _this8.api.presentToast('Plz Select Start Date');
      } else if (_this8.endDateForDB == '') {
        _this8.api.presentToast('Plz Select End Date');
      } else if (_this8.startTimeForDb == undefined) {
        _this8.api.presentToast('Plz Select Start Time');
      } else if (_this8.endTimeForDb == undefined) {
        _this8.api.presentToast('Plz Select End Time');
      } else if (_this8.base64Data == undefined) {
        _this8.api.presentToast('Plz Select Image');
      } else {
        _this8.api.showLoading();

        console.log('calendarStartDateTimeString', _this8.calendarStartDateTimeString);
        console.log('calendarEndDateTimeString', _this8.calendarEndDateTimeString); // ========================dates conversion================

        let startDateISO_string = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(_this8.startDateForDB).toISOString());
        let endDateISO_String = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(_this8.endDateForDB).toISOString());
        console.log("startDateISO_string: ", startDateISO_string);
        console.log("endDateISO_String: ", endDateISO_String); // ===========================done=============================

        const stDateGetHour = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date(_this8.calendarStartDateTimeString));
        const stDateGetMinute = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date(_this8.calendarStartDateTimeString));
        const stDateDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(startDateISO_string);
        const stDateMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(startDateISO_string);
        const stDateYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(startDateISO_string);
        const endDateGetHour = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date(_this8.calendarEndDateTimeString));
        const endDateGetMinute = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date(_this8.calendarEndDateTimeString));
        const endDateDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(endDateISO_String);
        const endDateMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(endDateISO_String);
        const endDateYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(endDateISO_String);
        console.log('start Date :', `${stDateDay}-${stDateMonth}-${stDateYear}`);
        console.log('End Date :', `${endDateDay}-${endDateMonth}-${endDateYear}`);
        console.log('Start Time :', `${stDateGetHour}:${stDateGetMinute}`);
        console.log('End Time :', `${endDateGetHour}:${endDateGetMinute}`);
        const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])({
          start: new Date(stDateYear, stDateMonth, stDateDay, stDateGetHour, stDateGetMinute),
          end: new Date(endDateYear, endDateMonth, endDateDay, endDateGetHour, endDateGetMinute)
        });
        console.log('Result: ', result);
        const hours_with_decimal = result.length / 60;
        console.log('hours_with_decimal:', hours_with_decimal);
        let hours_without_decimal = Math.trunc(hours_with_decimal);
        console.log('hours_without_decimal: ', hours_without_decimal); // ===================== selected days ==================

        let selectedDays_with_decimal = hours_without_decimal / 24; // selectedDays_with_decimal =  Math.round((selectedDays_with_decimal + Number.EPSILON) * 100) / 100;

        console.log('selectedDays_with_decimal: ', selectedDays_with_decimal); // =====================================================
        // ============= total_cost based on (total hours) and (cost per day)=============

        let cost_per_hour = _this8.costPerDay / 24;
        console.log('cost_per_hour: ', cost_per_hour);
        let t_cost = hours_without_decimal * cost_per_hour;
        t_cost = Math.round((t_cost + Number.EPSILON) * 100) / 100;
        console.log('Total Cost: ', t_cost); // =============================================================

        if (selectedDays_with_decimal == 30 || selectedDays_with_decimal == 31) {
          _this8.totalCost = _this8.costPerMonth;
          console.log('cost for month: ', _this8.totalCost);
        } else {
          _this8.totalCost = t_cost;
          console.log('cost for days and selected hours: ', _this8.totalCost);
        } // ================================================


        console.log('startDate: ', _this8.startDateForDB);
        console.log('endDate: ', _this8.endDateForDB);
        console.log('startTimeForDB: ', _this8.startTimeForDb);
        console.log('endTimeForDB: ', _this8.endTimeForDb);
        console.log('appUserId: ', _this8.checkUser.appUserId);
        console.log('CarId: ', _this8.carId);
        console.log('Driving Liscence: ', _this8.base64Data);
        console.log('Total Cost: ', _this8.totalCost);
        let data = {
          start_date: _this8.startDateForDB,
          end_date: _this8.endDateForDB,
          start_time: _this8.startTimeForDb,
          end_time: _this8.endTimeForDb,
          appuser_id: _this8.checkUser.appUserId,
          car_id: _this8.carId,
          driving_liscence: _this8.base64Data,
          total_cost: _this8.totalCost
        };

        _this8.api.sendRequest('storeCarsBooking', data).subscribe(res => {
          console.log('StoredCarBooking: ', res);

          if (res.status == 'success') {
            _this8.bookingObj.app_user_id = _this8.checkUser.appUserId;
            _this8.bookingObj.car_id = _this8.carId;
            _this8.bookingObj.start_date = _this8.startDateForSummary;
            _this8.bookingObj.end_date = _this8.endDateForSummary;
            _this8.bookingObj.start_time = _this8.startTime;
            _this8.bookingObj.end_time = _this8.endTime;
            _this8.bookingObj.total_cost = _this8.totalCost;
            _this8.bookingObj.license_img = _this8.imageURL;
            _this8.bookingObj.location = _this8.company_location;
            console.log('BookingObject: ', _this8.bookingObj);
            _this8.api.bookingResponse = _this8.bookingObj;

            _this8.api.hideLoading();

            _this8.navCtrlr.navigateRoot('summary');
          } else if (res.status == 'error') {
            _this8.api.hideLoading();
          } else {}
        }, err => {
          console.log('Error: ', err);

          _this8.api.hideLoading();
        });
      }
    })();
  }

};

CarBookingPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavController
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController
}, {
  type: _check_user_service__WEBPACK_IMPORTED_MODULE_7__.CheckUserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform
}];

CarBookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
  selector: 'app-car-booking',
  template: _car_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_car_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CarBookingPage);


/***/ }),

/***/ 93568:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;

(function (Directory) {
  /**
   * The Documents directory
   * On iOS it's the app's documents directory.
   * Use this directory to store user-generated content.
   * On Android it's the Public Documents folder, so it's accessible from other apps.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */
  Directory["Documents"] = "DOCUMENTS";
  /**
   * The Data directory
   * On iOS it will use the Documents directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["Data"] = "DATA";
  /**
   * The Library directory
   * On iOS it will use the Library directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.1.0
   */

  Directory["Library"] = "LIBRARY";
  /**
   * The Cache directory
   * Can be deleted in cases of low memory, so use this directory to write app-specific files
   * that your app can re-create easily.
   *
   * @since 1.0.0
   */

  Directory["Cache"] = "CACHE";
  /**
   * The external directory
   * On iOS it will use the Documents directory
   * On Android it's the directory on the primary shared/external
   * storage device where the application can place persistent files it owns.
   * These files are internal to the applications, and not typically visible
   * to the user as media.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["External"] = "EXTERNAL";
  /**
   * The external storage directory
   * On iOS it will use the Documents directory
   * On Android it's the primary shared/external storage directory.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */

  Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));

var Encoding;

(function (Encoding) {
  /**
   * Eight-bit UCS Transformation Format
   *
   * @since 1.0.0
   */
  Encoding["UTF8"] = "utf8";
  /**
   * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
   * Unicode character set
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["ASCII"] = "ascii";
  /**
   * Sixteen-bit UCS Transformation Format, byte order identified by an
   * optional byte-order mark
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */


const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */

const FilesystemEncoding = Encoding;

/***/ }),

/***/ 91662:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 93568);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 64046)).then(m => new m.FilesystemWeb())
});



/***/ }),

/***/ 62317:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMinutes)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 79672);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

/***/ }),

/***/ 53820:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachMinuteOfInterval/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eachMinuteOfInterval)
/* harmony export */ });
/* harmony import */ var _addMinutes_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMinutes/index.js */ 62317);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfMinute/index.js */ 26361);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);




/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The step must be equal to or greater than 1
 * @throws {TypeError} 1 argument required
 * @returns {Date[]} the array with starts of minutes from the minute of the interval start to the minute of the interval end
 * @throws {RangeError} `options.step` must be a number equal to or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */

function eachMinuteOfInterval(interval, options) {
  var _options$step;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var startDate = (0,_startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(interval.start));
  var endDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(interval.end);
  var startTime = startDate.getTime();
  var endTime = endDate.getTime();

  if (startTime >= endTime) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number equal to or greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentDate));
    currentDate = (0,_addMinutes_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(currentDate, step);
  }

  return dates;
}

/***/ }),

/***/ 81385:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHours)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/***/ }),

/***/ 50586:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMinutes)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/***/ }),

/***/ 26361:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMinute/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfMinute)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */

function startOfMinute(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setSeconds(0, 0);
  return date;
}

/***/ }),

/***/ 14915:
/*!**************************************************************!*\
  !*** ./src/app/car-booking/car-booking.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 8px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.show_status {\n  font-size: 14px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n  color: #12D804;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.booked_dates {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: black;\n  padding: 5px 10px 0px;\n}\n\n.date_value {\n  font-weight: 500;\n  color: red;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.start_end_label {\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.date_time_label {\n  color: #8000FF;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.bookings_field {\n  height: 48px;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  border: 1px solid #EFEFEF;\n  padding: 12px 9px 16px;\n}\n\n.field_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #8D8D8D;\n}\n\n.license_heading {\n  margin-top: 18px;\n  color: #000000;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 20px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1ib29raW5nLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGNhci1ib29raW5nXFxjYXItYm9va2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNRSjs7QUROQTtFQUNJLHFCQUFBO0FDU0o7O0FEUEE7RUFDSSx1QkFBQTtBQ1VKOztBRFJBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNXSjs7QURUQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ1lKOztBRFZBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBRUEsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ1lKOztBRFZBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFhBO0VBQ0ksaUJBQUE7QUNjSjs7QURaQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNlSjs7QURiQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNnQko7O0FEZEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNpQko7O0FEZkE7RUFDSSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNvQko7O0FEbEJBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcUJKOztBRG5CQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDc0JKOztBRHBCQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUN1Qko7O0FEckJBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUN3QkoiLCJmaWxlIjoiY2FyLWJvb2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4udXJiYW5pc3R7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wb3BwaW5ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLnNob3dfc3RhdHVze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzEyRDgwNDtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDE2cHggMjBweDtcclxufVxyXG4uYm9va2VkX2RhdGVze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcclxufVxyXG4uZGF0ZV92YWx1ZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5jYXJfaW5mb19ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogIzBGMTcyQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiA5cHggMTJweCA4LjVweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcl9uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3Rhcl9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4ucmF0aW5nX3ZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5jYXIyX3ByaWNle1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyMl9pbmZvX3N1YmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zdGFydF9lbmRfbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgXHJcbn1cclxuLmRhdGVfdGltZV9sYWJlbHtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJvb2tpbmdzX2ZpZWxke1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNFRkVGRUY7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDlweCAxNnB4O1xyXG59XHJcbi5maWVsZF90ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjOEQ4RDhEO1xyXG59XHJcbi5saWNlbnNlX2hlYWRpbmd7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubG9naW5fYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG5fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4udXJiYW5pc3Qge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucG9wcGlucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTZweCA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5zaG93X3N0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzEyRDgwNDtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDE2cHggMjBweDtcbn1cblxuLmJvb2tlZF9kYXRlcyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcbn1cblxuLmRhdGVfdmFsdWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2FyX2luZm9fYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogOXB4IDEycHggOC41cHggMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0YXJfbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5yYXRpbmdfdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2FyMl9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyMl9pbmZvX3N1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGFydF9lbmRfbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kYXRlX3RpbWVfbGFiZWwge1xuICBjb2xvcjogIzgwMDBGRjtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYm9va2luZ3NfZmllbGQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcbiAgcGFkZGluZzogMTJweCA5cHggMTZweDtcbn1cblxuLmZpZWxkX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM4RDhEOEQ7XG59XG5cbi5saWNlbnNlX2hlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9naW5fYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bl90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 3387:
/*!**************************************************************!*\
  !*** ./src/app/car-booking/car-booking.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">{{vehicleName}}</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: center; position: relative;\" *ngFor=\"let data of carData\">\n      <img style=\"width: 100%;height: 200px; border-radius: 10px 10px 0px 0px;\" src=\"{{imageUrlString}}{{data.image1}}\" alt=\"\">\n      <!-- <img style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\">\n      <img style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\"> -->\n      <img (click)=\"makefavorite()\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n      <img (click)=\"makefavorite()\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n      <div class=\"car_info_box\">\n        <div>\n          <div class=\"car_name urbanist\">{{data.vehical_name}}</div>\n          <div style=\"text-align: left;line-height: 1;\">\n            <span *ngIf=\"data.rating && (data.rating == 0 || null)\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=1 && data.rating < 1.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=1.5 && data.rating < 2.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=2.5 && data.rating < 3.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=3.5 && data.rating < 4.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=4.5 && data.rating < 5.1\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            </span>\n            <span class=\"rating_value urbanist\">269 trips</span>\n          </div>\n        </div>\n        <div class=\"car2_info_subdiv\">\n          <div style=\"line-height: 1;\">\n            <span class=\"car2_price urbanist\">$</span>\n            <span class=\"car2_price urbanist\" style=\"font-size: 32px;margin-right: 8px;\">{{data.rent_cost_day}}</span>\n            <span class=\"car2_price urbanist\" style=\"font-size: 10px;font-weight: 500;\">/Day</span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    \n    <div class=\"start_end_label\" >Select Start/End Dates</div>\n    <!-- (click)=\"newDate($event)\" -->\n    <ion-calendar style=\"margin-top: 5px;\" (click)=\"getStartHours()\" \n    [(ngModel)]=\"dateRange\" [options]=\"optionsRange\" [type]=\"type\" [format]=\"'YYYY-MM-DD'\">\n    </ion-calendar>\n\n    <div class=\"booked_dates\" *ngIf=\"getDates==true\">\n      <div class=\"date_value\"> Minimum trip duration is 1 day</div>\n    </div>\n    <!-- <div *ngIf=\"startDateForSummary!=='' && endDateForSummary!==''\">\n      <div>Start Date: <span style=\"color: green;\">{{startDateForSummary}}</span></div> \n      <div>End Date:  <span style=\"color: green;\">{{endDateForSummary}}</span>  </div> \n    </div> -->\n    <div class=\"booked_dates\" *ngIf=\"matchedRangeSdate!=='' && matchedRangeEdate!==''\">\n      <div>\n        Car is booked from <span class=\"date_value\">{{matchedRangeSdate}}</span> to <span class=\"date_value\">{{matchedRangeEdate}}</span>.\n      </div>\n    </div>\n    <div style=\"display: flex;justify-content: space-between;margin-top: 14px;\">\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">Start Date</div>\n        <div class=\"bookings_field\" >\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/calendar.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"startDate==undefined\">05 Sep, 2022</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"startDate!=''\">{{startDate}}</span>\n        </div>\n      </div>\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">End Date</div>\n        <div class=\"bookings_field\" >\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/calendar.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"endDate==undefined\">05 Sep, 2022</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"endDate!=''\">{{endDate}}</span>\n        </div>\n      </div>\n\n    </div>\n    <!-- <div style=\"display: flex;justify-content: space-between;margin-top: 14px;\">\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">Start Date</div>\n        <div class=\"bookings_field\" (click)=\"openDateModal('startDate')\">\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/calendar.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"startDate==undefined\">05 Sep, 2022</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"startDate!=''\">{{startDate}}</span>\n        </div>\n      </div>\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">End Date</div>\n        <div class=\"bookings_field\" (click)=\"openDateModal('endDate')\">\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/calendar.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"endDate==undefined\">05 Sep, 2022</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"endDate!=''\">{{endDate}}</span>\n        </div>\n      </div>\n\n    </div> -->\n    <div style=\"display: flex;justify-content: space-between;margin-top: 12px;\">\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">Start Time</div>\n        <div class=\"bookings_field\" (click)=\"openTimeModal('startTime')\">\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/clock.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"startTime==undefined\">06:00 am</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"startTime!=''\">{{startTime}}</span>\n        </div>\n      </div>\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">End Time</div>\n        <div class=\"bookings_field\" (click)=\"openTimeModal('endTime')\">\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/clock.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"endTime==undefined\">06:00 pm</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"endTime!=''\">{{endTime}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"license_heading\">Driving License</div>\n    <div style=\"text-align: center;margin: 7px auto 10px;\">\n      <img (click)=\"addLicense()\"  src=\"assets/images/upload_license_img.svg\" alt=\"\" *ngIf=\"imageURL===''\">\n      <img (click)=\"addLicense()\" style=\"height: 200px;width: 300px; border-radius: 10px;\" src=\"{{imageURL}}\" alt=\"\" *ngIf=\"imageURL!==''\">\n\n    </div>\n\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div style=\"padding: 0px 16px 27px;\">\n    <ion-button class=\"login_button\" (click)=\"showSummary()\">\n      <span class=\"btn_text\">Next</span>\n    </ion-button>\n  </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_car-booking_car-booking_module_ts.js.map