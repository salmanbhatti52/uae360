"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_new-payment-method_new-payment-method_page_ts"],{

/***/ 42823:
/*!*************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiryDatePopupPage": () => (/* binding */ ExpiryDatePopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _expiry_date_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expiry-date-popup.page.html?ngResource */ 5789);
/* harmony import */ var _expiry_date_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expiry-date-popup.page.scss?ngResource */ 94112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86527);






let ExpiryDatePopupPage = class ExpiryDatePopupPage {
    constructor(modalCtrlr) {
        this.modalCtrlr = modalCtrlr;
        this.minDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date().toISOString()), 'yyyy-MM-dd');
    }
    ngOnInit() {
    }
    formattedString(value) {
        const formattedString = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(value), 'dd MMM, yyyy');
        // =====dashed date for summary page=====
        const dashedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(value), 'dd-MM-yyyy');
        this.date = dashedDate;
        console.log(dashedDate);
        // ============done================
        this.date = formattedString;
        console.log(this.date);
        return this.modalCtrlr.dismiss(dashedDate, 'expiry_date');
    }
    cancel(ev) {
        this.modalCtrlr.dismiss(null, 'cancel');
    }
};
ExpiryDatePopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ExpiryDatePopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-expiry-date-popup',
        template: _expiry_date_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_expiry_date_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExpiryDatePopupPage);



/***/ }),

/***/ 91785:
/*!***************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPaymentMethodPage": () => (/* binding */ NewPaymentMethodPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_payment_method_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-payment-method.page.html?ngResource */ 20300);
/* harmony import */ var _new_payment_method_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-payment-method.page.scss?ngResource */ 43171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _expiry_date_popup_expiry_date_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expiry-date-popup/expiry-date-popup.page */ 42823);







let NewPaymentMethodPage = class NewPaymentMethodPage {
  constructor(modalCtrlr) {
    this.modalCtrlr = modalCtrlr;
    this.name_box_active = false;
    this.card_box_active = false;
    this.cvc_box_active = false;
    this.date_box_active = false;
    this.email_box_active = false;
    this.expiryDate = 'Expiry date';
  }

  ngOnInit() {}

  openDateModal() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrlr.create({
        component: _expiry_date_popup_expiry_date_popup_page__WEBPACK_IMPORTED_MODULE_3__.ExpiryDatePopupPage,
        showBackdrop: true,
        cssClass: 'expiry_date'
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role == 'expiry_date') {
        let month = data.substring(3, 5);
        let year = data.substring(6, 10);
        _this.expiryDate = `${month}/${year}`;
      }

      _this.activate('date');
    })();
  }

  activate(box_val) {
    if (box_val == 'name') {
      this.name_box_active = true;
      this.card_box_active = false;
      this.cvc_box_active = false;
      this.date_box_active = false;
      this.email_box_active = false;
    } else if (box_val == 'card_number') {
      this.name_box_active = false;
      this.card_box_active = true;
      this.cvc_box_active = false;
      this.date_box_active = false;
      this.email_box_active = false;
    } else if (box_val == 'cvc') {
      this.name_box_active = false;
      this.card_box_active = false;
      this.cvc_box_active = true;
      this.date_box_active = false;
      this.email_box_active = false;
    } else if (box_val == 'date') {
      this.name_box_active = false;
      this.card_box_active = false;
      this.cvc_box_active = false;
      this.date_box_active = true;
      this.email_box_active = false;
    } else if (box_val == 'email') {
      this.name_box_active = false;
      this.card_box_active = false;
      this.cvc_box_active = false;
      this.date_box_active = false;
      this.email_box_active = true;
    } else {}
  }

  savePaymentMethod() {
    this.name_box_active = false;
    this.card_box_active = false;
    this.cvc_box_active = false;
    this.date_box_active = false;
    this.email_box_active = false;
    return this.modalCtrlr.dismiss(this.data, 'new_method_data');
  }

};

NewPaymentMethodPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

NewPaymentMethodPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-new-payment-method',
  template: _new_payment_method_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_new_payment_method_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NewPaymentMethodPage);


/***/ }),

/***/ 94112:
/*!**************************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#FBFBFB !important;\n}\n\n.wrapper {\n  padding: 20px;\n}\n\n.date_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 6px;\n}\n\nion-datetime.md {\n  --background: #FBFBFB;\n  color: #464646;\n}\n\nion-datetime.ios {\n  color: #464646;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGlyeS1kYXRlLXBvcHVwLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGV4cGlyeS1kYXRlLXBvcHVwXFxleHBpcnktZGF0ZS1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKIiwiZmlsZSI6ImV4cGlyeS1kYXRlLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmRhdGVfbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbmlvbi1kYXRldGltZS5tZHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbmlvbi1kYXRldGltZS5pb3N7XHJcbiAgICBjb2xvcjogIzQ2NDY0NjtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGF0ZV9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuaW9uLWRhdGV0aW1lLm1kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBjb2xvcjogIzQ2NDY0Njtcbn1cblxuaW9uLWRhdGV0aW1lLmlvcyB7XG4gIGNvbG9yOiAjNDY0NjQ2O1xufSJdfQ== */";

/***/ }),

/***/ 43171:
/*!****************************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.wrapper {\n  padding: 34px 16px 25px;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 24px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.heading {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  color: #0F172A;\n  text-align: center;\n}\n\n.card_img {\n  height: 15px;\n  width: 35px;\n}\n\n.input_box {\n  margin-top: 10px;\n  border: 1px solid #EFEFEF;\n  display: flex;\n  align-items: center;\n  padding: 0px 8px 0px;\n  height: 48px;\n}\n\n.active_box {\n  border: 1px solid #8000FF;\n}\n\n.placeholder_margin {\n  margin-right: 10px;\n}\n\nion-input {\n  --background: #FBFBFB;\n  --color: black;\n  --placeholder-color: #B0B0B0;\n  --placeholder-font-weight: 400;\n  --padding-start: 0px;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.or_label {\n  margin-top: 25px;\n  text-align: center;\n}\n\n.paypal_label {\n  color: #7E7E7E;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxuZXctcGF5bWVudC1tZXRob2RcXG5ldy1wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUNBQUE7QUNFSjs7QURBQTtFQUNJLGtDQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtBQ0lKOztBREZBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUNNSjs7QURKQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxZQUFBO0VBQWEsV0FBQTtBQ1NqQjs7QURQQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNVSjs7QURZQTtFQUNJLHlCQUFBO0FDVEo7O0FEV0E7RUFDSSxrQkFBQTtBQ1JKOztBRFVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURRQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xKIiwiZmlsZSI6Im5ldy1wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVyYmFuaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9wcGluc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAzNHB4IDE2cHggMjVweDtcclxufVxyXG4ubG9naW5fYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG5fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZF9pbWd7XHJcbiAgICBoZWlnaHQ6IDE1cHg7d2lkdGg6IDM1cHg7XHJcbn1cclxuLmlucHV0X2JveHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4IDBweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG4vLyAuZGF0ZV9sYWJlbHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbi8vIH1cclxuLy8gLmRhdGV0aW1le1xyXG4vLyAgICAgLS1oZWlnaHQ6IDQ2MHB4O1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgLS13aWR0aDogOTAlO1xyXG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNSk7XHJcbi8vIH1cclxuLy8gaW9uLWRhdGV0aW1lLm1ke1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4vLyAgICAgY29sb3I6ICM0NjQ2NDY7XHJcbi8vIH1cclxuLy8gaW9uLWRhdGV0aW1lLmlvc3tcclxuLy8gICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4vLyB9XHJcbi5hY3RpdmVfYm94e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwMDBGRjtcclxufVxyXG4ucGxhY2Vob2xkZXJfbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0IwQjBCMDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLm9yX2xhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGF5cGFsX2xhYmVse1xyXG4gICAgY29sb3I6ICM3RTdFN0U7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi51cmJhbmlzdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wb3BwaW5zIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDM0cHggMTZweCAyNXB4O1xufVxuXG4ubG9naW5fYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyNHB4IGF1dG8gMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bl90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkX2ltZyB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbi5pbnB1dF9ib3gge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggOHB4IDBweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYWN0aXZlX2JveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDAwRkY7XG59XG5cbi5wbGFjZWhvbGRlcl9tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNCMEIwQjA7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm9yX2xhYmVsIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGF5cGFsX2xhYmVsIHtcbiAgY29sb3I6ICM3RTdFN0U7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";

/***/ }),

/***/ 5789:
/*!**************************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"date_label\">Select Date  </div>\n    <ion-datetime #datetime min=\"{{minDate}}\" max=\"2050\" (ionCancel)=\"cancel(ev)\" [showDefaultButtons]=\"true\" presentation=\"month-year\" (ionChange)=\"formattedString(datetime.value)\" size=\"cover\" ></ion-datetime>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 20300:
/*!****************************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"heading\">New Payment Method</div>\n    <div style=\"margin-top: 20px;\">\n      <div class=\"input_box\" [class.active_box]=\"name_box_active==true\">\n        <img class=\"placeholder_margin\" src=\"../../assets/images/icons/user_icon.svg\" alt=\"\">\n        <ion-input maxlength=\"36\" (ionInput)=\"activate('name')\" type=\"text\" placeholder=\"Card holder name\"></ion-input>\n      </div>\n      \n      <div class=\"input_box\" style=\"justify-content: space-between;\" [class.active_box]=\"card_box_active==true\">\n        <div style=\"display: flex;align-items: center;\">\n          <img class=\"placeholder_margin\" src=\"../../assets/images/icons/card_active.svg\" alt=\"\">\n          <ion-input maxlength=\"16\"  (ionInput)=\"activate('card_number')\" type=\"tel\" placeholder=\"xxxx xxxx xxxx xxxx\"></ion-input>\n        </div>\n        <div style=\"display: flex; justify-content: space-between;\">\n          <img class=\"card_img\" style=\"margin-right: 5px;\" src=\"../../assets/images/icons/visa_icon.svg\" alt=\"\">\n          <img class=\"card_img\" src=\"assets/images/icons/master_card.svg\" alt=\"\">\n        </div>\n      </div>\n      \n      <div style=\"display: flex;justify-content: space-between;\">\n        <div class=\"input_box\" style=\"width: 48%;\" [class.active_box]=\"cvc_box_active==true\">\n          <img class=\"placeholder_margin\" src=\"../../assets/images/icons/card_not_active.svg\" alt=\"\">\n          <ion-input maxlength=\"3\" (ionInput)=\"activate('cvc')\" type=\"tel\" placeholder=\"CVC\" ></ion-input>\n        </div>\n        <div class=\"input_box\" style=\"width: 48%; padding: 0px 6px 0px 14px;\" [class.active_box]=\"date_box_active==true\">\n          <img class=\"placeholder_margin\" src=\"../../assets/images/icons/calendar_icon.svg\" alt=\"\">\n          <div value=\"\" (click)=\"openDateModal()\" style=\"color: black;\">{{expiryDate}}</div>\n          \n        </div>\n      </div>\n      \n      <!-- <div class=\"or_label heading\">OR</div>\n      \n      <div style=\"margin-top: 13px;\">\n        <div class=\"paypal_label\">PayPal</div>\n        <div class=\"input_box\" [class.active_box]=\"email_box_active==true\">\n          <ion-input type=\"email\" (ionInput)=\"activate('email')\" placeholder=\"Enter PayPal email here\"></ion-input>\n        </div>\n      </div> -->\n      \n    </div>\n    <ion-button class=\"login_button\" (click)=\"savePaymentMethod()\">\n      <span class=\"btn_text\">Save</span>\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_new-payment-method_new-payment-method_page_ts.js.map