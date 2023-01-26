"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_new-payment-method_new-payment-method_page_ts"],{

/***/ 42823:
/*!*************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiryDatePopupPage": () => (/* binding */ ExpiryDatePopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _expiry_date_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expiry-date-popup.page.html?ngResource */ 5789);
/* harmony import */ var _expiry_date_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expiry-date-popup.page.scss?ngResource */ 94112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86527);






let ExpiryDatePopupPage = class ExpiryDatePopupPage {
    constructor(modalCtrlr) {
        this.modalCtrlr = modalCtrlr;
        this.minDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date().toISOString()), 'yyyy-MM-dd');
    }
    ngOnInit() {
    }
    formattedString(value) {
        const formattedString = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(value), 'dd MMM, yyyy');
        // =====dashed date for summary page=====
        const dashedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(value), 'dd-MM-yyyy');
        this.date = dashedDate;
        console.log(dashedDate);
        // ============done================
        this.date = formattedString;
        console.log(this.date);
        return this.modalCtrlr.dismiss(dashedDate, 'expiry_date');
    }
    cancel(ev) {
        this.modalCtrlr.dismiss(null, 'cancel');
    }
};
ExpiryDatePopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ExpiryDatePopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-expiry-date-popup',
        template: _expiry_date_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_expiry_date_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExpiryDatePopupPage);



/***/ }),

/***/ 91785:
/*!***************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPaymentMethodPage": () => (/* binding */ NewPaymentMethodPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_payment_method_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-payment-method.page.html?ngResource */ 20300);
/* harmony import */ var _new_payment_method_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-payment-method.page.scss?ngResource */ 43171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _expiry_date_popup_expiry_date_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expiry-date-popup/expiry-date-popup.page */ 42823);
/* harmony import */ var node_modules_cleave_js_dist_cleave_esm_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/cleave.js/dist/cleave-esm.min.js */ 67613);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ 5830);










let NewPaymentMethodPage = class NewPaymentMethodPage {
  constructor(modalCtrlr, checkUser, api) {
    this.modalCtrlr = modalCtrlr;
    this.checkUser = checkUser;
    this.api = api;
    this.card_type = '';
    this.name_box_active = false;
    this.card_box_active = false;
    this.cvc_box_active = false;
    this.date_box_active = false;
    this.email_box_active = false;
    this.expiryDate = 'Expire Date';
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.userName = '';
    this.cardNumber = '';
    this.cvc = '';
    this.month = '';
    this.year = '';
  }

  getUserName(ev) {
    // console.log(ev);
    this.userName = ev.detail.value; // console.log("username:",this.userName);
  }

  getCvc(ev) {
    // console.log(ev);
    this.cvc = ev.detail.value; // console.log("cvc:",this.cvc);
  }

  openDateModal() {
    var _this2 = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrlr.create({
        component: _expiry_date_popup_expiry_date_popup_page__WEBPACK_IMPORTED_MODULE_3__.ExpiryDatePopupPage,
        showBackdrop: true,
        cssClass: 'expiry_date'
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role == 'expiry_date') {
        _this2.month = data.substring(3, 5);
        _this2.year = data.substring(6, 10);
        _this2.expiryDate = `${_this2.month}/${_this2.year}`;
      }

      _this2.activate('date');
    })();
  }

  checkCardType(ev) {
    // console.log(ev);
    this.cardNumber = ev.detail.value; // console.log("Card Number:",this.cardNumber);

    console.log("checkCarType Called");

    let _this = this;

    var cleave = new node_modules_cleave_js_dist_cleave_esm_min_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.input-element', {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        // update UI ...
        _this.card_type = type; // console.log("card_type: ",_this.card_type);
      }
    }); // console.log("Cleave: ",cleave);
  }

  activate(box_val) {
    if (box_val == 'name') {
      this.name_box_active = true;
      this.card_box_active = false;
      this.cvc_box_active = false;
      this.date_box_active = false;
      this.email_box_active = false;
    } else if (box_val == 'card_number') {
      this.name_box_active = false;
      this.card_box_active = true;
      this.cvc_box_active = false;
      this.date_box_active = false;
      this.email_box_active = false;
    } else if (box_val == 'cvc') {
      this.name_box_active = false;
      this.card_box_active = false;
      this.cvc_box_active = true;
      this.date_box_active = false;
      this.email_box_active = false;
    } else if (box_val == 'date') {
      this.name_box_active = false;
      this.card_box_active = false;
      this.cvc_box_active = false;
      this.date_box_active = true;
      this.email_box_active = false;
    } else if (box_val == 'email') {
      this.name_box_active = false;
      this.card_box_active = false;
      this.cvc_box_active = false;
      this.date_box_active = false;
      this.email_box_active = true;
    } else {}
  }

  savePaymentMethod() {
    this.name_box_active = false;
    this.card_box_active = false;
    this.cvc_box_active = false;
    this.date_box_active = false;
    this.email_box_active = false;
    let cardArray = this.cardNumber.split(' '); // console.log(cardArray);

    let cardNumWithoutSpace = '';

    for (let i = 0; i < cardArray.length; i++) {
      // console.log(cardArray[i]);
      cardNumWithoutSpace = cardNumWithoutSpace.concat(cardArray[i]);
    } // console.log("cardNumWithoutSpace: ",cardNumWithoutSpace);


    this.cardNumber = cardNumWithoutSpace; // console.log("Card Number: ",this.cardNumber);

    if (this.userName == '') {
      this.api.presentToast('Please enter username');
    } else if (this.cardNumber == '') {
      this.api.presentToast('Please enter card number');
    } else if (this.cvc == '') {
      this.api.presentToast('Please enter cvc');
    } else if (this.cvc.length < 3) {
      this.api.presentToast('CVC is incomplete');
    } else if (this.month == '' || this.year == '') {
      this.api.presentToast('Please select expire date');
    } else {
      let data = {
        appuser_id: this.checkUser.appUserId,
        holder_name: this.userName,
        card_number: this.cardNumber,
        expiry_month: this.month,
        expiry_year: this.year,
        cvv: this.cvc
      };
      this.api.sendRequest('store_cards_list', data).subscribe(res => {
        // console.log(res);
        if (res.status == 'success') {
          this.api.presentToast("Success!"); //  this.modalCtrlr.dismiss();

          return this.modalCtrlr.dismiss(res.status, 'status');
        }
      }, err => {
        console.log("Api error:", err);
        this.api.presentToast('Oops! something went wrong');
        this.modalCtrlr.dismiss();
      });
    }
  }

};

NewPaymentMethodPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _check_user_service__WEBPACK_IMPORTED_MODULE_5__.CheckUserService
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
}];

NewPaymentMethodPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-new-payment-method',
  template: _new_payment_method_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_new_payment_method_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NewPaymentMethodPage);


/***/ }),

/***/ 67613:
/*!*******************************************************!*\
  !*** ./node_modules/cleave.js/dist/cleave-esm.min.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    t = function (e, i, r, n, a, s, l, o, c, u) {
  this.numeralDecimalMark = e || ".", this.numeralIntegerScale = i > 0 ? i : 0, this.numeralDecimalScale = r >= 0 ? r : 2, this.numeralThousandsGroupStyle = n || t.groupStyle.thousand, this.numeralPositiveOnly = !!a, this.stripLeadingZeroes = !1 !== s, this.prefix = l || "" === l ? l : "", this.signBeforePrefix = !!o, this.tailPrefix = !!c, this.delimiter = u || "" === u ? u : ",", this.delimiterRE = u ? new RegExp("\\" + u, "g") : "";
};

t.groupStyle = {
  thousand: "thousand",
  lakh: "lakh",
  wan: "wan",
  none: "none"
}, t.prototype = {
  getRawValue: function (e) {
    return e.replace(this.delimiterRE, "").replace(this.numeralDecimalMark, ".");
  },
  format: function (e) {
    var i,
        r,
        n,
        a,
        s = "";

    switch (e = e.replace(/[A-Za-z]/g, "").replace(this.numeralDecimalMark, "M").replace(/[^\dM-]/g, "").replace(/^\-/, "N").replace(/\-/g, "").replace("N", this.numeralPositiveOnly ? "" : "-").replace("M", this.numeralDecimalMark), this.stripLeadingZeroes && (e = e.replace(/^(-)?0+(?=\d)/, "$1")), r = "-" === e.slice(0, 1) ? "-" : "", n = void 0 !== this.prefix ? this.signBeforePrefix ? r + this.prefix : this.prefix + r : r, a = e, e.indexOf(this.numeralDecimalMark) >= 0 && (a = (i = e.split(this.numeralDecimalMark))[0], s = this.numeralDecimalMark + i[1].slice(0, this.numeralDecimalScale)), "-" === r && (a = a.slice(1)), this.numeralIntegerScale > 0 && (a = a.slice(0, this.numeralIntegerScale)), this.numeralThousandsGroupStyle) {
      case t.groupStyle.lakh:
        a = a.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + this.delimiter);
        break;

      case t.groupStyle.wan:
        a = a.replace(/(\d)(?=(\d{4})+$)/g, "$1" + this.delimiter);
        break;

      case t.groupStyle.thousand:
        a = a.replace(/(\d)(?=(\d{3})+$)/g, "$1" + this.delimiter);
    }

    return this.tailPrefix ? r + a.toString() + (this.numeralDecimalScale > 0 ? s.toString() : "") + this.prefix : n + a.toString() + (this.numeralDecimalScale > 0 ? s.toString() : "");
  }
};

var i = t,
    r = function (e, t, i) {
  this.date = [], this.blocks = [], this.datePattern = e, this.dateMin = t.split("-").reverse().map(function (e) {
    return parseInt(e, 10);
  }), 2 === this.dateMin.length && this.dateMin.unshift(0), this.dateMax = i.split("-").reverse().map(function (e) {
    return parseInt(e, 10);
  }), 2 === this.dateMax.length && this.dateMax.unshift(0), this.initBlocks();
};

r.prototype = {
  initBlocks: function () {
    var e = this;
    e.datePattern.forEach(function (t) {
      "Y" === t ? e.blocks.push(4) : e.blocks.push(2);
    });
  },
  getISOFormatDate: function () {
    var e = this.date;
    return e[2] ? e[2] + "-" + this.addLeadingZero(e[1]) + "-" + this.addLeadingZero(e[0]) : "";
  },
  getBlocks: function () {
    return this.blocks;
  },
  getValidatedDate: function (e) {
    var t = this,
        i = "";
    return e = e.replace(/[^\d]/g, ""), t.blocks.forEach(function (r, n) {
      if (e.length > 0) {
        var a = e.slice(0, r),
            s = a.slice(0, 1),
            l = e.slice(r);

        switch (t.datePattern[n]) {
          case "d":
            "00" === a ? a = "01" : parseInt(s, 10) > 3 ? a = "0" + s : parseInt(a, 10) > 31 && (a = "31");
            break;

          case "m":
            "00" === a ? a = "01" : parseInt(s, 10) > 1 ? a = "0" + s : parseInt(a, 10) > 12 && (a = "12");
        }

        i += a, e = l;
      }
    }), this.getFixedDateString(i);
  },
  getFixedDateString: function (e) {
    var t,
        i,
        r,
        n = this,
        a = n.datePattern,
        s = [],
        l = 0,
        o = 0,
        c = 0,
        u = 0,
        d = 0,
        h = 0,
        m = !1;
    return 4 === e.length && "y" !== a[0].toLowerCase() && "y" !== a[1].toLowerCase() && (d = 2 - (u = "d" === a[0] ? 0 : 2), t = parseInt(e.slice(u, u + 2), 10), i = parseInt(e.slice(d, d + 2), 10), s = this.getFixedDate(t, i, 0)), 8 === e.length && (a.forEach(function (e, t) {
      switch (e) {
        case "d":
          l = t;
          break;

        case "m":
          o = t;
          break;

        default:
          c = t;
      }
    }), h = 2 * c, u = l <= c ? 2 * l : 2 * l + 2, d = o <= c ? 2 * o : 2 * o + 2, t = parseInt(e.slice(u, u + 2), 10), i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 4), 10), m = 4 === e.slice(h, h + 4).length, s = this.getFixedDate(t, i, r)), 4 !== e.length || "y" !== a[0] && "y" !== a[1] || (h = 2 - (d = "m" === a[0] ? 0 : 2), i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 2), 10), m = 2 === e.slice(h, h + 2).length, s = [0, i, r]), 6 !== e.length || "Y" !== a[0] && "Y" !== a[1] || (h = 2 - .5 * (d = "m" === a[0] ? 0 : 4), i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 4), 10), m = 4 === e.slice(h, h + 4).length, s = [0, i, r]), s = n.getRangeFixedDate(s), n.date = s, 0 === s.length ? e : a.reduce(function (e, t) {
      switch (t) {
        case "d":
          return e + (0 === s[0] ? "" : n.addLeadingZero(s[0]));

        case "m":
          return e + (0 === s[1] ? "" : n.addLeadingZero(s[1]));

        case "y":
          return e + (m ? n.addLeadingZeroForYear(s[2], !1) : "");

        case "Y":
          return e + (m ? n.addLeadingZeroForYear(s[2], !0) : "");
      }
    }, "");
  },
  getRangeFixedDate: function (e) {
    var t = this.datePattern,
        i = this.dateMin || [],
        r = this.dateMax || [];
    return !e.length || i.length < 3 && r.length < 3 ? e : t.find(function (e) {
      return "y" === e.toLowerCase();
    }) && 0 === e[2] ? e : r.length && (r[2] < e[2] || r[2] === e[2] && (r[1] < e[1] || r[1] === e[1] && r[0] < e[0])) ? r : i.length && (i[2] > e[2] || i[2] === e[2] && (i[1] > e[1] || i[1] === e[1] && i[0] > e[0])) ? i : e;
  },
  getFixedDate: function (e, t, i) {
    return e = Math.min(e, 31), t = Math.min(t, 12), i = parseInt(i || 0, 10), (t < 7 && t % 2 == 0 || t > 8 && t % 2 == 1) && (e = Math.min(e, 2 === t ? this.isLeapYear(i) ? 29 : 28 : 30)), [e, t, i];
  },
  isLeapYear: function (e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  },
  addLeadingZero: function (e) {
    return (e < 10 ? "0" : "") + e;
  },
  addLeadingZeroForYear: function (e, t) {
    return t ? (e < 10 ? "000" : e < 100 ? "00" : e < 1e3 ? "0" : "") + e : (e < 10 ? "0" : "") + e;
  }
};

var n = r,
    a = function (e, t) {
  this.time = [], this.blocks = [], this.timePattern = e, this.timeFormat = t, this.initBlocks();
};

a.prototype = {
  initBlocks: function () {
    var e = this;
    e.timePattern.forEach(function () {
      e.blocks.push(2);
    });
  },
  getISOFormatTime: function () {
    var e = this.time;
    return e[2] ? this.addLeadingZero(e[0]) + ":" + this.addLeadingZero(e[1]) + ":" + this.addLeadingZero(e[2]) : "";
  },
  getBlocks: function () {
    return this.blocks;
  },
  getTimeFormatOptions: function () {
    return "12" === String(this.timeFormat) ? {
      maxHourFirstDigit: 1,
      maxHours: 12,
      maxMinutesFirstDigit: 5,
      maxMinutes: 60
    } : {
      maxHourFirstDigit: 2,
      maxHours: 23,
      maxMinutesFirstDigit: 5,
      maxMinutes: 60
    };
  },
  getValidatedTime: function (e) {
    var t = this,
        i = "";
    e = e.replace(/[^\d]/g, "");
    var r = t.getTimeFormatOptions();
    return t.blocks.forEach(function (n, a) {
      if (e.length > 0) {
        var s = e.slice(0, n),
            l = s.slice(0, 1),
            o = e.slice(n);

        switch (t.timePattern[a]) {
          case "h":
            parseInt(l, 10) > r.maxHourFirstDigit ? s = "0" + l : parseInt(s, 10) > r.maxHours && (s = r.maxHours + "");
            break;

          case "m":
          case "s":
            parseInt(l, 10) > r.maxMinutesFirstDigit ? s = "0" + l : parseInt(s, 10) > r.maxMinutes && (s = r.maxMinutes + "");
        }

        i += s, e = o;
      }
    }), this.getFixedTimeString(i);
  },
  getFixedTimeString: function (e) {
    var t,
        i,
        r,
        n = this,
        a = n.timePattern,
        s = [],
        l = 0,
        o = 0,
        c = 0,
        u = 0,
        d = 0,
        h = 0;
    return 6 === e.length && (a.forEach(function (e, t) {
      switch (e) {
        case "s":
          l = 2 * t;
          break;

        case "m":
          o = 2 * t;
          break;

        case "h":
          c = 2 * t;
      }
    }), h = c, d = o, u = l, t = parseInt(e.slice(u, u + 2), 10), i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 2), 10), s = this.getFixedTime(r, i, t)), 4 === e.length && n.timePattern.indexOf("s") < 0 && (a.forEach(function (e, t) {
      switch (e) {
        case "m":
          o = 2 * t;
          break;

        case "h":
          c = 2 * t;
      }
    }), h = c, d = o, t = 0, i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 2), 10), s = this.getFixedTime(r, i, t)), n.time = s, 0 === s.length ? e : a.reduce(function (e, t) {
      switch (t) {
        case "s":
          return e + n.addLeadingZero(s[2]);

        case "m":
          return e + n.addLeadingZero(s[1]);

        case "h":
          return e + n.addLeadingZero(s[0]);
      }
    }, "");
  },
  getFixedTime: function (e, t, i) {
    return i = Math.min(parseInt(i || 0, 10), 60), t = Math.min(t, 60), [e = Math.min(e, 60), t, i];
  },
  addLeadingZero: function (e) {
    return (e < 10 ? "0" : "") + e;
  }
};

var s = a,
    l = function (e, t) {
  this.delimiter = t || "" === t ? t : " ", this.delimiterRE = t ? new RegExp("\\" + t, "g") : "", this.formatter = e;
};

l.prototype = {
  setFormatter: function (e) {
    this.formatter = e;
  },
  format: function (e) {
    this.formatter.clear();

    for (var t, i = "", r = !1, n = 0, a = (e = (e = (e = e.replace(/[^\d+]/g, "")).replace(/^\+/, "B").replace(/\+/g, "").replace("B", "+")).replace(this.delimiterRE, "")).length; n < a; n++) t = this.formatter.inputDigit(e.charAt(n)), /[\s()-]/g.test(t) ? (i = t, r = !0) : r || (i = t);

    return i = (i = i.replace(/[()]/g, "")).replace(/[\s-]/g, this.delimiter);
  }
};

var o = l,
    c = {
  blocks: {
    uatp: [4, 5, 6],
    amex: [4, 6, 5],
    diners: [4, 6, 4],
    discover: [4, 4, 4, 4],
    mastercard: [4, 4, 4, 4],
    dankort: [4, 4, 4, 4],
    instapayment: [4, 4, 4, 4],
    jcb15: [4, 6, 5],
    jcb: [4, 4, 4, 4],
    maestro: [4, 4, 4, 4],
    visa: [4, 4, 4, 4],
    mir: [4, 4, 4, 4],
    unionPay: [4, 4, 4, 4],
    general: [4, 4, 4, 4]
  },
  re: {
    uatp: /^(?!1800)1\d{0,14}/,
    amex: /^3[47]\d{0,13}/,
    discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
    diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
    mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
    dankort: /^(5019|4175|4571)\d{0,12}/,
    instapayment: /^63[7-9]\d{0,13}/,
    jcb15: /^(?:2131|1800)\d{0,11}/,
    jcb: /^(?:35\d{0,2})\d{0,12}/,
    maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
    mir: /^220[0-4]\d{0,12}/,
    visa: /^4\d{0,15}/,
    unionPay: /^(62|81)\d{0,14}/
  },
  getStrictBlocks: function (e) {
    var t = e.reduce(function (e, t) {
      return e + t;
    }, 0);
    return e.concat(19 - t);
  },
  getInfo: function (e, t) {
    var i = c.blocks,
        r = c.re;

    for (var n in t = !!t, r) if (r[n].test(e)) {
      var a = i[n];
      return {
        type: n,
        blocks: t ? this.getStrictBlocks(a) : a
      };
    }

    return {
      type: "unknown",
      blocks: t ? this.getStrictBlocks(i.general) : i.general
    };
  }
},
    u = c,
    d = {
  noop: function () {},
  strip: function (e, t) {
    return e.replace(t, "");
  },
  getPostDelimiter: function (e, t, i) {
    if (0 === i.length) return e.slice(-t.length) === t ? t : "";
    var r = "";
    return i.forEach(function (t) {
      e.slice(-t.length) === t && (r = t);
    }), r;
  },
  getDelimiterREByDelimiter: function (e) {
    return new RegExp(e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
  },
  getNextCursorPosition: function (e, t, i, r, n) {
    return t.length === e ? i.length : e + this.getPositionOffset(e, t, i, r, n);
  },
  getPositionOffset: function (e, t, i, r, n) {
    var a, s, l;
    return a = this.stripDelimiters(t.slice(0, e), r, n), s = this.stripDelimiters(i.slice(0, e), r, n), 0 !== (l = a.length - s.length) ? l / Math.abs(l) : 0;
  },
  stripDelimiters: function (e, t, i) {
    var r = this;

    if (0 === i.length) {
      var n = t ? r.getDelimiterREByDelimiter(t) : "";
      return e.replace(n, "");
    }

    return i.forEach(function (t) {
      t.split("").forEach(function (t) {
        e = e.replace(r.getDelimiterREByDelimiter(t), "");
      });
    }), e;
  },
  headStr: function (e, t) {
    return e.slice(0, t);
  },
  getMaxLength: function (e) {
    return e.reduce(function (e, t) {
      return e + t;
    }, 0);
  },
  getPrefixStrippedValue: function (e, t, i, r, n, a, s, l, o) {
    if (0 === i) return e;
    if (e === t && "" !== e) return "";

    if (o && "-" == e.slice(0, 1)) {
      var c = "-" == r.slice(0, 1) ? r.slice(1) : r;
      return "-" + this.getPrefixStrippedValue(e.slice(1), t, i, c, n, a, s, l, o);
    }

    if (r.slice(0, i) !== t && !l) return s && !r && e ? e : "";
    if (r.slice(-i) !== t && l) return s && !r && e ? e : "";
    var u = this.stripDelimiters(r, n, a);
    return e.slice(0, i) === t || l ? e.slice(-i) !== t && l ? u.slice(0, -i - 1) : l ? e.slice(0, -i) : e.slice(i) : u.slice(i);
  },
  getFirstDiffIndex: function (e, t) {
    for (var i = 0; e.charAt(i) === t.charAt(i);) if ("" === e.charAt(i++)) return -1;

    return i;
  },
  getFormattedValue: function (e, t, i, r, n, a) {
    var s = "",
        l = n.length > 0,
        o = "";
    return 0 === i ? e : (t.forEach(function (t, c) {
      if (e.length > 0) {
        var u = e.slice(0, t),
            d = e.slice(t);
        o = l ? n[a ? c - 1 : c] || o : r, a ? (c > 0 && (s += o), s += u) : (s += u, u.length === t && c < i - 1 && (s += o)), e = d;
      }
    }), s);
  },
  fixPrefixCursor: function (e, t, i, r) {
    if (e) {
      var n = e.value,
          a = i || r[0] || " ";

      if (e.setSelectionRange && t && !(t.length + a.length <= n.length)) {
        var s = 2 * n.length;
        setTimeout(function () {
          e.setSelectionRange(s, s);
        }, 1);
      }
    }
  },
  checkFullSelection: function (e) {
    try {
      return (window.getSelection() || document.getSelection() || {}).toString().length === e.length;
    } catch (e) {}

    return !1;
  },
  setSelection: function (e, t, i) {
    if (e === this.getActiveElement(i) && !(e && e.value.length <= t)) if (e.createTextRange) {
      var r = e.createTextRange();
      r.move("character", t), r.select();
    } else try {
      e.setSelectionRange(t, t);
    } catch (e) {
      console.warn("The input element type does not support selection");
    }
  },
  getActiveElement: function (e) {
    var t = e.activeElement;
    return t && t.shadowRoot ? this.getActiveElement(t.shadowRoot) : t;
  },
  isAndroid: function () {
    return navigator && /android/i.test(navigator.userAgent);
  },
  isAndroidBackspaceKeydown: function (e, t) {
    return !!(this.isAndroid() && e && t) && t === e.slice(0, -1);
  }
},
    h = {
  assign: function (t, i) {
    return i = i || {}, (t = t || {}).creditCard = !!i.creditCard, t.creditCardStrictMode = !!i.creditCardStrictMode, t.creditCardType = "", t.onCreditCardTypeChanged = i.onCreditCardTypeChanged || function () {}, t.phone = !!i.phone, t.phoneRegionCode = i.phoneRegionCode || "AU", t.phoneFormatter = {}, t.time = !!i.time, t.timePattern = i.timePattern || ["h", "m", "s"], t.timeFormat = i.timeFormat || "24", t.timeFormatter = {}, t.date = !!i.date, t.datePattern = i.datePattern || ["d", "m", "Y"], t.dateMin = i.dateMin || "", t.dateMax = i.dateMax || "", t.dateFormatter = {}, t.numeral = !!i.numeral, t.numeralIntegerScale = i.numeralIntegerScale > 0 ? i.numeralIntegerScale : 0, t.numeralDecimalScale = i.numeralDecimalScale >= 0 ? i.numeralDecimalScale : 2, t.numeralDecimalMark = i.numeralDecimalMark || ".", t.numeralThousandsGroupStyle = i.numeralThousandsGroupStyle || "thousand", t.numeralPositiveOnly = !!i.numeralPositiveOnly, t.stripLeadingZeroes = !1 !== i.stripLeadingZeroes, t.signBeforePrefix = !!i.signBeforePrefix, t.tailPrefix = !!i.tailPrefix, t.swapHiddenInput = !!i.swapHiddenInput, t.numericOnly = t.creditCard || t.date || !!i.numericOnly, t.uppercase = !!i.uppercase, t.lowercase = !!i.lowercase, t.prefix = t.creditCard || t.date ? "" : i.prefix || "", t.noImmediatePrefix = !!i.noImmediatePrefix, t.prefixLength = t.prefix.length, t.rawValueTrimPrefix = !!i.rawValueTrimPrefix, t.copyDelimiter = !!i.copyDelimiter, t.initValue = void 0 !== i.initValue && null !== i.initValue ? i.initValue.toString() : "", t.delimiter = i.delimiter || "" === i.delimiter ? i.delimiter : i.date ? "/" : i.time ? ":" : i.numeral ? "," : (i.phone, " "), t.delimiterLength = t.delimiter.length, t.delimiterLazyShow = !!i.delimiterLazyShow, t.delimiters = i.delimiters || [], t.blocks = i.blocks || [], t.blocksLength = t.blocks.length, t.root = "object" == typeof e && e ? e : window, t.document = i.document || t.root.document, t.maxLength = 0, t.backspace = !1, t.result = "", t.onValueChanged = i.onValueChanged || function () {}, t;
  }
},
    m = function (e, t) {
  var i = !1;
  if ("string" == typeof e ? (this.element = document.querySelector(e), i = document.querySelectorAll(e).length > 1) : void 0 !== e.length && e.length > 0 ? (this.element = e[0], i = e.length > 1) : this.element = e, !this.element) throw new Error("[cleave.js] Please check the element");
  if (i) try {
    console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.");
  } catch (e) {}
  t.initValue = this.element.value, this.properties = m.DefaultProperties.assign({}, t), this.init();
};

m.prototype = {
  init: function () {
    var e = this.properties;
    e.numeral || e.phone || e.creditCard || e.time || e.date || 0 !== e.blocksLength || e.prefix ? (e.maxLength = m.Util.getMaxLength(e.blocks), this.isAndroid = m.Util.isAndroid(), this.lastInputValue = "", this.isBackward = "", this.onChangeListener = this.onChange.bind(this), this.onKeyDownListener = this.onKeyDown.bind(this), this.onFocusListener = this.onFocus.bind(this), this.onCutListener = this.onCut.bind(this), this.onCopyListener = this.onCopy.bind(this), this.initSwapHiddenInput(), this.element.addEventListener("input", this.onChangeListener), this.element.addEventListener("keydown", this.onKeyDownListener), this.element.addEventListener("focus", this.onFocusListener), this.element.addEventListener("cut", this.onCutListener), this.element.addEventListener("copy", this.onCopyListener), this.initPhoneFormatter(), this.initDateFormatter(), this.initTimeFormatter(), this.initNumeralFormatter(), (e.initValue || e.prefix && !e.noImmediatePrefix) && this.onInput(e.initValue)) : this.onInput(e.initValue);
  },
  initSwapHiddenInput: function () {
    if (this.properties.swapHiddenInput) {
      var e = this.element.cloneNode(!0);
      this.element.parentNode.insertBefore(e, this.element), this.elementSwapHidden = this.element, this.elementSwapHidden.type = "hidden", this.element = e, this.element.id = "";
    }
  },
  initNumeralFormatter: function () {
    var e = this.properties;
    e.numeral && (e.numeralFormatter = new m.NumeralFormatter(e.numeralDecimalMark, e.numeralIntegerScale, e.numeralDecimalScale, e.numeralThousandsGroupStyle, e.numeralPositiveOnly, e.stripLeadingZeroes, e.prefix, e.signBeforePrefix, e.tailPrefix, e.delimiter));
  },
  initTimeFormatter: function () {
    var e = this.properties;
    e.time && (e.timeFormatter = new m.TimeFormatter(e.timePattern, e.timeFormat), e.blocks = e.timeFormatter.getBlocks(), e.blocksLength = e.blocks.length, e.maxLength = m.Util.getMaxLength(e.blocks));
  },
  initDateFormatter: function () {
    var e = this.properties;
    e.date && (e.dateFormatter = new m.DateFormatter(e.datePattern, e.dateMin, e.dateMax), e.blocks = e.dateFormatter.getBlocks(), e.blocksLength = e.blocks.length, e.maxLength = m.Util.getMaxLength(e.blocks));
  },
  initPhoneFormatter: function () {
    var e = this.properties;
    if (e.phone) try {
      e.phoneFormatter = new m.PhoneFormatter(new e.root.Cleave.AsYouTypeFormatter(e.phoneRegionCode), e.delimiter);
    } catch (e) {
      throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib");
    }
  },
  onKeyDown: function (e) {
    var t = e.which || e.keyCode;
    this.lastInputValue = this.element.value, this.isBackward = 8 === t;
  },
  onChange: function (e) {
    var t = this.properties,
        i = m.Util;
    this.isBackward = this.isBackward || "deleteContentBackward" === e.inputType;
    var r = i.getPostDelimiter(this.lastInputValue, t.delimiter, t.delimiters);
    this.isBackward && r ? t.postDelimiterBackspace = r : t.postDelimiterBackspace = !1, this.onInput(this.element.value);
  },
  onFocus: function () {
    var e = this.properties;
    this.lastInputValue = this.element.value, e.prefix && e.noImmediatePrefix && !this.element.value && this.onInput(e.prefix), m.Util.fixPrefixCursor(this.element, e.prefix, e.delimiter, e.delimiters);
  },
  onCut: function (e) {
    m.Util.checkFullSelection(this.element.value) && (this.copyClipboardData(e), this.onInput(""));
  },
  onCopy: function (e) {
    m.Util.checkFullSelection(this.element.value) && this.copyClipboardData(e);
  },
  copyClipboardData: function (e) {
    var t = this.properties,
        i = m.Util,
        r = this.element.value,
        n = "";
    n = t.copyDelimiter ? r : i.stripDelimiters(r, t.delimiter, t.delimiters);

    try {
      e.clipboardData ? e.clipboardData.setData("Text", n) : window.clipboardData.setData("Text", n), e.preventDefault();
    } catch (e) {}
  },
  onInput: function (e) {
    var t = this.properties,
        i = m.Util,
        r = i.getPostDelimiter(e, t.delimiter, t.delimiters);
    return t.numeral || !t.postDelimiterBackspace || r || (e = i.headStr(e, e.length - t.postDelimiterBackspace.length)), t.phone ? (!t.prefix || t.noImmediatePrefix && !e.length ? t.result = t.phoneFormatter.format(e) : t.result = t.prefix + t.phoneFormatter.format(e).slice(t.prefix.length), void this.updateValueState()) : t.numeral ? (t.prefix && t.noImmediatePrefix && 0 === e.length ? t.result = "" : t.result = t.numeralFormatter.format(e), void this.updateValueState()) : (t.date && (e = t.dateFormatter.getValidatedDate(e)), t.time && (e = t.timeFormatter.getValidatedTime(e)), e = i.stripDelimiters(e, t.delimiter, t.delimiters), e = i.getPrefixStrippedValue(e, t.prefix, t.prefixLength, t.result, t.delimiter, t.delimiters, t.noImmediatePrefix, t.tailPrefix, t.signBeforePrefix), e = t.numericOnly ? i.strip(e, /[^\d]/g) : e, e = t.uppercase ? e.toUpperCase() : e, e = t.lowercase ? e.toLowerCase() : e, t.prefix && (t.tailPrefix ? e += t.prefix : e = t.prefix + e, 0 === t.blocksLength) ? (t.result = e, void this.updateValueState()) : (t.creditCard && this.updateCreditCardPropsByValue(e), e = i.headStr(e, t.maxLength), t.result = i.getFormattedValue(e, t.blocks, t.blocksLength, t.delimiter, t.delimiters, t.delimiterLazyShow), void this.updateValueState()));
  },
  updateCreditCardPropsByValue: function (e) {
    var t,
        i = this.properties,
        r = m.Util;
    r.headStr(i.result, 4) !== r.headStr(e, 4) && (t = m.CreditCardDetector.getInfo(e, i.creditCardStrictMode), i.blocks = t.blocks, i.blocksLength = i.blocks.length, i.maxLength = r.getMaxLength(i.blocks), i.creditCardType !== t.type && (i.creditCardType = t.type, i.onCreditCardTypeChanged.call(this, i.creditCardType)));
  },
  updateValueState: function () {
    var e = this,
        t = m.Util,
        i = e.properties;

    if (e.element) {
      var r = e.element.selectionEnd,
          n = e.element.value,
          a = i.result;
      r = t.getNextCursorPosition(r, n, a, i.delimiter, i.delimiters), e.isAndroid ? window.setTimeout(function () {
        e.element.value = a, t.setSelection(e.element, r, i.document, !1), e.callOnValueChanged();
      }, 1) : (e.element.value = a, i.swapHiddenInput && (e.elementSwapHidden.value = e.getRawValue()), t.setSelection(e.element, r, i.document, !1), e.callOnValueChanged());
    }
  },
  callOnValueChanged: function () {
    var e = this.properties;
    e.onValueChanged.call(this, {
      target: {
        name: this.element.name,
        value: e.result,
        rawValue: this.getRawValue()
      }
    });
  },
  setPhoneRegionCode: function (e) {
    this.properties.phoneRegionCode = e, this.initPhoneFormatter(), this.onChange();
  },
  setRawValue: function (e) {
    var t = this.properties;
    e = null != e ? e.toString() : "", t.numeral && (e = e.replace(".", t.numeralDecimalMark)), t.postDelimiterBackspace = !1, this.element.value = e, this.onInput(e);
  },
  getRawValue: function () {
    var e = this.properties,
        t = m.Util,
        i = this.element.value;
    return e.rawValueTrimPrefix && (i = t.getPrefixStrippedValue(i, e.prefix, e.prefixLength, e.result, e.delimiter, e.delimiters, e.noImmediatePrefix, e.tailPrefix, e.signBeforePrefix)), i = e.numeral ? e.numeralFormatter.getRawValue(i) : t.stripDelimiters(i, e.delimiter, e.delimiters);
  },
  getISOFormatDate: function () {
    var e = this.properties;
    return e.date ? e.dateFormatter.getISOFormatDate() : "";
  },
  getISOFormatTime: function () {
    var e = this.properties;
    return e.time ? e.timeFormatter.getISOFormatTime() : "";
  },
  getFormattedValue: function () {
    return this.element.value;
  },
  destroy: function () {
    this.element.removeEventListener("input", this.onChangeListener), this.element.removeEventListener("keydown", this.onKeyDownListener), this.element.removeEventListener("focus", this.onFocusListener), this.element.removeEventListener("cut", this.onCutListener), this.element.removeEventListener("copy", this.onCopyListener);
  },
  toString: function () {
    return "[Cleave Object]";
  }
}, m.NumeralFormatter = i, m.DateFormatter = n, m.TimeFormatter = s, m.PhoneFormatter = o, m.CreditCardDetector = u, m.Util = d, m.DefaultProperties = h, ("object" == typeof e && e ? e : window).Cleave = m;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (m);

/***/ }),

/***/ 94112:
/*!**************************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#FBFBFB !important;\n}\n\n.wrapper {\n  padding: 20px;\n}\n\n.date_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 6px;\n}\n\nion-datetime.md {\n  --background: #FBFBFB;\n  color: #464646;\n}\n\nion-datetime.ios {\n  color: #464646;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGlyeS1kYXRlLXBvcHVwLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGV4cGlyeS1kYXRlLXBvcHVwXFxleHBpcnktZGF0ZS1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKIiwiZmlsZSI6ImV4cGlyeS1kYXRlLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmRhdGVfbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbmlvbi1kYXRldGltZS5tZHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbmlvbi1kYXRldGltZS5pb3N7XHJcbiAgICBjb2xvcjogIzQ2NDY0NjtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGF0ZV9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuaW9uLWRhdGV0aW1lLm1kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBjb2xvcjogIzQ2NDY0Njtcbn1cblxuaW9uLWRhdGV0aW1lLmlvcyB7XG4gIGNvbG9yOiAjNDY0NjQ2O1xufSJdfQ== */";

/***/ }),

/***/ 43171:
/*!****************************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.wrapper {\n  padding: 34px 16px 25px;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 24px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.heading {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  color: #0F172A;\n  text-align: center;\n}\n\n.card_img {\n  height: 15px;\n  width: 35px;\n}\n\n.card_img2 {\n  height: 20px;\n  width: 40px;\n  object-fit: cover;\n}\n\n.input_box {\n  margin-top: 10px;\n  border: 1px solid #EFEFEF;\n  display: flex;\n  align-items: center;\n  padding: 0px 8px 0px;\n  height: 48px;\n}\n\n.active_box {\n  border: 1px solid #8000FF;\n}\n\n.placeholder_margin {\n  margin-right: 10px;\n}\n\nion-input {\n  --background: #FBFBFB;\n  --color: black;\n  --placeholder-color: #B0B0B0;\n  --placeholder-font-weight: 400;\n  --padding-start: 0px;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.or_label {\n  margin-top: 25px;\n  text-align: center;\n}\n\n.paypal_label {\n  color: #7E7E7E;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxuZXctcGF5bWVudC1tZXRob2RcXG5ldy1wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUNBQUE7QUNFSjs7QURBQTtFQUNJLGtDQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtBQ0lKOztBREZBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUNNSjs7QURKQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxZQUFBO0VBQWEsV0FBQTtBQ1NqQjs7QURQQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNVSjs7QURSQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNXSjs7QURXQTtFQUNJLHlCQUFBO0FDUko7O0FEVUE7RUFDSSxrQkFBQTtBQ1BKOztBRFNBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURPQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pKIiwiZmlsZSI6Im5ldy1wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVyYmFuaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9wcGluc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAzNHB4IDE2cHggMjVweDtcclxufVxyXG4ubG9naW5fYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG5fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZF9pbWd7XHJcbiAgICBoZWlnaHQ6IDE1cHg7d2lkdGg6IDM1cHg7XHJcbn1cclxuLmNhcmRfaW1nMntcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmlucHV0X2JveHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4IDBweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG4vLyAuZGF0ZV9sYWJlbHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbi8vIH1cclxuLy8gLmRhdGV0aW1le1xyXG4vLyAgICAgLS1oZWlnaHQ6IDQ2MHB4O1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgLS13aWR0aDogOTAlO1xyXG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNSk7XHJcbi8vIH1cclxuLy8gaW9uLWRhdGV0aW1lLm1ke1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4vLyAgICAgY29sb3I6ICM0NjQ2NDY7XHJcbi8vIH1cclxuLy8gaW9uLWRhdGV0aW1lLmlvc3tcclxuLy8gICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4vLyB9XHJcbi5hY3RpdmVfYm94e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwMDBGRjtcclxufVxyXG4ucGxhY2Vob2xkZXJfbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0IwQjBCMDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLm9yX2xhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGF5cGFsX2xhYmVse1xyXG4gICAgY29sb3I6ICM3RTdFN0U7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi51cmJhbmlzdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wb3BwaW5zIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDM0cHggMTZweCAyNXB4O1xufVxuXG4ubG9naW5fYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyNHB4IGF1dG8gMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bl90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkX2ltZyB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbi5jYXJkX2ltZzIge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmlucHV0X2JveCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFRkVGRUY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCA4cHggMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5hY3RpdmVfYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwMDBGRjtcbn1cblxuLnBsYWNlaG9sZGVyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0IwQjBCMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ub3JfbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYXlwYWxfbGFiZWwge1xuICBjb2xvcjogIzdFN0U3RTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */";

/***/ }),

/***/ 5789:
/*!**************************************************************************!*\
  !*** ./src/app/expiry-date-popup/expiry-date-popup.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"date_label\">Select Date  </div>\n    <ion-datetime #datetime min=\"{{minDate}}\" max=\"2050\" (ionCancel)=\"cancel(ev)\" [showDefaultButtons]=\"true\" presentation=\"month-year\" (ionChange)=\"formattedString(datetime.value)\" size=\"cover\" ></ion-datetime>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 20300:
/*!****************************************************************************!*\
  !*** ./src/app/new-payment-method/new-payment-method.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"heading\">New Payment Method</div>\n    \n      <div style=\"margin-top: 20px;\">\n        <div class=\"input_box\" [class.active_box]=\"name_box_active==true\">\n          <img class=\"placeholder_margin\" src=\"../../assets/images/icons/user_icon.svg\" alt=\"\">\n          <ion-input maxlength=\"36\" (ionChange)=\"getUserName($event)\"  (ionInput)=\"activate('name')\" type=\"text\" placeholder=\"Card holder name\"></ion-input>\n        </div>\n        \n        <div class=\"input_box\" style=\"justify-content: space-between;\" [class.active_box]=\"card_box_active==true\">\n          <div style=\"display: flex;align-items: center;\">\n            <img class=\"placeholder_margin\" src=\"../../assets/images/icons/card_active.svg\" alt=\"\">\n            <ion-input class=\"input-element\" maxlength=\"19\" (ionChange)=\"checkCardType($event)\" (ionInput)=\"activate('card_number')\" type=\"tel\" placeholder=\"xxxx xxxx xxxx xxxx\"></ion-input>\n          </div>\n          <!-- formControlName=\"card_number\" -->\n          <div style=\"display: flex; justify-content: space-between;\">\n            <img class=\"card_img\" style=\"margin-right: 5px;\" src=\"../../assets/images/icons/visa_icon.svg\" alt=\"\" *ngIf=\"card_type == 'visa'\">\n            <img class=\"card_img\"  src=\"assets/images/icons/master_card.svg\" alt=\"\" *ngIf=\"card_type == 'mastercard'\">\n            <img class=\"card_img2\" src=\"assets/images/icons/am_ex.png\" alt=\"\" *ngIf=\"card_type == 'amex'\">\n            <img class=\"card_img2\" src=\"assets/images/icons/discover.png\" alt=\"\" *ngIf=\"card_type == 'discover'\">\n          </div>\n        </div>\n        \n        <div style=\"display: flex;justify-content: space-between;\">\n          <div class=\"input_box\" style=\"width: 48%;\" [class.active_box]=\"cvc_box_active==true\">\n            <img class=\"placeholder_margin\" src=\"../../assets/images/icons/card_not_active.svg\" alt=\"\">\n            <ion-input maxlength=\"3\" (ionChange)=\"getCvc($event)\" (ionInput)=\"activate('cvc')\" type=\"tel\" placeholder=\"CVC\" ></ion-input>\n          </div>\n          \n          <div (click)=\"openDateModal()\" class=\"input_box\" style=\"width: 48%; padding: 0px 6px 0px 14px;\" [class.active_box]=\"date_box_active==true\">\n            <img class=\"placeholder_margin\" src=\"../../assets/images/icons/calendar_icon.svg\" alt=\"\">\n            <div value=\"\"  style=\"color: #B0B0B0;\" *ngIf=\"expiryDate == 'Expire Date'\">{{expiryDate}}</div>\n            <div value=\"\"  style=\"color: black;\" *ngIf=\"expiryDate !== 'Expire Date'\">{{expiryDate}}</div>\n            \n          </div>\n        </div>\n        \n        <!-- <div class=\"or_label heading\">OR</div>\n        \n        <div style=\"margin-top: 13px;\">\n          <div class=\"paypal_label\">PayPal</div>\n          <div class=\"input_box\" [class.active_box]=\"email_box_active==true\">\n            <ion-input type=\"email\" (ionInput)=\"activate('email')\" placeholder=\"Enter PayPal email here\"></ion-input>\n          </div>\n        </div> -->\n        \n      </div>\n      \n      <ion-button  class=\"login_button\" (click)=\"savePaymentMethod()\">\n        <span class=\"btn_text\">Save</span>\n      </ion-button>\n    \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_new-payment-method_new-payment-method_page_ts.js.map