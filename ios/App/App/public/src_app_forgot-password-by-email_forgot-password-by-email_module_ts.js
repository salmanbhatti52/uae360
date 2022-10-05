"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forgot-password-by-email_forgot-password-by-email_module_ts"],{

/***/ 8376:
/*!*************************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordByEmailPageRoutingModule": () => (/* binding */ ForgotPasswordByEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forgot_password_by_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-by-email.page */ 2474);




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

/***/ 6734:
/*!*****************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordByEmailPageModule": () => (/* binding */ ForgotPasswordByEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_password_by_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-by-email-routing.module */ 8376);
/* harmony import */ var _forgot_password_by_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-by-email.page */ 2474);








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

/***/ 2474:
/*!***************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordByEmailPage": () => (/* binding */ ForgotPasswordByEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_password_by_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-by-email.page.html?ngResource */ 6824);
/* harmony import */ var _forgot_password_by_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-by-email.page.scss?ngResource */ 1540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
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

/***/ 1540:
/*!****************************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.app_title {\n  text-align: center;\n  font-size: 35px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #8000FF;\n  margin: 0px auto;\n}\n\n.otp_info_label {\n  text-align: center;\n  width: 66%;\n  margin: 10.4px auto;\n  color: #B0B0B0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.inputs_label {\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: #7E7E7E;\n  margin-top: 16px;\n}\n\n.input_box {\n  margin-top: 4px;\n  border: 1px solid #EFEFEF;\n  --background: #FBFBFB;\n  --placeholder-color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  --padding-start: 15px;\n  --padding-end: 10px;\n  height: 48px;\n}\n\n.active_input_box {\n  border: 1px solid #8000FF;\n}\n\n.alert {\n  color: #d93025;\n  font-size: 12px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  padding: 4px 4px 0px;\n  margin: 0px;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 25px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC1ieS1lbWFpbC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxmb3Jnb3QtcGFzc3dvcmQtYnktZW1haWxcXGZvcmdvdC1wYXNzd29yZC1ieS1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0kscUJBQUE7QUNNSjs7QURKQTtFQUNJLHVCQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDV0o7O0FEVEE7RUFDSSx5QkFBQTtBQ1lKOztBRFZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDYUo7O0FEWEE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDY0o7O0FEWkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ2VKIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC1ieS1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MTVweCAxNnB4IDIwcHg7XHJcbn1cclxuLmFwcF90aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4ub3RwX2luZm9fbGFiZWx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjYlO1xyXG4gICAgbWFyZ2luOiAxMC40cHggYXV0bztcclxuICAgIGNvbG9yOiAjQjBCMEIwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaW5wdXRzX2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzdFN0U3RTtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLmlucHV0X2JveHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRkVGRUY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLmFjdGl2ZV9pbnB1dF9ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODAwMEZGO1xyXG59XHJcbi5hbGVydHtcclxuICAgIGNvbG9yOiAjZDkzMDI1O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDRweCA0cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmxvZ2luX2J1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0byAwcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTZweCAyMHB4O1xufVxuXG4uYXBwX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4ub3RwX2luZm9fbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2NiU7XG4gIG1hcmdpbjogMTAuNHB4IGF1dG87XG4gIGNvbG9yOiAjQjBCMEIwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmlucHV0c19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzdFN0U3RTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmlucHV0X2JveCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYWN0aXZlX2lucHV0X2JveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDAwRkY7XG59XG5cbi5hbGVydCB7XG4gIGNvbG9yOiAjZDkzMDI1O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogNHB4IDRweCAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubG9naW5fYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bl90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 6824:
/*!****************************************************************************************!*\
  !*** ./src/app/forgot-password-by-email/forgot-password-by-email.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Forgot Password</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n\n    <div class=\"app_title\">360UAE</div>\n\n    <div style=\"text-align: center;margin-top: 12px;\">\n      <img src=\"assets/images/otp_by_email.svg\" alt=\"\">\n    </div>\n\n    <div class=\"otp_info_label\">Enter your email and we'll send you a 4 digit code.</div>\n    \n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"inputs_label\">Email</div>\n      <ion-input formControlName=\"email\"  class=\"input_box\" (ionInput)=\"activate()\" [class.active_input_box]=\"activateEmailField==true\" placeholder=\"rose.matthews@gmail.com\" type=\"email\"></ion-input>\n      \n      <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\">\n        <div *ngIf=\"angForm.controls['email'].errors.required\" class=\"alert\">\n          Email is required\n        </div>\n        <div *ngIf=\"angForm.controls['email'].errors.pattern\" class=\"alert\">\n          Email is invalid\n        </div>\n      </div>\n\n      <ion-button type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"login_button\" (click)=\"gotoOtpByEmail()\">\n        <span class=\"btn_text\">Reset</span>\n      </ion-button>\n    </form>\n    \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_forgot-password-by-email_forgot-password-by-email_module_ts.js.map