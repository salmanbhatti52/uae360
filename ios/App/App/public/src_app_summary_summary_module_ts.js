"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_summary_summary_module_ts"],{

/***/ 53608:
/*!***************************************************!*\
  !*** ./src/app/summary/summary-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryPageRoutingModule": () => (/* binding */ SummaryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary.page */ 33313);




const routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_0__.SummaryPage
    }
];
let SummaryPageRoutingModule = class SummaryPageRoutingModule {
};
SummaryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SummaryPageRoutingModule);



/***/ }),

/***/ 87001:
/*!*******************************************!*\
  !*** ./src/app/summary/summary.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryPageModule": () => (/* binding */ SummaryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary-routing.module */ 53608);
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary.page */ 33313);







let SummaryPageModule = class SummaryPageModule {
};
SummaryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _summary_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummaryPageRoutingModule
        ],
        declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_1__.SummaryPage]
    })
], SummaryPageModule);



/***/ }),

/***/ 33313:
/*!*****************************************!*\
  !*** ./src/app/summary/summary.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryPage": () => (/* binding */ SummaryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _summary_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary.page.html?ngResource */ 30090);
/* harmony import */ var _summary_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary.page.scss?ngResource */ 99445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-user.service */ 47852);








let SummaryPage = class SummaryPage {
    constructor(location, navCtrlr, api, checkUser) {
        this.location = location;
        this.navCtrlr = navCtrlr;
        this.api = api;
        this.checkUser = checkUser;
        this.favorites = '';
        this.startDate = '';
        this.endDate = '';
        this.startTime = '';
        this.endTime = '';
        this.totalCost = '';
        this.getLocation = '';
        this.carData = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.carData = this.api.carDataById;
        this.bookingResponse = this.api.bookingResponse;
        if (this.bookingResponse !== undefined) {
            this.startDate = this.bookingResponse.start_date;
            this.endDate = this.bookingResponse.end_date;
            this.startTime = this.bookingResponse.start_time;
            this.endTime = this.bookingResponse.end_time;
            this.totalCost = this.bookingResponse.total_cost;
            this.drivingLicense = this.bookingResponse.license_img;
            this.getLocation = this.bookingResponse.location;
        }
        if (this.carData != undefined) {
            for (let data of this.carData) {
                this.carId = data.car_id;
                this.vehicleName = data.vehical_name;
                if (!data.favourite_status) {
                    this.favorites = 'dislike';
                }
                else {
                    this.favorites = data.favourite_status;
                }
            }
        }
    }
    makefavorite() {
        let data = {
            favourite_car_id: this.carId,
            user_id: this.checkUser.appUserId,
        };
        this.api.showLoading();
        this.api.sendRequest('favouriteCars', data).subscribe((res) => {
            this.api.hideLoading();
            console.log('Favorite Api Response: ', res);
            if (res.status == 'success') {
                this.favorites = res.data;
                this.getCarDataById();
            }
            // else if(res.status == 'error'){
            //   this.api.presentToast()
            // }
        }, (err) => {
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
        this.api.sendRequest('getCarsById', data).subscribe((res) => {
            this.api.hideLoading();
            console.log('api response:', res);
            if (res.status == 'success') {
                this.api.carDataById = res.data;
                // if(!res.data.favourite_status){
                //   console.log("Favorite status not found");
                //   this.api.favorite_status = false;
                // }
                console.log('carDataById:', this.api.carDataById);
            }
        }, (err) => {
            this.api.hideLoading();
            console.log(err);
        });
    }
    goBack() {
        this.location.back();
    }
    startPaymentProcess() {
        this.navCtrlr.navigateForward('payment-details');
    }
};
SummaryPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_3__.CheckUserService }
];
SummaryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-summary',
        template: _summary_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_summary_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SummaryPage);



/***/ }),

/***/ 99445:
/*!******************************************************!*\
  !*** ./src/app/summary/summary.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 8px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.show_status {\n  font-size: 14px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n  color: #12D804;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_div {\n  text-align: center;\n  position: relative;\n}\n\n.car_image {\n  object-fit: cover;\n  width: 100%;\n  height: 200px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.heart_icon {\n  position: absolute;\n  right: 5%;\n  top: 5%;\n}\n\n.left_subdiv {\n  text-align: left;\n  line-height: 1;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.star_margin {\n  margin-right: 3.8px;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.cost_price_div {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.cost_label {\n  font-size: 24px;\n  font-weight: bold;\n  color: black;\n}\n\n.sub_heading_label {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n}\n\n.st_end_time_div {\n  display: flex;\n  margin-top: 12px;\n  justify-content: space-between;\n}\n\n.time_css {\n  margin-top: 7px;\n  width: 100%;\n}\n\n.date_time_label {\n  color: #8000FF;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.date_time_data {\n  margin-left: 8px;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.location_data {\n  color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.date_time_box {\n  width: 48.5%;\n  background: #EFEEEE;\n  border-radius: 10px;\n  padding: 9px 7px 9px 10px;\n}\n\n.license_img {\n  height: 200px;\n  width: 300px;\n  margin-top: 16px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 20px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcc3VtbWFyeVxcc3VtbWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNRSjs7QUROQTtFQUNJLHFCQUFBO0FDU0o7O0FEUEE7RUFDSSx1QkFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBRUEsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ1VKOztBRFJBO0VBQ0ksa0JBQUE7RUFBb0Isa0JBQUE7QUNZeEI7O0FEVkE7RUFDSSxpQkFBQTtFQUFrQixXQUFBO0VBQVksYUFBQTtFQUFlLGdDQUFBO0FDZ0JqRDs7QURkQTtFQUNJLGtCQUFBO0VBQW1CLFNBQUE7RUFBVSxPQUFBO0FDbUJqQzs7QURqQkE7RUFDSSxnQkFBQTtFQUFpQixjQUFBO0FDcUJyQjs7QURuQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDc0JKOztBRHBCQTtFQUNJLG1CQUFBO0FDdUJKOztBRHJCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUMwQko7O0FEeEJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUMyQko7O0FEekJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzRCSjs7QUQxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDNkJKOztBRDNCQTtFQUNJLGFBQUE7RUFBZSxnQkFBQTtFQUFpQiw4QkFBQTtBQ2dDcEM7O0FEN0JBO0VBQ0ksZUFBQTtFQUFnQixXQUFBO0FDaUNwQjs7QUQvQkE7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNrQ0o7O0FEaENBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNtQ0o7O0FEakNBO0VBQ0ksY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDb0NKOztBRGxDQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNxQ0o7O0FEbkNBO0VBQ0ksYUFBQTtFQUFjLFlBQUE7RUFBYSxnQkFBQTtFQUFpQixtQkFBQTtFQUFvQixpQkFBQTtBQzBDcEU7O0FEeENBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQzJDSjs7QUR6Q0E7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQzRDSiIsImZpbGUiOiJzdW1tYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVyYmFuaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9wcGluc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5zaG93X3N0YXR1c3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMxMkQ4MDQ7XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MTVweCAxNnB4IDIwcHg7XHJcbn1cclxuLmNhcl9pbmZvX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FyX2RpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJfaW1hZ2V7XHJcbiAgICBvYmplY3QtZml0OiBjb3Zlcjt3aWR0aDogMTAwJTtoZWlnaHQ6IDIwMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxufVxyXG4uaGVhcnRfaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogNSU7dG9wOiA1JTtcclxufVxyXG4ubGVmdF9zdWJkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O2xpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5jYXJfbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnN0YXJfbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzLjhweDtcclxufVxyXG4ucmF0aW5nX3ZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5jYXIyX3ByaWNle1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyMl9pbmZvX3N1YmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb3N0X3ByaWNlX2RpdntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb3N0X2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnN1Yl9oZWFkaW5nX2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnN0X2VuZF90aW1lX2RpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDEycHg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGltZV9jc3N7XHJcbiAgICBtYXJnaW4tdG9wOjdweDsgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRhdGVfdGltZV9sYWJlbHtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uZGF0ZV90aW1lX2RhdGF7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5sb2NhdGlvbl9kYXRhe1xyXG4gICAgY29sb3I6ICM4RDhEOEQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5kYXRlX3RpbWVfYm94e1xyXG4gICAgd2lkdGg6IDQ4LjUlO1xyXG4gICAgYmFja2dyb3VuZDogI0VGRUVFRTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA5cHggN3B4IDlweCAxMHB4O1xyXG59XHJcbi5saWNlbnNlX2ltZ3tcclxuICAgIGhlaWdodDogMjAwcHg7d2lkdGg6IDMwMHB4O21hcmdpbi10b3A6IDE2cHg7Ym9yZGVyLXJhZGl1czogMTBweDtvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ubG9naW5fYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG5fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4udXJiYW5pc3Qge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucG9wcGlucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTZweCA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5zaG93X3N0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzEyRDgwNDtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDE2cHggMjBweDtcbn1cblxuLmNhcl9pbmZvX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzBGMTcyQTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyX2RpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyX2ltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLmhlYXJ0X2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1JTtcbiAgdG9wOiA1JTtcbn1cblxuLmxlZnRfc3ViZGl2IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5jYXJfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0YXJfbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAzLjhweDtcbn1cblxuLnJhdGluZ192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNENERDRTE7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jYXIyX3ByaWNlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXIyX2luZm9fc3ViZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvc3RfcHJpY2VfZGl2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29zdF9sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnN1Yl9oZWFkaW5nX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3RfZW5kX3RpbWVfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGltZV9jc3Mge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGF0ZV90aW1lX2xhYmVsIHtcbiAgY29sb3I6ICM4MDAwRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGF0ZV90aW1lX2RhdGEge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5sb2NhdGlvbl9kYXRhIHtcbiAgY29sb3I6ICM4RDhEOEQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZGF0ZV90aW1lX2JveCB7XG4gIHdpZHRoOiA0OC41JTtcbiAgYmFja2dyb3VuZDogI0VGRUVFRTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogOXB4IDdweCA5cHggMTBweDtcbn1cblxuLmxpY2Vuc2VfaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmxvZ2luX2J1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCBhdXRvIDBweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5idG5fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 30090:
/*!******************************************************!*\
  !*** ./src/app/summary/summary.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">{{vehicleName}}</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"car_div\" *ngFor=\"let data of carData\">\n      <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image1}}\" alt=\"\">\n      \n      <img class=\"heart_icon\" (click)=\"makefavorite()\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n      <img class=\"heart_icon\" (click)=\"makefavorite()\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n      <div class=\"car_info_box\" >\n        <div>\n          <div class=\"car_name poppins\">{{data.vehical_name}}</div>\n          <div class=\"left_subdiv\">\n            \n            <span *ngIf=\"data.rating && (data.rating == 0 || null)\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=1 && data.rating < 1.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=1.5 && data.rating < 2.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=2.5 && data.rating < 3.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=3.5 && data.rating < 4.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=4.5 && data.rating < 5.1\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            </span>\n            \n            <span class=\"rating_value poppins\">{{data.total_bookings}} trips</span>\n          </div>\n        </div>\n        <div class=\"car2_info_subdiv\">\n          <div style=\"line-height: 1;\">\n            <span class=\"car2_price poppins\" >$</span>\n            <span class=\"car2_price poppins\" style=\"font-size: 32px;margin-right: 3px;\">{{data.rent_cost_day}}</span>\n            <span class=\"car2_price poppins\" style=\"font-size: 10px;font-weight: 500;\">/Day</span>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n\n    <div class=\"cost_price_div\">\n      <div class=\"cost_label poppins\">Total Cost</div>\n      <div class=\"cost_label poppins\" style=\"color: #8000FF;\">${{totalCost}}</div>\n    </div>\n\n    <div class=\"sub_heading_label urbanist\" style=\"margin-top: 10px;\">Rent Dates</div>\n    <div style=\"display: flex; margin-top: 7px; justify-content: space-between;\">\n      <div class=\"date_time_box\">\n        <span class=\"date_time_label\">Start Date</span> \n        <span class=\"date_time_data\">{{startDate}}</span>\n      </div>\n      <div class=\"date_time_box\">\n        <span class=\"date_time_label\">End Date</span>\n        <span class=\"date_time_data\">{{endDate}}</span>\n      </div>\n    </div>\n\n    \n    <div class=\"st_end_time_div\">\n      <div style=\"width: 48.5%;\">\n        <div class=\"sub_heading_label urbanist\">Rent Time</div>\n        <div class=\"date_time_box time_css\" style=\"width: 100%;\" >\n          <span class=\"date_time_label\">Start Time</span>\n          <span class=\"date_time_data\">{{startTime}}</span>\n\n        </div>\n      </div>\n      <div style=\"width: 48.5%;\">\n        <div class=\"sub_heading_label urbanist\">Rent Time</div>\n        <div class=\"date_time_box time_css\" style=\"width: 100%;\">\n          <span class=\"date_time_label\">End Time</span>\n          <span class=\"date_time_data\">{{endTime}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"sub_heading_label urbanist\" style=\"margin-top:12px\">Location</div>\n    <div style=\"display: flex;margin-top:10px;\">\n      <div style=\"margin-right: 10.9px;\"><img src=\"assets/images/icons/summary_location.svg\" alt=\"\"></div>\n      <div>\n        <div class=\"date_time_label\">Pickup</div>\n        <div class=\"location_data\">{{getLocation}}</div>\n      </div>\n    </div>\n\n    <div class=\"sub_heading_label urbanist\" style=\"margin-top:12px\">Driving License</div>\n    <div style=\"text-align: center;\">\n      <img class=\"license_img\" src=\"{{drivingLicense}}\" alt=\"\">\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar style=\"--background: #FBFBFB;\">\n    <div style=\"padding: 0px 16px 20px;\">\n      <ion-button class=\"login_button\" (click)=\"startPaymentProcess()\">\n        <span class=\"btn_text\">Done</span>\n      </ion-button>\n    </div>\n  </ion-toolbar>\n  \n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_summary_summary_module_ts.js.map