"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-date_select-date_module_ts"],{

/***/ 43932:
/*!***********************************************************!*\
  !*** ./src/app/select-date/select-date-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDatePageRoutingModule": () => (/* binding */ SelectDatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _select_date_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-date.page */ 10959);




const routes = [
    {
        path: '',
        component: _select_date_page__WEBPACK_IMPORTED_MODULE_0__.SelectDatePage
    }
];
let SelectDatePageRoutingModule = class SelectDatePageRoutingModule {
};
SelectDatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectDatePageRoutingModule);



/***/ }),

/***/ 95693:
/*!***************************************************!*\
  !*** ./src/app/select-date/select-date.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDatePageModule": () => (/* binding */ SelectDatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _select_date_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-date-routing.module */ 43932);
/* harmony import */ var _select_date_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-date.page */ 10959);







let SelectDatePageModule = class SelectDatePageModule {
};
SelectDatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            // CalendarModule.forRoot({
            //   doneLabel: 'Save',
            //   closeIcon: true
            // }),
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_date_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectDatePageRoutingModule
        ],
        declarations: [_select_date_page__WEBPACK_IMPORTED_MODULE_1__.SelectDatePage]
    })
], SelectDatePageModule);



/***/ }),

/***/ 10959:
/*!*************************************************!*\
  !*** ./src/app/select-date/select-date.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDatePage": () => (/* binding */ SelectDatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _select_date_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-date.page.html?ngResource */ 54905);
/* harmony import */ var _select_date_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-date.page.scss?ngResource */ 80966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 28920);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 97064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 14190);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);







let SelectDatePage = class SelectDatePage {
    constructor(modalCtrlr, api) {
        this.modalCtrlr = modalCtrlr;
        this.api = api;
        this.datesArray = [];
        this.minDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date().toISOString()), 'yyyy-MM-dd');
        this.matched = false;
        this.bookedDates = [];
        this.optionsRange = {
            pickMode: 'range'
        };
    }
    ngOnInit() {
        this.datesArray = this.api.datesToDisable;
        this.bookedDates = this.api.bookedDates;
        console.log('Dates to disable: ', this.datesArray);
        console.log('Booked Dates: ', this.datesArray);
    }
    // onChangeDate(ev){
    //   console.log('hello');
    //   console.log(ev);
    // }
    getStartHours() {
        console.log('getStartHours', this.dateRange);
        if (true) {
            let sDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(this.dateRange?.from).toISOString()), 'yyyy-MM-dd');
            console.log('start date: ', sDate);
            let eDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(this.dateRange?.to).toISOString()), 'yyyy-MM-dd');
            console.log('end date: ', eDate);
        }
    }
    formattedString(dateVal) {
        const formattedString = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(dateVal), 'dd MMM, yyyy');
        console.log('DateValues: ', dateVal);
        // ==============to fectch booked dates=================
        for (let d of this.datesArray) {
            // ================dates formatting=============
            const arrayDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(d).toISOString()), 'yyyy-MM-dd');
            const newFormat = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(arrayDate), 'dd MMM, yyyy');
            //==================done===================
            if (formattedString === newFormat) {
                const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(formattedString).toISOString());
                console.log('Formatted Date: ', formattedDate);
                let dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(formattedDate);
                let dateMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(formattedDate);
                dateMonth++;
                let dateYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(formattedDate);
                for (let d of this.bookedDates) {
                    const st_Date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(d.start_date).toISOString());
                    const end_Date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(d.end_date).toISOString());
                    for (let stDate = st_Date; stDate <= end_Date; stDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(stDate, 1)) {
                        let bookedDateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(stDate);
                        let bookedMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(stDate);
                        bookedMonth++;
                        let bookedYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(stDate);
                        if (dateValue == bookedDateValue && dateMonth == bookedMonth && dateYear == bookedYear) {
                            this.bookedStDate = st_Date;
                            this.bookedEndDate = end_Date;
                            // ================dates formatting=============
                            const matchedStartDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(this.bookedStDate).toISOString()), 'yyyy-MM-dd');
                            this.bookedStDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(matchedStartDate), 'dd MMM, yyyy');
                            const matchedEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(this.bookedEndDate).toISOString()), 'yyyy-MM-dd');
                            this.bookedEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(matchedEndDate), 'dd MMM, yyyy');
                            //==================done===================
                        }
                    }
                }
                this.matched = true;
                break;
            }
            else if (formattedString !== newFormat) {
                this.matched = false;
            }
            else {
            }
        }
        if (this.matched == false) {
            this.date = formattedString;
        }
    }
    done() {
        console.log(this.date);
        if (this.date != undefined) {
            return this.modalCtrlr.dismiss(this.date, 'dateSelected');
        }
    }
};
SelectDatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
SelectDatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-select-date',
        template: _select_date_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_select_date_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectDatePage);



/***/ }),

/***/ 80966:
/*!**************************************************************!*\
  !*** ./src/app/select-date/select-date.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#FBFBFB !important;\n}\n\n.wrapper {\n  margin: 25px 16px 25px;\n}\n\n.date_time_title {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  color: #0F172A;\n}\n\n.date_time_box {\n  margin: 22px auto 0px;\n}\n\nion-datetime.md {\n  --background: #FBFBFB;\n  color: #464646;\n}\n\nion-datetime.ios {\n  color: #464646;\n}\n\n.booked_dates {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  color: black;\n  padding: 5px 10px 0px;\n  text-align: center;\n}\n\n.date_value {\n  font-weight: bold;\n  color: red;\n}\n\n.login_button {\n  --border-radius: 0px;\n  --background: #8000FF;\n  height: 48px;\n  width: 100%;\n  margin: 15px auto 0px;\n  --box-shadow:none;\n}\n\n.btn_text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1kYXRlLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXHNlbGVjdC1kYXRlXFxzZWxlY3QtZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksc0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFFSSxxQkFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESEE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUNPSjs7QURMQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QUROQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDU0oiLCJmaWxlIjoic2VsZWN0LWRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZCRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgbWFyZ2luOiAyNXB4IDE2cHggMjVweDtcclxufVxyXG4uZGF0ZV90aW1lX3RpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzBGMTcyQTtcclxufVxyXG4uZGF0ZV90aW1lX2JveHtcclxuICAgIC8vIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIycHggYXV0byAwcHg7XHJcbn1cclxuaW9uLWRhdGV0aW1lLm1ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgY29sb3I6ICM0NjQ2NDY7XHJcbn1cclxuaW9uLWRhdGV0aW1lLmlvc3tcclxuICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbi5ib29rZWRfZGF0ZXN7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kYXRlX3ZhbHVle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5sb2dpbl9idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bl90ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojRkJGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAyNXB4IDE2cHggMjVweDtcbn1cblxuLmRhdGVfdGltZV90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBGMTcyQTtcbn1cblxuLmRhdGVfdGltZV9ib3gge1xuICBtYXJnaW46IDIycHggYXV0byAwcHg7XG59XG5cbmlvbi1kYXRldGltZS5tZCB7XG4gIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgY29sb3I6ICM0NjQ2NDY7XG59XG5cbmlvbi1kYXRldGltZS5pb3Mge1xuICBjb2xvcjogIzQ2NDY0Njtcbn1cblxuLmJvb2tlZF9kYXRlcyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGF0ZV92YWx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubG9naW5fYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzgwMDBGRjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmJ0bl90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 54905:
/*!**************************************************************!*\
  !*** ./src/app/select-date/select-date.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"date_time_title\">Pick Start/End Dates</div>\n    <div class=\"date_time_box\">\n      <!-- <ion-datetime presentation=\"date\" (ionChange)=\"formattedString()\" size=\"cover\" [(ngModel)]=\"date\"></ion-datetime> -->\n      <ion-datetime  #datetime min=\"{{minDate}}\" max=\"2050\" (ionChange)=\"formattedString(datetime.value)\" presentation=\"date\" size=\"cover\" ></ion-datetime>\n      <!-- <ion-calendar       (click)=\"getStartHours()\"    (onChange)=\"onChangeDate($event)\"\n      [(ngModel)]=\"dateRange\" [options]=\"optionsRange\" [type]=\"type\" [format]=\"'YYYY-MM-DD'\">\n      </ion-calendar> -->\n    </div>\n    <div *ngIf=\"matched==false\" style=\"height:28px\">\n      \n    </div>\n    <div *ngIf=\"matched==true\" class=\"booked_dates\" >\n      <span class=\"date_value\">Alert: </span>\n       This car is booked from\n       <div><span class=\"date_value\">{{bookedStDate}}</span> to <span class=\"date_value\">{{bookedEndDate}}</span>.</div> \n    </div>\n    <ion-button class=\"login_button\" (click)=\"done()\">\n      <span class=\"btn_text\">Done</span>\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_select-date_select-date_module_ts.js.map