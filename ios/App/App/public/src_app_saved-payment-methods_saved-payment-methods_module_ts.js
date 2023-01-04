"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_saved-payment-methods_saved-payment-methods_module_ts"],{

/***/ 87414:
/*!*******************************************************************************!*\
  !*** ./src/app/saved-payment-methods/saved-payment-methods-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedPaymentMethodsPageRoutingModule": () => (/* binding */ SavedPaymentMethodsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _saved_payment_methods_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved-payment-methods.page */ 92005);




const routes = [
    {
        path: '',
        component: _saved_payment_methods_page__WEBPACK_IMPORTED_MODULE_0__.SavedPaymentMethodsPage
    }
];
let SavedPaymentMethodsPageRoutingModule = class SavedPaymentMethodsPageRoutingModule {
};
SavedPaymentMethodsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SavedPaymentMethodsPageRoutingModule);



/***/ }),

/***/ 27135:
/*!***********************************************************************!*\
  !*** ./src/app/saved-payment-methods/saved-payment-methods.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedPaymentMethodsPageModule": () => (/* binding */ SavedPaymentMethodsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _saved_payment_methods_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved-payment-methods-routing.module */ 87414);
/* harmony import */ var _saved_payment_methods_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-payment-methods.page */ 92005);







let SavedPaymentMethodsPageModule = class SavedPaymentMethodsPageModule {
};
SavedPaymentMethodsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _saved_payment_methods_routing_module__WEBPACK_IMPORTED_MODULE_0__.SavedPaymentMethodsPageRoutingModule
        ],
        declarations: [_saved_payment_methods_page__WEBPACK_IMPORTED_MODULE_1__.SavedPaymentMethodsPage]
    })
], SavedPaymentMethodsPageModule);



/***/ }),

/***/ 92005:
/*!*********************************************************************!*\
  !*** ./src/app/saved-payment-methods/saved-payment-methods.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedPaymentMethodsPage": () => (/* binding */ SavedPaymentMethodsPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _saved_payment_methods_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-payment-methods.page.html?ngResource */ 25097);
/* harmony import */ var _saved_payment_methods_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saved-payment-methods.page.scss?ngResource */ 68447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _new_payment_method_new_payment_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-payment-method/new-payment-method.page */ 91785);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);








let SavedPaymentMethodsPage = class SavedPaymentMethodsPage {
  constructor(location, modalCtrlr) {
    this.location = location;
    this.modalCtrlr = modalCtrlr;
  }

  ngOnInit() {}

  goBack() {
    this.location.back();
  }

  addPaymentMethod() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrlr.create({
        component: _new_payment_method_new_payment_method_page__WEBPACK_IMPORTED_MODULE_3__.NewPaymentMethodPage,
        showBackdrop: true,
        cssClass: 'add_payment_method'
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role == 'new_method_data') {
        const new_method_data = data;
        console.log(new_method_data);
      }
    })();
  }

};

SavedPaymentMethodsPage.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

SavedPaymentMethodsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-saved-payment-methods',
  template: _saved_payment_methods_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_saved_payment_methods_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SavedPaymentMethodsPage);


/***/ }),

/***/ 68447:
/*!**********************************************************************************!*\
  !*** ./src/app/saved-payment-methods/saved-payment-methods.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 5px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.content_heading {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin-top: 24px;\n}\n\n.payment_method_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 16px 9px 16px;\n  background: #FBFBFB;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  border-radius: 5px;\n  margin-top: 12px;\n}\n\n.checkbox {\n  --background: #FBFBFB !important;\n  --background-checked: #8000FF !important;\n  --border-color: #D4DCE1;\n  --border-color-checked: #8000FF;\n  --checkmark-color: white;\n  --checkmark-width: 1.5px;\n}\n\n.owner_name {\n  color: #0F172A;\n  font-size: 17px;\n  font-weight: 500;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.owner_info {\n  color: #B0B0B0;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 24px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.btn_border {\n  --border-style: solid;\n  --border-color: #8000FF;\n  --border-width: 1.5px;\n}\n\n.delete_label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #D93A3A;\n}\n\n.delete_btn {\n  position: absolute;\n  top: 3px;\n  right: 75px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkLXBheW1lbnQtbWV0aG9kcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxzYXZlZC1wYXltZW50LW1ldGhvZHNcXHNhdmVkLXBheW1lbnQtbWV0aG9kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxxQkFBQTtBQ1FKOztBRE5BO0VBQ0ksdUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNXSjs7QURUQTtFQUNJLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtBQ1lKOztBRFZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDYUo7O0FEWEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUNjSjs7QURaQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNlSjs7QURiQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDZ0JKOztBRGRBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDaUJKOztBRGZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURoQkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ21CSiIsImZpbGUiOiJzYXZlZC1wYXltZW50LW1ldGhvZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4udXJiYW5pc3R7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wb3BwaW5ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MTVweCAxNnB4IDIwcHg7XHJcbn1cclxuLmNvbnRlbnRfaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ucGF5bWVudF9tZXRob2RfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiA5cHggMTZweCA5cHggMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4uY2hlY2tib3h7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkIgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODAwMEZGICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMTtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM4MDAwRkY7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XHJcbiAgICAtLWNoZWNrbWFyay13aWR0aDogMS41cHg7XHJcbn1cclxuLm93bmVyX25hbWV7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1VyYmFuaXN0JyxzYW5zLXNlcmlmO1xyXG59XHJcbi5vd25lcl9pbmZve1xyXG4gICAgY29sb3I6ICNCMEIwQjA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsc2Fucy1zZXJpZjtcclxufVxyXG4ubG9naW5fYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG5fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG5fYm9yZGVye1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICM4MDAwRkY7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMS41cHg7XHJcbn1cclxuLmRlbGV0ZV9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0Q5M0EzQTtcclxufVxyXG4uZGVsZXRlX2J0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgcmlnaHQ6IDc1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4udXJiYW5pc3Qge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucG9wcGlucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTZweCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMTVweCAxNnB4IDIwcHg7XG59XG5cbi5jb250ZW50X2hlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ucGF5bWVudF9tZXRob2RfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA5cHggMTZweCA5cHggMTZweDtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODAwMEZGICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjRDREQ0UxO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjODAwMEZGO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tY2hlY2ttYXJrLXdpZHRoOiAxLjVweDtcbn1cblxuLm93bmVyX25hbWUge1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ub3duZXJfaW5mbyB7XG4gIGNvbG9yOiAjQjBCMEIwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dpbl9idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI0cHggYXV0byAwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuX2JvcmRlciB7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICM4MDAwRkY7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbn1cblxuLmRlbGV0ZV9sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNEOTNBM0E7XG59XG5cbi5kZWxldGVfYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgcmlnaHQ6IDc1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */";

/***/ }),

/***/ 25097:
/*!**********************************************************************************!*\
  !*** ./src/app/saved-payment-methods/saved-payment-methods.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Payment</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: center;\">\n      <img src=\"assets/images/payment Info_img.svg\" alt=\"\">\n    </div>\n    <div class=\"content_heading\">Saved Payment Methods</div>\n\n    <div>\n\n      <div class=\"payment_method_box\" style=\"margin-top: 15.4px;\">\n        <div style=\"display: flex;align-items: center;\">\n          <div>\n            <div class=\"owner_name\">Owner name</div>\n            <div class=\"owner_info\">4162 **** **** ****</div>\n          </div>\n        </div>\n        <div style=\"position: relative;\">\n          <span class=\"delete_btn\">\n            <img style=\"margin-right: 4px;\" src=\"assets/images/icons/recycle_bin.svg\" alt=\"\">\n            <span class=\"delete_label urbanist\">Delete</span>\n          </span>\n          <img src=\"assets/images/icons/master_card.svg\" alt=\"\">\n        </div>\n      </div>\n      \n      <div class=\"payment_method_box\" >\n        <div style=\"display: flex;align-items: center;\">\n          <div>\n            <div class=\"owner_name\">Owner name</div>\n            <div class=\"owner_info\">4162 **** **** ****</div>\n          </div>\n        </div>\n        <div style=\"position: relative;\">\n          <span class=\"delete_btn\">\n            <img style=\"margin-right: 4px;\" src=\"assets/images/icons/recycle_bin.svg\" alt=\"\">\n            <span class=\"delete_label urbanist\">Delete</span>\n          </span>\n          <img src=\"assets/images/icons/visa_icon.svg\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"payment_method_box\" >\n        <div style=\"display: flex;align-items: center;\">\n          <div>\n            <div class=\"owner_name\">PayPal</div>\n            <div class=\"owner_info\">Arslan********mail.com</div>\n          </div>\n        </div>\n        <div style=\"position: relative;\">\n          <span class=\"delete_btn\">\n            <img style=\"margin-right: 4px;\" src=\"assets/images/icons/recycle_bin.svg\" alt=\"\">\n            <span class=\"delete_label urbanist\">Delete</span>\n          </span>\n          <img src=\"assets/images/icons/paypal_icon.svg\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div style=\"padding: 0px 16px 25px;\">\n    <ion-button class=\"login_button\" (click)=\"addPaymentMethod()\">\n      <span class=\"btn_text\">Add New Payment Method</span>\n    </ion-button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_saved-payment-methods_saved-payment-methods_module_ts.js.map