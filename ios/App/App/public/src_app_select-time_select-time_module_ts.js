"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-time_select-time_module_ts"],{

/***/ 73493:
/*!***********************************************************!*\
  !*** ./src/app/select-time/select-time-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectTimePageRoutingModule": () => (/* binding */ SelectTimePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _select_time_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-time.page */ 79226);




const routes = [
    {
        path: '',
        component: _select_time_page__WEBPACK_IMPORTED_MODULE_0__.SelectTimePage
    }
];
let SelectTimePageRoutingModule = class SelectTimePageRoutingModule {
};
SelectTimePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectTimePageRoutingModule);



/***/ }),

/***/ 64775:
/*!***************************************************!*\
  !*** ./src/app/select-time/select-time.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectTimePageModule": () => (/* binding */ SelectTimePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _select_time_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-time-routing.module */ 73493);
/* harmony import */ var _select_time_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-time.page */ 79226);







let SelectTimePageModule = class SelectTimePageModule {
};
SelectTimePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_time_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectTimePageRoutingModule
        ],
        declarations: [_select_time_page__WEBPACK_IMPORTED_MODULE_1__.SelectTimePage]
    })
], SelectTimePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_select-time_select-time_module_ts.js.map