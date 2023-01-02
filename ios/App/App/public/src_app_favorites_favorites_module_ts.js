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
    // gotoNotifications(){
    //   this.navCtrlr.navigateRoot('notifications');
    // }
    // homeTab(){
    //   this.navCtrlr.navigateRoot('home-cars-after-login');
    // }
    // messagesTab(){
    //   this.navCtrlr.navigateRoot('messages');
    // }
    // bookingTab(){
    //   this.navCtrlr.navigateRoot('bookings');
    // }
    // favoriteTab(){
    //   this.navCtrlr.navigateRoot('favorites');
    // }
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
        // this.favoriteCars = [];
        // this.favorites = 0;
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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content.background {\n  --background: url('empty_street.svg') no-repeat center center / cover;\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB;\n}\n\nion-content {\n  --background: #FBFBFB ;\n  font-family: \"Poppins\", sans-serif;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.urbanist {\n  font-family: \"Urbanist\", sans-serif;\n}\n\n.poppins {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 0px;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.notifications {\n  font-family: \"Urbanist\", sans-serif;\n  position: absolute;\n  background: #D93A3A;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  border-radius: 50%;\n  bottom: 12px;\n  left: 10px;\n}\n\n.no_notifications {\n  width: 19.5px;\n  height: 22.5px;\n}\n\n.bell_div {\n  position: relative;\n  padding-right: 6.5px;\n  display: flex;\n}\n\n.no_favorite {\n  margin-top: 50px;\n  text-align: center;\n}\n\n.heading {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 34px;\n  font-weight: 600;\n  color: #464646;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.wrapper {\n  padding: 10px 16px 20px;\n}\n\n.car_info_box {\n  display: flex;\n  justify-content: space-between;\n  background: #0F172A;\n  border: 1px solid white;\n  border-radius: 0px 0px 10px 10px;\n  bottom: 0;\n  padding: 9px 12px 8.5px 16px;\n  width: 100%;\n}\n\n.car_name {\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  line-height: 1;\n  text-align: left;\n}\n\n.star_margin {\n  margin-right: 3px;\n}\n\n.rating_value {\n  font-size: 12px;\n  color: #D4DCE1;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.car2_price {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n}\n\n.car2_info_subdiv {\n  display: flex;\n  align-items: center;\n}\n\n.cost_price_div {\n  margin-top: 18px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.cost_label {\n  font-size: 24px;\n  font-weight: bold;\n  color: black;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxmYXZvcml0ZXNcXGZhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxRUFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURBQTtFQUNJLHNCQUFBO0VBQ0Esa0NBQUE7QUNHSjs7QUREQTtFQUNJLGtDQUFBO0VBQ0Esb0NBQUE7QUNJSjs7QURGQTtFQUNJLG1DQUFBO0FDS0o7O0FESEE7RUFDSSxrQ0FBQTtBQ01KOztBREpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ09KOztBRExBO0VBQ0kscUJBQUE7QUNRSjs7QUROQTtFQUNDLHVCQUFBO0FDU0Q7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNVSjs7QURSQTtFQUNJLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1dKOztBRFRBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDYUo7O0FEWEE7RUFDSSxnQkFBQTtFQUFpQixrQkFBQTtBQ2VyQjs7QURiQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNnQko7O0FEZEE7RUFDSSx1QkFBQTtBQ2lCSjs7QURmQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUVBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNpQko7O0FEZkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGlCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ29CSjs7QURsQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDcUJKOztBRG5CQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ3NCSjs7QURwQkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDd0JKOztBRHJCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDd0JKOztBRHRCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDeUJKOztBRHZCQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQzBCSiIsImZpbGUiOiJmYXZvcml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2VtcHR5X3N0cmVldC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiA7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkIgO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi51cmJhbmlzdHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBvcHBpbnN7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAwcHg7XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IHZhcigtLW1lbnUtaWNvbik7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubm90aWZpY2F0aW9uc3tcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvdHRvbTogMTJweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbn1cclxuLm5vX25vdGlmaWNhdGlvbnN7XHJcbiAgICB3aWR0aDogMTkuNXB4O1xyXG4gICAgaGVpZ2h0OiAyMi41cHg7XHJcbn1cclxuLmJlbGxfZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNi41cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5ub19mYXZvcml0ZXtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweCAyMHB4O1xyXG59XHJcbi5jYXJfaW5mb19ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogIzBGMTcyQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiA5cHggMTJweCA4LjVweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcl9uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3Rhcl9tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4ucmF0aW5nX3ZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4uY2FyMl9wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhcjJfaW5mb19zdWJkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29zdF9wcmljZV9kaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY29zdF9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuX2xhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQjFBOEI5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4uYnRuQWN0aXZlX2xhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4uaW9uX3RhYl9iYXJ7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDEycHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTNweCAxMHB4IHJnYigwIDAgMCAvIDE2JSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9lbXB0eV9zdHJlZXQuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkIgO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLnVyYmFuaXN0IHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBvcHBpbnMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggMTZweCAwcHg7XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG59XG5cbi5tZW51aWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5ub3RpZmljYXRpb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5ub19ub3RpZmljYXRpb25zIHtcbiAgd2lkdGg6IDE5LjVweDtcbiAgaGVpZ2h0OiAyMi41cHg7XG59XG5cbi5iZWxsX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogNi41cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ub19mYXZvcml0ZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0NjQ2NDY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4IDE2cHggMjBweDtcbn1cblxuLmNhcl9pbmZvX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzBGMTcyQTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDlweCAxMnB4IDguNXB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyX25hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdGFyX21hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4ucmF0aW5nX3ZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0Q0RENFMTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmNhcjJfcHJpY2Uge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcjJfaW5mb19zdWJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29zdF9wcmljZV9kaXYge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb3N0X2xhYmVsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuX2xhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjQjFBOEI5O1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uYnRuQWN0aXZlX2xhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjODAwMEZGO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uaW9uX3RhYl9iYXIge1xuICBwYWRkaW5nOiA4cHggOHB4IDEycHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3gtc2hhZG93OiAwcHggLTNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */";

/***/ }),

/***/ 93033:
/*!**********************************************************!*\
  !*** ./src/app/favorites/favorites.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Favorite</div>\n      <div class=\"bell_div\" (click)=\"gotoNotifications()\" *ngIf=\"api.toggleVal == true\">\n        <div class=\"notifications\" *ngIf=\"totalNotifications > 0\">{{totalNotifications}}</div>\n        <img src=\"assets/images/icons/bell.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"api.toggleVal != true\" class=\"no_notifications\"></div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding  [class.background]=\"favorites == 0\">\n  <div class=\"wrapper\">\n    <div *ngIf=\"favorites == 0\">\n      <div class=\"no_favorite\">\n        <img src=\"assets/images/no_favorites.svg\" alt=\"\">\n      </div>\n      <div class=\"heading\">No Favorites yet</div>\n    </div>\n    <div *ngIf=\"favorites !== 0\">\n      <div style=\"text-align: center; margin-top: 13px; position: relative;\" *ngFor=\"let favorite of favoriteCars\">\n        <img style=\"object-fit: cover;width: 100%;height: 200px; border-radius: 10px 10px 0px 0px;\" src=\"{{api.imageUrlString}}{{favorite.image1}}\" alt=\"\">\n        <!-- *ngIf=\"favorites == 'dislike'\" -->\n        <!-- <img style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/heart.svg\" alt=\"\" > -->\n        <img (click)=\"makeUnFavorite(favorite.car_id)\" style=\"position: absolute;right: 5%;top: 5%;\" src=\"assets/images/icons/red_heart.svg\" alt=\"\">\n        <div class=\"car_info_box\" >\n          <div>\n            <div class=\"car_name poppins\">{{favorite.vehical_name}}</div>\n            <div style=\"text-align: left;line-height: 1;\">\n              <span *ngIf=\"favorite.rating == 0 \">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=1 && favorite.rating < 1.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=1.5 && favorite.rating < 2.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=2.5 && favorite.rating < 3.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=3.5 && favorite.rating < 4.5\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" style=\"margin-right: 3.8px;\" src=\"assets/images/icons/empty_star.svg\" alt=\"\">\n              </span>\n              <span *ngIf=\"favorite.rating >=4.5 && favorite.rating < 5.1\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n                <img class=\"star_margin\" src=\"assets/images/icons/rated_star.svg\" alt=\"\">\n              </span>\n              <span class=\"rating_value poppins\">{{favorite.total_bookings}} trips</span>\n            </div>\n          </div>\n          <div class=\"car2_info_subdiv\">\n            <div style=\"line-height: 1;\"><span class=\"car2_price poppins\" >$</span><span class=\"car2_price poppins\" style=\"font-size: 32px;margin-right: 8px;\">{{favorite.rent_cost_day}}</span><span class=\"car2_price poppins\" style=\"font-size: 10px;font-weight: 500;\">/Day</span></div>\n          </div>\n          \n        </div>\n      </div>\n      <!-- ==================================================================== -->\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-tabs style=\"display:contents ;\">\n\n    <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n      <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n        <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Home</ion-label>\n        <!-- <ion-badge>6</ion-badge> -->\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n        <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Messages</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n        <img src=\"assets/images/tab_icons/booking.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Booking</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n        <img src=\"assets/images/tab_icons/favorite_active.svg\" alt=\"\">\n        <ion-label class=\"btnActive_label\">Favorities</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n\n  </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_favorites_favorites_module_ts.js.map