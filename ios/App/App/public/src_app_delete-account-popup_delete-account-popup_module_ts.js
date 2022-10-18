"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_delete-account-popup_delete-account-popup_module_ts"],{

/***/ 43209:
/*!*****************************************************************************!*\
  !*** ./src/app/delete-account-popup/delete-account-popup-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteAccountPopupPageRoutingModule": () => (/* binding */ DeleteAccountPopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _delete_account_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-account-popup.page */ 43178);




const routes = [
    {
        path: '',
        component: _delete_account_popup_page__WEBPACK_IMPORTED_MODULE_0__.DeleteAccountPopupPage
    }
];
let DeleteAccountPopupPageRoutingModule = class DeleteAccountPopupPageRoutingModule {
};
DeleteAccountPopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeleteAccountPopupPageRoutingModule);



/***/ }),

/***/ 85010:
/*!*********************************************************************!*\
  !*** ./src/app/delete-account-popup/delete-account-popup.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteAccountPopupPageModule": () => (/* binding */ DeleteAccountPopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _delete_account_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-account-popup-routing.module */ 43209);
/* harmony import */ var _delete_account_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-account-popup.page */ 43178);







let DeleteAccountPopupPageModule = class DeleteAccountPopupPageModule {
};
DeleteAccountPopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _delete_account_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeleteAccountPopupPageRoutingModule
        ],
        declarations: [_delete_account_popup_page__WEBPACK_IMPORTED_MODULE_1__.DeleteAccountPopupPage]
    })
], DeleteAccountPopupPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_delete-account-popup_delete-account-popup_module_ts.js.map