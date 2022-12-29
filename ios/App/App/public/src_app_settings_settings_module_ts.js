"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 75375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _delete_account_popup_delete_account_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete-account-popup/delete-account-popup.page */ 43178);








let SettingsPage = class SettingsPage {
  constructor(navCtrlr, modalCtrlr) {
    this.navCtrlr = navCtrlr;
    this.modalCtrlr = modalCtrlr;
    this.english_language = true;
    this.arabic_language = false;
    this.toggleVal = true;
  }

  ngOnInit() {}

  toggleNotifications() {
    if (this.toggleVal == true) {
      this.toggleVal = false;
    } else {
      this.toggleVal = true;
    }
  }

  changeLanguage() {
    if (this.english_language == true) {
      this.english_language = false;
      this.arabic_language = true;
    } else if (this.arabic_language == true) {
      this.arabic_language = false;
      this.english_language = true;
    } else {}
  }

  goForChangePassword() {
    this.navCtrlr.navigateForward('change-password');
  }

  goForPaymentDetails() {
    this.navCtrlr.navigateForward('saved-payment-methods');
  }

  editProfile() {
    this.navCtrlr.navigateForward('edit-profile');
  }

  deleteAccountModal() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrlr.create({
        component: _delete_account_popup_delete_account_popup_page__WEBPACK_IMPORTED_MODULE_3__.DeleteAccountPopupPage,
        showBackdrop: true,
        cssClass: 'delete_account'
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role == 'delete_account') {
        const response = data;
        console.log(response);
      }
    })();
  }

};

SettingsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-settings',
  template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SettingsPage);


/***/ }),

/***/ 2282:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.noto_sans_arabic {\n  font-family: \"Noto Sans Arabic\", sans-serif;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.header {\n  position: relative;\n  padding: 30px 16px 15px;\n  display: flex;\n  align-items: center;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  position: absolute;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.wrapper {\n  padding: 20px 16px 20px;\n}\n\n.settings_item {\n  margin-top: 9px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 11px 12px 11px 12px;\n  background: #FBFBFB;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.ion_toogle {\n  --background: #D4DCE1;\n  --background-checked: #8000FF;\n  --border-radius: 18.5px;\n  --handle-background-checked: white;\n  --handle-box-shadow: 0px 0px 10px rgb(0 0 0 / 14%);\n  --handle-height: 15px;\n  --handle-width: 15px;\n  --handle-spacing: 2px;\n  height: 19px;\n  width: 31px;\n  padding: 0px;\n}\n\n.heading {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n}\n\n.heading_description {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: #272727;\n}\n\n.language_label {\n  margin-top: 28px;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #B1A8B9;\n}\n\n.language_div {\n  text-align: center;\n  width: 175px;\n  display: flex;\n  justify-content: space-between;\n  margin: 8px auto;\n}\n\n.language_btn {\n  width: 80px;\n  height: 32px;\n  --background: #FFFFFF;\n  --color: #D4DCE1;\n  --border-style: solid;\n  --border-color: #D4DCE1;\n  --border-width: 1px;\n  --border-radius: 10px;\n  --box-shadow: none;\n}\n\n.english {\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.arabic {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.active_language {\n  --color: black;\n  --border-style: solid;\n  --border-color: #8000FF;\n  --border-width: 1.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXHNldHRpbmdzXFxzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLDJDQUFBO0FDTUo7O0FESkE7RUFDSSxxQkFBQTtBQ09KOztBRExBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRE5BO0VBQ0MsdUJBQUE7RUFDRyxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLHVCQUFBO0FDV0o7O0FEVEE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ1lKOztBRFZBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrREFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2FKOztBRFhBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNlSjs7QURiQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNnQko7O0FEZEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ2lCSjs7QURmQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNrQko7O0FEaEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ29CSjs7QURsQkE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDcUJKIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVyYmFuaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9wcGluc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5vdG9fc2Fuc19hcmFiaWN7XHJcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBBcmFiaWMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoyMHB4IDE2cHggMjBweDtcclxufVxyXG4uc2V0dGluZ3NfaXRlbXtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTFweCAxMnB4IDExcHggMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcbi5pb25fdG9vZ2xle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRDREQ0UxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4MDAwRkY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE4LjVweDtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogd2hpdGU7XHJcbiAgICAtLWhhbmRsZS1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiKDAgMCAwIC8gMTQlKTtcclxuICAgIC0taGFuZGxlLWhlaWdodDogMTVweDtcclxuICAgIC0taGFuZGxlLXdpZHRoOiAxNXB4O1xyXG4gICAgLS1oYW5kbGUtc3BhY2luZzogMnB4O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgd2lkdGg6IDMxcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uaGVhZGluZ19kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzI3MjcyNztcclxufVxyXG4ubGFuZ3VhZ2VfbGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjQjFBOEI5O1xyXG59XHJcbi5sYW5ndWFnZV9kaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiA4cHggYXV0bztcclxufVxyXG4ubGFuZ3VhZ2VfYnRue1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAtLWNvbG9yOiAjRDREQ0UxO1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNENERDRTE7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5lbmdsaXNoe1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYXJhYmlje1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uYWN0aXZlX2xhbmd1YWdle1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogIzgwMDBGRjtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLnVyYmFuaXN0IHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBvcHBpbnMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5ub3RvX3NhbnNfYXJhYmljIHtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEFyYWJpY1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnVpY29uIHtcbiAgY29sb3I6IHZhcigtLW1lbnUtaWNvbik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4O1xufVxuXG4uc2V0dGluZ3NfaXRlbSB7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMXB4IDEycHggMTFweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uaW9uX3Rvb2dsZSB7XG4gIC0tYmFja2dyb3VuZDogI0Q0RENFMTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4MDAwRkY7XG4gIC0tYm9yZGVyLXJhZGl1czogMTguNXB4O1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHdoaXRlO1xuICAtLWhhbmRsZS1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiKDAgMCAwIC8gMTQlKTtcbiAgLS1oYW5kbGUtaGVpZ2h0OiAxNXB4O1xuICAtLWhhbmRsZS13aWR0aDogMTVweDtcbiAgLS1oYW5kbGUtc3BhY2luZzogMnB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIHdpZHRoOiAzMXB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkaW5nX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjcyNzI3O1xufVxuXG4ubGFuZ3VhZ2VfbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0IxQThCOTtcbn1cblxuLmxhbmd1YWdlX2RpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogOHB4IGF1dG87XG59XG5cbi5sYW5ndWFnZV9idG4ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIC0tY29sb3I6ICNENERDRTE7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICNENERDRTE7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uZW5nbGlzaCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFyYWJpYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmFjdGl2ZV9sYW5ndWFnZSB7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjODAwMEZGO1xuICAtLWJvcmRlci13aWR0aDogMS41cHg7XG59Il19 */";

/***/ }),

/***/ 75375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Settings</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"settings_item\" (click)=\"toggleNotifications()\">\n        <div>\n          <div class=\"heading\">Notifications</div>\n          <div class=\"heading_description\">Enable your notifications</div>\n        </div>\n        <div>\n          <ion-toggle class=\"ion_toogle\" checked=\"{{toggleVal}}\"></ion-toggle>\n        </div>\n    </div>\n\n    <div class=\"settings_item\" (click)=\"goForPaymentDetails()\">\n        <div>\n          <div class=\"heading\">Payment Details</div>\n          <div class=\"heading_description\">Add your cards for quick payments</div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/next.svg\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"settings_item\" (click)=\"goForChangePassword()\">\n        <div>\n          <div class=\"heading\">Change Password</div>\n          <div class=\"heading_description\">Update your password</div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/next.svg\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"settings_item\" (click)=\"editProfile()\">\n        <div>\n          <div class=\"heading\">Profile</div>\n          <div class=\"heading_description\">Update your profile</div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/next.svg\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"settings_item\" (click)=\"deleteAccountModal()\">\n        <div>\n          <div class=\"heading\" style=\"color: #FF0000;\">Delete Account</div>\n          <div class=\"heading_description\">Delete your account</div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/next.svg\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"language_label\">Choose your language</div>\n    <div class=\"language_div\" >\n      <ion-button class=\"language_btn urbanist english\" [class.active_language]=\"english_language==true\" (click)=\"changeLanguage()\" >\n        <!-- <img style=\"margin-right: 6.5px;\" src=\"assets/images/icons/language_icon.svg\" alt=\"\" *ngIf=\"english_language==true\"> -->\n        <!-- <img style=\"margin-right: 6.5px;\" src=\"assets/images/icons/language_icon_dull.svg\" alt=\"\" *ngIf=\"english_language==false\"> -->\n        <span>English</span>\n      </ion-button>\n      <ion-button class=\"language_btn noto_sans_arabic arabic\" [class.active_language]=\"arabic_language==true\" (click)=\"changeLanguage()\">\n        <!-- <img style=\"margin-right: 6.5px;\" src=\"assets/images/icons/language_icon.svg\" alt=\"\" *ngIf=\"arabic_language==true\"> -->\n        <!-- <img style=\"margin-right: 6.5px;\" src=\"assets/images/icons/language_icon_dull.svg\" alt=\"\" *ngIf=\"arabic_language==false\"> -->\n        <span>العربی</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map