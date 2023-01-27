"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-profile_edit-profile_module_ts"],{

/***/ 1871:
/*!*************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 62613);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 71241:
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 1871);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 62613);








let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ }),

/***/ 62613:
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.html?ngResource */ 31481);
/* harmony import */ var _edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile.page.scss?ngResource */ 38481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../check-user.service */ 47852);











let EditProfilePage = class EditProfilePage {
  constructor(location, navCtrlr, api, checkUser, fb) {
    this.location = location;
    this.navCtrlr = navCtrlr;
    this.api = api;
    this.checkUser = checkUser;
    this.fb = fb;
    this.fName = '';
    this.lName = '';
    this.userProfile = '';
    this.userEmail = '';
    this.userAbout = '';
    this.userLocation = '';
    this.firstName = false;
    this.lastName = false;
    this.about = false;
    this.email = false;
    this.address = false;
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      fName: [],
      lName: [],
      about: [],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      location: []
    });
  }

  ngOnInit() {
    console.log(this.api.localUserData); // ================

    const str = this.api.localUserData.username;
    const strArray = str.split(' ');
    console.log(strArray);

    if (strArray.length == 3) {
      this.fName = strArray[0];
      this.lName = `${strArray[1]} ${strArray[2]}`;
    } else if (strArray.length == 2) {
      this.fName = strArray[0];
      this.lName = strArray[1];
    } else if (strArray.length == 1) {
      this.fName = strArray[0];
    } else {}

    this.userProfile = this.api.localUserData.profile_pic;

    if (this.api.localUserData.account_type == 'SignupWithApp') {
      this.userProfile = `${this.api.imageUrlString}${this.userProfile}`;
    }

    this.userEmail = this.api.localUserData.email;
    this.userAbout = this.api.localUserData.about;
    this.userLocation = this.api.localUserData.location;

    if (this.userAbout == null) {
      this.userAbout = '';
    }

    if (this.userLocation == null) {
      this.userLocation == this.api.fetchLocation;
    }

    this.angForm.setValue({
      fName: this.fName,
      lName: this.lName,
      about: this.userAbout,
      email: this.userEmail,
      location: this.userLocation
    }); // expected output: Array ["The quick brown fox jumps over the lazy dog."]
    // ====================
  }

  goBack() {
    this.location.back();
  }

  activate(val) {
    if (val == 'first_name') {
      this.firstName = true;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = false;
    } else if (val == 'last_name') {
      this.firstName = false;
      this.lastName = true;
      this.about = false;
      this.email = false;
      this.address = false;
    } else if (val == 'about') {
      this.firstName = false;
      this.lastName = false;
      this.about = true;
      this.email = false;
      this.address = false;
    } else if (val == 'email') {
      this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = true;
      this.address = false;
    } else if (val == 'address') {
      this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = true;
    } else {}
  }

  addNewProfile() {
    var _this = this;

    return (0,D_Github_Projects_360UAE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Prompt
      });
      console.log(image.base64String);
      _this.userProfile = `data:image/jpeg;base64,${image.base64String}`;
      _this.base64String = image.base64String;
    })();
  }

  updateProfile() {
    this.firstName = false;
    this.lastName = false;
    this.about = false;
    this.email = false;
    this.address = false;
    let data = {
      username: `${this.angForm.value.fName} ${this.angForm.value.lName}`,
      email: this.angForm.value.email,
      location: this.angForm.value.location,
      about: this.angForm.value.about,
      user_id: this.checkUser.appUserId,
      profile: this.base64String
    };
    console.log(this.angForm.value.fName + " " + this.angForm.value.lName);
    console.log("email: ", this.angForm.value.email);
    console.log("location: ", this.angForm.value.location);
    console.log("about: ", this.angForm.value.about);
    console.log("appUserId: ", this.checkUser.appUserId);
    console.log("base64String: ", this.base64String);
    this.api.showLoading();
    this.api.sendRequest('updateAppUserProfile', data).subscribe(res => {
      this.api.hideLoading();
      console.log('Updat Profile Res: ', res);

      if (res.status == 'success') {
        this.api.presentToast('Success!');
        this.api.localUserData.username = res.data[0].username;
        this.api.localUserData.about = res.data[0].about;
        this.api.localUserData.profile_pic = res.data[0].profile_pic;
        this.api.localUserData.email = res.data[0].email;
        this.api.localUserData.location = res.data[0].location;
        console.log('api Local User Data: ', this.api.localUserData);
        localStorage.setItem('localUserData', JSON.stringify(this.api.localUserData));
        this.navCtrlr.navigateForward('settings');
      } else if (res.status == 'error') {
        // console.log("Error: ",);
        this.api.hideLoading();
      } else {}
    }, err => {
      console.log("Error: ", err);
      this.api.hideLoading();
    });
  }

};

EditProfilePage.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
}, {
  type: _check_user_service__WEBPACK_IMPORTED_MODULE_5__.CheckUserService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}];

EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-edit-profile',
  template: _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EditProfilePage);


/***/ }),

/***/ 38481:
/*!****************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.profile_img {\n  height: 160px;\n  width: 160px;\n  border-radius: 50%;\n}\n\n.profile_div {\n  position: relative;\n  width: 175px;\n  margin: 0px auto;\n}\n\n.edit_icon {\n  position: absolute;\n  top: 60%;\n  right: 6.6%;\n}\n\n.input_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #7E7E7E;\n}\n\nion-input {\n  --background: #FBFBFB;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  --color: black;\n  --placeholder-font-weight: 400;\n  --placeholder-color: #8D8D8D;\n  border: 1px solid #EFEFEF;\n  --padding-start: 15px;\n  --padding-top: 11px;\n  --padding-bottom: 11px;\n  margin-top: 5px;\n}\n\nion-textarea {\n  --background: #FBFBFB;\n  --placeholder-color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  --color: black;\n  --placeholder-font-weight: 400;\n  --padding-start: 15px;\n  border: 1px solid #EFEFEF;\n  height: auto;\n  max-height: 70px;\n  overflow: scroll;\n  margin-top: 5px;\n  --padding-end:10px;\n}\n\n.alert {\n  color: #d93025;\n  font-size: 12px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  padding: 4px 4px 0px;\n  margin: 0px;\n}\n\n.active_input {\n  border: 1px solid #8000FF;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 24px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxlZGl0LXByb2ZpbGVcXGVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxxQkFBQTtBQ1FKOztBRE5BO0VBQ0ksdUJBQUE7QUNTSjs7QURQQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNVSjs7QURSQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDWUo7O0FEVkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNhSjs7QURYQTtFQUNJLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ2NKOztBRFpBO0VBQ0kscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDZUo7O0FEYkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNnQko7O0FEZEE7RUFDSSx5QkFBQTtBQ2lCSjs7QURmQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNrQko7O0FEaEJBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUNtQkoiLCJmaWxlIjoiZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVyYmFuaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9wcGluc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYWRlcl90aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDE2cHggMjBweDtcclxufVxyXG4ucHJvZmlsZV9pbWd7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgd2lkdGg6IDE2MHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ucHJvZmlsZV9kaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5lZGl0X2ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIHJpZ2h0OiA2LjYlO1xyXG59XHJcbi5pbnB1dF9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzdFN0U3RTtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDExcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOjEwcHg7XHJcbn1cclxuLmFsZXJ0e1xyXG4gICAgY29sb3I6ICNkOTMwMjU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogNHB4IDRweCAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uYWN0aXZlX2lucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwMDBGRjtcclxufVxyXG4ubG9naW5fYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvIDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG5fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4udXJiYW5pc3Qge1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucG9wcGlucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTZweCAyMHB4O1xufVxuXG4ucHJvZmlsZV9pbWcge1xuICBoZWlnaHQ6IDE2MHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnByb2ZpbGVfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTc1cHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5lZGl0X2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICByaWdodDogNi42JTtcbn1cblxuLmlucHV0X2xhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjN0U3RTdFO1xufVxuXG5pb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIC0tcGFkZGluZy10b3A6IDExcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDExcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgLS1wYWRkaW5nLWVuZDoxMHB4O1xufVxuXG4uYWxlcnQge1xuICBjb2xvcjogI2Q5MzAyNTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDRweCA0cHggMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFjdGl2ZV9pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDAwRkY7XG59XG5cbi5sb2dpbl9idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI0cHggYXV0byAwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuX3RleHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 31481:
/*!****************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Edit Profile</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"profile_div\">\n      <img src=\"assets/images/dummy_profile.svg\" alt=\"\" *ngIf=\"userProfile === ''\">\n      <img class=\"profile_img\" src=\"{{userProfile}}\" alt=\"\" *ngIf=\"userProfile !== '' \">\n      <img class=\"edit_icon\" (click)=\"addNewProfile()\" src=\"assets/images/icons/edit_profile.svg\" alt=\"\">\n    </div>\n    <form [formGroup]=\"angForm\">\n      <div style=\"padding-top: 25px;\">\n        <div class=\"input_label\">First Name</div>\n        <ion-input type=\"text\" formControlName=\"fName\"  placeholder=\"John\" [class.active_input]=\"firstName == true\" (ionInput)=\"activate('first_name')\"></ion-input>\n      </div>\n      <div style=\"padding-top: 12.5px;\">\n        <div class=\"input_label\">Last Name</div>\n        <ion-input type=\"text\" formControlName=\"lName\" placeholder=\"Doe\" [class.active_input]=\"lastName == true\" (ionInput)=\"activate('last_name')\"></ion-input>\n      </div>\n      <div style=\"padding-top: 12.5px;\">\n        <div class=\"input_label\">About</div>\n        <ion-textarea auto-grow=\"true\" formControlName=\"about\" rows=\"2\" cols=\"20\" type=\"text\" placeholder=\"Lorem ipsum\" [class.active_input]=\"about == true\" (ionInput)=\"activate('about')\"></ion-textarea>\n      </div>\n      <div style=\"padding-top: 12.5px;\">\n        <div class=\"input_label\">Email</div>\n        <ion-input type=\"email\" formControlName=\"email\" placeholder=\"rose.matthews@mail.com\" [class.active_input]=\"email == true\" (ionInput)=\"activate('email')\"></ion-input>\n        <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\">\n          <div *ngIf=\"angForm.controls['email'].errors.pattern\" class=\"alert\">\n            Email is invalid\n          </div>\n        </div>\n      </div>\n      <div style=\"padding-top: 12.5px;\">\n        <div class=\"input_label\">Location</div>\n        <ion-input type=\"text\" formControlName=\"location\" placeholder=\"Enter your location here\" [class.active_input]=\"address == true\" (ionInput)=\"activate('address')\"></ion-input>\n      </div>\n    </form>\n    \n\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div style=\"padding: 0px 16px 25px;\">\n    <ion-button class=\"login_button\" (click)=\"updateProfile()\">\n      <span class=\"btn_text\">Update</span>\n    </ion-button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-profile_edit-profile_module_ts.js.map