"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_expiry-date-popup_expiry-date-popup_module_ts"],{

/***/ 3972:
/*!***********************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiryDatePopupPageRoutingModule": () => (/* binding */ ExpiryDatePopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _expiry_date_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expiry-date-popup.page */ 2823);




const routes = [
    {
        path: '',
        component: _expiry_date_popup_page__WEBPACK_IMPORTED_MODULE_0__.ExpiryDatePopupPage
    }
];
let ExpiryDatePopupPageRoutingModule = class ExpiryDatePopupPageRoutingModule {
};
ExpiryDatePopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExpiryDatePopupPageRoutingModule);



/***/ }),

/***/ 9093:
/*!***************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiryDatePopupPageModule": () => (/* binding */ ExpiryDatePopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _expiry_date_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expiry-date-popup-routing.module */ 3972);
/* harmony import */ var _expiry_date_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expiry-date-popup.page */ 2823);







let ExpiryDatePopupPageModule = class ExpiryDatePopupPageModule {
};
ExpiryDatePopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _expiry_date_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpiryDatePopupPageRoutingModule
        ],
        declarations: [_expiry_date_popup_page__WEBPACK_IMPORTED_MODULE_1__.ExpiryDatePopupPage]
    })
], ExpiryDatePopupPageModule);



/***/ }),

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

/***/ 4112:
/*!**************************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#FBFBFB !important;\n}\n\n.wrapper {\n  padding: 20px;\n}\n\n.date_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 6px;\n}\n\nion-datetime.md {\n  --background: #FBFBFB;\n  color: #464646;\n}\n\nion-datetime.ios {\n  color: #464646;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGlyeS1kYXRlLXBvcHVwLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGV4cGlyeS1kYXRlLXBvcHVwXFxleHBpcnktZGF0ZS1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKIiwiZmlsZSI6ImV4cGlyeS1kYXRlLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmRhdGVfbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbmlvbi1kYXRldGltZS5tZHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbmlvbi1kYXRldGltZS5pb3N7XHJcbiAgICBjb2xvcjogIzQ2NDY0NjtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGF0ZV9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuaW9uLWRhdGV0aW1lLm1kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBjb2xvcjogIzQ2NDY0Njtcbn1cblxuaW9uLWRhdGV0aW1lLmlvcyB7XG4gIGNvbG9yOiAjNDY0NjQ2O1xufSJdfQ== */";

/***/ }),

/***/ 5789:
/*!**************************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"date_label\">Select Date  </div>\n    <ion-datetime (ionCancel)=\"cancel(ev)\" [showDefaultButtons]=\"true\"  presentation=\"date\" (ionChange)=\"formattedString()\" size=\"cover\" [(ngModel)]=\"date\"></ion-datetime>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_expiry-date-popup_expiry-date-popup_module_ts.js.map