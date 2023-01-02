"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_messages_messages_module_ts"],{

/***/ 69967:
/*!*****************************************************!*\
  !*** ./src/app/messages/messages-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageRoutingModule": () => (/* binding */ MessagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 63567);




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ 84812:
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageModule": () => (/* binding */ MessagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-routing.module */ 69967);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page */ 63567);







let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessagesPageRoutingModule
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_1__.MessagesPage]
    })
], MessagesPageModule);



/***/ }),

/***/ 63567:
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPage": () => (/* binding */ MessagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page.html?ngResource */ 88693);
/* harmony import */ var _messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss?ngResource */ 39170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);







// import { interval } from 'rxjs';

let MessagesPage = class MessagesPage {
    constructor(navCtrlr, checkUser, api, router) {
        // in 3 seconds do something
        // interval(1000).subscribe(x => {
        //   this.getAllChatAgain();
        // });
        this.navCtrlr = navCtrlr;
        this.checkUser = checkUser;
        this.api = api;
        this.router = router;
    }
    ionViewWillEnter() {
        this.interval = setInterval(() => {
            this.getAllChatAgain();
        }, 3000);
        this.getNotifications();
    }
    ionViewWillLeave() {
        clearInterval(this.interval);
        console.log('leave view');
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
    ngOnInit() {
        this.getAllChat();
    }
    getAllChat() {
        let data = {
            appUserId: this.checkUser.appUserId
        };
        this.api.showLoading();
        this.api.sendRequest("getAllChat", data).subscribe((res) => {
            this.api.hideLoading();
            console.log("All Chat Response: ", res);
            if (res.status == 'success') {
                if (res.data.length == 0) {
                    this.response = false;
                }
                else {
                    this.response = true;
                    this.chatList = res.data;
                    for (let chat of this.chatList) {
                        if (chat.last_message.message) {
                            chat.last_message.message = JSON.parse(chat.last_message.message);
                        }
                    }
                }
            }
            else if (res.status == 'error') {
                this.response = false;
            }
            else {
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("Error: ", err);
            this.response = false;
        });
    }
    getAllChatAgain() {
        let data = {
            appUserId: this.checkUser.appUserId
        };
        // this.api.showLoading();
        this.api.sendRequest("getAllChat", data).subscribe((res) => {
            // this.api.hideLoading();
            console.log("All Chat Response: ", res);
            if (res.status == 'success') {
                if (res.data.length == 0) {
                    this.response = false;
                }
                else {
                    this.response = true;
                    this.chatList = res.data;
                    for (let chat of this.chatList) {
                        if (chat.last_message.message) {
                            chat.last_message.message = JSON.parse(chat.last_message.message);
                        }
                    }
                }
            }
            else if (res.status == 'error') {
                this.response = false;
            }
            else {
            }
        }, (err) => {
            console.log("Error: ", err);
            this.response = false;
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
    // startMessageOwnerSide(recieverId){
    //   this.startchat(recieverId);
    //   // this.navCtrlr.navigateForward(['/message-owner-side',{
    //   //   company_id:recieverId
    //   // }]);
    // }
    startChat(recieverId, companyName, companyOnline) {
        let data = {
            requestType: "startChat",
            userId: this.checkUser.appUserId,
            otherUserId: recieverId
        };
        this.api.showLoading();
        this.api.sendRequest("Chat", data).subscribe((res) => {
            this.api.hideLoading();
            console.log("Start_chat_Request_Response: ", res);
            if (res.status == 'success') {
                this.navCtrlr.navigateForward(['/message-owner-side', {
                        company_id: recieverId,
                        company_name: companyName,
                        company_online: companyOnline
                    }]);
            }
        }, (err) => {
            console.log("Error: ", err);
        });
    }
};
MessagesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_2__.CheckUserService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
MessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-messages',
        template: _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessagesPage);



/***/ }),

/***/ 39170:
/*!********************************************************!*\
  !*** ./src/app/messages/messages.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 15px;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.notifications {\n  font-family: \"Urbanist\", sans-serif;\n  position: absolute;\n  background: #D93A3A;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  border-radius: 50%;\n  bottom: 12px;\n  left: 10px;\n}\n\n.no_notifications {\n  width: 19.5px;\n  height: 22.5px;\n}\n\n.bell_div {\n  position: relative;\n  padding-right: 6.5px;\n  display: flex;\n}\n\n.wrapper {\n  padding: 5px 15px 20px;\n}\n\n.no_messages {\n  text-align: center;\n  font-size: 20px;\n  margin-top: 50px;\n  color: #0F172A;\n}\n\n.cover {\n  padding-top: 30px;\n  border-radius: 20px;\n  background: white;\n  padding-bottom: 10px;\n}\n\n.name {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  color: black;\n}\n\n.company_profile {\n  height: 56px;\n  width: 56px;\n  border-radius: 20px;\n}\n\n.last_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  color: black;\n  margin-top: 10.2px;\n  max-height: 23px;\n  max-width: 221px;\n  overflow: hidden;\n}\n\n.message_time {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: #B1A8B9;\n}\n\nhr {\n  border-bottom: 1px solid #EFEEEE !important;\n  border-top: 0px !important;\n  margin: 16px auto !important;\n  color: #EFEEEE !important;\n  opacity: 100% !important;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXG1lc3NhZ2VzXFxtZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtBQ0tKOztBREhBO0VBQ0MsdUJBQUE7QUNNRDs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ09KOztBRExBO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDUUo7O0FETkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNVSjs7QURSQTtFQUNJLHNCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNZSjs7QURWQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDYUo7O0FEWEE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNjSjs7QURaQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNlSjs7QURiQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDaUJKOztBRGZBO0VBQ0ksMkNBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ29CSjs7QURsQkE7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7QUNxQkoiLCJmaWxlIjoibWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5ub3RpZmljYXRpb25ze1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNEOTNBM0E7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG4ubm9fbm90aWZpY2F0aW9uc3tcclxuICAgIHdpZHRoOiAxOS41cHg7XHJcbiAgICBoZWlnaHQ6IDIyLjVweDtcclxufVxyXG4uYmVsbF9kaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2LjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjVweCAxNXB4IDIwcHg7ICAgIFxyXG59XHJcbi5ub19tZXNzYWdlc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxufVxyXG4uY292ZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5uYW1le1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uY29tcGFueV9wcm9maWxle1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5sYXN0X21lc3NhZ2V7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMTAuMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMjNweDtcclxuICAgIG1heC13aWR0aDogMjIxcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tZXNzYWdlX3RpbWV7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNCMUE4Qjk7XHJcbn1cclxuaHJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRUVFRSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDE2cHggYXV0byAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNFRkVFRUUgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uYnRuX2xhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQjFBOEI5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4uYnRuQWN0aXZlX2xhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4uaW9uX3RhYl9iYXJ7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDEycHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTNweCAxMHB4IHJnYigwIDAgMCAvIDE2JSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSIsImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XG59XG5cbi5iZ3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG59XG5cbi5tZW51aWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEYxNzJBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5ub3RpZmljYXRpb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5ub19ub3RpZmljYXRpb25zIHtcbiAgd2lkdGg6IDE5LjVweDtcbiAgaGVpZ2h0OiAyMi41cHg7XG59XG5cbi5iZWxsX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogNi41cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogNXB4IDE1cHggMjBweDtcbn1cblxuLm5vX21lc3NhZ2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGNvbG9yOiAjMEYxNzJBO1xufVxuXG4uY292ZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb21wYW55X3Byb2ZpbGUge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ubGFzdF9tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMTAuMnB4O1xuICBtYXgtaGVpZ2h0OiAyM3B4O1xuICBtYXgtd2lkdGg6IDIyMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVzc2FnZV90aW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjQjFBOEI5O1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZFRUVFICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDE2cHggYXV0byAhaW1wb3J0YW50O1xuICBjb2xvcjogI0VGRUVFRSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNCMUE4Qjk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5idG5BY3RpdmVfbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM4MDAwRkY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5pb25fdGFiX2JhciB7XG4gIHBhZGRpbmc6IDhweCA4cHggMTJweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */";

/***/ }),

/***/ 88693:
/*!********************************************************!*\
  !*** ./src/app/messages/messages.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Messages</div>\n      <div class=\"bell_div\" (click)=\"gotoNotifications()\" *ngIf=\"api.toggleVal == true\">\n        <div class=\"notifications\" *ngIf=\"totalNotifications > 0\">{{totalNotifications}}</div>\n        <img src=\"assets/images/icons/bell.svg\" alt=\"\">\n      </div>\n      <div  *ngIf=\"api.toggleVal != true\" class=\"no_notifications\"></div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"cover\" *ngIf=\"response == true\">\n      <div *ngIf=\"chatList != undefined\">\n        <div *ngFor=\"let chat of chatList\">\n          <div  style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"startChat(chat.receiver_id,chat.company_name,chat.company_online)\">\n            <div style=\"display: flex;align-items: center;\">\n              <div style=\"position: relative; margin-right: 15px;\">\n                <img class=\"company_profile\" src=\"{{api.imageUrlString}}{{chat.company_logo}}\" alt=\"\">\n                <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active1.svg\" alt=\"\" *ngIf=\"chat.company_online == 'Yes'\">\n                <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active2.svg\" alt=\"\" *ngIf=\"chat.company_online == 'No'\">\n              </div>\n              <div>\n                <div class=\"name\">{{chat.company_name}}</div>\n                <div class=\"last_message\" *ngIf=\"chat.last_message.message \">{{chat.last_message.message}}</div>\n                <div class=\"last_message\" *ngIf=\"!chat.last_message.message\">{{chat.last_message}}</div>\n              </div>\n            </div>\n            \n            <div class=\"message_time\">\n              {{chat.date}}\n              <div style=\"margin-top: 19.2px;\" *ngIf=\"chat.last_message.status == 'Unread' && chat.last_message.sender_type == 'Companies'\">\n                {{chat.last_message.status}}\n              </div>\n            </div>\n            \n          </div>\n          <hr>\n        </div>\n      </div>\n      \n      \n      \n\n  \n      <!-- --------------------------------copy----------------------------- -->\n      \n      <!-- <div style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"gotoMessageOwnerSide()\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"position: relative; margin-right: 15px;\">\n            <img src=\"assets/images/message_profile_dummy2.svg\" alt=\"\">\n            <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active2.svg\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"name\">Miss Mindy Kub</div>\n            <div class=\"last_message\">Subject line comes here</div>\n          </div>\n        </div>\n        \n        <div class=\"message_time\">\n          10 min ago\n        </div>\n      </div>\n      <hr> -->\n      <!-- --------------------------------copy----------------------------- -->\n      <!-- <div style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"gotoMessageOwnerSide()\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"position: relative; margin-right: 15px;\">\n            <img src=\"assets/images/message_profile_dummy3.svg\" alt=\"\">\n            <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active3.svg\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"name\">Roxanne Nitzsche</div>\n            <div class=\"last_message\">Subject line comes here</div>\n          </div>\n        </div>\n        \n        <div class=\"message_time\">\n          10 min ago\n        </div>\n      </div>\n      <hr> -->\n      <!-- --------------------------------copy----------------------------- -->\n      <!-- <div style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"gotoMessageOwnerSide()\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"position: relative; margin-right: 15px;\">\n            <img src=\"assets/images/message_profile_dummy4.svg\" alt=\"\">\n            <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active4.svg\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"name\">Deanna Stamm</div>\n            <div class=\"last_message\">Subject line comes here</div>\n          </div>\n        </div>\n        \n        <div class=\"message_time\">\n          10 min ago\n        </div>\n      </div>\n      <hr> -->\n      <!-- --------------------------------copy----------------------------- -->\n      <!-- <div style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"gotoMessageOwnerSide()\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"position: relative; margin-right: 15px;\">\n            <img src=\"assets/images/message_profile_dummy5.svg\" alt=\"\">\n            <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active5.svg\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"name\">Nettie Dicki V</div>\n            <div class=\"last_message\">Subject line comes here</div>\n          </div>\n        </div>\n        \n        <div class=\"message_time\">\n          10 min ago\n        </div>\n      </div>\n      <hr> -->\n      <!-- --------------------------------copy ----------------------------- -->\n    </div>\n    <div *ngIf=\"response == false\" class=\"no_messages\">\n      No messages yet\n    </div>\n    \n  </div>\n</ion-content>\n<ion-footer>\n  <ion-tabs style=\"display:contents ;\">\n\n    <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n      <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n        <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Home</ion-label>\n        <!-- <ion-badge>6</ion-badge> -->\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n        <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages_active.svg\" alt=\"\">\n        <ion-label class=\"btnActive_label\" >Messages</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n        <img src=\"assets/images/tab_icons/booking.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Booking</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n        <img src=\"assets/images/tab_icons/favorite.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Favorities</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n\n  </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_messages_messages_module_ts.js.map