"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-date_select-date_module_ts"],{

/***/ 3932:
/*!***********************************************************!*\
  !*** ./src/app/select-date/select-date-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDatePageRoutingModule": () => (/* binding */ SelectDatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _select_date_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-date.page */ 959);




const routes = [
    {
        path: '',
        component: _select_date_page__WEBPACK_IMPORTED_MODULE_0__.SelectDatePage
    }
];
let SelectDatePageRoutingModule = class SelectDatePageRoutingModule {
};
SelectDatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectDatePageRoutingModule);



/***/ }),

/***/ 5693:
/*!***************************************************!*\
  !*** ./src/app/select-date/select-date.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDatePageModule": () => (/* binding */ SelectDatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _select_date_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-date-routing.module */ 3932);
/* harmony import */ var _select_date_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-date.page */ 959);







let SelectDatePageModule = class SelectDatePageModule {
};
SelectDatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_date_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectDatePageRoutingModule
        ],
        declarations: [_select_date_page__WEBPACK_IMPORTED_MODULE_1__.SelectDatePage]
    })
], SelectDatePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_select-date_select-date_module_ts.js.map