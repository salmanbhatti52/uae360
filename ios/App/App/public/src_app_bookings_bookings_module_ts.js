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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bookings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings.page.html?ngResource */ 68263);
/* harmony import */ var _bookings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page.scss?ngResource */ 31083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);









let BookingsPage = class BookingsPage {
    constructor(modalCtrlr, api, checkUser, router) {
        this.modalCtrlr = modalCtrlr;
        this.api = api;
        this.checkUser = checkUser;
        this.router = router;
        this.previous_tab = 'true';
        this.upcoming_tab = 'false';
        this.previousBookingRecords = [];
        this.upcomingBookingRecords = [];
        this.response = 'true';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.previous_tab == 'true') {
            this.previousTab();
        }
        else {
            this.upcomingTab();
        }
    }
    previousTab() {
        this.previous_tab = 'true';
        this.upcoming_tab = 'false';
        console.log("this.previous_tab: ", this.previous_tab);
        console.log("this.upcoming_tab: ", this.upcoming_tab);
        this.getPreviousBookings();
    }
    getPreviousBookings() {
        let data = {
            appuser_id: this.checkUser.appUserId
        };
        this.api.showLoading();
        this.api.sendRequest('getCarsBookingPrevious', data).subscribe((res) => {
            console.log("Response: ", res);
            if (res.status == 'success') {
                this.response = 'true';
                this.previousBookingRecords = res.data;
                for (let rec of this.previousBookingRecords) {
                    rec.f_start_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(rec.start_date).toISOString()), 'dd-MM-yyyy');
                    rec.f_end_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(rec.end_date).toISOString()), 'dd-MM-yyyy');
                }
                this.api.hideLoading();
                console.log('previousBookingRecords: ', this.previousBookingRecords);
            }
            else if (res.status == 'error') {
                this.api.hideLoading();
                this.response = 'false';
            }
            else {
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("Api Call Error: ", err);
        });
    }
    upcomingTab() {
        this.previous_tab = 'false';
        this.upcoming_tab = 'true';
        console.log("this.previous_tab: ", this.previous_tab);
        console.log("this.upcoming_tab: ", this.upcoming_tab);
        this.getUpcomingBookings();
    }
    getUpcomingBookings() {
        let data = {
            appuser_id: this.checkUser.appUserId
        };
        this.api.showLoading();
        this.api.sendRequest('getCarsBookingUpcoming', data).subscribe((res) => {
            console.log("Response: ", res);
            if (res.status == 'success') {
                this.response = 'true';
                this.upcomingBookingRecords = res.data;
                for (let rec of this.upcomingBookingRecords) {
                    rec.f_start_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(rec.start_date).toISOString()), 'dd-MM-yyyy');
                    rec.f_end_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(rec.end_date).toISOString()), 'dd-MM-yyyy');
                }
                this.api.hideLoading();
                console.log('upcomingBookingRecords: ', this.upcomingBookingRecords);
            }
            else if (res.status == 'error') {
                this.api.hideLoading();
                this.response = 'false';
            }
            else {
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("Api Call Error: ", err);
        });
    }
    homeTab() {
        this.router.navigate(['/home-cars-after-login']);
    }
    messagesTab() {
        this.router.navigate(['/messages']);
    }
    bookingTab() {
        this.router.navigate(['/bookings']);
    }
    favoriteTab() {
        this.router.navigate(['/favorites']);
    }
    showDetails(data) {
        console.log(data);
        this.router.navigate(['/booking-details', {
                data: JSON.stringify(data),
                previous_tab: this.previous_tab,
                upcoming_tab: this.upcoming_tab
            }]);
    }
};
BookingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_3__.CheckUserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
BookingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-bookings',
        template: _bookings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bookings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookingsPage);



/***/ }),

/***/ 31083:
/*!********************************************************!*\
  !*** ./src/app/bookings/bookings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.header {\n  position: relative;\n  padding: 30px 16px 0px;\n  display: flex;\n  align-items: center;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  position: absolute;\n}\n\n.btn_bg_css {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 16px 10px;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.wrapper {\n  padding: 5px 16px 20px;\n}\n\n.car_card {\n  text-align: center;\n  margin-top: 16px;\n  position: relative;\n}\n\n.heart_icon {\n  position: absolute;\n  right: 5%;\n  top: 5%;\n}\n\n.car_image {\n  object-fit: cover;\n  width: 100%;\n  height: 200px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.tab_button {\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  --color: #B0B0B0;\n  --background: #FBFBFB;\n  height: 48px;\n  width: 48%;\n  margin: 0px;\n  text-transform: capitalize;\n  --box-shadow: none;\n  --border-color: #D4DCE1 !important;\n  --border-width: 1.5px;\n  --border-style: solid;\n  --border-radius: 10px !important;\n}\n\n.btn_active {\n  --background:#8000FF;\n  font-weight: 600;\n  --color: white !important;\n}\n\n.no_booking {\n  text-align: center;\n  margin: 20px;\n  color: #0F172A;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 19px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n}\n\n.car_info_subdiv {\n  position: absolute;\n  right: 12px;\n  bottom: 0px;\n}\n\n.cost_label {\n  font-size: 10px;\n  font-weight: 500;\n  color: white;\n  margin-right: 8px;\n}\n\n.car_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.left_subdiv {\n  text-align: left;\n  line-height: 1;\n}\n\n.star_margin {\n  margin-right: 3.8px;\n}\n\n.rebook_label {\n  position: absolute;\n  bottom: 29%;\n  right: 16px;\n  background: #FFDF00;\n  padding: 4px 29px;\n  border-radius: 34px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #0F172A;\n}\n\n.status_label {\n  position: absolute;\n  bottom: 29%;\n  left: 16px;\n  background: #0F172A;\n  padding: 4px 29px;\n  border-radius: 34px;\n  font-size: 12px;\n  font-weight: 400;\n  color: white;\n}\n\n.box_styling {\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 11px 12px 10px;\n  border-radius: 5px;\n}\n\n.box_heading {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.set_width {\n  width: 43.5%;\n}\n\n.range_div {\n  transform: rotate(90deg);\n  position: absolute;\n  top: 46px;\n  right: 37.5%;\n  width: 135px !important;\n}\n\n.ion_range {\n  --knob-background: #8000FF!important;\n  --bar-background: #D4DCE1 !important;\n  --knob-box-shadow: 0px 0px 2px 5px white;\n  --knob-size: 11px;\n  --bar-height: 1px;\n}\n\n.box_description {\n  margin-top: 7px;\n  font-size: 12px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n  height: auto;\n  max-height: 90px;\n  overflow: hidden;\n}\n\n.box_sub_heading {\n  margin-top: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #8000FF;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 65%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 43.5%;\n    width: 135px !important;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 896px) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 46.5%;\n    width: 135px !important;\n  }\n}\n\n@media screen and (device-width: 412px) and (max-device-height: 915px) {\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 43.5%;\n    width: 135px !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .set_width {\n    width: 43.5%;\n    height: 175px;\n  }\n  .range_div {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 46px;\n    right: 73.5%;\n    width: 135px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmdzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGJvb2tpbmdzXFxib29raW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEE7RUFDQyx1QkFBQTtFQUNHLGtCQUFBO0FDUUo7O0FETkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLHNCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUNhSjs7QURYQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ2NKOztBRFpBO0VBQ0ksbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FDZUo7O0FEYkE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNnQko7O0FEUUE7RUFDSSxrQkFBQTtF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a2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4udXJiYW5pc3R7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wb3BwaW5ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5idG5fYmdfY3Nze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTZweCAxMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzo1cHggMTZweCAyMHB4O1xyXG59XHJcbi5jYXJfY2FyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYXJ0X2ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICB0b3A6IDUlO1xyXG59XHJcbi5jYXJfaW1hZ2V7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG59XHJcbi50YWJfYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLWNvbG9yOiAjQjBCMEIwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bl9hY3RpdmV7XHJcbiAgICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIC50YWJfYnV0dG9uLmlvc3tcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgLS1jb2xvcjogI0IwQjBCMDtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuLy8gICAgIGhlaWdodDogNDhweDtcclxuLy8gICAgIHdpZHRoOiA0OCU7XHJcbi8vICAgICBtYXJnaW46IDBweDtcclxuLy8gICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4vLyAgICAgLS1ib3JkZXItY29sb3I6ICNENERDRTEgIWltcG9ydGFudDtcclxuLy8gICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuLy8gICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuLy8gICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuYnRuX2FjdGl2ZS5pb3N7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5ub19ib29raW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbn1cclxuLmNhcl9pbmZvX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcl9uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ucmF0aW5nX3ZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5jYXJfaW5mb19zdWJkaXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG59XHJcbi5jb3N0X2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5jYXJfcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5sZWZ0X3N1YmRpdntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4uc3Rhcl9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMuOHB4O1xyXG59XHJcbi5yZWJvb2tfbGFiZWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDI5JTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGREYwMDtcclxuICAgIHBhZGRpbmc6IDRweCAyOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxufVxyXG4uc3RhdHVzX2xhYmVse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyOSU7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBGMTcyQTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBwYWRkaW5nOiA0cHggMjlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ib3hfc3R5bGluZ3tcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIHBhZGRpbmc6IDExcHggMTJweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5ib3hfaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnNldF93aWR0aHtcclxuICAgIHdpZHRoOiA0My41JTtcclxufVxyXG4ucmFuZ2VfZGl2e1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NnB4O1xyXG4gICAgcmlnaHQ6IDM3LjUlO1xyXG4gICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlvbl9yYW5nZXtcclxuICAgIC0ta25vYi1iYWNrZ3JvdW5kOiAjODAwMEZGIWltcG9ydGFudDtcclxuICAgIC0tYmFyLWJhY2tncm91bmQ6ICNENERDRTEgIWltcG9ydGFudDtcclxuICAgIC0ta25vYi1ib3gtc2hhZG93OiAwcHggMHB4IDJweCA1cHggd2hpdGU7XHJcbiAgICAtLWtub2Itc2l6ZTogMTFweDtcclxuICAgIC0tYmFyLWhlaWdodDogMXB4O1xyXG59XHJcbi5ib3hfZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogOTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJveF9zdWJfaGVhZGluZ3tcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uY2FyMl9wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhcjJfaW5mb19zdWJkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW52aXRlX2J0bntcclxuICAgIC0tYmFja2dyb3VuZDojODAwMEZGO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHdpZHRoOjY1JTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG4tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmJ0bl9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0IxQThCOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmJ0bkFjdGl2ZV9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmlvbl90YWJfYmFye1xyXG4gICAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2IoMCAwIDAgLyAxNiUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7IFxyXG5cclxuICAgIC5yYW5nZV9kaXZ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDQzLjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDg5NnB4KSBcclxuICB7IFxyXG5cclxuICAgIC5yYW5nZV9kaXYge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0NnB4O1xyXG4gICAgICAgIHJpZ2h0OiA0Ni41JTtcclxuICAgICAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIFxyXG4gIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTJweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogOTE1cHgpIFxyXG4gIHtcclxuICAgIC5yYW5nZV9kaXZ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDQzLjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gICAgLnNldF93aWR0aHtcclxuICAgICAgICB3aWR0aDogNDMuNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIH1cclxuICAgIC5yYW5nZV9kaXZ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDczLjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4udXJiYW5pc3Qge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucG9wcGlucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzBweCAxNnB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnVpY29uIHtcbiAgY29sb3I6IHZhcigtLW1lbnUtaWNvbik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJ0bl9iZ19jc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHggMTZweCAxMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjBweDtcbn1cblxuLmNhcl9jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFydF9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG4gIHRvcDogNSU7XG59XG5cbi5jYXJfaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuXG4udGFiX2J1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1jb2xvcjogI0IwQjBCMDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci13aWR0aDogMS41cHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5ub19ib29raW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjMEYxNzJBO1xufVxuXG4uY2FyX2luZm9fYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogOXB4IDEycHggOC41cHggMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJhdGluZ192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNENERDRTE7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jYXJfaW5mb19zdWJkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICBib3R0b206IDBweDtcbn1cblxuLmNvc3RfbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYXJfcHJpY2Uge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxlZnRfc3ViZGl2IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zdGFyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMy44cHg7XG59XG5cbi5yZWJvb2tfbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjklO1xuICByaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogI0ZGREYwMDtcbiAgcGFkZGluZzogNHB4IDI5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG59XG5cbi5zdGF0dXNfbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjklO1xuICBsZWZ0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xuICBwYWRkaW5nOiA0cHggMjlweDtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib3hfc3R5bGluZyB7XG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBwYWRkaW5nOiAxMXB4IDEycHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYm94X2hlYWRpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2V0X3dpZHRoIHtcbiAgd2lkdGg6IDQzLjUlO1xufVxuXG4ucmFuZ2VfZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDZweDtcbiAgcmlnaHQ6IDM3LjUlO1xuICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbn1cblxuLmlvbl9yYW5nZSB7XG4gIC0ta25vYi1iYWNrZ3JvdW5kOiAjODAwMEZGIWltcG9ydGFudDtcbiAgLS1iYXItYmFja2dyb3VuZDogI0Q0RENFMSAhaW1wb3J0YW50O1xuICAtLWtub2ItYm94LXNoYWRvdzogMHB4IDBweCAycHggNXB4IHdoaXRlO1xuICAtLWtub2Itc2l6ZTogMTFweDtcbiAgLS1iYXItaGVpZ2h0OiAxcHg7XG59XG5cbi5ib3hfZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogOTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJveF9zdWJfaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzgwMDBGRjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2FyMl9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyMl9pbmZvX3N1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnZpdGVfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XG4gIC0tYm9yZGVyLXJhZGl1czowcHg7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5idG5fbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNCMUE4Qjk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5idG5BY3RpdmVfbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM4MDAwRkY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5pb25fdGFiX2JhciB7XG4gIHBhZGRpbmc6IDhweCA4cHggMTJweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDczNnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAucmFuZ2VfZGl2IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDZweDtcbiAgICByaWdodDogNDMuNSU7XG4gICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDg5NnB4KSB7XG4gIC5yYW5nZV9kaXYge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NnB4O1xuICAgIHJpZ2h0OiA0Ni41JTtcbiAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDEycHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDkxNXB4KSB7XG4gIC5yYW5nZV9kaXYge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NnB4O1xuICAgIHJpZ2h0OiA0My41JTtcbiAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xuICAuc2V0X3dpZHRoIHtcbiAgICB3aWR0aDogNDMuNSU7XG4gICAgaGVpZ2h0OiAxNzVweDtcbiAgfVxuICAucmFuZ2VfZGl2IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDZweDtcbiAgICByaWdodDogNzMuNSU7XG4gICAgd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 68263:
/*!********************************************************!*\
  !*** ./src/app/bookings/bookings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Bookings</div>\n    </div>\n    \n  </ion-toolbar>\n  <div class=\"btn_bg_css\" >\n    <ion-button class=\"tab_button\" [class.btn_active]=\"previous_tab=='true'\" (click)=\"previousTab()\">Previous</ion-button>\n    <ion-button class=\"tab_button\" [class.btn_active]=\"upcoming_tab=='true'\" (click)=\"upcomingTab()\">Upcoming</ion-button>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    \n    <div *ngIf=\"previous_tab=='true'\" >\n     \n      <div class=\"no_booking\" *ngIf=\"response == 'false'\">Bookings Unavailable  </div>\n      <div *ngFor=\"let data of previousBookingRecords\"> \n        <div class=\"car_card\" (click)=\"showDetails(data)\">\n          <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.cars_details[0].image1}}\" alt=\"\">\n          \n          <div *ngIf=\"data.user_favourite_cars.length>0\">\n            <img class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"data.user_favourite_cars[0].status !='liked'\">\n            <img class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"data.user_favourite_cars[0].status == 'liked'\">\n          </div>\n          \n          <div *ngIf=\"data.user_favourite_cars.length==0\">\n            <img class=\"heart_icon\" src=\"assets/images/icons/heart.svg\">\n          </div>\n         \n          <div class=\"rebook_label poppins\" >Rebook</div>\n          <div class=\"status_label poppins\" >{{data.status}}</div>\n          <div class=\"car_info_box\" >\n            <div>\n              <div class=\"car_name poppins\">{{data.cars_details[0].vehical_name}}</div>\n              \n              <div class=\"left_subdiv\" >\n                <span *ngIf=\"data.cars_details[0].rating == 0\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=1 && data.cars_details[0].rating < 1.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=1.5 && data.cars_details[0].rating < 2.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=2.5 && data.cars_details[0].rating < 3.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=3.5 && data.cars_details[0].rating < 4.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=4.5 && data.cars_details[0].rating < 5.1\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                </span>\n                <!-- <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\" *ngIf=\"data.cars_details[0].rating == 0\">not rated yet</span> -->\n                <!-- *ngIf=\"data.cars_details[0].rating != 0\" -->\n                <span class=\"rating_value urbanist\" >({{data.cars_details[0].rating}})</span>\n              </div>\n            </div>\n            <div class=\"car_info_subdiv\">\n              <div><span class=\"cost_label urbanist\">Total Cost</span><span class=\"car_price urbanist\">$</span><span class=\"car_price urbanist\" style=\"font-size: 30px;\">{{data.total_cost}}</span></div>\n            </div>\n          </div>\n        </div>\n        \n        \n      </div>\n\n    </div>\n    <div *ngIf=\"upcoming_tab=='true'\" >\n      <div class=\"no_booking\" *ngIf=\"response == 'false'\">Bookings Unavailable</div>\n      <div *ngFor=\"let data of upcomingBookingRecords\">\n        <div class=\"car_card\"  (click)=\"showDetails(data)\">\n          <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.cars_details[0].image1}}\" alt=\"\">\n          \n          <div *ngIf=\"data.user_favourite_cars.length>0\">\n            <img class=\"heart_icon\"  src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"data.user_favourite_cars[0].status !='liked'\">\n            <img class=\"heart_icon\"  src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"data.user_favourite_cars[0].status == 'liked'\">\n          </div>\n          <div *ngIf=\"data.user_favourite_cars.length==0\">\n            <img class=\"heart_icon\"  src=\"assets/images/icons/heart.svg\">\n          </div>\n          \n          <div class=\"rebook_label urbanist\" style=\"background: #E23C3C;color: white;\" >Cancel</div>\n          <div class=\"status_label poppins\" >{{data.status}}</div>\n          <div class=\"car_info_box\">\n            <div>\n              <div class=\"car_name urbanist\">{{data.cars_details[0].vehical_name}}</div>\n              <div class=\"left_subdiv\" >\n                <span *ngIf=\"data.cars_details[0].rating == 0\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=1 && data.cars_details[0].rating < 1.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=1.5 && data.cars_details[0].rating < 2.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=2.5 && data.cars_details[0].rating < 3.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=3.5 && data.cars_details[0].rating < 4.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"data.cars_details[0].rating >=4.5 && data.cars_details[0].rating < 5.1\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                </span>\n                <!-- <span class=\"rating_value urbanist\" style=\"color: #FFDF00;text-decoration: underline;\" *ngIf=\"data.cars_details[0].rating == 0\">not rated yet</span> -->\n                <!-- *ngIf=\"data.cars_details[0].rating != 0\" -->\n                <span class=\"rating_value urbanist\" >({{data.cars_details[0].rating}})</span>\n              </div>\n            </div>\n            <div class=\"car_info_subdiv\">\n              <div><span class=\"cost_label urbanist\">Total Cost</span><span class=\"car_price urbanist\">$</span><span class=\"car_price urbanist\" style=\"font-size: 30px;\">{{data.total_cost}}</span></div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\n    <ion-tabs style=\"display:contents ;\">\n\n      <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n        <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n          <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Home</ion-label>\n          <!-- <ion-badge>6</ion-badge> -->\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n          <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages.svg\" alt=\"\">\n          <ion-label class=\"btn_label\" >Messages</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n          <img src=\"assets/images/tab_icons/booking_active.svg\" alt=\"\">\n          <ion-label class=\"btnActive_label\">Booking</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n          <img src=\"assets/images/tab_icons/favorite.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Favorities</ion-label>\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n    </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_bookings_bookings_module_ts.js.map