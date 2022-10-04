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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 30px 16px 0px;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.apply_label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin-right: 5px;\n}\n\n.wrapper {\n  padding: 12px 16px 16px;\n}\n\nion-datetime.md {\n  --background: #FBFBFB;\n  color: #464646 !important;\n}\n\nion-datetime.ios {\n  color: #464646 !important;\n}\n\n.date_alignment {\n  display: flex;\n  justify-content: center;\n}\n\n.date_box {\n  border-radius: 5px;\n  border: 1px solid white;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.price_box {\n  padding: 8px 12.5px;\n  background: #FBFBFB;\n  border-radius: 5px;\n  border: 1px solid white;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  margin: 12px auto 12px;\n}\n\n.price_label {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.per_hour_span {\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\nhr {\n  border-bottom: 1px solid #EFEFEF !important;\n  border-top: 0px !important;\n  margin: 8px 0px 0px !important;\n  color: #EFEFEF !important;\n  opacity: 100% !important;\n}\n\n.ion_range {\n  --bar-height: 4px;\n  --bar-border-radius: 5.5px;\n  --bar-background-active: #8000FF;\n  padding: 0px;\n}\n\n.md .ion_range {\n  --knob-background: #8000FF;\n}\n\n.prices_div {\n  display: flex;\n  justify-content: space-between;\n  width: 65%;\n  margin: 0px auto;\n}\n\n.price {\n  color: #8D8D8D;\n  font-size: 12px;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 60%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcZmlsdGVyc1xcZmlsdGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEE7RUFDSSx1QkFBQTtBQ1FKOztBRE5BO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQ1NKOztBRFBBO0VBQ0kseUJBQUE7QUNVSjs7QURSQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ1dKOztBRFRBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0FDWUo7O0FEVkE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUNhSjs7QURYQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ2NKOztBRFpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDZUo7O0FEYkE7RUFDSSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ2lCSjs7QURmQTtFQUNJLDBCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUNvQko7O0FEbEJBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDcUJKOztBRG5CQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FDc0JKIiwiZmlsZSI6ImZpbHRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMHB4O1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQ0Y2RkY7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmFwcGx5X2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxMnB4IDE2cHggMTZweDtcclxufVxyXG5pb24tZGF0ZXRpbWUubWR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBjb2xvcjogIzQ2NDY0NiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1kYXRldGltZS5pb3N7XHJcbiAgICBjb2xvcjogIzQ2NDY0NiAhaW1wb3J0YW50O1xyXG59XHJcbi5kYXRlX2FsaWdubWVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZGF0ZV9ib3h7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbn1cclxuLnByaWNlX2JveHtcclxuICAgIHBhZGRpbmc6IDhweCAxMi41cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG4gICAgbWFyZ2luOiAxMnB4IGF1dG8gMTJweDtcclxufVxyXG4ucHJpY2VfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGVyX2hvdXJfc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVGRUYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA4cHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uaW9uX3Jhbmdle1xyXG4gICAgLS1iYXItaGVpZ2h0OiA0cHg7XHJcbiAgICAtLWJhci1ib3JkZXItcmFkaXVzOiA1LjVweDtcclxuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjODAwMEZGO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5tZCAuaW9uX3Jhbmdle1xyXG4gICAgLS1rbm9iLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbn1cclxuLnByaWNlc19kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLnByaWNlIHtcclxuICAgIGNvbG9yOiAjOEQ4RDhEO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmludml0ZV9idG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMHB4O1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkNGNkZGO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5hcHBseV9sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMTJweCAxNnB4IDE2cHg7XG59XG5cbmlvbi1kYXRldGltZS5tZCB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgY29sb3I6ICM0NjQ2NDYgIWltcG9ydGFudDtcbn1cblxuaW9uLWRhdGV0aW1lLmlvcyB7XG4gIGNvbG9yOiAjNDY0NjQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlX2FsaWdubWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGF0ZV9ib3gge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLnByaWNlX2JveCB7XG4gIHBhZGRpbmc6IDhweCAxMi41cHg7XG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBtYXJnaW46IDEycHggYXV0byAxMnB4O1xufVxuXG4ucHJpY2VfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGVyX2hvdXJfc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVGRUYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogOHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaW9uX3JhbmdlIHtcbiAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gIC0tYmFyLWJvcmRlci1yYWRpdXM6IDUuNXB4O1xuICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzgwMDBGRjtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubWQgLmlvbl9yYW5nZSB7XG4gIC0ta25vYi1iYWNrZ3JvdW5kOiAjODAwMEZGO1xufVxuXG4ucHJpY2VzX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLnByaWNlIHtcbiAgY29sb3I6ICM4RDhEOEQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaW52aXRlX2J0biB7XG4gIC0tYmFja2dyb3VuZDojODAwMEZGO1xuICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5idG4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */";

/***/ }),

/***/ 1513:
/*!******************************************************!*\
  !*** ./src/app/filters/filters.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"title\">Filter</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"date_alignment\">\n      <ion-datetime size=\"cover\" class=\"date_box\" presentation=\"date\"></ion-datetime> \n    </div>\n    <div class=\"price_box\">\n      <div><span class=\"price_label\">Price</span><span class=\"per_hour_span\">/day</span></div>\n      <hr>\n      <ion-range class=\"ion_range\" \n        min=\"0\" max=\"100\" [dualKnobs]=\"true\" \n        [value]=\"{ lower: 20, upper: 80 }\">\n      </ion-range>\n      <div class=\"prices_div\">\n        <div class=\"price\">$10</div>\n        <div class=\"price\">$250</div>\n      </div>\n    </div>\n    <div class=\"price_box\" style=\"margin-bottom: 0px;\">\n      <div><span class=\"price_label\">Price</span><span class=\"per_hour_span\">/month</span></div>\n      <hr>\n      <ion-range class=\"ion_range\" \n        min=\"0\" max=\"100\" [dualKnobs]=\"true\" \n        [value]=\"{ lower: 20, upper: 80 }\">\n      </ion-range>\n      <div class=\"prices_div\">\n        <div class=\"price\">$10</div>\n        <div class=\"price\">$250</div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div style=\"margin: 5px 0px 10px;\">\n    <div style=\"text-align: center;\">\n      <ion-button class=\"invite_btn\" (click)=\"gotoHomeAfterLogin()\">\n        <span class=\"btn-text\">Apply</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_filters_filters_module_ts.js.map