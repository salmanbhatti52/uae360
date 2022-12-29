"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booking-details_booking-details_module_ts"],{

/***/ 18458:
/*!*******************************************************************!*\
  !*** ./src/app/booking-details/booking-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingDetailsPageRoutingModule": () => (/* binding */ BookingDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _booking_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-details.page */ 27381);




const routes = [
    {
        path: '',
        component: _booking_details_page__WEBPACK_IMPORTED_MODULE_0__.BookingDetailsPage
    }
];
let BookingDetailsPageRoutingModule = class BookingDetailsPageRoutingModule {
};
BookingDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingDetailsPageRoutingModule);



/***/ }),

/***/ 83698:
/*!***********************************************************!*\
  !*** ./src/app/booking-details/booking-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingDetailsPageModule": () => (/* binding */ BookingDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-details-routing.module */ 18458);
/* harmony import */ var _booking_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-details.page */ 27381);







let BookingDetailsPageModule = class BookingDetailsPageModule {
};
BookingDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingDetailsPageRoutingModule
        ],
        declarations: [_booking_details_page__WEBPACK_IMPORTED_MODULE_1__.BookingDetailsPage]
    })
], BookingDetailsPageModule);



/***/ }),

/***/ 27381:
/*!*********************************************************!*\
  !*** ./src/app/booking-details/booking-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingDetailsPage": () => (/* binding */ BookingDetailsPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _booking_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-details.page.html?ngResource */ 79883);
/* harmony import */ var _booking_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-details.page.scss?ngResource */ 55113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _give_ratings_popup_give_ratings_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../give-ratings-popup/give-ratings-popup.page */ 37227);
/* harmony import */ var _cancel_booking_popup_cancel_booking_popup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cancel-booking-popup/cancel-booking-popup.page */ 305);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 99805);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);














let BookingDetailsPage = class BookingDetailsPage {
  constructor(navCtrlr, modalCtrlr, api, checkUser, location, activatedRoute) {
    this.navCtrlr = navCtrlr;
    this.modalCtrlr = modalCtrlr;
    this.api = api;
    this.checkUser = checkUser;
    this.location = location;
    this.activatedRoute = activatedRoute;
    this.previous_tab = 'false';
    this.upcoming_tab = 'false';
    this.previousItemdetails = 'false';
    this.upcomingItemdetails = 'false';
    this.previousBookingRecords = [];
    this.upcomingBookingRecords = [];
    this.selectedid = 0;
    this.favorites = '';
  }

  ngOnInit() {
    // this.previousTab('previous');
    this.bookingRecordData = JSON.parse(this.activatedRoute.snapshot.params['data']);
    console.log('bookingRecordData: ', this.bookingRecordData);
    this.previous_tab = this.activatedRoute.snapshot.params['previous_tab'];
    console.log('previous_tab: ', this.previous_tab);
    this.upcoming_tab = this.activatedRoute.snapshot.params['upcoming_tab'];
    console.log('upcoming_tab: ', this.upcoming_tab);
  }

  goBack() {
    this.location.back();
  }

  openModal() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrlr.create({
        component: _give_ratings_popup_give_ratings_popup_page__WEBPACK_IMPORTED_MODULE_3__.GiveRatingsPopupPage,
        cssClass: 'give_ratings',
        showBackdrop: true,
        componentProps: {
          car_id: _this.bookingRecordData.car_id
        }
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

  openCancelBookingModal(bookingId) {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(_this2.bookingRecordData.start_date).toISOString()), 'yyyy-MM-dd'));
      console.log(`${_this2.bookingRecordData.start_date} ${_this2.bookingRecordData.start_time}`);
      const stDate = new Date(`${_this2.bookingRecordData.start_date} ${_this2.bookingRecordData.start_time}`);
      console.log("startDateTime: ", stDate);
      let todayDate = new Date();
      console.log("NewDateTime: ", todayDate); // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?

      let result = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(stDate, todayDate);
      console.log("result = ", result); //=> 12

      console.log("showBookingId", bookingId);
      const modal = yield _this2.modalCtrlr.create({
        component: _cancel_booking_popup_cancel_booking_popup_page__WEBPACK_IMPORTED_MODULE_4__.CancelBookingPopupPage,
        cssClass: result > 24 ? 'cancel_booking' : 'cancel_booking2',
        componentProps: {
          booking_id: bookingId,
          hours_left: result
        },
        showBackdrop: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'cancelBooking') {
        console.log(data);

        _this2.location.back();
      }
    })();
  }

  updateFavoriteStatus(carId) {
    let data = {
      favourite_car_id: carId,
      user_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('favouriteCars', data).subscribe(res => {
      this.api.hideLoading();
      console.log("Response: ", res);

      if (res.status == 'success') {
        this.favorites = res.data;
        this.bookingRecordData.user_favourite_cars.length = 0;
      } else if (res.status == 'error') {
        this.api.presentToast(res.message);
      } else {}
    }, err => {
      console.log("Error: ", err);
      this.api.hideLoading();
    });
  }

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
  } // showDetails(data){
  //   console.log(data);
  //   if( this.selectedid == data.car_id)
  //   {
  //     this.selectedid = 0
  //   }else{
  //     this.selectedid = data.car_id
  //   }
  // }


  startCarBooking() {
    let carData = {
      car_id: this.bookingRecordData.car_id,
      rent_cost_day: this.bookingRecordData.cars_details[0].rent_cost_day,
      rent_cost_month: this.bookingRecordData.cars_details[0].rent_cost_month,
      vehical_name: this.bookingRecordData.cars_details[0].vehical_name,
      users_company: [{
        company_location: this.bookingRecordData.users_company_details[0].company_location
      }],
      favourite_status: this.bookingRecordData.user_favourite_cars[0].status,
      image1: this.bookingRecordData.cars_details[0].image1,
      rating: this.bookingRecordData.cars_details[0].rating,
      total_trips: '221'
    };
    let carDataById = [];
    carDataById[0] = carData;
    console.log("CAR DATA BY ID ARRAY: ", carDataById);
    this.api.carDataById = carDataById;
    this.navCtrlr.navigateForward('car-booking');
  }

};

BookingDetailsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
}, {
  type: _check_user_service__WEBPACK_IMPORTED_MODULE_6__.CheckUserService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}];

BookingDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-booking-details',
  template: _booking_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_booking_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BookingDetailsPage);


/***/ }),

/***/ 70967:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ 99805:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInHours/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInHours)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 30677);
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 94913);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ 70967);




/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */

function differenceInHours(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ 94913:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ 55113:
/*!**********************************************************************!*\
  !*** ./src/app/booking-details/booking-details.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.header {\n  position: relative;\n  padding: 30px 16px 0px;\n  display: flex;\n  align-items: center;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  position: absolute;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.wrapper {\n  padding: 5px 16px 20px;\n}\n\n.btns_bg_css {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 16px 5px;\n}\n\n.tab_button.md {\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  --color: #B0B0B0;\n  --background: #FBFBFB;\n  height: 48px;\n  width: 48%;\n  margin: 0px;\n  text-transform: capitalize;\n  --box-shadow: !important;\n  --border-color: #D4DCE1;\n  --border-width: 1.5px;\n  --border-style: solid;\n  --border-radius: 10px !important;\n}\n\n.tab_active.md {\n  --background:#8000FF;\n  font-weight: 600;\n  --color: white;\n}\n\n.tab_button.ios {\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  --color: #B0B0B0;\n  --background: #FBFBFB;\n  height: 48px;\n  width: 48%;\n  margin: 0px;\n  text-transform: capitalize;\n  --box-shadow: !important;\n  --border-color: #D4DCE1;\n  --border-width: 1.5px;\n  --border-style: solid;\n  --border-radius: 10px !important;\n}\n\n.tab_active.ios {\n  --background:#8000FF;\n  font-weight: 600;\n  --color: white;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n}\n\n.car_info_subdiv {\n  position: absolute;\n  right: 12px;\n  bottom: 0px;\n}\n\n.cost_label {\n  font-size: 10px;\n  font-weight: 500;\n  color: white;\n  margin-right: 8px;\n}\n\n.car_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.rebook_label {\n  position: absolute;\n  bottom: 29%;\n  right: 16px;\n  background: #FFDF00;\n  padding: 4px 29px;\n  border-radius: 34px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #0F172A;\n}\n\n.status_label {\n  position: absolute;\n  bottom: 29%;\n  left: 16px;\n  background: #0F172A;\n  padding: 4px 29px;\n  border-radius: 34px;\n  font-size: 12px;\n  font-weight: 400;\n  color: white;\n}\n\n.box_styling {\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 11px 12px 10px;\n  border-radius: 5px;\n  height: auto;\n  max-height: 180px;\n  overflow: hidden;\n}\n\n.box_heading {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.set_width {\n  width: 43.5%;\n}\n\n.range_div {\n  transform: rotate(90deg);\n  position: absolute;\n  top: 46px;\n  right: 37.5%;\n  width: 135px !important;\n}\n\n.ion_range {\n  --knob-background: #8000FF!important;\n  --bar-background: #D4DCE1 !important;\n  --knob-box-shadow: 0px 0px 2px 5px white;\n  --knob-size: 11px;\n  --bar-height: 1px;\n}\n\n.box_description {\n  margin-top: 7px;\n  font-size: 12px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n  height: auto;\n  max-height: 90px;\n  overflow: hidden;\n}\n\n.box_sub_heading {\n  margin-top: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #8000FF;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 65%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 43.5%;\n    width: 135px !important;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 896px) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 46.5%;\n    width: 135px !important;\n  }\n}\n\n@media screen and (device-width: 412px) and (max-device-height: 915px) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 43.5%;\n    width: 135px !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .set_width {\n    width: 43.5%;\n    height: 175px;\n  }\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 73.5%;\n    width: 135px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctZGV0YWlscy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxib29raW5nLWRldGFpbHNcXGJvb2tpbmctZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEE7RUFDQyx1QkFBQTtFQUNHLGtCQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksc0JBQUE7QUNVSjs7QURSQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FDV0o7O0FEVEE7RUFDSSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUNZSjs7QURWQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDYUo7O0FEWEE7RUFDSSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUNjSjs7QURaQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDZUo7O0FEYkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDZUo7O0FEYkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2lCSjs7QURmQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNrQko7O0FEaEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNvQko7O0FEbEJBO0VBQ0ksaUJBQUE7QUNxQko7O0FEbkJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNzQko7O0FEcEJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNzQko7O0FEcEJBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDdUJKOztBRHJCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ3dCSjs7QUR0QkE7RUFDSSxZQUFBO0FDeUJKOztBRHZCQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDMEJKOztBRHhCQTtFQUNJLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUMyQko7O0FEekJBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDNEJKOztBRDFCQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUM2Qko7O0FEM0JBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQzhCSjs7QUQ1QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUMrQko7O0FEN0JBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZ0NKOztBRDlCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FDaUNKOztBRC9CQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDa0NKOztBRGhDQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDbUNKOztBRGpDQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQ29DSjs7QURsQ0E7RUFLSTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VDaUNOO0FBQ0Y7O0FEL0JBO0VBS0k7SUFDSSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQzZCTjtBQUNGOztBRDNCQTtFQUlJO0lBQ0ksd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUMwQk47QUFDRjs7QUR0QkE7RUFJSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDcUJOO0VEbkJFO0lBQ0ksd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUNxQk47QUFDRiIsImZpbGUiOiJib29raW5nLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4udXJiYW5pc3R7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wb3BwaW5ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzo1cHggMTZweCAyMHB4O1xyXG59XHJcbi5idG5zX2JnX2Nzc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE2cHggNXB4O1xyXG59XHJcbi50YWJfYnV0dG9uLm1ke1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLWNvbG9yOiAjQjBCMEIwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJveC1zaGFkb3c6ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMTtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJfYWN0aXZlLm1ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnRhYl9idXR0b24uaW9ze1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLWNvbG9yOiAjQjBCMEIwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJveC1zaGFkb3c6ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMTtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJfYWN0aXZlLmlvc3tcclxuICAgIC0tYmFja2dyb3VuZDojODAwMEZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJfaW5mb19ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogIzBGMTcyQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiA5cHggMTJweCA4LjVweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcl9uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ucmF0aW5nX3ZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5jYXJfaW5mb19zdWJkaXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG59XHJcbi5jb3N0X2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5jYXJfcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zdGFyX21hcmdpbntcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcbi5yZWJvb2tfbGFiZWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDI5JTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGREYwMDtcclxuICAgIHBhZGRpbmc6IDRweCAyOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxufVxyXG4uc3RhdHVzX2xhYmVse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyOSU7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBGMTcyQTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBwYWRkaW5nOiA0cHggMjlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ib3hfc3R5bGluZ3tcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIHBhZGRpbmc6IDExcHggMTJweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5ib3hfaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnNldF93aWR0aHtcclxuICAgIHdpZHRoOiA0My41JTtcclxufVxyXG4ucmFuZ2VfZGl2e1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NnB4O1xyXG4gICAgcmlnaHQ6IDM3LjUlO1xyXG4gICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlvbl9yYW5nZXtcclxuICAgIC0ta25vYi1iYWNrZ3JvdW5kOiAjODAwMEZGIWltcG9ydGFudDtcclxuICAgIC0tYmFyLWJhY2tncm91bmQ6ICNENERDRTEgIWltcG9ydGFudDtcclxuICAgIC0ta25vYi1ib3gtc2hhZG93OiAwcHggMHB4IDJweCA1cHggd2hpdGU7XHJcbiAgICAtLWtub2Itc2l6ZTogMTFweDtcclxuICAgIC0tYmFyLWhlaWdodDogMXB4O1xyXG59XHJcbi5ib3hfZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogOTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJveF9zdWJfaGVhZGluZ3tcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uY2FyMl9wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhcjJfaW5mb19zdWJkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW52aXRlX2J0bntcclxuICAgIC0tYmFja2dyb3VuZDojODAwMEZGO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHdpZHRoOjY1JTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG4tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmJ0bl9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0IxQThCOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmJ0bkFjdGl2ZV9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmlvbl90YWJfYmFye1xyXG4gICAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2IoMCAwIDAgLyAxNiUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7IFxyXG5cclxuICAgIC5yYW5nZV9kaXZ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDQzLjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDg5NnB4KSBcclxuICB7IFxyXG5cclxuICAgIC5yYW5nZV9kaXYge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0NnB4O1xyXG4gICAgICAgIHJpZ2h0OiA0Ni41JTtcclxuICAgICAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIFxyXG4gIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTJweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogOTE1cHgpIFxyXG4gIHtcclxuICAgIC5yYW5nZV9kaXZ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDQzLjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gICAgLnNldF93aWR0aHtcclxuICAgICAgICB3aWR0aDogNDMuNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIH1cclxuICAgIC5yYW5nZV9kaXZ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDczLjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4udXJiYW5pc3Qge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucG9wcGlucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzBweCAxNnB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnVpY29uIHtcbiAgY29sb3I6IHZhcigtLW1lbnUtaWNvbik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDIwcHg7XG59XG5cbi5idG5zX2JnX2NzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTVweCAxNnB4IDVweDtcbn1cblxuLnRhYl9idXR0b24ubWQge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tY29sb3I6ICNCMEIwQjA7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDglO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYm94LXNoYWRvdzogIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6ICNENERDRTE7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnRhYl9hY3RpdmUubWQge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi50YWJfYnV0dG9uLmlvcyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1jb2xvcjogI0IwQjBCMDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1ib3gtc2hhZG93OiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMTtcbiAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4udGFiX2FjdGl2ZS5pb3Mge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJfaW5mb19ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICMwRjE3MkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiA5cHggMTJweCA4LjVweCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcl9uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmF0aW5nX3ZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0Q0RENFMTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNhcl9pbmZvX3N1YmRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uY29zdF9sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNhcl9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3Rhcl9tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLnJlYm9va19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyOSU7XG4gIHJpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjRkZERjAwO1xuICBwYWRkaW5nOiA0cHggMjlweDtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzBGMTcyQTtcbn1cblxuLnN0YXR1c19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyOSU7XG4gIGxlZnQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICMwRjE3MkE7XG4gIHBhZGRpbmc6IDRweCAyOXB4O1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJveF9zdHlsaW5nIHtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIHBhZGRpbmc6IDExcHggMTJweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3hfaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zZXRfd2lkdGgge1xuICB3aWR0aDogNDMuNSU7XG59XG5cbi5yYW5nZV9kaXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NnB4O1xuICByaWdodDogMzcuNSU7XG4gIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xufVxuXG4uaW9uX3JhbmdlIHtcbiAgLS1rbm9iLWJhY2tncm91bmQ6ICM4MDAwRkYhaW1wb3J0YW50O1xuICAtLWJhci1iYWNrZ3JvdW5kOiAjRDREQ0UxICFpbXBvcnRhbnQ7XG4gIC0ta25vYi1ib3gtc2hhZG93OiAwcHggMHB4IDJweCA1cHggd2hpdGU7XG4gIC0ta25vYi1zaXplOiAxMXB4O1xuICAtLWJhci1oZWlnaHQ6IDFweDtcbn1cblxuLmJveF9kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm94X3N1Yl9oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jYXIyX3ByaWNlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXIyX2luZm9fc3ViZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmludml0ZV9idG4ge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJ0bl9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0IxQThCOTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmJ0bkFjdGl2ZV9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzgwMDBGRjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmlvbl90YWJfYmFyIHtcbiAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5yYW5nZV9kaXYge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NnB4O1xuICAgIHJpZ2h0OiA0My41JTtcbiAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODk2cHgpIHtcbiAgLnJhbmdlX2RpdiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ2cHg7XG4gICAgcmlnaHQ6IDQ2LjUlO1xuICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogOTE1cHgpIHtcbiAgLnJhbmdlX2RpdiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ2cHg7XG4gICAgcmlnaHQ6IDQzLjUlO1xuICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XG4gIC5zZXRfd2lkdGgge1xuICAgIHdpZHRoOiA0My41JTtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICB9XG4gIC5yYW5nZV9kaXYge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NnB4O1xuICAgIHJpZ2h0OiA3My41JTtcbiAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 79883:
/*!**********************************************************************!*\
  !*** ./src/app/booking-details/booking-details.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <!-- <ion-menu-button class=\"menuicon\"></ion-menu-button> -->\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"title\">Bookings</div>\n    </div>\n    <div class=\"btns_bg_css\" >\n      <ion-button class=\"tab_button\" [class.tab_active]=\"previous_tab=='true'\" >Previous</ion-button>\n      <ion-button class=\"tab_button\" [class.tab_active]=\"upcoming_tab=='true'\" >Upcoming</ion-button>\n    </div>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n   \n    <div *ngIf=\"previous_tab=='true'\" >\n     \n      <div >\n        <div style=\"text-align: center; margin-top: 16px; position: relative;\" >\n          <img style=\"object-fit: cover;width: 100%;height: 200px;border-radius: 10px 10px 0px 0px;\" src=\"{{api.imageUrlString}}{{bookingRecordData.cars_details[0].image1}}\" alt=\"\">\n          <div *ngIf=\"bookingRecordData.user_favourite_cars.length != 0\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"bookingRecordData.user_favourite_cars[0].status != 'liked'\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"bookingRecordData.user_favourite_cars[0].status == 'liked'\">\n          </div>\n          <div *ngIf=\"bookingRecordData.user_favourite_cars.length == 0\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites != 'liked'\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n          </div>\n          <div class=\"rebook_label poppins\" (click)=\"startCarBooking()\">Rebook</div>\n          <div class=\"status_label poppins\" >{{bookingRecordData.status}}</div>\n          <div class=\"car_info_box\" >\n            <div>\n              <div class=\"car_name poppins\">{{bookingRecordData.cars_details[0].vehical_name}}</div>\n              <!-- (click)=\"openModal()\" -->\n              <div style=\"text-align: left;line-height: 1;\" >\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating == 0\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=1 && bookingRecordData.cars_details[0].rating < 1.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=1.5 && bookingRecordData.cars_details[0].rating < 2.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=2.5 && bookingRecordData.cars_details[0].rating < 3.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=3.5 && bookingRecordData.cars_details[0].rating < 4.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=4.5 && bookingRecordData.cars_details[0].rating < 5.1\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                </span>\n                <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\" *ngIf=\"bookingRecordData.cars_details[0].rating == 0\">not rated yet</span>\n                <span class=\"rating_value urbanist\" *ngIf=\"bookingRecordData.cars_details[0].rating != 0\">({{bookingRecordData.cars_details[0].rating}})</span>\n              </div>\n            </div>\n            <div class=\"car_info_subdiv\">\n              <div><span class=\"cost_label poppins\">Total Cost</span><span class=\"car_price poppins\">$</span><span class=\"car_price poppins\" style=\"font-size: 32px;\">{{bookingRecordData.total_cost}}</span></div>\n            </div>\n          </div>\n        </div>\n        \n        <!-- -------------------previous details-------------------- -->\n        <div >\n          <div class=\"box_styling\">\n            <div class=\"box_heading\">Description</div>\n            <div class=\"box_description\">\n              {{bookingRecordData.cars_details[0].description}}\n            </div>\n          </div>\n      \n          <div class=\"box_styling\">\n            <div class=\"box_heading\">Owner's Details</div>\n            <div class=\"box_sub_heading\">About</div>\n            <div class=\"box_description\">\n              {{bookingRecordData.users_company_details[0].about}}\n            </div>\n          </div>\n      \n          <div class=\"box_styling\">\n            <div class=\"box_sub_heading\" style=\"margin-top: 0px;\">Location</div>\n            <div class=\"box_description\" style=\"margin-top: 4px;\">\n              {{bookingRecordData.users_company_details[0].company_location}}\n            </div>\n          </div>\n      \n          <div class=\"box_styling\">\n            <div class=\"box_heading\">Rent Dates</div>\n            <div style=\"display: flex;justify-content: space-between;width: 85%;\">\n              <div>\n                <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">Start Date</div>\n                <div class=\"box_description\" style=\"margin-top: 3px;\">{{bookingRecordData.f_start_date}}</div>\n              </div>\n              <div>\n                <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">End Date</div>\n                <div class=\"box_description\" style=\"margin-top: 3px;\">{{bookingRecordData.f_end_date}}</div>\n              </div>\n            </div>\n          </div>\n      \n          \n          <!-- --------------------design object for advertisement---------------- -->\n          <div class=\"box_heading\" style=\"color: #0F172A;margin-top: 11px;\">You might like this too!</div>\n          <div style=\"text-align: center; margin-top: 13px; position: relative; \">\n            <img style=\"width: 100%;\" src=\"assets/images/bookings_car2.svg\" alt=\"\">\n            <img style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\">\n            <div class=\"rebook_label urbanist\" >Rebook</div>\n            <!-- (click)=\"startCarBooking()\" -->\n            <div class=\"status_label poppins\" >Accepted</div>\n            <div class=\"car_info_box\" style=\"position: absolute;\">\n              <div>\n                <div class=\"car_name urbanist\">BMW 2 series</div>\n                <div style=\"text-align: left;line-height: 1;\">\n                  <span>\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" style=\"margin-right: 6.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </span>\n                  <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\">not rated yet</span>\n                </div>\n              </div>\n              <div class=\"car2_info_subdiv\">\n                <div style=\"line-height: 1;\"><span class=\"car2_price urbanist\" >$</span><span class=\"car2_price urbanist\" style=\"font-size: 32px;margin-right: 8px;\">26</span><span class=\"car2_price urbanist\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n                <!-- <div><img src=\"assets/images/icons/drop_down_arrow.svg\" alt=\"\"></div> -->\n              </div>\n              \n            </div>\n          </div>\n        </div>\n        <!-- ---------------------------detailse end---------------------- -->\n      </div>\n\n    </div>\n    <div *ngIf=\"upcoming_tab=='true'\" >\n      \n      <div >\n        <div style=\"text-align: center; margin-top: 16px; position: relative;\" >\n          <img style=\"object-fit: cover;width: 100%;height: 200px;border-radius: 10px 10px 0px 0px;\" src=\"{{api.imageUrlString}}{{bookingRecordData.cars_details[0].image1}}\" alt=\"\">\n          <div *ngIf=\"bookingRecordData.user_favourite_cars.length != 0\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"bookingRecordData.user_favourite_cars[0].status != 'liked'\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"bookingRecordData.user_favourite_cars[0].status == 'liked'\">\n          </div>\n          <div *ngIf=\"bookingRecordData.user_favourite_cars.length == 0\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites != 'liked'\" >\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n          </div>\n          \n          <div class=\"rebook_label urbanist\" style=\"background: #E23C3C;color: white;\" (click)=\"openCancelBookingModal(bookingRecordData.booking_id)\">Cancel</div>\n          <div class=\"status_label poppins\" >{{bookingRecordData.status}}</div>\n          <div class=\"car_info_box\" >\n            <div>\n              <div class=\"car_name urbanist\">{{bookingRecordData.cars_details[0].vehical_name}}</div>\n              <div style=\"text-align: left;line-height: 1;\">\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating == 0\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=1 && bookingRecordData.cars_details[0].rating < 1.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=1.5 && bookingRecordData.cars_details[0].rating < 2.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=2.5 && bookingRecordData.cars_details[0].rating < 3.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=3.5 && bookingRecordData.cars_details[0].rating < 4.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=4.5 && bookingRecordData.cars_details[0].rating < 5.1\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                </span>\n                <span class=\"rating_value urbanist\" *ngIf=\"bookingRecordData.cars_details[0].rating != 0\">({{bookingRecordData.cars_details[0].rating}})</span>\n                <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\" *ngIf=\"bookingRecordData.cars_details[0].rating == 0\">not rated yet</span>\n              </div>\n            </div>\n            <div class=\"car_info_subdiv\">\n              <div><span class=\"cost_label urbanist\">Total Cost</span><span class=\"car_price urbanist\">$</span><span class=\"car_price urbanist\" style=\"font-size: 32px;\">{{bookingRecordData.total_cost}}</span></div>\n            </div>\n          </div>\n        </div>\n        <!-- -------------------------upcoming details------------------------------- -->\n        <div >\n          <div style=\"display: flex;justify-content: space-between;height: 185px;\">\n            <div class=\"box_styling\" style=\"width: 55%;\">\n              <div class=\"box_heading\">Owner's Details</div>\n              <div class=\"box_sub_heading\">About</div>\n              <div class=\"box_description\" style=\"max-height: 108px;\">\n                {{bookingRecordData.users_company_details[0].about}}\n                <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                Lorem Ipsum has been the industry's standard dummy text ever since\n                the 1500s. -->\n              </div>\n            </div>\n        \n            <div class=\"box_styling set_width\">\n              <div class=\"box_heading\">Rent Dates</div>\n    \n              <div style=\"position: relative;\" >\n                <div class=\"range_div\">\n                  <ion-range class=\"ion_range\"></ion-range>\n                </div>\n                <div style=\"position: absolute; top: 14px; left: 23px;\">\n                  <div>\n                    <div style=\"display: flex;align-items: center;\">\n                      <div style=\"margin-right: 8px;\">\n                        <img src=\"assets/images/icons/range_point.svg\" alt=\"\">\n                      </div>\n                      <div>\n                        <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">Start Date</div>\n                        <div class=\"box_description\" style=\"margin-top: 3px;\">{{bookingRecordData.f_start_date}}</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div style=\"height: 33px;\"></div>\n                  <div>\n                    <div style=\"display: flex;align-items: center;\">\n                      <div style=\"margin-right: 8px;\">\n                        <img src=\"assets/images/icons/range_point.svg\" alt=\"\">\n                      </div>\n                      <div>\n                        <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">End Date</div>\n                        <div class=\"box_description\" style=\"margin-top: 3px;\">{{bookingRecordData.f_end_date}}</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n          </div>\n          \n          <!-- ------------design object for advertisement--------------- -->\n          <div class=\"box_heading\" style=\"color: #0F172A;margin-top: 11px;\">You might like this too!</div>\n          <div style=\"text-align: center; margin-top: 13px; position: relative; \">\n            <img style=\"width: 100%;border-radius: 10px 10px 0px 0px;\" src=\"assets/images/bookings_car2.svg\" alt=\"\">\n            <img style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\">\n            <!-- (click)=\"openCancelBookingModal()\" -->\n            <div class=\"rebook_label urbanist\" style=\"background: #E23C3C;color: white;\" >Cancel</div>\n            <div class=\"status_label poppins\" >Accepted</div>\n            <div class=\"car_info_box\" style=\"position: absolute;\" >\n              <div>\n                <div class=\"car_name urbanist\">BMW 2 series</div>\n                <div style=\"text-align: left;line-height: 1;\">\n                  <span>\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" style=\"margin-right: 6.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </span>\n                  <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\">not rated yet</span>\n                </div>\n              </div>\n              <div class=\"car2_info_subdiv\">\n                <div style=\"line-height: 1;\"><span class=\"car2_price urbanist\" >$</span><span class=\"car2_price urbanist\" style=\"font-size: 32px;margin-right: 8px;\">26</span><span class=\"car2_price urbanist\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n                <!-- <div><img src=\"assets/images/icons/drop_down_arrow.svg\" alt=\"\"></div> -->\n              </div>\n              \n            </div>\n          </div>\n        </div>\n        <!-- -----------------details end--------------- -->\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <div style=\"margin: 10px 0px 12px;\" *ngIf=\"previous_tab=='true' && bookingRecordData.status == 'Completed'\">\n      <div style=\"text-align: center;\">\n        <ion-button class=\"invite_btn\" (click)=\"openModal()\">\n          <span class=\"btn-text\">Give Ratings</span>\n        </ion-button>\n      </div>\n    </div>\n\n    <ion-tabs style=\"display:contents ;\">\n\n      <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n        <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n          <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Home</ion-label>\n          <!-- <ion-badge>6</ion-badge> -->\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n          <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages.svg\" alt=\"\">\n          <ion-label class=\"btn_label\" >Messages</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n          <img src=\"assets/images/tab_icons/booking_active.svg\" alt=\"\">\n          <ion-label class=\"btnActive_label\">Booking</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n          <img src=\"assets/images/tab_icons/favorite.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Favorities</ion-label>\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n    </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_booking-details_booking-details_module_ts.js.map