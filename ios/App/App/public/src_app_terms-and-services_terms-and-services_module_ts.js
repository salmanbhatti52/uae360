"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_terms-and-services_terms-and-services_module_ts"],{

/***/ 513:
/*!*************************************************************************!*\
  !*** ./src/app/terms-and-services/terms-and-services-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndServicesPageRoutingModule": () => (/* binding */ TermsAndServicesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _terms_and_services_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-services.page */ 7149);




const routes = [
    {
        path: '',
        component: _terms_and_services_page__WEBPACK_IMPORTED_MODULE_0__.TermsAndServicesPage
    }
];
let TermsAndServicesPageRoutingModule = class TermsAndServicesPageRoutingModule {
};
TermsAndServicesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsAndServicesPageRoutingModule);



/***/ }),

/***/ 5629:
/*!*****************************************************************!*\
  !*** ./src/app/terms-and-services/terms-and-services.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndServicesPageModule": () => (/* binding */ TermsAndServicesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _terms_and_services_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-services-routing.module */ 513);
/* harmony import */ var _terms_and_services_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-services.page */ 7149);







let TermsAndServicesPageModule = class TermsAndServicesPageModule {
};
TermsAndServicesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _terms_and_services_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsAndServicesPageRoutingModule
        ],
        declarations: [_terms_and_services_page__WEBPACK_IMPORTED_MODULE_1__.TermsAndServicesPage]
    })
], TermsAndServicesPageModule);



/***/ }),

/***/ 7149:
/*!***************************************************************!*\
  !*** ./src/app/terms-and-services/terms-and-services.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndServicesPage": () => (/* binding */ TermsAndServicesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _terms_and_services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-services.page.html?ngResource */ 1358);
/* harmony import */ var _terms_and_services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-services.page.scss?ngResource */ 2990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let TermsAndServicesPage = class TermsAndServicesPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    gotoHomeBeforeLogin() {
        this.router.navigate(['/home-cars-after-login']);
    }
    gotoSignUp() {
        this.router.navigate(['/sign-up']);
    }
};
TermsAndServicesPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TermsAndServicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-terms-and-services',
        template: _terms_and_services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_terms_and_services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsAndServicesPage);



/***/ }),

/***/ 2990:
/*!****************************************************************************!*\
  !*** ./src/app/terms-and-services/terms-and-services.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  padding: 20px 0px 15px;\n  position: relative;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.heading {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  font-size: 20px;\n  color: #0F172A;\n  text-align: center;\n}\n\n.terms_description {\n  margin-top: 6px;\n  color: #B0B0B0;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  height: auto;\n  max-height: 260px;\n  overflow: hidden;\n}\n\n.sub_heading {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  color: #8000FF;\n}\n\n.accept_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 65%;\n  margin: 15px auto 0px;\n  --box-shadow:none;\n}\n\n.decline_button {\n  --border-radius: 0px;\n  --background: #FBFBFB;\n  height: 48px;\n  width: 65%;\n  margin: 12px auto 0px;\n  --border-style:solid;\n  --border-color:#FF0000;\n  --border-width:1px;\n  --box-shadow:none;\n}\n\n.accept_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: uppercase !important;\n}\n\n.decline_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: #FF0000;\n  text-transform: uppercase !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWFuZC1zZXJ2aWNlcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFx0ZXJtcy1hbmQtc2VydmljZXNcXHRlcm1zLWFuZC1zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxxQkFBQTtBQ0lKOztBREZBO0VBQ0MsdUJBQUE7QUNLRDs7QURIQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURMQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRE5BO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1VKOztBRFJBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNXSjs7QURUQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FDWUoiLCJmaWxlIjoidGVybXMtYW5kLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuIHBhZGRpbmc6MTVweCAxNnB4IDIwcHg7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRlcm1zX2Rlc2NyaXB0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgY29sb3I6ICNCMEIwQjA7XHJcbiAgICBmb250LWZhbWlseTogJ1VyYmFuaXN0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAyNjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnN1Yl9oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxufVxyXG4uYWNjZXB0X2J1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5kZWNsaW5lX2J1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMTJweCBhdXRvIDBweDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgLS1ib3JkZXItY29sb3I6I0ZGMDAwMDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOjFweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5hY2NlcHRfdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRlY2xpbmVfdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAwcHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTZweCAyMHB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzBGMTcyQTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVybXNfZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGNvbG9yOiAjQjBCMEIwO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdWJfaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MDAwRkY7XG59XG5cbi5hY2NlcHRfYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDE1cHggYXV0byAwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uZGVjbGluZV9idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMTJweCBhdXRvIDBweDtcbiAgLS1ib3JkZXItc3R5bGU6c29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiNGRjAwMDA7XG4gIC0tYm9yZGVyLXdpZHRoOjFweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5hY2NlcHRfdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmRlY2xpbmVfdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0ZGMDAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 1358:
/*!****************************************************************************!*\
  !*** ./src/app/terms-and-services/terms-and-services.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <div class=\"wrapper\">\n\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div style=\"text-align: center;\">\n        <img src=\"assets/images/privacy_policy.svg\" alt=\"\">\n      </div>\n    </div>\n\n    <div style=\"margin-top: 10px;\">\n      <div class=\"heading\">REVIEW TERMS</div>\n      <div class=\"heading\">OF SERVICE</div>\n    </div>\n\n    <div class=\"terms_description\">\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam \n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \n      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor \n      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed \n      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \n      <!-- Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor \n      sit amet -->\n    </div>\n\n    <div class=\"sub_heading\" style=\"margin-top: 8px;\">Terms of service</div>\n    <div class=\"sub_heading\" style=\"margin-top: 5px;\">Privacy policy</div>\n    <div class=\"sub_heading\" style=\"margin-top: 5px;\">Non-discrimination policy</div>\n\n    <div style=\"text-align: center;\">\n      <ion-button class=\"accept_button\" (click)=\"gotoHomeBeforeLogin()\">\n        <span class=\"accept_text\">ACCEPT</span>\n      </ion-button>\n    </div>\n    <div style=\"text-align: center;\">\n      <ion-button class=\"decline_button\"  (click)=\"gotoSignUp()\">\n        <span class=\"decline_text\" >DECLINE</span>\n      </ion-button>\n    </div>\n      \n    \n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_terms-and-services_terms-and-services_module_ts.js.map