"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booked_booked_module_ts"],{

/***/ 9098:
/*!*************************************************!*\
  !*** ./src/app/booked/booked-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedPageRoutingModule": () => (/* binding */ BookedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _booked_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booked.page */ 8242);




const routes = [
    {
        path: '',
        component: _booked_page__WEBPACK_IMPORTED_MODULE_0__.BookedPage
    }
];
let BookedPageRoutingModule = class BookedPageRoutingModule {
};
BookedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookedPageRoutingModule);



/***/ }),

/***/ 3615:
/*!*****************************************!*\
  !*** ./src/app/booked/booked.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedPageModule": () => (/* binding */ BookedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _booked_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booked-routing.module */ 9098);
/* harmony import */ var _booked_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booked.page */ 8242);







let BookedPageModule = class BookedPageModule {
};
BookedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _booked_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookedPageRoutingModule
        ],
        declarations: [_booked_page__WEBPACK_IMPORTED_MODULE_1__.BookedPage]
    })
], BookedPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_booked_booked_module_ts.js.map