"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-date_select-date_module_ts-src_app_services_api_service_ts"],{

/***/ 43932:
/*!***********************************************************!*\
  !*** ./src/app/select-date/select-date-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDatePageRoutingModule": () => (/* binding */ SelectDatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _select_date_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-date.page */ 10959);




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

/***/ 95693:
/*!***************************************************!*\
  !*** ./src/app/select-date/select-date.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDatePageModule": () => (/* binding */ SelectDatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _select_date_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-date-routing.module */ 43932);
/* harmony import */ var _select_date_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-date.page */ 10959);







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



/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let ApiService = class ApiService {
  constructor(http, toastController, loadingCtrl) {
    this.http = http;
    this.toastController = toastController;
    this.loadingCtrl = loadingCtrl;
    this.baseURL = 'https://360uae.eigix.net/api';
    this.datesToDisable = [];
  }

  sendRequest(action, data) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.baseURL}/${action}`, JSON.stringify(data), {
      headers: header
    });
  }

  getData(action) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(`${this.baseURL}/${action}`, {
      headers: header
    });
  }

  presentToast(toastMsg) {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: toastMsg,
        duration: 2000
      });
      toast.present();
    })();
  }

  showLoading() {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingCtrl.create({
        duration: 3000
      });
      loading.present();
    })();
  }

  hideLoading() {
    this.loadingCtrl.dismiss();
  }

};

ApiService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
}];

ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ApiService);


/***/ })

}]);
//# sourceMappingURL=src_app_select-date_select-date_module_ts-src_app_services_api_service_ts.js.map