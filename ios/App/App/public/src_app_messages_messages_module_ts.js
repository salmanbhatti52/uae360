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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page.html?ngResource */ 88693);
/* harmony import */ var _messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss?ngResource */ 39170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);







let MessagesPage = class MessagesPage {
    constructor(navCtrlr, checkUser, api) {
        // in 3 seconds do something
        // interval(1000).subscribe(x => {
        //   this.getAllChatAgain();
        // });
        this.navCtrlr = navCtrlr;
        this.checkUser = checkUser;
        this.api = api;
        this.totalNotifications = 6;
        this.chatList = [];
        this.imageUrlString = 'https://360uae.eigix.net/public/';
    }
    ionViewWillEnter() {
        this.interval = setInterval(() => {
            this.getAllChatAgain();
        }, 1000);
    }
    ionViewWillLeave() {
        clearInterval(this.interval);
        console.log('leave view');
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
                this.chatList = res.data;
                for (let chat of this.chatList) {
                    chat.last_message.message = JSON.parse(chat.last_message.message);
                }
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("Error: ", err);
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
                this.chatList = res.data;
                for (let chat of this.chatList) {
                    chat.last_message.message = JSON.parse(chat.last_message.message);
                }
            }
        }, (err) => {
            // this.api.hideLoading();
            console.log("Error: ", err);
        });
    }
    gotoNotifications() {
        this.navCtrlr.navigateRoot('notifications');
    }
    homeTab() {
        this.navCtrlr.navigateRoot('home-cars-after-login');
    }
    messagesTab() {
        this.navCtrlr.navigateRoot('messages');
    }
    bookingTab() {
        this.navCtrlr.navigateRoot('bookings');
    }
    favoriteTab() {
        this.navCtrlr.navigateRoot('favorites');
    }
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
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
MessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 16px 15px;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.menuicon {\n  color: var(--menu-icon);\n}\n\n.title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.notifications {\n  font-family: \"Urbanist\", sans-serif;\n  position: absolute;\n  background: #D93A3A;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  border-radius: 50%;\n  bottom: 12px;\n  left: 10px;\n}\n\n.bell_div {\n  position: relative;\n  padding-right: 6.5px;\n  display: flex;\n}\n\n.wrapper {\n  padding: 5px 15px 20px;\n}\n\n.cover {\n  padding-top: 30px;\n  border-radius: 20px;\n  background: white;\n  padding-bottom: 10px;\n}\n\n.name {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  color: black;\n}\n\n.company_profile {\n  height: 56px;\n  width: 56px;\n  border-radius: 20px;\n}\n\n.last_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  color: black;\n  margin-top: 10.2px;\n  max-height: 25px;\n  max-width: 200px;\n  overflow: hidden;\n}\n\n.message_time {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: #B1A8B9;\n}\n\nhr {\n  border-bottom: 1px solid #EFEEEE !important;\n  border-top: 0px !important;\n  margin: 16px auto !important;\n  color: #EFEEEE !important;\n  opacity: 100% !important;\n}\n\n.btn_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #B1A8B9;\n  line-height: 1.6;\n}\n\n.btnActive_label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8000FF;\n  line-height: 1.6;\n}\n\n.ion_tab_bar {\n  padding: 8px 8px 12px 0px;\n  border-radius: 20px 20px 0px 0px;\n  height: 52px;\n  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.16);\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXG1lc3NhZ2VzXFxtZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtBQ0tKOztBREhBO0VBQ0MsdUJBQUE7QUNNRDs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ09KOztBRExBO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ1NKOztBRFBBO0VBQ0ksc0JBQUE7QUNVSjs7QURSQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDV0o7O0FEVEE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNZSjs7QURWQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNhSjs7QURYQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNlSjs7QURiQTtFQUNJLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNnQko7O0FEZEE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2lCSjs7QURmQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDa0JKOztBRGhCQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQ21CSiIsImZpbGUiOiJtZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG59XHJcbi5iZ3Rvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiB2YXIoLS1tZW51LWljb24pO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnN7XHJcbiAgICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3R0b206IDEycHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcbi5iZWxsX2RpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYuNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6NXB4IDE1cHggMjBweDsgICAgXHJcbn1cclxuLmNvdmVye1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ubmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNvbXBhbnlfcHJvZmlsZXtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ubGFzdF9tZXNzYWdle1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDEwLjJweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWVzc2FnZV90aW1le1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjQjFBOEI5O1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVFRUUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxNnB4IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjRUZFRUVFICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bl9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0IxQThCOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmJ0bkFjdGl2ZV9sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmlvbl90YWJfYmFye1xyXG4gICAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2IoMCAwIDAgLyAxNiUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ubWVudWljb24ge1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubm90aWZpY2F0aW9ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0Q5M0EzQTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uYmVsbF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDYuNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDIwcHg7XG59XG5cbi5jb3ZlciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbXBhbnlfcHJvZmlsZSB7XG4gIGhlaWdodDogNTZweDtcbiAgd2lkdGg6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5sYXN0X21lc3NhZ2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAxMC4ycHg7XG4gIG1heC1oZWlnaHQ6IDI1cHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZXNzYWdlX3RpbWUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNCMUE4Qjk7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVFRUUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTZweCBhdXRvICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRUZFRUVFICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmJ0bl9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0IxQThCOTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmJ0bkFjdGl2ZV9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzgwMDBGRjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmlvbl90YWJfYmFyIHtcbiAgcGFkZGluZzogOHB4IDhweCAxMnB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */";

/***/ }),

/***/ 88693:
/*!********************************************************!*\
  !*** ./src/app/messages/messages.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      <div class=\"title\">Messages</div>\n      <div class=\"bell_div\" (click)=\"gotoNotifications()\">\n        <div class=\"notifications\" >{{totalNotifications}}</div>\n        <img src=\"assets/images/icons/bell.svg\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"cover\">\n      <div *ngFor=\"let chat of chatList\">\n        <div  style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"startChat(chat.receiver_id,chat.company_name,chat.company_online)\">\n          <div style=\"display: flex;align-items: center;\">\n            <div style=\"position: relative; margin-right: 15px;\">\n              <img class=\"company_profile\" src=\"{{imageUrlString}}{{chat.company_logo}}\" alt=\"\">\n              <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active1.svg\" alt=\"\" *ngIf=\"chat.company_online == 'Yes'\">\n              <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active2.svg\" alt=\"\" *ngIf=\"chat.company_online == 'No'\">\n            </div>\n            <div>\n              <div class=\"name\">{{chat.company_name}}</div>\n              <div class=\"last_message\">{{chat.last_message.message}}</div>\n            </div>\n          </div>\n          \n          <div class=\"message_time\">\n            {{chat.date}}\n            <div style=\"margin-top: 19.2px;\" *ngIf=\"chat.last_message.status == 'Unread' && chat.last_message.sender_type == 'Companies'\">\n              {{chat.last_message.status}}\n            </div>\n          </div>\n          \n        </div>\n        <hr>\n      </div>\n      \n\n  \n      <!-- --------------------------------copy----------------------------- -->\n      \n      <!-- <div style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"gotoMessageOwnerSide()\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"position: relative; margin-right: 15px;\">\n            <img src=\"assets/images/message_profile_dummy2.svg\" alt=\"\">\n            <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active2.svg\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"name\">Miss Mindy Kub</div>\n            <div class=\"last_message\">Subject line comes here</div>\n          </div>\n        </div>\n        \n        <div class=\"message_time\">\n          10 min ago\n        </div>\n      </div>\n      <hr> -->\n      <!-- --------------------------------copy----------------------------- -->\n      <!-- <div style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"gotoMessageOwnerSide()\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"position: relative; margin-right: 15px;\">\n            <img src=\"assets/images/message_profile_dummy3.svg\" alt=\"\">\n            <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active3.svg\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"name\">Roxanne Nitzsche</div>\n            <div class=\"last_message\">Subject line comes here</div>\n          </div>\n        </div>\n        \n        <div class=\"message_time\">\n          10 min ago\n        </div>\n      </div>\n      <hr> -->\n      <!-- --------------------------------copy----------------------------- -->\n      <!-- <div style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"gotoMessageOwnerSide()\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"position: relative; margin-right: 15px;\">\n            <img src=\"assets/images/message_profile_dummy4.svg\" alt=\"\">\n            <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active4.svg\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"name\">Deanna Stamm</div>\n            <div class=\"last_message\">Subject line comes here</div>\n          </div>\n        </div>\n        \n        <div class=\"message_time\">\n          10 min ago\n        </div>\n      </div>\n      <hr> -->\n      <!-- --------------------------------copy----------------------------- -->\n      <!-- <div style=\"display: flex;justify-content: space-between;padding: 0px 13px;\" (click)=\"gotoMessageOwnerSide()\">\n        <div style=\"display: flex;align-items: center;\">\n          <div style=\"position: relative; margin-right: 15px;\">\n            <img src=\"assets/images/message_profile_dummy5.svg\" alt=\"\">\n            <img style=\"position: absolute;bottom: 0px;left: 46px;\" src=\"assets/images/icons/active5.svg\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"name\">Nettie Dicki V</div>\n            <div class=\"last_message\">Subject line comes here</div>\n          </div>\n        </div>\n        \n        <div class=\"message_time\">\n          10 min ago\n        </div>\n      </div>\n      <hr> -->\n      <!-- --------------------------------copy ----------------------------- -->\n    </div>\n    \n    \n  </div>\n</ion-content>\n<ion-footer>\n  <ion-tabs style=\"display:contents ;\">\n\n    <ion-tab-bar class=\"ion_tab_bar\" slot=\"bottom\">\n\n      <ion-tab-button  style=\"background: white;\" (click)=\"homeTab()\">\n        <img src=\"assets/images/tab_icons/home.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Home</ion-label>\n        <!-- <ion-badge>6</ion-badge> -->\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"messagesTab()\">\n        <img style=\"height: 32px;width: 32px;\"  src=\"assets/images/tab_icons/messages_active.svg\" alt=\"\">\n        <ion-label class=\"btnActive_label\" >Messages</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"bookingTab()\">\n        <img src=\"assets/images/tab_icons/booking.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Booking</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button  style=\"background: white;\" (click)=\"favoriteTab()\">\n        <img src=\"assets/images/tab_icons/favorite.svg\" alt=\"\">\n        <ion-label class=\"btn_label\">Favorities</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n\n  </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_messages_messages_module_ts.js.map