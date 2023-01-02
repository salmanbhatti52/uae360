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
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-before-login.page.html?ngResource */ 21080);
/* harmony import */ var _home_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-before-login.page.scss?ngResource */ 41840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 26710);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/share */ 58921);












swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_6__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_6__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_6__.Zoom, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicSlides]);
let HomeBeforeLoginPage = class HomeBeforeLoginPage {
  // selectedCarID: any = 0;
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
    this.rentCategories = [{
      category: 'Day'
    }, {
      category: 'Month'
    }];
    this.categoryVal = 'Day';
    this.pickups = [];
  }

  ngOnInit() {
    this.checkUser.appUserId = null;
    console.log(this.checkUser.appUserId);
    this.checkUser.checkUser();
    console.log(this.checkUser.appPages);
    this.appComponent.appPages = this.checkUser.appPages;
    this.getCarTypes();
    this.getCars();
  }

  ionViewWillEnter() {}

  handleChange(event) {// this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
    // console.log('query1: ',query1);
  }

  clearResult() {}

  getCars() {
    this.api.showLoading();
    let data = {
      user_id: ''
    };
    this.api.sendRequest('cars', data).subscribe(res => {
      this.api.hideLoading();
      console.log(res);

      if (res.status == 'success') {
        console.log(res.data);
        this.pickups = res.data;
      }
    }, err => {
      this.api.hideLoading();
      console.log(err);
    });
  }

  getCarTypes() {
    this.api.showLoading();
    this.api.sendRequest('carType').subscribe(res => {
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
    }, err => {
      console.log('Error', err);
      this.api.hideLoading();
    });
  }

  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

  inviteOthers() {
    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_share__WEBPACK_IMPORTED_MODULE_7__.Share.share({
        title: 'Book Cars Online at 360UAE',
        text: 'Really awesome cars you can book',
        url: 'https://dubai360.com/',
        dialogTitle: 'Share with buddies'
      });
    })();
  }

  selectItem(itemVal) {
    if (itemVal == 'all') {
      this.item1 = true;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      this.getCars();
    } else if (itemVal == 'Sports') {
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
      this.api.sendRequest('getCarsByCarType', data).subscribe(res => {
        console.log(res);

        if (res.status == 'success') {
          this.api.hideLoading();
          this.pickups = res.data;
        }
      }, err => {
        this.api.hideLoading();
        console.log(err);
      });
    } else if (itemVal == 'Luxury') {
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
      this.api.sendRequest('getCarsByCarType', data).subscribe(res => {
        console.log(res);

        if (res.status == 'success') {
          this.api.hideLoading();
          this.pickups = res.data;
        }
      }, err => {
        this.api.hideLoading();
        console.log(err);
      });
    } else if (itemVal == 'Pickup') {
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
      this.api.sendRequest('getCarsByCarType', data).subscribe(res => {
        console.log(res);

        if (res.status == 'success') {
          this.api.hideLoading();
          this.pickups = res.data;
        }
      }, err => {
        this.api.hideLoading();
        console.log(err);
      });
    } else if (itemVal == 'SUV') {
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
      this.api.sendRequest('getCarsByCarType', data).subscribe(res => {
        console.log(res);

        if (res.status == 'success') {
          this.api.hideLoading();
          this.pickups = res.data;
        }
      }, err => {
        this.api.hideLoading();
        console.log(err);
      });
    } else {}
  }

};

HomeBeforeLoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: _check_user_service__WEBPACK_IMPORTED_MODULE_4__.CheckUserService
}, {
  type: _app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent
}];

HomeBeforeLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-home-before-login',
  template: _home_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomeBeforeLoginPage);


/***/ }),

/***/ 41840:
/*!**************************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.start_margin {\n  margin-right: 3px;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  margin-right: 21px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 0px;\n}\n\n.notifications {\n  font-family: \"Urbanist\", sans-serif;\n  position: absolute;\n  background: #D93A3A;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  border-radius: 50%;\n  bottom: 12px;\n  left: 10px;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bell_div {\n  position: relative;\n  padding-right: 6.5px;\n  display: flex;\n}\n\n.wrapper {\n  padding: 2px 16px 14px;\n}\n\n.input_field {\n  --border-radius: 5px;\n  --placeholder-opacity: none;\n  --color: black;\n  --placeholder-color: #D4DCE1;\n  --background: white;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  --placeholder-font-style: \"Urbanist\", sans-serif;\n  --placeholder-font-weight: 500;\n  --box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  height: 40px;\n  --cancel-button-color: #D4DCE1;\n  --clear-button-color: #D4DCE1;\n  padding: 0px;\n  --icon-color: #D4DCE1;\n}\n\n.our_items {\n  margin-top: 14.5px;\n}\n\n.items_label {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n  padding: 0px 20px;\n}\n\n.cars_label {\n  color: #D4DCE1;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n}\n\n.carItem_box {\n  border-radius: 5px;\n  height: 50px;\n  text-align: center;\n  background-color: white;\n  padding: 4px 8px 8px;\n  width: 100%;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.selected_item {\n  text-align: center;\n  background-color: #8000FF;\n  border-radius: 10px;\n  padding: 4px 8px 8px;\n  width: 100%;\n}\n\n.fontActive {\n  color: white;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.price_label {\n  color: black;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.price_categories {\n  text-align: left;\n  width: 100px;\n  position: absolute;\n  z-index: 1;\n  background: #FBFBFB;\n  bottom: 20px;\n  right: 0px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.rotate_icon {\n  transform: rotate(180deg);\n}\n\n.items_wrapper {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.items_box {\n  display: flex;\n  justify-content: center;\n  margin-top: 9.5px;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding: 8px;\n}\n\n.card {\n  width: 100%;\n  margin: 9.5px 0px 0px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.car_img {\n  width: 100% !important;\n  height: 160px !important;\n  object-fit: cover;\n}\n\n.row_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.card_title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: black;\n  text-align: left;\n  text-transform: uppercase;\n}\n\n.price_span {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  color: #8000FF;\n}\n\n.per_hour {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.total_trips {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: #0F172A;\n  text-align: left;\n}\n\n.invite_label {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 55%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .car_img {\n    width: 100% !important;\n    height: 250px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYmVmb3JlLWxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGhvbWUtYmVmb3JlLWxvZ2luXFxob21lLWJlZm9yZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDT0o7O0FESkE7RUFDSSxxQkFBQTtBQ09KOztBRExBO0VBQ0MsdUJBQUE7RUFDRyxrQkFBQTtBQ1FKOztBRE5BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ1NKOztBRFBBO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDVUo7O0FEUkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNXSjs7QURUQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDWUo7O0FEVkE7RUFDSSxzQkFBQTtBQ2FKOztBREZBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtFQUNBLDhCQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUNTSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ1FKOztBRExBO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUUo7O0FEQ0E7RUFFSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNLSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUFlLDhCQUFBO0VBQWdDLHFCQUFBO0FDSW5EOztBREZBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7QUNRSjs7QUROQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUNVSjs7QURQQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7QUNXSjs7QUROQTtFQUlJO0lBQ0ksc0JBQUE7SUFDQSx3QkFBQTtFQ01OO0FBQ0YiLCJmaWxlIjoiaG9tZS1iZWZvcmUtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG4vLyA9PT09PT09c2VhcmNoIHJlc3VsdCBjYXJzIGNzcz09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLmNhcl9pbmZvX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FyX25hbWV7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5zdGFydF9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4ucmF0aW5nX3ZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5jYXIyX3ByaWNle1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyMl9pbmZvX3N1YmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PWRvbmU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQ0Y2RkY7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAwcHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnN7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3R0b206IDEycHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJlbGxfZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNi41cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHggMTRweDtcclxufVxyXG4vLyAuc2VhcmNoX2JveHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbi8vICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG4vLyAgICAgaGVpZ2h0OiA0MHB4O1xyXG4vLyB9XHJcbi5pbnB1dF9maWVsZHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiBub25lO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjRDREQ0UxO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjRDREQ0UxO1xyXG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6ICNENERDRTE7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtLWljb24tY29sb3I6ICNENERDRTE7XHJcbn1cclxuLm91cl9pdGVtc3tcclxuICAgIG1hcmdpbi10b3A6MTQuNXB4XHJcbn1cclxuLml0ZW1zX2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxufVxyXG4uY2Fyc19sYWJlbHtcclxuICAgIGNvbG9yOiAjRDREQ0UxO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmNhckl0ZW1fYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4IDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5zZWxlY3RlZF9pdGVte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDBGRjtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHggOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4uZm9udEFjdGl2ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi8vIC5jYXRlZ29yaWVze1xyXG4vLyAgICAgd2lkdGg6IDE4JTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgICAgcGFkZGluZzogOS41cHggMHB4IDlweCA5cHg7XHJcbi8vIH1cclxuLnByaWNlX2xhYmVse1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5wcmljZV9jYXRlZ29yaWVze1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMEYxNzJBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxufVxyXG4ucm90YXRlX2ljb257XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5pdGVtc193cmFwcGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG4uaXRlbXNfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOS41cHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4uY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA5LjVweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcbi8vIC5jYXJkX2NvbnRlbnR7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4vLyB9XHJcbi5jYXJfaW1ne1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgXHJcbiAgICBoZWlnaHQ6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ucm93X2RpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbi5jYXJkX3RpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ucHJpY2Vfc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbn1cclxuLnBlcl9ob3Vye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnN0YXJfbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuLnRvdGFsX3RyaXBze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmludml0ZV9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW52aXRlX2J0bntcclxuICAgIC0tYmFja2dyb3VuZDojODAwMEZGO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHdpZHRoOjU1JTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG4tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT1pcGFkIG1lZGlhIHF1ZXJ5PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gICAgLmNhcl9pbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJfaW5mb19ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICMwRjE3MkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiA5cHggMTJweCA4LjVweCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcl9uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3RhcnRfbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5yYXRpbmdfdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2FyMl9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyMl9pbmZvX3N1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQ0Y2RkY7XG59XG5cbi5tZW51aWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xuICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggMTZweCAwcHg7XG59XG5cbi5ub3RpZmljYXRpb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJlbGxfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiA2LjVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAycHggMTZweCAxNHB4O1xufVxuXG4uaW5wdXRfZmllbGQge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiBub25lO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0Q0RENFMTtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xuICAtLWJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI0Q0RENFMTtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6ICNENERDRTE7XG4gIHBhZGRpbmc6IDBweDtcbiAgLS1pY29uLWNvbG9yOiAjRDREQ0UxO1xufVxuXG4ub3VyX2l0ZW1zIHtcbiAgbWFyZ2luLXRvcDogMTQuNXB4O1xufVxuXG4uaXRlbXNfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uY2Fyc19sYWJlbCB7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jYXJJdGVtX2JveCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHggOHB4IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uc2VsZWN0ZWRfaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDBGRjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNHB4IDhweCA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9udEFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJpY2VfbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByaWNlX2NhdGVnb3JpZXMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMHB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4ucm90YXRlX2ljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uaXRlbXNfd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLml0ZW1zX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA5LjVweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDkuNXB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uY2FyX2ltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5yb3dfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5jYXJkX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByaWNlX3NwYW4ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xufVxuXG4ucGVyX2hvdXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3Rhcl9tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLnRvdGFsX3RyaXBzIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW52aXRlX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmludml0ZV9idG4ge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xuICAuY2FyX2ltZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 21080:
/*!**************************************************************************!*\
  !*** ./src/app/home-before-login/home-before-login.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Home</div>\n      <div style=\"display: flex\">\n       <div class=\"bell_div\" >\n         <!-- <div class=\"notifications\" >{{totalNotifications}}</div> -->\n         <img (click)=\"gotoSignIn()\" src=\"assets/images/icons/bell.svg\" alt=\"\">\n       </div>\n       <div style=\"display: flex;padding-left: 13.5px;\">\n         <img (click)=\"gotoSignIn()\" src=\"assets/images/icons/filter.svg\" alt=\"\">\n       </div>\n      </div>\n    </div>\n    <div style=\"margin: 16px;\">\n      <ion-searchbar [debounce]=\"1000\" \n        (ionChange)=\"handleChange($event)\" type=\"text\"\n        show-clear-button=\"always\" class=\"input_field\" \n        placeholder=\"Search for Cars\" (ionClear)=\"clearResult()\">\n      </ion-searchbar>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div >\n    <div class=\"items_label\">What are you looking for?</div>\n    <div style=\"padding-left: 11px;\">\n      <swiper [config]=\"{slidesPerView:4.4, spaceBetween:9, initialSlide:0, speed:400}\" [pagination]=\"false\" style=\"padding: 8px;\">\n        <ng-template swiperSlide class=\"categories\">\n          <div class=\"carItem_box\" [class.selected_item]=\"item1 == true\" (click)=\"selectItem('all')\">\n            <img src=\"assets/images/icons/car_grey.svg\" alt=\"\" *ngIf=\"item1 == false\">\n            <img src=\"assets/images/icons/car_white.svg\" alt=\"\" *ngIf=\"item1 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item1 == true\">All Cars</div>\n          </div>\n        </ng-template>\n        <ng-template swiperSlide class=\"categories\">\n          <div class=\"carItem_box\" [class.selected_item]=\"item2 == true\" (click)=\"selectItem('Sports')\">\n            <img src=\"assets/images/icons/sports_car_grey.svg\" alt=\"\" *ngIf=\"item2 == false\">\n            <img src=\"assets/images/icons/sports_car_white.svg\" alt=\"\" *ngIf=\"item2 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item2 == true\">{{carTypeOne}}</div>\n          </div>\n        </ng-template>\n        <ng-template swiperSlide class=\"categories\">\n          <div class=\"carItem_box\" [class.selected_item]=\"item3 == true\" (click)=\"selectItem('Luxury')\">\n            <img src=\"assets/images/icons/luxury_car_grey.svg\" alt=\"\" *ngIf=\"item3 == false\">\n            <img src=\"assets/images/icons/luxury_car_white.svg\" alt=\"\" *ngIf=\"item3 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item3 == true\">{{carTypeTwo}}</div>\n          </div>\n        </ng-template>\n        <ng-template swiperSlide class=\"categories\">\n          <div class=\"carItem_box\" [class.selected_item]=\"item4 == true\" (click)=\"selectItem('Pickup')\">\n            <img src=\"assets/images/icons/taxi_grey.svg\" alt=\"\" *ngIf=\"item4 == false\">\n            <img src=\"assets/images/icons/taxi_white.svg\" alt=\"\" *ngIf=\"item4 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item4 == true\">{{carTypeThree}}</div>\n          </div>\n        </ng-template>\n        <ng-template swiperSlide class=\"categories\" >\n          <div class=\"carItem_box\" [class.selected_item]=\"item5 == true\" style=\"margin-right: 0px;\" (click)=\"selectItem('SUV')\">\n            <img src=\"assets/images/icons/suv's_grey.svg\" alt=\"\" *ngIf=\"item5 == false\">\n            <img src=\"assets/images/icons/suv's_white.svg\" alt=\"\" *ngIf=\"item5 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item5 == true\">{{carTypeFour}}</div>\n          </div>\n        </ng-template>\n      </swiper>\n    </div>\n\n    <div class=\"items_wrapper\">\n      <div class=\"items_label\" style=\"margin-top: 5px;padding-left: 3px;\">Top Rented</div>\n      \n        <swiper pager=\"false\" [config]=\"{slidesPerView:1.4 ,spaceBetween:9, initialSlide:0, speed:400}\" [pagination]=\"false\">\n          <ng-template swiperSlide *ngFor=\"let pickup of pickups;\" style=\"width: 58%; height: 100%;\">\n            <ion-card class=\"card\" (click)=\"gotoSignIn()\">\n              <img class=\"car_img\" src=\"{{api.imageUrlString}}{{pickup.image1}}\" alt=\"\">\n              <div style=\"padding: 5px 7px 7.5px 8px;\">\n                <div>\n                  <div class=\"card_title\">{{pickup.vehical_name}}</div>\n                </div>\n                <div class=\"card_content\">\n                  <div class=\"row_div\">\n                    <div>\n                      <span *ngIf=\"pickup.rating == 0 \">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      </span>\n                      <span *ngIf=\"pickup.rating >=1 && pickup.rating < 1.5\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      </span>\n                      <span *ngIf=\"pickup.rating >=1.5 && pickup.rating < 2.5\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      </span>\n                      <span *ngIf=\"pickup.rating >=2.5 && pickup.rating < 3.5\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      </span>\n                      <span *ngIf=\"pickup.rating >=3.5 && pickup.rating < 4.5\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      </span>\n                      <span *ngIf=\"pickup.rating >=4.5 && pickup.rating < 5.1\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                        <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      </span>\n                    </div>\n                    <div style=\"line-height: 1.2;\">\n                      <span class=\"price_span\" style=\"font-size: 11px;\">$</span>\n                      <span class=\"price_span\" style=\"font-size: 32px;line-height: 0.8;\" *ngIf=\"categoryVal=='Day'\">{{pickup.rent_cost_day}}</span>\n                      <!-- <span class=\"price_span\" style=\"font-size: 32px;\" *ngIf=\"categoryVal=='Day'\">{{pickup.rent_cost_day}}</span>\n                      <span class=\"price_span\" style=\"font-size: 32px;\" *ngIf=\"categoryVal=='Month'\">{{pickup.rent_cost_month}}</span> -->\n                    </div>\n                    \n                  </div>\n                  <div class=\"row_div\" >\n                    \n                      <div class=\"total_trips\">{{pickup.total_bookings}} trips</div>\n                      <div style=\"text-align: right;\">\n                        <span class=\"price_label\" style=\"margin-right: 5px;\">Per Day</span>\n                      </div>\n                      <!-- <div (click)=\"displayCategories(pickup.car_id)\" style=\"display: flex;align-items: baseline;position: relative;justify-content: flex-end;\">\n                      <span class=\"price_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n                      <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n                      <div  class=\"price_categories\">\n                        <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category,pickup.car_id)\">\n                          <span class=\"price_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n                        </div> \n                      </div>\n                      </div> -->\n                  </div>\n                </div>\n              </div>\n              \n            </ion-card>\n          </ng-template>\n        </swiper>\n      \n    </div>\n  </div>\n    \n</ion-content>\n<ion-footer class=\"ion-no-border \" style=\"padding-bottom:15px;\" >\n  <ion-toolbar class=\"bgtoolbar\" >\n    <div style=\"margin: 15px 0px 15px;\" >\n      <div style=\"text-align: center;\">\n        <div class=\"invite_label\">Invite Friends</div>\n        <div class=\"invite_label\" style=\"font-weight: 400;\">And spread the word</div>\n      </div>\n      <div style=\"text-align: center;\">\n        <ion-button (click)=\"inviteOthers()\" class=\"invite_btn\">\n          <span class=\"btn-text\">Invite</span>\n        </ion-button>\n      </div>\n    </div>\n    \n    \n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home-before-login_home-before-login_module_ts.js.map