"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_filters_filters_module_ts"],{

/***/ 4089:
/*!***************************************************!*\
  !*** ./src/app/filters/filters-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersPageRoutingModule": () => (/* binding */ FiltersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.page */ 8587);




const routes = [
    {
        path: '',
        component: _filters_page__WEBPACK_IMPORTED_MODULE_0__.FiltersPage
    }
];
let FiltersPageRoutingModule = class FiltersPageRoutingModule {
};
FiltersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FiltersPageRoutingModule);



/***/ }),

/***/ 6076:
/*!*******************************************!*\
  !*** ./src/app/filters/filters.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersPageModule": () => (/* binding */ FiltersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _filters_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters-routing.module */ 4089);
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.page */ 8587);







let FiltersPageModule = class FiltersPageModule {
};
FiltersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filters_routing_module__WEBPACK_IMPORTED_MODULE_0__.FiltersPageRoutingModule
        ],
        declarations: [_filters_page__WEBPACK_IMPORTED_MODULE_1__.FiltersPage]
    })
], FiltersPageModule);



/***/ }),

/***/ 8587:
/*!*****************************************!*\
  !*** ./src/app/filters/filters.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersPage": () => (/* binding */ FiltersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _filters_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.page.html?ngResource */ 1513);
/* harmony import */ var _filters_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.page.scss?ngResource */ 42);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let FiltersPage = class FiltersPage {
    constructor(location, navCtrlr) {
        this.location = location;
        this.navCtrlr = navCtrlr;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    gotoHomeAfterLogin() {
        this.navCtrlr.navigateRoot('home-cars-after-login');
    }
};
FiltersPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
FiltersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-filters',
        template: _filters_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_filters_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FiltersPage);



/***/ }),

/***/ 42:
/*!******************************************************!*\
  !*** ./src/app/filters/filters.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 30px 16px 15px;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.apply_label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin-right: 5px;\n}\n\n.wrapper {\n  padding: 16px;\n}\n\nion-datetime.md {\n  --background: #FBFBFB;\n  color: #464646 !important;\n}\n\nion-datetime.ios {\n  color: #464646 !important;\n}\n\n.date_alignment {\n  display: flex;\n  justify-content: center;\n}\n\n.date_box {\n  border-radius: 5px;\n  border: 1px solid white;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.price_box {\n  padding: 10px 12.5px;\n  background: #FBFBFB;\n  border-radius: 5px;\n  border: 1px solid white;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  margin: 15px auto 5%;\n}\n\n.price_label {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.per_hour_span {\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\nhr {\n  border-bottom: 1px solid #EFEFEF !important;\n  border-top: 0px !important;\n  margin: 10px 0px 0px !important;\n  color: #EFEFEF !important;\n  opacity: 100% !important;\n}\n\n.ion_range {\n  --bar-height: 4px;\n  --bar-border-radius: 5.5px;\n  --bar-background-active: #8000FF;\n}\n\n.md .ion_range {\n  --knob-background: #8000FF;\n}\n\n.prices_div {\n  display: flex;\n  justify-content: space-between;\n  width: 62%;\n  margin: 0px auto;\n}\n\n.price {\n  color: #8D8D8D;\n  font-size: 12px;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 60%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcZmlsdGVyc1xcZmlsdGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEE7RUFDSSxhQUFBO0FDUUo7O0FETkE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDU0o7O0FEUEE7RUFDSSx5QkFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7QUNZSjs7QURWQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFFQSxvQkFBQTtBQ1lKOztBRFZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDYUo7O0FEWEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUNjSjs7QURaQTtFQUNJLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNlSjs7QURiQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQ2dCSjs7QURkQTtFQUNJLDBCQUFBO0FDaUJKOztBRGZBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQ21CSjs7QURqQkE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNvQko7O0FEbEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7QUNxQkoiLCJmaWxlIjoiZmlsdGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQ0Y2RkY7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmFwcGx5X2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxNnB4O1xyXG59XHJcbmlvbi1kYXRldGltZS5tZHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGNvbG9yOiAjNDY0NjQ2ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWRhdGV0aW1lLmlvc3tcclxuICAgIGNvbG9yOiAjNDY0NjQ2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRhdGVfYWxpZ25tZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kYXRlX2JveHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxufVxyXG4ucHJpY2VfYm94e1xyXG4gICAgcGFkZGluZzogMTBweCAxMi41cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG4gICAgLy8gd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDUlO1xyXG59XHJcbi5wcmljZV9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wZXJfaG91cl9zcGFue1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuaHJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRUZFRiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uaW9uX3Jhbmdle1xyXG4gICAgLS1iYXItaGVpZ2h0OiA0cHg7XHJcbiAgICAtLWJhci1ib3JkZXItcmFkaXVzOiA1LjVweDtcclxuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjODAwMEZGO1xyXG59XHJcbi5tZCAuaW9uX3Jhbmdle1xyXG4gICAgLS1rbm9iLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbn1cclxuLnByaWNlc19kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDYyJTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLnByaWNlIHtcclxuICAgIGNvbG9yOiAjOEQ4RDhEO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmludml0ZV9idG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZDRjZGRjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uYXBwbHlfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbmlvbi1kYXRldGltZS5tZCB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgY29sb3I6ICM0NjQ2NDYgIWltcG9ydGFudDtcbn1cblxuaW9uLWRhdGV0aW1lLmlvcyB7XG4gIGNvbG9yOiAjNDY0NjQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlX2FsaWdubWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGF0ZV9ib3gge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLnByaWNlX2JveCB7XG4gIHBhZGRpbmc6IDEwcHggMTIuNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gNSU7XG59XG5cbi5wcmljZV9sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wZXJfaG91cl9zcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRUZFRiAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaW9uX3JhbmdlIHtcbiAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gIC0tYmFyLWJvcmRlci1yYWRpdXM6IDUuNXB4O1xuICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzgwMDBGRjtcbn1cblxuLm1kIC5pb25fcmFuZ2Uge1xuICAtLWtub2ItYmFja2dyb3VuZDogIzgwMDBGRjtcbn1cblxuLnByaWNlc19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA2MiU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5wcmljZSB7XG4gIGNvbG9yOiAjOEQ4RDhEO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmludml0ZV9idG4ge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */";

/***/ }),

/***/ 1513:
/*!******************************************************!*\
  !*** ./src/app/filters/filters.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"title\">Filter</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"date_alignment\">\n      <ion-datetime size=\"cover\" class=\"date_box\" presentation=\"date\"></ion-datetime> \n    </div>\n    <div class=\"price_box\">\n      <div><span class=\"price_label\">Price</span><span class=\"per_hour_span\">/day</span></div>\n      <hr>\n      <ion-range class=\"ion_range\" \n        min=\"0\" max=\"100\" [dualKnobs]=\"true\" \n        [value]=\"{ lower: 20, upper: 80 }\">\n      </ion-range>\n      <div class=\"prices_div\">\n        <div class=\"price\">$10</div>\n        <div class=\"price\">$250</div>\n      </div>\n    </div>\n    <div class=\"price_box\">\n      <div><span class=\"price_label\">Price</span><span class=\"per_hour_span\">/month</span></div>\n      <hr>\n      <ion-range class=\"ion_range\" \n        min=\"0\" max=\"100\" [dualKnobs]=\"true\" \n        [value]=\"{ lower: 20, upper: 80 }\">\n      </ion-range>\n      <div class=\"prices_div\">\n        <div class=\"price\">$10</div>\n        <div class=\"price\">$250</div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div style=\"margin: 10px 0px 15px;\">\n    <div style=\"text-align: center;\">\n      <ion-button class=\"invite_btn\" (click)=\"gotoHomeAfterLogin()\">\n        <span class=\"btn-text\">Apply</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_filters_filters_module_ts.js.map