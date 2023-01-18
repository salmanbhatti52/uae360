"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment-details_payment-details_module_ts"],{

/***/ 39600:
/*!*******************************************************************!*\
  !*** ./src/app/payment-details/payment-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPageRoutingModule": () => (/* binding */ PaymentDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details.page */ 17727);




const routes = [
    {
        path: '',
        component: _payment_details_page__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsPage
    }
];
let PaymentDetailsPageRoutingModule = class PaymentDetailsPageRoutingModule {
};
PaymentDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentDetailsPageRoutingModule);



/***/ }),

/***/ 76472:
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPageModule": () => (/* binding */ PaymentDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details-routing.module */ 39600);
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-details.page */ 17727);







let PaymentDetailsPageModule = class PaymentDetailsPageModule {
};
PaymentDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsPageRoutingModule
        ],
        declarations: [_payment_details_page__WEBPACK_IMPORTED_MODULE_1__.PaymentDetailsPage]
    })
], PaymentDetailsPageModule);



/***/ }),

/***/ 17727:
/*!*********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPage": () => (/* binding */ PaymentDetailsPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payment_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-details.page.html?ngResource */ 91876);
/* harmony import */ var _payment_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-details.page.scss?ngResource */ 43057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _new_payment_method_new_payment_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-payment-method/new-payment-method.page */ 91785);
/* harmony import */ var _booked_booked_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booked/booked.page */ 88242);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _capacitor_community_stripe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor-community/stripe */ 49377);












let PaymentDetailsPage = class PaymentDetailsPage {
  constructor(location, modalCtrlr, api, http) {
    this.location = location;
    this.modalCtrlr = modalCtrlr;
    this.api = api;
    this.http = http;
    this.master = false;
    this.visa = false;
    this.paypal = false;
    this.paymentAmount = this.api.bookingResponse.total_cost;
    this.currency = 'USD';
    _capacitor_community_stripe__WEBPACK_IMPORTED_MODULE_6__.Stripe.initialize({
      publishableKey: 'pk_test_51MQ37qDFPlDlGxkdw91wUybcouQFM0EOUev6HlGRi86QjYCu3tITcy1KzcDJGrSncQ8G2rHYxPmiDAm4Y027ff6g00Es0yT7y1'
    });
  }

  ngOnInit() {
    this.paid_username = undefined;
    this.renderPayWithPaypal();
  }

  ionViewWillEnter() {// (async () => {
    //   // be able to get event of PaymentSheet
    //   Stripe.addListener(PaymentSheetEventsEnum.Completed, () => {
    //     console.log('PaymentSheetEventsEnum.Completed');
    //   });
    //   // Connect to your backend endpoint, and get every key.
    //   const { paymentIntent, ephemeralKey, customer } = await this.http.post<{
    //     paymentIntent: string;
    //     ephemeralKey: string;
    //     customer: string;
    //   }>(environment.api + 'payment-sheet', {}).pipe(first()).toPromise(Promise);
    //   // prepare PaymentSheet with CreatePaymentSheetOption.
    //   await Stripe.createPaymentSheet({
    //     paymentIntentClientSecret: paymentIntent,
    //     customerId: customer,
    //     customerEphemeralKeySecret: ephemeralKey,
    //   });
    //   // present PaymentSheet and get result.
    //   const result = await Stripe.presentPaymentSheet();
    //   if (result.paymentResult === PaymentSheetEventsEnum.Completed) {
    //     // Happy path
    //   }
    // })();
  }

  ionViewWillLeave() {
    console.log('leave view');
    this.paid_username = '';
  }

  goBack() {
    this.location.back();
  }

  openBookedModal() {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("paid_username: ", _this2.paid_username);

      if (_this2.paid_username !== undefined) {
        const modal = yield _this2.modalCtrlr.create({
          component: _booked_booked_page__WEBPACK_IMPORTED_MODULE_4__.BookedPage,
          showBackdrop: true,
          cssClass: 'booked_modal'
        });
        modal.present();
      } else {
        _this2.api.presentToast('Hmm! You forgot to pay the amount.');
      } //   "client-id": 'ARQ1XpBx7JkSr3FZEhw7dnUGMS_gmTuDq-oHta6H3S89qx23gtBpaWGSYqw7ql6BpUseTIKD58dS40Wz',
      //   "data-page-type": "checkout",
      //   currency: "USD",
      //   components: "buttons,marks,messages"

    })();
  }

  renderPayWithPaypal() {
    var _this3 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let _this = _this3;
      setTimeout(() => {
        // Render the PayPal button into #paypal-button-container
        window['paypal'].Buttons({
          // Set up the transaction
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: _this.paymentAmount
                }
              }]
            });
          },
          // Finalize the transaction
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              _this.paid_username = details.payer.name.given_name; // Show a success message to the buyer

              alert('Transaction completed by ' + details.payer.name.given_name + '!');
            }).catch(err => {
              console.log(err);
            });
          }
        }).render('#your-container-element');
      }, 500); // let paypal;
      // try {
      //     paypal = await loadScript({ "client-id": "ARQ1XpBx7JkSr3FZEhw7dnUGMS_gmTuDq-oHta6H3S89qx23gtBpaWGSYqw7ql6BpUseTIKD58dS40Wz" });
      // } catch (error) {
      //     console.error("failed to load the PayPal JS SDK script", error);
      // }
      // if (paypal) {
      //     try {
      //         await paypal.Buttons().render("#your-container-element");
      //     } catch (error) {
      //         console.error("failed to render the PayPal Buttons", error);
      //     }
      // }
    })();
  }

  selectMethod(val) {
    if (val == 'master') {
      if (this.master == false) {
        this.master = true;
        this.visa = false;
        this.paypal = false;
      } else {
        this.master = false;
        this.visa = false;
        this.paypal = false;
      }
    } else if (val == 'visa') {
      if (this.visa == false) {
        this.visa = true;
        this.master = false;
        this.paypal = false;
      } else {
        this.master = false;
        this.visa = false;
        this.paypal = false;
      }
    } else if (val == 'paypal') {
      if (this.paypal == false) {
        this.paypal = true;
        this.master = false;
        this.visa = false;
      } else {
        this.master = false;
        this.visa = false;
        this.paypal = false;
      }
    } else {}
  }

  addPaymentMethod() {
    var _this4 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrlr.create({
        component: _new_payment_method_new_payment_method_page__WEBPACK_IMPORTED_MODULE_3__.NewPaymentMethodPage,
        showBackdrop: true,
        cssClass: 'add_payment_method'
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role == 'new_method_data') {
        const new_method_data = data;
        console.log(new_method_data);
      }
    })();
  }

};

PaymentDetailsPage.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}];

PaymentDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-payment-details',
  template: _payment_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_payment_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PaymentDetailsPage);


/***/ }),

/***/ 11859:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/applepay/apple-pay-difinitions.interface.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 61744:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/applepay/apple-pay-events.enum.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplePayEventsEnum": () => (/* binding */ ApplePayEventsEnum)
/* harmony export */ });
var ApplePayEventsEnum;

(function (ApplePayEventsEnum) {
  ApplePayEventsEnum["Loaded"] = "applePayLoaded";
  ApplePayEventsEnum["FailedToLoad"] = "applePayFailedToLoad";
  ApplePayEventsEnum["Completed"] = "applePayCompleted";
  ApplePayEventsEnum["Canceled"] = "applePayCanceled";
  ApplePayEventsEnum["Failed"] = "applePayFailed";
  ApplePayEventsEnum["DidSelectShippingContact"] = "applePayDidSelectShippingContact";
  ApplePayEventsEnum["DidCreatePaymentMethod"] = "applePayDidCreatePaymentMethod";
})(ApplePayEventsEnum || (ApplePayEventsEnum = {}));

/***/ }),

/***/ 37084:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/applepay/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplePayEventsEnum": () => (/* reexport safe */ _apple_pay_events_enum__WEBPACK_IMPORTED_MODULE_0__.ApplePayEventsEnum)
/* harmony export */ });
/* harmony import */ var _apple_pay_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple-pay-events.enum */ 61744);
/* harmony import */ var _apple_pay_difinitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple-pay-difinitions.interface */ 11859);



/***/ }),

/***/ 53073:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/definitions.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplePayEventsEnum": () => (/* reexport safe */ _applepay_index__WEBPACK_IMPORTED_MODULE_0__.ApplePayEventsEnum),
/* harmony export */   "GooglePayEventsEnum": () => (/* reexport safe */ _googlepay_index__WEBPACK_IMPORTED_MODULE_1__.GooglePayEventsEnum),
/* harmony export */   "PaymentFlowEventsEnum": () => (/* reexport safe */ _paymentflow_index__WEBPACK_IMPORTED_MODULE_2__.PaymentFlowEventsEnum),
/* harmony export */   "PaymentSheetEventsEnum": () => (/* reexport safe */ _paymentsheet_index__WEBPACK_IMPORTED_MODULE_3__.PaymentSheetEventsEnum)
/* harmony export */ });
/* harmony import */ var _applepay_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applepay/index */ 37084);
/* harmony import */ var _googlepay_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlepay/index */ 58367);
/* harmony import */ var _paymentflow_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentflow/index */ 35119);
/* harmony import */ var _paymentsheet_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentsheet/index */ 31793);
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/index */ 10934);






/***/ }),

/***/ 53771:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/googlepay/google-pay-difinitions.interface.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 28523:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/googlepay/google-pay-events.enum.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglePayEventsEnum": () => (/* binding */ GooglePayEventsEnum)
/* harmony export */ });
var GooglePayEventsEnum;

(function (GooglePayEventsEnum) {
  GooglePayEventsEnum["Loaded"] = "googlePayLoaded";
  GooglePayEventsEnum["FailedToLoad"] = "googlePayFailedToLoad";
  GooglePayEventsEnum["Completed"] = "googlePayCompleted";
  GooglePayEventsEnum["Canceled"] = "googlePayCanceled";
  GooglePayEventsEnum["Failed"] = "googlePayFailed";
})(GooglePayEventsEnum || (GooglePayEventsEnum = {}));

/***/ }),

/***/ 58367:
/*!******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/googlepay/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglePayEventsEnum": () => (/* reexport safe */ _google_pay_events_enum__WEBPACK_IMPORTED_MODULE_0__.GooglePayEventsEnum)
/* harmony export */ });
/* harmony import */ var _google_pay_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-pay-events.enum */ 28523);
/* harmony import */ var _google_pay_difinitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-pay-difinitions.interface */ 53771);



/***/ }),

/***/ 49377:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplePayEventsEnum": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ApplePayEventsEnum),
/* harmony export */   "GooglePayEventsEnum": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.GooglePayEventsEnum),
/* harmony export */   "PaymentFlowEventsEnum": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.PaymentFlowEventsEnum),
/* harmony export */   "PaymentSheetEventsEnum": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.PaymentSheetEventsEnum),
/* harmony export */   "Stripe": () => (/* binding */ Stripe)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 53073);

const Stripe = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Stripe', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_stripe_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 48802)).then(m => new m.StripeWeb())
});



/***/ }),

/***/ 35119:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentflow/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentFlowEventsEnum": () => (/* reexport safe */ _payment_flow_events_enum__WEBPACK_IMPORTED_MODULE_0__.PaymentFlowEventsEnum)
/* harmony export */ });
/* harmony import */ var _payment_flow_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-flow-events.enum */ 98485);
/* harmony import */ var _payment_flow_definitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-flow-definitions.interface */ 41880);



/***/ }),

/***/ 41880:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentflow/payment-flow-definitions.interface.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 98485:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentflow/payment-flow-events.enum.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentFlowEventsEnum": () => (/* binding */ PaymentFlowEventsEnum)
/* harmony export */ });
var PaymentFlowEventsEnum;

(function (PaymentFlowEventsEnum) {
  PaymentFlowEventsEnum["Loaded"] = "paymentFlowLoaded";
  PaymentFlowEventsEnum["FailedToLoad"] = "paymentFlowFailedToLoad";
  PaymentFlowEventsEnum["Opened"] = "paymentFlowOpened";
  PaymentFlowEventsEnum["Created"] = "paymentFlowCreated";
  PaymentFlowEventsEnum["Completed"] = "paymentFlowCompleted";
  PaymentFlowEventsEnum["Canceled"] = "paymentFlowCanceled";
  PaymentFlowEventsEnum["Failed"] = "paymentFlowFailed";
})(PaymentFlowEventsEnum || (PaymentFlowEventsEnum = {}));

/***/ }),

/***/ 31793:
/*!*********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentsheet/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSheetEventsEnum": () => (/* reexport safe */ _payment_sheet_events_enum__WEBPACK_IMPORTED_MODULE_0__.PaymentSheetEventsEnum)
/* harmony export */ });
/* harmony import */ var _payment_sheet_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-sheet-events.enum */ 27707);
/* harmony import */ var _payment_sheet_definitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-sheet-definitions.interface */ 72482);



/***/ }),

/***/ 72482:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentsheet/payment-sheet-definitions.interface.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 27707:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentsheet/payment-sheet-events.enum.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSheetEventsEnum": () => (/* binding */ PaymentSheetEventsEnum)
/* harmony export */ });
var PaymentSheetEventsEnum;

(function (PaymentSheetEventsEnum) {
  PaymentSheetEventsEnum["Loaded"] = "paymentSheetLoaded";
  PaymentSheetEventsEnum["FailedToLoad"] = "paymentSheetFailedToLoad";
  PaymentSheetEventsEnum["Completed"] = "paymentSheetCompleted";
  PaymentSheetEventsEnum["Canceled"] = "paymentSheetCanceled";
  PaymentSheetEventsEnum["Failed"] = "paymentSheetFailed";
})(PaymentSheetEventsEnum || (PaymentSheetEventsEnum = {}));

/***/ }),

/***/ 10934:
/*!***************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/shared/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 43057:
/*!**********************************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 10px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.content_heading {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin-top: 50px;\n}\n\n.payment_method_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 16px 9px 16px;\n  background: #FBFBFB;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  border-radius: 5px;\n  margin-top: 12px;\n}\n\n.payment_method {\n  font-size: 16px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin-bottom: 10px;\n}\n\n.checkbox {\n  --background: #FBFBFB !important;\n  --background-checked: #8000FF !important;\n  --border-color: #D4DCE1;\n  --border-color-checked: #8000FF;\n  --checkmark-color: white;\n  --checkmark-width: 1.5px;\n}\n\n.owner_name {\n  color: #0F172A;\n  font-size: 17px;\n  font-weight: 500;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.owner_info {\n  color: #B0B0B0;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 24px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.btn_border {\n  --border-style: solid;\n  --border-color: #8000FF;\n  --border-width: 1.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxwYXltZW50LWRldGFpbHNcXHBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxxQkFBQTtBQ1FKOztBRE5BO0VBQ0ksdUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNXSjs7QURUQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDWUo7O0FEVkE7RUFDSSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7QUNhSjs7QURWQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ2FKOztBRFhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDY0o7O0FEWkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDZUo7O0FEYkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ2dCSjs7QURkQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ2lCSiIsImZpbGUiOiJwYXltZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4udXJiYW5pc3R7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wb3BwaW5ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjE1cHggMTZweCAyMHB4O1xyXG59XHJcbi5jb250ZW50X2hlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnBheW1lbnRfbWV0aG9kX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogOXB4IDE2cHggOXB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLnBheW1lbnRfbWV0aG9ke1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNoZWNrYm94e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzgwMDBGRiAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNENERDRTE7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjODAwMEZGO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xyXG4gICAgLS1jaGVja21hcmstd2lkdGg6IDEuNXB4O1xyXG4gICAgLy8gLS1zaXplOiAzMnB4O1xyXG59XHJcbi5vd25lcl9uYW1le1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsc2Fucy1zZXJpZjtcclxufVxyXG4ub3duZXJfaW5mb3tcclxuICAgIGNvbG9yOiAjQjBCMEIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbn1cclxuLmxvZ2luX2J1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI0cHggYXV0byAwcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxufVxyXG4uYnRuX2JvcmRlcntcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjODAwMEZGO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4udXJiYW5pc3Qge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucG9wcGlucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTZweCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTZweCAyMHB4O1xufVxuXG4uY29udGVudF9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnBheW1lbnRfbWV0aG9kX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOXB4IDE2cHggOXB4IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5wYXltZW50X21ldGhvZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODAwMEZGICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjRDREQ0UxO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjODAwMEZGO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tY2hlY2ttYXJrLXdpZHRoOiAxLjVweDtcbn1cblxuLm93bmVyX25hbWUge1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ub3duZXJfaW5mbyB7XG4gIGNvbG9yOiAjQjBCMEIwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dpbl9idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI0cHggYXV0byAwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuX2JvcmRlciB7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICM4MDAwRkY7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbn0iXX0= */";

/***/ }),

/***/ 91876:
/*!**********************************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Payment</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: center;\">\n      <img src=\"assets/images/payment Info_img.svg\" alt=\"\">\n    </div>\n    <div class=\"content_heading\">Select payment method</div>\n\n    <!-- <div>\n\n      <div class=\"payment_method_box\" style=\"margin-top: 15.4px;\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"margin-right: 18px;display: flex;\">\n            <img (click)=\"selectMethod('master')\" src=\"assets/images/icons/marked.svg\" alt=\"\" *ngIf=\"master == true\">\n            <img (click)=\"selectMethod('master')\" src=\"assets/images/icons/unmarked.svg\" alt=\"\" *ngIf=\"master != true\">\n            \n          </div>\n          <div>\n            <div class=\"owner_name\">Owner name</div>\n            <div class=\"owner_info\">4162 **** **** ****</div>\n          </div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/master_card.svg\" alt=\"\">\n        </div>\n      </div>\n      \n      <div class=\"payment_method_box\" >\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"margin-right: 18px;display: flex;\">\n            <img (click)=\"selectMethod('visa')\" src=\"assets/images/icons/marked.svg\" alt=\"\" *ngIf=\"visa == true\">\n            <img (click)=\"selectMethod('visa')\" src=\"assets/images/icons/unmarked.svg\" alt=\"\" *ngIf=\"visa != true\">\n            \n          </div>\n          <div>\n            <div class=\"owner_name\">Owner name</div>\n            <div class=\"owner_info\">4162 **** **** ****</div>\n          </div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/visa_icon.svg\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"payment_method_box\" >\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"margin-right: 18px;display: flex;\">\n            <img (click)=\"selectMethod('paypal')\" src=\"assets/images/icons/marked.svg\" alt=\"\" *ngIf=\"paypal == true\">\n            <img (click)=\"selectMethod('paypal')\" src=\"assets/images/icons/unmarked.svg\" alt=\"\" *ngIf=\"paypal != true\">\n            \n          </div>\n          <div>\n            <div class=\"owner_name\">PayPal</div>\n            <div class=\"owner_info\">Arslan********mail.com</div>\n          </div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/paypal_icon.svg\" alt=\"\">\n        </div>\n      </div>\n\n    </div> -->\n\n\n    \n\n    <div style=\"margin-top: 20px;\">\n      <div class=\"payment_method\">Pay with Paypal</div>\n      <div id=\"your-container-element\"></div>\n    </div>\n    \n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div style=\"padding: 0px 16px 25px;\">\n    <ion-button class=\"login_button\" (click)=\"openBookedModal()\">\n      <span class=\"btn_text\">Done</span>\n    </ion-button>\n    <!-- <ion-button class=\"login_button\" (click)=\"openBookedModal()\">\n      <span class=\"btn_text\">Pay</span>\n    </ion-button>\n    <ion-button class=\"login_button btn_border\" style=\"--background:#FBFBFB; margin-top: 16px;\" (click)=\"addPaymentMethod()\">\n      <span class=\"btn_text \" style=\"color: #0F172A;\">Add New Payment Method</span>\n    </ion-button> -->\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_payment-details_payment-details_module_ts.js.map