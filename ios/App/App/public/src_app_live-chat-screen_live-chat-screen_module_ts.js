"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_live-chat-screen_live-chat-screen_module_ts"],{

/***/ 58383:
/*!*********************************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveChatScreenPageRoutingModule": () => (/* binding */ LiveChatScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _live_chat_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-chat-screen.page */ 14845);




const routes = [
    {
        path: '',
        component: _live_chat_screen_page__WEBPACK_IMPORTED_MODULE_0__.LiveChatScreenPage
    }
];
let LiveChatScreenPageRoutingModule = class LiveChatScreenPageRoutingModule {
};
LiveChatScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LiveChatScreenPageRoutingModule);



/***/ }),

/***/ 12273:
/*!*************************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveChatScreenPageModule": () => (/* binding */ LiveChatScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _live_chat_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-chat-screen-routing.module */ 58383);
/* harmony import */ var _live_chat_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-chat-screen.page */ 14845);







let LiveChatScreenPageModule = class LiveChatScreenPageModule {
};
LiveChatScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _live_chat_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.LiveChatScreenPageRoutingModule
        ],
        declarations: [_live_chat_screen_page__WEBPACK_IMPORTED_MODULE_1__.LiveChatScreenPage]
    })
], LiveChatScreenPageModule);



/***/ }),

/***/ 14845:
/*!***********************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveChatScreenPage": () => (/* binding */ LiveChatScreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _live_chat_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-chat-screen.page.html?ngResource */ 12245);
/* harmony import */ var _live_chat_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-chat-screen.page.scss?ngResource */ 62048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);









let LiveChatScreenPage = class LiveChatScreenPage {
    constructor(location, checkUser, api, activatedRoute) {
        this.location = location;
        this.checkUser = checkUser;
        this.api = api;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.selectedAdmin = this.activatedRoute.snapshot.params['selected_admin'];
        console.log("Selected Admin: ", this.selectedAdmin);
        this.getMessagesLive();
        this.updateMessagesLive();
    }
    ionViewWillEnter() {
        this.interval = setInterval(() => {
            this.getMessagesLiveAgain();
            // this.updateMessagesLive();
        }, 3000);
    }
    ionViewWillLeave() {
        clearInterval(this.interval);
        console.log('leave view');
    }
    scrollToBottom() {
        this.content.scrollToBottom(0);
    }
    getMessagesLive() {
        let data = {
            requestType: "getMessages",
            userId: this.checkUser.appUserId,
            otherUserId: this.selectedAdmin
        };
        this.api.showLoading();
        this.api.sendRequest("ChatLive", data).subscribe((res) => {
            this.api.hideLoading();
            console.log("Resposne: ", res);
            if (res.status == 'success') {
                this.messages = res.data;
                this.previousMsgsCount = res.data.length;
                this.scrollToBottom();
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("Api Error: ", err);
        });
    }
    getMessagesLiveAgain() {
        let data = {
            requestType: "getMessages",
            userId: this.checkUser.appUserId,
            otherUserId: this.selectedAdmin
        };
        this.api.sendRequest("ChatLive", data).subscribe((res) => {
            console.log("Resposne: ", res);
            if (res.status == 'success') {
                this.messages = res.data;
                this.NewMsgsCount = res.data.length;
                if (this.previousMsgsCount < this.NewMsgsCount) {
                    this.scrollToBottom();
                    this.previousMsgsCount = this.NewMsgsCount;
                }
            }
        }, (err) => {
            console.log("Api Error: ", err);
        });
    }
    updateMessagesLive() {
        let data = {
            requestType: "updateMessages",
            userId: this.checkUser.appUserId,
            otherUserId: this.selectedAdmin
        };
        this.api.sendRequest("ChatLive", data).subscribe((res) => {
            console.log("Resposne: ", res);
            if (res.status == 'success') {
                console.log("Message updated.");
                this.scrollToBottom();
            }
        }, (err) => {
            console.log("Api Error: ", err);
        });
    }
    sendMessagesLive(message) {
        console.log("Message: ", message);
        let data = {
            requestType: "sendMessage",
            sender_type: "Users",
            userId: this.checkUser.appUserId,
            otherUserId: this.selectedAdmin,
            content: message,
            messageType: "1"
        };
        this.api.sendRequest("ChatLive", data).subscribe((res) => {
            console.log("Resposne: ", res);
            if (res.status == 'success') {
                this.getMessagesLive();
            }
        }, (err) => {
            console.log("Api Error: ", err);
        });
        this.textarea.value = '';
    }
    goBack() {
        this.location.back();
    }
};
LiveChatScreenPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_2__.CheckUserService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
LiveChatScreenPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent,] }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTextarea,] }]
};
LiveChatScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-live-chat-screen',
        template: _live_chat_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_live_chat_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LiveChatScreenPage);



/***/ }),

/***/ 62048:
/*!************************************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.show_status {\n  font-size: 14px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n  color: #12D804;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.owner_message_box {\n  position: relative;\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: #8000FF;\n  padding: 12px 8px 8px 15px;\n  border-radius: 0px 10px 10px 10px;\n}\n\n.owner_message_box::before {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: -1px;\n  left: -10px;\n}\n\n.owner_message_box::after {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: 0px;\n  left: -10px;\n  border: 10px solid transparent;\n  border-top: 10px solid #8000FF;\n  clear: both;\n}\n\n.owner_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: white;\n  width: auto;\n  max-width: 205px;\n}\n\n.message_time {\n  margin-top: 6px;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n}\n\n.consumer_message_box {\n  position: relative;\n  display: inline-block;\n  background: #EFEEEE;\n  padding: 12px 8px 8px 15px;\n  border-radius: 10px 0px 10px 10px;\n}\n\n.consumer_message_box::before {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: -1px;\n  right: -10px;\n}\n\n.consumer_message_box::after {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: 0px;\n  right: -10px;\n  border: 10px solid transparent;\n  border-top: 10px solid #EFEEEE;\n  clear: both;\n}\n\n.consumer_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n  width: auto;\n  max-width: 205px;\n}\n\n.admin_side_msg {\n  display: flex;\n  align-items: flex-start;\n  padding-bottom: 14px;\n  width: 85%;\n}\n\n.user_img {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n}\n\n.consumer_side_msg {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 14px;\n  float: right;\n  width: 85%;\n}\n\n.text_area_box {\n  display: flex;\n  align-items: center;\n  padding: 9px 16px 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n\n.textarea {\n  --background: #FBFBFB;\n  --color: black;\n  --placeholder-color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  height: auto;\n  max-height: 100px;\n  overflow: scroll;\n  --padding-end: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmUtY2hhdC1zY3JlZW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcbGl2ZS1jaGF0LXNjcmVlblxcbGl2ZS1jaGF0LXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSxxQkFBQTtBQ09KOztBRExBO0VBQ0ksdUJBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDVUo7O0FEUEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNVSjs7QURSQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUdBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDWUo7O0FEVkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNhSjs7QURYQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ2NKOztBRFpBO0VBQ0ksWUFBQTtFQUFjLFdBQUE7RUFBYSxrQkFBQTtBQ2lCL0I7O0FEZkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDa0JKOztBRGhCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7QUNtQko7O0FEakJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNvQkoiLCJmaWxlIjoibGl2ZS1jaGF0LXNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLnNob3dfc3RhdHVze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzEyRDgwNDtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDE2cHggMjBweDtcclxufVxyXG4ub3duZXJfbWVzc2FnZV9ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHggOHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLm93bmVyX21lc3NhZ2VfYm94OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbn1cclxuICBcclxuLm93bmVyX21lc3NhZ2VfYm94OjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjODAwMEZGO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLm93bmVyX21lc3NhZ2V7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDIwNXB4O1xyXG59XHJcbi5tZXNzYWdlX3RpbWV7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1VyYmFuaXN0JyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29uc3VtZXJfbWVzc2FnZV9ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyB3aWR0aDogYXV0bztcclxuICAgIC8vIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUZFRUVFO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHggOHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDEwcHg7XHJcbn1cclxuLmNvbnN1bWVyX21lc3NhZ2VfYm94OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG59XHJcbiAgXHJcbi5jb25zdW1lcl9tZXNzYWdlX2JveDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNFRkVFRUU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4uY29uc3VtZXJfbWVzc2FnZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAyMDVweDtcclxufVxyXG4uYWRtaW5fc2lkZV9tc2d7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbi51c2VyX2ltZ3tcclxuICAgIGhlaWdodDogMjRweDsgd2lkdGg6IDI0cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uY29uc3VtZXJfc2lkZV9tc2d7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDsgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbi50ZXh0X2FyZWFfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA5cHggMTZweCAxMHB4OyBcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbn1cclxuLnRleHRhcmVhe1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbn1cclxuXHJcbiAgXHJcbiAgIiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5zaG93X3N0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzEyRDgwNDtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDE2cHggMjBweDtcbn1cblxuLm93bmVyX21lc3NhZ2VfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgcGFkZGluZzogMTJweCA4cHggOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLm93bmVyX21lc3NhZ2VfYm94OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5vd25lcl9tZXNzYWdlX2JveDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAtMTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICM4MDAwRkY7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ub3duZXJfbWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDIwNXB4O1xufVxuXG4ubWVzc2FnZV90aW1lIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnN1bWVyX21lc3NhZ2VfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNFRkVFRUU7XG4gIHBhZGRpbmc6IDEycHggOHB4IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDEwcHg7XG59XG5cbi5jb25zdW1lcl9tZXNzYWdlX2JveDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLmNvbnN1bWVyX21lc3NhZ2VfYm94OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNFRkVFRUU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29uc3VtZXJfbWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMjA1cHg7XG59XG5cbi5hZG1pbl9zaWRlX21zZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLnVzZXJfaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29uc3VtZXJfc2lkZV9tc2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogODUlO1xufVxuXG4udGV4dF9hcmVhX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDlweCAxNnB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4udGV4dGFyZWEge1xuICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOEQ4RDhEO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbn0iXX0= */";

/***/ }),

/***/ 12245:
/*!************************************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Live Chat</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #IonContent>\n  <div class=\"wrapper\">\n    <div *ngFor=\"let msg of messages;\">\n      <div class=\"admin_side_msg\" *ngIf=\"msg.sender_type === 'Admin'\">\n        <img class=\"user_img\" style=\"margin-right: 12px;\"  src=\"{{api.imageUrlString}}{{msg.users_data.user_image}}\" alt=\"\">\n        <div class=\"owner_message_box\">\n          <div class=\"owner_message\">{{msg.message}}</div>\n          <div class=\"message_time\" style=\"opacity: 50%;\"><span>{{msg.time}}</span><span> {{msg.date}} </span></div>\n        </div>\n      </div>\n  \n      <div class=\"consumer_side_msg\"  *ngIf=\"msg.sender_type === 'Users'\">\n        <div class=\"consumer_message_box\">\n          <div class=\"consumer_message\">{{msg.message}}</div>\n          <div class=\"message_time\" style=\"color: #B1A8B9;\"><span>{{msg.time}}</span><span> {{msg.date}} </span></div>\n        </div>\n        <img class=\"user_img\" style=\"margin-left: 12px;\"  src=\"{{api.imageUrlString}}{{msg.users_data.profile_pic}}\" alt=\"\">\n      </div>\n    </div>\n    \n    \n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div class=\"text_area_box\">\n    <ion-textarea #textarea class=\"textarea\" auto-grow=\"true\" placeholder=\"Type your message here.....\"></ion-textarea>\n    <div><img (click)=\"sendMessagesLive(textarea.value)\" src=\"assets/images/icons/send_message.svg\" alt=\"\"></div>\n  </div>\n\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_live-chat-screen_live-chat-screen_module_ts.js.map