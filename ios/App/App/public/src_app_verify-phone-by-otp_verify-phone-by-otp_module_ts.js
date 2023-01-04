"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_verify-phone-by-otp_verify-phone-by-otp_module_ts"],{

/***/ 78615:
/*!***************************************************************************!*\
  !*** ./src/app/verify-phone-by-otp/verify-phone-by-otp-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPhoneByOtpPageRoutingModule": () => (/* binding */ VerifyPhoneByOtpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _verify_phone_by_otp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-phone-by-otp.page */ 43413);




const routes = [
    {
        path: '',
        component: _verify_phone_by_otp_page__WEBPACK_IMPORTED_MODULE_0__.VerifyPhoneByOtpPage
    }
];
let VerifyPhoneByOtpPageRoutingModule = class VerifyPhoneByOtpPageRoutingModule {
};
VerifyPhoneByOtpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyPhoneByOtpPageRoutingModule);



/***/ }),

/***/ 22876:
/*!*******************************************************************!*\
  !*** ./src/app/verify-phone-by-otp/verify-phone-by-otp.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPhoneByOtpPageModule": () => (/* binding */ VerifyPhoneByOtpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _verify_phone_by_otp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-phone-by-otp-routing.module */ 78615);
/* harmony import */ var _verify_phone_by_otp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-phone-by-otp.page */ 43413);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 2981);








let VerifyPhoneByOtpPageModule = class VerifyPhoneByOtpPageModule {
};
VerifyPhoneByOtpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_phone_by_otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyPhoneByOtpPageRoutingModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule
        ],
        declarations: [_verify_phone_by_otp_page__WEBPACK_IMPORTED_MODULE_1__.VerifyPhoneByOtpPage]
    })
], VerifyPhoneByOtpPageModule);



/***/ }),

/***/ 43413:
/*!*****************************************************************!*\
  !*** ./src/app/verify-phone-by-otp/verify-phone-by-otp.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPhoneByOtpPage": () => (/* binding */ VerifyPhoneByOtpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verify_phone_by_otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-phone-by-otp.page.html?ngResource */ 45907);
/* harmony import */ var _verify_phone_by_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-phone-by-otp.page.scss?ngResource */ 10996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






let VerifyPhoneByOtpPage = class VerifyPhoneByOtpPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.otp_active = false;
    }
    ngOnInit() {
    }
    onOtpChange(otp) {
        this.otp_active = true;
        this.otp = otp;
        console.log(this.otp);
    }
    goBack() {
        this.location.back();
    }
    gotoTermsAndServices() {
        this.router.navigate(['/terms-and-services']);
    }
};
VerifyPhoneByOtpPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
VerifyPhoneByOtpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-verify-phone-by-otp',
        template: _verify_phone_by_otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verify_phone_by_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyPhoneByOtpPage);



/***/ }),

/***/ 10996:
/*!******************************************************************************!*\
  !*** ./src/app/verify-phone-by-otp/verify-phone-by-otp.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.app_title {\n  text-align: center;\n  font-size: 35px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #8000FF;\n  margin: 0px auto;\n}\n\n.otp_image {\n  text-align: center;\n  margin-top: 12px;\n}\n\n.otp_info_label {\n  text-align: center;\n  width: 85%;\n  margin: 10.4px auto;\n  color: #B0B0B0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.otp_val_div {\n  text-align: center;\n  margin-top: 11px;\n  padding-left: 16px;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 25px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1waG9uZS1ieS1vdHAucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcdmVyaWZ5LXBob25lLWJ5LW90cFxcdmVyaWZ5LXBob25lLWJ5LW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0kscUJBQUE7QUNNSjs7QURKQTtFQUNJLHVCQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUFtQixnQkFBQTtBQ1V2Qjs7QURSQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtFQUFvQixnQkFBQTtFQUFpQixrQkFBQTtBQ2N6Qzs7QURYQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNjSjs7QURaQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDZUoiLCJmaWxlIjoidmVyaWZ5LXBob25lLWJ5LW90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MTVweCAxNnB4IDIwcHg7XHJcbn1cclxuLmFwcF90aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4ub3RwX2ltYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLm90cF9pbmZvX2xhYmVse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMTAuNHB4IGF1dG87XHJcbiAgICBjb2xvcjogI0IwQjBCMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm90cF92YWxfZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAxMXB4O3BhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG5cclxuLmxvZ2luX2J1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0byAwcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTZweCAyMHB4O1xufVxuXG4uYXBwX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4ub3RwX2ltYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ub3RwX2luZm9fbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMTAuNHB4IGF1dG87XG4gIGNvbG9yOiAjQjBCMEIwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm90cF92YWxfZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5sb2dpbl9idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI1cHggYXV0byAwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 45907:
/*!******************************************************************************!*\
  !*** ./src/app/verify-phone-by-otp/verify-phone-by-otp.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Verify Phone</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"app_title\">360UAE</div>\n    \n    <div class=\"otp_image\" >\n      <img src=\"assets/images/otp_logo.svg\" alt=\"\">\n    </div>\n    \n    <div class=\"otp_info_label\">Enter the 4 digit code that you received on your mobile number</div>\n    \n    <div class=\"otp_val_div\" >\n      <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"   [config]=\"{length:4,allowNumbersOnly:true,placeholder:'0'}\"></ng-otp-input>\n    </div>\n    \n    <ion-button class=\"login_button\" (click)=\"gotoTermsAndServices()\">\n      <span class=\"btn_text\">Next</span>\n    </ion-button>\n\n  </div>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_verify-phone-by-otp_verify-phone-by-otp_module_ts.js.map