"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment-details_payment-details_module_ts"],{

/***/ 39600:
/*!*******************************************************************!*\
  !*** ./src/app/payment-details/payment-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPageRoutingModule": () => (/* binding */ PaymentDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details.page */ 17727);




const routes = [
    {
        path: '',
        component: _payment_details_page__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsPage
    }
];
let PaymentDetailsPageRoutingModule = class PaymentDetailsPageRoutingModule {
};
PaymentDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentDetailsPageRoutingModule);



/***/ }),

/***/ 76472:
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPageModule": () => (/* binding */ PaymentDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details-routing.module */ 39600);
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-details.page */ 17727);







let PaymentDetailsPageModule = class PaymentDetailsPageModule {
};
PaymentDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsPageRoutingModule
        ],
        declarations: [_payment_details_page__WEBPACK_IMPORTED_MODULE_1__.PaymentDetailsPage]
    })
], PaymentDetailsPageModule);



/***/ }),

/***/ 17727:
/*!*********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPage": () => (/* binding */ PaymentDetailsPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payment_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-details.page.html?ngResource */ 91876);
/* harmony import */ var _payment_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-details.page.scss?ngResource */ 43057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _new_payment_method_new_payment_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-payment-method/new-payment-method.page */ 91785);
/* harmony import */ var _booked_booked_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booked/booked.page */ 88242);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);









let PaymentDetailsPage = class PaymentDetailsPage {
  constructor(location, modalCtrlr) {
    this.location = location;
    this.modalCtrlr = modalCtrlr;
    this.master = false;
    this.visa = false;
    this.paypal = false;
  }

  ngOnInit() {}

  goBack() {
    this.location.back();
  }

  openBookedModal() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrlr.create({
        component: _booked_booked_page__WEBPACK_IMPORTED_MODULE_4__.BookedPage,
        showBackdrop: true,
        cssClass: 'booked_modal'
      });
      modal.present();
    })();
  }

  selectMethod(val) {
    if (val == 'master') {
      if (this.master == false) {
        this.master = true;
        this.visa = false;
        this.paypal = false;
      } else {
        this.master = false;
        this.visa = false;
        this.paypal = false;
      }
    } else if (val == 'visa') {
      if (this.visa == false) {
        this.visa = true;
        this.master = false;
        this.paypal = false;
      } else {
        this.master = false;
        this.visa = false;
        this.paypal = false;
      }
    } else if (val == 'paypal') {
      if (this.paypal == false) {
        this.paypal = true;
        this.master = false;
        this.visa = false;
      } else {
        this.master = false;
        this.visa = false;
        this.paypal = false;
      }
    } else {}
  }

  addPaymentMethod() {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrlr.create({
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

PaymentDetailsPage.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

PaymentDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-payment-details',
  template: _payment_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_payment_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PaymentDetailsPage);


/***/ }),

/***/ 43057:
/*!**********************************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 10px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.content_heading {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin-top: 50px;\n}\n\n.payment_method_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 16px 9px 16px;\n  background: #FBFBFB;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  border-radius: 5px;\n  margin-top: 12px;\n}\n\n.checkbox {\n  --background: #FBFBFB !important;\n  --background-checked: #8000FF !important;\n  --border-color: #D4DCE1;\n  --border-color-checked: #8000FF;\n  --checkmark-color: white;\n  --checkmark-width: 1.5px;\n}\n\n.owner_name {\n  color: #0F172A;\n  font-size: 17px;\n  font-weight: 500;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.owner_info {\n  color: #B0B0B0;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 24px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.btn_border {\n  --border-style: solid;\n  --border-color: #8000FF;\n  --border-width: 1.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxwYXltZW50LWRldGFpbHNcXHBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxxQkFBQTtBQ1FKOztBRE5BO0VBQ0ksdUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNXSjs7QURUQTtFQUNJLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtBQ1lKOztBRFRBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDWUo7O0FEVkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUNhSjs7QURYQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNjSjs7QURaQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDZUo7O0FEYkE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNnQkoiLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVyYmFuaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9wcGluc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYWRlcl90aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDE2cHggMjBweDtcclxufVxyXG4uY29udGVudF9oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5wYXltZW50X21ldGhvZF9ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDlweCAxNnB4IDlweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5jaGVja2JveHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4MDAwRkYgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRDREQ0UxO1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzgwMDBGRjtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tY2hlY2ttYXJrLXdpZHRoOiAxLjVweDtcclxuICAgIC8vIC0tc2l6ZTogMzJweDtcclxufVxyXG4ub3duZXJfbmFtZXtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbn1cclxuLm93bmVyX2luZm97XHJcbiAgICBjb2xvcjogI0IwQjBCMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1VyYmFuaXN0JyxzYW5zLXNlcmlmO1xyXG59XHJcbi5sb2dpbl9idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG8gMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bl90ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bl9ib3JkZXJ7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogIzgwMDBGRjtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLnVyYmFuaXN0IHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBvcHBpbnMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDE2cHggMjBweDtcbn1cblxuLmNvbnRlbnRfaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5wYXltZW50X21ldGhvZF9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDlweCAxNnB4IDlweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkIgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4MDAwRkYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6ICNENERDRTE7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM4MDAwRkY7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1jaGVja21hcmstd2lkdGg6IDEuNXB4O1xufVxuXG4ub3duZXJfbmFtZSB7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5vd25lcl9pbmZvIHtcbiAgY29sb3I6ICNCMEIwQjA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxvZ2luX2J1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjRweCBhdXRvIDBweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5idG5fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fYm9yZGVyIHtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogIzgwMDBGRjtcbiAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 91876:
/*!**********************************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Payment</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: center;\">\n      <img src=\"assets/images/payment Info_img.svg\" alt=\"\">\n    </div>\n    <div class=\"content_heading\">Select payment method</div>\n\n    <div>\n\n      <div class=\"payment_method_box\" style=\"margin-top: 15.4px;\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"margin-right: 18px;display: flex;\">\n            <img (click)=\"selectMethod('master')\" src=\"assets/images/icons/marked.svg\" alt=\"\" *ngIf=\"master == true\">\n            <img (click)=\"selectMethod('master')\" src=\"assets/images/icons/unmarked.svg\" alt=\"\" *ngIf=\"master != true\">\n            \n          </div>\n          <div>\n            <div class=\"owner_name\">Owner name</div>\n            <div class=\"owner_info\">4162 **** **** ****</div>\n          </div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/master_card.svg\" alt=\"\">\n        </div>\n      </div>\n      \n      <div class=\"payment_method_box\" >\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"margin-right: 18px;display: flex;\">\n            <img (click)=\"selectMethod('visa')\" src=\"assets/images/icons/marked.svg\" alt=\"\" *ngIf=\"visa == true\">\n            <img (click)=\"selectMethod('visa')\" src=\"assets/images/icons/unmarked.svg\" alt=\"\" *ngIf=\"visa != true\">\n            \n          </div>\n          <div>\n            <div class=\"owner_name\">Owner name</div>\n            <div class=\"owner_info\">4162 **** **** ****</div>\n          </div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/visa_icon.svg\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"payment_method_box\" >\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"margin-right: 18px;display: flex;\">\n            <img (click)=\"selectMethod('paypal')\" src=\"assets/images/icons/marked.svg\" alt=\"\" *ngIf=\"paypal == true\">\n            <img (click)=\"selectMethod('paypal')\" src=\"assets/images/icons/unmarked.svg\" alt=\"\" *ngIf=\"paypal != true\">\n            \n          </div>\n          <div>\n            <div class=\"owner_name\">PayPal</div>\n            <div class=\"owner_info\">Arslan********mail.com</div>\n          </div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/paypal_icon.svg\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div style=\"padding: 0px 16px 25px;\">\n    <ion-button class=\"login_button\" (click)=\"openBookedModal()\">\n      <span class=\"btn_text\">Pay</span>\n    </ion-button>\n    <ion-button class=\"login_button btn_border\" style=\"--background:#FBFBFB; margin-top: 16px;\" (click)=\"addPaymentMethod()\">\n      <span class=\"btn_text \" style=\"color: #0F172A;\">Add New Payment Method</span>\n    </ion-button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_payment-details_payment-details_module_ts.js.map