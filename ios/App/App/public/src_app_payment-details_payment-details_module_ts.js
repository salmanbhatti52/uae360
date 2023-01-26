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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _new_payment_method_new_payment_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-payment-method/new-payment-method.page */ 91785);
/* harmony import */ var _booked_booked_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booked/booked.page */ 88242);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/stripe/ngx */ 62381);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../check-user.service */ 47852);












let PaymentDetailsPage = class PaymentDetailsPage {
  constructor(location, modalCtrlr, api, stripe, checkUser) {
    this.location = location;
    this.modalCtrlr = modalCtrlr;
    this.api = api;
    this.stripe = stripe;
    this.checkUser = checkUser;
    this.master = false;
    this.visa = false;
    this.paypal = false;
    this.paymentAmount = this.api.bookingResponse.total_cost; // paymentAmount: string = '10';

    this.currency = 'USD';
    this.cardType = '';
    this.cardNumber = '';
    this.cardsList = [];
    this.selected = 0;
    this.errorMessage = 'Transaction for this booking already exists.';
    this.stripe.setPublishableKey('pk_test_51MQ37qDFPlDlGxkdw91wUybcouQFM0EOUev6HlGRi86QjYCu3tITcy1KzcDJGrSncQ8G2rHYxPmiDAm4Y027ff6g00Es0yT7y1');
  }

  ngOnInit() {
    this.paid_username = undefined;
    this.renderPayWithPaypal();
  }

  ionViewWillEnter() {
    this.getToken();
    this.getCardsList();
    console.log(this.api.bookingResponse);
    this.bookingId = this.api.bookingResponse.booking_id;
    console.log('Booking Id: ', this.bookingId);
  }

  goBack() {
    this.location.back();
  }

  getCardsList() {
    let data = {
      appuser_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest('get_cards_list', data).subscribe(res => {
      // console.log("Response: ",res);
      if (res.status == 'success') {
        this.cardsList = res.data; // console.log("card list: ",this.cardsList);

        var creditCardType = __webpack_require__(/*! credit-card-type */ 17027);

        for (let data of this.cardsList) {
          data.sm_card_number = data.card_number.substring(0, 4);
          let visaCards = creditCardType(data.card_number); // console.log(visaCards);

          if (visaCards.length != 0) {
            data.card_type = visaCards[0].type;
          } else {
            data.card_type = 'unknown';
          }
        } // console.log("card list: ",this.cardsList);


        this.selectedCard = this.cardsList[0];
        this.api.hideLoading();
      }
    }, err => {
      this.api.hideLoading();
      console.log("Api error", err);
    });
  }

  getToken() {
    let card = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2025,
      cvc: '220'
    };
    this.stripe.createCardToken(card).then(token => {
      // console.log("token.id: ",token.id);
      this.tokenId = token.id; // console.log("this.tokenId: ",this.tokenId);
    }).catch(error => {
      console.error("error: ", error);
      this.api.presentToast(error);
    });
  }

  selectMethod(val, cardData) {
    console.log(val);
    this.selected = val;
    this.selectedCard = cardData;
  }

  makePayment() {
    if (this.paymentAmount != '0') {
      let data = {
        booking_id: this.bookingId,
        payment_gateways: "Credit Card",
        payer_name: this.selectedCard.holder_name,
        paid_amount: this.paymentAmount,
        token_id: this.tokenId,
        currency: "USD",
        gateway_status: "Pending",
        transactions_status: "Pending"
      }; // console.log("Data: ",data);

      this.api.sendRequest("storeCarsBookingTransactions", data).subscribe(res => {
        // console.log("Response: ",res);
        if (res.status == 'success') {
          this.paymentAmount = '0';
          this.openBookedModal();
        } else if (res.status == 'error') {
          this.api.presentToast(res.message);
          this.paymentAmount = '0';
          this.openBookedModal();
        } else {}
      }, err => {
        console.log("Api Error: ", err);
      });
    } else {
      this.api.presentToast(this.errorMessage);
      this.openBookedModal();
    }
  }

  openBookedModal() {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrlr.create({
        component: _booked_booked_page__WEBPACK_IMPORTED_MODULE_4__.BookedPage,
        showBackdrop: true,
        cssClass: 'booked_modal'
      });
      modal.present(); // else{
      //   this.api.presentToast('Hmm! You forgot to pay the amount.')
      // }
      //   "client-id": 'ARQ1XpBx7JkSr3FZEhw7dnUGMS_gmTuDq-oHta6H3S89qx23gtBpaWGSYqw7ql6BpUseTIKD58dS40Wz',
      //   "data-page-type": "checkout",
      //   currency: "USD",
      //   components: "buttons,marks,messages"
    })();
  }

  renderPayWithPaypal() {
    var _this3 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let _this = _this3;
      setTimeout( /*#__PURE__*/(0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Render the PayPal button into #paypal-button-container
        window['paypal'].Buttons({
          // Set up the transaction
          createOrder: function (data, actions) {
            if (_this.paymentAmount == '0') {
              _this.api.presentToast(_this.errorMessage);

              _this.openBookedModal();
            }

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
              // console.log("PayPal Payment Details: ",details);
              _this.payPalPaymentDetails = details; // if(_this.paymentAmount != '0'){
              // Show a success message to the buyer

              alert('Transaction completed by ' + details.payer.name.given_name + '!'); // console.log('amount: ',_this.paymentAmount);

              _this.paymentAmount = '0'; // console.log('amount: ',_this.paymentAmount);
              // }
              // else{
              //   this.api.presentToast(_this.errorMessage);
              // }

              _this.sendPayPalDetails();
            }).catch(err => {
              console.log(err);
            });
          }
        }).render('#your-container-element');
      }), 500); // this.api.presentToast(_this.errorMessage);
    })();
  }

  sendPayPalDetails() {
    let data = {
      booking_id: this.bookingId,
      payment_gateways: "Paypal",
      payer_paypal_email: this.payPalPaymentDetails.payer.eamil_address,
      payer_name: this.payPalPaymentDetails.payer.name.given_name,
      paid_amount: this.payPalPaymentDetails.purchase_units[0].amount.value,
      payee_paypal_email: this.payPalPaymentDetails.purchase_units[0].payee.email_address,
      gateway_status: this.payPalPaymentDetails.purchase_units[0].payments.captures[0].status,
      transactions_status: this.payPalPaymentDetails.status
    }; // console.log("Data: ",data);

    this.api.showLoading();
    this.api.sendRequest("storeCarsBookingTransactions", data).subscribe(res => {
      // console.log("Response: ",res);
      this.api.hideLoading();

      if (res.status == 'success') {
        this.openBookedModal();
      } else if (res.status == 'error') {
        this.openBookedModal();
        this.api.presentToast(res.message);
      } else {}
    }, err => {
      this.api.hideLoading();
      console.log("Api Error: ", err);
    });
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

      if (role == 'status') {
        const status = data; // console.log(status);

        _this4.getCardsList();
      }
    })();
  }

  ionViewWillLeave() {
    console.log('leave view');
    this.paid_username = '';
  }

};

PaymentDetailsPage.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
}, {
  type: _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__.Stripe
}, {
  type: _check_user_service__WEBPACK_IMPORTED_MODULE_7__.CheckUserService
}];

PaymentDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-payment-details',
  template: _payment_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_payment_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PaymentDetailsPage);


/***/ }),

/***/ 43057:
/*!**********************************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 10px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.content_heading {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin-top: 50px;\n  margin-bottom: 15px;\n}\n\n.payment_method_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 16px 9px 16px;\n  background: #FBFBFB;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  border-radius: 5px;\n  margin-top: 12px;\n}\n\n.card_icon {\n  width: 45px;\n  height: 25px;\n  object-fit: cover;\n}\n\n.payment_method {\n  font-size: 16px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin-bottom: 10px;\n}\n\n.checkbox {\n  --background: #FBFBFB !important;\n  --background-checked: #8000FF !important;\n  --border-color: #D4DCE1;\n  --border-color-checked: #8000FF;\n  --checkmark-color: white;\n  --checkmark-width: 1.5px;\n}\n\n.owner_name {\n  color: #0F172A;\n  font-size: 17px;\n  font-weight: 500;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.owner_info {\n  color: #B0B0B0;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 24px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.btn_border {\n  --border-style: solid;\n  --border-color: #8000FF;\n  --border-width: 1.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxwYXltZW50LWRldGFpbHNcXHBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxxQkFBQTtBQ1FKOztBRE5BO0VBQ0ksdUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNVSjs7QURSQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1lKOztBRFZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNhSjs7QURYQTtFQUNJLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtBQ2NKOztBRFhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDY0o7O0FEWkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUNlSjs7QURiQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNnQko7O0FEZEE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ2lCSjs7QURmQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ2tCSiIsImZpbGUiOiJwYXltZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4udXJiYW5pc3R7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wb3BwaW5ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjE1cHggMTZweCAyMHB4O1xyXG59XHJcbi5jb250ZW50X2hlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5wYXltZW50X21ldGhvZF9ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDlweCAxNnB4IDlweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5jYXJkX2ljb257XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5wYXltZW50X21ldGhvZHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jaGVja2JveHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4MDAwRkYgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRDREQ0UxO1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzgwMDBGRjtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tY2hlY2ttYXJrLXdpZHRoOiAxLjVweDtcclxuICAgIC8vIC0tc2l6ZTogMzJweDtcclxufVxyXG4ub3duZXJfbmFtZXtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbn1cclxuLm93bmVyX2luZm97XHJcbiAgICBjb2xvcjogI0IwQjBCMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1VyYmFuaXN0JyxzYW5zLXNlcmlmO1xyXG59XHJcbi5sb2dpbl9idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG8gMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bl90ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bl9ib3JkZXJ7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogIzgwMDBGRjtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLnVyYmFuaXN0IHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBvcHBpbnMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDE2cHggMjBweDtcbn1cblxuLmNvbnRlbnRfaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5wYXltZW50X21ldGhvZF9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDlweCAxNnB4IDlweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uY2FyZF9pY29uIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wYXltZW50X21ldGhvZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODAwMEZGICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjRDREQ0UxO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjODAwMEZGO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tY2hlY2ttYXJrLXdpZHRoOiAxLjVweDtcbn1cblxuLm93bmVyX25hbWUge1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ub3duZXJfaW5mbyB7XG4gIGNvbG9yOiAjQjBCMEIwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dpbl9idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI0cHggYXV0byAwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuX2JvcmRlciB7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICM4MDAwRkY7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbn0iXX0= */";

/***/ }),

/***/ 91876:
/*!**********************************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Payment</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: center;\">\n      <img src=\"assets/images/payment Info_img.svg\" alt=\"\">\n    </div>\n    <!-- <div class=\"content_heading\">Select payment method</div> -->\n\n    <div style=\"margin-top: 15.4px;\">\n      <div class=\"content_heading\" >Pay with Paypal</div>\n      <div id=\"your-container-element\"></div>\n    </div>\n\n    <div>\n      <div class=\"content_heading\" style=\"text-align: center;margin-top: 10px;\" *ngIf=\"cardsList.length > 0\">OR</div>\n      <div class=\"content_heading\" style=\"margin-top: 10px;\" *ngIf=\"cardsList.length > 0\">Select payment method</div>\n      <div class=\"payment_method_box\" style=\"margin-top: 15.4px;\" *ngFor=\"let data of cardsList; let i = index\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"margin-right: 18px;display: flex;\">\n            <img (click)=\"selectMethod(i,data)\" src=\"assets/images/icons/marked.svg\" alt=\"\" *ngIf=\"selected == i\">\n            <img (click)=\"selectMethod(i,data)\" src=\"assets/images/icons/unmarked.svg\" alt=\"\" *ngIf=\"selected != i\">\n            \n          </div>\n          <div>\n            <div class=\"owner_name\">{{data.holder_name}}</div>\n            <div class=\"owner_info\">{{data.sm_card_number}} **** **** ****</div>\n          </div>\n        </div>\n        <div>\n          <img src=\"assets/images/icons/master_card.svg\" alt=\"\" *ngIf=\"data.card_type == 'mastercard'\">\n          <img src=\"assets/images/icons/visa_icon.svg\" alt=\"\" *ngIf=\"data.card_type == 'visa'\">\n          <img class=\"card_icon\" src=\"assets/images/icons/am_ex.png\" alt=\"\" *ngIf=\"data.card_type == 'american-express'\">\n          <img class=\"card_icon\" src=\"assets/images/icons/discover.png\" alt=\"\" *ngIf=\"data.card_type == 'discover'\">\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div style=\"padding: 0px 16px 25px;\">\n    <ion-button class=\"login_button\" (click)=\"makePayment()\" *ngIf=\"cardsList.length > 0\">\n      <span class=\"btn_text\">Pay</span>\n    </ion-button>\n    <ion-button class=\"login_button btn_border\" style=\"--background:#FBFBFB; margin-top: 16px;\" (click)=\"addPaymentMethod()\">\n      <span class=\"btn_text \" style=\"color: #0F172A;\">Add New Payment Method</span>\n    </ion-button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_payment-details_payment-details_module_ts.js.map