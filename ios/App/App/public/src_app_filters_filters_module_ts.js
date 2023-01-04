"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_filters_filters_module_ts"],{

/***/ 44089:
/*!***************************************************!*\
  !*** ./src/app/filters/filters-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersPageRoutingModule": () => (/* binding */ FiltersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.page */ 58587);




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

/***/ 46076:
/*!*******************************************!*\
  !*** ./src/app/filters/filters.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersPageModule": () => (/* binding */ FiltersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _filters_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters-routing.module */ 44089);
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.page */ 58587);







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

/***/ 58587:
/*!*****************************************!*\
  !*** ./src/app/filters/filters.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersPage": () => (/* binding */ FiltersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _filters_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.page.html?ngResource */ 81513);
/* harmony import */ var _filters_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.page.scss?ngResource */ 60042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);









let FiltersPage = class FiltersPage {
    constructor(location, navCtrlr, checkUser, api, router) {
        this.location = location;
        this.navCtrlr = navCtrlr;
        this.checkUser = checkUser;
        this.api = api;
        this.router = router;
        this.result = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
    }
    goBack() {
        this.location.back();
    }
    onIonChangePerDay(event) {
        console.log("EventForDay: ", event);
        this.rentCostDayStart = event.detail.value.lower;
        this.rentCostDayEnd = event.detail.value.upper;
        console.log("rent_cost_day_start", this.rentCostDayStart);
        console.log("rent_cost_day_end", this.rentCostDayEnd);
    }
    onIonChangePerMonth(event) {
        console.log("EventForMonth: ", event);
        this.rentCostMonthStart = event.detail.value.lower;
        this.rentCostMonthEnd = event.detail.value.upper;
        console.log("rent_cost_month_start", this.rentCostMonthStart);
        console.log("rent_cost_month_end", this.rentCostMonthEnd);
    }
    applyFilter() {
        this.result = [];
        if (this.checkUser.appUserId == null) {
            this.navCtrlr.navigateForward('sign-in');
        }
        else if (this.checkUser.appUserId != null) {
            console.log("rent_cost_day_start", this.rentCostDayStart);
            console.log("rent_cost_day_end", this.rentCostDayEnd);
            console.log("rent_cost_month_start", this.rentCostMonthStart);
            console.log("rent_cost_month_end", this.rentCostMonthEnd);
            if (this.rentCostDayStart == undefined) {
                this.api.presentToast("Plz specify your range for day");
            }
            else if (this.rentCostMonthStart == undefined) {
                this.api.presentToast("Plz specify your range for month");
            }
            else {
                let data = {
                    users_customers_id: this.checkUser.appUserId,
                    rent_cost_day_start: this.rentCostDayStart,
                    rent_cost_day_end: this.rentCostDayEnd,
                    rent_cost_month_start: this.rentCostMonthStart,
                    rent_cost_month_end: this.rentCostMonthEnd
                };
                this.api.showLoading();
                this.api.sendRequest('getCarsByFilters', data).subscribe((res) => {
                    this.api.hideLoading();
                    console.log('Response: ', res);
                    if (res.status == 'success') {
                        this.result = res.data;
                    }
                    else if (res.status == 'error') {
                        if (res.message == 'Cars are empty.') {
                            this.api.presentToast('No car found in this range.');
                        }
                    }
                }, (err) => {
                    this.api.hideLoading();
                    console.log("API call Error: ", err);
                });
            }
        }
        else {
        }
    }
    gotoCarDetails(car_id) {
        let data = {
            car_id: car_id,
            user_id: this.checkUser.appUserId
        };
        this.api.showLoading();
        this.api.sendRequest('getCarsById', data).subscribe((res) => {
            this.api.hideLoading();
            console.log('api response:', res);
            if (res.status == 'success') {
                this.api.carDataById = res.data;
                console.log('carDataById:', this.api.carDataById);
                this.router.navigate(['/car-details']);
            }
        }, (err) => {
            this.api.hideLoading();
            console.log(err);
        });
    }
};
FiltersPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_2__.CheckUserService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
FiltersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-filters',
        template: _filters_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_filters_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FiltersPage);



/***/ }),

/***/ 60042:
/*!******************************************************!*\
  !*** ./src/app/filters/filters.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.header_footer_bg {\n  background-color: #FBFBFB !important;\n}\n\n.content_background {\n  --background: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 30px 16px 0px;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.apply_label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin-right: 5px;\n}\n\n.wrapper {\n  padding: 12px 16px 16px;\n}\n\nion-datetime.md {\n  --background: #FBFBFB;\n  color: #464646 !important;\n}\n\nion-datetime.ios {\n  color: #464646 !important;\n}\n\n.date_alignment {\n  display: flex;\n  justify-content: center;\n}\n\n.date_box {\n  border-radius: 5px;\n  border: 1px solid white;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.price_box {\n  padding: 8px 12.5px;\n  background: #FBFBFB;\n  border-radius: 5px;\n  border: 1px solid white;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  margin: 12px auto 12px;\n}\n\n.selected_range {\n  font-size: 12px;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n  color: black;\n  margin-bottom: 5px;\n  text-align: center;\n}\n\n.price_label {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.per_hour_span {\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\nhr {\n  border-bottom: 1px solid #EFEFEF !important;\n  border-top: 0px !important;\n  margin: 8px 0px 0px !important;\n  color: #EFEFEF !important;\n  opacity: 100% !important;\n}\n\n.ion_range {\n  --bar-height: 4px;\n  --bar-border-radius: 5.5px;\n  --bar-background-active: #8000FF;\n  padding: 0px;\n  margin-top: 5px;\n}\n\n.ion_range.md {\n  --pin-background: #8000FF;\n  --knob-background: #8000FF;\n}\n\n.prices_div {\n  display: flex;\n  justify-content: space-between;\n  width: 65%;\n  margin: 0px auto;\n}\n\n.price {\n  color: #8D8D8D;\n  font-size: 12px;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.star_margin {\n  margin-right: 3.8px;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.heart_icon {\n  position: absolute;\n  right: 5%;\n  top: 5%;\n}\n\n.car_div {\n  text-align: center;\n  margin-top: 13px;\n  position: relative;\n}\n\n.car_image {\n  object-fit: cover;\n  width: 100%;\n  height: 200px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.left_subdiv {\n  text-align: left;\n  line-height: 1;\n  margin-top: 3px;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 60%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcZmlsdGVyc1xcZmlsdGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEQUE7RUFDSSxvQ0FBQTtBQ0dKOztBRERBO0VBQ0ksZ0NBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QUROQTtFQUNJLHVCQUFBO0FDU0o7O0FEUEE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDVUo7O0FEUkE7RUFDSSx5QkFBQTtBQ1dKOztBRFRBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDWUo7O0FEVkE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7QUNhSjs7QURYQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQ2NKOztBRFpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2VKOztBRGJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDaUJKOztBRGZBO0VBQ0ksMkNBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ21CSjs7QURqQkE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FDb0JKOztBRGxCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3FCSjs7QURuQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUNzQko7O0FEbkJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBRUEsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ3FCSjs7QURuQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDc0JKOztBRHBCQTtFQUNJLG1CQUFBO0FDdUJKOztBRHJCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3dCSjs7QUR0QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDeUJKOztBRHZCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQzBCSjs7QUR4QkE7RUFDSSxrQkFBQTtFQUFtQixTQUFBO0VBQVUsT0FBQTtBQzZCakM7O0FEM0JBO0VBQ0ksa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0Isa0JBQUE7QUNnQzFDOztBRDlCQTtFQUNJLGlCQUFBO0VBQWtCLFdBQUE7RUFBWSxhQUFBO0VBQWUsZ0NBQUE7QUNvQ2pEOztBRGxDQTtFQUNJLGdCQUFBO0VBQWlCLGNBQUE7RUFBZSxlQUFBO0FDdUNwQzs7QURuQ0E7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNzQ0o7O0FEcENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7QUN1Q0oiLCJmaWxlIjoiZmlsdGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyX2Zvb3Rlcl9iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4uY29udGVudF9iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDBweDtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkNGNkZGO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5hcHBseV9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MTJweCAxNnB4IDE2cHg7XHJcbn1cclxuaW9uLWRhdGV0aW1lLm1ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgY29sb3I6ICM0NjQ2NDYgIWltcG9ydGFudDtcclxufVxyXG5pb24tZGF0ZXRpbWUuaW9ze1xyXG4gICAgY29sb3I6ICM0NjQ2NDYgIWltcG9ydGFudDtcclxufVxyXG4uZGF0ZV9hbGlnbm1lbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmRhdGVfYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcbi5wcmljZV9ib3h7XHJcbiAgICBwYWRkaW5nOiA4cHggMTIuNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIG1hcmdpbjogMTJweCBhdXRvIDEycHg7XHJcbn1cclxuLnNlbGVjdGVkX3Jhbmdle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJpY2VfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGVyX2hvdXJfc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVGRUYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA4cHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uaW9uX3Jhbmdle1xyXG4gICAgLS1iYXItaGVpZ2h0OiA0cHg7XHJcbiAgICAtLWJhci1ib3JkZXItcmFkaXVzOiA1LjVweDtcclxuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjODAwMEZGO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5pb25fcmFuZ2UubWR7XHJcbiAgICAtLXBpbi1iYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgLS1rbm9iLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbn1cclxuLnByaWNlc19kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLnByaWNlIHtcclxuICAgIGNvbG9yOiAjOEQ4RDhEO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLy8gPT09PT09PXNlYXJjaCByZXN1bHQgY2FycyBjc3M9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5jYXJfaW5mb19ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogIzBGMTcyQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiA5cHggMTJweCA4LjVweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcl9uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3Rhcl9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMuOHB4O1xyXG59XHJcbi5yYXRpbmdfdmFsdWV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI0Q0RENFMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5jYXIyX3ByaWNle1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyMl9pbmZvX3N1YmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5oZWFydF9pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiA1JTt0b3A6IDUlO1xyXG59XHJcbi5jYXJfZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAxM3B4OyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcl9pbWFnZXtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO3dpZHRoOiAxMDAlO2hlaWdodDogMjAwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG59XHJcbi5sZWZ0X3N1YmRpdntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7bGluZS1oZWlnaHQ6IDE7bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PWRvbmU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4uaW52aXRlX2J0bntcclxuICAgIC0tYmFja2dyb3VuZDojODAwMEZGO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG4tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXJfZm9vdGVyX2JnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudF9iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMwcHggMTZweCAwcHg7XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQ0Y2RkY7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmFwcGx5X2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxMnB4IDE2cHggMTZweDtcbn1cblxuaW9uLWRhdGV0aW1lLm1kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBjb2xvcjogIzQ2NDY0NiAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUuaW9zIHtcbiAgY29sb3I6ICM0NjQ2NDYgIWltcG9ydGFudDtcbn1cblxuLmRhdGVfYWxpZ25tZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXRlX2JveCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4ucHJpY2VfYm94IHtcbiAgcGFkZGluZzogOHB4IDEyLjVweDtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIG1hcmdpbjogMTJweCBhdXRvIDEycHg7XG59XG5cbi5zZWxlY3RlZF9yYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpY2VfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGVyX2hvdXJfc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVGRUYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogOHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaW9uX3JhbmdlIHtcbiAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gIC0tYmFyLWJvcmRlci1yYWRpdXM6IDUuNXB4O1xuICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzgwMDBGRjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pb25fcmFuZ2UubWQge1xuICAtLXBpbi1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICAtLWtub2ItYmFja2dyb3VuZDogIzgwMDBGRjtcbn1cblxuLnByaWNlc19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5wcmljZSB7XG4gIGNvbG9yOiAjOEQ4RDhEO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNhcl9pbmZvX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzBGMTcyQTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyX25hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdGFyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMy44cHg7XG59XG5cbi5yYXRpbmdfdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uY2FyMl9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyMl9pbmZvX3N1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFydF9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG4gIHRvcDogNSU7XG59XG5cbi5jYXJfZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJfaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuXG4ubGVmdF9zdWJkaXYge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uaW52aXRlX2J0biB7XG4gIC0tYmFja2dyb3VuZDojODAwMEZGO1xuICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5idG4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */";

/***/ }),

/***/ 81513:
/*!******************************************************!*\
  !*** ./src/app/filters/filters.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [class.header_footer_bg]=\"checkUser.appUserId != null\">\n  <ion-toolbar class=\"bgtoolbar\" [class.content_background]=\"checkUser.appUserId != null\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"title\">Filter</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.content_background]=\"checkUser.appUserId != null\">\n  <div class=\"wrapper\">\n    <!-- <div class=\"date_alignment\">\n      <ion-datetime size=\"cover\" class=\"date_box\" presentation=\"date\"></ion-datetime> \n    </div> -->\n    <div class=\"price_box\">\n      <div><span class=\"price_label\">Price</span><span class=\"per_hour_span\">/day</span></div>\n      <hr>\n      <ion-range (ionChange)=\"onIonChangePerDay($event)\" [pin]=\"true\" [pinFormatter]=\"pinFormatter\" class=\"ion_range\" \n      min=\"10\" max=\"500\" [dualKnobs]=\"true\" \n      [value]=\"{ lower: 20, upper: 200 }\">\n    </ion-range>\n    \n    <div class=\"selected_range\" *ngIf=\"rentCostDayStart != undefined && rentCostDayEnd  != undefined\"> ${{rentCostDayStart}} - ${{rentCostDayEnd}}</div>\n      <div class=\"prices_div\">\n        <div class=\"price\">$10</div>\n        <div class=\"price\">$500</div>\n      </div>\n    </div>\n    <div class=\"price_box\" style=\"margin-bottom: 0px;\">\n      <div><span class=\"price_label\">Price</span><span class=\"per_hour_span\">/month</span></div>\n      <hr>\n      <ion-range (ionChange)=\"onIonChangePerMonth($event)\" [pin]=\"true\" [pinFormatter]=\"pinFormatter\" class=\"ion_range\" \n      min=\"50\" max=\"3000\" [dualKnobs]=\"true\" \n      [value]=\"{ lower: 100, upper: 1000 }\">\n    </ion-range>\n    <div class=\"selected_range\" *ngIf=\"rentCostMonthStart != undefined && rentCostMonthEnd  != undefined\"> ${{rentCostMonthStart}} - ${{rentCostMonthEnd}}</div>\n    <div class=\"prices_div\">\n        <div class=\"price\">$50</div>\n        <div class=\"price\">$3000</div>\n      </div>\n    </div>\n    <div  *ngIf=\"result.length > 0\">\n      <div *ngFor=\"let res of result\">\n        <div class=\"car_div\" (click)=\"gotoCarDetails(res.car_id)\" >\n          <img class=\"car_image\" src=\"{{api.imageUrlString}}{{res.image1}}\" alt=\"\">\n          \n          <img class=\"heart_icon\"  src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"res.favourite_status != 'liked'\">\n          <img class=\"heart_icon\"  src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"res.favourite_status == 'liked'\">\n          <div class=\"car_info_box\" >\n            <div>\n              <div class=\"car_name poppins\">{{res.vehical_name}}</div>\n              <div class=\"left_subdiv\" >\n                <span *ngIf=\"res.rating == 0 \">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=1 && res.rating < 1.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=1.5 && res.rating < 2.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=2.5 && res.rating < 3.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=3.5 && res.rating < 4.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=4.5 && res.rating < 5.1\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                </span>\n                <span class=\"rating_value poppins\">{{res.total_bookings}} trips</span>\n              </div>\n            </div>\n            <div class=\"car2_info_subdiv\">\n              <div style=\"line-height: 1;\"><span class=\"car2_price poppins\" >$</span><span class=\"car2_price poppins\" style=\"font-size: 32px;margin-right: 8px;\">{{res.rent_cost_day}}</span><span class=\"car2_price poppins\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n      \n      \n    </div>\n\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\" [class.header_footer_bg]=\"checkUser.appUserId != null\">\n  <div style=\"margin: 5px 0px 10px;\">\n    <div style=\"text-align: center;\">\n      <ion-button class=\"invite_btn\" (click)=\"applyFilter()\">\n        <span class=\"btn-text\">Apply</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_filters_filters_module_ts.js.map