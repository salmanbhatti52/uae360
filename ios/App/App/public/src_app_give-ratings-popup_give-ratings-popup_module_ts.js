"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_give-ratings-popup_give-ratings-popup_module_ts"],{

/***/ 18135:
/*!*************************************************************************!*\
  !*** ./src/app/give-ratings-popup/give-ratings-popup-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiveRatingsPopupPageRoutingModule": () => (/* binding */ GiveRatingsPopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _give_ratings_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./give-ratings-popup.page */ 37227);




const routes = [
    {
        path: '',
        component: _give_ratings_popup_page__WEBPACK_IMPORTED_MODULE_0__.GiveRatingsPopupPage
    }
];
let GiveRatingsPopupPageRoutingModule = class GiveRatingsPopupPageRoutingModule {
};
GiveRatingsPopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GiveRatingsPopupPageRoutingModule);



/***/ }),

/***/ 64524:
/*!*****************************************************************!*\
  !*** ./src/app/give-ratings-popup/give-ratings-popup.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiveRatingsPopupPageModule": () => (/* binding */ GiveRatingsPopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _give_ratings_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./give-ratings-popup-routing.module */ 18135);
/* harmony import */ var _give_ratings_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./give-ratings-popup.page */ 37227);







let GiveRatingsPopupPageModule = class GiveRatingsPopupPageModule {
};
GiveRatingsPopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _give_ratings_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.GiveRatingsPopupPageRoutingModule
        ],
        declarations: [_give_ratings_popup_page__WEBPACK_IMPORTED_MODULE_1__.GiveRatingsPopupPage]
    })
], GiveRatingsPopupPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_give-ratings-popup_give-ratings-popup_module_ts.js.map