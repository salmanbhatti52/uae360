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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 5px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.content_heading {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin-top: 24px;\n}\n\n.payment_method_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 16px 9px 16px;\n  background: #FBFBFB;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  border-radius: 5px;\n  margin-top: 12px;\n}\n\n.checkbox {\n  --background: #FBFBFB !important;\n  --background-checked: #8000FF !important;\n  --border-color: #D4DCE1;\n  --border-color-checked: #8000FF;\n  --checkmark-color: white;\n  --checkmark-width: 1.5px;\n}\n\n.owner_name {\n  color: #0F172A;\n  font-size: 17px;\n  font-weight: 500;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.owner_info {\n  color: #B0B0B0;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 24px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.btn_border {\n  --border-style: solid;\n  --border-color: #8000FF;\n  --border-width: 1.5px;\n}\n\n.delete_label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #D93A3A;\n}\n\n.delete_btn {\n  position: absolute;\n  top: 3px;\n  right: 75px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkLXBheW1lbnQtbWV0aG9kcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxzYXZlZC1wYXltZW50LW1ldGhvZHNcXHNhdmVkLXBheW1lbnQtbWV0aG9kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxxQkFBQTtBQ1FKOztBRE5BO0VBQ0ksdUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNXSjs7QURUQTtFQUNJLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtBQ1lKOztBRFRBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDWUo7O0FEVkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUNhSjs7QURYQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNjSjs7QURaQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDZUo7O0FEYkE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNnQko7O0FEZEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDaUJKOztBRGZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNrQkoiLCJmaWxlIjoic2F2ZWQtcGF5bWVudC1tZXRob2RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVyYmFuaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9wcGluc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjE1cHggMTZweCAyMHB4O1xyXG59XHJcbi5jb250ZW50X2hlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLnBheW1lbnRfbWV0aG9kX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogOXB4IDE2cHggOXB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLmNoZWNrYm94e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzgwMDBGRiAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNENERDRTE7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjODAwMEZGO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xyXG4gICAgLS1jaGVja21hcmstd2lkdGg6IDEuNXB4O1xyXG4gICAgLy8gLS1zaXplOiAzMnB4O1xyXG59XHJcbi5vd25lcl9uYW1le1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsc2Fucy1zZXJpZjtcclxufVxyXG4ub3duZXJfaW5mb3tcclxuICAgIGNvbG9yOiAjQjBCMEIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbn1cclxuLmxvZ2luX2J1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI0cHggYXV0byAwcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxufVxyXG4uYnRuX2JvcmRlcntcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjODAwMEZGO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xyXG59XHJcbi5kZWxldGVfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNEOTNBM0E7XHJcbn1cclxuLmRlbGV0ZV9idG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIHJpZ2h0OiA3NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLnVyYmFuaXN0IHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBvcHBpbnMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTZweCAyMHB4O1xufVxuXG4uY29udGVudF9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLnBheW1lbnRfbWV0aG9kX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOXB4IDE2cHggOXB4IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzgwMDBGRiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogI0Q0RENFMTtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzgwMDBGRjtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xuICAtLWNoZWNrbWFyay13aWR0aDogMS41cHg7XG59XG5cbi5vd25lcl9uYW1lIHtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm93bmVyX2luZm8ge1xuICBjb2xvcjogI0IwQjBCMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubG9naW5fYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyNHB4IGF1dG8gMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bl90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLmJ0bl9ib3JkZXIge1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjODAwMEZGO1xuICAtLWJvcmRlci13aWR0aDogMS41cHg7XG59XG5cbi5kZWxldGVfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRDkzQTNBO1xufVxuXG4uZGVsZXRlX2J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIHJpZ2h0OiA3NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */";

/***/ }),

/***/ 25097:
/*!**********************************************************************************!*\
  !*** ./src/app/saved-payment-methods/saved-payment-methods.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Payment</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: center;\">\n      <img src=\"assets/images/payment Info_img.svg\" alt=\"\">\n    </div>\n    <div class=\"content_heading\">Saved Payment Methods</div>\n\n    <div>\n\n      <div class=\"payment_method_box\" style=\"margin-top: 15.4px;\">\n        <div style=\"display: flex;align-items: center;\">\n          <div>\n            <div class=\"owner_name\">Owner name</div>\n            <div class=\"owner_info\">4162 **** **** ****</div>\n          </div>\n        </div>\n        <div style=\"position: relative;\">\n          <span class=\"delete_btn\">\n            <img style=\"margin-right: 4px;\" src=\"assets/images/icons/recycle_bin.svg\" alt=\"\">\n            <span class=\"delete_label urbanist\">Delete</span>\n          </span>\n          <img src=\"assets/images/icons/master_card.svg\" alt=\"\">\n        </div>\n      </div>\n      \n      <div class=\"payment_method_box\" >\n        <div style=\"display: flex;align-items: center;\">\n          <div>\n            <div class=\"owner_name\">Owner name</div>\n            <div class=\"owner_info\">4162 **** **** ****</div>\n          </div>\n        </div>\n        <div style=\"position: relative;\">\n          <span class=\"delete_btn\">\n            <img style=\"margin-right: 4px;\" src=\"assets/images/icons/recycle_bin.svg\" alt=\"\">\n            <span class=\"delete_label urbanist\">Delete</span>\n          </span>\n          <img src=\"assets/images/icons/visa_icon.svg\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"payment_method_box\" >\n        <div style=\"display: flex;align-items: center;\">\n          <div>\n            <div class=\"owner_name\">PayPal</div>\n            <div class=\"owner_info\">Arslan********mail.com</div>\n          </div>\n        </div>\n        <div style=\"position: relative;\">\n          <span class=\"delete_btn\">\n            <img style=\"margin-right: 4px;\" src=\"assets/images/icons/recycle_bin.svg\" alt=\"\">\n            <span class=\"delete_label urbanist\">Delete</span>\n          </span>\n          <img src=\"assets/images/icons/paypal_icon.svg\" alt=\"\">\n        </div>\n      </div>\n\n      <!-- <div>\n        <ion-button class=\"login_button\" (click)=\"startPaymentProcess()\">\n          <span class=\"btn_text\">Pay</span>\n        </ion-button>\n        <ion-button class=\"login_button btn_border\" style=\"--background:#FBFBFB; margin-top: 16px;\" (click)=\"startPaymentProcess()\">\n          <span class=\"btn_text \" style=\"color: #0F172A;\">Add New Payment Method</span>\n        </ion-button>\n      </div> -->\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div style=\"padding: 0px 16px 25px;\">\n    <ion-button class=\"login_button\" (click)=\"addPaymentMethod()\">\n      <span class=\"btn_text\">Add New Payment Method</span>\n    </ion-button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_saved-payment-methods_saved-payment-methods_module_ts.js.map