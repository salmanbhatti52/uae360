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
            // console.log();
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
            // this.navCtrlr.navigateRoot('home-cars-after-login');
        }
        else {
        }
    }
    gotoCarDetails(car_id) {
        // this.showContent = false;
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
                // if(!res.data.favourite_status){
                //   console.log("Favorite status not found");
                //   this.api.favorite_status = false;
                // }
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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.header_footer_bg {\n  background-color: #FBFBFB !important;\n}\n\n.content_background {\n  --background: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 30px 16px 0px;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0px auto;\n}\n\n.apply_label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n  margin-right: 5px;\n}\n\n.wrapper {\n  padding: 12px 16px 16px;\n}\n\nion-datetime.md {\n  --background: #FBFBFB;\n  color: #464646 !important;\n}\n\nion-datetime.ios {\n  color: #464646 !important;\n}\n\n.date_alignment {\n  display: flex;\n  justify-content: center;\n}\n\n.date_box {\n  border-radius: 5px;\n  border: 1px solid white;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.price_box {\n  padding: 8px 12.5px;\n  background: #FBFBFB;\n  border-radius: 5px;\n  border: 1px solid white;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  margin: 12px auto 12px;\n}\n\n.selected_range {\n  font-size: 12px;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n  color: black;\n  margin-bottom: 5px;\n  text-align: center;\n}\n\n.price_label {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.per_hour_span {\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\nhr {\n  border-bottom: 1px solid #EFEFEF !important;\n  border-top: 0px !important;\n  margin: 8px 0px 0px !important;\n  color: #EFEFEF !important;\n  opacity: 100% !important;\n}\n\n.ion_range {\n  --bar-height: 4px;\n  --bar-border-radius: 5.5px;\n  --bar-background-active: #8000FF;\n  padding: 0px;\n  margin-top: 5px;\n}\n\n.ion_range.md {\n  --pin-background: #8000FF;\n  --knob-background: #8000FF;\n}\n\n.prices_div {\n  display: flex;\n  justify-content: space-between;\n  width: 65%;\n  margin: 0px auto;\n}\n\n.price {\n  color: #8D8D8D;\n  font-size: 12px;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 60%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcZmlsdGVyc1xcZmlsdGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNPSjs7QURKQTtFQUNJLG9DQUFBO0FDT0o7O0FETEE7RUFDSSxnQ0FBQTtBQ1FKOztBRE5BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ1NKOztBRFBBO0VBQ0kscUJBQUE7QUNVSjs7QURSQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDV0o7O0FEVEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ1lKOztBRFZBO0VBQ0ksdUJBQUE7QUNhSjs7QURYQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNjSjs7QURaQTtFQUNJLHlCQUFBO0FDZUo7O0FEYkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNnQko7O0FEZEE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7QUNpQko7O0FEZkE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUNrQko7O0FEaEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUNvQko7O0FEbEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDcUJKOztBRG5CQTtFQUNJLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNzQko7O0FEcEJBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUN1Qko7O0FEckJBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQ3dCSjs7QUR0QkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FDMEJKOztBRHhCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQzJCSjs7QUR6QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtBQzRCSiIsImZpbGUiOiJmaWx0ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojRkNGNkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gPT09PT09PXNlYXJjaCByZXN1bHQgY2FycyBjc3M9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5jYXJfaW5mb19ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogIzBGMTcyQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiA5cHggMTJweCA4LjVweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcl9uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3Rhcl9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4ucmF0aW5nX3ZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4uY2FyMl9wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhcjJfaW5mb19zdWJkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT1kb25lPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uaGVhZGVyX2Zvb3Rlcl9iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4uY29udGVudF9iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDBweDtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkNGNkZGO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5hcHBseV9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MTJweCAxNnB4IDE2cHg7XHJcbn1cclxuaW9uLWRhdGV0aW1lLm1ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgY29sb3I6ICM0NjQ2NDYgIWltcG9ydGFudDtcclxufVxyXG5pb24tZGF0ZXRpbWUuaW9ze1xyXG4gICAgY29sb3I6ICM0NjQ2NDYgIWltcG9ydGFudDtcclxufVxyXG4uZGF0ZV9hbGlnbm1lbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmRhdGVfYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcbi5wcmljZV9ib3h7XHJcbiAgICBwYWRkaW5nOiA4cHggMTIuNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIG1hcmdpbjogMTJweCBhdXRvIDEycHg7XHJcbn1cclxuLnNlbGVjdGVkX3Jhbmdle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJpY2VfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGVyX2hvdXJfc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVGRUYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA4cHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uaW9uX3Jhbmdle1xyXG4gICAgLS1iYXItaGVpZ2h0OiA0cHg7XHJcbiAgICAtLWJhci1ib3JkZXItcmFkaXVzOiA1LjVweDtcclxuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjODAwMEZGO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5pb25fcmFuZ2UubWR7XHJcbiAgICAtLXBpbi1iYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgLS1rbm9iLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbn1cclxuLnByaWNlc19kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLnByaWNlIHtcclxuICAgIGNvbG9yOiAjOEQ4RDhEO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmludml0ZV9idG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG4uY2FyX2luZm9fYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogOXB4IDEycHggOC41cHggMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0YXJfbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5yYXRpbmdfdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uY2FyMl9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyMl9pbmZvX3N1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXJfZm9vdGVyX2JnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudF9iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMwcHggMTZweCAwcHg7XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQ0Y2RkY7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmFwcGx5X2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxMnB4IDE2cHggMTZweDtcbn1cblxuaW9uLWRhdGV0aW1lLm1kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBjb2xvcjogIzQ2NDY0NiAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUuaW9zIHtcbiAgY29sb3I6ICM0NjQ2NDYgIWltcG9ydGFudDtcbn1cblxuLmRhdGVfYWxpZ25tZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXRlX2JveCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4ucHJpY2VfYm94IHtcbiAgcGFkZGluZzogOHB4IDEyLjVweDtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIG1hcmdpbjogMTJweCBhdXRvIDEycHg7XG59XG5cbi5zZWxlY3RlZF9yYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpY2VfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGVyX2hvdXJfc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVGRUYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogOHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaW9uX3JhbmdlIHtcbiAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gIC0tYmFyLWJvcmRlci1yYWRpdXM6IDUuNXB4O1xuICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzgwMDBGRjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pb25fcmFuZ2UubWQge1xuICAtLXBpbi1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICAtLWtub2ItYmFja2dyb3VuZDogIzgwMDBGRjtcbn1cblxuLnByaWNlc19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5wcmljZSB7XG4gIGNvbG9yOiAjOEQ4RDhEO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmludml0ZV9idG4ge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */";

/***/ }),

/***/ 81513:
/*!******************************************************!*\
  !*** ./src/app/filters/filters.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [class.header_footer_bg]=\"checkUser.appUserId != null\">\n  <ion-toolbar class=\"bgtoolbar\" [class.content_background]=\"checkUser.appUserId != null\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"title\">Filter</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.content_background]=\"checkUser.appUserId != null\">\n  <div class=\"wrapper\">\n    <!-- <div class=\"date_alignment\">\n      <ion-datetime size=\"cover\" class=\"date_box\" presentation=\"date\"></ion-datetime> \n    </div> -->\n    <div class=\"price_box\">\n      <div><span class=\"price_label\">Price</span><span class=\"per_hour_span\">/day</span></div>\n      <hr>\n      <ion-range (ionChange)=\"onIonChangePerDay($event)\" [pin]=\"true\" [pinFormatter]=\"pinFormatter\" class=\"ion_range\" \n      min=\"10\" max=\"500\" [dualKnobs]=\"true\" \n      [value]=\"{ lower: 20, upper: 200 }\">\n    </ion-range>\n    \n    <div class=\"selected_range\" *ngIf=\"rentCostDayStart != undefined && rentCostDayEnd  != undefined\"> ${{rentCostDayStart}} - ${{rentCostDayEnd}}</div>\n      <div class=\"prices_div\">\n        <div class=\"price\">$10</div>\n        <div class=\"price\">$500</div>\n      </div>\n    </div>\n    <div class=\"price_box\" style=\"margin-bottom: 0px;\">\n      <div><span class=\"price_label\">Price</span><span class=\"per_hour_span\">/month</span></div>\n      <hr>\n      <ion-range (ionChange)=\"onIonChangePerMonth($event)\" [pin]=\"true\" [pinFormatter]=\"pinFormatter\" class=\"ion_range\" \n      min=\"50\" max=\"3000\" [dualKnobs]=\"true\" \n      [value]=\"{ lower: 100, upper: 1000 }\">\n    </ion-range>\n    <div class=\"selected_range\" *ngIf=\"rentCostMonthStart != undefined && rentCostMonthEnd  != undefined\"> ${{rentCostMonthStart}} - ${{rentCostMonthEnd}}</div>\n    <div class=\"prices_div\">\n        <div class=\"price\">$50</div>\n        <div class=\"price\">$3000</div>\n      </div>\n    </div>\n    <div  *ngIf=\"result.length > 0\">\n      <div *ngFor=\"let res of result\">\n        <div style=\"text-align: center; margin-top: 13px; position: relative;\" (click)=\"gotoCarDetails(res.car_id)\" >\n          <img style=\"object-fit: cover;width: 100%;height: 200px; border-radius: 10px 10px 0px 0px;\" src=\"{{api.imageUrlString}}{{res.image1}}\" alt=\"\">\n          <!-- *ngIf=\"favorites == 'dislike'\" -->\n          <img style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"res.favourite_status != 'liked'\">\n          <!-- (click)=\"makeUnFavorite(favorite.car_id)\" -->\n          <img  style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"res.favourite_status == 'liked'\">\n          <div class=\"car_info_box\" >\n            <div>\n              <div class=\"car_name poppins\">{{res.vehical_name}}</div>\n              <div style=\"text-align: left;line-height: 1;margin-top: 3px;\">\n                <span *ngIf=\"res.rating == 0 \">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=1 && res.rating < 1.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=1.5 && res.rating < 2.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=2.5 && res.rating < 3.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=3.5 && res.rating < 4.5\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                </span>\n                <span *ngIf=\"res.rating >=4.5 && res.rating < 5.1\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                  <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                </span>\n                <span class=\"rating_value poppins\">{{res.total_bookings}} trips</span>\n              </div>\n            </div>\n            <div class=\"car2_info_subdiv\">\n              <div style=\"line-height: 1;\"><span class=\"car2_price poppins\" >$</span><span class=\"car2_price poppins\" style=\"font-size: 32px;margin-right: 8px;\">{{res.rent_cost_day}}</span><span class=\"car2_price poppins\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n      \n      \n    </div>\n\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\" [class.header_footer_bg]=\"checkUser.appUserId != null\">\n  <div style=\"margin: 5px 0px 10px;\">\n    <div style=\"text-align: center;\">\n      <ion-button class=\"invite_btn\" (click)=\"applyFilter()\">\n        <span class=\"btn-text\">Apply</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_filters_filters_module_ts.js.map