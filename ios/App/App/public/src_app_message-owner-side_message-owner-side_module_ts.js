"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_message-owner-side_message-owner-side_module_ts"],{

/***/ 25500:
/*!*************************************************************************!*\
  !*** ./src/app/message-owner-side/message-owner-side-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageOwnerSidePageRoutingModule": () => (/* binding */ MessageOwnerSidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _message_owner_side_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-owner-side.page */ 58934);




const routes = [
    {
        path: '',
        component: _message_owner_side_page__WEBPACK_IMPORTED_MODULE_0__.MessageOwnerSidePage
    }
];
let MessageOwnerSidePageRoutingModule = class MessageOwnerSidePageRoutingModule {
};
MessageOwnerSidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessageOwnerSidePageRoutingModule);



/***/ }),

/***/ 79747:
/*!*****************************************************************!*\
  !*** ./src/app/message-owner-side/message-owner-side.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageOwnerSidePageModule": () => (/* binding */ MessageOwnerSidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _message_owner_side_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-owner-side-routing.module */ 25500);
/* harmony import */ var _message_owner_side_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-owner-side.page */ 58934);







let MessageOwnerSidePageModule = class MessageOwnerSidePageModule {
};
MessageOwnerSidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _message_owner_side_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessageOwnerSidePageRoutingModule
        ],
        declarations: [_message_owner_side_page__WEBPACK_IMPORTED_MODULE_1__.MessageOwnerSidePage]
    })
], MessageOwnerSidePageModule);



/***/ }),

/***/ 58934:
/*!***************************************************************!*\
  !*** ./src/app/message-owner-side/message-owner-side.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageOwnerSidePage": () => (/* binding */ MessageOwnerSidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _message_owner_side_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-owner-side.page.html?ngResource */ 58489);
/* harmony import */ var _message_owner_side_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-owner-side.page.scss?ngResource */ 1811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);








// import { interval } from 'rxjs';

let MessageOwnerSidePage = class MessageOwnerSidePage {
    constructor(location, api, checkUser, router, acitvatedRoute) {
        this.location = location;
        this.api = api;
        this.checkUser = checkUser;
        this.router = router;
        this.acitvatedRoute = acitvatedRoute;
    }
    ionViewWillEnter() {
        this.interval = setInterval(() => {
            this.getMessagesAgain();
        }, 3000);
    }
    ionViewWillLeave() {
        clearInterval(this.interval);
        console.log('leave view');
    }
    ngOnInit() {
        this.companyId = this.acitvatedRoute.snapshot.params['company_id'];
        console.log('companyId: ', this.companyId);
        this.companyName = this.acitvatedRoute.snapshot.params['company_name'];
        console.log('company name: ', this.companyName);
        this.companyOnline = this.acitvatedRoute.snapshot.params['company_online'];
        console.log('company name: ', this.companyName);
        this.getMessages();
        this.updateMessages();
    }
    scrollToBottom() {
        this.content.scrollToBottom(0);
    }
    getMessages() {
        let data = {
            requestType: "getMessages",
            userId: this.checkUser.appUserId,
            otherUserId: this.companyId,
        };
        console.log('Data: ', data);
        this.api.showLoading();
        this.api.sendRequest('Chat', data).subscribe((res) => {
            this.api.hideLoading();
            console.log("Response: ", res);
            if (res.status == 'success') {
                this.messages = res.data;
                this.previousMsgsCount = res.data.length;
                this.scrollToBottom();
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("Error: ", err);
        });
    }
    getMessagesAgain() {
        let data = {
            requestType: "getMessages",
            userId: this.checkUser.appUserId,
            otherUserId: this.companyId,
        };
        console.log('Data: ', data);
        this.api.sendRequest('Chat', data).subscribe((res) => {
            console.log("Response: ", res);
            if (res.status == 'success') {
                this.messages = res.data;
                this.NewMsgsCount = res.data.length;
                if (this.previousMsgsCount < this.NewMsgsCount) {
                    this.scrollToBottom();
                    this.previousMsgsCount = this.NewMsgsCount;
                }
            }
        }, (err) => {
            console.log("Error: ", err);
        });
    }
    sendMessage(msg) {
        console.log('user Typed Message: ', msg);
        let data = {
            requestType: "sendMessage",
            sender_type: "Users",
            userId: this.checkUser.appUserId,
            otherUserId: this.companyId,
            content: msg,
            messageType: "1"
        };
        console.log('data: ', data);
        this.api.sendRequest('Chat', data).subscribe((res) => {
            console.log('Send Message API Response: ', res);
            if (res.status == 'success') {
                console.log("API Success Response: ", res.message);
                this.getMessages();
            }
        }, (err) => {
            console.log("Error: ", err);
        });
        this.textarea.value = '';
    }
    updateMessages() {
        let data = {
            requestType: "updateMessages",
            userId: this.checkUser.appUserId,
            otherUserId: this.companyId
        };
        console.log("upadteMessageData: ", data);
        this.api.sendRequest("Chat", data).subscribe((res) => {
            console.log('upadteMessagesApiResponse: ', res);
            if (res.status == 'success') {
                console.log("Message updated.");
                this.scrollToBottom();
            }
        }, (err) => {
            console.log("Error: ", err);
        });
    }
    goBack() {
        this.router.navigate(['/messages']);
    }
};
MessageOwnerSidePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_3__.CheckUserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
MessageOwnerSidePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent,] }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTextarea,] }]
};
MessageOwnerSidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-message-owner-side',
        template: _message_owner_side_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_message_owner_side_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessageOwnerSidePage);



/***/ }),

/***/ 1811:
/*!****************************************************************************!*\
  !*** ./src/app/message-owner-side/message-owner-side.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n}\n\n.show_status {\n  font-size: 14px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n  color: #12D804;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.company_side_msg {\n  display: flex;\n  align-items: flex-start;\n  padding-bottom: 14px;\n  width: 85%;\n}\n\n.user_img {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n}\n\n.consumer_side_msg {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 14px;\n  float: right;\n  width: 85%;\n}\n\n.owner_message_box {\n  position: relative;\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: #8000FF;\n  padding: 12px 8px 8px 15px;\n  border-radius: 0px 10px 10px 10px;\n}\n\n.owner_message_box::before {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: -1px;\n  left: -10px;\n}\n\n.owner_message_box::after {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: 0px;\n  left: -10px;\n  border: 10px solid transparent;\n  border-top: 10px solid #8000FF;\n  clear: both;\n}\n\n.owner_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: white;\n  width: auto;\n  max-width: 205px;\n}\n\n.message_time {\n  margin-top: 6px;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n}\n\n.consumer_message_box {\n  position: relative;\n  display: inline-block;\n  background: #EFEEEE;\n  padding: 12px 8px 8px 15px;\n  border-radius: 10px 0px 10px 10px;\n}\n\n.consumer_message_box::before {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: -1px;\n  right: -10px;\n}\n\n.consumer_message_box::after {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: 0px;\n  right: -10px;\n  border: 10px solid transparent;\n  border-top: 10px solid #EFEEEE;\n  clear: both;\n}\n\n.consumer_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n  width: auto;\n  max-width: 205px;\n}\n\n.textarea {\n  --background: #FBFBFB;\n  --color: black;\n  --placeholder-color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  height: auto;\n  max-height: 100px;\n  overflow: scroll;\n  --padding-end: 10px;\n}\n\n.text_area_box {\n  display: flex;\n  align-items: center;\n  padding: 9px 16px 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Utb3duZXItc2lkZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxtZXNzYWdlLW93bmVyLXNpZGVcXG1lc3NhZ2Utb3duZXItc2lkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNLSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhBO0VBQ0kscUJBQUE7QUNNSjs7QURKQTtFQUNJLHVCQUFBO0FDT0o7O0FETEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNRSjs7QUROQTtFQUNJLFlBQUE7RUFBYyxXQUFBO0VBQWEsa0JBQUE7QUNXL0I7O0FEVEE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDWUo7O0FEVkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQ2FKOztBRFhBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2NKOztBRFhBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDY0o7O0FEWkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNlSjs7QURiQTtFQUNJLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNnQko7O0FEZEE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBR0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0FDZUo7O0FEYkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDZ0JKOztBRGJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDaUJKOztBRGZBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNrQko7O0FEaEJBO0VBQ0ksYUFBQTtFQUFjLG1CQUFBO0VBQW9CLHNCQUFBO0VBQXdCLDRDQUFBO0FDc0I5RCIsImZpbGUiOiJtZXNzYWdlLW93bmVyLXNpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwRjE3MkE7XHJcbiAgICAvLyBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5zaG93X3N0YXR1c3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMxMkQ4MDQ7XHJcbn1cclxuLmJndG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBhZGRpbmc6MTVweCAxNnB4IDIwcHg7XHJcbn1cclxuLmNvbXBhbnlfc2lkZV9tc2d7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbi51c2VyX2ltZ3tcclxuICAgIGhlaWdodDogMjRweDsgd2lkdGg6IDI0cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uY29uc3VtZXJfc2lkZV9tc2d7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDsgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbi5vd25lcl9tZXNzYWdlX2JveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQ6ICM4MDAwRkY7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweCA4cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG4ub3duZXJfbWVzc2FnZV9ib3g6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxufVxyXG4gIFxyXG4ub3duZXJfbWVzc2FnZV9ib3g6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICM4MDAwRkY7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4ub3duZXJfbWVzc2FnZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMjA1cHg7XHJcbn1cclxuLm1lc3NhZ2VfdGltZXtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb25zdW1lcl9tZXNzYWdlX2JveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIHdpZHRoOiBhdXRvO1xyXG4gICAgLy8gbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQ6ICNFRkVFRUU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweCA4cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDEwcHggMTBweDtcclxufVxyXG4uY29uc3VtZXJfbWVzc2FnZV9ib3g6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbn1cclxuICBcclxuLmNvbnN1bWVyX21lc3NhZ2VfYm94OjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0VGRUVFRTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jb25zdW1lcl9tZXNzYWdle1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDIwNXB4O1xyXG59XHJcbi50ZXh0YXJlYXtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzhEOEQ4RDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG59XHJcbi50ZXh0X2FyZWFfYm94e1xyXG4gICAgZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO3BhZGRpbmc6IDlweCAxNnB4IDEwcHg7IGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMCAwIDAgLyA5JSk7XHJcbn1cclxuXHJcbiAgXHJcbiAgIiwiaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1iYWNrZ3JvdW5kOiNGQkZCRkIgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAxNnB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwRjE3MkE7XG59XG5cbi5zaG93X3N0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzEyRDgwNDtcbn1cblxuLmJndG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDE2cHggMjBweDtcbn1cblxuLmNvbXBhbnlfc2lkZV9tc2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi51c2VyX2ltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbnN1bWVyX3NpZGVfbXNnIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLm93bmVyX21lc3NhZ2VfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgcGFkZGluZzogMTJweCA4cHggOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLm93bmVyX21lc3NhZ2VfYm94OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5vd25lcl9tZXNzYWdlX2JveDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAtMTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICM4MDAwRkY7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ub3duZXJfbWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDIwNXB4O1xufVxuXG4ubWVzc2FnZV90aW1lIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnN1bWVyX21lc3NhZ2VfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNFRkVFRUU7XG4gIHBhZGRpbmc6IDEycHggOHB4IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDEwcHg7XG59XG5cbi5jb25zdW1lcl9tZXNzYWdlX2JveDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLmNvbnN1bWVyX21lc3NhZ2VfYm94OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNFRkVFRUU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29uc3VtZXJfbWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMjA1cHg7XG59XG5cbi50ZXh0YXJlYSB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufVxuXG4udGV4dF9hcmVhX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDlweCAxNnB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufSJdfQ== */";

/***/ }),

/***/ 58489:
/*!****************************************************************************!*\
  !*** ./src/app/message-owner-side/message-owner-side.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div style=\"margin: 0px auto;text-align: center;\">\n        <div class=\"header_title\">Chat with {{companyName}}</div>\n        <div class=\"show_status\" *ngIf=\"companyOnline == 'Yes'\">Online</div>\n        <div class=\"show_status\" *ngIf=\"companyOnline == 'No'\">Offline</div>\n      </div>\n      \n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #IonContent>\n  <div class=\"wrapper\" >\n    <div  *ngFor=\"let msg of messages;\">\n      <div class=\"company_side_msg\"  *ngIf=\"msg.sender_type === 'Companies'\">\n        <img class=\"user_img\" style=\"margin-right: 12px;\"  src=\"{{api.imageUrlString}}{{msg.users_data.company_logo}}\" alt=\"\">\n        <div class=\"owner_message_box\">\n          <div class=\"owner_message\">{{msg.message}}</div>\n          \n          <div class=\"message_time\" style=\"opacity: 50%;\"><span>{{msg.time}}</span><span> {{msg.date}} </span></div>\n        </div>\n      </div>\n  \n      <div class=\"consumer_side_msg\"  *ngIf=\"msg.sender_type === 'Users'\">\n        <div class=\"consumer_message_box\">\n          <div class=\"consumer_message\">{{msg.message}}</div>\n          \n          <div class=\"message_time\" style=\"color: #B1A8B9;\"><span>{{msg.time}}</span><span> {{msg.date}} </span></div>\n        </div>\n        <img class=\"user_img\" style=\"margin-left: 12px;\"  src=\"{{api.imageUrlString}}{{msg.users_data.profile_pic}}\" alt=\"\">\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div class=\"text_area_box\" >\n    <ion-textarea #textarea class=\"textarea\" auto-grow=\"true\" placeholder=\"Type your message here.....\" ></ion-textarea>\n    <div><img (click)=\"sendMessage(textarea.value)\" src=\"assets/images/icons/send_message.svg\" alt=\"\"></div>\n  </div>\n\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_message-owner-side_message-owner-side_module_ts.js.map