"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 1836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
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

/***/ 7075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 1836);
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
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 5375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _delete_account_popup_delete_account_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete-account-popup/delete-account-popup.page */ 3178);








let SettingsPage = class SettingsPage {
  constructor(navCtrlr, modalCtrlr) {
    this.navCtrlr = navCtrlr;
    this.modalCtrlr = modalCtrlr;
    this.english_language = true;
    this.arabic_language = false;
  }

  ngOnInit() {}

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
    this.navCtrlr.navigateRoot('change-password');
  }

  goForPaymentDetails() {
    this.navCtrlr.navigateRoot('saved-payment-methods');
  }

  editProfile() {
    this.navCtrlr.navigateRoot('edit-profile');
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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.noto_sans_arabic {\n  font-family: \"Noto Sans Arabic\", sans-serif;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.header {\n  position: relative;\n  padding: 30px 16px 15px;\n  display: flex;\n  align-items: center;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  position: absolute;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.wrapper {\n  padding: 20px 16px 20px;\n}\n\n.settings_item {\n  margin-top: 9px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 11px 12px 11px 12px;\n  background: #FBFBFB;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.ion_toogle {\n  --background-checked: #8000FF;\n  --border-radius: 18.5px;\n  --handle-background-checked: white;\n  --handle-box-shadow: 0px 0px 10px rgb(0 0 0 / 14%);\n  --handle-height: 15px;\n  --handle-width: 15px;\n  --handle-spacing: 2px;\n  height: 19px;\n  width: 31px;\n  padding: 0px;\n}\n\n.heading {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n}\n\n.heading_description {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: #272727;\n}\n\n.language_label {\n  margin-top: 28px;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #B1A8B9;\n}\n\n.language_div {\n  text-align: center;\n  width: 175px;\n  display: flex;\n  justify-content: space-between;\n  margin: 8px auto;\n}\n\n.language_btn {\n  width: 80px;\n  height: 32px;\n  --background: #FFFFFF;\n  --color: #D4DCE1;\n  --border-style: solid;\n  --border-color: #D4DCE1;\n  --border-width: 1px;\n  --border-radius: 10px;\n  --box-shadow: none;\n}\n\n.english {\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.arabic {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.active_language {\n  --color: black;\n  --border-style: solid;\n  --border-color: #8000FF;\n  --border-width: 1.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXHNldHRpbmdzXFxzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLDJDQUFBO0FDTUo7O0FESkE7RUFDSSxxQkFBQTtBQ09KOztBRExBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRE5BO0VBQ0MsdUJBQUE7RUFDRyxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLHVCQUFBO0FDV0o7O0FEVEE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ1lKOztBRFZBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0RBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNhSjs7QURYQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFpBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDZUo7O0FEYkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNpQko7O0FEZkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNvQko7O0FEbEJBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ3FCSiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi51cmJhbmlzdHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBvcHBpbnN7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5ub3RvX3NhbnNfYXJhYmlje1xyXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgQXJhYmljJywgc2Fucy1zZXJpZjtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MjBweCAxNnB4IDIwcHg7XHJcbn1cclxuLnNldHRpbmdzX2l0ZW17XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDExcHggMTJweCAxMXB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxufVxyXG4uaW9uX3Rvb2dsZXtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODAwMEZGO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxOC41cHg7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHdoaXRlO1xyXG4gICAgLS1oYW5kbGUtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYigwIDAgMCAvIDE0JSk7XHJcbiAgICAtLWhhbmRsZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAtLWhhbmRsZS13aWR0aDogMTVweDtcclxuICAgIC0taGFuZGxlLXNwYWNpbmc6IDJweDtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIHdpZHRoOiAzMXB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmhlYWRpbmdfZGVzY3JpcHRpb257XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMyNzI3Mjc7XHJcbn1cclxuLmxhbmd1YWdlX2xhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI0IxQThCOTtcclxufVxyXG4ubGFuZ3VhZ2VfZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogOHB4IGF1dG87XHJcbn1cclxuLmxhbmd1YWdlX2J0bntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgLS1jb2xvcjogI0Q0RENFMTtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRDREQ0UxO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZW5nbGlzaHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmFyYWJpY3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmFjdGl2ZV9sYW5ndWFnZXtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICM4MDAwRkY7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMS41cHg7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi51cmJhbmlzdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wb3BwaW5zIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubm90b19zYW5zX2FyYWJpYyB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBBcmFiaWNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51aWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweDtcbn1cblxuLnNldHRpbmdzX2l0ZW0ge1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTFweCAxMnB4IDExcHggMTJweDtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLmlvbl90b29nbGUge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOC41cHg7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogd2hpdGU7XG4gIC0taGFuZGxlLWJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoMCAwIDAgLyAxNCUpO1xuICAtLWhhbmRsZS1oZWlnaHQ6IDE1cHg7XG4gIC0taGFuZGxlLXdpZHRoOiAxNXB4O1xuICAtLWhhbmRsZS1zcGFjaW5nOiAycHg7XG4gIGhlaWdodDogMTlweDtcbiAgd2lkdGg6IDMxcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmhlYWRpbmdfZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyNzI3Mjc7XG59XG5cbi5sYW5ndWFnZV9sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjQjFBOEI5O1xufVxuXG4ubGFuZ3VhZ2VfZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiA4cHggYXV0bztcbn1cblxuLmxhbmd1YWdlX2J0biB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgLS1jb2xvcjogI0Q0RENFMTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5lbmdsaXNoIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYXJhYmljIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYWN0aXZlX2xhbmd1YWdlIHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICM4MDAwRkY7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbn0iXX0= */";

/***/ }),

/***/ 5375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Settings</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"settings_item\">\n        <div>\n          <div class=\"heading\">Notifications</div>\n          <div class=\"heading_description\">Enable your notifications</div>\n        </div>\n        <div>\n          <ion-toggle class=\"ion_toogle\" checked=\"true\"></ion-toggle>\n        </div>\n    </div>\n\n    <div class=\"settings_item\" (click)=\"goForPaymentDetails()\">\n        <div>\n          <div class=\"heading\">Payment Details</div>\n          <div class=\"heading_description\">Add your cards for quick payments</div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/next.svg\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"settings_item\" (click)=\"goForChangePassword()\">\n        <div>\n          <div class=\"heading\">Change Password</div>\n          <div class=\"heading_description\">Update your password</div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/next.svg\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"settings_item\" (click)=\"editProfile()\">\n        <div>\n          <div class=\"heading\">Profile</div>\n          <div class=\"heading_description\">Update your profile</div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/next.svg\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"settings_item\" (click)=\"deleteAccountModal()\">\n        <div>\n          <div class=\"heading\" style=\"color: #FF0000;\">Delete Account</div>\n          <div class=\"heading_description\">Delete your account</div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/next.svg\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"language_label\">Choose your language</div>\n    <div class=\"language_div\" >\n      <ion-button class=\"language_btn urbanist english\" [class.active_language]=\"english_language==true\" (click)=\"changeLanguage()\" >\n        <!-- <img style=\"margin-right: 6.5px;\" src=\"assets/images/icons/language_icon.svg\" alt=\"\" *ngIf=\"english_language==true\"> -->\n        <!-- <img style=\"margin-right: 6.5px;\" src=\"assets/images/icons/language_icon_dull.svg\" alt=\"\" *ngIf=\"english_language==false\"> -->\n        <span>English</span>\n      </ion-button>\n      <ion-button class=\"language_btn noto_sans_arabic arabic\" [class.active_language]=\"arabic_language==true\" (click)=\"changeLanguage()\">\n        <!-- <img style=\"margin-right: 6.5px;\" src=\"assets/images/icons/language_icon.svg\" alt=\"\" *ngIf=\"arabic_language==true\"> -->\n        <!-- <img style=\"margin-right: 6.5px;\" src=\"assets/images/icons/language_icon_dull.svg\" alt=\"\" *ngIf=\"arabic_language==false\"> -->\n        <span>العربی</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map