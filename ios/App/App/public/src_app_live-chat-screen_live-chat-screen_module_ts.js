"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_live-chat-screen_live-chat-screen_module_ts"],{

/***/ 8383:
/*!*********************************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveChatScreenPageRoutingModule": () => (/* binding */ LiveChatScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _live_chat_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-chat-screen.page */ 4845);




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

/***/ 2273:
/*!*************************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveChatScreenPageModule": () => (/* binding */ LiveChatScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _live_chat_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-chat-screen-routing.module */ 8383);
/* harmony import */ var _live_chat_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-chat-screen.page */ 4845);







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

/***/ 4845:
/*!***********************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveChatScreenPage": () => (/* binding */ LiveChatScreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _live_chat_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-chat-screen.page.html?ngResource */ 2245);
/* harmony import */ var _live_chat_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-chat-screen.page.scss?ngResource */ 2048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





let LiveChatScreenPage = class LiveChatScreenPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
LiveChatScreenPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
LiveChatScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-live-chat-screen',
        template: _live_chat_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_live_chat_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LiveChatScreenPage);



/***/ }),

/***/ 2048:
/*!************************************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\nion-content {\n  font-family: \"Poppins\", sans-serif;\n  --background:#FBFBFB !important;\n}\n\nion-footer {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FBFBFB !important;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 30px 16px 15px;\n  position: relative;\n}\n\n.header_title {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: #0F172A;\n  margin: 0px auto;\n}\n\n.show_status {\n  font-size: 14px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n  color: #12D804;\n}\n\n.bgtoolbar {\n  --background: #FBFBFB;\n}\n\n.wrapper {\n  padding: 15px 16px 20px;\n}\n\n.owner_message_box {\n  position: relative;\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: #8000FF;\n  padding: 12px 8px 8px 15px;\n  border-radius: 0px 10px 10px 10px;\n}\n\n.owner_message_box::before {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: -1px;\n  left: -10px;\n}\n\n.owner_message_box::after {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: 0px;\n  left: -10px;\n  border: 10px solid transparent;\n  border-top: 10px solid #8000FF;\n  clear: both;\n}\n\n.owner_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: white;\n}\n\n.message_time {\n  margin-top: 6px;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n}\n\n.consumer_message_box {\n  position: relative;\n  display: inline-block;\n  background: #EFEEEE;\n  padding: 12px 8px 8px 15px;\n  border-radius: 10px 0px 10px 10px;\n}\n\n.consumer_message_box::before {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: -1px;\n  right: -10px;\n}\n\n.consumer_message_box::after {\n  content: \"\";\n  position: absolute;\n  visibility: visible;\n  top: 0px;\n  right: -10px;\n  border: 10px solid transparent;\n  border-top: 10px solid #EFEEEE;\n  clear: both;\n}\n\n.consumer_message {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.textarea {\n  --background: #FBFBFB;\n  --color: black;\n  --placeholder-color: #8D8D8D;\n  font-family: \"Poppins\", sans-serif;\n  --placeholder-font-weight: 400;\n  font-size: 16px;\n  font-weight: 400;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  height: auto;\n  max-height: 100px;\n  overflow: scroll;\n  --padding-end: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmUtY2hhdC1zY3JlZW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcMzYwVUFFXFxzcmNcXGFwcFxcbGl2ZS1jaGF0LXNjcmVlblxcbGl2ZS1jaGF0LXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSxxQkFBQTtBQ09KOztBRExBO0VBQ0ksdUJBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDVUo7O0FEUEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNVSjs7QURSQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUdBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDWUo7O0FEVkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNhSjs7QURYQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDY0oiLCJmaWxlIjoibGl2ZS1jaGF0LXNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkIgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTZweCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLnNob3dfc3RhdHVze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzEyRDgwNDtcclxufVxyXG4uYmd0b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDE2cHggMjBweDtcclxufVxyXG4ub3duZXJfbWVzc2FnZV9ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODAwMEZGO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHggOHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLm93bmVyX21lc3NhZ2VfYm94OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbn1cclxuICBcclxuLm93bmVyX21lc3NhZ2VfYm94OjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjODAwMEZGO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLm93bmVyX21lc3NhZ2V7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tZXNzYWdlX3RpbWV7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1VyYmFuaXN0JyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29uc3VtZXJfbWVzc2FnZV9ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyB3aWR0aDogYXV0bztcclxuICAgIC8vIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUZFRUVFO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHggOHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDEwcHg7XHJcbn1cclxuLmNvbnN1bWVyX21lc3NhZ2VfYm94OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG59XHJcbiAgXHJcbi5jb25zdW1lcl9tZXNzYWdlX2JveDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNFRkVFRUU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4uY29uc3VtZXJfbWVzc2FnZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4udGV4dGFyZWF7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxufVxyXG5cclxuICBcclxuICAiLCJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDE2cHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBGMTcyQTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLnNob3dfc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMTJEODA0O1xufVxuXG4uYmd0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTZweCAyMHB4O1xufVxuXG4ub3duZXJfbWVzc2FnZV9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kOiAjODAwMEZGO1xuICBwYWRkaW5nOiAxMnB4IDhweCA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ub3duZXJfbWVzc2FnZV9ib3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiAtMXB4O1xuICBsZWZ0OiAtMTBweDtcbn1cblxuLm93bmVyX21lc3NhZ2VfYm94OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IC0xMHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzgwMDBGRjtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5vd25lcl9tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lc3NhZ2VfdGltZSB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb25zdW1lcl9tZXNzYWdlX2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjRUZFRUVFO1xuICBwYWRkaW5nOiAxMnB4IDhweCA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMTBweCAxMHB4O1xufVxuXG4uY29uc3VtZXJfbWVzc2FnZV9ib3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiAtMXB4O1xuICByaWdodDogLTEwcHg7XG59XG5cbi5jb25zdW1lcl9tZXNzYWdlX2JveDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogLTEwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRUZFRUVFO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbnN1bWVyX21lc3NhZ2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0YXJlYSB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4RDhEOEQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 2245:
/*!************************************************************************!*\
  !*** ./src/app/live-chat-screen/live-chat-screen.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"header\">\n      <img (click)=\"goBack()\" style=\"position: absolute;\" src=\"assets/images/icons/back_arrow.svg\" alt=\"\">\n      <div class=\"header_title\">Live Chat</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"display: flex; align-items: flex-start;\">\n      <img style=\"margin-right: 12px;\"  src=\"assets/images/icons/owner_pic.svg\" alt=\"\">\n      <div class=\"owner_message_box\">\n        <div class=\"owner_message\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n           nonumy eirmod tempor invidunt ut labore et</div>\n        <div class=\"message_time\" style=\"opacity: 50%;\"><span>6:08pm</span><span> Today</span></div>\n      </div>\n    </div>\n\n    <div style=\"display: flex; align-items: flex-start;margin-top: 18px;float: right;\">\n      <div class=\"consumer_message_box\">\n        <div class=\"consumer_message\">Lorem ipsum dolor sit amet</div>\n        <div class=\"message_time\" style=\"color: #B1A8B9;\"><span>6:08pm</span><span> Today</span></div>\n      </div>\n      <img style=\"margin-left: 12px;\"  src=\"assets/images/icons/consumer_pic.svg\" alt=\"\">\n    </div>\n    \n    \n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div style=\"display: flex;align-items: center;padding: 9px 16px 10px; box-shadow: 0px 0px 20px rgb(0 0 0 / 9%);\">\n    <ion-textarea class=\"textarea\" auto-grow=\"true\" placeholder=\"Type your message here.....\"></ion-textarea>\n    <div><img src=\"assets/images/icons/send_message.svg\" alt=\"\"></div>\n  </div>\n\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_live-chat-screen_live-chat-screen_module_ts.js.map