"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_new-payment-method_new-payment-method_page_ts"],{

/***/ 2823:
/*!*************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiryDatePopupPage": () => (/* binding */ ExpiryDatePopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _expiry_date_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expiry-date-popup.page.html?ngResource */ 5789);
/* harmony import */ var _expiry_date_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expiry-date-popup.page.scss?ngResource */ 4112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 6527);






let ExpiryDatePopupPage = class ExpiryDatePopupPage {
    constructor(modalCtrlr) {
        this.modalCtrlr = modalCtrlr;
    }
    ngOnInit() {
    }
    formattedString() {
        const formattedString = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(this.date), 'dd MMM, yyyy');
        // =====dashed date for summary page=====
        const dashedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(this.date), 'dd-MM-yyyy');
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

/***/ 1785:
/*!***************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPaymentMethodPage": () => (/* binding */ NewPaymentMethodPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_payment_method_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-payment-method.page.html?ngResource */ 300);
/* harmony import */ var _new_payment_method_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-payment-method.page.scss?ngResource */ 3171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _expiry_date_popup_expiry_date_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expiry-date-popup/expiry-date-popup.page */ 2823);







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
        _this.expiryDate = data;
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

/***/ 4112:
/*!**************************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#FBFBFB !important;\n}\n\n.wrapper {\n  padding: 20px;\n}\n\n.date_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 6px;\n}\n\nion-datetime.md {\n  --background: #FBFBFB;\n  color: #464646;\n}\n\nion-datetime.ios {\n  color: #464646;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGlyeS1kYXRlLXBvcHVwLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGV4cGlyeS1kYXRlLXBvcHVwXFxleHBpcnktZGF0ZS1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKIiwiZmlsZSI6ImV4cGlyeS1kYXRlLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmRhdGVfbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbmlvbi1kYXRldGltZS5tZHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbmlvbi1kYXRldGltZS5pb3N7XHJcbiAgICBjb2xvcjogIzQ2NDY0NjtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGF0ZV9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuaW9uLWRhdGV0aW1lLm1kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBjb2xvcjogIzQ2NDY0Njtcbn1cblxuaW9uLWRhdGV0aW1lLmlvcyB7XG4gIGNvbG9yOiAjNDY0NjQ2O1xufSJdfQ== */";

/***/ }),

/***/ 3171:
/*!****************************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.wrapper {\n  padding: 34px 16px 25px;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 24px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.heading {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  color: #0F172A;\n  text-align: center;\n}\n\n.input_box {\n  margin-top: 10px;\n  border: 1px solid #EFEFEF;\n  display: flex;\n  align-items: center;\n  padding: 0px 16px 0px;\n  height: 48px;\n}\n\n.active_box {\n  border: 1px solid #8000FF;\n}\n\n.placeholder_margin {\n  margin-right: 10px;\n}\n\nion-input {\n  --background: #FBFBFB;\n  --color: black;\n  --placeholder-color: #B0B0B0;\n  --placeholder-font-weight: 400;\n  --padding-start: 0px;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.or_label {\n  margin-top: 25px;\n  text-align: center;\n}\n\n.paypal_label {\n  color: #7E7E7E;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxuZXctcGF5bWVudC1tZXRob2RcXG5ldy1wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUNBQUE7QUNFSjs7QURBQTtFQUNJLGtDQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtBQ0lKOztBREZBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUNNSjs7QURKQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDUUo7O0FEY0E7RUFDSSx5QkFBQTtBQ1hKOztBRGFBO0VBQ0ksa0JBQUE7QUNWSjs7QURZQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVEo7O0FEV0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDUko7O0FEVUE7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNQSiIsImZpbGUiOiJuZXctcGF5bWVudC1tZXRob2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi51cmJhbmlzdHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBvcHBpbnN7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzogMzRweCAxNnB4IDI1cHg7XHJcbn1cclxuLmxvZ2luX2J1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI0cHggYXV0byAwcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlucHV0X2JveHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLy8gLmRhdGVfbGFiZWx7XHJcbi8vICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4vLyB9XHJcbi8vIC5kYXRldGltZXtcclxuLy8gICAgIC0taGVpZ2h0OiA0NjBweDtcclxuLy8gICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gICAgIC0td2lkdGg6IDkwJTtcclxuLy8gICAgIC8vIC0tYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjUpO1xyXG4vLyB9XHJcbi8vIGlvbi1kYXRldGltZS5tZHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuLy8gICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4vLyB9XHJcbi8vIGlvbi1kYXRldGltZS5pb3N7XHJcbi8vICAgICBjb2xvcjogIzQ2NDY0NjtcclxuLy8gfVxyXG4uYWN0aXZlX2JveHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDAwRkY7XHJcbn1cclxuLnBsYWNlaG9sZGVyX21hcmdpbntcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNCMEIwQjA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5vcl9sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnBheXBhbF9sYWJlbHtcclxuICAgIGNvbG9yOiAjN0U3RTdFO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4udXJiYW5pc3Qge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucG9wcGlucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAzNHB4IDE2cHggMjVweDtcbn1cblxuLmxvZ2luX2J1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjRweCBhdXRvIDBweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5idG5fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXRfYm94IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDE2cHggMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5hY3RpdmVfYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwMDBGRjtcbn1cblxuLnBsYWNlaG9sZGVyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0IwQjBCMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ub3JfbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYXlwYWxfbGFiZWwge1xuICBjb2xvcjogIzdFN0U3RTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */";

/***/ }),

/***/ 5789:
/*!**************************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"date_label\">Select Date  </div>\n    <ion-datetime (ionCancel)=\"cancel(ev)\" [showDefaultButtons]=\"true\"  presentation=\"date\" (ionChange)=\"formattedString()\" size=\"cover\" [(ngModel)]=\"date\"></ion-datetime>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 300:
/*!****************************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"heading\">New Payment Method</div>\n    <div style=\"margin-top: 20px;\">\n      <div class=\"input_box\" [class.active_box]=\"name_box_active==true\">\n        <img class=\"placeholder_margin\" src=\"../../assets/images/icons/user_icon.svg\" alt=\"\">\n        <ion-input (ionInput)=\"activate('name')\" type=\"text\" placeholder=\"Card holder name\"></ion-input>\n      </div>\n      \n      <div class=\"input_box\" style=\"justify-content: space-between;\" [class.active_box]=\"card_box_active==true\">\n        <div style=\"display: flex;align-items: center;\">\n          <img class=\"placeholder_margin\" src=\"../../assets/images/icons/card_active.svg\" alt=\"\">\n          <ion-input  (ionInput)=\"activate('card_number')\" type=\"tel\" placeholder=\"xxxx xxxx xxxx xxxx\"></ion-input>\n        </div>\n        <div>\n          <img src=\"../../assets/images/icons/visa_icon.svg\" alt=\"\">\n        </div>\n      </div>\n      \n      <div style=\"display: flex;justify-content: space-between;\">\n        <div class=\"input_box\" style=\"width: 48%;\" [class.active_box]=\"cvc_box_active==true\">\n          <img class=\"placeholder_margin\" src=\"../../assets/images/icons/card_not_active.svg\" alt=\"\">\n          <ion-input (ionInput)=\"activate('cvc')\" type=\"tel\" placeholder=\"CVC\" ></ion-input>\n        </div>\n        <div class=\"input_box\" style=\"width: 48%; padding: 0px 6px 0px 14px;\" [class.active_box]=\"date_box_active==true\">\n          <img class=\"placeholder_margin\" src=\"../../assets/images/icons/calendar_icon.svg\" alt=\"\">\n          <div value=\"\" (click)=\"openDateModal()\" style=\"color: black;\">{{expiryDate}}</div>\n          \n        </div>\n      </div>\n      \n      <div class=\"or_label heading\">OR</div>\n      \n      <div style=\"margin-top: 13px;\">\n        <div class=\"paypal_label\">PayPal</div>\n        <div class=\"input_box\" [class.active_box]=\"email_box_active==true\">\n          <ion-input type=\"email\" (ionInput)=\"activate('email')\" placeholder=\"Enter PayPal email here\"></ion-input>\n        </div>\n      </div>\n      \n    </div>\n    <ion-button class=\"login_button\" (click)=\"savePaymentMethod()\">\n      <span class=\"btn_text\">Save</span>\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_new-payment-method_new-payment-method_page_ts.js.map