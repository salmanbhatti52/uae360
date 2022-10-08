"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sign-in_sign-in_module_ts"],{

/***/ 3088:
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageRoutingModule": () => (/* binding */ SignInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.page */ 7284);




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_0__.SignInPage
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ 5391:
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageModule": () => (/* binding */ SignInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-routing.module */ 3088);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page */ 7284);








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignInPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_1__.SignInPage]
    })
], SignInPageModule);



/***/ }),

/***/ 7284:
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPage": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sign_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.page.html?ngResource */ 521);
/* harmony import */ var _sign_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page.scss?ngResource */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-user.service */ 7852);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 5041);











let SignInPage = class SignInPage {
    constructor(location, router, menuCtrl, fb, api, checkUser, appComponent) {
        this.location = location;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.fb = fb;
        this.api = api;
        this.checkUser = checkUser;
        this.appComponent = appComponent;
        this.showPassword = false;
        this.getType = 'password';
        this.activateEmailField = false;
        this.activatePasswordField = false;
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true);
    }
    // ionViewWillEnter(){
    //   this.menuCtrl.close();
    // }
    goBack() {
        this.location.back();
    }
    toggleGetType() {
        if (this.getType == 'password') {
            this.getType = 'text';
            this.showPassword = true;
        }
        else {
            this.getType = 'password';
            this.showPassword = false;
        }
    }
    activate(val) {
        if (val == 'email') {
            this.activateEmailField = true;
            this.activatePasswordField = false;
        }
        else if (val == 'pwd') {
            this.activateEmailField = false;
            this.activatePasswordField = true;
        }
        else {
        }
    }
    gotoHome() {
        this.activateEmailField = false;
        this.activatePasswordField = false;
        console.log(this.angForm.value.email);
        console.log(this.angForm.value.password);
        let data = {
            email: this.angForm.value.email,
            password: this.angForm.value.password,
        };
        this.api.sendRequest('loginHereNow', data).subscribe((res) => {
            console.log(res);
            if (res.status == 'success') {
                localStorage.setItem('appUserId', res.data.appUserId);
                console.log('appUserId', res.data.appUserId);
                this.checkUser.appUserId = res.data.appUserId;
                this.api.presentToast('Success! Welcome');
                // ===update appPages===========
                console.log(this.checkUser.appUserId);
                this.checkUser.checkUser();
                localStorage.setItem("appPagesAfterLogin", JSON.stringify(this.checkUser.appPages));
                console.log(localStorage.getItem('appPagesAfterLogin'));
                this.appComponent.appPages = JSON.parse(localStorage.getItem('appPagesAfterLogin'));
                // =======done============
                this.router.navigate(['/home-cars-after-login']);
            }
            else if (res.status == 'error') {
                this.api.presentToast(res.message);
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    gotoSignUp() {
        this.router.navigate(['/sign-up']);
    }
    gotoForgotPasswordByEmail() {
        this.router.navigate(['/forgot-password-by-email']);
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_3__.CheckUserService },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent }
];
SignInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-sign-in',
        template: _sign_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sign_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignInPage);



/***/ }),

/***/ 8345:
/*!******************************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  padding: 30px 16px 15px;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.app_title {\n  font-size: 35px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #8000FF;\n}\n\n.welcome_msg {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n}\n\n.login_label {\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n  color: #B0B0B0;\n}\n\n.inputs_label {\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: #7E7E7E;\n}\n\n.input_box {\n  margin-top: 3.8px;\n  border: 1px solid #EFEFEF;\n  --background: #FBFBFB;\n  --placeholder-color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  --padding-start: 15px;\n  --padding-end: 10px;\n  height: 48px;\n}\n\n.password_box {\n  display: flex;\n  align-items: center;\n  margin-top: 3.8px;\n  border: 1px solid #EFEFEF;\n  padding: 0px 16px 0px 8px;\n  height: 48px;\n}\n\n.password_input {\n  --background: #FBFBFB;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-color: #8D8D8D;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  --padding-start: 8px;\n}\n\n.active_input_box {\n  border: 1px solid #8000FF;\n}\n\n.alert {\n  color: #d93025;\n  font-size: 12px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  padding: 4px 4px 0px;\n  margin: 0px;\n}\n\n.remerber_forgot_labels {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 16px;\n}\n\n.checkbox {\n  margin-right: 5px;\n  --border-color: #8000FF;\n  height: 16px;\n  width: 16px;\n  --background: #FBFBFB;\n}\n\n.rem_fg_lablel {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: #7E7E7E;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 45px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.or_choice {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  margin: 23px auto 0px;\n}\n\nhr {\n  border-bottom: 1px solid #0F172A !important;\n  border-top: 0px !important;\n  margin: auto !important;\n  color: #0F172A !important;\n  opacity: 100% !important;\n}\n\n.or_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #0F172A;\n  text-transform: uppercase;\n}\n\n.fb_gmail_box {\n  display: flex;\n  width: 75%;\n  margin: 0px auto;\n  justify-content: space-between;\n  margin-top: 20px;\n  align-items: center;\n}\n\n.fb_gmail_btns {\n  --border-radius: 0px;\n  height: 48px;\n  margin-top: 0px;\n  width: 45%;\n  --box-shadow:none;\n}\n\n.last_div {\n  margin-top: 20px;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #0F172A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcc2lnbi1pblxcc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtBQ0lKOztBREZBO0VBQ0kscUJBQUE7QUNLSjs7QURIQTtFQUNJLHVCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNVSjs7QURSQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0kscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNhSjs7QURYQTtFQUNJLHlCQUFBO0FDY0o7O0FEWkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNlSjs7QURiQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNnQko7O0FEZEE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ2lCSjs7QURmQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURoQkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDb0JKOztBRGxCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ3FCSjs7QURuQkE7RUFDSSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDc0JKOztBRHBCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDdUJKOztBRHJCQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDMEJKIiwiZmlsZSI6InNpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MTVweCAxNnB4IDIwcHg7XHJcbn1cclxuLmFwcF90aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG59XHJcbi53ZWxjb21lX21zZ3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG59XHJcbi5sb2dpbl9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNCMEIwQjA7XHJcbn1cclxuLmlucHV0c19sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM3RTdFN0U7XHJcbn1cclxuLmlucHV0X2JveHtcclxuICAgIG1hcmdpbi10b3A6IDMuOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG4ucGFzc3dvcmRfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzLjhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRkVGRUY7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweCAwcHggOHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcbi5wYXNzd29yZF9pbnB1dHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbn1cclxuLmFjdGl2ZV9pbnB1dF9ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODAwMEZGO1xyXG59XHJcbi5hbGVydHtcclxuICAgIGNvbG9yOiAjZDkzMDI1O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDRweCA0cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnJlbWVyYmVyX2ZvcmdvdF9sYWJlbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLmNoZWNrYm94e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogIzgwMDBGRjtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi5yZW1fZmdfbGFibGVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjN0U3RTdFO1xyXG59XHJcbi5sb2dpbl9idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA0NXB4IGF1dG8gMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bl90ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuLm9yX2Nob2ljZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMjNweCBhdXRvIDBweDtcclxufVxyXG5ocntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMEYxNzJBICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwRjE3MkEgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ub3JfbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5mYl9nbWFpbF9ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmJfZ21haWxfYnRuc3tcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5sYXN0X2RpdntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbn1cclxuXHJcblxyXG4iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDE2cHggMjBweDtcbn1cblxuLmFwcF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM4MDAwRkY7XG59XG5cbi53ZWxjb21lX21zZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG59XG5cbi5sb2dpbl9sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0IwQjBCMDtcbn1cblxuLmlucHV0c19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzdFN0U3RTtcbn1cblxuLmlucHV0X2JveCB7XG4gIG1hcmdpbi10b3A6IDMuOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5wYXNzd29yZF9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzLjhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcbiAgcGFkZGluZzogMHB4IDE2cHggMHB4IDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4ucGFzc3dvcmRfaW5wdXQge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzhEOEQ4RDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG59XG5cbi5hY3RpdmVfaW5wdXRfYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwMDBGRjtcbn1cblxuLmFsZXJ0IHtcbiAgY29sb3I6ICNkOTMwMjU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA0cHggNHB4IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5yZW1lcmJlcl9mb3Jnb3RfbGFiZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY2hlY2tib3gge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgLS1ib3JkZXItY29sb3I6ICM4MDAwRkY7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLnJlbV9mZ19sYWJsZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM3RTdFN0U7XG59XG5cbi5sb2dpbl9idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDQ1cHggYXV0byAwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG4ub3JfY2hvaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAyM3B4IGF1dG8gMHB4O1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMEYxNzJBICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgY29sb3I6ICMwRjE3MkEgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ub3JfbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mYl9nbWFpbF9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mYl9nbWFpbF9idG5zIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB3aWR0aDogNDUlO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmxhc3RfZGl2IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG59Il19 */";

/***/ }),

/***/ 521:
/*!******************************************************!*\
  !*** ./src/app/sign-in/sign-in.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: center;\">\n      <div class=\"app_title\">360UAE</div>\n      <div class=\"welcome_msg\" style=\"margin-top: 16px;\">Hey there,</div>\n      <div class=\"welcome_msg\">welcome back</div>\n      <div class=\"login_label\" style=\"margin-top: 13px;\">Please login your account.</div>\n    </div>\n    <form [formGroup]=\"angForm\" novalidate>\n      <div style=\"margin-top: 28px;\">\n        <div class=\"inputs_label\">Email</div>\n        <ion-input formControlName=\"email\" class=\"input_box\" (ionInput)=\"activate('email')\" [class.active_input_box]=\"activateEmailField==true\" placeholder=\"rose.matthews@gmail.com\" type=\"email\"></ion-input>\n        \n        <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\">\n          <div *ngIf=\"angForm.controls['email'].errors.required\" class=\"alert\">\n            Email is required\n          </div>\n          <div *ngIf=\"angForm.controls['email'].errors.pattern\" class=\"alert\">\n            Email is invalid\n          </div>\n        </div>\n  \n        <div class=\"inputs_label\" style=\"margin-top: 22px;\">Password</div>\n        <div class=\"password_box\" [class.active_input_box]=\"activatePasswordField==true\">\n          <ion-input formControlName=\"password\" class=\"password_input\" (ionInput)=\"activate('pwd')\"  placeholder=\".......\" type=\"{{getType}}\"></ion-input>\n          <ion-icon style=\"color: #B0B0B0;\" name=\"eye\" *ngIf=\"showPassword==false\" (click)=\"toggleGetType()\"></ion-icon>\n          <ion-icon style=\"color: #B0B0B0;\" name=\"eye-off\" *ngIf=\"showPassword==true\" (click)=\"toggleGetType()\"></ion-icon>\n        </div>\n        <div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\">\n          <div *ngIf=\"angForm.controls['password'].errors.required\" class=\"alert\">\n            Password is required\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"remerber_forgot_labels\" >\n        <div style=\"display: flex;\">\n          <ion-checkbox slot=\"start\" class=\"checkbox\"></ion-checkbox>\n          <span class=\"rem_fg_lablel\" >Remember my preference</span>\n        </div>\n        <div class=\"rem_fg_lablel\" (click)=\"gotoForgotPasswordByEmail()\">Forgot your password?</div>\n      </div>\n      \n      <ion-button type=\"submit\" [disabled]=\"angForm.invalid || angForm.pristine\" class=\"login_button\" (click)=\"gotoHome()\">\n        <span class=\"btn_text\">Login</span>\n      </ion-button>\n    </form>\n    \n\n    <div class=\"or_choice\">\n      <hr style=\"width: 35%;\">\n      <span class=\"or_label\">or</span>\n      <hr style=\"width: 35%;\">\n    </div>\n    \n    <div class=\"fb_gmail_box\">\n      <ion-button style=\"--background:#3245B8;\" class=\"fb_gmail_btns\"><img (click)=\"goBack()\" src=\"assets/images/icons/facebook.svg\" alt=\"\"></ion-button>\n      <ion-button style=\"--background:#F04336;\" class=\"fb_gmail_btns\"><img (click)=\"goBack()\" src=\"assets/images/icons/google.svg\" alt=\"\"></ion-button>\n    </div>\n\n    <div class=\"last_div\"><span style=\"font-weight: 400;\">Don't have an account? </span> <span (click)=\"gotoSignUp()\" style=\"font-weight: 700;text-decoration: underline;\">Sign up</span> </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-in_sign-in_module_ts.js.map