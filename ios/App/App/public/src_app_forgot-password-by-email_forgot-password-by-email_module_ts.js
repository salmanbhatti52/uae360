"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forgot-password-by-email_forgot-password-by-email_module_ts"],{

/***/ 38376:
/*!*************************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordByEmailPageRoutingModule": () => (/* binding */ ForgotPasswordByEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _forgot_password_by_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-by-email.page */ 62474);




const routes = [
    {
        path: '',
        component: _forgot_password_by_email_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordByEmailPage
    }
];
let ForgotPasswordByEmailPageRoutingModule = class ForgotPasswordByEmailPageRoutingModule {
};
ForgotPasswordByEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordByEmailPageRoutingModule);



/***/ }),

/***/ 36734:
/*!*****************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordByEmailPageModule": () => (/* binding */ ForgotPasswordByEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgot_password_by_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-by-email-routing.module */ 38376);
/* harmony import */ var _forgot_password_by_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-by-email.page */ 62474);








let ForgotPasswordByEmailPageModule = class ForgotPasswordByEmailPageModule {
};
ForgotPasswordByEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_by_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordByEmailPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_forgot_password_by_email_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordByEmailPage]
    })
], ForgotPasswordByEmailPageModule);



/***/ }),

/***/ 62474:
/*!***************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordByEmailPage": () => (/* binding */ ForgotPasswordByEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_password_by_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-by-email.page.html?ngResource */ 36824);
/* harmony import */ var _forgot_password_by_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-by-email.page.scss?ngResource */ 41540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);








let ForgotPasswordByEmailPage = class ForgotPasswordByEmailPage {
    constructor(router, location, fb, api) {
        this.router = router;
        this.location = location;
        this.fb = fb;
        this.api = api;
        this.activateEmailField = false;
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    ngOnInit() {
    }
    activate() {
        this.activateEmailField = true;
    }
    gotoOtpByEmail() {
        console.log(this.angForm.value.email);
        let data = {
            email: this.angForm.value.email
        };
        this.api.sendRequest('forgotPasswordApi', data).subscribe((res) => {
            console.log(res);
            if (res.status == 'success') {
                let id = res.data.appUserId;
                this.api.presentToast('Your OTP is ' + res.data.forgotPasswrodOtp);
                this.router.navigate(['/otp-by-email'], id);
                localStorage.setItem('appUserId', id);
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
    goBack() {
        this.location.back();
    }
};
ForgotPasswordByEmailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ForgotPasswordByEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgot-password-by-email',
        template: _forgot_password_by_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_password_by_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordByEmailPage);



/***/ }),

/***/ 41540:
/*!****************************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.app_title {\n  text-align: center;\n  font-size: 35px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #8000FF;\n  margin: 0px auto;\n}\n\n.otp_image {\n  text-align: center;\n  margin-top: 12px;\n}\n\n.otp_info_label {\n  text-align: center;\n  width: 66%;\n  margin: 10.4px auto;\n  color: #B0B0B0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.inputs_label {\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: #7E7E7E;\n  margin-top: 16px;\n}\n\n.input_box {\n  margin-top: 4px;\n  border: 1px solid #EFEFEF;\n  --background: #FBFBFB;\n  --placeholder-color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  --padding-start: 15px;\n  --padding-end: 10px;\n  height: 48px;\n}\n\n.active_input_box {\n  border: 1px solid #8000FF;\n}\n\n.alert {\n  color: #d93025;\n  font-size: 12px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  padding: 4px 4px 0px;\n  margin: 0px;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 25px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC1ieS1lbWFpbC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxmb3Jnb3QtcGFzc3dvcmQtYnktZW1haWxcXGZvcmdvdC1wYXNzd29yZC1ieS1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0kscUJBQUE7QUNNSjs7QURKQTtFQUNJLHVCQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUFtQixnQkFBQTtBQ1V2Qjs7QURSQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDV0o7O0FEVEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1lKOztBRFZBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNhSjs7QURYQTtFQUNJLHlCQUFBO0FDY0o7O0FEWkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNlSjs7QURiQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNnQko7O0FEZEE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ2lCSiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQtYnktZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjE1cHggMTZweCAyMHB4O1xyXG59XHJcbi5hcHBfdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLm90cF9pbWFnZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5vdHBfaW5mb19sYWJlbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2NiU7XHJcbiAgICBtYXJnaW46IDEwLjRweCBhdXRvO1xyXG4gICAgY29sb3I6ICNCMEIwQjA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5pbnB1dHNfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjN0U3RTdFO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4uaW5wdXRfYm94e1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG4uYWN0aXZlX2lucHV0X2JveHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDAwRkY7XHJcbn1cclxuLmFsZXJ0e1xyXG4gICAgY29sb3I6ICNkOTMwMjU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogNHB4IDRweCAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ubG9naW5fYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG5fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMTVweCAxNnB4IDIwcHg7XG59XG5cbi5hcHBfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM4MDAwRkY7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5vdHBfaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5vdHBfaW5mb19sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDY2JTtcbiAgbWFyZ2luOiAxMC40cHggYXV0bztcbiAgY29sb3I6ICNCMEIwQjA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5wdXRzX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjN0U3RTdFO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uaW5wdXRfYm94IHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5hY3RpdmVfaW5wdXRfYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwMDBGRjtcbn1cblxuLmFsZXJ0IHtcbiAgY29sb3I6ICNkOTMwMjU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA0cHggNHB4IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5sb2dpbl9idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI1cHggYXV0byAwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 36824:
/*!****************************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Forgot Password</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n\n    <div class=\"app_title\">360UAE</div>\n\n    <div class=\"otp_image\" >\n      <img src=\"assets/images/otp_by_email.svg\" alt=\"\">\n    </div>\n\n    <div class=\"otp_info_label\">Enter your email and we'll send you a 4 digit code.</div>\n    \n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"inputs_label\">Email</div>\n      <ion-input formControlName=\"email\"  class=\"input_box\" (ionInput)=\"activate()\" [class.active_input_box]=\"activateEmailField==true\" placeholder=\"rose.matthews@gmail.com\" type=\"email\"></ion-input>\n      \n      <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\">\n        <div *ngIf=\"angForm.controls['email'].errors.required\" class=\"alert\">\n          Email is required\n        </div>\n        <div *ngIf=\"angForm.controls['email'].errors.pattern\" class=\"alert\">\n          Email is invalid\n        </div>\n      </div>\n\n      <ion-button type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"login_button\" (click)=\"gotoOtpByEmail()\">\n        <span class=\"btn_text\">Reset</span>\n      </ion-button>\n    </form>\n    \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_forgot-password-by-email_forgot-password-by-email_module_ts.js.map