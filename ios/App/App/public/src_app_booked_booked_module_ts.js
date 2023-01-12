"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booked_booked_module_ts"],{

/***/ 49098:
/*!*************************************************!*\
  !*** ./src/app/booked/booked-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedPageRoutingModule": () => (/* binding */ BookedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _booked_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booked.page */ 88242);




const routes = [
    {
        path: '',
        component: _booked_page__WEBPACK_IMPORTED_MODULE_0__.BookedPage
    }
];
let BookedPageRoutingModule = class BookedPageRoutingModule {
};
BookedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookedPageRoutingModule);



/***/ }),

/***/ 3615:
/*!*****************************************!*\
  !*** ./src/app/booked/booked.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedPageModule": () => (/* binding */ BookedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _booked_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booked-routing.module */ 49098);
/* harmony import */ var _booked_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booked.page */ 88242);







let BookedPageModule = class BookedPageModule {
};
BookedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _booked_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookedPageRoutingModule
        ],
        declarations: [_booked_page__WEBPACK_IMPORTED_MODULE_1__.BookedPage]
    })
], BookedPageModule);



/***/ }),

/***/ 88242:
/*!***************************************!*\
  !*** ./src/app/booked/booked.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedPage": () => (/* binding */ BookedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _booked_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booked.page.html?ngResource */ 2167);
/* harmony import */ var _booked_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booked.page.scss?ngResource */ 48525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let BookedPage = class BookedPage {
    constructor(modalCtrlr, navCtrlr) {
        this.modalCtrlr = modalCtrlr;
        this.navCtrlr = navCtrlr;
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalCtrlr.dismiss();
        this.navCtrlr.navigateForward('bookings');
    }
};
BookedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
BookedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-booked',
        template: _booked_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_booked_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookedPage);



/***/ }),

/***/ 48525:
/*!****************************************************!*\
  !*** ./src/app/booked/booked.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#FBFBFB !important;\n}\n\n.wrapper {\n  padding: 20px 20px 40px 20px;\n}\n\n.congrats_label {\n  margin-top: 13px;\n  font-size: 24px;\n  color: #8000FF;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  text-align: center;\n}\n\n.ride_booked_label {\n  margin-top: 10px;\n  text-align: center;\n  color: #B0B0B0;\n  font-size: 20px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 70%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n.btn_box {\n  text-align: center;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tlZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxib29rZWRcXGJvb2tlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNPSiIsImZpbGUiOiJib29rZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDQwcHggMjBweDtcclxufVxyXG4uY29uZ3JhdHNfbGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yaWRlX2Jvb2tlZF9sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0IwQjBCMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmludml0ZV9idG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5idG5fYm94e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggNDBweCAyMHB4O1xufVxuXG4uY29uZ3JhdHNfbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZGVfYm9va2VkX2xhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0IwQjBCMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pbnZpdGVfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XG4gIC0tYm9yZGVyLXJhZGl1czowcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5idG5fYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */";

/***/ }),

/***/ 2167:
/*!****************************************************!*\
  !*** ./src/app/booked/booked.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: right;\">\n      <img (click)=\"closeModal()\" src=\"assets/images/icons/close_modal.svg\" alt=\"\">\n    </div>\n    <div style=\"text-align: center;\">\n      <img src=\"../../assets/images/ride_booked.svg\" alt=\"\">\n    </div>\n    <div class=\"congrats_label\">Congratulation!</div>\n    <div class=\"ride_booked_label\">Your Ride is Booked.</div>\n    <div class=\"btn_box\">\n      <ion-button class=\"invite_btn\" (click)=\"closeModal()\">\n        <span class=\"btn-text\">Okay</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_booked_booked_module_ts.js.map