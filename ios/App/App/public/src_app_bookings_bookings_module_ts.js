"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_bookings_bookings_module_ts"],{

/***/ 5083:
/*!*****************************************************!*\
  !*** ./src/app/bookings/bookings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageRoutingModule": () => (/* binding */ BookingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings.page */ 63017);




const routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_0__.BookingsPage
    }
];
let BookingsPageRoutingModule = class BookingsPageRoutingModule {
};
BookingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingsPageRoutingModule);



/***/ }),

/***/ 7938:
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageModule": () => (/* binding */ BookingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings-routing.module */ 5083);
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page */ 63017);







let BookingsPageModule = class BookingsPageModule {
};
BookingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingsPageRoutingModule
        ],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_1__.BookingsPage]
    })
], BookingsPageModule);



/***/ }),

/***/ 63017:
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPage": () => (/* binding */ BookingsPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bookings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page.html?ngResource */ 68263);
/* harmony import */ var _bookings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookings.page.scss?ngResource */ 31083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _give_ratings_popup_give_ratings_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../give-ratings-popup/give-ratings-popup.page */ 37227);
/* harmony import */ var _cancel_booking_popup_cancel_booking_popup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cancel-booking-popup/cancel-booking-popup.page */ 305);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 86527);












let BookingsPage = class BookingsPage {
  constructor(navCtrlr, modalCtrlr, api, checkUser) {
    this.navCtrlr = navCtrlr;
    this.modalCtrlr = modalCtrlr;
    this.api = api;
    this.checkUser = checkUser;
    this.previous_tab = true;
    this.upcoming_tab = false;
    this.previousItemdetails = false;
    this.upcomingItemdetails = false;
    this.previousBookingRecords = [];
    this.upcomingBookingRecords = [];
    this.selectedid = 0;
  }

  ngOnInit() {
    this.previousTab('previous');
  }

  previousTab(tabVal) {
    if (tabVal = 'previous') {
      console.log(tabVal);
      this.previous_tab = true;
      this.upcoming_tab = false;
      console.log("this.upcoming_tab: ", this.upcoming_tab);
      console.log("this.previous_tab: ", this.previous_tab);
      this.previousItemdetails = false;
      this.upcomingItemdetails = false;
      this.getPreviousBookings();
    }
  }

  getPreviousBookings() {
    let data = {
      appuser_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('getCarsBookingPrevious', data).subscribe(res => {
      this.api.hideLoading();
      console.log("Response: ", res);

      if (res.status == 'success') {
        this.previousBookingRecords = res.data;

        for (let rec of this.previousBookingRecords) {
          rec.start_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(rec.start_date).toISOString()), 'dd-MM-yyyy');
          rec.end_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(rec.end_date).toISOString()), 'dd-MM-yyyy');
        }

        console.log('previousBookingRecords: ', this.previousBookingRecords);
      } else if (res.status == 'error') {} else {}
    }, err => {
      this.api.hideLoading();
      console.log("Api Call Error: ", err);
    });
  }

  upcomingTab(tabVal) {
    if (tabVal = 'upcoming') {
      console.log(tabVal);
      this.upcoming_tab = true;
      this.previous_tab = false;
      console.log("this.upcoming_tab: ", this.upcoming_tab);
      console.log("this.previous_tab: ", this.previous_tab);
      this.previousItemdetails = false;
      this.upcomingItemdetails = false;
      this.getUpcomingBookings();
    }
  }

  getUpcomingBookings() {
    let data = {
      appuser_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('getCarsBookingUpcoming', data).subscribe(res => {
      this.api.hideLoading();
      console.log("Response: ", res);

      if (res.status == 'success') {
        this.upcomingBookingRecords = res.data;

        for (let rec of this.upcomingBookingRecords) {
          rec.start_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(rec.start_date).toISOString()), 'dd-MM-yyyy');
          rec.end_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(rec.end_date).toISOString()), 'dd-MM-yyyy');
        }

        console.log('upcomingBookingRecords: ', this.upcomingBookingRecords);
      } else if (res.status == 'error') {} else {}
    }, err => {
      this.api.hideLoading();
      console.log("Api Call Error: ", err);
    });
  }

  openModal() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrlr.create({
        component: _give_ratings_popup_give_ratings_popup_page__WEBPACK_IMPORTED_MODULE_3__.GiveRatingsPopupPage,
        cssClass: 'give_ratings',
        showBackdrop: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'sendFeedback') {
        console.log(data);
      }
    })();
  }

  openCancelBookingModal() {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrlr.create({
        component: _cancel_booking_popup_cancel_booking_popup_page__WEBPACK_IMPORTED_MODULE_4__.CancelBookingPopupPage,
        cssClass: 'cancel_booking',
        showBackdrop: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'cancelBooking') {
        console.log(data);
      }
    })();
  } // updateFavoriteStatus(carId){
  //   let data = {
  //     favourite_car_id:carId,
  //     user_id:this.checkUser.appUserId
  //   };
  //   this.api.showLoading();
  //   this.api.sendRequest('favouriteCars',data).subscribe((res:any)=>{
  //     this.api.hideLoading();
  //     console.log("Response: ",res);
  //     if(res.status == 'success'){
  //     }else if(res.status == 'error'){
  //       this.api.presentToast(res.message);
  //     }else{
  //     }
  //   },(err)=>{
  //     console.log("Error: ",err);
  //     this.api.hideLoading();
  //   })
  // }


  homeTab() {
    this.navCtrlr.navigateRoot('home-cars-after-login');
  }

  messagesTab() {
    this.navCtrlr.navigateRoot('messages');
  }

  bookingTab() {
    this.navCtrlr.navigateRoot('bookings');
  }

  favoriteTab() {
    this.navCtrlr.navigateRoot('favorites');
  }

  showDetails(data) {
    console.log(data);

    if (this.selectedid == data.car_id) {
      this.selectedid = 0;
    } else {
      this.navCtrlr.navigateRoot(['/booking-details', {
        data: JSON.stringify(data),
        previous_tab: this.previous_tab,
        upcoming_tab: this.upcoming_tab
      }]); // this.selectedid = data.car_id;
    } // if(this.previousItemdetails == true || this.upcomingItemdetails == true){
    //   this.previousItemdetails = false;
    //   this.upcomingItemdetails = false;
    // }
    // else if(this.previousItemdetails == false || this.upcomingItemdetails == false){
    //   this.previousItemdetails = true;
    //   this.upcomingItemdetails = true;
    // }

  }

  startCarBooking() {
    this.navCtrlr.navigateRoot('car-booking');
  }

};

BookingsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
}, {
  type: _check_user_service__WEBPACK_IMPORTED_MODULE_6__.CheckUserService
}];

BookingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-bookings',
  template: _bookings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_bookings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BookingsPage);


/***/ }),

/***/ 31083:
/*!********************************************************!*\
  !*** ./src/app/bookings/bookings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.header {\n  position: relative;\n  padding: 30px 16px 0px;\n  display: flex;\n  align-items: center;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  position: absolute;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.tab_button {\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #B0B0B0;\n  --background: #FBFBFB;\n  height: 48px;\n  width: 48%;\n  margin: 0px;\n  text-transform: capitalize;\n  --box-shadow: !important;\n  --border-color: #D4DCE1;\n  --border-width: 1.5px;\n  --border-style: solid;\n  --border-radius: 10px !important;\n}\n\n.tab_active {\n  --background:#8000FF;\n  font-weight: 600;\n  color: white;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  position: absolute;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n}\n\n.car_info_subdiv {\n  position: absolute;\n  right: 12px;\n  bottom: 0px;\n}\n\n.cost_label {\n  font-size: 10px;\n  font-weight: 500;\n  color: white;\n  margin-right: 8px;\n}\n\n.car_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.rebook_label {\n  position: absolute;\n  bottom: 29%;\n  right: 16px;\n  background: #FFDF00;\n  padding: 4px 29px;\n  border-radius: 34px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #0F172A;\n}\n\n.box_styling {\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 11px 12px 10px;\n  border-radius: 5px;\n}\n\n.box_heading {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.set_width {\n  width: 43.5%;\n}\n\n.range_div {\n  transform: rotate(90deg);\n  position: absolute;\n  top: 46px;\n  right: 37.5%;\n  width: 135px !important;\n}\n\n.ion_range {\n  --knob-background: #8000FF!important;\n  --bar-background: #D4DCE1 !important;\n  --knob-box-shadow: 0px 0px 2px 5px white;\n  --knob-size: 11px;\n  --bar-height: 1px;\n}\n\n.box_description {\n  margin-top: 7px;\n  font-size: 12px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n  height: auto;\n  max-height: 90px;\n  overflow: hidden;\n}\n\n.box_sub_heading {\n  margin-top: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #8000FF;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 65%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 43.5%;\n    width: 135px !important;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 896px) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 46.5%;\n    width: 135px !important;\n  }\n}\n\n@media screen and (device-width: 412px) and (max-device-height: 915px) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 43.5%;\n    width: 135px !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .set_width {\n    width: 43.5%;\n    height: 175px;\n  }\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 73.5%;\n    width: 135px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmdzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGJvb2tpbmdzXFxib29raW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEE7RUFDQyx1QkFBQTtFQUNHLGtCQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksdUJBQUE7QUNVSjs7QURSQTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FDV0o7O0FEVEE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDYUo7O0FEWEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDZUo7O0FEYkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDaUJKOztBRGZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2tCSjs7QURoQkE7RUFDSSxpQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ29CSjs7QURsQkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDcUJKOztBRG5CQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ3NCSjs7QURwQkE7RUFDSSxZQUFBO0FDdUJKOztBRHJCQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDd0JKOztBRHRCQTtFQUNJLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDMEJKOztBRHhCQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUMyQko7O0FEekJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQzRCSjs7QUQxQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUM2Qko7O0FEM0JBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDOEJKOztBRDVCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FDK0JKOztBRDdCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDZ0NKOztBRDlCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDaUNKOztBRC9CQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQ2tDSjs7QURoQ0E7RUFLSTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VDK0JOO0FBQ0Y7O0FEN0JBO0VBS0k7SUFDSSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQzJCTjtBQUNGOztBRHpCQTtFQUlJO0lBQ0ksd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUN3Qk47QUFDRjs7QURwQkE7RUFJSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDbUJOO0VEakJFO0lBQ0ksd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUNtQk47QUFDRiIsImZpbGUiOiJib29raW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi51cmJhbmlzdHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBvcHBpbnN7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IHZhcigtLW1lbnUtaWNvbik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjE1cHggMTZweCAyMHB4O1xyXG59XHJcbi50YWJfYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI0IwQjBCMDtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1ib3gtc2hhZG93OiAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNENERDRTE7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMS41cHg7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4udGFiX2FjdGl2ZXtcclxuICAgIC0tYmFja2dyb3VuZDojODAwMEZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyX2luZm9fYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6ICMwRjE3MkE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogOXB4IDEycHggOC41cHggMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJfbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnJhdGluZ192YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjRDREQ0UxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY2FyX2luZm9fc3ViZGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICBib3R0b206IDBweDtcclxufVxyXG4uY29zdF9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4uY2FyX3ByaWNle1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc3Rhcl9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4ucmVib29rX2xhYmVse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyOSU7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkRGMDA7XHJcbiAgICBwYWRkaW5nOiA0cHggMjlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbn1cclxuLmJveF9zdHlsaW5ne1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG4gICAgcGFkZGluZzogMTFweCAxMnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJveF9oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uc2V0X3dpZHRoe1xyXG4gICAgd2lkdGg6IDQzLjUlO1xyXG59XHJcbi5yYW5nZV9kaXZ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ2cHg7XHJcbiAgICByaWdodDogMzcuNSU7XHJcbiAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcclxufVxyXG4uaW9uX3Jhbmdle1xyXG4gICAgLS1rbm9iLWJhY2tncm91bmQ6ICM4MDAwRkYhaW1wb3J0YW50O1xyXG4gICAgLS1iYXItYmFja2dyb3VuZDogI0Q0RENFMSAhaW1wb3J0YW50O1xyXG4gICAgLS1rbm9iLWJveC1zaGFkb3c6IDBweCAwcHggMnB4IDVweCB3aGl0ZTtcclxuICAgIC0ta25vYi1zaXplOiAxMXB4O1xyXG4gICAgLS1iYXItaGVpZ2h0OiAxcHg7XHJcbn1cclxuLmJveF9kZXNjcmlwdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYm94X3N1Yl9oZWFkaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jYXIyX3ByaWNle1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyMl9pbmZvX3N1YmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbnZpdGVfYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MHB4O1xyXG4gICAgd2lkdGg6NjUlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uYnRuX2xhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQjFBOEI5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4uYnRuQWN0aXZlX2xhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4uaW9uX3RhYl9iYXJ7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDEycHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTNweCAxMHB4IHJnYigwIDAgMCAvIDE2JSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MzZweCkgXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHsgXHJcblxyXG4gICAgLnJhbmdlX2RpdntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDZweDtcclxuICAgICAgICByaWdodDogNDMuNSU7XHJcbiAgICAgICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogODk2cHgpIFxyXG4gIHsgXHJcblxyXG4gICAgLnJhbmdlX2RpdiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDQ2LjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gXHJcbiAgYW5kIChkZXZpY2Utd2lkdGg6IDQxMnB4KSBcclxuICBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA5MTVweCkgXHJcbiAge1xyXG4gICAgLnJhbmdlX2RpdntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDZweDtcclxuICAgICAgICByaWdodDogNDMuNSU7XHJcbiAgICAgICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XHJcbiAgICAuc2V0X3dpZHRoe1xyXG4gICAgICAgIHdpZHRoOiA0My41JTtcclxuICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgfVxyXG4gICAgLnJhbmdlX2RpdntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDZweDtcclxuICAgICAgICByaWdodDogNzMuNSU7XHJcbiAgICAgICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi51cmJhbmlzdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wb3BwaW5zIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudWljb24ge1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMTVweCAxNnB4IDIwcHg7XG59XG5cbi50YWJfYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0IwQjBCMDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1ib3gtc2hhZG93OiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMTtcbiAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4udGFiX2FjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDojODAwMEZGO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJfaW5mb19ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICMwRjE3MkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyX25hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yYXRpbmdfdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2FyX2luZm9fc3ViZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5jb3N0X2xhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY2FyX3ByaWNlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGFyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4ucmVib29rX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI5JTtcbiAgcmlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNGRkRGMDA7XG4gIHBhZGRpbmc6IDRweCAyOXB4O1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xufVxuXG4uYm94X3N0eWxpbmcge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgcGFkZGluZzogMTFweCAxMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJveF9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnNldF93aWR0aCB7XG4gIHdpZHRoOiA0My41JTtcbn1cblxuLnJhbmdlX2RpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2cHg7XG4gIHJpZ2h0OiAzNy41JTtcbiAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb25fcmFuZ2Uge1xuICAtLWtub2ItYmFja2dyb3VuZDogIzgwMDBGRiFpbXBvcnRhbnQ7XG4gIC0tYmFyLWJhY2tncm91bmQ6ICNENERDRTEgIWltcG9ydGFudDtcbiAgLS1rbm9iLWJveC1zaGFkb3c6IDBweCAwcHggMnB4IDVweCB3aGl0ZTtcbiAgLS1rbm9iLXNpemU6IDExcHg7XG4gIC0tYmFyLWhlaWdodDogMXB4O1xufVxuXG4uYm94X2Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDkwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3hfc3ViX2hlYWRpbmcge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4MDAwRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNhcjJfcHJpY2Uge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcjJfaW5mb19zdWJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW52aXRlX2J0biB7XG4gIC0tYmFja2dyb3VuZDojODAwMEZGO1xuICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICB3aWR0aDogNjUlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5idG4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYnRuX2xhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjQjFBOEI5O1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uYnRuQWN0aXZlX2xhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uaW9uX3RhYl9iYXIge1xuICBwYWRkaW5nOiA4cHggOHB4IDEycHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3gtc2hhZG93OiAwcHggLTNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MzZweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLnJhbmdlX2RpdiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ2cHg7XG4gICAgcmlnaHQ6IDQzLjUlO1xuICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4OTZweCkge1xuICAucmFuZ2VfZGl2IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDZweDtcbiAgICByaWdodDogNDYuNSU7XG4gICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDQxMnB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA5MTVweCkge1xuICAucmFuZ2VfZGl2IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDZweDtcbiAgICByaWdodDogNDMuNSU7XG4gICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcbiAgLnNldF93aWR0aCB7XG4gICAgd2lkdGg6IDQzLjUlO1xuICAgIGhlaWdodDogMTc1cHg7XG4gIH1cbiAgLnJhbmdlX2RpdiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ2cHg7XG4gICAgcmlnaHQ6IDczLjUlO1xuICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

/***/ }),

/***/ 68263:
/*!********************************************************!*\
  !*** ./src/app/bookings/bookings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Bookings</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"display: flex;justify-content: space-between;\">\n      <ion-button class=\"tab_button\" [class.tab_active]=\"previous_tab==true\" (click)=\"previousTab('previous')\">Previous</ion-button>\n      <ion-button class=\"tab_button\" [class.tab_active]=\"upcoming_tab==true\" (click)=\"upcomingTab('upcoming')\">Upcoming</ion-button>\n    </div>\n    <div *ngIf=\"previous_tab==true\" >\n     \n      <div *ngFor=\"let data of previousBookingRecords\">\n        <div style=\"text-align: center; margin-top: 16px; position: relative;\" (click)=\"showDetails(data)\">\n          <img style=\"width: 100%;\" src=\"assets/images/bookings_car.svg\" alt=\"\">\n          <!-- (click)=\"updateFavoriteStatus(data.car_id)\" -->\n          <img  style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\">\n          <!-- <img  style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\"> -->\n          <!-- (click)=\"updateFavoriteStatus(data.car_id)\" -->\n          <!-- <img (click)=\"updateFavoriteStatus()\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\"> -->\n          <!-- (click)=\"startCarBooking()\" -->\n          <div class=\"rebook_label poppins\" >Rebook</div>\n          <div class=\"car_info_box\" >\n            <div>\n              <div class=\"car_name poppins\">BMW 2 series</div>\n              <!-- (click)=\"openModal()\" -->\n              <div style=\"text-align: left;line-height: 1;\" >\n                <span>\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span class=\"rating_value urbanist\">(0)</span>\n              </div>\n            </div>\n            <div class=\"car_info_subdiv\">\n              <div><span class=\"cost_label poppins\">Total Cost</span><span class=\"car_price poppins\">$</span><span class=\"car_price poppins\" style=\"font-size: 32px;\">{{data.total_cost}}</span></div>\n            </div>\n          </div>\n        </div>\n        \n        <div *ngIf=\"selectedid == data.car_id\">\n          <div class=\"box_styling\">\n            <div class=\"box_heading\">Description</div>\n            <div class=\"box_description\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n              Lorem Ipsum has been the industry's standard dummy text ever since the \n              1500s, when an unknown printer took a galley of type and scrambled it to\n              make a type specimen book.It has survived not only five centuries, but \n              also the leap into electronic typesetting, remaining essentially \n              unchanged. It was popularised in the 1960s with the release of Letraset \n              sheets containing Lorem Ipsum passages, and more recently with desktop \n              publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n            </div>\n          </div>\n      \n          <div class=\"box_styling\">\n            <div class=\"box_heading\">Owner's Details</div>\n            <div class=\"box_sub_heading\">About</div>\n            <div class=\"box_description\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n              Lorem Ipsum has been the industry's standard dummy text ever since\n              the 1500s.\n            </div>\n          </div>\n      \n          <div class=\"box_styling\">\n            <div class=\"box_sub_heading\" style=\"margin-top: 0px;\">Location</div>\n            <div class=\"box_description\" style=\"margin-top: 4px;\">\n              Los Angeles, CA 90015 {{data.company_location}}\n            </div>\n          </div>\n      \n          <div class=\"box_styling\">\n            <div class=\"box_heading\">Rent Dates</div>\n            <div style=\"display: flex;justify-content: space-between;width: 85%;\">\n              <div>\n                <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">Start Date</div>\n                <div class=\"box_description\" style=\"margin-top: 3px;\">{{data.start_date}}</div>\n              </div>\n              <div>\n                <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">End Date</div>\n                <div class=\"box_description\" style=\"margin-top: 3px;\">{{data.end_date}}</div>\n              </div>\n            </div>\n          </div>\n      \n          <div class=\"box_heading\" style=\"color: #0F172A;margin-top: 11px;\">You might like this too!</div>\n      \n          <div style=\"text-align: center; margin-top: 13px; position: relative; \">\n            <img style=\"width: 100%;\" src=\"assets/images/bookings_car2.svg\" alt=\"\">\n            <img style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\">\n            <!-- (click)=\"startCarBooking()\" -->\n            <div class=\"rebook_label urbanist\" >Rebook</div>\n            <div class=\"car_info_box\" >\n              <div>\n                <div class=\"car_name urbanist\">BMW 2 series</div>\n                <div style=\"text-align: left;line-height: 1;\">\n                  <span>\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" style=\"margin-right: 6.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </span>\n                  <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\">not rated yet</span>\n                </div>\n              </div>\n              <div class=\"car2_info_subdiv\">\n                <div style=\"line-height: 1;\"><span class=\"car2_price urbanist\" >$</span><span class=\"car2_price urbanist\" style=\"font-size: 32px;margin-right: 8px;\">26</span><span class=\"car2_price urbanist\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n                <!-- <div><img src=\"assets/images/icons/drop_down_arrow.svg\" alt=\"\"></div> -->\n              </div>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div *ngIf=\"upcoming_tab==true\" >\n      \n      <div *ngFor=\"let data of upcomingBookingRecords\">\n        <div style=\"text-align: center; margin-top: 16px; position: relative;\" (click)=\"showDetails(data)\">\n          <img style=\"width: 100%;\" src=\"assets/images/bookings_car.svg\" alt=\"\">\n          <!-- (click)=\"updateFavoriteStatus(data.car_id)\" -->\n          <img  style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\">\n          <!-- <img (click)=\"updateFavoriteStatus()\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\"> -->\n          <!-- (click)=\"openCancelBookingModal()\" -->\n          <div class=\"rebook_label urbanist\" style=\"background: #E23C3C;color: white;\" >Cancel</div>\n          <div class=\"car_info_box\" >\n            <div>\n              <div class=\"car_name urbanist\">BMW 2 series</div>\n              <div style=\"text-align: left;line-height: 1;\">\n                <span>\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span class=\"rating_value urbanist\">(4.0)</span>\n              </div>\n            </div>\n            <div class=\"car_info_subdiv\">\n              <div><span class=\"cost_label urbanist\">Total Cost</span><span class=\"car_price urbanist\">$</span><span class=\"car_price urbanist\" style=\"font-size: 32px;\">{{data.total_cost}}</span></div>\n            </div>\n          </div>\n        </div>\n        \n        <div *ngIf=\"selectedid == data.car_id\">\n          <div style=\"display: flex;justify-content: space-between;\">\n            <div class=\"box_styling\" style=\"width: 55%;\">\n              <div class=\"box_heading\">Owner's Details</div>\n              <div class=\"box_sub_heading\">About</div>\n              <div class=\"box_description\" style=\"max-height: 108px;\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                Lorem Ipsum has been the industry's standard dummy text ever since\n                the 1500s.\n              </div>\n            </div>\n        \n            <div class=\"box_styling set_width\">\n              <div class=\"box_heading\">Rent Dates</div>\n    \n              <div style=\"position: relative;\" >\n                <div class=\"range_div\">\n                  <ion-range class=\"ion_range\"></ion-range>\n                </div>\n                <div style=\"position: absolute; top: 14px; left: 23px;\">\n                  <div>\n                    <div style=\"display: flex;align-items: center;\">\n                      <div style=\"margin-right: 8px;\">\n                        <img src=\"assets/images/icons/range_point.svg\" alt=\"\">\n                      </div>\n                      <div>\n                        <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">Start Date</div>\n                        <div class=\"box_description\" style=\"margin-top: 3px;\">{{data.start_date}}</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div style=\"height: 33px;\"></div>\n                  <div>\n                    <div style=\"display: flex;align-items: center;\">\n                      <div style=\"margin-right: 8px;\">\n                        <img src=\"assets/images/icons/range_point.svg\" alt=\"\">\n                      </div>\n                      <div>\n                        <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">End Date</div>\n                        <div class=\"box_description\" style=\"margin-top: 3px;\">{{data.end_date}}</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n          </div>\n      \n          <div style=\"text-align: center; margin-top: 13px; position: relative; \">\n            <img style=\"width: 100%;\" src=\"assets/images/bookings_car2.svg\" alt=\"\">\n            <img style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\">\n            <!-- (click)=\"openCancelBookingModal()\" -->\n            <div class=\"rebook_label urbanist\" style=\"background: #E23C3C;color: white;\" >Cancel</div>\n            <div class=\"car_info_box\" >\n              <div>\n                <div class=\"car_name urbanist\">BMW 2 series</div>\n                <div style=\"text-align: left;line-height: 1;\">\n                  <span>\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" style=\"margin-right: 6.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </span>\n                  <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\">not rated yet</span>\n                </div>\n              </div>\n              <div class=\"car2_info_subdiv\">\n                <div style=\"line-height: 1;\"><span class=\"car2_price urbanist\" >$</span><span class=\"car2_price urbanist\" style=\"font-size: 32px;margin-right: 8px;\">26</span><span class=\"car2_price urbanist\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n                <!-- <div><img src=\"assets/images/icons/drop_down_arrow.svg\" alt=\"\"></div> -->\n              </div>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <div style=\"margin: 10px 0px 12px;\" *ngIf=\"previous_tab==true && selectedid !== 0\">\n      <div style=\"text-align: center;\">\n        <ion-button class=\"invite_btn\" (click)=\"openModal()\">\n          <span class=\"btn-text\">Give Ratings</span>\n        </ion-button>\n      </div>\n    </div>\n\n    <ion-tabs style=\"display:contents ;\">\n\n      <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n        <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n          <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Home</ion-label>\n          <!-- <ion-badge>6</ion-badge> -->\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n          <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages.svg\" alt=\"\">\n          <ion-label class=\"btn_label\" >Messages</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n          <img src=\"assets/images/tab_icons/booking_active.svg\" alt=\"\">\n          <ion-label class=\"btnActive_label\">Booking</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n          <img src=\"assets/images/tab_icons/favorite.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Favorities</ion-label>\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n    </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_bookings_bookings_module_ts.js.map