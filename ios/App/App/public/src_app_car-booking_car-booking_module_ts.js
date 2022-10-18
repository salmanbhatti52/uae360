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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _car_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-booking-routing.module */ 3565);
/* harmony import */ var _car_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-booking.page */ 45040);







let CarBookingPageModule = class CarBookingPageModule {
};
CarBookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _car_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-booking.page.html?ngResource */ 3387);
/* harmony import */ var _car_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-booking.page.scss?ngResource */ 14915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _select_date_select_date_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-date/select-date.page */ 10959);
/* harmony import */ var _select_time_select_time_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-time/select-time.page */ 79226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 5830);










let CarBookingPage = class CarBookingPage {
  constructor(modalCtrlr, location, navCtrlr, api) {
    this.modalCtrlr = modalCtrlr;
    this.location = location;
    this.navCtrlr = navCtrlr;
    this.api = api;
    this.carData = [];
  }

  ngOnInit() {
    console.log(this.startDate);
    let carData = this.api.carDataById;
    console.log('Car Data:', carData);
    this.carData = carData;
  }

  goBack() {
    this.location.back();
  }

  openDateModal(dateVal) {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrlr.create({
        component: _select_date_select_date_page__WEBPACK_IMPORTED_MODULE_3__.SelectDatePage,
        showBackdrop: true,
        cssClass: 'date_modal'
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'dateSelected') {
        console.log(data);

        if (dateVal == 'startDate') {
          _this.startDate = data;
          console.log('startDate==', _this.startDate);
        } else if (dateVal == 'endDate') {
          _this.endDate = data;
          console.log('endDate==', _this.endDate);
        } else {}
      }
    })();
  }

  openTimeModal(timeVal) {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrlr.create({
        component: _select_time_select_time_page__WEBPACK_IMPORTED_MODULE_4__.SelectTimePage,
        showBackdrop: true,
        cssClass: 'time_modal'
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'timeSelected') {
        console.log(data);

        if (timeVal == 'startTime') {
          _this2.startTime = data;
          console.log('startTime==', _this2.startTime);
        } else if (timeVal == 'endTime') {
          _this2.endTime = data;
          console.log('endTime==', _this2.endTime);
        } else {}
      }
    })();
  }

  showSummary() {
    localStorage.setItem('startDate', this.startDate);
    localStorage.setItem('endDate', this.endDate);
    localStorage.setItem('startTime', this.startTime);
    localStorage.setItem('endTime', this.endTime);
    console.log(localStorage.getItem('startDate'));
    console.log(localStorage.getItem('endDate'));
    console.log(localStorage.getItem('startTime'));
    console.log(localStorage.getItem('endTime'));
    this.navCtrlr.navigateRoot('summary');
  }

};

CarBookingPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
}];

CarBookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-car-booking',
  template: _car_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_car_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CarBookingPage);


/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let ApiService = class ApiService {
  constructor(http, toastController, loadingCtrl) {
    this.http = http;
    this.toastController = toastController;
    this.loadingCtrl = loadingCtrl;
    this.baseURL = 'https://360uae.eigix.net/api';
  }

  sendRequest(action, data) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.baseURL}/${action}`, JSON.stringify(data), {
      headers: header
    });
  }

  getData(action) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(`${this.baseURL}/${action}`, {
      headers: header
    });
  }

  presentToast(toastMsg) {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: toastMsg,
        duration: 2000
      });
      toast.present();
    })();
  }

  showLoading() {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingCtrl.create({
        duration: 3000
      });
      loading.present();
    })();
  }

  hideLoading() {
    this.loadingCtrl.dismiss();
  }

};

ApiService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
}];

ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ApiService);


/***/ }),

/***/ 14915:
/*!**************************************************************!*\
  !*** ./src/app/car-booking/car-booking.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 8px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.show_status {\n  font-size: 14px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n  color: #12D804;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.date_time_label {\n  color: #8000FF;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.bookings_field {\n  height: 48px;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  border: 1px solid #EFEFEF;\n  padding: 12px 9px 16px;\n}\n\n.field_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #8D8D8D;\n}\n\n.license_heading {\n  margin-top: 18px;\n  color: #000000;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 20px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1ib29raW5nLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGNhci1ib29raW5nXFxjYXItYm9va2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNRSjs7QUROQTtFQUNJLHFCQUFBO0FDU0o7O0FEUEE7RUFDSSx1QkFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBRUEsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ1VKOztBRFJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0ksaUJBQUE7QUNZSjs7QURWQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNhSjs7QURYQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNjSjs7QURaQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2VKOztBRGJBO0VBQ0ksY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDaUJKOztBRGZBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDa0JKOztBRGhCQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDbUJKOztBRGpCQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNvQko7O0FEbEJBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUNxQkoiLCJmaWxlIjoiY2FyLWJvb2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4udXJiYW5pc3R7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wb3BwaW5ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLnNob3dfc3RhdHVze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzEyRDgwNDtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDE2cHggMjBweDtcclxufVxyXG4uY2FyX2luZm9fYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6ICMwRjE3MkE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogOXB4IDEycHggOC41cHggMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJfbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnN0YXJfbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuLnJhdGluZ192YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjRDREQ0UxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY2FyMl9wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhcjJfaW5mb19zdWJkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGF0ZV90aW1lX2xhYmVse1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1VyYmFuaXN0JyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYm9va2luZ3NfZmllbGR7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI0VGRUZFRjtcclxuICAgIHBhZGRpbmc6IDEycHggOXB4IDE2cHg7XHJcbn1cclxuLmZpZWxkX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM4RDhEOEQ7XHJcbn1cclxuLmxpY2Vuc2VfaGVhZGluZ3tcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbl9idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bl90ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi51cmJhbmlzdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wb3BwaW5zIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAxNnB4IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLnNob3dfc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMTJEODA0O1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTZweCAyMHB4O1xufVxuXG4uY2FyX2luZm9fYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogOXB4IDEycHggOC41cHggMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0YXJfbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5yYXRpbmdfdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2FyMl9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyMl9pbmZvX3N1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXRlX3RpbWVfbGFiZWwge1xuICBjb2xvcjogIzgwMDBGRjtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYm9va2luZ3NfZmllbGQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcbiAgcGFkZGluZzogMTJweCA5cHggMTZweDtcbn1cblxuLmZpZWxkX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM4RDhEOEQ7XG59XG5cbi5saWNlbnNlX2hlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9naW5fYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bl90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 3387:
/*!**************************************************************!*\
  !*** ./src/app/car-booking/car-booking.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">BMW 2 series</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: center; position: relative;\"  *ngFor=\"let data of carData\">\n      <img style=\"width: 100%;height: 200px; border-radius: 10px 10px 0px 0px;\" src=\"{{data.image1}}\" alt=\"\">\n      <img style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\">\n      <div class=\"car_info_box\" >\n        <div>\n          <div class=\"car_name urbanist\">{{data.vehical_name}}</div>\n          <div style=\"text-align: left;line-height: 1;\">\n            <span>\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 6.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span class=\"rating_value urbanist\">269 trips</span>\n          </div>\n        </div>\n        <div class=\"car2_info_subdiv\">\n          <div style=\"line-height: 1;\"><span class=\"car2_price urbanist\" >$</span><span class=\"car2_price urbanist\" style=\"font-size: 32px;margin-right: 8px;\">{{data.rent_cost_day}}</span><span class=\"car2_price urbanist\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n        </div>\n        \n      </div>\n    </div>\n\n    <div style=\"display: flex;justify-content: space-between;margin-top: 14px;\">\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">Start Date</div>\n        <div class=\"bookings_field\" (click)=\"openDateModal('startDate')\">\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/calendar.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"startDate==undefined\">05 Sep, 2022</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"startDate!=''\">{{startDate}}</span>\n        </div>\n      </div>\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">Start Time</div>\n        <div class=\"bookings_field\" (click)=\"openTimeModal('startTime')\">\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/clock.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"startTime==undefined\">06:00 am</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"startTime!=''\">{{startTime}}</span>\n        </div>\n      </div>\n    </div>\n    <div style=\"display: flex;justify-content: space-between;margin-top: 14px;\">\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">End Date</div>\n        <div class=\"bookings_field\" (click)=\"openDateModal('endDate')\">\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/calendar.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"endDate==undefined\">05 Sep, 2022</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"endDate!=''\">{{endDate}}</span>\n        </div>\n      </div>\n      <div style=\"width: 48.5%;\">\n        <div class=\"date_time_label\">End Time</div>\n        <div class=\"bookings_field\" (click)=\"openTimeModal('endTime')\">\n          <img style=\"margin-right: 10.4px;\" src=\"assets/images/icons/clock.svg\" alt=\"\">\n          <span class=\"field_text\" *ngIf=\"endTime==undefined\">06:00 am</span>\n          <span class=\"field_text\" style=\"color: black;\" *ngIf=\"endTime!=''\">{{endTime}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"license_heading\">Driving License</div>\n    <div style=\"text-align: center;\">\n      <img style=\"margin-top: 7px;\" src=\"assets/images/upload_license_img.svg\" alt=\"\">\n    </div>\n    \n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div style=\"padding: 0px 16px 27px;\">\n    <ion-button class=\"login_button\" (click)=\"showSummary()\">\n      <span class=\"btn_text\">Next</span>\n    </ion-button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_car-booking_car-booking_module_ts.js.map