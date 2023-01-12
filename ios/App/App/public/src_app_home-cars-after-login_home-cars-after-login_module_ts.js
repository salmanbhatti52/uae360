"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home-cars-after-login_home-cars-after-login_module_ts"],{

/***/ 16487:
/*!*******************************************************************************!*\
  !*** ./src/app/home-cars-after-login/home-cars-after-login-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeCarsAfterLoginPageRoutingModule": () => (/* binding */ HomeCarsAfterLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_cars_after_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-cars-after-login.page */ 48366);




const routes = [
    {
        path: '',
        component: _home_cars_after_login_page__WEBPACK_IMPORTED_MODULE_0__.HomeCarsAfterLoginPage
    }
];
let HomeCarsAfterLoginPageRoutingModule = class HomeCarsAfterLoginPageRoutingModule {
};
HomeCarsAfterLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomeCarsAfterLoginPageRoutingModule);



/***/ }),

/***/ 53034:
/*!***********************************************************************!*\
  !*** ./src/app/home-cars-after-login/home-cars-after-login.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeCarsAfterLoginPageModule": () => (/* binding */ HomeCarsAfterLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_cars_after_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-cars-after-login-routing.module */ 16487);
/* harmony import */ var _home_cars_after_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-cars-after-login.page */ 48366);








let HomeCarsAfterLoginPageModule = class HomeCarsAfterLoginPageModule {
};
HomeCarsAfterLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
            _home_cars_after_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeCarsAfterLoginPageRoutingModule
        ],
        declarations: [_home_cars_after_login_page__WEBPACK_IMPORTED_MODULE_1__.HomeCarsAfterLoginPage]
    })
], HomeCarsAfterLoginPageModule);



/***/ }),

/***/ 48366:
/*!*********************************************************************!*\
  !*** ./src/app/home-cars-after-login/home-cars-after-login.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeCarsAfterLoginPage": () => (/* binding */ HomeCarsAfterLoginPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_cars_after_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-cars-after-login.page.html?ngResource */ 40751);
/* harmony import */ var _home_cars_after_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-cars-after-login.page.scss?ngResource */ 94841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 26710);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 86675);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/share */ 58921);
















swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_6__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_6__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_6__.Zoom, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicSlides]);
let HomeCarsAfterLoginPage = class HomeCarsAfterLoginPage {
  constructor(router, navCtrlr, checkUser, appComponent, api, menuCtrlr, nativeGeoCoder) {
    this.router = router;
    this.navCtrlr = navCtrlr;
    this.checkUser = checkUser;
    this.appComponent = appComponent;
    this.api = api;
    this.menuCtrlr = menuCtrlr;
    this.nativeGeoCoder = nativeGeoCoder;
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
    this.userLocation = '';
    this.options = {
      useLocale: true,
      maxResults: 5
    };
    this.data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
    this.results = [...this.data];
    this.result = [];
    this.showContent = true;
    this.pickups = [];
  }

  ngOnInit() {
    // =======update appPages===========
    console.log('AppUserId: ', this.checkUser.appUserId);
    this.checkUser.checkUser();
    console.log("AppPages: ", this.checkUser.appPages);
    this.appComponent.appPages = this.checkUser.appPages; // =======done============
    // ==============localUserData====================

    this.api.localUserData = JSON.parse(localStorage.getItem('localUserData'));
    console.log('localUserData: ', this.api.localUserData); // ================================================

    this.getCarTypes();
    this.getCars();
    this.fetchLocation();
  }

  ionViewWillEnter() {
    // ================notifications status check===================
    // console.log('notificationVal: ',localStorage.getItem('notificationVal'));
    let toggleVal = localStorage.getItem('notificationVal');

    if (toggleVal == 'true') {
      this.api.toggleVal = true;
    } else if (toggleVal == 'false') {
      this.api.toggleVal = false;
    } else {
      this.api.toggleVal = true;
    }

    console.log('api.toggleVal', this.api.toggleVal); // ====================done=====================

    if (this.result.length > 0) {
      this.showContent = false;
    } else {
      this.showContent = true;
    }

    this.getNotifications();
    this.getCars();
  }

  getNotifications() {
    let data = {
      users_id: this.checkUser.appUserId
    };
    this.api.sendRequest('notifications_unread', data).subscribe(res => {
      console.log("Notification Respone: ", res);

      if (res.status == 'success') {
        if (res.data.length > 0) {
          this.totalNotifications = res.data.length;
        } else if (res.data.length == 0) {
          this.totalNotifications = 0;
        }
      } else if (res.status == 'error') {}
    }, err => {
      console.log("Api Error: ", err);
    });
  }

  handleChange(event) {
    this.result = [];
    console.log('Event: ', event);
    const query = event.target.value.toLowerCase();
    console.log('query: ', query);

    if (query == '') {
      this.showContent = true;
    }

    if (query != '') {
      let data = {
        users_customers_id: this.checkUser.appUserId,
        keyword: query
      };
      this.api.showLoading();
      this.api.sendRequest('getCarsByFiltersByName', data).subscribe(res => {
        console.log("Response: ", res);
        this.api.hideLoading();

        if (res.status == 'success') {
          this.showContent = false;
          this.result = res.data;
        } else if (res.status == 'error') {
          if (res.message != 'Keyword Required') {
            this.api.presentToast(res.message);
          }
        } else {}
      }, err => {
        this.api.hideLoading();
        console.log("API Call Error: ", err);
      });
    }
  }

  clearResult() {
    this.result = [];
    this.showContent = true;
  }

  fetchLocation() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const getCurrentLocation = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.getCurrentPosition({
        enableHighAccuracy: true
      });
      console.log('Current Location: ', getCurrentLocation);
      _this.latitude = getCurrentLocation.coords.latitude;
      _this.longitude = getCurrentLocation.coords.longitude;
      console.log('Latitude: ', _this.latitude);
      console.log('Longitude: ', _this.longitude);

      _this.fetchAddress();
    })();
  }

  fetchAddress() {
    this.nativeGeoCoder.reverseGeocode(this.latitude, this.longitude, this.options).then(result => {
      console.log('Result: ', result);
      console.log('Result 0: ', result[0]);
      this.api.fetchLocation = result[0].countryName;
    }, err => {
      console.log('Error:', err);
    });
  }

  getCarTypes() {
    // this.api.showLoading();
    this.api.sendRequest('carType').subscribe(res => {
      // this.api.hideLoading();
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
      }
    }, err => {
      console.log('Error', err); // this.api.hideLoading();
    });
  }

  getCars() {
    let data = {
      user_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('cars', data).subscribe(res => {
      setTimeout(() => {
        this.api.hideLoading();
      }, 1000);
      console.log(res);

      if (res.status == 'success') {
        this.pickups = res.data;
        this.api.allCars = res.data;
        console.log("api.allCars: ", this.api.allCars);
      }
    }, err => {
      setTimeout(() => {
        this.api.hideLoading();
      }, 1000);
      console.log(err);
    });
  }

  gotoFilter() {
    this.router.navigate(['/filters']);
  }

  gotoCarDetails(car_id) {
    let data = {
      car_id: car_id,
      user_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('getCarsById', data).subscribe(res => {
      this.api.hideLoading();
      console.log('api response:', res);

      if (res.status == 'success') {
        this.api.carDataById = res.data;
        console.log('carDataById:', this.api.carDataById);
        this.router.navigate(['/car-details']);
      }
    }, err => {
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
    } else if (itemVal == 'Sports') {
      this.pickups = [];
      this.item1 = false;
      this.item2 = true;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      let data = {
        car_type_id: this.carTypeOneId
      };
      this.api.showLoading();
      this.api.sendRequest('getCarsByCarType', data).subscribe(res => {
        this.api.hideLoading();
        console.log(res);

        if (res.status == 'success') {
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
      let data = {
        car_type_id: this.carTypeTwoId
      };
      this.api.showLoading();
      this.api.sendRequest('getCarsByCarType', data).subscribe(res => {
        this.api.hideLoading();
        console.log(res);

        if (res.status == 'success') {
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
      let data = {
        car_type_id: this.carTypeThreeId
      };
      this.api.showLoading();
      this.api.sendRequest('getCarsByCarType', data).subscribe(res => {
        this.api.hideLoading();
        console.log(res);

        if (res.status == 'success') {
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
      let data = {
        car_type_id: this.carTypeFourId
      };
      this.api.showLoading();
      this.api.sendRequest('getCarsByCarType', data).subscribe(res => {
        this.api.hideLoading();
        console.log(res);

        if (res.status == 'success') {
          this.pickups = res.data;
        }
      }, err => {
        this.api.hideLoading();
        console.log(err);
      });
    } else {}
  }

  inviteOthers() {
    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_share__WEBPACK_IMPORTED_MODULE_9__.Share.share({
        title: 'Book Cars Online at 360UAE',
        text: 'Really awesome cars you can book',
        url: 'https://dubai360.com/',
        dialogTitle: 'Share with buddies'
      });
    })();
  }

  gotoNotifications() {
    this.router.navigate(['/notifications']);
  }

  homeTab() {
    this.router.navigate(['/home-cars-after-login']);
  }

  messagesTab() {
    this.router.navigate(['/messages']);
  }

  bookingTab() {
    this.router.navigate(['/bookings']);
  }

  favoriteTab() {
    this.router.navigate(['/favorites']);
  }

};

HomeCarsAfterLoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
}, {
  type: _check_user_service__WEBPACK_IMPORTED_MODULE_3__.CheckUserService
}, {
  type: _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController
}, {
  type: _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__.NativeGeocoder
}];

HomeCarsAfterLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-home-cars-after-login',
  template: _home_cars_after_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_cars_after_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomeCarsAfterLoginPage);


/***/ }),

/***/ 40591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 40591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 58391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 94841:
/*!**********************************************************************************!*\
  !*** ./src/app/home-cars-after-login/home-cars-after-login.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n  margin-right: 21px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 0px;\n}\n\n.filter_div {\n  display: flex;\n  padding-left: 13.5px;\n}\n\n.notifications {\n  font-family: \"Urbanist\", sans-serif;\n  position: absolute;\n  background: #D93A3A;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  border-radius: 50%;\n  bottom: 12px;\n  left: 10px;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bell_div {\n  position: relative;\n  padding-right: 6.5px;\n  display: flex;\n}\n\n.wrapper {\n  padding: 2px 16px 14px;\n}\n\n.input_field {\n  --border-radius: 5px;\n  --placeholder-opacity: none;\n  --color: black;\n  --placeholder-color: #D4DCE1;\n  --background: white;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  --placeholder-font-style: \"Urbanist\", sans-serif;\n  --placeholder-font-weight: 500;\n  --box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  height: 40px;\n  --cancel-button-color: #D4DCE1;\n  --clear-button-color: #D4DCE1;\n  padding: 2px;\n  --icon-color: #D4DCE1;\n}\n\n.our_items {\n  margin-top: 14.5px;\n}\n\n.items_label {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n  padding: 0px 20px;\n}\n\n.cars_label {\n  color: #D4DCE1;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n}\n\n.carItem_box {\n  height: 50px;\n  text-align: center;\n  background-color: white;\n  border-radius: 5px;\n  padding: 4px 8px 8px;\n  width: 100%;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.selected_item {\n  text-align: center;\n  background-color: #8000FF;\n  border-radius: 10px;\n  padding: 4px 8px 8px;\n  width: 100%;\n}\n\n.fontActive {\n  color: white;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.items_wrapper {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.items_box {\n  display: flex;\n  justify-content: center;\n  margin-top: 9.5px;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding: 8px;\n}\n\n.card {\n  width: 100%;\n  margin: 9.5px 0px 0px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.car_img {\n  width: 100% !important;\n  height: 160px !important;\n  object-fit: cover;\n}\n\n.row_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.card_title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: black;\n  text-align: left;\n  text-transform: uppercase;\n}\n\n.price_span {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  color: #8000FF;\n}\n\n.per_hour {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n}\n\n.star_margin {\n  margin-right: 3.8px;\n}\n\n.total_trips {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: #0F172A;\n  text-align: left;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.car_div {\n  text-align: center;\n  margin-top: 13px;\n  position: relative;\n}\n\n.car_image {\n  object-fit: cover;\n  width: 100%;\n  height: 200px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.heart_icon {\n  position: absolute;\n  right: 5%;\n  top: 5%;\n}\n\n.left_subdiv {\n  text-align: left;\n  line-height: 1;\n  margin-top: 3px;\n}\n\n.invite_label {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 55%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .car_img {\n    width: 100% !important;\n    height: 250px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtY2Fycy1hZnRlci1sb2dpbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxob21lLWNhcnMtYWZ0ZXItbG9naW5cXGhvbWUtY2Fycy1hZnRlci1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEQUE7RUFDSSxxQkFBQTtBQ0dKOztBRERBO0VBQ0MsdUJBQUE7RUFDRyxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtFQUFjLG9CQUFBO0FDT2xCOztBRExBO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNTSjs7QURQQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDVUo7O0FEUkE7RUFDSSxzQkFBQTtBQ1dKOztBRFJBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtFQUNBLDhCQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ1dKOztBRFRBO0VBQ0ksa0JBQUE7QUNZSjs7QURWQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2FKOztBRFhBO0VBQ0ksY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUNlSjs7QURaQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ2NKOztBRFhBO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDY0o7O0FEWkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDZUo7O0FEYkE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNnQko7O0FEZEE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUNpQko7O0FEZkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDb0JKOztBRGxCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3FCSjs7QURuQkE7RUFDSSxtQkFBQTtBQ3NCSjs7QURwQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3VCSjs7QURwQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDc0JKOztBRHBCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN1Qko7O0FEcEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDd0JKOztBRHRCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixrQkFBQTtBQzRCMUM7O0FEMUJBO0VBQ0ksaUJBQUE7RUFBa0IsV0FBQTtFQUFZLGFBQUE7RUFBZSxnQ0FBQTtBQ2dDakQ7O0FEOUJBO0VBQ0ksa0JBQUE7RUFBbUIsU0FBQTtFQUFVLE9BQUE7QUNtQ2pDOztBRGpDQTtFQUNJLGdCQUFBO0VBQWlCLGNBQUE7RUFBZSxlQUFBO0FDc0NwQzs7QURsQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUNxQ0o7O0FEbENBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDcUNKOztBRG5DQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FDc0NKOztBRHBDQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDdUNKOztBRHJDQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDd0NKOztBRHRDQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQ3lDSjs7QURwQ0E7RUFJSTtJQUNJLHNCQUFBO0lBQ0Esd0JBQUE7RUNvQ047QUFDRiIsImZpbGUiOiJob21lLWNhcnMtYWZ0ZXItbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IHZhcigtLW1lbnUtaWNvbik7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDBweDtcclxufVxyXG4uZmlsdGVyX2RpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7cGFkZGluZy1sZWZ0OiAxMy41cHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnN7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3R0b206IDEycHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJlbGxfZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNi41cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHggMTRweDtcclxufVxyXG5cclxuLmlucHV0X2ZpZWxke1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IG5vbmU7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNENERDRTE7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICNENERDRTE7XHJcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI0Q0RENFMTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIC0taWNvbi1jb2xvcjogI0Q0RENFMTtcclxufVxyXG4ub3VyX2l0ZW1ze1xyXG4gICAgbWFyZ2luLXRvcDoxNC41cHhcclxufVxyXG4uaXRlbXNfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG59XHJcbi5jYXJzX2xhYmVse1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY2FySXRlbV9ib3h7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHggOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLnNlbGVjdGVkX2l0ZW17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMEZGO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDhweCA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5mb250QWN0aXZle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pdGVtc193cmFwcGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG4uaXRlbXNfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOS41cHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4uY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA5LjVweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcbi5jYXJfaW1ne1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5yb3dfZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG4uY2FyZF90aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnByaWNlX3NwYW57XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG59XHJcbi5wZXJfaG91cntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zdGFyX21hcmdpbntcclxuICAgIG1hcmdpbi1yaWdodDogMy44cHg7XHJcbn1cclxuLnRvdGFsX3RyaXBze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLy8gPT09PT09PXNlYXJjaCByZXN1bHQgY2FycyBjc3M9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5jYXJfaW5mb19ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogIzBGMTcyQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiA5cHggMTJweCA4LjVweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcl9uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnJhdGluZ192YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjRDREQ0UxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY2FyMl9wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhcjJfaW5mb19zdWJkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyX2RpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLXRvcDogMTNweDsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJfaW1hZ2V7XHJcbiAgICBvYmplY3QtZml0OiBjb3Zlcjt3aWR0aDogMTAwJTtoZWlnaHQ6IDIwMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxufVxyXG4uaGVhcnRfaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogNSU7dG9wOiA1JTtcclxufVxyXG4ubGVmdF9zdWJkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O2xpbmUtaGVpZ2h0OiAxO21hcmdpbi10b3A6IDNweDtcclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT1kb25lPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLmludml0ZV9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW52aXRlX2J0bntcclxuICAgIC0tYmFja2dyb3VuZDojODAwMEZGO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHdpZHRoOjU1JTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG4tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmJ0bl9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0IxQThCOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmJ0bkFjdGl2ZV9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmlvbl90YWJfYmFye1xyXG4gICAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2IoMCAwIDAgLyAxNiUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT1pcGFkIG1lZGlhIHF1ZXJ5PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gICAgLmNhcl9pbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG59XG5cbi5tZW51aWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xuICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggMTZweCAwcHg7XG59XG5cbi5maWx0ZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAxMy41cHg7XG59XG5cbi5ub3RpZmljYXRpb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJlbGxfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiA2LjVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAycHggMTZweCAxNHB4O1xufVxuXG4uaW5wdXRfZmllbGQge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiBub25lO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0Q0RENFMTtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xuICAtLWJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI0Q0RENFMTtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6ICNENERDRTE7XG4gIHBhZGRpbmc6IDJweDtcbiAgLS1pY29uLWNvbG9yOiAjRDREQ0UxO1xufVxuXG4ub3VyX2l0ZW1zIHtcbiAgbWFyZ2luLXRvcDogMTQuNXB4O1xufVxuXG4uaXRlbXNfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uY2Fyc19sYWJlbCB7XG4gIGNvbG9yOiAjRDREQ0UxO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jYXJJdGVtX2JveCB7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0cHggOHB4IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uc2VsZWN0ZWRfaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDBGRjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNHB4IDhweCA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9udEFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaXRlbXNfd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLml0ZW1zX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA5LjVweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDkuNXB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uY2FyX2ltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5yb3dfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5jYXJkX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByaWNlX3NwYW4ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xufVxuXG4ucGVyX2hvdXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3Rhcl9tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDMuOHB4O1xufVxuXG4udG90YWxfdHJpcHMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJfaW5mb19ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICMwRjE3MkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiA5cHggMTJweCA4LjVweCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcl9uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmF0aW5nX3ZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0Q0RENFMTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNhcjJfcHJpY2Uge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcjJfaW5mb19zdWJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyX2RpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyX2ltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLmhlYXJ0X2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1JTtcbiAgdG9wOiA1JTtcbn1cblxuLmxlZnRfc3ViZGl2IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmludml0ZV9sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pbnZpdGVfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XG4gIC0tYm9yZGVyLXJhZGl1czowcHg7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5idG5fbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNCMUE4Qjk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5idG5BY3RpdmVfbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM4MDAwRkY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5pb25fdGFiX2JhciB7XG4gIHBhZGRpbmc6IDhweCA4cHggMTJweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcbiAgLmNhcl9pbWcge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

/***/ }),

/***/ 40751:
/*!**********************************************************************************!*\
  !*** ./src/app/home-cars-after-login/home-cars-after-login.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Home</div>\n      <div style=\"display: flex\">\n       <div class=\"bell_div\" (click)=\"gotoNotifications()\" *ngIf=\"api.toggleVal == true\">\n         <div class=\"notifications\" *ngIf=\"totalNotifications > 0\">{{totalNotifications}}</div>\n         <img src=\"assets/images/icons/bell.svg\" alt=\"\">\n       </div>\n       <div class=\"filter_div\" >\n         <img (click)=\"gotoFilter()\" src=\"assets/images/icons/filter.svg\" alt=\"\">\n       </div>\n      </div>\n    </div>\n    <div style=\"margin: 16px;\">\n      <ion-searchbar [debounce]=\"1000\" \n        (ionChange)=\"handleChange($event)\" type=\"text\"\n        show-clear-button=\"always\" class=\"input_field\" \n        placeholder=\"Search for Cars\" (ionClear)=\"clearResult()\">\n      </ion-searchbar>\n    </div>\n  </ion-toolbar >\n  \n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\" *ngIf=\"result.length > 0\">\n    <div *ngFor=\"let res of result\">\n      <div class=\"car_div\" (click)=\"gotoCarDetails(res.car_id)\" >\n        <img class=\"car_image\" src=\"{{api.imageUrlString}}{{res.image1}}\" alt=\"\">\n        \n        <img class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"res.favourite_status != 'liked'\">\n        <img class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"res.favourite_status == 'liked'\">\n        <div class=\"car_info_box\" >\n          <div>\n            <div class=\"car_name poppins\">{{res.vehical_name}}</div>\n            <div class=\"left_subdiv\" >\n              <span *ngIf=\"res.rating == 0 \">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"res.rating >=1 && res.rating < 1.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"res.rating >=1.5 && res.rating < 2.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"res.rating >=2.5 && res.rating < 3.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"res.rating >=3.5 && res.rating < 4.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"res.rating >=4.5 && res.rating < 5.1\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              </span>\n              <span class=\"rating_value poppins\">{{res.total_bookings}} trips</span>\n            </div>\n          </div>\n          <div class=\"car2_info_subdiv\">\n            <div style=\"line-height: 1;\"><span class=\"car2_price poppins\" >$</span><span class=\"car2_price poppins\" style=\"font-size: 32px;margin-right: 3px;\">{{res.rent_cost_day}}</span><span class=\"car2_price poppins\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n    \n    \n  </div>\n  \n  <div *ngIf=\"showContent == true\">\n    <div class=\"items_label\">What are you looking for?</div>\n    <div style=\"padding-left: 11px;\" >\n      <swiper [config]=\"{slidesPerView:4.4, spaceBetween:9, initialSlide:0, speed:400}\" [pagination]=\"false\" style=\"padding: 8px;\">\n        <ng-template swiperSlide class=\"categories\">\n          <div class=\"carItem_box\" [class.selected_item]=\"item1 == true\" (click)=\"selectItem('all')\">\n            <img src=\"assets/images/icons/car_grey.svg\" alt=\"\" *ngIf=\"item1 == false\">\n            <img src=\"assets/images/icons/car_white.svg\" alt=\"\" *ngIf=\"item1 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item1 == true\">All Cars</div>\n          </div>\n        </ng-template>\n        <ng-template swiperSlide class=\"categories\">\n          <div class=\"carItem_box\" [class.selected_item]=\"item2 == true\" (click)=\"selectItem('Sports')\">\n            <img src=\"assets/images/icons/sports_car_grey.svg\" alt=\"\" *ngIf=\"item2 == false\">\n            <img src=\"assets/images/icons/sports_car_white.svg\" alt=\"\" *ngIf=\"item2 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item2 == true\">{{carTypeOne}}</div>\n          </div>\n        </ng-template>\n        <ng-template swiperSlide class=\"categories\">\n          <div class=\"carItem_box\" [class.selected_item]=\"item3 == true\" (click)=\"selectItem('Luxury')\">\n            <img src=\"assets/images/icons/luxury_car_grey.svg\" alt=\"\" *ngIf=\"item3 == false\">\n            <img src=\"assets/images/icons/luxury_car_white.svg\" alt=\"\" *ngIf=\"item3 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item3 == true\">{{carTypeTwo}}</div>\n          </div>\n        </ng-template>\n        <ng-template swiperSlide class=\"categories\">\n          <div class=\"carItem_box\" [class.selected_item]=\"item4 == true\" (click)=\"selectItem('Pickup')\">\n            <img src=\"assets/images/icons/taxi_grey.svg\" alt=\"\" *ngIf=\"item4 == false\">\n            <img src=\"assets/images/icons/taxi_white.svg\" alt=\"\" *ngIf=\"item4 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item4 == true\">{{carTypeThree}}</div>\n          </div>\n        </ng-template>\n        <ng-template swiperSlide class=\"categories\" >\n          <div class=\"carItem_box\" [class.selected_item]=\"item5 == true\" style=\"margin-right: 0px;\" (click)=\"selectItem('SUV')\">\n            <img src=\"assets/images/icons/suv's_grey.svg\" alt=\"\" *ngIf=\"item5 == false\">\n            <img src=\"assets/images/icons/suv's_white.svg\" alt=\"\" *ngIf=\"item5 == true\">\n            <div class=\"cars_label\" [class.fontActive]=\"item5 == true\">{{carTypeFour}}</div>\n          </div>\n        </ng-template>\n      </swiper>\n    </div>\n\n    <div class=\"items_wrapper\">\n      <div class=\"items_label\" style=\"margin-top: 5px;padding-left: 3px;\">Top Rented\n      </div>\n  \n      <swiper [config]=\"{slidesPerView:1.4 ,spaceBetween:9, initialSlide:0, speed:400}\" [pagination]=\"false\" >\n        <ng-template swiperSlide *ngFor=\"let pickup of pickups;\" style=\"width: 58%; height: 100%;\">\n          <ion-card class=\"card\" (click)=\"gotoCarDetails(pickup.car_id)\">\n            <img class=\"car_img\" src=\"{{api.imageUrlString}}{{pickup.image1}}\" alt=\"\">\n            <div style=\"padding: 5px 7px 7.5px 8px;\">\n              <div>\n                <div class=\"card_title\">{{pickup.vehical_name}}</div>\n              </div>\n              <div class=\"card_content\">\n                <div class=\"row_div\">\n                  <div>\n                    <span *ngIf=\"pickup.rating == 0 \">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"pickup.rating >=1 && pickup.rating < 1.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"pickup.rating >=1.5 && pickup.rating < 2.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"pickup.rating >=2.5 && pickup.rating < 3.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"pickup.rating >=3.5 && pickup.rating < 4.5\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                    </span>\n                    <span *ngIf=\"pickup.rating >=4.5 && pickup.rating < 5.1\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                      <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                    </span>\n                    \n                  </div>\n                  <div style=\"line-height: 1.2;\">\n                    <span class=\"price_span\" style=\"font-size: 11px;\">$</span>\n                    <span class=\"price_span\" style=\"font-size: 32px;line-height: 0.8;\">{{pickup.rent_cost_day}}</span> \n                  </div>\n                  \n                </div>\n                <div class=\"row_div\">\n                  <div class=\"total_trips\">{{pickup.total_bookings}} trips</div>\n                  <div class=\"per_hour\">Per Day</div>\n                </div>\n              </div>\n            </div>\n            \n          </ion-card>\n        </ng-template>\n        \n      </swiper>\n    \n    </div>\n    \n\n  \n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n   \n  <div style=\"margin: 15px 0px 15px;\" >\n    <div style=\"text-align: center;\">\n      <div class=\"invite_label\">Invite Friends</div>\n      <div class=\"invite_label\" style=\"font-weight: 400;\">And spread the word</div>\n    </div>\n    <div style=\"text-align: center;\">\n      <ion-button (click)=\"inviteOthers()\" class=\"invite_btn\">\n        <span class=\"btn-text\">Invite</span>\n      </ion-button>\n    </div>\n  </div>\n    <ion-tabs style=\"display:contents ;\">\n\n      <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n        <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n          <img src=\"assets/images/tab_icons/home_active.svg\" alt=\"\">\n          <ion-label class=\"btnActive_label\">Home</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n          <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages.svg\" alt=\"\">\n          <ion-label class=\"btn_label\" >Messages</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n          <img src=\"assets/images/tab_icons/booking.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Booking</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n          <img src=\"assets/images/tab_icons/favorite.svg\" alt=\"\">\n          <ion-label class=\"btn_label\">Favorities</ion-label>\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n    </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home-cars-after-login_home-cars-after-login_module_ts.js.map