"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_favorites_favorites_module_ts"],{

/***/ 89528:
/*!*******************************************************!*\
  !*** ./src/app/favorites/favorites-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageRoutingModule": () => (/* binding */ FavoritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page */ 56130);




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ 75407:
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageModule": () => (/* binding */ FavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 89528);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page */ 56130);







let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageRoutingModule
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_1__.FavoritesPage]
    })
], FavoritesPageModule);



/***/ }),

/***/ 56130:
/*!*********************************************!*\
  !*** ./src/app/favorites/favorites.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPage": () => (/* binding */ FavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _favorites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page.html?ngResource */ 93033);
/* harmony import */ var _favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page.scss?ngResource */ 8295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);








let FavoritesPage = class FavoritesPage {
    // imageUrlString = 'https://360uae.eigix.net/public/';
    constructor(navCtrlr, checkUser, api, router) {
        this.navCtrlr = navCtrlr;
        this.checkUser = checkUser;
        this.api = api;
        this.router = router;
        this.favoriteCars = [];
    }
    ngOnInit() {
        this.getFavoriteCars();
    }
    ionViewWillEnter() {
        this.getNotifications();
    }
    getNotifications() {
        let data = {
            users_id: this.checkUser.appUserId
        };
        this.api.sendRequest('notifications_unread', data).subscribe((res) => {
            console.log("Notification Respone: ", res);
            if (res.status == 'success') {
                if (res.data.length > 0) {
                    this.totalNotifications = res.data.length;
                }
                else if (res.data.length == 0) {
                    this.totalNotifications = 0;
                }
            }
            else if (res.status == 'error') {
            }
        }, (err) => {
            console.log("Api Error: ", err);
        });
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
    makeUnFavorite(carId) {
        let data = {
            favourite_car_id: carId,
            user_id: this.checkUser.appUserId
        };
        this.api.showLoading();
        this.api.sendRequest('favouriteCars', data).subscribe((res) => {
            this.getFavoriteCars();
            this.api.hideLoading();
            console.log('res: ', res);
        }, (err) => {
            this.api.hideLoading();
            console.log(err);
        });
    }
    getFavoriteCars() {
        let data = {
            user_id: this.checkUser.appUserId
        };
        this.api.showLoading();
        this.api.sendRequest("getFavouriteCars", data).subscribe((res) => {
            this.api.hideLoading();
            console.log('Favorite cars are: ', res);
            if (res.status == 'success') {
                this.favoriteCars = res.data;
                this.favorites = res.data.length;
            }
        }, (err) => {
            this.api.hideLoading();
            console.log(err);
        });
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_2__.CheckUserService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
FavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-favorites',
        template: _favorites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavoritesPage);



/***/ }),

/***/ 8295:
/*!**********************************************************!*\
  !*** ./src/app/favorites/favorites.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content.background {\n  --background: url('empty_street.svg') no-repeat center center / cover;\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB;\n}\n\nion-content {\n  --background: #FBFBFB ;\n  font-family: \"Poppins\", sans-serif;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 0px;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.notifications {\n  font-family: \"Urbanist\", sans-serif;\n  position: absolute;\n  background: #D93A3A;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  border-radius: 50%;\n  bottom: 12px;\n  left: 10px;\n}\n\n.no_notifications {\n  width: 19.5px;\n  height: 22.5px;\n}\n\n.bell_div {\n  position: relative;\n  padding-right: 6.5px;\n  display: flex;\n}\n\n.no_favorite {\n  margin-top: 50px;\n  text-align: center;\n}\n\n.heading {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 34px;\n  font-weight: 600;\n  color: #464646;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.wrapper {\n  padding: 10px 16px 20px;\n}\n\n.car_div {\n  text-align: center;\n  margin-top: 13px;\n  position: relative;\n}\n\n.car_image {\n  object-fit: cover;\n  width: 100%;\n  height: 200px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.heart_icon {\n  position: absolute;\n  right: 5%;\n  top: 5%;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.star_margin {\n  margin-right: 3.8px;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.cost_price_div {\n  margin-top: 18px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.cost_label {\n  font-size: 24px;\n  font-weight: bold;\n  color: black;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxmYXZvcml0ZXNcXGZhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxRUFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURBQTtFQUNJLHNCQUFBO0VBQ0Esa0NBQUE7QUNHSjs7QUREQTtFQUNJLGtDQUFBO0VBQ0Esb0NBQUE7QUNJSjs7QURGQTtFQUNJLG1DQUFBO0FDS0o7O0FESEE7RUFDSSxrQ0FBQTtBQ01KOztBREpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ09KOztBRExBO0VBQ0kscUJBQUE7QUNRSjs7QUROQTtFQUNDLHVCQUFBO0FDU0Q7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNVSjs7QURSQTtFQUNJLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1dKOztBRFRBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDYUo7O0FEWEE7RUFDSSxnQkFBQTtFQUFpQixrQkFBQTtBQ2VyQjs7QURiQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNnQko7O0FEZEE7RUFDSSx1QkFBQTtBQ2lCSjs7QURmQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNtQko7O0FEakJBO0VBQ0ksa0JBQUE7RUFBbUIsU0FBQTtFQUFVLE9BQUE7QUNzQmpDOztBRHBCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUVBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNzQko7O0FEcEJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxtQkFBQTtBQ3dCSjs7QUR0QkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQzBCSjs7QUR4QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUMyQko7O0FEekJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUM0Qko7O0FEMUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzZCSjs7QUQxQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzZCSjs7QUQzQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzhCSjs7QUQ1QkE7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7QUMrQkoiLCJmaWxlIjoiZmF2b3JpdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9lbXB0eV9zdHJlZXQuc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCIDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4udXJiYW5pc3R7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wb3BwaW5ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMHB4O1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnN7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3R0b206IDEycHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcbi5ub19ub3RpZmljYXRpb25ze1xyXG4gICAgd2lkdGg6IDE5LjVweDtcclxuICAgIGhlaWdodDogMjIuNXB4O1xyXG59XHJcbi5iZWxsX2RpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYuNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubm9fZmF2b3JpdGV7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O3RleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHggMjBweDtcclxufVxyXG4uY2FyX2RpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4OyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2FyX2ltYWdle1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuLmhlYXJ0X2ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDUlO3RvcDogNSU7XHJcbn1cclxuLmNhcl9pbmZvX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FyX25hbWV7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5zdGFyX21hcmdpbntcclxuICAgIG1hcmdpbi1yaWdodDogMy44cHg7XHJcbn1cclxuLnJhdGluZ192YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjRDREQ0UxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuLmNhcjJfcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXIyX2luZm9fc3ViZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvc3RfcHJpY2VfZGl2e1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNvc3RfbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bl9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0IxQThCOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmJ0bkFjdGl2ZV9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmlvbl90YWJfYmFye1xyXG4gICAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2IoMCAwIDAgLyAxNiUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZW1wdHlfc3RyZWV0LnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCIDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi51cmJhbmlzdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wb3BwaW5zIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMHB4O1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ubWVudWljb24ge1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubm90aWZpY2F0aW9ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0Q5M0EzQTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4ubm9fbm90aWZpY2F0aW9ucyB7XG4gIHdpZHRoOiAxOS41cHg7XG4gIGhlaWdodDogMjIuNXB4O1xufVxuXG4uYmVsbF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDYuNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubm9fZmF2b3JpdGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDY0NjQ2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweCAxNnB4IDIwcHg7XG59XG5cbi5jYXJfZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJfaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuXG4uaGVhcnRfaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUlO1xuICB0b3A6IDUlO1xufVxuXG4uY2FyX2luZm9fYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjMEYxNzJBO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogOXB4IDEycHggOC41cHggMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0YXJfbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAzLjhweDtcbn1cblxuLnJhdGluZ192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNENERDRTE7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5jYXIyX3ByaWNlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXIyX2luZm9fc3ViZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvc3RfcHJpY2VfZGl2IHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29zdF9sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ0bl9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0IxQThCOTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmJ0bkFjdGl2ZV9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzgwMDBGRjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmlvbl90YWJfYmFyIHtcbiAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */";

/***/ }),

/***/ 93033:
/*!**********************************************************!*\
  !*** ./src/app/favorites/favorites.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Favorite</div>\n      <div class=\"bell_div\" (click)=\"gotoNotifications()\" *ngIf=\"api.toggleVal == true\">\n        <div class=\"notifications\" *ngIf=\"totalNotifications > 0\">{{totalNotifications}}</div>\n        <img src=\"assets/images/icons/bell.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"api.toggleVal != true\" class=\"no_notifications\"></div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding  [class.background]=\"favorites == 0\">\n  <div class=\"wrapper\">\n    <div *ngIf=\"favorites == 0\">\n      <div class=\"no_favorite\">\n        <img src=\"assets/images/no_favorites.svg\" alt=\"\">\n      </div>\n      <div class=\"heading\">No Favorites yet</div>\n    </div>\n    <div *ngIf=\"favorites !== 0\">\n      <div class=\"car_div\" *ngFor=\"let favorite of favoriteCars\">\n        <img class=\"car_image\" src=\"{{api.imageUrlString}}{{favorite.image1}}\" alt=\"\">\n        <img (click)=\"makeUnFavorite(favorite.car_id)\" class=\"heart_icon\" src=\"assets/images/icons/red_heart.svg\" alt=\"\">\n        <div class=\"car_info_box\" >\n          <div>\n            <div class=\"car_name poppins\">{{favorite.vehical_name}}</div>\n            <div style=\"text-align: left;line-height: 1;\">\n              <span *ngIf=\"favorite.rating == 0 \">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=1 && favorite.rating < 1.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=1.5 && favorite.rating < 2.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=2.5 && favorite.rating < 3.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=3.5 && favorite.rating < 4.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=4.5 && favorite.rating < 5.1\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              </span>\n              <span class=\"rating_value poppins\">{{favorite.total_bookings}} trips</span>\n            </div>\n          </div>\n          <div class=\"car2_info_subdiv\">\n            <div style=\"line-height: 1;\"><span class=\"car2_price poppins\" >$</span><span class=\"car2_price poppins\" style=\"font-size: 32px;margin-right: 8px;\">{{favorite.rent_cost_day}}</span><span class=\"car2_price poppins\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n          </div>\n          \n        </div>\n      </div>\n      <!-- ==================================================================== -->\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-tabs style=\"display:contents ;\">\n\n    <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n      <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n        <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Home</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n        <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Messages</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n        <img src=\"assets/images/tab_icons/booking.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Booking</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n        <img src=\"assets/images/tab_icons/favorite_active.svg\" alt=\"\">\n        <ion-label class=\"btnActive_label\">Favorities</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n\n  </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_favorites_favorites_module_ts.js.map