"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home-before-login_home-before-login_module_ts"],{

/***/ 5773:
/*!***********************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeBeforeLoginPageRoutingModule": () => (/* binding */ HomeBeforeLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_before_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-before-login.page */ 8445);




const routes = [
    {
        path: '',
        component: _home_before_login_page__WEBPACK_IMPORTED_MODULE_0__.HomeBeforeLoginPage
    }
];
let HomeBeforeLoginPageRoutingModule = class HomeBeforeLoginPageRoutingModule {
};
HomeBeforeLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomeBeforeLoginPageRoutingModule);



/***/ }),

/***/ 803:
/*!***************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeBeforeLoginPageModule": () => (/* binding */ HomeBeforeLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-before-login-routing.module */ 5773);
/* harmony import */ var _home_before_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-before-login.page */ 8445);







let HomeBeforeLoginPageModule = class HomeBeforeLoginPageModule {
};
HomeBeforeLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeBeforeLoginPageRoutingModule
        ],
        declarations: [_home_before_login_page__WEBPACK_IMPORTED_MODULE_1__.HomeBeforeLoginPage]
    })
], HomeBeforeLoginPageModule);



/***/ }),

/***/ 8445:
/*!*************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeBeforeLoginPage": () => (/* binding */ HomeBeforeLoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-before-login.page.html?ngResource */ 1080);
/* harmony import */ var _home_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-before-login.page.scss?ngResource */ 1840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-user.service */ 7852);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 5041);








let HomeBeforeLoginPage = class HomeBeforeLoginPage {
    constructor(router, api, checkUser, appComponent) {
        this.router = router;
        this.api = api;
        this.checkUser = checkUser;
        this.appComponent = appComponent;
        this.totalNotifications = 6;
        this.item1 = true;
        this.item2 = false;
        this.item3 = false;
        this.item4 = false;
        this.item5 = false;
        this.slideOpts2 = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 4.4,
            // spaceBetween : 9,
        };
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1.4,
            spaceBetween: 9,
        };
        this.showCategories = false;
        this.rentCategories = [{ category: 'Day' }, { category: 'Month' }];
        this.categoryVal = 'Day';
        // category
        // pickups = [
        //   {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
        //   {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
        //   {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
        //   {img:'assets/images/card2_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269},
        //   {img:'assets/images/card1_car.svg', name:'BMW 2 SERIES, 2016', price:26, total_trips:269}
        // ]
        this.pickups = [];
        this.selectedCarID = 0;
    }
    displayCategories(car_id) {
        if (car_id != null) {
        }
        if (car_id != null) {
            this.showCategories = true;
        }
        else {
            this.showCategories = false;
        }
    }
    selectedCategory(val, id) {
        console.log(val);
        console.log('iiiii', id);
        this.selectedCarID = id;
        console.log('fffff', this.selectedCarID);
        this.categoryVal = val;
    }
    ngOnInit() {
        console.log(this.checkUser.appUserId);
        this.checkUser.checkUser();
        console.log(this.checkUser.appPages);
        this.appComponent.appPages = this.checkUser.appPages;
        this.getCars();
    }
    getCars() {
        this.api.showLoading();
        this.api.getData('cars').subscribe((res) => {
            console.log(res);
            if (res.status == 'success') {
                console.log(res.data);
                this.api.hideLoading();
                this.pickups = res.data;
            }
        }, (err) => {
            this.api.hideLoading();
            console.log(err);
        });
    }
    gotoFilter() {
        this.router.navigate(['/filters']);
    }
    gotoCarDetails(car_id) {
        // let data = {
        //   car_id: car_id
        // }
        // this.api.sendData_GetData('getCarsById',JSON.stringify(data)).subscribe((res:any)=>{
        //   console.log(res);
        // },(err)=>{
        //   console.log(err);
        // })
        this.router.navigate(['/car-details']);
    }
    selectItem(itemVal) {
        if (itemVal == 1) {
            this.item1 = true;
            this.item2 = false;
            this.item3 = false;
            this.item4 = false;
            this.item5 = false;
        }
        else if (itemVal == 2) {
            this.item1 = false;
            this.item2 = true;
            this.item3 = false;
            this.item4 = false;
            this.item5 = false;
        }
        else if (itemVal == 3) {
            this.item1 = false;
            this.item2 = false;
            this.item3 = true;
            this.item4 = false;
            this.item5 = false;
        }
        else if (itemVal == 4) {
            this.item1 = false;
            this.item2 = false;
            this.item3 = false;
            this.item4 = true;
            this.item5 = false;
        }
        else if (itemVal == 5) {
            this.item1 = false;
            this.item2 = false;
            this.item3 = false;
            this.item4 = false;
            this.item5 = true;
        }
        else {
        }
    }
};
HomeBeforeLoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_3__.CheckUserService },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent }
];
HomeBeforeLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-before-login',
        template: _home_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeBeforeLoginPage);



/***/ }),

/***/ 1840:
/*!**************************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  margin-right: 21px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 0px;\n}\n\n.notifications {\n  font-family: \"Urbanist\", sans-serif;\n  position: absolute;\n  background: #D93A3A;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  border-radius: 50%;\n  bottom: 12px;\n  left: 10px;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bell_div {\n  position: relative;\n  padding-right: 6.5px;\n  display: flex;\n}\n\n.wrapper {\n  padding: 12px 16px 14px;\n}\n\n.search_box {\n  display: flex;\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  padding: 0px 20px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  height: 40px;\n}\n\n.input_field {\n  --color:black;\n  --placeholder-color:#D4DCE1;\n  --background:white;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  --placeholder-font-style: \"Urbanist\", sans-serif;\n  --placeholder-font-weight: 500;\n}\n\n.our_items {\n  margin-top: 14.5px;\n}\n\n.items_label {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n  padding: 0px 20px;\n}\n\n.cars_label {\n  color: #D4DCE1;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n}\n\n.carItem_box {\n  text-align: center;\n  background-color: white;\n  border-radius: 5px;\n  padding: 8px 8px;\n  width: 100%;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.selected_item {\n  text-align: center;\n  background-color: #8000FF;\n  border-radius: 10px;\n  padding: 8px 8px;\n  width: 100%;\n}\n\n.fontActive {\n  color: white;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.categories {\n  width: 18%;\n  height: 100%;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding: 9.5px 0px 9px 9px;\n}\n\n.price_label {\n  color: black;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.price_categories {\n  text-align: left;\n  width: 100px;\n  position: absolute;\n  z-index: 1;\n  background: #FBFBFB;\n  bottom: 20px;\n  right: 0px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.rotate_icon {\n  transform: rotate(180deg);\n}\n\n.items_wrapper {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.items_box {\n  display: flex;\n  justify-content: center;\n  margin-top: 9.5px;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding: 8px;\n}\n\n.card {\n  width: 100%;\n  margin: 9.5px 0px 0px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.car_img {\n  width: 100%;\n  height: 160px;\n}\n\n.row_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.card_title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: black;\n  text-align: left;\n  text-transform: uppercase;\n}\n\n.price_span {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  color: #8000FF;\n}\n\n.per_hour {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.total_trips {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: #0F172A;\n  text-align: left;\n}\n\n.invite_label {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 55%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .car_img {\n    width: 100%;\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYmVmb3JlLWxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGhvbWUtYmVmb3JlLWxvZ2luXFxob21lLWJlZm9yZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxxQkFBQTtBQ0lKOztBREZBO0VBQ0MsdUJBQUE7RUFDRyxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ01KOztBREpBO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDU0o7O0FEUEE7RUFDSSx1QkFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw4QkFBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7QUNhSjs7QURYQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2NKOztBRFpBO0VBQ0ksY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZUo7O0FEYkE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQ2VKOztBRFpBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDY0o7O0FEWEE7RUFDSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNjSjs7QURaQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDZUo7O0FEYkE7RUFFSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNlSjs7QURiQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsNENBQUE7QUNlSjs7QURiQTtFQUNJLHlCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ2lCSjs7QURmQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNrQko7O0FEaEJBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDbUJKOztBRFpBO0VBQ0ksV0FBQTtFQUFZLGFBQUE7QUNnQmhCOztBRGRBO0VBQ0ksYUFBQTtFQUFlLDhCQUFBO0VBQWdDLHFCQUFBO0FDbUJuRDs7QURqQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDb0JKOztBRGxCQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcUJKOztBRG5CQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3NCSjs7QURwQkE7RUFDSSxpQkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3dCSjs7QUR0QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUN5Qko7O0FEdEJBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDeUJKOztBRHZCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FDMEJKOztBRHJCQTtFQUlJO0lBQ0ksV0FBQTtJQUFZLGFBQUE7RUNzQmxCO0FBQ0YiLCJmaWxlIjoiaG9tZS1iZWZvcmUtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkNGNkZGO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcclxuICAgIG1hcmdpbi1yaWdodDogMjFweDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMHB4O1xyXG59XHJcbi5ub3RpZmljYXRpb25ze1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNEOTNBM0E7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5iZWxsX2RpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYuNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDEycHggMTZweCAxNHB4O1xyXG59XHJcbi5zZWFyY2hfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmlucHV0X2ZpZWxke1xyXG4gICAgLS1jb2xvcjpibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6I0Q0RENFMTtcclxuICAgIC0tYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm91cl9pdGVtc3tcclxuICAgIG1hcmdpbi10b3A6MTQuNXB4XHJcbn1cclxuLml0ZW1zX2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxufVxyXG4uY2Fyc19sYWJlbHtcclxuICAgIGNvbG9yOiAjRDREQ0UxO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmNhckl0ZW1fYm94e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweCA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4uc2VsZWN0ZWRfaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDAwRkY7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4uZm9udEFjdGl2ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5jYXRlZ29yaWVze1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogOS41cHggMHB4IDlweCA5cHg7XHJcbn1cclxuLnByaWNlX2xhYmVse1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5wcmljZV9jYXRlZ29yaWVze1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMEYxNzJBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxufVxyXG4ucm90YXRlX2ljb257XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5pdGVtc193cmFwcGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG4uaXRlbXNfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOS41cHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4uY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA5LjVweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcbi8vIC5jYXJkX2NvbnRlbnR7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4vLyB9XHJcbi5jYXJfaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7aGVpZ2h0OiAxNjBweDtcclxufVxyXG4ucm93X2RpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbi5jYXJkX3RpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ucHJpY2Vfc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbn1cclxuLnBlcl9ob3Vye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnN0YXJfbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuLnRvdGFsX3RyaXBze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmludml0ZV9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW52aXRlX2J0bntcclxuICAgIC0tYmFja2dyb3VuZDojODAwMEZGO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHdpZHRoOjU1JTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG4tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT1pcGFkIG1lZGlhIHF1ZXJ5PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gICAgLmNhcl9pbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7aGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkNGNkZGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZDRjZGRjtcbn1cblxuLm1lbnVpY29uIHtcbiAgY29sb3I6IHZhcigtLW1lbnUtaWNvbik7XG4gIG1hcmdpbi1yaWdodDogMjFweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzBweCAxNnB4IDBweDtcbn1cblxuLm5vdGlmaWNhdGlvbnMge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNEOTNBM0E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYmVsbF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDYuNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDEycHggMTZweCAxNHB4O1xufVxuXG4uc2VhcmNoX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uaW5wdXRfZmllbGQge1xuICAtLWNvbG9yOmJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiNENERDRTE7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xufVxuXG4ub3VyX2l0ZW1zIHtcbiAgbWFyZ2luLXRvcDogMTQuNXB4O1xufVxuXG4uaXRlbXNfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uY2Fyc19sYWJlbCB7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jYXJJdGVtX2JveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uc2VsZWN0ZWRfaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDBGRjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb250QWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXRlZ29yaWVzIHtcbiAgd2lkdGg6IDE4JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiA5LjVweCAwcHggOXB4IDlweDtcbn1cblxuLnByaWNlX2xhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcmljZV9jYXRlZ29yaWVzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLnJvdGF0ZV9pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLml0ZW1zX3dyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtc19ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOS41cHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA5LjVweCAwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLmNhcl9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cblxuLnJvd19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLmNhcmRfdGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJpY2Vfc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4MDAwRkY7XG59XG5cbi5wZXJfaG91ciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zdGFyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4udG90YWxfdHJpcHMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pbnZpdGVfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaW52aXRlX2J0biB7XG4gIC0tYmFja2dyb3VuZDojODAwMEZGO1xuICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICB3aWR0aDogNTUlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5idG4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XG4gIC5jYXJfaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG59Il19 */";

/***/ }),

/***/ 1080:
/*!**************************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Home</div>\n      <div style=\"display: flex\">\n       <div class=\"bell_div\">\n         <div class=\"notifications\" >{{totalNotifications}}</div>\n         <img src=\"assets/images/icons/bell.svg\" alt=\"\">\n       </div>\n       <div style=\"display: flex;padding-left: 13.5px;\">\n         <img (click)=\"gotoFilter()\" src=\"assets/images/icons/filter.svg\" alt=\"\">\n       </div>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    \n    <div class=\"search_box\">\n      <div style=\"width: 100%;\">\n        <ion-input class=\"input_field\" placeholder=\"Search for Cars\"></ion-input>\n      </div>\n      <div style=\"display: flex;\"><img src=\"assets/images/icons/search_input.svg\" alt=\"\"></div>\n    </div>\n\n  </div>\n      <div class=\"items_label\">What are you looking for?</div>\n      <div style=\"padding-left: 11px;padding-right: 11px; \">\n        <ion-slides pager=\"false\" [options]=\"slideOpts2\">\n          <ion-slide class=\"categories\">\n            <div class=\"carItem_box\" [class.selected_item]=\"item1 == true\" (click)=\"selectItem(1)\">\n              <img src=\"assets/images/icons/car_grey.svg\" alt=\"\" *ngIf=\"item1 == false\">\n              <img src=\"assets/images/icons/car_white.svg\" alt=\"\" *ngIf=\"item1 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item1 == true\">All Cars</div>\n            </div>\n          </ion-slide>\n          <ion-slide class=\"categories\">\n            <div class=\"carItem_box\" [class.selected_item]=\"item2 == true\" (click)=\"selectItem(2)\">\n              <img src=\"assets/images/icons/sports_car_grey.svg\" alt=\"\" *ngIf=\"item2 == false\">\n              <img src=\"assets/images/icons/sports_car_white.svg\" alt=\"\" *ngIf=\"item2 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item2 == true\">Sports cars</div>\n            </div>\n          </ion-slide>\n          <ion-slide class=\"categories\">\n            <div class=\"carItem_box\" [class.selected_item]=\"item3 == true\" (click)=\"selectItem(3)\">\n              <img src=\"assets/images/icons/luxury_car_grey.svg\" alt=\"\" *ngIf=\"item3 == false\">\n              <img src=\"assets/images/icons/luxury_car_white.svg\" alt=\"\" *ngIf=\"item3 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item3 == true\">Luxury cars</div>\n            </div>\n          </ion-slide>\n          <ion-slide class=\"categories\">\n            <div class=\"carItem_box\" [class.selected_item]=\"item4 == true\" (click)=\"selectItem(4)\">\n              <img src=\"assets/images/icons/taxi_grey.svg\" alt=\"\" *ngIf=\"item4 == false\">\n              <img src=\"assets/images/icons/taxi_white.svg\" alt=\"\" *ngIf=\"item4 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item4 == true\">Pickup</div>\n            </div>\n          </ion-slide>\n          <ion-slide class=\"categories\" style=\"padding-right: 9px;\">\n            <div class=\"carItem_box\" [class.selected_item]=\"item5 == true\" style=\"margin-right: 0px;\" (click)=\"selectItem(5)\">\n              <img src=\"assets/images/icons/suv's_grey.svg\" alt=\"\" *ngIf=\"item5 == false\">\n              <img src=\"assets/images/icons/suv's_white.svg\" alt=\"\" *ngIf=\"item5 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item5 == true\">Suv's</div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n      \n      <!-- <div class=\"items_box\">\n      </div> -->\n  \n\n  <div class=\"items_wrapper\">\n    <div class=\"items_label\" style=\"margin-top: 5px;padding-left: 3px;\">Top Rented</div>\n    <div *ngIf=\"item1==true\">\n      <ion-slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let pickup of pickups;\" style=\"width: 58%; height: 100%;\">\n          <ion-card class=\"card\" (click)=\"gotoCarDetails(pickup.car_id)\">\n            <img class=\"car_img\"  src=\"{{pickup.image1}}\" alt=\"\">\n            <div style=\"padding: 5px 7px 7.5px 8px;\">\n              <div>\n                <div class=\"card_title\">{{pickup.vehical_name}}</div>\n              </div>\n              <div class=\"card_content\">\n                <div class=\"row_div\">\n                  <div>\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </div>\n                  <div style=\"line-height: 1.2;\">\n                    <span class=\"price_span\" style=\"font-size: 11px;\">$</span>\n                    <span class=\"price_span\" style=\"font-size: 32px;line-height: 0.8;\" *ngIf=\"categoryVal=='Day'\">{{pickup.rent_cost_day}}</span>\n                    <!-- <span class=\"price_span\" style=\"font-size: 32px;\" *ngIf=\"categoryVal=='Day'\">{{pickup.rent_cost_day}}</span>\n                    <span class=\"price_span\" style=\"font-size: 32px;\" *ngIf=\"categoryVal=='Month'\">{{pickup.rent_cost_month}}</span> -->\n                  </div>\n                  \n                </div>\n                <div class=\"row_div\" >\n                  \n                    <div class=\"total_trips\">{{pickup.total_trips}}269 trips</div>\n                    <div style=\"text-align: right;\">\n                      <span class=\"price_label\" style=\"margin-right: 5px;\">Per Day</span>\n                    </div>\n                    <!-- <div (click)=\"displayCategories(pickup.car_id)\" style=\"display: flex;align-items: baseline;position: relative;justify-content: flex-end;\">\n                    <span class=\"price_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n                    <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n                    <div  class=\"price_categories\">\n                      <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category,pickup.car_id)\">\n                        <span class=\"price_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n                      </div> \n                    </div>\n                    </div> -->\n                </div>\n              </div>\n            </div>\n            \n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <!-- <ion-slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let pickup of pickups;\" style=\"width: 48%; height: 100%;\">\n          <ion-card class=\"card\" >\n            <img (click)=\"gotoCarDetails()\" style=\"width: 100%;\" src=\"{{pickup.img}}\" alt=\"\">\n            <div style=\"padding: 5px 7px 7.5px 8px;\">\n              <div>\n                <div class=\"card_title\">{{pickup.name}}</div>\n              </div>\n              <div class=\"card_content\">\n                <div>\n                  <div>\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </div>\n                  <div class=\"total_trips\">{{pickup.total_trips}} trips</div>\n                </div>\n                <div>\n                  <div style=\"line-height: 1.2;\"><span class=\"price_span\" style=\"font-size: 11px;\">$</span><span class=\"price_span\" style=\"font-size: 32px;\">{{pickup.price}}</span> </div>\n                  \n                  <div (click)=\"displayCategories()\" style=\"display: flex;align-items: baseline;position: relative;\">\n                    <span class=\"price_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n                    <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n                    <div *ngIf=\"showCategories==true\" class=\"price_categories\">\n                      <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category)\">\n                        <span class=\"price_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n                      </div> \n                    </div>\n                    \n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n            \n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <ion-slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let pickup of pickups;\" style=\"width: 48%; height: 100%;padding-bottom: 1px;\">\n          <ion-card class=\"card\" >\n            <img (click)=\"gotoCarDetails()\" style=\"width: 100%;\" src=\"{{pickup.img}}\" alt=\"\">\n            <div style=\"padding: 5px 7px 7.5px 8px;\">\n              <div>\n                <div class=\"card_title\">{{pickup.name}}</div>\n              </div>\n              <div class=\"card_content\">\n                <div>\n                  <div>\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </div>\n                  <div class=\"total_trips\">{{pickup.total_trips}} trips</div>\n                </div>\n                <div>\n                  <div style=\"line-height: 1.2;\"><span class=\"price_span\" style=\"font-size: 11px;\">$</span><span class=\"price_span\" style=\"font-size: 32px;\">{{pickup.price}}</span> </div>\n                  \n                  <div (click)=\"displayCategories()\" style=\"display: flex;align-items: baseline;position: relative;\">\n                    <span class=\"price_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n                    <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n                    <div *ngIf=\"showCategories==true\" class=\"price_categories\">\n                      <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category)\">\n                        <span class=\"price_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n                      </div> \n                    </div>\n                    \n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n            \n          </ion-card>\n        </ion-slide>\n      </ion-slides> -->\n    </div>\n    \n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div style=\"margin: 15px 0px 15px;\">\n      <div style=\"text-align: center;\">\n        <div class=\"invite_label\">Invite Friends</div>\n        <div class=\"invite_label\" style=\"font-weight: 400;\">And spread the word</div>\n      </div>\n      <div style=\"text-align: center;\">\n        <ion-button class=\"invite_btn\">\n          <span class=\"btn-text\">Invite</span>\n        </ion-button>\n      </div>\n    </div>\n    \n    \n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home-before-login_home-before-login_module_ts.js.map