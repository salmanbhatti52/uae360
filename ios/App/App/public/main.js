(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        redirectTo: 'home-before-login',
        pathMatch: 'full'
    },
    {
        path: 'home-before-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home-before-login_home-before-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home-before-login/home-before-login.module */ 803)).then(m => m.HomeBeforeLoginPageModule)
    },
    {
        path: 'filters',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_filters_filters_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./filters/filters.module */ 6076)).then(m => m.FiltersPageModule)
    },
    {
        path: 'car-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_car-details_car-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./car-details/car-details.module */ 2901)).then(m => m.CarDetailsPageModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sign-in_sign-in_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in/sign-in.module */ 5391)).then(m => m.SignInPageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sign-up_sign-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up/sign-up.module */ 3982)).then(m => m.SignUpPageModule)
    },
    {
        path: 'verify-phone-by-otp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("src_app_verify-phone-by-otp_verify-phone-by-otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./verify-phone-by-otp/verify-phone-by-otp.module */ 2876)).then(m => m.VerifyPhoneByOtpPageModule)
    },
    {
        path: 'terms-and-services',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-and-services_terms-and-services_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-services/terms-and-services.module */ 5629)).then(m => m.TermsAndServicesPageModule)
    },
    {
        path: 'forgot-password-by-email',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_forgot-password-by-email_forgot-password-by-email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password-by-email/forgot-password-by-email.module */ 6734)).then(m => m.ForgotPasswordByEmailPageModule)
    },
    {
        path: 'otp-by-email',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_otp-by-email_otp-by-email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./otp-by-email/otp-by-email.module */ 7560)).then(m => m.OtpByEmailPageModule)
    },
    {
        path: 'live-chat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_live-chat_live-chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./live-chat/live-chat.module */ 7642)).then(m => m.LiveChatPageModule)
    },
    {
        path: 'about-us',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about-us_about-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about-us/about-us.module */ 8310)).then(m => m.AboutUsPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 9182)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'messages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./messages/messages.module */ 6889)).then(m => m.MessagesPageModule)
    },
    {
        path: 'favorites',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_favorites_favorites_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./favorites/favorites.module */ 5407)).then(m => m.FavoritesPageModule)
    },
    {
        path: 'bookings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_give-ratings-popup_give-ratings-popup_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_bookings_bookings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bookings/bookings.module */ 7938)).then(m => m.BookingsPageModule)
    },
    {
        path: 'home-cars-after-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home-cars-after-login_home-cars-after-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home-cars-after-login/home-cars-after-login.module */ 3034)).then(m => m.HomeCarsAfterLoginPageModule)
    },
    {
        path: 'message-owner-side',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_message-owner-side_message-owner-side_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./message-owner-side/message-owner-side.module */ 9747)).then(m => m.MessageOwnerSidePageModule)
    },
    {
        path: 'give-ratings-popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_give-ratings-popup_give-ratings-popup_page_ts"), __webpack_require__.e("src_app_give-ratings-popup_give-ratings-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./give-ratings-popup/give-ratings-popup.module */ 4524)).then(m => m.GiveRatingsPopupPageModule)
    },
    {
        path: 'cancel-booking-popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cancel-booking-popup_cancel-booking-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cancel-booking-popup/cancel-booking-popup.module */ 5638)).then(m => m.CancelBookingPopupPageModule)
    },
    {
        path: 'live-chat-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_live-chat-screen_live-chat-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./live-chat-screen/live-chat-screen.module */ 2273)).then(m => m.LiveChatScreenPageModule)
    },
    {
        path: 'car-booking',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_car-booking_car-booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./car-booking/car-booking.module */ 5333)).then(m => m.CarBookingPageModule)
    },
    {
        path: 'select-date',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_select-date_select-date_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./select-date/select-date.module */ 5693)).then(m => m.SelectDatePageModule)
    },
    {
        path: 'select-time',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_select-time_select-time_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./select-time/select-time.module */ 4775)).then(m => m.SelectTimePageModule)
    },
    {
        path: 'summary',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_summary_summary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./summary/summary.module */ 7001)).then(m => m.SummaryPageModule)
    },
    {
        path: 'payment-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("default-src_app_new-payment-method_new-payment-method_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_payment-details_payment-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment-details/payment-details.module */ 6472)).then(m => m.PaymentDetailsPageModule)
    },
    {
        path: 'new-payment-method',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("default-src_app_new-payment-method_new-payment-method_page_ts"), __webpack_require__.e("src_app_new-payment-method_new-payment-method_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./new-payment-method/new-payment-method.module */ 1795)).then(m => m.NewPaymentMethodPageModule)
    },
    {
        path: 'booked',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_booked_booked_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booked/booked.module */ 3615)).then(m => m.BookedPageModule)
    },
    {
        path: 'ratings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ratings_ratings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ratings/ratings.module */ 1136)).then(m => m.RatingsPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 7075)).then(m => m.SettingsPageModule)
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-password/change-password.module */ 8232)).then(m => m.ChangePasswordPageModule)
    },
    {
        path: 'saved-payment-methods',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("default-src_app_new-payment-method_new-payment-method_page_ts"), __webpack_require__.e("src_app_saved-payment-methods_saved-payment-methods_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./saved-payment-methods/saved-payment-methods.module */ 7135)).then(m => m.SavedPaymentMethodsPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_edit-profile_edit-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-profile/edit-profile.module */ 1241)).then(m => m.EditProfilePageModule)
    },
    {
        path: 'delete-account-popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_delete-account-popup_delete-account-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./delete-account-popup/delete-account-popup.module */ 5010)).then(m => m.DeleteAccountPopupPageModule)
    },
    {
        path: 'expiry-date-popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("src_app_expiry-date-popup_expiry-date-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./expiry-date-popup/expiry-date-popup.module */ 9093)).then(m => m.ExpiryDatePopupPageModule)
    },
    {
        path: 'set-new-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_set-new-password_set-new-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./set-new-password/set-new-password.module */ 9695)).then(m => m.SetNewPasswordPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-user.service */ 7852);









let AppComponent = class AppComponent {
    constructor(menu, router, navCtrl, platform, checkUser) {
        // this.appUserId = this.checkUser.appUserId;
        // this.checkUser.checkUser();
        // this.appPages = this.checkUser.appPages;
        this.menu = menu;
        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.checkUser = checkUser;
        this.appPages = [];
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            setTimeout(() => {
                _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.hide({
                    fadeOutDuration: 1000
                });
            }, 10000);
        });
    }
    logout() {
        this.checkUser.appUserId = null;
        localStorage.removeItem('appUserId');
        console.log('appUserId removed');
        // this.router.navigate(['/home-before-login']);
        this.navCtrl.navigateForward('home-before-login');
        this.closeMenu();
    }
    closeMenu() {
        this.menu.close();
    }
    gotoSignIn() {
        this.menu.toggle();
        this.navCtrl.navigateForward('sign-in');
    }
    goForEditProfile() {
        this.navCtrl.navigateForward('edit-profile');
        this.closeMenu();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_3__.CheckUserService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);








let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 7852:
/*!***************************************!*\
  !*** ./src/app/check-user.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckUserService": () => (/* binding */ CheckUserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let CheckUserService = class CheckUserService {
    constructor() {
        this.appUserId = localStorage.getItem('appUserId');
        this.appPages = [];
    }
    checkUser() {
        this.appUserId;
        if (this.appUserId == null) {
            this.appPages = [
                { title: 'Browse', url: '/home-before-login', img: 'assets/images/icons/search_sm.svg' },
                { title: 'Live Chat', url: '/live-chat', img: 'assets/images/icons/live_chat_sm.svg' },
                { title: 'About Us', url: '/about-us', img: 'assets/images/icons/about_us_sm.svg' },
            ];
        }
        else if (this.appUserId != null) {
            this.appPages = [
                { title: 'Home', url: '/home-cars-after-login', img: 'assets/images/icons/home_sm.png' },
                { title: 'Settings', url: '/settings', img: 'assets/images/icons/settings_sm.svg' },
                { title: 'Live Chat', url: '/live-chat', img: 'assets/images/icons/live_chat_sm.svg' },
                { title: 'About Us', url: '/about-us', img: 'assets/images/icons/about_us_sm.svg' },
            ];
        }
        else {
        }
    }
};
CheckUserService.ctorParameters = () => [];
CheckUserService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CheckUserService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu {\n  --background:black !important;\n}\n\nion-menu ion-content {\n  --background: black !important;\n  padding: 60px 23px 40px !important;\n}\n\nion-menu ion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background: none;\n  background-color: black !important;\n  padding: 20px 23px 30px;\n}\n\nion-menu.md ion-content {\n  --padding-start: 23px;\n  --padding-end: 23px;\n  --padding-top: 60px;\n  --padding-bottom: 40px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-start: 23px;\n  --padding-end: 23px;\n  --padding-top: 60px;\n  --padding-bottom: 40px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.app_title {\n  margin-top: 52px;\n  margin-left: 17px;\n  font-size: 35px;\n  font-weight: bold;\n  color: white;\n}\n\n.select_language {\n  font-size: 14px;\n  font-weight: 400;\n  color: #B1A8B9;\n}\n\n.language_btns {\n  margin-top: 9px;\n  display: flex;\n  justify-content: center;\n}\n\nion-button {\n  --border-radius: 10px;\n  width: 36%;\n  height: 32px;\n}\n\n.english_text {\n  font-family: \"Poppins\", sans-serif;\n  margin-left: 5.5px;\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n}\n\n.arabic_text {\n  margin-left: 5.5px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #D4DCE1;\n}\n\n.item_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: white;\n}\n\n.user_name {\n  margin-top: 12px;\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n  font-size: 25px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.location_box {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.location {\n  font-family: \"Poppins\", sans-serif;\n  color: #B1A8B9;\n  font-size: 19px;\n  font-weight: 400;\n}\n\n.profile_div {\n  position: relative;\n  width: 85px;\n  margin: 0px auto;\n}\n\n.edit_icon {\n  position: absolute;\n  top: 65%;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjs7QURDQTtFQUNFLDhCQUFBO0VBRUEsa0NBQUE7QUNDRjs7QURDQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QURBQTs7RUFFRSxrQkFBQTtBQ0dGOztBREFBO0VBQ0UsMkRBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0Usc0RBQUE7QUNERjs7QURJQTtFQUNFLCtCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGOztBRElBO0VBRUUscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLCtCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7QUNGRjs7QURLQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUNIRjs7QURNQTtFQUNFLGlDQUFBO0FDSEY7O0FETUE7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0pGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0hGOztBREtBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBRElBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0RGOztBREdBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSUY7O0FERkE7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDT0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnV7XG4gIC0tYmFja2dyb3VuZDpibGFjayAhaW1wb3J0YW50O1xufVxuaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8vIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbiAgcGFkZGluZzogNjBweCAyM3B4IDQwcHggIWltcG9ydGFudDtcbn1cbmlvbi1tZW51IGlvbi1mb290ZXJ7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMjNweCAzMHB4IDtcbn1cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyM3B4O1xuICAtLXBhZGRpbmctZW5kOiAyM3B4O1xuICAtLXBhZGRpbmctdG9wOiA2MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAvLyAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDIzcHg7XG4gIC0tcGFkZGluZy10b3A6IDYwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5hcHBfdGl0bGV7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zZWxlY3RfbGFuZ3VhZ2V7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNCMUE4Qjk7XG59XG4ubGFuZ3VhZ2VfYnRuc3tcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1idXR0b257XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDM2JTtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmVuZ2xpc2hfdGV4dHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDUuNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5hcmFiaWNfdGV4dHtcbiAgbWFyZ2luLWxlZnQ6IDUuNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRDREQ0UxO1xufVxuLml0ZW1fbGFiZWx7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnVzZXJfbmFtZXtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvY2F0aW9uX2JveHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2NhdGlvbntcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xuICBjb2xvcjogI0IxQThCOTtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnByb2ZpbGVfZGl2e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4NXB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmVkaXRfaWNvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY1JTtcbiAgcmlnaHQ6IDBweDtcbn0iLCJpb24tbWVudSB7XG4gIC0tYmFja2dyb3VuZDpibGFjayAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNjBweCAyM3B4IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUgaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAyM3B4IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyM3B4O1xuICAtLXBhZGRpbmctZW5kOiAyM3B4O1xuICAtLXBhZGRpbmctdG9wOiA2MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyM3B4O1xuICAtLXBhZGRpbmctZW5kOiAyM3B4O1xuICAtLXBhZGRpbmctdG9wOiA2MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmFwcF90aXRsZSB7XG4gIG1hcmdpbi10b3A6IDUycHg7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWxlY3RfbGFuZ3VhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjQjFBOEI5O1xufVxuXG4ubGFuZ3VhZ2VfYnRucyB7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAzNiU7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLmVuZ2xpc2hfdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDUuNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFyYWJpY190ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDUuNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRDREQ0UxO1xufVxuXG4uaXRlbV9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyX25hbWUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2NhdGlvbl9ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9jYXRpb24ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjQjFBOEI5O1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wcm9maWxlX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDg1cHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5lZGl0X2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjUlO1xuICByaWdodDogMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content style=\"--background: black !important; --padding: 60px 23px 40px;\">\n        <!-- <ion-list id=\"inbox-list\">\n          <ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note> -->\n          <div>\n            <img (click)=\"closeMenu()\" src=\"assets/images/icons/cancel.svg\" alt=\"\">\n          </div>\n          <div class=\"app_title\" *ngIf=\"checkUser.appUserId==null\">\n            360UAE\n          </div>\n          <div *ngIf=\"checkUser.appUserId!=null\" (click)=\"goForEditProfile()\">\n            <div class=\"profile_div\">\n              <img src=\"assets/images/sm_dummy_profile.svg\" alt=\"\">\n              <img class=\"edit_icon\" src=\"assets/images/icons/sm_edit_icon.svg\" alt=\"\">\n            </div>\n            <div class=\"user_name\">Daniel Jefferson</div>\n            <div class=\"location_box\">\n              <img style=\"margin-right: 6.3px;\" src=\"assets/images/icons/sm_location_icon.svg\" alt=\"\">\n              <span class=\"location\">Netherlands</span>\n            </div>\n          </div>\n          <!-- <div style=\"margin-top: 36px; text-align: center;\">\n            <div class=\"select_language\">Choose your language</div>\n            <div class=\"language_btns\">\n              <ion-button style=\"--background: white; margin-right: 12px;\">\n                <img src=\"assets/images/icons/language_blue.svg\" alt=\"\">\n                <span class=\"english_text\">\n                  English\n                </span>\n              </ion-button>\n              <ion-button fill=\"outline\" style=\"--border-color: #D4DCE1;\">\n                <img src=\"assets/images/icons/language_white.svg\" alt=\"\">\n                <span class=\"arabic_text\" style=\"color: #D4DCE1; font-size: 12px; margin-left: 5.5px;\">\n                  العربی\n                </span> \n              </ion-button>\n            </div>\n          </div> -->\n          <div style=\"height: 50px;\"></div>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <div routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\" style=\"--background: black !important; text-align: center;\">\n              <!-- <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon> -->\n              <div style=\"margin-top: 20px; text-align: left;\">\n                <ion-row>\n                  <ion-col style=\"padding: 0px;\" size=\"2\"><img  src=\"{{p.img}}\"></ion-col>\n                  <ion-col style=\"padding: 0px;\" size=\"7\"><ion-label class=\"item_label\">{{ p.title }}</ion-label></ion-col>\n                  <ion-col style=\"padding: 0px;\" size=\"3\"></ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-menu-toggle>\n        <!-- </ion-list> -->\n\n        <!-- <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list> -->\n      </ion-content>\n     \n      <div style=\"padding: 20px 23px 30px;\">\n        <ion-row >\n          <ion-col style=\"padding: 0px;\" size=\"2\"><img src=\"assets/images/icons/log_in_out_sm.svg\" alt=\"\"></ion-col>\n          <ion-col style=\"padding: 0px;\" size=\"7\">\n            <span (click)=\"gotoSignIn()\" class=\"item_label\" *ngIf=\"checkUser.appUserId==null\">Login or Signup</span>\n            <span (click)=\"logout()\" class=\"item_label\" *ngIf=\"checkUser.appUserId!=null\">Logout</span>\n          </ion-col>\n          <ion-col style=\"padding: 0px;\" size=\"3\"></ion-col>\n        </ion-row>\n      </div>\n    \n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map