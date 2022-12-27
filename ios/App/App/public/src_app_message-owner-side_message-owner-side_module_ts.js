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









let MessageOwnerSidePage = class MessageOwnerSidePage {
    constructor(location, api, checkUser, router, acitvatedRoute) {
        // in 3 seconds do something
        // interval(3000).subscribe(x => {
        //     // this.updateMessages();
        //     // this.getMessages();
        // });
        this.location = location;
        this.api = api;
        this.checkUser = checkUser;
        this.router = router;
        this.acitvatedRoute = acitvatedRoute;
        // setTimeout(() => {
        //   this.getMessages()
        // },3000);
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
        // this.chat_ids = this.api.chat_ids;
        this.companyId = this.acitvatedRoute.snapshot.params['company_id'];
        console.log('companyId: ', this.companyId);
        this.companyName = this.acitvatedRoute.snapshot.params['company_name'];
        console.log('company name: ', this.companyName);
        this.companyOnline = this.acitvatedRoute.snapshot.params['company_online'];
        console.log('company name: ', this.companyName);
        this.getMessages();
        this.updateMessages();
    }
    callFunction() {
        this.content.scrollToBottom(0);
    }
    getMessages() {
        // console.log("this.api.chat_ids",this.api.chat_ids);
        // console.log("this.api.chat_ids.user_id",this.api.chat_ids.user_id);
        // console.log("this.api.chat_ids.company_id",this.api.chat_ids.company_id);
        // this.api.showLoading();
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
                this.callFunction();
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("Error: ", err);
        });
    }
    getMessagesAgain() {
        // console.log("this.api.chat_ids",this.api.chat_ids);
        // console.log("this.api.chat_ids.user_id",this.api.chat_ids.user_id);
        // console.log("this.api.chat_ids.company_id",this.api.chat_ids.company_id);
        // this.api.showLoading();
        let data = {
            requestType: "getMessages",
            userId: this.checkUser.appUserId,
            otherUserId: this.companyId,
        };
        console.log('Data: ', data);
        // this.api.showLoading();
        this.api.sendRequest('Chat', data).subscribe((res) => {
            // this.api.hideLoading();
            console.log("Response: ", res);
            if (res.status == 'success') {
                this.messages = res.data;
                this.NewMsgsCount = res.data.length;
                if (this.previousMsgsCount < this.NewMsgsCount) {
                    this.callFunction();
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
                this.callFunction();
                // console.log("Message Array Length: ",this.messages.length);
                // this.messages.push(res.data.unread_messages);
                // // this.getMessages();
                // console.log("Message Array Length: ",this.messages.length);
            }
        }, (err) => {
            console.log("Error: ", err);
        });
    }
    goBack() {
        this.router.navigate(['/messages']);
        // this.location.back();
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

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n}\n\n.show_status {\n  font-size: 14px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n  color: #12D804;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.owner_message_box {\n  position: relative;\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: #8000FF;\n  padding: 12px 8px 8px 15px;\n  border-radius: 0px 10px 10px 10px;\n}\n\n.owner_message_box::before {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: -1px;\n  left: -10px;\n}\n\n.owner_message_box::after {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: 0px;\n  left: -10px;\n  border: 10px solid transparent;\n  border-top: 10px solid #8000FF;\n  clear: both;\n}\n\n.owner_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: white;\n  width: auto;\n  max-width: 260px;\n}\n\n.message_time {\n  margin-top: 6px;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n}\n\n.consumer_message_box {\n  position: relative;\n  display: inline-block;\n  background: #EFEEEE;\n  padding: 12px 8px 8px 15px;\n  border-radius: 10px 0px 10px 10px;\n}\n\n.consumer_message_box::before {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: -1px;\n  right: -10px;\n}\n\n.consumer_message_box::after {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: 0px;\n  right: -10px;\n  border: 10px solid transparent;\n  border-top: 10px solid #EFEEEE;\n  clear: both;\n}\n\n.consumer_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n  width: auto;\n  max-width: 260px;\n}\n\n.textarea {\n  --background: #FBFBFB;\n  --color: black;\n  --placeholder-color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  height: auto;\n  max-height: 100px;\n  overflow: scroll;\n  --padding-end: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Utb3duZXItc2lkZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxtZXNzYWdlLW93bmVyLXNpZGVcXG1lc3NhZ2Utb3duZXItc2lkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNLSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhBO0VBQ0kscUJBQUE7QUNNSjs7QURKQTtFQUNJLHVCQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1NKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNXSjs7QURUQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUNVSjs7QURSQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNXSjs7QURSQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ1dKOztBRFRBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDWUo7O0FEVkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2FKIiwiZmlsZSI6Im1lc3NhZ2Utb3duZXItc2lkZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIC8vIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLnNob3dfc3RhdHVze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzEyRDgwNDtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDE2cHggMjBweDtcclxufVxyXG4ub3duZXJfbWVzc2FnZV9ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHggOHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLm93bmVyX21lc3NhZ2VfYm94OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbn1cclxuICBcclxuLm93bmVyX21lc3NhZ2VfYm94OjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjODAwMEZGO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLm93bmVyX21lc3NhZ2V7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xyXG59XHJcbi5tZXNzYWdlX3RpbWV7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1VyYmFuaXN0JyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29uc3VtZXJfbWVzc2FnZV9ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyB3aWR0aDogYXV0bztcclxuICAgIC8vIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUZFRUVFO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHggOHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDEwcHg7XHJcbn1cclxuLmNvbnN1bWVyX21lc3NhZ2VfYm94OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG59XHJcbiAgXHJcbi5jb25zdW1lcl9tZXNzYWdlX2JveDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNFRkVFRUU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4uY29uc3VtZXJfbWVzc2FnZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAyNjBweDtcclxufVxyXG4udGV4dGFyZWF7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxufVxyXG5cclxuICBcclxuICAiLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbn1cblxuLnNob3dfc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMTJEODA0O1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTZweCAyMHB4O1xufVxuXG4ub3duZXJfbWVzc2FnZV9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBwYWRkaW5nOiAxMnB4IDhweCA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ub3duZXJfbWVzc2FnZV9ib3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiAtMXB4O1xuICBsZWZ0OiAtMTBweDtcbn1cblxuLm93bmVyX21lc3NhZ2VfYm94OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IC0xMHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzgwMDBGRjtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5vd25lcl9tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMjYwcHg7XG59XG5cbi5tZXNzYWdlX3RpbWUge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29uc3VtZXJfbWVzc2FnZV9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI0VGRUVFRTtcbiAgcGFkZGluZzogMTJweCA4cHggOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDEwcHggMTBweDtcbn1cblxuLmNvbnN1bWVyX21lc3NhZ2VfYm94OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRvcDogLTFweDtcbiAgcmlnaHQ6IC0xMHB4O1xufVxuXG4uY29uc3VtZXJfbWVzc2FnZV9ib3g6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI0VGRUVFRTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb25zdW1lcl9tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAyNjBweDtcbn1cblxuLnRleHRhcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzhEOEQ4RDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 58489:
/*!****************************************************************************!*\
  !*** ./src/app/message-owner-side/message-owner-side.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div style=\"margin: 0px auto;text-align: center;\">\n        <div class=\"header_title\">Chat with {{companyName}}</div>\n        <div class=\"show_status\" *ngIf=\"companyOnline == 'Yes'\">Online</div>\n        <div class=\"show_status\" *ngIf=\"companyOnline == 'No'\">Offline</div>\n      </div>\n      \n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #IonContent>\n  <div class=\"wrapper\" >\n    <div  *ngFor=\"let msg of messages; let last = last\">\n      <div style=\"display: flex; align-items: flex-start;padding-bottom: 14px;width: 85%;\" *ngIf=\"msg.sender_type === 'Companies'\">\n        <img style=\"margin-right: 12px;height: 24px; width: 24px; border-radius: 50%;\"  src=\"{{api.imageUrlString}}{{msg.users_data.company_logo}}\" alt=\"\">\n        <div class=\"owner_message_box\">\n          <div class=\"owner_message\">{{msg.message}}</div>\n          <!-- {{last? callFunction() : ''}} -->\n          <div class=\"message_time\" style=\"opacity: 50%;\"><span>{{msg.time}}</span><span> {{msg.date}} </span></div>\n        </div>\n      </div>\n  \n      <div style=\"display: flex; justify-content: flex-end;padding-bottom: 14px; float: right;width: 85%;\" *ngIf=\"msg.sender_type === 'Users'\">\n        <div class=\"consumer_message_box\">\n          <div class=\"consumer_message\">{{msg.message}}</div>\n          <!-- {{last? callFunction() : ''}} -->\n          <div class=\"message_time\" style=\"color: #B1A8B9;\"><span>{{msg.time}}</span><span> {{msg.date}} </span></div>\n        </div>\n        <img style=\"margin-left: 12px;height: 24px; width: 24px; border-radius: 50%;\"  src=\"{{api.imageUrlString}}{{msg.users_data.profile_pic}}\" alt=\"\">\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div style=\"display: flex;align-items: center;padding: 9px 16px 10px; box-shadow: 0px 0px 20px rgb(0 0 0 / 9%);\">\n    <ion-textarea #textarea class=\"textarea\" auto-grow=\"true\" placeholder=\"Type your message here.....\" ></ion-textarea>\n    <div><img (click)=\"sendMessage(textarea.value)\" src=\"assets/images/icons/send_message.svg\" alt=\"\"></div>\n  </div>\n\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_message-owner-side_message-owner-side_module_ts.js.map