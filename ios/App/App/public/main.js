(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [
    {
        path: '',
        redirectTo: 'home-before-login',
        pathMatch: 'full'
    },
    {
        path: 'home-before-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home-before-login_home-before-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home-before-login/home-before-login.module */ 80803)).then(m => m.HomeBeforeLoginPageModule)
    },
    {
        path: 'filters',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_filters_filters_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./filters/filters.module */ 46076)).then(m => m.FiltersPageModule)
    },
    {
        path: 'car-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_car-details_car-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./car-details/car-details.module */ 32901)).then(m => m.CarDetailsPageModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-in_sign-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in/sign-in.module */ 22831)).then(m => m.SignInPageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sign-up_sign-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up/sign-up.module */ 73982)).then(m => m.SignUpPageModule)
    },
    {
        path: 'verify-phone-by-otp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("src_app_verify-phone-by-otp_verify-phone-by-otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./verify-phone-by-otp/verify-phone-by-otp.module */ 22876)).then(m => m.VerifyPhoneByOtpPageModule)
    },
    {
        path: 'terms-and-services',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-and-services_terms-and-services_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-services/terms-and-services.module */ 95629)).then(m => m.TermsAndServicesPageModule)
    },
    {
        path: 'forgot-password-by-email',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgot-password-by-email_forgot-password-by-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password-by-email/forgot-password-by-email.module */ 36734)).then(m => m.ForgotPasswordByEmailPageModule)
    },
    {
        path: 'otp-by-email',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("src_app_otp-by-email_otp-by-email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./otp-by-email/otp-by-email.module */ 17560)).then(m => m.OtpByEmailPageModule)
    },
    {
        path: 'live-chat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_live-chat_live-chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./live-chat/live-chat.module */ 27642)).then(m => m.LiveChatPageModule)
    },
    {
        path: 'about-us',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about-us_about-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about-us/about-us.module */ 58310)).then(m => m.AboutUsPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("src_app_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 89182)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'messages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./messages/messages.module */ 84812)).then(m => m.MessagesPageModule)
    },
    {
        path: 'favorites',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_favorites_favorites_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./favorites/favorites.module */ 75407)).then(m => m.FavoritesPageModule)
    },
    {
        path: 'bookings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("src_app_bookings_bookings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bookings/bookings.module */ 7938)).then(m => m.BookingsPageModule)
    },
    {
        path: 'home-cars-after-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home-cars-after-login_home-cars-after-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home-cars-after-login/home-cars-after-login.module */ 53034)).then(m => m.HomeCarsAfterLoginPageModule)
    },
    {
        path: 'message-owner-side',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_message-owner-side_message-owner-side_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./message-owner-side/message-owner-side.module */ 79747)).then(m => m.MessageOwnerSidePageModule)
    },
    {
        path: 'give-ratings-popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_give-ratings-popup_give-ratings-popup_page_ts"), __webpack_require__.e("src_app_give-ratings-popup_give-ratings-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./give-ratings-popup/give-ratings-popup.module */ 64524)).then(m => m.GiveRatingsPopupPageModule)
    },
    {
        path: 'cancel-booking-popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cancel-booking-popup_cancel-booking-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cancel-booking-popup/cancel-booking-popup.module */ 35638)).then(m => m.CancelBookingPopupPageModule)
    },
    {
        path: 'live-chat-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_live-chat-screen_live-chat-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./live-chat-screen/live-chat-screen.module */ 12273)).then(m => m.LiveChatScreenPageModule)
    },
    {
        path: 'car-booking',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_car-booking_car-booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./car-booking/car-booking.module */ 45333)).then(m => m.CarBookingPageModule)
    },
    {
        path: 'select-date',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_select-date_select-date_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./select-date/select-date.module */ 95693)).then(m => m.SelectDatePageModule)
    },
    {
        path: 'select-time',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_select-time_select-time_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./select-time/select-time.module */ 64775)).then(m => m.SelectTimePageModule)
    },
    {
        path: 'summary',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_summary_summary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./summary/summary.module */ 87001)).then(m => m.SummaryPageModule)
    },
    {
        path: 'payment-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("default-src_app_new-payment-method_new-payment-method_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_payment-details_payment-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment-details/payment-details.module */ 76472)).then(m => m.PaymentDetailsPageModule)
    },
    {
        path: 'new-payment-method',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("default-src_app_new-payment-method_new-payment-method_page_ts"), __webpack_require__.e("src_app_new-payment-method_new-payment-method_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./new-payment-method/new-payment-method.module */ 31795)).then(m => m.NewPaymentMethodPageModule)
    },
    {
        path: 'booked',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_booked_booked_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booked/booked.module */ 3615)).then(m => m.BookedPageModule)
    },
    {
        path: 'ratings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ratings_ratings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ratings/ratings.module */ 71136)).then(m => m.RatingsPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-password/change-password.module */ 68232)).then(m => m.ChangePasswordPageModule)
    },
    {
        path: 'saved-payment-methods',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("default-src_app_new-payment-method_new-payment-method_page_ts"), __webpack_require__.e("src_app_saved-payment-methods_saved-payment-methods_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./saved-payment-methods/saved-payment-methods.module */ 27135)).then(m => m.SavedPaymentMethodsPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-profile_edit-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-profile/edit-profile.module */ 71241)).then(m => m.EditProfilePageModule)
    },
    {
        path: 'delete-account-popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_delete-account-popup_delete-account-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./delete-account-popup/delete-account-popup.module */ 85010)).then(m => m.DeleteAccountPopupPageModule)
    },
    {
        path: 'expiry-date-popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("src_app_expiry-date-popup_expiry-date-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./expiry-date-popup/expiry-date-popup.module */ 19093)).then(m => m.ExpiryDatePopupPageModule)
    },
    {
        path: 'set-new-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_set-new-password_set-new-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./set-new-password/set-new-password.module */ 99695)).then(m => m.SetNewPasswordPageModule)
    },
    {
        path: 'booking-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("default-src_app_give-ratings-popup_give-ratings-popup_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_booking-details_booking-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booking-details/booking-details.module */ 83698)).then(m => m.BookingDetailsPageModule)
    },
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

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 15414);
/* harmony import */ var _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor-community/facebook-login */ 4655);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! onesignal-cordova-plugin */ 10182);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7__);













let AppComponent = class AppComponent {
  constructor(menu, router, navCtrl, platform, checkUser, api) {
    this.menu = menu;
    this.router = router;
    this.navCtrl = navCtrl;
    this.platform = platform;
    this.checkUser = checkUser;
    this.api = api;
    this.appPages = [];
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.pushNotification(); // Stripe.initialize({
      //   publishableKey: 'pk_test_51MQ37qDFPlDlGxkdw91wUybcouQFM0EOUev6HlGRi86QjYCu3tITcy1KzcDJGrSncQ8G2rHYxPmiDAm4Y027ff6g00Es0yT7y1',
      // });
    });
  }

  pushNotification() {
    console.log("push notification in function.....");
    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().setAppId("9b5b89b8-946c-4f66-8bad-e6142d157d17");
    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().setNotificationOpenedHandler(function (jsonData) {
      console.log("notificationOpenedCallback: " + JSON.stringify(jsonData));
    });
    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().promptForPushNotificationsWithUserResponse(accepted => {
      console.log("promptForPushNotificationsWithUserResponse: " + accepted);
    });
    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().getDeviceState(resp => {
      const osUser = resp;
      console.log("incoming onesignl resp-----", resp);
      console.log("incoming onesignl uidd-----", osUser.userId);
      localStorage.setItem("oneSignalUserId", osUser.userId); // this.api.oneSignalUserId = osUser.userId
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // ========uncomment ===========================
      let userId = localStorage.getItem('appUserId');
      console.log('userId: ', userId);

      if (userId !== null) {
        _this.router.navigate(['/home-cars-after-login']);
      } // ================b/w part========================

    })();
  }

  refresh() {
    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authCode = yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuth.refresh();
      console.log('refresh: ', authCode);
    })();
  }

  signOutForGoogle() {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuth.signOut();
      _this2.googleUserData = null;
    })();
  }

  signOutForFacebook() {
    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_6__.FacebookLogin.logout();
    })();
  }

  logout() {
    this.checkUser.appUserId = null;
    localStorage.removeItem('appUserId');
    this.api.localUserData = undefined;
    localStorage.removeItem('localUserData');
    console.log('appUserId removed');
    this.signOutForGoogle();
    this.signOutForFacebook(); // ===========to update sidemenu pages after logout==============

    console.log(this.checkUser.appUserId);
    this.checkUser.checkUser();
    console.log(this.checkUser.appPages);
    this.appPages = this.checkUser.appPages; // ===================done==================================

    this.navCtrl.navigateRoot('home-before-login');
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

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: _check_user_service__WEBPACK_IMPORTED_MODULE_3__.CheckUserService
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 86675);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ion2-calendar */ 8325);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _awesome_cordova_plugins_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/onesignal/ngx */ 13860);
/* harmony import */ var _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/stripe/ngx */ 62381);











// import { PayPal} from '@ionic-native/paypal/ngx'


let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            ion2_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule.forRoot({
                doneLabel: 'Save',
                closeIcon: true
            })
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
            },
            _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeGeocoder,
            _awesome_cordova_plugins_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__.OneSignal,
            // PayPal
            _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__.Stripe
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 47852:
/*!***************************************!*\
  !*** ./src/app/check-user.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckUserService": () => (/* binding */ CheckUserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let CheckUserService = class CheckUserService {
    constructor() {
        this.appUserId = localStorage.getItem('appUserId');
        this.appPages = [];
    }
    checkUser() {
        if (this.appUserId == null) {
            this.appPages = [
                { title: 'Browse', url: '/home-before-login', img: 'assets/images/icons/search_sm.svg' },
                { title: 'Live Chat', url: '/sign-in', img: 'assets/images/icons/live_chat_sm.svg' },
                { title: 'About Us', url: '/about-us', img: 'assets/images/icons/about_us_sm.svg' },
            ];
        }
        else if (this.appUserId != null) {
            this.appPages = [
                { title: 'Home', url: '/home-cars-after-login', img: 'assets/images/icons/home_sm.svg' },
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

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let ApiService = class ApiService {
  constructor(http, toastController, loadingCtrl) {
    this.http = http;
    this.toastController = toastController;
    this.loadingCtrl = loadingCtrl;
    this.imageUrlString = 'https://360uae.eigix.net/public/';
    this.baseURL = 'https://360uae.eigix.net/api';
    this.datesToDisable = [];
    this.bookedDates = [];
  }

  sendRequest(action, data) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.baseURL}/${action}`, JSON.stringify(data), {
      headers: header
    });
  }

  getData(action) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(`${this.baseURL}/${action}`, {
      headers: header
    });
  }

  presentToast(toastMsg) {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: toastMsg,
        duration: 2000
      });
      toast.present();
    })();
  }

  showLoading() {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingCtrl.create({
        duration: 3000,
        message: 'Please wait...'
      });
      loading.present();
    })();
  }

  hideLoading() {
    this.loadingCtrl.dismiss();
  }

};

ApiService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
}];

ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ApiService);


/***/ }),

/***/ 92340:
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 38763);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
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
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		45464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		68724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		30527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		44389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
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
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 57008,
	"./ru.js": 57008,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu {\n  --background:black !important;\n}\n\nion-menu ion-content {\n  --background: black !important;\n  padding: 60px 23px 40px !important;\n}\n\nion-menu ion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background: none;\n  background-color: black !important;\n  padding: 20px 23px 30px;\n}\n\nion-menu.md ion-content {\n  --padding-start: 23px;\n  --padding-end: 23px;\n  --padding-top: 60px;\n  --padding-bottom: 40px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-start: 23px;\n  --padding-end: 23px;\n  --padding-top: 60px;\n  --padding-bottom: 40px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.app_title {\n  margin-top: 52px;\n  margin-left: 17px;\n  font-size: 35px;\n  font-weight: bold;\n  color: white;\n}\n\n.profile_img {\n  border-radius: 50px;\n  height: 85px;\n  width: 85px;\n}\n\n.select_language {\n  font-size: 14px;\n  font-weight: 400;\n  color: #B1A8B9;\n}\n\n.language_btns {\n  margin-top: 9px;\n  display: flex;\n  justify-content: center;\n}\n\nion-button {\n  --border-radius: 10px;\n  width: 36%;\n  height: 32px;\n}\n\n.english_text {\n  font-family: \"Poppins\", sans-serif;\n  margin-left: 5.5px;\n  font-size: 10px;\n  font-weight: 500;\n  color: black;\n}\n\n.arabic_text {\n  margin-left: 5.5px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #D4DCE1;\n}\n\n.item_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: white;\n}\n\n.user_name {\n  margin-top: 12px;\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n  font-size: 25px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.location_box {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.location {\n  font-family: \"Poppins\", sans-serif;\n  color: #B1A8B9;\n  font-size: 19px;\n  font-weight: 400;\n}\n\n.profile_div {\n  position: relative;\n  width: 85px;\n  margin: 0px auto;\n}\n\n.edit_icon {\n  position: absolute;\n  top: 65%;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjs7QURDQTtFQUNFLDhCQUFBO0VBQ0Esa0NBQUE7QUNFRjs7QURBQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEREE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QUREQTs7RUFFRSxrQkFBQTtBQ0lGOztBRERBO0VBQ0UsMkRBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0RBQUE7QUNBRjs7QURHQTtFQUNFLCtCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBRUUscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLCtCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUNGRjs7QURLQTtFQUNFLGlDQUFBO0FDRkY7O0FES0E7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBREtBO0VBQ0UsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7QUNBbkM7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDS0Y7O0FESEE7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNRRjs7QUROQTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFBBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QURSQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNXRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudXtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrICFpbXBvcnRhbnQ7XG59XG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNjBweCAyM3B4IDQwcHggIWltcG9ydGFudDtcbn1cbmlvbi1tZW51IGlvbi1mb290ZXJ7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMjNweCAzMHB4IDtcbn1cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyM3B4O1xuICAtLXBhZGRpbmctZW5kOiAyM3B4O1xuICAtLXBhZGRpbmctdG9wOiA2MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAvLyAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDIzcHg7XG4gIC0tcGFkZGluZy10b3A6IDYwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5hcHBfdGl0bGV7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9maWxlX2ltZ3tcbiAgYm9yZGVyLXJhZGl1czogNTBweDtoZWlnaHQ6IDg1cHg7d2lkdGg6IDg1cHg7XG59XG4uc2VsZWN0X2xhbmd1YWdle1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjQjFBOEI5O1xufVxuLmxhbmd1YWdlX2J0bnN7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAzNiU7XG4gIGhlaWdodDogMzJweDtcbn1cbi5lbmdsaXNoX3RleHR7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiA1LjVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYXJhYmljX3RleHR7XG4gIG1hcmdpbi1sZWZ0OiA1LjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0Q0RENFMTtcbn1cbi5pdGVtX2xhYmVse1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi51c2VyX25hbWV7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2NhdGlvbl9ib3h7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9jYXRpb257XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNCMUE4Qjk7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wcm9maWxlX2RpdntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODVweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5lZGl0X2ljb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NSU7XG4gIHJpZ2h0OiAwcHg7XG59IiwiaW9uLW1lbnUge1xuICAtLWJhY2tncm91bmQ6YmxhY2sgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDYwcHggMjNweCA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51IGlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMjNweCAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMjNweDtcbiAgLS1wYWRkaW5nLWVuZDogMjNweDtcbiAgLS1wYWRkaW5nLXRvcDogNjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMjNweDtcbiAgLS1wYWRkaW5nLWVuZDogMjNweDtcbiAgLS1wYWRkaW5nLXRvcDogNjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5hcHBfdGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MnB4O1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvZmlsZV9pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA4NXB4O1xufVxuXG4uc2VsZWN0X2xhbmd1YWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0IxQThCOTtcbn1cblxuLmxhbmd1YWdlX2J0bnMge1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMzYlO1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5lbmdsaXNoX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiA1LjVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hcmFiaWNfdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA1LjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0Q0RENFMTtcbn1cblxuLml0ZW1fbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlcl9uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9jYXRpb25fYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvY2F0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0IxQThCOTtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucHJvZmlsZV9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4NXB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uZWRpdF9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY1JTtcbiAgcmlnaHQ6IDBweDtcbn0iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content >\n          <div>\n            <img (click)=\"closeMenu()\" src=\"assets/images/icons/cancel.svg\" alt=\"\">\n          </div>\n          <div class=\"app_title\" *ngIf=\"checkUser.appUserId==null\">\n            360UAE\n          </div>\n          <div *ngIf=\"checkUser.appUserId !== null && api.localUserData !== undefined \" (click)=\"goForEditProfile()\">\n            <div class=\"profile_div\">\n              <img src=\"assets/images/sm_dummy_profile.svg\" alt=\"\" *ngIf=\"api.localUserData.profile_pic === '' \">\n              <img class=\"profile_img\" src=\"{{api.imageUrlString}}{{api.localUserData.profile_pic}}\" alt=\"\" *ngIf=\"api.localUserData.profile_pic !== '' && api.localUserData.account_type == 'SignupWithApp'\">\n              <img class=\"profile_img\" src=\"{{api.localUserData.profile_pic}}\" alt=\"\" *ngIf=\"api.localUserData.profile_pic !== ''  && api.localUserData.account_type !== 'SignupWithApp'\" >\n              <img class=\"edit_icon\" src=\"assets/images/icons/sm_edit_icon.svg\" alt=\"\">\n            </div>\n            \n            <div class=\"user_name\" >{{api.localUserData.username}}</div>\n            <div class=\"location_box\">\n              <img style=\"margin-right: 6.3px;\" src=\"assets/images/icons/sm_location_icon.svg\" alt=\"\">\n              <span class=\"location\" *ngIf=\"api.localUserData.location !== null\">{{api.localUserData.location}}</span>\n              <span class=\"location\" *ngIf=\"api.localUserData.location === null\">{{api.fetchLocation}}</span>\n            </div>\n          </div>\n          \n          <div style=\"height: 50px;\"></div>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <div routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\" style=\"--background: black !important; text-align: center;\">\n              <!-- <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon> -->\n              <div style=\"margin-top: 20px; text-align: left;\">\n                <ion-row>\n                  <ion-col style=\"padding: 0px;\" size=\"2\"><img  src=\"{{p.img}}\"></ion-col>\n                  <ion-col style=\"padding: 0px;\" size=\"7\"><ion-label class=\"item_label\">{{ p.title }}</ion-label></ion-col>\n                  <ion-col style=\"padding: 0px;\" size=\"3\"></ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-menu-toggle>\n        \n      </ion-content>\n     \n      <div style=\"padding: 20px 23px 30px;\">\n        <ion-row >\n          <ion-col style=\"padding: 0px;\" size=\"2\"><img src=\"assets/images/icons/log_in_out_sm.svg\" alt=\"\"></ion-col>\n          <ion-col style=\"padding: 0px;\" size=\"7\">\n            <span (click)=\"gotoSignIn()\" class=\"item_label\" *ngIf=\"checkUser.appUserId==null\">Login or Signup</span>\n            <span (click)=\"logout()\" class=\"item_label\" *ngIf=\"checkUser.appUserId!=null\">Logout</span>\n          </ion-col>\n          <ion-col style=\"padding: 0px;\" size=\"3\"></ion-col>\n        </ion-row>\n      </div>\n    \n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map