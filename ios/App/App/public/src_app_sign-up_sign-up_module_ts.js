"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sign-up_sign-up_module_ts"],{

/***/ 59204:
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageRoutingModule": () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 10080);




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ 73982:
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 59204);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 10080);
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-tel-input */ 79453);









let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule,
            ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__.Ng2TelInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage]
    })
], SignUpPageModule);



/***/ }),

/***/ 10080:
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sign_up_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.html?ngResource */ 98796);
/* harmony import */ var _sign_up_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.page.scss?ngResource */ 55585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 4241);










let SignUpPage = class SignUpPage {
  constructor(location, router, api, fb) {
    this.location = location;
    this.router = router;
    this.api = api;
    this.fb = fb;
    this.getFocus = false;
    this.showPassword = false;
    this.getType = 'password';
    this.activateUserNameField = false;
    this.activateUserNumberField = false;
    this.activateEmailField = false;
    this.activatePasswordField = false;
    this.profileImg = '';
    this.base64String = '';
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.angForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  } // =======================international phone input code =====================
  // onCountryChange(event){
  //   console.log(event.dialCode);
  //   console.log(event.name);
  //   console.log(event.iso2);
  //   }
  //   telInputObject(obj) {
  //     console.log('testing')
  //     console.log(obj);
  //     obj.setCountry('ae');
  //     console.log(obj.s.dialCode);
  //   }
  //   hasError(err){
  //     console.log(err);
  //   }
  //   getNumber(number){
  //     console.log(number);
  //     this.number = number;
  //   }
  //   focus(){
  //     this.getFocus=true;
  //   }
  // ===========================done========================================


  goBack() {
    this.location.back();
  }

  toggleGetType() {
    if (this.getType == 'password') {
      this.getType = 'text';
      this.showPassword = true;
    } else {
      this.getType = 'password';
      this.showPassword = false;
    }
  }

  activate(val) {
    if (val == 'userName') {
      this.activateUserNameField = true;
      this.activateEmailField = false;
      this.activatePasswordField = false;
      this.activateUserNumberField = false; // this.getFocus = false;
    } else if (val == 'phoneNumber') {
      // this.getFocus = true;
      this.activateEmailField = false;
      this.activateUserNameField = false;
      this.activatePasswordField = false;
      this.activateUserNumberField = true;
    } else if (val == 'email') {
      this.activateEmailField = true;
      this.activateUserNameField = false;
      this.activatePasswordField = false;
      this.activateUserNumberField = false; // this.getFocus = false;
    } else if (val == 'pwd') {
      this.activatePasswordField = true;
      this.activateEmailField = false;
      this.activateUserNameField = false;
      this.activateUserNumberField = false; // this.getFocus = false;
    } else {}
  }

  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

  addProfile() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Prompt
      });
      console.log(image.base64String);
      _this.profileImg = `data:image/jpeg;base64,${image.base64String}`;
      _this.base64String = image.base64String;
    })();
  }

  gotoVerifyPhoneOtp() {
    this.activateUserNameField = false;
    this.activateUserNumberField = false;
    this.activateEmailField = false;
    this.activatePasswordField = false;
    console.log(this.angForm.value.name);
    console.log(this.angForm.value.number);
    console.log(this.angForm.value.email);
    console.log(this.angForm.value.password);

    if (this.base64String !== '') {
      this.api.showLoading(); // ==============api Call==================

      let data = {
        username: this.angForm.value.name,
        phone: this.angForm.value.number,
        email: this.angForm.value.email,
        password: this.angForm.value.password,
        profile_pic: this.base64String
      };
      this.api.sendRequest('signupHereNow', data).subscribe(res => {
        this.api.hideLoading();
        console.log(res);

        if (res.status == 'success') {
          this.api.presentToast("Success!");
          this.router.navigate(['/sign-in']);
        } else if (res.status == 'error') {
          this.api.presentToast(res.message);
          this.api.hideLoading();
        } else {}
      }, error => {
        console.log(error);
        this.api.hideLoading();
      }); // =======================done===================
    } else {
      this.api.presentToast('Plz add image');
    }
  }

};

SignUpPage.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}];

SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-sign-up',
  template: _sign_up_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_sign_up_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignUpPage);


/***/ }),

/***/ 79453:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-tel-input/__ivy_ngcc__/esm2015/ng2-tel-input.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2TelInput": () => (/* binding */ Ng2TelInput),
/* harmony export */   "Ng2TelInputModule": () => (/* binding */ Ng2TelInputModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


/**
 * @fileoverview added by tsickle
 * Generated from: src/ng2-tel-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


const defaultUtilScript = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js';

class Ng2TelInput {
  /**
   * @param {?} el
   * @param {?} platformId
   */
  constructor(el, platformId) {
    this.el = el;
    this.platformId = platformId;
    this.ng2TelInputOptions = {};
    this.hasError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.ng2TelOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.countryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.intlTelInputObject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * @return {?}
   */


  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this.ng2TelInputOptions = Object.assign({}, this.ng2TelInputOptions, {
        utilsScript: this.getUtilsScript(this.ng2TelInputOptions)
      });
      this.ngTelInput = window.intlTelInput(this.el.nativeElement, Object.assign({}, this.ng2TelInputOptions));
      this.el.nativeElement.addEventListener("countrychange",
      /**
      * @return {?}
      */
      () => {
        this.countryChange.emit(this.ngTelInput.getSelectedCountryData());
      });
      this.intlTelInputObject.emit(this.ngTelInput);
    }
  }
  /**
   * @return {?}
   */


  onBlur() {
    /** @type {?} */
    let isInputValid = this.isInputValid();

    if (isInputValid) {
      /** @type {?} */
      let telOutput = this.ngTelInput.getNumber();
      this.hasError.emit(isInputValid);
      this.ng2TelOutput.emit(telOutput);
    } else {
      this.hasError.emit(isInputValid);
    }
  }
  /**
   * @return {?}
   */


  isInputValid() {
    return this.ngTelInput.isValidNumber();
  }
  /**
   * @param {?} country
   * @return {?}
   */


  setCountry(country) {
    this.ngTelInput.setCountry(country);
  }
  /**
   * @param {?} options
   * @return {?}
   */


  getUtilsScript(options) {
    return options.utilsScript || defaultUtilScript;
  }

}

Ng2TelInput.ɵfac = function Ng2TelInput_Factory(t) {
  return new (t || Ng2TelInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
};

Ng2TelInput.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Ng2TelInput,
  selectors: [["", "ng2TelInput", ""]],
  hostBindings: function Ng2TelInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function Ng2TelInput_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
  },
  inputs: {
    ng2TelInputOptions: "ng2TelInputOptions"
  },
  outputs: {
    hasError: "hasError",
    ng2TelOutput: "ng2TelOutput",
    countryChange: "countryChange",
    intlTelInputObject: "intlTelInputObject"
  }
});
/** @nocollapse */

Ng2TelInput.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}, {
  type: String,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
  }]
}];

Ng2TelInput.propDecorators = {
  ng2TelInputOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['ng2TelInputOptions']
  }],
  hasError: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
    args: ['hasError']
  }],
  ng2TelOutput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
    args: ['ng2TelOutput']
  }],
  countryChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
    args: ['countryChange']
  }],
  intlTelInputObject: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
    args: ['intlTelInputObject']
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['blur']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2TelInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng2TelInput]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }];
  }, {
    ng2TelInputOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ng2TelInputOptions']
    }],
    hasError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['hasError']
    }],
    ng2TelOutput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['ng2TelOutput']
    }],
    countryChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['countryChange']
    }],
    intlTelInputObject: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['intlTelInputObject']
    }],

    /**
     * @return {?}
     */
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['blur']
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * Generated from: src/ng2-tel-input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class Ng2TelInputModule {
  /**
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: Ng2TelInputModule,
      providers: []
    };
  }

}

Ng2TelInputModule.ɵfac = function Ng2TelInputModule_Factory(t) {
  return new (t || Ng2TelInputModule)();
};

Ng2TelInputModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2TelInputModule
});
Ng2TelInputModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2TelInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2TelInput],
      exports: [Ng2TelInput]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2TelInputModule, {
    declarations: [Ng2TelInput],
    exports: [Ng2TelInput]
  });
})();



/***/ }),

/***/ 55585:
/*!******************************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 10px;\n  position: relative;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.app_title {\n  font-size: 35px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #8000FF;\n  margin: 0px auto;\n}\n\n.creat_account_msg {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  text-align: center;\n}\n\n.profile_div {\n  margin-top: 16px;\n  text-align: center;\n}\n\n.profile_img {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n}\n\n.inputs_label {\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: #7E7E7E;\n  margin-top: 16px;\n}\n\n.input_box {\n  margin-top: 4px;\n  border: 1px solid #EFEFEF;\n  --background: #FBFBFB;\n  --placeholder-color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  --padding-start: 15px;\n  --padding-end: 10px;\n  height: 48px;\n}\n\n.password_box {\n  display: flex;\n  align-items: center;\n  margin-top: 4px;\n  border: 1px solid #EFEFEF;\n  padding: 0px 16px 0px 8px;\n  height: 48px;\n}\n\n.password_input {\n  --background: #FBFBFB;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-color: #8D8D8D;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  --padding-start: 8px;\n}\n\n.active_input_box {\n  border: 1px solid #8000FF;\n}\n\n.alert {\n  color: #d93025;\n  font-size: 12px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  padding: 4px 4px 0px;\n  margin: 0px;\n}\n\n.get_focus {\n  border-bottom: none !important;\n  border: 1px solid blue !important;\n}\n\n.checkbox {\n  margin-right: 10.5px;\n  --border-color: #8000FF;\n  height: 16px;\n  width: 16px;\n  --background: #FBFBFB;\n}\n\n.rem_fg_lablel {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: #7E7E7E;\n}\n\n.view_terms_link {\n  margin-top: 4px;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #8000FF;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 45px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n\n.last_div {\n  margin-top: 20px;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #0F172A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcc2lnbi11cFxcc2lnbi11cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksdUJBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksYUFBQTtFQUFjLFlBQUE7RUFBYyxrQkFBQTtBQ1loQzs7QURWQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDYUo7O0FEWEE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWkE7RUFDSSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ2VKOztBRGJBO0VBQ0kseUJBQUE7QUNnQko7O0FEZEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNpQko7O0FEZkE7RUFDSSw4QkFBQTtFQUNBLGlDQUFBO0FDa0JKOztBRGhCQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ29CSjs7QURsQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNxQko7O0FEbkJBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3NCSjs7QURwQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ3VCSjs7QURyQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDd0JKIiwiZmlsZSI6InNpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDE2cHggMjBweDtcclxufVxyXG4uYXBwX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5jcmVhdF9hY2NvdW50X21zZ3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcm9maWxlX2RpdntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGVfaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDBweDt3aWR0aDogMTAwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaW5wdXRzX2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzdFN0U3RTtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLmlucHV0X2JveHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRkVGRUY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi5wYXNzd29yZF9ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRkVGRUY7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweCAwcHggOHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcbi5wYXNzd29yZF9pbnB1dHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbn1cclxuLmFjdGl2ZV9pbnB1dF9ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODAwMEZGO1xyXG59XHJcbi5hbGVydHtcclxuICAgIGNvbG9yOiAjZDkzMDI1O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDRweCA0cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmdldF9mb2N1c3tcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWUgIWltcG9ydGFudDtcclxufVxyXG4uY2hlY2tib3h7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwLjVweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjODAwMEZGO1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLnJlbV9mZ19sYWJsZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM3RTdFN0U7XHJcbn1cclxuLnZpZXdfdGVybXNfbGlua3tcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxufVxyXG4ubG9naW5fYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNDVweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG5fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5sYXN0X2RpdntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbn1cclxuXHJcbiIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTZweCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMTVweCAxNnB4IDIwcHg7XG59XG5cbi5hcHBfdGl0bGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uY3JlYXRfYWNjb3VudF9tc2cge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlX2RpdiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGVfaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbnB1dHNfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3RTdFN0U7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5pbnB1dF9ib3gge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFRkVGRUY7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzhEOEQ4RDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnBhc3N3b3JkX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcbiAgcGFkZGluZzogMHB4IDE2cHggMHB4IDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4ucGFzc3dvcmRfaW5wdXQge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzhEOEQ4RDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG59XG5cbi5hY3RpdmVfaW5wdXRfYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwMDBGRjtcbn1cblxuLmFsZXJ0IHtcbiAgY29sb3I6ICNkOTMwMjU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA0cHggNHB4IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5nZXRfZm9jdXMge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWUgIWltcG9ydGFudDtcbn1cblxuLmNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMC41cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjODAwMEZGO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG59XG5cbi5yZW1fZmdfbGFibGVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjN0U3RTdFO1xufVxuXG4udmlld190ZXJtc19saW5rIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzgwMDBGRjtcbn1cblxuLmxvZ2luX2J1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNDVweCBhdXRvIDBweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5idG5fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG5cbi5sYXN0X2RpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xufSJdfQ== */";

/***/ }),

/***/ 98796:
/*!******************************************************!*\
  !*** ./src/app/sign-up/sign-up.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"app_title\">360UAE</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"creat_account_msg\">Create Your New Account</div>\n\n    <div class=\"profile_div\">\n      <img (click)=\"addProfile()\" src=\"assets/images/icons/profile_logo.svg\" alt=\"\" *ngIf=\"profileImg === ''\">\n      <img (click)=\"addProfile()\" class=\"profile_img\" src=\"{{profileImg}}\" alt=\"\" *ngIf=\"profileImg !== ''\">\n    </div>\n    <form [formGroup]=\"angForm\" novalidate>\n      <div>\n        <div class=\"inputs_label\">Username</div>\n        <ion-input class=\"input_box\" formControlName=\"name\" (ionInput)=\"activate('userName')\" [class.active_input_box]=\"activateUserNameField==true\" placeholder=\"Username\" type=\"text\" ></ion-input>\n        \n        <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\">\n          <div *ngIf=\"angForm.controls['name'].errors.required\" class=\"alert\">\n            Name is required\n          </div>\n        </div>\n\n        <div class=\"inputs_label\">Mobile number</div>\n        <ion-input class=\"input_box\" formControlName=\"number\" (ionInput)=\"activate('phoneNumber')\" [class.active_input_box]=\"activateUserNumberField==true\" placeholder=\"Mobile number\" type=\"tel\" ></ion-input>\n\n        <div *ngIf=\"angForm.controls['number'].invalid && (angForm.controls['number'].dirty || angForm.controls['number'].touched)\">\n          <div *ngIf=\"angForm.controls['number'].errors.required\" class=\"alert\">\n            Number is required\n          </div>\n        </div>\n        <!-- =====international phone input using angular =========== -->\n        <!-- <div style=\"margin-top: 4px;\" (input)=\"activate('phoneNumber')\" [class.get_focus]=\"getFocus==true\">\n          <input type=\"text\"\n          ng2TelInput\n          \n          [ng2TelInputOptions]=\"{autoHideDialCode: false, initialCountry: 'ae', separateDialCode:true}\"\n          (hasError)=\"hasError($event)\"\n          (ng2TelOutput)=\"getNumber($event)\"\n          (intlTelInputObject)=\"telInputObject($event)\"\n          (countryChange)=\"onCountryChange($event)\" />\n        </div> -->\n        <!-- ========================done============================ -->\n        <div class=\"inputs_label\">Email</div>\n        <ion-input class=\"input_box\" formControlName=\"email\" (ionInput)=\"activate('email')\" [class.active_input_box]=\"activateEmailField==true\" placeholder=\"rose.matthews@gmail.com\" type=\"email\" ></ion-input>\n        \n        <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\">\n          <div *ngIf=\"angForm.controls['email'].errors.pattern\" class=\"alert\">\n            Email is invalid\n          </div>\n          <div *ngIf=\"angForm.controls['email'].errors.required\" class=\"alert\">\n            Email is required\n          </div>\n        </div>\n\n        <div class=\"inputs_label\" >Password</div>\n        <div class=\"password_box\" [class.active_input_box]=\"activatePasswordField==true\">\n          <ion-input class=\"password_input\" formControlName=\"password\" (ionInput)=\"activate('pwd')\"  placeholder=\".......\" type=\"{{getType}}\"  ></ion-input>\n          \n          \n          \n          <ion-icon style=\"color: #B0B0B0;\" name=\"eye\" *ngIf=\"showPassword==false\" (click)=\"toggleGetType()\"></ion-icon>\n          <ion-icon style=\"color: #B0B0B0;\" name=\"eye-off\" *ngIf=\"showPassword==true\" (click)=\"toggleGetType()\"></ion-icon>\n        </div>\n        <div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\">\n          <div *ngIf=\"angForm.controls['password'].errors.required\" class=\"alert\">\n            Password is required\n          </div>            \n        </div>\n      </div>\n  \n      <div style=\"margin-top: 24px;\">\n        <div style=\"display: flex;\">\n          <ion-checkbox slot=\"start\" class=\"checkbox\"></ion-checkbox>\n          <span class=\"rem_fg_lablel\" >I agree to the terms of service and privacy policy</span>\n        </div>\n        <div class=\"view_terms_link\">View terms of service and privacy policy</div>\n      </div>\n  \n      <ion-button type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"login_button\" (click)=\"gotoVerifyPhoneOtp()\">\n        <span class=\"btn_text\">Sign up</span>\n      </ion-button>\n    </form>\n    \n\n    <div class=\"last_div\"><span style=\"font-weight: 400;\">Already have an account? </span> <span (click)=\"gotoSignIn()\" style=\"font-weight: 700;text-decoration: underline;\">Login</span> </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-up_sign-up_module_ts.js.map