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
    this.carTerms = {
      car_type: '',
      rent_cost_day: '',
      rent_cost_month: '',
      favorite_status: '',
      company_name: ''
    };
    this.sameTypeCars = [];
  }

  ngOnInit() {
    console.log("api.allCars: ", this.api.allCars);
    this.bookingRecordData = JSON.parse(this.activatedRoute.snapshot.params['data']);
    console.log('bookingRecordData: ', this.bookingRecordData);
    this.previous_tab = this.activatedRoute.snapshot.params['previous_tab'];
    console.log('previous_tab: ', this.previous_tab);
    this.upcoming_tab = this.activatedRoute.snapshot.params['upcoming_tab'];
    console.log('upcoming_tab: ', this.upcoming_tab);
    this.carTerms.car_type = this.bookingRecordData.cars_details[0].car_type;
    this.carTerms.rent_cost_day = this.bookingRecordData.cars_details[0].rent_cost_day;
    this.carTerms.rent_cost_month = this.bookingRecordData.cars_details[0].rent_cost_month; // this.carTerms.favorite_status = this.bookingRecordData.user_favourite_cars[0].status;

    this.carTerms.company_name = this.bookingRecordData.users_company_details[0].company_name;
    console.log("Car Terms: ", this.carTerms);
  }

  ionViewWillEnter() {
    console.log("Selected Car: ", this.selectedCar);

    for (let i = 0; i < this.api.allCars.length; i++) {
      if (this.carTerms.car_type == this.api.allCars[i].car_type) {
        //seperate same type cars
        this.sameTypeCars.push(this.api.allCars[i]);
      }
    }

    console.log("sameTypeCars: ", this.sameTypeCars);

    if (this.sameTypeCars.length > 0) {
      let arrayLength = this.sameTypeCars.length;
      console.log("arrayLength: ", arrayLength);
      let randomValue = Math.floor(Math.random() * arrayLength);
      console.log("randomValue: ", randomValue);
      this.selectedCar = this.sameTypeCars[randomValue];
      console.log("Selected Car: ", this.selectedCar);
    }
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
        if (this.bookingRecordData.car_id == this.selectedCar.car_id) {
          this.favorites = res.data;
          this.bookingRecordData.user_favourite_cars.length = 0;
          this.selectedCar.favourite_status = res.data;
        } else {
          this.favorites = res.data;
          this.bookingRecordData.user_favourite_cars.length = 0;
        }
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
  }

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
      total_bookings: this.bookingRecordData.total_bookings
    };
    let carDataById = [];
    carDataById[0] = carData;
    console.log("CAR DATA BY ID ARRAY: ", carDataById);
    this.api.carDataById = carDataById;
    this.navCtrlr.navigateForward('car-booking');
  }

  startCarBooking2() {
    let carData = {
      car_id: this.selectedCar.car_id,
      rent_cost_day: this.selectedCar.rent_cost_day,
      rent_cost_month: this.selectedCar.rent_cost_month,
      vehical_name: this.selectedCar.vehical_name,
      users_company: [{
        company_location: this.selectedCar.users_company[0].company_location
      }],
      favourite_status: this.selectedCar.favourite_status,
      image1: this.selectedCar.image1,
      rating: this.selectedCar.rating,
      total_bookings: this.selectedCar.total_bookings
    };
    let carDataById = [];
    carDataById[0] = carData;
    console.log("CAR DATA BY ID ARRAY: ", carDataById);
    this.api.carDataById = carDataById;
    this.navCtrlr.navigateForward('car-booking');
  }

  updateFavoriteStatus2(carId) {
    let data = {
      favourite_car_id: carId,
      user_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('favouriteCars', data).subscribe(res => {
      this.api.hideLoading();
      console.log("Response: ", res);

      if (res.status == 'success') {
        if (this.bookingRecordData.car_id == carId) {
          this.selectedCar.favourite_status = res.data;
          this.bookingRecordData.user_favourite_cars.length = 0;
          this.favorites = res.data;
        } else {
          this.selectedCar.favourite_status = res.data;
        }
      } else if (res.status == 'error') {
        this.api.presentToast(res.message);
      } else {}
    }, err => {
      console.log("Error: ", err);
      this.api.hideLoading();
    });
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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.header {\n  position: relative;\n  padding: 30px 16px 0px;\n  display: flex;\n  align-items: center;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  position: absolute;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.wrapper {\n  padding: 5px 16px 20px;\n}\n\n.car_card {\n  text-align: center;\n  margin-top: 16px;\n  position: relative;\n}\n\n.heart_icon {\n  position: absolute;\n  right: 5%;\n  top: 5%;\n}\n\n.car_image {\n  object-fit: cover;\n  width: 100%;\n  height: 200px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.btns_bg_css {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 16px 10px;\n}\n\n.tab_button {\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  --color: #B0B0B0;\n  --background: #FBFBFB;\n  height: 48px;\n  width: 48%;\n  margin: 0px;\n  text-transform: capitalize;\n  --box-shadow: none;\n  --border-color: #D4DCE1;\n  --border-width: 1.5px;\n  --border-style: solid;\n  --border-radius: 10px !important;\n}\n\n.tab_active {\n  --background:#8000FF;\n  font-weight: 600;\n  --color: white;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n}\n\n.car_info_subdiv {\n  position: absolute;\n  right: 12px;\n  bottom: 0px;\n}\n\n.cost_label {\n  font-size: 10px;\n  font-weight: 500;\n  color: white;\n  margin-right: 8px;\n}\n\n.car_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.star_margin {\n  margin-right: 3.8px;\n}\n\n.left_subdiv {\n  text-align: left;\n  line-height: 1;\n}\n\n.upcoming_dt {\n  display: flex;\n  justify-content: space-between;\n  height: 185px;\n}\n\n.rebook_label {\n  position: absolute;\n  bottom: 29%;\n  right: 16px;\n  background: #FFDF00;\n  padding: 4px 29px;\n  border-radius: 34px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #0F172A;\n}\n\n.st_end_dts {\n  position: absolute;\n  top: 14px;\n  left: 23px;\n}\n\n.status_label {\n  position: absolute;\n  bottom: 29%;\n  left: 16px;\n  background: #0F172A;\n  padding: 4px 29px;\n  border-radius: 34px;\n  font-size: 12px;\n  font-weight: 400;\n  color: white;\n}\n\n.box_styling {\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 11px 12px 10px;\n  border-radius: 5px;\n  height: auto;\n  max-height: 180px;\n  overflow: hidden;\n}\n\n.box_heading {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.set_width {\n  width: 43.5%;\n}\n\n.range_div {\n  transform: rotate(90deg);\n  position: absolute;\n  top: 46px;\n  right: 37.5%;\n  width: 135px !important;\n}\n\n.ion_range {\n  --knob-background: #8000FF!important;\n  --bar-background: #D4DCE1 !important;\n  --knob-box-shadow: 0px 0px 2px 5px white;\n  --knob-size: 11px;\n  --bar-height: 1px;\n}\n\n.mrg_tp {\n  color: #0F172A;\n  margin-top: 11px;\n}\n\n.box_description {\n  margin-top: 7px;\n  font-size: 12px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n  height: auto;\n  max-height: 90px;\n  overflow: hidden;\n}\n\n.box_sub_heading {\n  margin-top: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #8000FF;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 65%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 43.5%;\n    width: 135px !important;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 896px) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 46.5%;\n    width: 135px !important;\n  }\n}\n\n@media screen and (device-width: 412px) and (max-device-height: 915px) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 43.5%;\n    width: 135px !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .set_width {\n    width: 43.5%;\n    height: 175px;\n  }\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 73.5%;\n    width: 135px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctZGV0YWlscy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxib29raW5nLWRldGFpbHNcXGJvb2tpbmctZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEE7RUFDQyx1QkFBQTtFQUNHLGtCQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksc0JBQUE7QUNVSjs7QURSQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1dKOztBRFRBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ1lKOztBRFZBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDYUo7O0FEWEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ2NKOztBRFpBO0VBQ0ksbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FDZUo7O0FEWkE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2VKOztBRGJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBRUEsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ2VKOztBRGJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNpQko7O0FEZkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDa0JKOztBRGhCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDb0JKOztBRGxCQTtFQUNJLG1CQUFBO0FDcUJKOztBRG5CQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ3NCSjs7QURwQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDdUJKOztBRHJCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDd0JKOztBRHRCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDMEJKOztBRHhCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQzJCSjs7QUR6QkE7RUFDSSxZQUFBO0FDNEJKOztBRDFCQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDNkJKOztBRDNCQTtFQUNJLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUM4Qko7O0FENUJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDK0JKOztBRDdCQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2dDSjs7QUQ5QkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDaUNKOztBRC9CQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNrQ0o7O0FEaENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDbUNKOztBRGpDQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ29DSjs7QURsQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtBQ3FDSjs7QURuQ0E7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3NDSjs7QURwQ0E7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3VDSjs7QURyQ0E7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7QUN3Q0o7O0FEdENBO0VBS0k7SUFDSSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQ3FDTjtBQUNGOztBRG5DQTtFQUtJO0lBQ0ksd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUNpQ047QUFDRjs7QUQvQkE7RUFJSTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VDOEJOO0FBQ0Y7O0FEMUJBO0VBSUk7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ3lCTjtFRHZCRTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VDeUJOO0FBQ0YiLCJmaWxlIjoiYm9va2luZy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVyYmFuaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9wcGluc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6NXB4IDE2cHggMjBweDtcclxufVxyXG4uY2FyX2NhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFydF9pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgdG9wOiA1JTtcclxufVxyXG4uY2FyX2ltYWdle1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxufVxyXG4uYnRuc19iZ19jc3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTVweCAxNnB4IDEwcHg7XHJcbn1cclxuLnRhYl9idXR0b257XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC0tY29sb3I6ICNCMEIwQjA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRDREQ0UxO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJfYWN0aXZle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhcl9pbmZvX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FyX25hbWV7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5yYXRpbmdfdmFsdWV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI0Q0RENFMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmNhcl9pbmZvX3N1YmRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn1cclxuLmNvc3RfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmNhcl9wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnN0YXJfbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzLjhweDtcclxufVxyXG4ubGVmdF9zdWJkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLnVwY29taW5nX2R0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogMTg1cHg7XHJcbn1cclxuLnJlYm9va19sYWJlbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjklO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZERjAwO1xyXG4gICAgcGFkZGluZzogNHB4IDI5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG59XHJcbi5zdF9lbmRfZHRze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgbGVmdDogMjNweDtcclxufVxyXG4uc3RhdHVzX2xhYmVse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyOSU7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBGMTcyQTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBwYWRkaW5nOiA0cHggMjlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ib3hfc3R5bGluZ3tcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIHBhZGRpbmc6IDExcHggMTJweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5ib3hfaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnNldF93aWR0aHtcclxuICAgIHdpZHRoOiA0My41JTtcclxufVxyXG4ucmFuZ2VfZGl2e1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NnB4O1xyXG4gICAgcmlnaHQ6IDM3LjUlO1xyXG4gICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlvbl9yYW5nZXtcclxuICAgIC0ta25vYi1iYWNrZ3JvdW5kOiAjODAwMEZGIWltcG9ydGFudDtcclxuICAgIC0tYmFyLWJhY2tncm91bmQ6ICNENERDRTEgIWltcG9ydGFudDtcclxuICAgIC0ta25vYi1ib3gtc2hhZG93OiAwcHggMHB4IDJweCA1cHggd2hpdGU7XHJcbiAgICAtLWtub2Itc2l6ZTogMTFweDtcclxuICAgIC0tYmFyLWhlaWdodDogMXB4O1xyXG59XHJcbi5tcmdfdHB7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbn1cclxuLmJveF9kZXNjcmlwdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYm94X3N1Yl9oZWFkaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jYXIyX3ByaWNle1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyMl9pbmZvX3N1YmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbnZpdGVfYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MHB4O1xyXG4gICAgd2lkdGg6NjUlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uYnRuX2xhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQjFBOEI5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4uYnRuQWN0aXZlX2xhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4uaW9uX3RhYl9iYXJ7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDEycHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTNweCAxMHB4IHJnYigwIDAgMCAvIDE2JSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MzZweCkgXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHsgXHJcblxyXG4gICAgLnJhbmdlX2RpdntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDZweDtcclxuICAgICAgICByaWdodDogNDMuNSU7XHJcbiAgICAgICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogODk2cHgpIFxyXG4gIHsgXHJcblxyXG4gICAgLnJhbmdlX2RpdiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDQ2LjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gXHJcbiAgYW5kIChkZXZpY2Utd2lkdGg6IDQxMnB4KSBcclxuICBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA5MTVweCkgXHJcbiAge1xyXG4gICAgLnJhbmdlX2RpdntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDZweDtcclxuICAgICAgICByaWdodDogNDMuNSU7XHJcbiAgICAgICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XHJcbiAgICAuc2V0X3dpZHRoe1xyXG4gICAgICAgIHdpZHRoOiA0My41JTtcclxuICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgfVxyXG4gICAgLnJhbmdlX2RpdntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDZweDtcclxuICAgICAgICByaWdodDogNzMuNSU7XHJcbiAgICAgICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi51cmJhbmlzdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wb3BwaW5zIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudWljb24ge1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjBweDtcbn1cblxuLmNhcl9jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFydF9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG4gIHRvcDogNSU7XG59XG5cbi5jYXJfaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuXG4uYnRuc19iZ19jc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHggMTZweCAxMHB4O1xufVxuXG4udGFiX2J1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1jb2xvcjogI0IwQjBCMDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMTtcbiAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4udGFiX2FjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDojODAwMEZGO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcl9pbmZvX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzBGMTcyQTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyX25hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yYXRpbmdfdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2FyX2luZm9fc3ViZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5jb3N0X2xhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY2FyX3ByaWNlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGFyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMy44cHg7XG59XG5cbi5sZWZ0X3N1YmRpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4udXBjb21pbmdfZHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTg1cHg7XG59XG5cbi5yZWJvb2tfbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjklO1xuICByaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogI0ZGREYwMDtcbiAgcGFkZGluZzogNHB4IDI5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG59XG5cbi5zdF9lbmRfZHRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDIzcHg7XG59XG5cbi5zdGF0dXNfbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjklO1xuICBsZWZ0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xuICBwYWRkaW5nOiA0cHggMjlweDtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib3hfc3R5bGluZyB7XG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBwYWRkaW5nOiAxMXB4IDEycHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm94X2hlYWRpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2V0X3dpZHRoIHtcbiAgd2lkdGg6IDQzLjUlO1xufVxuXG4ucmFuZ2VfZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDZweDtcbiAgcmlnaHQ6IDM3LjUlO1xuICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbn1cblxuLmlvbl9yYW5nZSB7XG4gIC0ta25vYi1iYWNrZ3JvdW5kOiAjODAwMEZGIWltcG9ydGFudDtcbiAgLS1iYXItYmFja2dyb3VuZDogI0Q0RENFMSAhaW1wb3J0YW50O1xuICAtLWtub2ItYm94LXNoYWRvdzogMHB4IDBweCAycHggNXB4IHdoaXRlO1xuICAtLWtub2Itc2l6ZTogMTFweDtcbiAgLS1iYXItaGVpZ2h0OiAxcHg7XG59XG5cbi5tcmdfdHAge1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cblxuLmJveF9kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm94X3N1Yl9oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jYXIyX3ByaWNlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXIyX2luZm9fc3ViZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmludml0ZV9idG4ge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJ0bl9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0IxQThCOTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmJ0bkFjdGl2ZV9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzgwMDBGRjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmlvbl90YWJfYmFyIHtcbiAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5yYW5nZV9kaXYge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NnB4O1xuICAgIHJpZ2h0OiA0My41JTtcbiAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODk2cHgpIHtcbiAgLnJhbmdlX2RpdiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ2cHg7XG4gICAgcmlnaHQ6IDQ2LjUlO1xuICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogOTE1cHgpIHtcbiAgLnJhbmdlX2RpdiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ2cHg7XG4gICAgcmlnaHQ6IDQzLjUlO1xuICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XG4gIC5zZXRfd2lkdGgge1xuICAgIHdpZHRoOiA0My41JTtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICB9XG4gIC5yYW5nZV9kaXYge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NnB4O1xuICAgIHJpZ2h0OiA3My41JTtcbiAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 79883:
/*!**********************************************************************!*\
  !*** ./src/app/booking-details/booking-details.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"title\">Bookings</div>\n    </div>\n   \n  </ion-toolbar>\n  <div class=\"btns_bg_css\">\n    <ion-button class=\"tab_button\" [class.tab_active]=\"previous_tab=='true'\" >Previous</ion-button>\n    <ion-button class=\"tab_button\" [class.tab_active]=\"upcoming_tab=='true'\" >Upcoming</ion-button>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n   \n    <div *ngIf=\"previous_tab=='true'\" >\n     \n      <div >\n        <div class=\"car_card\" >\n          <img class=\"car_image\" src=\"{{api.imageUrlString}}{{bookingRecordData.cars_details[0].image1}}\" alt=\"\">\n          <div *ngIf=\"bookingRecordData.user_favourite_cars.length != 0\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"bookingRecordData.user_favourite_cars[0].status != 'liked'\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"bookingRecordData.user_favourite_cars[0].status == 'liked'\">\n          </div>\n          <div *ngIf=\"bookingRecordData.user_favourite_cars.length == 0\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites != 'liked'\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n          </div>\n          <div class=\"rebook_label poppins\" (click)=\"startCarBooking()\">Rebook</div>\n          <div class=\"status_label poppins\" >{{bookingRecordData.status}}</div>\n          <div class=\"car_info_box\" >\n            <div>\n              <div class=\"car_name poppins\">{{bookingRecordData.cars_details[0].vehical_name}}</div>\n              <div class=\"left_subdiv\">\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating == 0\">\n                  <img class=\"star_margin\"  src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\"  src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\"  src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\"  src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\"  src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=1 && bookingRecordData.cars_details[0].rating < 1.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=1.5 && bookingRecordData.cars_details[0].rating < 2.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=2.5 && bookingRecordData.cars_details[0].rating < 3.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=3.5 && bookingRecordData.cars_details[0].rating < 4.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=4.5 && bookingRecordData.cars_details[0].rating < 5.1\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                </span>\n                <span class=\"rating_value urbanist\" style=\"color:#FFDF00;text-decoration: underline;\" *ngIf=\"bookingRecordData.cars_details[0].rating == 0\">not rated yet</span>\n                <span class=\"rating_value urbanist\" *ngIf=\"bookingRecordData.cars_details[0].rating != 0\">({{bookingRecordData.cars_details[0].rating}})</span>\n              </div>\n            </div>\n            <div class=\"car_info_subdiv\">\n              <div><span class=\"cost_label poppins\">Total Cost</span><span class=\"car_price poppins\">$</span><span class=\"car_price poppins\" style=\"font-size: 32px;\">{{bookingRecordData.total_cost}}</span></div>\n            </div>\n          </div>\n        </div>\n        \n        <!-- -------------------previous details-------------------- -->\n        <div >\n          <div class=\"box_styling\">\n            <div class=\"box_heading\">Description</div>\n            <div class=\"box_description\">\n              {{bookingRecordData.cars_details[0].description}}\n            </div>\n          </div>\n      \n          <div class=\"box_styling\">\n            <div class=\"box_heading\">Owner's Details</div>\n            <div class=\"box_sub_heading\">About</div>\n            <div class=\"box_description\">\n              {{bookingRecordData.users_company_details[0].about}}\n            </div>\n          </div>\n      \n          <div class=\"box_styling\">\n            <div class=\"box_sub_heading\" style=\"margin-top: 0px;\">Location</div>\n            <div class=\"box_description\" style=\"margin-top: 4px;\">\n              {{bookingRecordData.users_company_details[0].company_location}}\n            </div>\n          </div>\n      \n          <div class=\"box_styling\">\n            <div class=\"box_heading\">Rent Dates</div>\n            <div style=\"display: flex;justify-content: space-between;width: 85%;\">\n              <div>\n                <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">Start Date</div>\n                <div class=\"box_description\" style=\"margin-top: 3px;\">{{bookingRecordData.f_start_date}}</div>\n              </div>\n              <div>\n                <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">End Date</div>\n                <div class=\"box_description\" style=\"margin-top: 3px;\">{{bookingRecordData.f_end_date}}</div>\n              </div>\n            </div>\n          </div>\n      \n          \n          <!-- --------------------design object for advertisement---------------- -->\n          <div *ngIf=\"this.selectedCar !== undefined\">\n            <div class=\"box_heading mrg_tp\" >You might like this too!</div>\n            <div class=\"car_card\" style=\"margin-top: 13px;\">\n              <img class=\"car_image\"  src=\"{{api.imageUrlString}}{{selectedCar.image1}}\" alt=\"\">\n              <img class=\"heart_icon\"  src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"selectedCar.favourite_status != 'liked'\" (click)=\"updateFavoriteStatus2(selectedCar.car_id)\">\n              <img class=\"heart_icon\"  src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"selectedCar.favourite_status == 'liked'\" (click)=\"updateFavoriteStatus2(selectedCar.car_id)\">\n              <div class=\"rebook_label urbanist\" (click)=\"startCarBooking2()\">Book</div>\n              <div class=\"car_info_box\" >\n                <div>\n                  <div class=\"car_name urbanist\">{{selectedCar.vehical_name}}</div>\n                  \n                  <div class=\"left_subdiv\" >\n                    <span *ngIf=\"selectedCar.rating == 0\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=1 && selectedCar.rating < 1.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=1.5 && selectedCar.rating < 2.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=2.5 && selectedCar.rating < 3.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=3.5 && selectedCar.rating < 4.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=4.5 && selectedCar.rating < 5.1\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    </span>\n                    <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\" *ngIf=\"selectedCar.rating == 0\">not rated yet</span>\n                    <span class=\"rating_value urbanist\" *ngIf=\"selectedCar.rating != 0\">({{selectedCar.rating}})</span>\n                  </div>\n                </div>\n                <div class=\"car2_info_subdiv\">\n                  <div style=\"line-height: 1;\"><span class=\"car2_price urbanist\" >$</span><span class=\"car2_price urbanist\" style=\"font-size: 32px;margin-right: 8px;\">{{selectedCar.rent_cost_day}}</span><span class=\"car2_price urbanist\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n                  \n                </div>\n                \n              </div>\n            </div>\n          </div>\n          \n        </div>\n        <!-- ---------------------------detailse end---------------------- -->\n      </div>\n\n    </div>\n    <div *ngIf=\"upcoming_tab=='true'\" >\n      \n      <div >\n        <div class=\"car_card\" >\n          <img class=\"car_image\" src=\"{{api.imageUrlString}}{{bookingRecordData.cars_details[0].image1}}\" alt=\"\">\n          <div *ngIf=\"bookingRecordData.user_favourite_cars.length != 0\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"bookingRecordData.user_favourite_cars[0].status != 'liked'\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"bookingRecordData.user_favourite_cars[0].status == 'liked'\">\n          </div>\n          <div *ngIf=\"bookingRecordData.user_favourite_cars.length == 0\">\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites != 'liked'\" >\n            <img (click)=\"updateFavoriteStatus(bookingRecordData.car_id)\" class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n          </div>\n          \n          <div class=\"rebook_label urbanist\" style=\"background: #E23C3C;color: white;\" (click)=\"openCancelBookingModal(bookingRecordData.booking_id)\">Cancel</div>\n          <div class=\"status_label poppins\" >{{bookingRecordData.status}}</div>\n          <div class=\"car_info_box\" >\n            <div>\n              <div class=\"car_name urbanist\">{{bookingRecordData.cars_details[0].vehical_name}}</div>\n              <div class=\"left_subdiv\">\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating == 0\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=1 && bookingRecordData.cars_details[0].rating < 1.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=1.5 && bookingRecordData.cars_details[0].rating < 2.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=2.5 && bookingRecordData.cars_details[0].rating < 3.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=3.5 && bookingRecordData.cars_details[0].rating < 4.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"bookingRecordData.cars_details[0].rating >=4.5 && bookingRecordData.cars_details[0].rating < 5.1\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                </span>\n                <span class=\"rating_value urbanist\" *ngIf=\"bookingRecordData.cars_details[0].rating != 0\">({{bookingRecordData.cars_details[0].rating}})</span>\n                <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\" *ngIf=\"bookingRecordData.cars_details[0].rating == 0\">not rated yet</span>\n              </div>\n            </div>\n            <div class=\"car_info_subdiv\">\n              <div><span class=\"cost_label urbanist\">Total Cost</span><span class=\"car_price urbanist\">$</span><span class=\"car_price urbanist\" style=\"font-size: 32px;\">{{bookingRecordData.total_cost}}</span></div>\n            </div>\n          </div>\n        </div>\n        <!-- -------------------------upcoming details------------------------------- -->\n        <div >\n          <div class=\"upcoming_dt\">\n            <div class=\"box_styling\" style=\"width: 55%;\">\n              <div class=\"box_heading\">Owner's Details</div>\n              <div class=\"box_sub_heading\">About</div>\n              <div class=\"box_description\" style=\"max-height: 108px;\">\n                {{bookingRecordData.users_company_details[0].about}}\n              </div>\n            </div>\n        \n            <div class=\"box_styling set_width\">\n              <div class=\"box_heading\">Rent Dates</div>\n    \n              <div style=\"position: relative;\" >\n                <div class=\"range_div\">\n                  <ion-range class=\"ion_range\"></ion-range>\n                </div>\n                <div class=\"st_end_dts\" >\n                  <div>\n                    <div style=\"display: flex;align-items: center;\">\n                      <div style=\"margin-right: 8px;\">\n                        <img src=\"assets/images/icons/range_point.svg\" alt=\"\">\n                      </div>\n                      <div>\n                        <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">Start Date</div>\n                        <div class=\"box_description\" style=\"margin-top: 3px;\">{{bookingRecordData.f_start_date}}</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div style=\"height: 33px;\"></div>\n                  <div>\n                    <div style=\"display: flex;align-items: center;\">\n                      <div style=\"margin-right: 8px;\">\n                        <img src=\"assets/images/icons/range_point.svg\" alt=\"\">\n                      </div>\n                      <div>\n                        <div class=\"box_sub_heading\" style=\"margin-top: 3px;\">End Date</div>\n                        <div class=\"box_description\" style=\"margin-top: 3px;\">{{bookingRecordData.f_end_date}}</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n          </div>\n          \n          <!-- ------------design object for advertisement--------------- -->\n          <div *ngIf=\"this.selectedCar !== undefined\">\n            <div class=\"box_heading mrg_tp\"  >You might like this too!</div>\n            <div class=\"car_card\" >\n              <img class=\"car_image\"  src=\"{{api.imageUrlString}}{{selectedCar.image1}}\" alt=\"\">\n              <img class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"selectedCar.favourite_status != 'liked'\" (click)=\"updateFavoriteStatus2(selectedCar.car_id)\">\n              <img class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"selectedCar.favourite_status == 'liked'\" (click)=\"updateFavoriteStatus2(selectedCar.car_id)\">\n              <div class=\"rebook_label urbanist\" (click)=\"startCarBooking2()\">Book</div>\n              \n              <div class=\"car_info_box\" >\n                <div>\n                  <div class=\"car_name urbanist\">{{selectedCar.vehical_name}}</div>\n                  \n                  <div class=\"left_subdiv\" >\n                    <span *ngIf=\"selectedCar.rating == 0\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=1 && selectedCar.rating < 1.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=1.5 && selectedCar.rating < 2.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=2.5 && selectedCar.rating < 3.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=3.5 && selectedCar.rating < 4.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"selectedCar.rating >=4.5 && selectedCar.rating < 5.1\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    </span>\n                    <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\" *ngIf=\"selectedCar.rating == 0\">not rated yet</span>\n                    <span class=\"rating_value urbanist\" *ngIf=\"selectedCar.rating != 0\">({{selectedCar.rating}})</span>\n                  </div>\n                </div>\n                <div class=\"car2_info_subdiv\">\n                  <div style=\"line-height: 1;\"><span class=\"car2_price urbanist\" >$</span><span class=\"car2_price urbanist\" style=\"font-size: 32px;margin-right: 8px;\">{{selectedCar.rent_cost_day}}</span><span class=\"car2_price urbanist\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n                </div>\n                \n              </div>\n             \n            </div>\n          </div>\n          \n        </div>\n        <!-- -----------------details end--------------- -->\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <div style=\"margin: 10px 0px 12px;\" *ngIf=\"previous_tab=='true' && bookingRecordData.status == 'Completed'\">\n      <div style=\"text-align: center;\">\n        <ion-button class=\"invite_btn\" (click)=\"openModal()\">\n          <span class=\"btn-text\">Give Ratings</span>\n        </ion-button>\n      </div>\n    </div>\n\n    <ion-tabs style=\"display:contents ;\">\n\n      <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n        <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n          <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Home</ion-label>\n          <!-- <ion-badge>6</ion-badge> -->\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n          <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages.svg\" alt=\"\">\n          <ion-label class=\"btn_label\" >Messages</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n          <img src=\"assets/images/tab_icons/booking_active.svg\" alt=\"\">\n          <ion-label class=\"btnActive_label\">Booking</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n          <img src=\"assets/images/tab_icons/favorite.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Favorities</ion-label>\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n    </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_booking-details_booking-details_module_ts.js.map