"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_car-details_car-details_module_ts"],{

/***/ 1930:
/*!***********************************************************!*\
  !*** ./src/app/car-details/car-details-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailsPageRoutingModule": () => (/* binding */ CarDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _car_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-details.page */ 1677);




const routes = [
    {
        path: '',
        component: _car_details_page__WEBPACK_IMPORTED_MODULE_0__.CarDetailsPage
    }
];
let CarDetailsPageRoutingModule = class CarDetailsPageRoutingModule {
};
CarDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarDetailsPageRoutingModule);



/***/ }),

/***/ 2901:
/*!***************************************************!*\
  !*** ./src/app/car-details/car-details.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailsPageModule": () => (/* binding */ CarDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _car_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-details-routing.module */ 1930);
/* harmony import */ var _car_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-details.page */ 1677);







let CarDetailsPageModule = class CarDetailsPageModule {
};
CarDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _car_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarDetailsPageRoutingModule
        ],
        declarations: [_car_details_page__WEBPACK_IMPORTED_MODULE_1__.CarDetailsPage]
    })
], CarDetailsPageModule);



/***/ }),

/***/ 1677:
/*!*************************************************!*\
  !*** ./src/app/car-details/car-details.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailsPage": () => (/* binding */ CarDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _car_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-details.page.html?ngResource */ 9684);
/* harmony import */ var _car_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-details.page.scss?ngResource */ 4438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 7852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);








let CarDetailsPage = class CarDetailsPage {
    constructor(location, navCtrlr, checkUser, api) {
        this.location = location;
        this.navCtrlr = navCtrlr;
        this.checkUser = checkUser;
        this.api = api;
        this.showCategories = false;
        this.rentCategories = [{ category: 'Day' }, { category: 'Month' }];
        this.categoryVal = 'Day';
        this.carData = [];
        this.slideOpts = {
            intialSlide: 0,
            speed: 400,
            slidesPerView: 1
        };
    }
    ngOnInit() {
        this.carData = this.api.carDataById;
        console.log('car_data:', this.carData);
    }
    goBack() {
        this.location.back();
    }
    displayCategories() {
        if (this.showCategories == false) {
            this.showCategories = true;
        }
        else {
            this.showCategories = false;
        }
    }
    selectedCategory(val) {
        console.log(val);
        this.categoryVal = val;
    }
    gotoRatings() {
        if (this.checkUser.appUserId == null) {
            this.navCtrlr.navigateRoot('sign-in');
        }
        else if (this.checkUser.appUserId != null) {
            this.navCtrlr.navigateRoot('ratings');
        }
        else {
        }
    }
    startCarBooking() {
        if (this.checkUser.appUserId == null) {
            this.navCtrlr.navigateRoot('sign-in');
        }
        else if (this.checkUser.appUserId != null) {
            this.navCtrlr.navigateRoot('car-booking');
        }
        else {
        }
    }
    startChatwithOwner() {
        if (this.checkUser.appUserId == null) {
            this.navCtrlr.navigateRoot('sign-in');
        }
        else if (this.checkUser.appUserId != null) {
            this.navCtrlr.navigateRoot('message-owner-side');
        }
        else {
        }
    }
};
CarDetailsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_2__.CheckUserService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
CarDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-car-details',
        template: _car_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_car_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarDetailsPage);



/***/ }),

/***/ 4438:
/*!**************************************************************!*\
  !*** ./src/app/car-details/car-details.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.header_footer_bg {\n  background-color: #FBFBFB !important;\n}\n\n.content_background {\n  --background: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 15px;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.wrapper {\n  padding: 5px 16px 20px;\n}\n\n.car_image {\n  width: 100%;\n  height: 188px;\n  border-radius: 10px;\n}\n\n.name_price_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 11px 12px 10px;\n  border-radius: 5px;\n  height: 55px;\n}\n\n.car_name {\n  font-size: 24px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.price_val {\n  color: #8000FF;\n  font-family: \"Urbanist\", sans-serif;\n  font-weight: 600;\n}\n\n.category_label {\n  color: black;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.categories {\n  width: 100px;\n  position: absolute;\n  z-index: 1;\n  background: #FBFBFB;\n  top: 20px;\n  right: 0px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.rotate_icon {\n  transform: rotate(180deg);\n}\n\n.box_styling {\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 8px 9px;\n  border-radius: 5px;\n}\n\n.box_heading {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.box_description {\n  margin-top: 5px;\n  font-size: 12px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n  height: auto;\n  max-height: 90px;\n  overflow: hidden;\n}\n\n.box_sub_heading {\n  margin-top: 3px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #8000FF;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.inner_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.trips_label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 65%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGNhci1kZXRhaWxzXFxjYXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEQUE7RUFDSSxvQ0FBQTtBQ0dKOztBRERBO0VBQ0ksZ0NBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNPSjs7QURMQTtFQUNJLHNCQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDU0o7O0FEUEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNXSjs7QURUQTtFQUNJLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDWUo7O0FEVkE7RUFFSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNZSjs7QURWQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLDRDQUFBO0FDWUo7O0FEVkE7RUFDSSx5QkFBQTtBQ2FKOztBRFhBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2NKOztBRFpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDZUo7O0FEYkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNnQko7O0FEZEE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDaUJKOztBRGZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNrQko7O0FEaEJBO0VBQ0ksaUJBQUE7QUNtQko7O0FEakJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDb0JKOztBRGxCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3FCSjs7QURuQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtBQ3NCSiIsImZpbGUiOiJjYXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyX2Zvb3Rlcl9iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4uY29udGVudF9iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZDRjZGRjtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzo1cHggMTZweCAyMHB4OyAgICBcclxufVxyXG4uY2FyX2ltYWdle1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTg4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5uYW1lX3ByaWNlX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG4gICAgcGFkZGluZzogMTFweCAxMnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbn1cclxuLmNhcl9uYW1le1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wcmljZV92YWx7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5jYXRlZ29yeV9sYWJlbHtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uY2F0ZWdvcmllc3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMEYxNzJBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxufVxyXG4ucm90YXRlX2ljb257XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5ib3hfc3R5bGluZ3tcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIHBhZGRpbmc6IDhweCA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJveF9oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uYm94X2Rlc2NyaXB0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDkwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5ib3hfc3ViX2hlYWRpbmd7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmlubmVyX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5zdGFyX21hcmdpbntcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcbi50cmlwc19sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uaW52aXRlX2J0bntcclxuICAgIC0tYmFja2dyb3VuZDojODAwMEZGO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHdpZHRoOjY1JTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG4tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuIiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyX2Zvb3Rlcl9iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnRfYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZDRjZGRjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDIwcHg7XG59XG5cbi5jYXJfaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm5hbWVfcHJpY2VfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgcGFkZGluZzogMTFweCAxMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4uY2FyX25hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wcmljZV92YWwge1xuICBjb2xvcjogIzgwMDBGRjtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhdGVnb3J5X2xhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXRlZ29yaWVzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLnJvdGF0ZV9pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmJveF9zdHlsaW5nIHtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJveF9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJveF9kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm94X3N1Yl9oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pbm5lcl9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zdGFyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4udHJpcHNfbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pbnZpdGVfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XG4gIC0tYm9yZGVyLXJhZGl1czowcHg7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */";

/***/ }),

/***/ 9684:
/*!**************************************************************!*\
  !*** ./src/app/car-details/car-details.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [class.header_footer_bg]=\"this.checkUser.appUserId != null\">\n  <ion-toolbar class=\"bgtoolbar\" [class.content_background]=\"this.checkUser.appUserId != null\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"title\">BMW 2 series</div>\n      <div>\n        <img (click)=\"startChatwithOwner()\" src=\"assets/images/icons/chat.svg\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.content_background]=\"this.checkUser.appUserId != null\">\n  <div class=\"wrapper\">\n    <div *ngFor=\"let data of carData\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\">\n            <img class=\"car_image\" src=\"{{data.image1}}\" alt=\"\">\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\">\n            <img class=\"car_image\" src=\"{{data.image2}}\" alt=\"\">\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\">\n            <img class=\"car_image\" src=\"{{data.image3}}\" alt=\"\">\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\">\n            <img class=\"car_image\" src=\"{{data.image4}}\" alt=\"\">\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\">\n            <img class=\"car_image\" src=\"{{data.image5}}\" alt=\"\">\n          </div>\n        </ion-slide>\n      </ion-slides>\n        \n  \n      <div class=\"name_price_box\">\n            <div class=\"car_name\">{{data.vehical_name}}</div>\n        <div style=\"display: flex;align-items: baseline;\">\n          <span class=\"price_val\" style=\"font-size:11px\">$</span>\n          <span class=\"price_val\" style=\"font-size:32px\" *ngIf=\"categoryVal=='Day'\">{{data.rent_cost_day}}</span>\n          <span class=\"price_val\" style=\"font-size:32px\" *ngIf=\"categoryVal=='Month'\">{{data.rent_cost_month}}</span>\n          <span class=\"price_val\" style=\"font-size:32px\">26</span>\n          <span class=\"category_label\" style=\"font-size: 10px;\">/</span>\n          \n          <div (click)=\"displayCategories()\" style=\"display: flex;align-items: baseline;position: relative;\">\n            <span class=\"category_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n            <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n            <div *ngIf=\"showCategories==true\" class=\"categories\">\n              <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category)\">\n                <span class=\"category_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n              </div> \n            </div>  \n          </div>\n        </div>\n  \n      </div>\n  \n      <div class=\"box_styling\">\n        <div class=\"box_heading\">Description</div>\n        <div class=\"box_description\">\n          {{data.description}}\n        </div>\n      </div>\n    </div>\n    \n\n    <div class=\"box_styling\">\n      <div class=\"box_heading\">Owner's Details</div>\n      <div class=\"box_sub_heading\">About</div>\n      <div class=\"box_description\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever since\n        the 1500s.\n      </div>\n    </div>\n\n    <div class=\"box_styling\">\n      <div class=\"box_sub_heading\" style=\"margin-top: 0px;\">Location</div>\n      <div class=\"box_description\" style=\"margin-top: 4px;\">\n        Los Angeles, CA 90015\n      </div>\n    </div>\n\n    <div class=\"box_styling\" style=\"padding: 14px 14px 15px;\" (click)=\"gotoRatings()\">\n      <div class=\"inner_box\">\n        <div>\n          <span class=\"box_heading\" style=\"margin-right: 10px;\">Ratings</span>\n          <span style=\"margin-right: 6px;\">\n            <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n          </span>\n          <span class=\"trips_label\">269 trips</span>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/next.svg\" alt=\"\">\n        </div>\n      </div>\n      \n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" [class.header_footer_bg]=\"this.checkUser.appUserId != null\">\n    <div style=\"margin: 10px 0px 15px;\">\n      <div style=\"text-align: center;\">\n        <ion-button class=\"invite_btn\" (click)=\"startCarBooking()\">\n          <span class=\"btn-text\">Book Now</span>\n        </ion-button>\n      </div>\n    </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_car-details_car-details_module_ts.js.map