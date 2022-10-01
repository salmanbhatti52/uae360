"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-payment-method_new-payment-method_module_ts"],{

/***/ 1494:
/*!*************************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPaymentMethodPageRoutingModule": () => (/* binding */ NewPaymentMethodPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _new_payment_method_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-payment-method.page */ 1785);




const routes = [
    {
        path: '',
        component: _new_payment_method_page__WEBPACK_IMPORTED_MODULE_0__.NewPaymentMethodPage
    }
];
let NewPaymentMethodPageRoutingModule = class NewPaymentMethodPageRoutingModule {
};
NewPaymentMethodPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewPaymentMethodPageRoutingModule);



/***/ }),

/***/ 1795:
/*!*****************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPaymentMethodPageModule": () => (/* binding */ NewPaymentMethodPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _new_payment_method_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-payment-method-routing.module */ 1494);
/* harmony import */ var _new_payment_method_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-payment-method.page */ 1785);







let NewPaymentMethodPageModule = class NewPaymentMethodPageModule {
};
NewPaymentMethodPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_payment_method_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewPaymentMethodPageRoutingModule
        ],
        declarations: [_new_payment_method_page__WEBPACK_IMPORTED_MODULE_1__.NewPaymentMethodPage]
    })
], NewPaymentMethodPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_new-payment-method_new-payment-method_module_ts.js.map