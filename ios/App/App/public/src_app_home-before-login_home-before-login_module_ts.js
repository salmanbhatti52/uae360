"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home-before-login_home-before-login_module_ts"],{

/***/ 65773:
/*!***********************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeBeforeLoginPageRoutingModule": () => (/* binding */ HomeBeforeLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_before_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-before-login.page */ 28445);




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

/***/ 80803:
/*!***************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeBeforeLoginPageModule": () => (/* binding */ HomeBeforeLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-before-login-routing.module */ 65773);
/* harmony import */ var _home_before_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-before-login.page */ 28445);








let HomeBeforeLoginPageModule = class HomeBeforeLoginPageModule {
};
HomeBeforeLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
            _home_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeBeforeLoginPageRoutingModule
        ],
        declarations: [_home_before_login_page__WEBPACK_IMPORTED_MODULE_1__.HomeBeforeLoginPage]
    })
], HomeBeforeLoginPageModule);



/***/ }),

/***/ 28445:
/*!*************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeBeforeLoginPage": () => (/* binding */ HomeBeforeLoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-before-login.page.html?ngResource */ 21080);
/* harmony import */ var _home_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-before-login.page.scss?ngResource */ 41840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 26710);










swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_5__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_5__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_5__.Zoom, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicSlides]);
let HomeBeforeLoginPage = class HomeBeforeLoginPage {
    constructor(router, api, checkUser, appComponent) {
        this.router = router;
        this.api = api;
        this.checkUser = checkUser;
        this.appComponent = appComponent;
        this.totalNotifications = 6;
        this.imageUrlString = 'https://360uae.eigix.net/public/';
        this.item1 = true;
        this.item2 = false;
        this.item3 = false;
        this.item4 = false;
        this.item5 = false;
        this.carTypes = [];
        this.carTypeOne = '';
        this.carTypeTwo = '';
        this.carTypeThree = '';
        this.carTypeFour = '';
        this.carTypeOneId = '';
        this.carTypeTwoId = '';
        this.carTypeThreeId = '';
        this.carTypeFourId = '';
        this.showCategories = false;
        this.rentCategories = [{ category: 'Day' }, { category: 'Month' }];
        this.categoryVal = 'Day';
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
    // displayCategories(car_id){
    //   if(car_id !=null){
    //   }
    //   if(car_id !=null){
    //     this.showCategories = true;
    //   }
    //   else{
    //     this.showCategories = false;
    //   }
    // }
    // selectedCategory(val,id){
    //   console.log(val);
    //   console.log('iiiii',id);
    //   this.selectedCarID = id
    //   console.log('fffff',this.selectedCarID);
    //   this.categoryVal = val;
    // }
    ngOnInit() {
        this.checkUser.appUserId = null;
        console.log(this.checkUser.appUserId);
        this.checkUser.checkUser();
        console.log(this.checkUser.appPages);
        this.appComponent.appPages = this.checkUser.appPages;
        this.getCarTypes();
        this.getCars();
    }
    getCars() {
        this.api.showLoading();
        this.api.getData('cars').subscribe((res) => {
            this.api.hideLoading();
            console.log(res);
            if (res.status == 'success') {
                console.log(res.data);
                this.pickups = res.data;
            }
        }, (err) => {
            this.api.hideLoading();
            console.log(err);
        });
    }
    getCarTypes() {
        this.api.showLoading();
        this.api.sendRequest('carType').subscribe((res) => {
            console.log('getCarTypes: ', res);
            if (res.status == 'success') {
                this.carTypes = res.data;
                this.carTypeOne = this.carTypes[0].car_type;
                this.carTypeTwo = this.carTypes[1].car_type;
                this.carTypeThree = this.carTypes[2].car_type;
                this.carTypeFour = this.carTypes[3].car_type;
                this.carTypeOneId = this.carTypes[0].car_type_id;
                this.carTypeTwoId = this.carTypes[1].car_type_id;
                this.carTypeThreeId = this.carTypes[2].car_type_id;
                this.carTypeFourId = this.carTypes[3].car_type_id;
                this.api.hideLoading();
            }
        }, (err) => {
            console.log('Error', err);
            this.api.hideLoading();
        });
    }
    gotoFilter() {
        this.router.navigate(['/filters']);
    }
    gotoCarDetails(car_id) {
        this.api.showLoading();
        let data = {
            car_id: car_id
        };
        this.api.sendRequest('getCarsById', data).subscribe((res) => {
            this.api.hideLoading();
            console.log('api response:', res);
            if (res.status == 'success') {
                // this.api.presentToast('Success!')
                this.api.carDataById = res.data;
                console.log('carDataById:', this.api.carDataById);
                this.router.navigate(['/car-details']);
            }
        }, (err) => {
            this.api.hideLoading();
            console.log(err);
        });
    }
    selectItem(itemVal) {
        if (itemVal == 'all') {
            this.item1 = true;
            this.item2 = false;
            this.item3 = false;
            this.item4 = false;
            this.item5 = false;
            this.getCars();
        }
        else if (itemVal == 'Sports') {
            this.pickups = [];
            this.item1 = false;
            this.item2 = true;
            this.item3 = false;
            this.item4 = false;
            this.item5 = false;
            this.api.showLoading();
            let data = {
                car_type_id: this.carTypeOneId
            };
            this.api.sendRequest('getCarsByCarType', data).subscribe((res) => {
                console.log(res);
                if (res.status == 'success') {
                    this.api.hideLoading();
                    this.pickups = res.data;
                }
            }, (err) => {
                this.api.hideLoading();
                console.log(err);
            });
        }
        else if (itemVal == 'Luxury') {
            this.pickups = [];
            this.item1 = false;
            this.item2 = false;
            this.item3 = true;
            this.item4 = false;
            this.item5 = false;
            this.api.showLoading();
            let data = {
                car_type_id: this.carTypeTwoId
            };
            this.api.sendRequest('getCarsByCarType', data).subscribe((res) => {
                console.log(res);
                if (res.status == 'success') {
                    this.api.hideLoading();
                    this.pickups = res.data;
                }
            }, (err) => {
                this.api.hideLoading();
                console.log(err);
            });
        }
        else if (itemVal == 'Pickup') {
            this.pickups = [];
            this.item1 = false;
            this.item2 = false;
            this.item3 = false;
            this.item4 = true;
            this.item5 = false;
            this.api.showLoading();
            let data = {
                car_type_id: this.carTypeThreeId
            };
            this.api.sendRequest('getCarsByCarType', data).subscribe((res) => {
                console.log(res);
                if (res.status == 'success') {
                    this.api.hideLoading();
                    this.pickups = res.data;
                }
            }, (err) => {
                this.api.hideLoading();
                console.log(err);
            });
        }
        else if (itemVal == 'SUV') {
            this.pickups = [];
            this.item1 = false;
            this.item2 = false;
            this.item3 = false;
            this.item4 = false;
            this.item5 = true;
            this.api.showLoading();
            let data = {
                car_type_id: this.carTypeFourId
            };
            this.api.sendRequest('getCarsByCarType', data).subscribe((res) => {
                console.log(res);
                if (res.status == 'success') {
                    this.api.hideLoading();
                    this.pickups = res.data;
                }
            }, (err) => {
                this.api.hideLoading();
                console.log(err);
            });
        }
        else {
        }
    }
};
HomeBeforeLoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_3__.CheckUserService },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent }
];
HomeBeforeLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home-before-login',
        template: _home_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeBeforeLoginPage);



/***/ }),

/***/ 41840:
/*!**************************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  margin-right: 21px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 0px;\n}\n\n.notifications {\n  font-family: \"Urbanist\", sans-serif;\n  position: absolute;\n  background: #D93A3A;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  border-radius: 50%;\n  bottom: 12px;\n  left: 10px;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bell_div {\n  position: relative;\n  padding-right: 6.5px;\n  display: flex;\n}\n\n.wrapper {\n  padding: 12px 16px 14px;\n}\n\n.search_box {\n  display: flex;\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  padding: 0px 20px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  height: 40px;\n}\n\n.input_field {\n  --color:black;\n  --placeholder-color:#D4DCE1;\n  --background:white;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  --placeholder-font-style: \"Urbanist\", sans-serif;\n  --placeholder-font-weight: 500;\n}\n\n.our_items {\n  margin-top: 14.5px;\n}\n\n.items_label {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n  padding: 0px 20px;\n}\n\n.cars_label {\n  color: #D4DCE1;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n}\n\n.carItem_box {\n  border-radius: 5px;\n  height: 50px;\n  text-align: center;\n  background-color: white;\n  padding: 4px 8px 8px;\n  width: 100%;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.selected_item {\n  text-align: center;\n  background-color: #8000FF;\n  border-radius: 10px;\n  padding: 4px 8px 8px;\n  width: 100%;\n}\n\n.fontActive {\n  color: white;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.price_label {\n  color: black;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.price_categories {\n  text-align: left;\n  width: 100px;\n  position: absolute;\n  z-index: 1;\n  background: #FBFBFB;\n  bottom: 20px;\n  right: 0px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.rotate_icon {\n  transform: rotate(180deg);\n}\n\n.items_wrapper {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.items_box {\n  display: flex;\n  justify-content: center;\n  margin-top: 9.5px;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding: 8px;\n}\n\n.card {\n  width: 100%;\n  margin: 9.5px 0px 0px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.car_img {\n  width: 100% !important;\n  height: 160px !important;\n  object-fit: cover;\n}\n\n.row_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.card_title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: black;\n  text-align: left;\n  text-transform: uppercase;\n}\n\n.price_span {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  color: #8000FF;\n}\n\n.per_hour {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.total_trips {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: #0F172A;\n  text-align: left;\n}\n\n.invite_label {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 55%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .car_img {\n    width: 100% !important;\n    height: 250px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYmVmb3JlLWxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGhvbWUtYmVmb3JlLWxvZ2luXFxob21lLWJlZm9yZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxxQkFBQTtBQ0lKOztBREZBO0VBQ0MsdUJBQUE7RUFDRyxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ01KOztBREpBO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDU0o7O0FEUEE7RUFDSSx1QkFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw4QkFBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7QUNhSjs7QURYQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2NKOztBRFpBO0VBQ0ksY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZUo7O0FEYkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUNnQko7O0FEYkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNlSjs7QURaQTtFQUNJLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2VKOztBRE5BO0VBRUksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLDRDQUFBO0FDUUo7O0FETkE7RUFDSSx5QkFBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDWUo7O0FETEE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QUROQTtFQUNJLGFBQUE7RUFBZSw4QkFBQTtFQUFnQyxxQkFBQTtBQ1duRDs7QURUQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNZSjs7QURWQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDYUo7O0FEWEE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNjSjs7QURaQTtFQUNJLGlCQUFBO0FDZUo7O0FEYkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ2lCSjs7QURkQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2lCSjs7QURmQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FDa0JKOztBRGJBO0VBSUk7SUFDSSxzQkFBQTtJQUNBLHdCQUFBO0VDYU47QUFDRiIsImZpbGUiOiJob21lLWJlZm9yZS1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQ0Y2RkY7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAwcHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnN7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3R0b206IDEycHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJlbGxfZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNi41cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4IDE0cHg7XHJcbn1cclxuLnNlYXJjaF9ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG4uaW5wdXRfZmllbGR7XHJcbiAgICAtLWNvbG9yOmJsYWNrO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRDREQ0UxO1xyXG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ub3VyX2l0ZW1ze1xyXG4gICAgbWFyZ2luLXRvcDoxNC41cHhcclxufVxyXG4uaXRlbXNfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG59XHJcbi5jYXJzX2xhYmVse1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY2FySXRlbV9ib3h7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDRweCA4cHggOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLnNlbGVjdGVkX2l0ZW17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMEZGO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDhweCA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5mb250QWN0aXZle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLy8gLmNhdGVnb3JpZXN7XHJcbi8vICAgICB3aWR0aDogMTglO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vICAgICBwYWRkaW5nOiA5LjVweCAwcHggOXB4IDlweDtcclxuLy8gfVxyXG4ucHJpY2VfbGFiZWx7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnByaWNlX2NhdGVnb3JpZXN7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwRjE3MkE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcbi5yb3RhdGVfaWNvbntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuLml0ZW1zX3dyYXBwZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5pdGVtc19ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA5LjVweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDkuNXB4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbn1cclxuLy8gLmNhcmRfY29udGVudHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbi8vIH1cclxuLmNhcl9pbWd7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBcclxuICAgIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5yb3dfZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuLmNhcmRfdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5wcmljZV9zcGFue1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxufVxyXG4ucGVyX2hvdXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uc3Rhcl9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4udG90YWxfdHJpcHN7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaW52aXRlX2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pbnZpdGVfYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MHB4O1xyXG4gICAgd2lkdGg6NTUlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PWlwYWQgbWVkaWEgcXVlcnk9PT09PT09PT09PT09PT09PT09PVxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XHJcbiAgICAuY2FyX2ltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkNGNkZGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZDRjZGRjtcbn1cblxuLm1lbnVpY29uIHtcbiAgY29sb3I6IHZhcigtLW1lbnUtaWNvbik7XG4gIG1hcmdpbi1yaWdodDogMjFweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzBweCAxNnB4IDBweDtcbn1cblxuLm5vdGlmaWNhdGlvbnMge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNEOTNBM0E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYmVsbF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDYuNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDEycHggMTZweCAxNHB4O1xufVxuXG4uc2VhcmNoX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uaW5wdXRfZmllbGQge1xuICAtLWNvbG9yOmJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiNENERDRTE7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xufVxuXG4ub3VyX2l0ZW1zIHtcbiAgbWFyZ2luLXRvcDogMTQuNXB4O1xufVxuXG4uaXRlbXNfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uY2Fyc19sYWJlbCB7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jYXJJdGVtX2JveCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHggOHB4IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uc2VsZWN0ZWRfaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDBGRjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNHB4IDhweCA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9udEFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJpY2VfbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByaWNlX2NhdGVnb3JpZXMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMHB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4ucm90YXRlX2ljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uaXRlbXNfd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLml0ZW1zX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA5LjVweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDkuNXB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uY2FyX2ltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5yb3dfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5jYXJkX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByaWNlX3NwYW4ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xufVxuXG4ucGVyX2hvdXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3Rhcl9tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLnRvdGFsX3RyaXBzIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW52aXRlX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmludml0ZV9idG4ge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xuICAuY2FyX2ltZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 21080:
/*!**************************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Home</div>\n      <div style=\"display: flex\">\n       <div class=\"bell_div\">\n         <div class=\"notifications\" >{{totalNotifications}}</div>\n         <img src=\"assets/images/icons/bell.svg\" alt=\"\">\n       </div>\n       <div style=\"display: flex;padding-left: 13.5px;\">\n         <img (click)=\"gotoFilter()\" src=\"assets/images/icons/filter.svg\" alt=\"\">\n       </div>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    \n    <div class=\"search_box\">\n      <div style=\"width: 100%;\">\n        <ion-input class=\"input_field\" placeholder=\"Search for Cars\"></ion-input>\n      </div>\n      <div style=\"display: flex;\"><img src=\"assets/images/icons/search_input.svg\" alt=\"\"></div>\n    </div>\n\n  </div>\n      <div class=\"items_label\">What are you looking for?</div>\n      <div style=\"padding-left: 11px;padding-right: 11px; \">\n        <swiper [config]=\"{slidesPerView:4.4, spaceBetween:9, initialSlide:0, speed:400}\" [pagination]=\"false\" style=\"padding: 8px;\">\n          <ng-template swiperSlide class=\"categories\">\n            <div class=\"carItem_box\" [class.selected_item]=\"item1 == true\" (click)=\"selectItem('all')\">\n              <img src=\"assets/images/icons/car_grey.svg\" alt=\"\" *ngIf=\"item1 == false\">\n              <img src=\"assets/images/icons/car_white.svg\" alt=\"\" *ngIf=\"item1 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item1 == true\">All Cars</div>\n            </div>\n          </ng-template>\n          <ng-template swiperSlide class=\"categories\">\n            <div class=\"carItem_box\" [class.selected_item]=\"item2 == true\" (click)=\"selectItem('Sports')\">\n              <img src=\"assets/images/icons/sports_car_grey.svg\" alt=\"\" *ngIf=\"item2 == false\">\n              <img src=\"assets/images/icons/sports_car_white.svg\" alt=\"\" *ngIf=\"item2 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item2 == true\">{{carTypeOne}}</div>\n            </div>\n          </ng-template>\n          <ng-template swiperSlide class=\"categories\">\n            <div class=\"carItem_box\" [class.selected_item]=\"item3 == true\" (click)=\"selectItem('Luxury')\">\n              <img src=\"assets/images/icons/luxury_car_grey.svg\" alt=\"\" *ngIf=\"item3 == false\">\n              <img src=\"assets/images/icons/luxury_car_white.svg\" alt=\"\" *ngIf=\"item3 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item3 == true\">{{carTypeTwo}}</div>\n            </div>\n          </ng-template>\n          <ng-template swiperSlide class=\"categories\">\n            <div class=\"carItem_box\" [class.selected_item]=\"item4 == true\" (click)=\"selectItem('Pickup')\">\n              <img src=\"assets/images/icons/taxi_grey.svg\" alt=\"\" *ngIf=\"item4 == false\">\n              <img src=\"assets/images/icons/taxi_white.svg\" alt=\"\" *ngIf=\"item4 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item4 == true\">{{carTypeThree}}</div>\n            </div>\n          </ng-template>\n          <ng-template swiperSlide class=\"categories\" >\n            <div class=\"carItem_box\" [class.selected_item]=\"item5 == true\" style=\"margin-right: 0px;\" (click)=\"selectItem('SUV')\">\n              <img src=\"assets/images/icons/suv's_grey.svg\" alt=\"\" *ngIf=\"item5 == false\">\n              <img src=\"assets/images/icons/suv's_white.svg\" alt=\"\" *ngIf=\"item5 == true\">\n              <div class=\"cars_label\" [class.fontActive]=\"item5 == true\">{{carTypeFour}}</div>\n            </div>\n          </ng-template>\n        </swiper>\n      </div>\n      \n      <!-- <div class=\"items_box\">\n      </div> -->\n  \n\n  <div class=\"items_wrapper\">\n    <div class=\"items_label\" style=\"margin-top: 5px;padding-left: 3px;\">Top Rented</div>\n    <!-- <div *ngIf=\"item1==true\"> -->\n      <swiper pager=\"false\" [config]=\"{slidesPerView:1.4 ,spaceBetween:9, initialSlide:0, speed:400}\" [pagination]=\"false\">\n        <ng-template swiperSlide *ngFor=\"let pickup of pickups;\" style=\"width: 58%; height: 100%;\">\n          <ion-card class=\"card\" (click)=\"gotoCarDetails(pickup.car_id)\">\n            <img class=\"car_img\" src=\"{{imageUrlString}}{{pickup.image1}}\" alt=\"\">\n            <div style=\"padding: 5px 7px 7.5px 8px;\">\n              <div>\n                <div class=\"card_title\">{{pickup.vehical_name}}</div>\n              </div>\n              <div class=\"card_content\">\n                <div class=\"row_div\">\n                  <div>\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </div>\n                  <div style=\"line-height: 1.2;\">\n                    <span class=\"price_span\" style=\"font-size: 11px;\">$</span>\n                    <span class=\"price_span\" style=\"font-size: 32px;line-height: 0.8;\" *ngIf=\"categoryVal=='Day'\">{{pickup.rent_cost_day}}</span>\n                    <!-- <span class=\"price_span\" style=\"font-size: 32px;\" *ngIf=\"categoryVal=='Day'\">{{pickup.rent_cost_day}}</span>\n                    <span class=\"price_span\" style=\"font-size: 32px;\" *ngIf=\"categoryVal=='Month'\">{{pickup.rent_cost_month}}</span> -->\n                  </div>\n                  \n                </div>\n                <div class=\"row_div\" >\n                  \n                    <div class=\"total_trips\">{{pickup.total_trips}}269 trips</div>\n                    <div style=\"text-align: right;\">\n                      <span class=\"price_label\" style=\"margin-right: 5px;\">Per Day</span>\n                    </div>\n                    <!-- <div (click)=\"displayCategories(pickup.car_id)\" style=\"display: flex;align-items: baseline;position: relative;justify-content: flex-end;\">\n                    <span class=\"price_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n                    <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n                    <div  class=\"price_categories\">\n                      <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category,pickup.car_id)\">\n                        <span class=\"price_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n                      </div> \n                    </div>\n                    </div> -->\n                </div>\n              </div>\n            </div>\n            \n          </ion-card>\n        </ng-template>\n      </swiper>\n      <!-- <ion-slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let pickup of pickups;\" style=\"width: 48%; height: 100%;\">\n          <ion-card class=\"card\" >\n            <img (click)=\"gotoCarDetails()\" style=\"width: 100%;\" src=\"{{pickup.img}}\" alt=\"\">\n            <div style=\"padding: 5px 7px 7.5px 8px;\">\n              <div>\n                <div class=\"card_title\">{{pickup.name}}</div>\n              </div>\n              <div class=\"card_content\">\n                <div>\n                  <div>\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </div>\n                  <div class=\"total_trips\">{{pickup.total_trips}} trips</div>\n                </div>\n                <div>\n                  <div style=\"line-height: 1.2;\"><span class=\"price_span\" style=\"font-size: 11px;\">$</span><span class=\"price_span\" style=\"font-size: 32px;\">{{pickup.price}}</span> </div>\n                  \n                  <div (click)=\"displayCategories()\" style=\"display: flex;align-items: baseline;position: relative;\">\n                    <span class=\"price_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n                    <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n                    <div *ngIf=\"showCategories==true\" class=\"price_categories\">\n                      <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category)\">\n                        <span class=\"price_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n                      </div> \n                    </div>\n                    \n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n            \n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <ion-slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let pickup of pickups;\" style=\"width: 48%; height: 100%;padding-bottom: 1px;\">\n          <ion-card class=\"card\" >\n            <img (click)=\"gotoCarDetails()\" style=\"width: 100%;\" src=\"{{pickup.img}}\" alt=\"\">\n            <div style=\"padding: 5px 7px 7.5px 8px;\">\n              <div>\n                <div class=\"card_title\">{{pickup.name}}</div>\n              </div>\n              <div class=\"card_content\">\n                <div>\n                  <div>\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                  </div>\n                  <div class=\"total_trips\">{{pickup.total_trips}} trips</div>\n                </div>\n                <div>\n                  <div style=\"line-height: 1.2;\"><span class=\"price_span\" style=\"font-size: 11px;\">$</span><span class=\"price_span\" style=\"font-size: 32px;\">{{pickup.price}}</span> </div>\n                  \n                  <div (click)=\"displayCategories()\" style=\"display: flex;align-items: baseline;position: relative;\">\n                    <span class=\"price_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n                    <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n                    <div *ngIf=\"showCategories==true\" class=\"price_categories\">\n                      <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category)\">\n                        <span class=\"price_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n                      </div> \n                    </div>\n                    \n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n            \n          </ion-card>\n        </ion-slide>\n      </ion-slides> -->\n    <!-- </div> -->\n    \n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div style=\"margin: 15px 0px 15px;\">\n      <div style=\"text-align: center;\">\n        <div class=\"invite_label\">Invite Friends</div>\n        <div class=\"invite_label\" style=\"font-weight: 400;\">And spread the word</div>\n      </div>\n      <div style=\"text-align: center;\">\n        <ion-button class=\"invite_btn\">\n          <span class=\"btn-text\">Invite</span>\n        </ion-button>\n      </div>\n    </div>\n    \n    \n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home-before-login_home-before-login_module_ts.js.map