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
                this.company_id = data.users_company_id;
                this.company_name = data.company_name;
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
            this.navCtrlr.navigateRoot('sign-in');
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
                // else if(res.status == 'error'){
                //   this.api.presentToast()
                // }
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
                // if(!res.data.favourite_status){
                //   console.log("Favorite status not found");
                //   this.api.favorite_status = false;
                // }
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
            this.navCtrlr.navigateRoot('sign-in');
        }
        else if (this.checkUser.appUserId != null) {
            // this.router.navigate
            this.navCtrlr.navigateRoot('ratings');
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
            this.navCtrlr.navigateRoot('sign-in');
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
                    // console.log();
                    // let chat_ids = {
                    //   user_id: this.checkUser.appUserId,
                    //   company_id: this.company_id
                    // }
                    // this.api.chat_ids.user_id = this.checkUser.appUserId;
                    // this.api.chat_ids.company_id = this.company_id;
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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FCF6FF !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FCF6FF !important;\n}\n\n.header_footer_bg {\n  background-color: #FBFBFB !important;\n}\n\n.content_background {\n  --background: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 15px;\n}\n\n.bgtoolbar {\n  --background: #FCF6FF;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.wrapper {\n  padding: 5px 16px 20px;\n}\n\n.car_image {\n  width: 100% !important;\n  height: 188px !important;\n  border-radius: 10px;\n  object-fit: cover;\n}\n\n.name_price_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 11px 12px 10px;\n  border-radius: 5px;\n  height: 55px;\n}\n\n.car_name {\n  font-size: 24px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.price_val {\n  color: #8000FF;\n  font-family: \"Urbanist\", sans-serif;\n  font-weight: 600;\n}\n\n.category_label {\n  color: black;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.categories {\n  width: 100px;\n  position: absolute;\n  z-index: 1;\n  background: #FBFBFB;\n  top: 20px;\n  right: 0px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.rotate_icon {\n  transform: rotate(180deg);\n}\n\n.box_styling {\n  background: #FBFBFB;\n  margin-top: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n  padding: 8px 9px;\n  border-radius: 5px;\n}\n\n.box_heading {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.box_description {\n  margin-top: 5px;\n  font-size: 12px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n  height: auto;\n  max-height: 90px;\n  overflow: hidden;\n}\n\n.box_sub_heading {\n  margin-top: 3px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #8000FF;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.inner_box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.trips_label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 65%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGNhci1kZXRhaWxzXFxjYXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEQUE7RUFDSSxvQ0FBQTtBQ0dKOztBRERBO0VBQ0ksZ0NBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNPSjs7QURMQTtFQUNJLHNCQUFBO0FDUUo7O0FETkE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDV0o7O0FEVEE7RUFDSSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ1lKOztBRFZBO0VBRUksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWUo7O0FEVkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSw0Q0FBQTtBQ1lKOztBRFZBO0VBQ0kseUJBQUE7QUNhSjs7QURYQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNjSjs7QURaQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ2VKOztBRGJBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ2lCSjs7QURmQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGlCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ29CSjs7QURsQkE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNxQko7O0FEbkJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7QUNzQkoiLCJmaWxlIjoiY2FyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlcl9mb290ZXJfYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbnRfYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQ0Y2RkY7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6NXB4IDE2cHggMjBweDsgICAgXHJcbn1cclxuLmNhcl9pbWFnZXtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTg4cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ubmFtZV9wcmljZV9ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDklKTtcclxuICAgIHBhZGRpbmc6IDExcHggMTJweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcbi5jYXJfbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ucHJpY2VfdmFse1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uY2F0ZWdvcnlfbGFiZWx7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNhdGVnb3JpZXN7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzBGMTcyQTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbn1cclxuLnJvdGF0ZV9pY29ue1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4uYm94X3N0eWxpbmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbiAgICBwYWRkaW5nOiA4cHggOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5ib3hfaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJveF9kZXNjcmlwdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYm94X3N1Yl9oZWFkaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pbm5lcl9ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uc3Rhcl9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4udHJpcHNfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmludml0ZV9idG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICB3aWR0aDo2NSU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uYnRuLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbiIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkNGNkZGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RkYgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlcl9mb290ZXJfYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50X2JhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQ0Y2RkY7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiA1cHggMTZweCAyMHB4O1xufVxuXG4uY2FyX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxODhweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLm5hbWVfcHJpY2VfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgcGFkZGluZzogMTFweCAxMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4uY2FyX25hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wcmljZV92YWwge1xuICBjb2xvcjogIzgwMDBGRjtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhdGVnb3J5X2xhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXRlZ29yaWVzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLnJvdGF0ZV9pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmJveF9zdHlsaW5nIHtcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJveF9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJveF9kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm94X3N1Yl9oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pbm5lcl9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zdGFyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4udHJpcHNfbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pbnZpdGVfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XG4gIC0tYm9yZGVyLXJhZGl1czowcHg7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */";

/***/ }),

/***/ 69684:
/*!**************************************************************!*\
  !*** ./src/app/car-details/car-details.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [class.header_footer_bg]=\"checkUser.appUserId != null\">\n  <ion-toolbar class=\"bgtoolbar\" [class.content_background]=\"checkUser.appUserId != null\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"title\">{{vehicleName}}</div>\n      <div>\n        <img (click)=\"startChatwithOwner()\" src=\"assets/images/icons/chat.svg\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.content_background]=\"checkUser.appUserId != null\">\n  <div class=\"wrapper\">\n    <div *ngFor=\"let data of carData\">\n      <swiper [pagination]=\"true\" [config]=\"{ intialSlide: 0, speed: 400, slidesPerView:1 }\">\n        <ng-template swiperSlide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img (click)=\"makefavorite()\" style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img (click)=\"makefavorite()\" style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image1}}\" alt=\"\">\n          </div>\n        </ng-template>\n        <ng-template swiperSlide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image2}}\" alt=\"\">\n          </div>\n        </ng-template>\n        <ng-template swiperSlide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image3}}\" alt=\"\">\n          </div>\n        </ng-template>\n        <ng-template swiperSlide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image4}}\" alt=\"\">\n          </div>\n        </ng-template>\n        <ng-template swiperSlide>\n          <div style=\"display: flex;justify-content: center;width: 100%; position: relative;\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" *ngIf=\"favorites == 'dislike'\">\n            <img style=\"position: absolute;right: 5%;top: 8%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\" *ngIf=\"favorites == 'liked'\">\n            <img class=\"car_image\" src=\"{{api.imageUrlString}}{{data.image5}}\" alt=\"\">\n          </div>\n        </ng-template>\n      </swiper>\n        \n  \n      <div class=\"name_price_box\">\n            <div class=\"car_name\">{{data.vehical_name}}</div>\n        <div style=\"display: flex;align-items: baseline;\">\n          <span class=\"price_val\" style=\"font-size:11px\">$</span>\n          <span class=\"price_val\" style=\"font-size:32px\" *ngIf=\"categoryVal=='Day'\">{{data.rent_cost_day}}</span>\n          <span class=\"price_val\" style=\"font-size:32px\" *ngIf=\"categoryVal=='Month'\">{{data.rent_cost_month}}</span>\n          <!-- <span class=\"price_val\" style=\"font-size:32px\">26</span> -->\n          <span class=\"category_label\" style=\"font-size: 10px;\">/</span>\n          \n          <div (click)=\"displayCategories()\" style=\"display: flex;align-items: baseline;position: relative;\">\n            <span class=\"category_label\" style=\"margin-right: 5px;\">{{categoryVal}}</span> \n            <img [class.rotate_icon]=\"showCategories==true\"  src=\"assets/images/icons/dropdown_icon.svg\" alt=\"\">\n            <div *ngIf=\"showCategories==true\" class=\"categories\">\n              <div *ngFor=\"let type of rentCategories\" (click)=\"selectedCategory(type.category)\">\n                <span class=\"category_label\" style=\"font-size: 12px; font-family: 'Poppins',sans-serif;\">{{type.category}}</span>\n              </div> \n            </div>  \n          </div>\n        </div>\n  \n      </div>\n  \n      <div class=\"box_styling\">\n        <div class=\"box_heading\">Description</div>\n        <div class=\"box_description\">\n          {{data.description}}\n        </div>\n      </div>\n      \n      <div class=\"box_styling\">\n        <div class=\"box_heading\">Owner's Details</div>\n        <div class=\"box_sub_heading\">About</div>\n        <div class=\"box_description\">\n          {{data.users_company[0].about}}\n        </div>\n      </div>\n  \n      <div class=\"box_styling\">\n        <div class=\"box_sub_heading\" style=\"margin-top: 0px;\">Location</div>\n        <div class=\"box_description\" style=\"margin-top: 4px;\">\n          {{data.users_company[0].company_location}}\n        </div>\n      </div>\n      <div class=\"box_styling\" style=\"padding: 14px 14px 15px;\" (click)=\"gotoRatings()\">\n        <div class=\"inner_box\">\n          <div>\n            <span class=\"box_heading\" style=\"margin-right: 10px;\">Ratings</span>\n            \n            <span *ngIf=\"data.rating == 0 \">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=1 && data.rating < 1.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=1.5 && data.rating < 2.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=2.5 && data.rating < 3.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=3.5 && data.rating < 4.5\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n            </span>\n            <span *ngIf=\"data.rating >=4.5 && data.rating < 5.1\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n            </span>\n              \n            <span class=\"trips_label\"> trips</span>\n          </div>\n          <div>\n            <img src=\"assets/images/icons/next.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n    \n\n    \n\n    \n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" [class.header_footer_bg]=\"checkUser.appUserId != null\">\n    <div style=\"margin: 10px 0px 15px;\">\n      <div style=\"text-align: center;\">\n        <ion-button class=\"invite_btn\" (click)=\"startCarBooking()\">\n          <span class=\"btn-text\">Book Now</span>\n        </ion-button>\n      </div>\n    </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_car-details_car-details_module_ts.js.map