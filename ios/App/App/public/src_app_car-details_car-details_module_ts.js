"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_car-details_car-details_module_ts"],{

/***/ 81930:
/*!***********************************************************!*\
  !*** ./src/app/car-details/car-details-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailsPageRoutingModule": () => (/* binding */ CarDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _car_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-details.page */ 81677);




const routes = [
    {
        path: '',
        component: _car_details_page__WEBPACK_IMPORTED_MODULE_0__.CarDetailsPage
    }
];
let CarDetailsPageRoutingModule = class CarDetailsPageRoutingModule {
};
CarDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarDetailsPageRoutingModule);



/***/ }),

/***/ 32901:
/*!***************************************************!*\
  !*** ./src/app/car-details/car-details.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailsPageModule": () => (/* binding */ CarDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _car_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-details-routing.module */ 81930);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _car_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-details.page */ 81677);








let CarDetailsPageModule = class CarDetailsPageModule {
};
CarDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
            _car_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarDetailsPageRoutingModule
        ],
        declarations: [_car_details_page__WEBPACK_IMPORTED_MODULE_1__.CarDetailsPage]
    })
], CarDetailsPageModule);



/***/ }),

/***/ 81677:
/*!*************************************************!*\
  !*** ./src/app/car-details/car-details.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailsPage": () => (/* binding */ CarDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _car_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-details.page.html?ngResource */ 69684);
/* harmony import */ var _car_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-details.page.scss?ngResource */ 94438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 26710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);











swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_4__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_4__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_4__.Zoom, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicSlides]);
let CarDetailsPage = class CarDetailsPage {
    constructor(location, navCtrlr, checkUser, api, router) {
        this.location = location;
        this.navCtrlr = navCtrlr;
        this.checkUser = checkUser;
        this.api = api;
        this.router = router;
        this.favorites = '';
        this.showCategories = false;
        this.rentCategories = [{ category: 'Day' }, { category: 'Month' }];
        this.categoryVal = 'Day';
        this.carData = [];
    }
    ionViewWillEnter() {
        this.carData = this.api.carDataById;
        if (this.carData != undefined) {
            for (let data of this.carData) {
                this.vehicleName = data.vehical_name;
                this.carId = data.car_id;
                this.company_id = data.users_company[0].users_company_id;
                this.company_name = data.users_company[0].company_name;
                if (!data.favourite_status) {
                    this.favorites = 'dislike';
                }
                else {
                    this.favorites = data.favourite_status;
                }
            }
        }
        this.appUserId = localStorage.getItem('appUserId');
        if (this.appUserId == null) {
            console.log('appUserIdonCar_Details: ', this.appUserId);
            this.favorites = 'dislike';
        }
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    displayCategories() {
        if (this.showCategories == false) {
            this.showCategories = true;
        }
        else {
            this.showCategories = false;
        }
    }
    makefavorite() {
        if (this.appUserId == null) {
            this.navCtrlr.navigateForward('sign-in');
        }
        else {
            let data = {
                favourite_car_id: this.carId,
                user_id: this.appUserId,
            };
            this.api.showLoading();
            this.api.sendRequest('favouriteCars', data).subscribe((res) => {
                this.api.hideLoading();
                console.log('Favorite Api Response: ', res);
                if (res.status == 'success') {
                    this.favorites = res.data;
                    this.getCarDataById();
                }
                else if (res.status == 'error') {
                }
            }, (err) => {
                this.api.hideLoading();
                console.log('Error', err);
            });
        }
    }
    getCarDataById() {
        let data = {
            car_id: this.carId,
            user_id: this.checkUser.appUserId
        };
        this.api.showLoading();
        this.api.sendRequest('getCarsById', data).subscribe((res) => {
            this.api.hideLoading();
            console.log('api response:', res);
            if (res.status == 'success') {
                this.api.carDataById = res.data;
                console.log('carDataById:', this.api.carDataById);
            }
        }, (err) => {
            this.api.hideLoading();
            console.log(err);
        });
    }
    selectedCategory(val) {
        console.log(val);
        this.categoryVal = val;
    }
    gotoRatings() {
        if (this.checkUser.appUserId == null) {
            this.navCtrlr.navigateForward('sign-in');
        }
        else if (this.checkUser.appUserId != null) {
            this.navCtrlr.navigateForward('ratings');
        }
        else {
        }
    }
    startCarBooking() {
        if (this.checkUser.appUserId == null) {
            this.router.navigate(['/sign-in']);
        }
        else if (this.checkUser.appUserId != null) {
            this.router.navigate(['/car-booking']);
        }
        else {
        }
    }
    startChatwithOwner() {
        if (this.checkUser.appUserId == null) {
            this.navCtrlr.navigateForward('sign-in');
        }
        else if (this.checkUser.appUserId != null) {
            let data = {
                requestType: "startChat",
                userId: this.checkUser.appUserId,
                otherUserId: this.company_id
            };
            this.api.sendRequest("Chat", data).subscribe((res) => {
                console.log("Start_chat_Request_Response: ", res);
                if (res.status == 'success') {
                    this.api.companyId = this.company_id;
                    console.log("this.api.companyId: ", this.api.companyId);
                    this.navCtrlr.navigateForward(['/message-owner-side', {
                            company_id: this.company_id,
                            company_name: this.company_name
                        }]);
                }
            }, (err) => {
                console.log("Error: ", err);
            });
        }
        else {
        }
    }
};
CarDetailsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_2__.CheckUserService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
CarDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-car-details',
        template: _car_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_car_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarDetailsPage);



/***/ }),

/***/ 94438:
/*!**************************************************************!*\
  !*** ./src/app/car-details/car-details.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.header_footer_bg {\n  background-color: #FBFBFB !important;\n}\n\n.content_background {\n  --background: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 15px;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.wrapper {\n  padding: 5px 16px 20px;\n}\n\n.car_slide {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  position: relative;\n}\n\n.heart_icon {\n  position: absolute;\n  right: 5%;\n  top: 8%;\n}\n\n.car_image {\n  width: 100% !important;\n  height: 188px !important;\n  border-radius: 10px;\n  object-fit: cover;\n}\n\n.name_price_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 11px 12px 10px;\n  border-radius: 5px;\n  height: 55px;\n}\n\n.car_name {\n  font-size: 24px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.price_val {\n  color: #8000FF;\n  font-family: \"Urbanist\", sans-serif;\n  font-weight: 600;\n}\n\n.category_label {\n  color: black;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.categories {\n  width: 100px;\n  position: absolute;\n  z-index: 1;\n  background: #FBFBFB;\n  top: 20px;\n  right: 0px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.rotate_icon {\n  transform: rotate(180deg);\n}\n\n.box_styling {\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 8px 9px;\n  border-radius: 5px;\n}\n\n.box_heading {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.box_description {\n  margin-top: 5px;\n  font-size: 12px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n  height: auto;\n  max-height: 90px;\n  overflow: hidden;\n}\n\n.box_sub_heading {\n  margin-top: 3px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #8000FF;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.inner_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.star_margin {\n  margin-right: 3.8px;\n}\n\n.trips_label {\n  margin-left: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 65%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGNhci1kZXRhaWxzXFxjYXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEQUE7RUFDSSxvQ0FBQTtBQ0dKOztBRERBO0VBQ0ksZ0NBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNPSjs7QURMQTtFQUNJLHNCQUFBO0FDUUo7O0FETkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNTSjs7QURQQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUNVSjs7QURSQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDWUo7O0FEVkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNhSjs7QURYQTtFQUNJLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkE7RUFFSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNjSjs7QURaQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLDRDQUFBO0FDY0o7O0FEWkE7RUFDSSx5QkFBQTtBQ2VKOztBRGJBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ2lCSjs7QURmQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDbUJKOztBRGpCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDb0JKOztBRGxCQTtFQUNJLG1CQUFBO0FDcUJKOztBRG5CQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDc0JKOztBRHBCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtBQ3dCSiIsImZpbGUiOiJjYXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyX2Zvb3Rlcl9iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4uY29udGVudF9iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZDRjZGRjtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzo1cHggMTZweCAyMHB4OyAgICBcclxufVxyXG4uY2FyX3NsaWRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYXJ0X2ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICB0b3A6IDglO1xyXG59XHJcbi5jYXJfaW1hZ2V7XHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE4OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLm5hbWVfcHJpY2VfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDEycHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxufVxyXG4uY2FyX25hbWV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnByaWNlX3ZhbHtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNhdGVnb3J5X2xhYmVse1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5jYXRlZ29yaWVze1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwRjE3MkE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcbi5yb3RhdGVfaWNvbntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuLmJveF9zdHlsaW5ne1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gOSUpO1xyXG4gICAgcGFkZGluZzogOHB4IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYm94X2hlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5ib3hfZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogOTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJveF9zdWJfaGVhZGluZ3tcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uaW5uZXJfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnN0YXJfbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzLjhweDtcclxufVxyXG4udHJpcHNfbGFiZWx7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pbnZpdGVfYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MHB4O1xyXG4gICAgd2lkdGg6NjUlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZDRjZGRiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXJfZm9vdGVyX2JnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudF9iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkNGNkZGO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjBweDtcbn1cblxuLmNhcl9zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhcnRfaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUlO1xuICB0b3A6IDglO1xufVxuXG4uY2FyX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxODhweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLm5hbWVfcHJpY2VfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgcGFkZGluZzogMTFweCAxMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4uY2FyX25hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wcmljZV92YWwge1xuICBjb2xvcjogIzgwMDBGRjtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhdGVnb3J5X2xhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXRlZ29yaWVzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLnJvdGF0ZV9pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmJveF9zdHlsaW5nIHtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJveF9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJveF9kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm94X3N1Yl9oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pbm5lcl9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zdGFyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMy44cHg7XG59XG5cbi50cmlwc19sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmludml0ZV9idG4ge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */";

/***/ }),

/***/ 69684:
/*!**************************************************************!*\
  !*** ./src/app/car-details/car-details.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [class.header_footer_bg]=\"checkUser.appUserId != null\">\n  <ion-toolbar class=\"bgtoolbar\" [class.content_background]=\"checkUser.appUserId != null\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"title\">{{vehicleName}}</div>\n      <div>\n        <img (click)=\"startChatwithOwner()\" src=\"assets/images/icons/chat.svg\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.content_background]=\"checkUser.appUserId != null\">\n  <div class=\"wrapper\">\n    <div *ngFor=\"let data of carData\">\n      <swiper [pagination]=\"true\" [config]=\"{ intialSlide: 0, speed: 400, slidesPerView:1 }\">\n        <ng-template swiperSlide>\n          <div class=\"car_slide\" >\n            <img (click)=\"makefavorite()\" class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img (click)=\"makefavorite()\" class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image1}}\" alt=\"\">\n          </div>\n        </ng-template>\n        <ng-template swiperSlide>\n          <div class=\"car_slide\" >\n            <img class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image2}}\" alt=\"\">\n          </div>\n        </ng-template>\n        <ng-template swiperSlide>\n          <div class=\"car_slide\" >\n            <img class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image3}}\" alt=\"\">\n          </div>\n        </ng-template>\n        <ng-template swiperSlide>\n          <div class=\"car_slide\" >\n            <img class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image4}}\" alt=\"\">\n          </div>\n        </ng-template>\n        <ng-template swiperSlide>\n          <div class=\"car_slide\" >\n            <img class=\"heart_icon\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image5}}\" alt=\"\">\n          </div>\n        </ng-template>\n      </swiper>\n        \n  \n      <div class=\"name_price_box\">\n            <div class=\"car_name\">{{data.vehical_name}}</div>\n        <div style=\"display: flex;align-items: baseline;\">\n          <span class=\"price_val\" style=\"font-size:11px\">$</span>\n          <span class=\"price_val\" style=\"font-size:32px\" *ngIf=\"categoryVal=='Day'\">{{data.rent_cost_day}}</span>\n          <span class=\"price_val\" style=\"font-size:32px\" *ngIf=\"categoryVal=='Month'\">{{data.rent_cost_month}}</span>\n          <!-- <span class=\"price_val\" style=\"font-size:32px\">26</span> -->\n          <span class=\"category_label\" style=\"font-size: 10px;\">/</span>\n          \n          <div (click)=\"displayCategories()\" style=\"display: flex;align-items: baseline;position: relative;\">\n            <span class=\"category_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n            <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n            <div *ngIf=\"showCategories==true\" class=\"categories\">\n              <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category)\">\n                <span class=\"category_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n              </div> \n            </div>  \n          </div>\n        </div>\n  \n      </div>\n  \n      <div class=\"box_styling\">\n        <div class=\"box_heading\">Description</div>\n        <div class=\"box_description\">\n          {{data.description}}\n        </div>\n      </div>\n      \n      <div class=\"box_styling\">\n        <div class=\"box_heading\">Owner's Details</div>\n        <div class=\"box_sub_heading\">About</div>\n        <div class=\"box_description\">\n          {{data.users_company[0].about}}\n        </div>\n      </div>\n  \n      <div class=\"box_styling\">\n        <div class=\"box_sub_heading\" style=\"margin-top: 0px;\">Location</div>\n        <div class=\"box_description\" style=\"margin-top: 4px;\">\n          {{data.users_company[0].company_location}}\n        </div>\n      </div>\n      <div class=\"box_styling\" style=\"padding: 14px 14px 15px;\" (click)=\"gotoRatings()\">\n        <div class=\"inner_box\">\n          <div>\n            <span class=\"box_heading\" style=\"margin-right: 10px;\">Ratings</span>\n            \n            <span *ngIf=\"data.rating == 0 \">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=1 && data.rating < 1.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=1.5 && data.rating < 2.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=2.5 && data.rating < 3.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=3.5 && data.rating < 4.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=4.5 && data.rating < 5.1\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            </span>\n              \n            <span class=\"trips_label\">{{data.total_bookings}} trips</span>\n          </div>\n          <div>\n            <img src=\"assets/images/icons/next.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n    \n\n    \n\n    \n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" [class.header_footer_bg]=\"checkUser.appUserId != null\">\n    <div style=\"margin: 10px 0px 15px;\">\n      <div style=\"text-align: center;\">\n        <ion-button class=\"invite_btn\" (click)=\"startCarBooking()\">\n          <span class=\"btn-text\">Book Now</span>\n        </ion-button>\n      </div>\n    </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_car-details_car-details_module_ts.js.map