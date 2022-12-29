"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_change-password_change-password_module_ts"],{

/***/ 22070:
/*!*******************************************************************!*\
  !*** ./src/app/change-password/change-password-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageRoutingModule": () => (/* binding */ ChangePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page */ 37517);




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPage
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ 68232:
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageModule": () => (/* binding */ ChangePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-routing.module */ 22070);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page */ 37517);








let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPage]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ 37517:
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page.html?ngResource */ 43397);
/* harmony import */ var _change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page.scss?ngResource */ 92056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);









let ChangePasswordPage = class ChangePasswordPage {
    constructor(location, navCtrlr, fb, checkUser, api) {
        this.location = location;
        this.navCtrlr = navCtrlr;
        this.fb = fb;
        this.checkUser = checkUser;
        this.api = api;
        this.showPassword = false;
        this.getType = 'password';
        this.oldPasswordField = false;
        this.newPasswordField = false;
        this.confirmPasswordField = false;
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            oldPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            newPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cnfrmNewPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    ngOnInit() {
    }
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
        if (val == 'old_pwd') {
            this.oldPasswordField = true;
            this.newPasswordField = false;
            this.confirmPasswordField = false;
        }
        else if (val == 'new_pwd') {
            this.oldPasswordField = false;
            this.newPasswordField = true;
            this.confirmPasswordField = false;
        }
        else if (val == 'confirm_new_pwd') {
            this.oldPasswordField = false;
            this.newPasswordField = false;
            this.confirmPasswordField = true;
        }
        else {
        }
    }
    updatePassword() {
        this.oldPasswordField = false;
        this.newPasswordField = false;
        this.confirmPasswordField = false;
        let data = {
            user_id: this.checkUser.appUserId,
            oldPassword: this.angForm.value.oldPwd,
            newPassword: this.angForm.value.newPwd,
            confirmPassword: this.angForm.value.cnfrmNewPwd
        };
        this.api.showLoading();
        this.api.sendRequest('appUserChangePassword', data).subscribe((res) => {
            this.api.hideLoading();
            console.log("res: ", res);
            if (res.status == 'success') {
                this.api.presentToast('Password Changed Successfully.');
                this.navCtrlr.navigateForward('settings');
            }
            else if (res.status == 'error') {
                this.api.presentToast(res.message);
            }
            else {
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("Error: ", err);
        });
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_2__.CheckUserService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-change-password',
        template: _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePasswordPage);



/***/ }),

/***/ 92056:
/*!**********************************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 70px 16px 20px;\n}\n\n.input_label {\n  color: #7E7E7E;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.password_box {\n  display: flex;\n  align-items: center;\n  margin-top: 4.5px;\n  border: 1px solid #EFEFEF;\n  padding: 0px 16px 0px 8px;\n  height: 48px;\n}\n\n.password_input {\n  --background: #FBFBFB;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-color: #8D8D8D;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  --padding-start: 8px;\n}\n\n.active_input_box {\n  border: 1px solid #8000FF;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 60px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.alert {\n  color: #d93025;\n  font-size: 12px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  padding: 4px 4px 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxxQkFBQTtBQ1FKOztBRE5BO0VBQ0ksdUJBQUE7QUNTSjs7QURQQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0kscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNZSjs7QURWQTtFQUNJLHlCQUFBO0FDYUo7O0FEWEE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDY0o7O0FEWkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ2VKOztBRGJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDZ0JKIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi51cmJhbmlzdHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBvcHBpbnN7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDcwcHggMTZweCAyMHB4O1xyXG59XHJcbi5pbnB1dF9sYWJlbCB7XHJcbiAgICBjb2xvcjogIzdFN0U3RTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnBhc3N3b3JkX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNC41cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xyXG4gICAgcGFkZGluZzogMHB4IDE2cHggMHB4IDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG4ucGFzc3dvcmRfaW5wdXR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG59XHJcbi5hY3RpdmVfaW5wdXRfYm94e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwMDBGRjtcclxufVxyXG4ubG9naW5fYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG5fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5hbGVydHtcclxuICAgIGNvbG9yOiAjZDkzMDI1O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDRweCA0cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi51cmJhbmlzdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wb3BwaW5zIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogNzBweCAxNnB4IDIwcHg7XG59XG5cbi5pbnB1dF9sYWJlbCB7XG4gIGNvbG9yOiAjN0U3RTdFO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnBhc3N3b3JkX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQuNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xuICBwYWRkaW5nOiAwcHggMTZweCAwcHggOHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5wYXNzd29yZF9pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbn1cblxuLmFjdGl2ZV9pbnB1dF9ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODAwMEZGO1xufVxuXG4ubG9naW5fYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA2MHB4IGF1dG8gMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bl90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLmFsZXJ0IHtcbiAgY29sb3I6ICNkOTMwMjU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA0cHggNHB4IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */";

/***/ }),

/***/ 43397:
/*!**********************************************************************!*\
  !*** ./src/app/change-password/change-password.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Change Password</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"input_label\" style=\"margin-top: 11.5px;\">Enter Old Password</div>\n      <div class=\"password_box\" [class.active_input_box]=\"oldPasswordField==true\">\n        <ion-input class=\"password_input\" formControlName=\"oldPwd\" (ionInput)=\"activate('old_pwd')\"  placeholder=\".......\" type=\"{{getType}}\"></ion-input>\n        <ion-icon style=\"color: #B0B0B0;\" name=\"eye\" *ngIf=\"showPassword==false\" (click)=\"toggleGetType()\"></ion-icon>\n        <ion-icon style=\"color: #B0B0B0;\" name=\"eye-off\" *ngIf=\"showPassword==true\" (click)=\"toggleGetType()\"></ion-icon>\n      </div>\n      <div *ngIf=\"angForm.controls['oldPwd'].invalid && (angForm.controls['oldPwd'].dirty || angForm.controls['oldPwd'].touched)\">\n        <div *ngIf=\"angForm.controls['oldPwd'].errors.required\" class=\"alert\">\n          Password is required\n        </div>\n      </div>\n\n      <div class=\"input_label\" style=\"margin-top: 11.5px;\">Enter New Password</div>\n      <div class=\"password_box\" [class.active_input_box]=\"newPasswordField==true\">\n        <ion-input class=\"password_input\" formControlName=\"newPwd\" (ionInput)=\"activate('new_pwd')\"  placeholder=\".......\" type=\"{{getType}}\"></ion-input>\n        <ion-icon style=\"color: #B0B0B0;\" name=\"eye\" *ngIf=\"showPassword==false\" (click)=\"toggleGetType()\"></ion-icon>\n        <ion-icon style=\"color: #B0B0B0;\" name=\"eye-off\" *ngIf=\"showPassword==true\" (click)=\"toggleGetType()\"></ion-icon>\n      </div>\n      <div *ngIf=\"angForm.controls['newPwd'].invalid && (angForm.controls['newPwd'].dirty || angForm.controls['newPwd'].touched)\">\n        <div *ngIf=\"angForm.controls['newPwd'].errors.required\" class=\"alert\">\n          Password is required\n        </div>\n      </div>\n\n      <div class=\"input_label\" style=\"margin-top: 11.5px;\">Enter Confirm Password</div>\n      <div class=\"password_box\" [class.active_input_box]=\"confirmPasswordField==true\">\n        <ion-input class=\"password_input\" formControlName=\"cnfrmNewPwd\" (ionInput)=\"activate('confirm_new_pwd')\"  placeholder=\".......\" type=\"{{getType}}\"></ion-input>\n        <ion-icon style=\"color: #B0B0B0;\" name=\"eye\" *ngIf=\"showPassword==false\" (click)=\"toggleGetType()\"></ion-icon>\n        <ion-icon style=\"color: #B0B0B0;\" name=\"eye-off\" *ngIf=\"showPassword==true\" (click)=\"toggleGetType()\"></ion-icon>\n      </div>\n      <div *ngIf=\"angForm.controls['cnfrmNewPwd'].invalid && (angForm.controls['cnfrmNewPwd'].dirty || angForm.controls['cnfrmNewPwd'].touched)\">\n        <div *ngIf=\"angForm.controls['cnfrmNewPwd'].errors.required\" class=\"alert\">\n          Password is required\n        </div>\n      </div>\n\n      <div >\n        <ion-button type=\"submit\" [disabled]=\"angForm.invalid || angForm.pristine\" class=\"login_button\" (click)=\"updatePassword()\">\n          <span class=\"btn_text\">Save</span>\n        </ion-button>\n      </div>\n\n    </form>\n    \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_change-password_change-password_module_ts.js.map