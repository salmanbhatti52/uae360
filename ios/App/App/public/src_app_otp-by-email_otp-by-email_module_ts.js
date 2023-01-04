"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_otp-by-email_otp-by-email_module_ts"],{

/***/ 3424:
/*!*************************************************************!*\
  !*** ./src/app/otp-by-email/otp-by-email-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpByEmailPageRoutingModule": () => (/* binding */ OtpByEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _otp_by_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-by-email.page */ 82403);




const routes = [
    {
        path: '',
        component: _otp_by_email_page__WEBPACK_IMPORTED_MODULE_0__.OtpByEmailPage
    }
];
let OtpByEmailPageRoutingModule = class OtpByEmailPageRoutingModule {
};
OtpByEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpByEmailPageRoutingModule);



/***/ }),

/***/ 17560:
/*!*****************************************************!*\
  !*** ./src/app/otp-by-email/otp-by-email.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpByEmailPageModule": () => (/* binding */ OtpByEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _otp_by_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-by-email-routing.module */ 3424);
/* harmony import */ var _otp_by_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-by-email.page */ 82403);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 2981);









let OtpByEmailPageModule = class OtpByEmailPageModule {
};
OtpByEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otp_by_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpByEmailPageRoutingModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_otp_by_email_page__WEBPACK_IMPORTED_MODULE_1__.OtpByEmailPage]
    })
], OtpByEmailPageModule);



/***/ }),

/***/ 82403:
/*!***************************************************!*\
  !*** ./src/app/otp-by-email/otp-by-email.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpByEmailPage": () => (/* binding */ OtpByEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _otp_by_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-by-email.page.html?ngResource */ 4109);
/* harmony import */ var _otp_by_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-by-email.page.scss?ngResource */ 22402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);







let OtpByEmailPage = class OtpByEmailPage {
    constructor(location, router, api) {
        this.location = location;
        this.router = router;
        this.api = api;
    }
    ngOnInit() {
        this.appUserId = localStorage.getItem('appUserId');
        console.log(this.appUserId);
    }
    onOtpChange(otp) {
        console.log(otp);
        this.otpValue = otp;
    }
    goBack() {
        this.location.back();
    }
    gotoSignIn() {
        console.log(this.otpValue);
        let data = {
            appUserId: this.appUserId,
            forgotPasswrodOtp: this.otpValue
        };
        this.api.sendRequest('verifyForgetPasswordOtp', data).subscribe((res) => {
            console.log(res);
            if (res.status == 'success') {
                this.api.presentToast('Success!');
                this.router.navigate(['/set-new-password']);
            }
            else if (res.status == 'error') {
                this.api.presentToast(res.message);
            }
            else {
            }
        }, (err) => {
            console.log(err);
        });
    }
};
OtpByEmailPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
OtpByEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-otp-by-email',
        template: _otp_by_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otp_by_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpByEmailPage);



/***/ }),

/***/ 22402:
/*!****************************************************************!*\
  !*** ./src/app/otp-by-email/otp-by-email.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.app_title {\n  text-align: center;\n  font-size: 35px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #8000FF;\n  margin: 0px auto;\n}\n\n.otp_info_label {\n  text-align: center;\n  width: 80%;\n  margin: 30px auto;\n  color: #B0B0B0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.otp_div {\n  text-align: center;\n  margin-top: 11px;\n  padding-left: 16px;\n}\n\n.timer_box {\n  background: rgba(255, 0, 0, 0.05);\n  width: 240px;\n  height: 48px;\n  padding: 10px 27px;\n  display: flex;\n  justify-content: center;\n  margin: 21px auto 0px;\n}\n\n.timer_icon {\n  margin-right: 11.8px;\n}\n\n.position_content {\n  display: flex;\n  align-items: center;\n}\n\n.timer_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #FF0000;\n}\n\n.resend_otp_link {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  color: #8000FF;\n  text-align: center;\n  margin-top: 16px;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 25px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC1ieS1lbWFpbC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxvdHAtYnktZW1haWxcXG90cC1ieS1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0kscUJBQUE7QUNNSjs7QURKQTtFQUNJLHVCQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFBb0IsZ0JBQUE7RUFBaUIsa0JBQUE7QUNZekM7O0FEVkE7RUFDSSxpQ0FBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ1lKOztBRFZBO0VBQ0ksb0JBQUE7QUNhSjs7QURYQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2NKOztBRFpBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDZUo7O0FEYkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ2lCSjs7QURmQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDa0JKIiwiZmlsZSI6Im90cC1ieS1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MTVweCAxNnB4IDIwcHg7XHJcbn1cclxuLmFwcF90aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4ub3RwX2luZm9fbGFiZWx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBjb2xvcjogI0IwQjBCMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm90cF9kaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDExcHg7cGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcbi50aW1lcl9ib3h7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4wNSk7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAvLyB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyN3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMXB4IGF1dG8gMHB4O1xyXG59XHJcbi50aW1lcl9pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OjExLjhweDtcclxufVxyXG4ucG9zaXRpb25fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50aW1lcl90ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG59XHJcbi5yZXNlbmRfb3RwX2xpbmt7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbi5sb2dpbl9idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bl90ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDE2cHggMjBweDtcbn1cblxuLmFwcF90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzgwMDBGRjtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLm90cF9pbmZvX2xhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgY29sb3I6ICNCMEIwQjA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ub3RwX2RpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4udGltZXJfYm94IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMDUpO1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMTBweCAyN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMXB4IGF1dG8gMHB4O1xufVxuXG4udGltZXJfaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTEuOHB4O1xufVxuXG4ucG9zaXRpb25fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aW1lcl90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkYwMDAwO1xufVxuXG4ucmVzZW5kX290cF9saW5rIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5sb2dpbl9idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI1cHggYXV0byAwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 4109:
/*!****************************************************************!*\
  !*** ./src/app/otp-by-email/otp-by-email.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Forgot Password</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n\n    <div class=\"app_title\">360UAE</div>\n\n    <div class=\"otp_info_label\">Enter the 4 digit code that you received on your registered email address.</div>\n\n    <div class=\"otp_div\" >\n      <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"   [config]=\"{length:4,allowNumbersOnly:true,placeholder:'0'}\"></ng-otp-input>\n    </div>\n    \n    <div class=\"timer_box\">\n      <div class=\"position_content\">\n        <img class=\"timer_icon\" src=\"assets/images/icons/timer.svg\" alt=\"\">\n        <span class=\"timer_text\">Expire in 02:00</span>\n      </div>\n      \n    </div>\n\n    <div class=\"resend_otp_link\">Resend OPT(4)</div>\n\n    <ion-button class=\"login_button\" (click)=\"gotoSignIn()\">\n      <span class=\"btn_text\">Next</span>\n    </ion-button>\n\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_otp-by-email_otp-by-email_module_ts.js.map