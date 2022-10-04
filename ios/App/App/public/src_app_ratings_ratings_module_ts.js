"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ratings_ratings_module_ts"],{

/***/ 6348:
/*!***************************************************!*\
  !*** ./src/app/ratings/ratings-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsPageRoutingModule": () => (/* binding */ RatingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ratings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings.page */ 5764);




const routes = [
    {
        path: '',
        component: _ratings_page__WEBPACK_IMPORTED_MODULE_0__.RatingsPage
    }
];
let RatingsPageRoutingModule = class RatingsPageRoutingModule {
};
RatingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RatingsPageRoutingModule);



/***/ }),

/***/ 1136:
/*!*******************************************!*\
  !*** ./src/app/ratings/ratings.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsPageModule": () => (/* binding */ RatingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ratings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings-routing.module */ 6348);
/* harmony import */ var _ratings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratings.page */ 5764);







let RatingsPageModule = class RatingsPageModule {
};
RatingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ratings_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatingsPageRoutingModule
        ],
        declarations: [_ratings_page__WEBPACK_IMPORTED_MODULE_1__.RatingsPage]
    })
], RatingsPageModule);



/***/ }),

/***/ 5764:
/*!*****************************************!*\
  !*** ./src/app/ratings/ratings.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsPage": () => (/* binding */ RatingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ratings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings.page.html?ngResource */ 8943);
/* harmony import */ var _ratings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratings.page.scss?ngResource */ 1464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let RatingsPage = class RatingsPage {
    constructor(location, navCtrlr) {
        this.location = location;
        this.navCtrlr = navCtrlr;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    homeTab() {
        this.navCtrlr.navigateRoot('home-cars-after-login');
    }
    messagesTab() {
        this.navCtrlr.navigateRoot('messages');
    }
    bookingTab() {
        this.navCtrlr.navigateRoot('bookings');
    }
    favoriteTab() {
        this.navCtrlr.navigateRoot('favorites');
    }
};
RatingsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
RatingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ratings',
        template: _ratings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ratings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatingsPage);



/***/ }),

/***/ 1464:
/*!******************************************************!*\
  !*** ./src/app/ratings/ratings.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 5px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 5px 16px 20px;\n}\n\n.rating_item {\n  display: flex;\n  align-items: center;\n  padding: 15px 12px 13px 12px;\n  border-radius: 5px;\n  background: #FBFBFB;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  margin-top: 15px;\n}\n\n.user_img {\n  margin-right: 18px;\n}\n\n.title_star_div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.user_title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  color: black;\n}\n\n.start_margin {\n  margin-right: 3.8px;\n}\n\n.item_text {\n  height: auto;\n  max-height: 32px;\n  overflow: hidden;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: #272727;\n  width: 95%;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZ3MucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxccmF0aW5nc1xccmF0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNNSjs7QURKQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBO0VBQ0ksbUJBQUE7QUNRSjs7QUROQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQWUsVUFBQTtBQ1VuQjs7QURSQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNZSiIsImZpbGUiOiJyYXRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVyYmFuaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9wcGluc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi8vIC5zaG93X3N0YXR1c3tcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4vLyAgICAgY29sb3I6ICMxMkQ4MDQ7XHJcbi8vIH1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6NXB4IDE2cHggMjBweDtcclxufVxyXG4ucmF0aW5nX2l0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTJweCAxM3B4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLnVzZXJfaW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG59XHJcbi50aXRsZV9zdGFyX2RpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnVzZXJfdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zdGFydF9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMuOHB4O1xyXG59XHJcbi5pdGVtX3RleHR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAzMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzI3MjcyNzt3aWR0aDogOTUlO1xyXG59XHJcbi5pb25fdGFiX2JhcntcclxuICAgIHBhZGRpbmc6IDhweCA4cHggMTJweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggcmdiKDAgMCAwIC8gMTYlKTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5idG5fbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNCMUE4Qjk7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcbiIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLnVyYmFuaXN0IHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBvcHBpbnMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDIwcHg7XG59XG5cbi5yYXRpbmdfaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMTJweCAxM3B4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi51c2VyX2ltZyB7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbn1cblxuLnRpdGxlX3N0YXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udXNlcl90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zdGFydF9tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDMuOHB4O1xufVxuXG4uaXRlbV90ZXh0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyNzI3Mjc7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5pb25fdGFiX2JhciB7XG4gIHBhZGRpbmc6IDhweCA4cHggMTJweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5idG5fbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNCMUE4Qjk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59Il19 */";

/***/ }),

/***/ 8943:
/*!******************************************************!*\
  !*** ./src/app/ratings/ratings.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Ratings</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"rating_item\" >\n      <img class=\"user_img\" src=\"assets/images/message_profile_dummy1.svg\" alt=\"\">\n      <div>\n        <div class=\"title_star_div\" >\n          <div class=\"user_title\" >Josh Gibson</div>\n          <div >\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"item_text\" >\n          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \n          eirmod tempor invidunt ut labore et dolore magna.\n        </div>\n      </div>\n    </div>\n    <!-- ==============================copy============================ -->\n    <div class=\"rating_item\" >\n      <img class=\"user_img\" src=\"assets/images/message_profile_dummy1.svg\" alt=\"\">\n      <div>\n        <div class=\"title_star_div\" >\n          <div class=\"user_title\" >Josh Gibson</div>\n          <div >\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"item_text\" >\n          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \n          eirmod tempor invidunt ut labore et dolore magna.\n        </div>\n      </div>\n    </div>\n    <!-- ==============================copy============================ -->\n    <div class=\"rating_item\" >\n      <img class=\"user_img\" src=\"assets/images/message_profile_dummy1.svg\" alt=\"\">\n      <div>\n        <div class=\"title_star_div\" >\n          <div class=\"user_title\" >Josh Gibson</div>\n          <div >\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"item_text\" >\n          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \n          eirmod tempor invidunt ut labore et dolore magna.\n        </div>\n      </div>\n    </div>\n    <!-- ==============================copy============================ -->\n    <div class=\"rating_item\" >\n      <img class=\"user_img\" src=\"assets/images/message_profile_dummy1.svg\" alt=\"\">\n      <div>\n        <div class=\"title_star_div\" >\n          <div class=\"user_title\" >Josh Gibson</div>\n          <div >\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            <img class=\"start_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"item_text\" >\n          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \n          eirmod tempor invidunt ut labore et dolore magna.\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-tabs style=\"display:contents ;\">\n\n    <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n      <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n        <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Home</ion-label>\n        <!-- <ion-badge>6</ion-badge> -->\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n        <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Messages</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n        <img src=\"assets/images/tab_icons/booking.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Booking</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n        <img src=\"assets/images/tab_icons/favorite.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Favorities</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n\n  </ion-tabs>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_ratings_ratings_module_ts.js.map