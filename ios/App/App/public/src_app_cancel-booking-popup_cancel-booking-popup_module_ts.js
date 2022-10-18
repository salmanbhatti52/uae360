"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cancel-booking-popup_cancel-booking-popup_module_ts"],{

/***/ 29498:
/*!*****************************************************************************!*\
  !*** ./src/app/cancel-booking-popup/cancel-booking-popup-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelBookingPopupPageRoutingModule": () => (/* binding */ CancelBookingPopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cancel_booking_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-booking-popup.page */ 305);




const routes = [
    {
        path: '',
        component: _cancel_booking_popup_page__WEBPACK_IMPORTED_MODULE_0__.CancelBookingPopupPage
    }
];
let CancelBookingPopupPageRoutingModule = class CancelBookingPopupPageRoutingModule {
};
CancelBookingPopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CancelBookingPopupPageRoutingModule);



/***/ }),

/***/ 35638:
/*!*********************************************************************!*\
  !*** ./src/app/cancel-booking-popup/cancel-booking-popup.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelBookingPopupPageModule": () => (/* binding */ CancelBookingPopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cancel_booking_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-booking-popup-routing.module */ 29498);
/* harmony import */ var _cancel_booking_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-booking-popup.page */ 305);







let CancelBookingPopupPageModule = class CancelBookingPopupPageModule {
};
CancelBookingPopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cancel_booking_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancelBookingPopupPageRoutingModule
        ],
        declarations: [_cancel_booking_popup_page__WEBPACK_IMPORTED_MODULE_1__.CancelBookingPopupPage]
    })
], CancelBookingPopupPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_cancel-booking-popup_cancel-booking-popup_module_ts.js.map