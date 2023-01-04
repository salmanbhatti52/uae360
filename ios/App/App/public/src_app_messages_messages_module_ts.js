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








let MessagesPage = class MessagesPage {
    constructor(navCtrlr, checkUser, api, router) {
        this.navCtrlr = navCtrlr;
        this.checkUser = checkUser;
        this.api = api;
        this.router = router;
    }
    ionViewWillEnter() {
        this.interval = setInterval(() => {
            this.getAllChatAgain();
        }, 2000);
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
        this.api.sendRequest("getAllChat", data).subscribe((res) => {
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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 15px;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.notifications {\n  font-family: \"Urbanist\", sans-serif;\n  position: absolute;\n  background: #D93A3A;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  border-radius: 50%;\n  bottom: 12px;\n  left: 10px;\n}\n\n.no_notifications {\n  width: 19.5px;\n  height: 22.5px;\n}\n\n.bell_div {\n  position: relative;\n  padding-right: 6.5px;\n  display: flex;\n}\n\n.wrapper {\n  padding: 5px 15px 20px;\n}\n\n.no_messages {\n  text-align: center;\n  font-size: 20px;\n  margin-top: 50px;\n  color: #0F172A;\n}\n\n.cover {\n  padding-top: 30px;\n  border-radius: 20px;\n  background: white;\n  padding-bottom: 10px;\n}\n\n.chat_list_div {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 13px;\n}\n\n.status_icon {\n  position: absolute;\n  bottom: 0px;\n  left: 46px;\n}\n\n.name {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  color: black;\n}\n\n.company_profile {\n  height: 56px;\n  width: 56px;\n  border-radius: 20px;\n}\n\n.last_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  color: black;\n  margin-top: 10.2px;\n  max-height: 23px;\n  max-width: 221px;\n  overflow: hidden;\n}\n\n.message_time {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: #B1A8B9;\n}\n\nhr {\n  border-bottom: 1px solid #EFEEEE !important;\n  border-top: 0px !important;\n  margin: 16px auto !important;\n  color: #EFEEEE !important;\n  opacity: 100% !important;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXG1lc3NhZ2VzXFxtZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtBQ0tKOztBREhBO0VBQ0MsdUJBQUE7QUNNRDs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ09KOztBRExBO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDUUo7O0FETkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNVSjs7QURSQTtFQUNJLHNCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNZSjs7QURWQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDYUo7O0FEWEE7RUFDSSxhQUFBO0VBQWMsOEJBQUE7RUFBK0IsaUJBQUE7QUNnQmpEOztBRGRBO0VBQ0ksa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFVBQUE7QUNtQm5DOztBRGpCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ29CSjs7QURsQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDcUJKOztBRG5CQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDc0JKOztBRHBCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3VCSjs7QURyQkE7RUFDSSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDd0JKOztBRHRCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDeUJKOztBRHZCQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDMEJKOztBRHhCQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQzJCSiIsImZpbGUiOiJtZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnN7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3R0b206IDEycHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcbi5ub19ub3RpZmljYXRpb25ze1xyXG4gICAgd2lkdGg6IDE5LjVweDtcclxuICAgIGhlaWdodDogMjIuNXB4O1xyXG59XHJcbi5iZWxsX2RpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYuNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6NXB4IDE1cHggMjBweDsgICAgXHJcbn1cclxuLm5vX21lc3NhZ2Vze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGNvbG9yOiAjMEYxNzJBO1xyXG59XHJcbi5jb3ZlcntcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNoYXRfbGlzdF9kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtwYWRkaW5nOiAwcHggMTNweDtcclxufVxyXG4uc3RhdHVzX2ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiAwcHg7bGVmdDogNDZweDtcclxufVxyXG4ubmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNvbXBhbnlfcHJvZmlsZXtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ubGFzdF9tZXNzYWdle1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDEwLjJweDtcclxuICAgIG1heC1oZWlnaHQ6IDIzcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIyMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWVzc2FnZV90aW1le1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjQjFBOEI5O1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVFRUUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxNnB4IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjRUZFRUVFICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bl9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0IxQThCOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmJ0bkFjdGl2ZV9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmlvbl90YWJfYmFye1xyXG4gICAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2IoMCAwIDAgLyAxNiUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ubWVudWljb24ge1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubm90aWZpY2F0aW9ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0Q5M0EzQTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4ubm9fbm90aWZpY2F0aW9ucyB7XG4gIHdpZHRoOiAxOS41cHg7XG4gIGhlaWdodDogMjIuNXB4O1xufVxuXG4uYmVsbF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDYuNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDIwcHg7XG59XG5cbi5ub19tZXNzYWdlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBjb2xvcjogIzBGMTcyQTtcbn1cblxuLmNvdmVyIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmNoYXRfbGlzdF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweCAxM3B4O1xufVxuXG4uc3RhdHVzX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiA0NnB4O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb21wYW55X3Byb2ZpbGUge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ubGFzdF9tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMTAuMnB4O1xuICBtYXgtaGVpZ2h0OiAyM3B4O1xuICBtYXgtd2lkdGg6IDIyMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVzc2FnZV90aW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjQjFBOEI5O1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZFRUVFICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDE2cHggYXV0byAhaW1wb3J0YW50O1xuICBjb2xvcjogI0VGRUVFRSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNCMUE4Qjk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5idG5BY3RpdmVfbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM4MDAwRkY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5pb25fdGFiX2JhciB7XG4gIHBhZGRpbmc6IDhweCA4cHggMTJweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */";

/***/ }),

/***/ 88693:
/*!********************************************************!*\
  !*** ./src/app/messages/messages.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Messages</div>\n      <div class=\"bell_div\" (click)=\"gotoNotifications()\" *ngIf=\"api.toggleVal == true\">\n        <div class=\"notifications\" *ngIf=\"totalNotifications > 0\">{{totalNotifications}}</div>\n        <img src=\"assets/images/icons/bell.svg\" alt=\"\">\n      </div>\n      <div  *ngIf=\"api.toggleVal != true\" class=\"no_notifications\"></div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"cover\" *ngIf=\"response == true\">\n      <div *ngIf=\"chatList != undefined\">\n        <div *ngFor=\"let chat of chatList\">\n          <div class=\"chat_list_div\" (click)=\"startChat(chat.receiver_id,chat.company_name,chat.company_online)\">\n            <div style=\"display: flex;align-items: center;\">\n              <div style=\"position: relative; margin-right: 15px;\">\n                <img class=\"company_profile\" src=\"{{api.imageUrlString}}{{chat.company_logo}}\" alt=\"\">\n                <img class=\"status_icon\" src=\"assets/images/icons/active1.svg\" alt=\"\" *ngIf=\"chat.company_online == 'Yes'\">\n                <img class=\"status_icon\" src=\"assets/images/icons/active2.svg\" alt=\"\" *ngIf=\"chat.company_online == 'No'\">\n              </div>\n              <div>\n                <div class=\"name\">{{chat.company_name}}</div>\n                <div class=\"last_message\" *ngIf=\"chat.last_message.message \">{{chat.last_message.message}}</div>\n                <div class=\"last_message\" *ngIf=\"!chat.last_message.message\">{{chat.last_message}}</div>\n              </div>\n            </div>\n            \n            <div class=\"message_time\">\n              {{chat.date}}\n              <div style=\"margin-top: 19.2px;\" *ngIf=\"chat.last_message.status == 'Unread' && chat.last_message.sender_type == 'Companies'\">\n                {{chat.last_message.status}}\n              </div>\n            </div>\n            \n          </div>\n          <hr>\n        </div>\n      </div>\n      \n    </div>\n    <div *ngIf=\"response == false\" class=\"no_messages\">\n      No messages yet\n    </div>\n    \n  </div>\n</ion-content>\n<ion-footer>\n  <ion-tabs style=\"display:contents ;\">\n\n    <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n      <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n        <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Home</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n        <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages_active.svg\" alt=\"\">\n        <ion-label class=\"btnActive_label\" >Messages</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n        <img src=\"assets/images/tab_icons/booking.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Booking</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n        <img src=\"assets/images/tab_icons/favorite.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Favorities</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n\n  </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_messages_messages_module_ts.js.map