"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_cancel-booking-popup_cancel-booking-popup_page_ts"],{

/***/ 305:
/*!*******************************************************************!*\
  !*** ./src/app/cancel-booking-popup/cancel-booking-popup.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelBookingPopupPage": () => (/* binding */ CancelBookingPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cancel_booking_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-booking-popup.page.html?ngResource */ 53801);
/* harmony import */ var _cancel_booking_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-booking-popup.page.scss?ngResource */ 77105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);







let CancelBookingPopupPage = class CancelBookingPopupPage {
    constructor(modalCtrlr, checkUser, api) {
        this.modalCtrlr = modalCtrlr;
        this.checkUser = checkUser;
        this.api = api;
    }
    ngOnInit() {
        console.log("hours_left", this.hours_left);
    }
    ngAfterViewInit() {
        // console.log("BookingId: ",this.booking_id);
    }
    justCloseModal() {
        return this.modalCtrlr.dismiss(null, 'closeModal');
    }
    cancelBooking() {
        let data = {
            appuser_id: this.checkUser.appUserId,
            booking_id: this.booking_id,
            status: "Cancelled"
        };
        this.api.showLoading();
        this.api.sendRequest("cancel_booking", data).subscribe((res) => {
            this.api.hideLoading();
            console.log("Response: ", res);
            if (res.status == 'success') {
                this.api.presentToast('Cancelled');
                return this.modalCtrlr.dismiss('Booking Canceled', 'cancelBooking');
            }
            else if (res.status == 'error') {
                this.api.presentToast(res.message);
                return this.modalCtrlr.dismiss('Booking Canceled', 'cancelBooking');
            }
            else {
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("Error: ", err);
            this.modalCtrlr.dismiss();
        });
    }
};
CancelBookingPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_2__.CheckUserService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
CancelBookingPopupPage.propDecorators = {
    booking_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    hours_left: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CancelBookingPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cancel-booking-popup',
        template: _cancel_booking_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cancel_booking_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CancelBookingPopupPage);



/***/ }),

/***/ 77105:
/*!********************************************************************************!*\
  !*** ./src/app/cancel-booking-popup/cancel-booking-popup.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:white !important;\n}\n\n.wrapper {\n  padding: 20px 21px 25px 27px;\n}\n\n.heading {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: #8000FF;\n}\n\n.heading_description {\n  text-align: center;\n  width: 90%;\n  margin: 9.5px auto 0px;\n  color: #B0B0B0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.cancelling_terms {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #FF0000;\n  text-align: center;\n  width: 90%;\n  margin: 18.5px auto 0px;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 60%;\n  height: 44px;\n  margin: 0px;\n  --box-shadow:none;\n}\n\n.cancel_btn {\n  --background:white;\n  --border-radius:0px;\n  width: 60%;\n  height: 44px;\n  --box-shadow:none;\n  --border-color:#D93A3A;\n  --border-style:solid;\n  --border-width:1.5px;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n.btn2-text {\n  font-size: 16px;\n  font-weight: 500;\n  color: #D93A3A;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmNlbC1ib29raW5nLXBvcHVwLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXDM2MFVBRVxcc3JjXFxhcHBcXGNhbmNlbC1ib29raW5nLXBvcHVwXFxjYW5jZWwtYm9va2luZy1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtBQ1FKIiwiZmlsZSI6ImNhbmNlbC1ib29raW5nLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIxcHggMjVweCAyN3B4O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG59XHJcbi5oZWFkaW5nX2Rlc2NyaXB0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogOS41cHggYXV0byAwcHg7XHJcbiAgICBjb2xvcjogI0IwQjBCMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNhbmNlbGxpbmdfdGVybXN7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxOC41cHggYXV0byAwcHg7XHJcbn1cclxuLmludml0ZV9idG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5jYW5jZWxfYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG4gICAgLy8gbWFyZ2luOiAwcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjojRDkzQTNBO1xyXG4gICAgLS1ib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDoxLjVweDtcclxufVxyXG4uYnRuLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5idG4yLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNEOTNBM0E7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4vLyAgIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIFxyXG4vLyAgIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIFxyXG4vLyAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IFxyXG4vLyAgICAgLmNhbmNlbGxpbmdfdGVybXN7XHJcbi8vICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICB3aWR0aDogODUlO1xyXG4vLyAgICAgICAgIG1hcmdpbjogMTguNXB4IGF1dG8gMHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmhlYWRpbmdfZGVzY3JpcHRpb257XHJcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgIHdpZHRoOiA4NSU7XHJcbi8vICAgICAgICAgbWFyZ2luOiA5LjVweCBhdXRvIDBweDtcclxuLy8gICAgICAgICBjb2xvcjogI0IwQjBCMDtcclxuLy8gICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICB9XHJcbi8vIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHggMjFweCAyNXB4IDI3cHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4MDAwRkY7XG59XG5cbi5oZWFkaW5nX2Rlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDkuNXB4IGF1dG8gMHB4O1xuICBjb2xvcjogI0IwQjBCMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYW5jZWxsaW5nX3Rlcm1zIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRkYwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMTguNXB4IGF1dG8gMHB4O1xufVxuXG4uaW52aXRlX2J0biB7XG4gIC0tYmFja2dyb3VuZDojODAwMEZGO1xuICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbjogMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmNhbmNlbF9idG4ge1xuICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czowcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNDRweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiNEOTNBM0E7XG4gIC0tYm9yZGVyLXN0eWxlOnNvbGlkO1xuICAtLWJvcmRlci13aWR0aDoxLjVweDtcbn1cblxuLmJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5idG4yLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRDkzQTNBO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */";

/***/ }),

/***/ 53801:
/*!********************************************************************************!*\
  !*** ./src/app/cancel-booking-popup/cancel-booking-popup.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: right;\">\n      <img (click)=\"justCloseModal()\" src=\"assets/images/icons/close_modal.svg\" alt=\"\">\n    </div>\n    <div class=\"heading\">Cancel?</div>\n    <div class=\"heading_description\">Are you sure you want to cancel your booking?</div>\n    <div class=\"cancelling_terms\">* Cancelling booking will result in 10% cut of your payment.</div>\n    <div class=\"cancelling_terms\" style=\"margin-top: 9.5px;\">* Booking can not be cancelled if 24 hours are remaining in starting.</div>\n    <div style=\"text-align: center;margin-top: 21px;\" *ngIf=\"hours_left>24\">\n      <ion-button class=\"invite_btn\" (click)=\"cancelBooking()\">\n        <span class=\"btn-text\" >Okay</span>\n      </ion-button>\n    </div>\n    <div style=\"text-align: center;margin-top: 16px;\" *ngIf=\"hours_left>24\">\n      <ion-button class=\"cancel_btn\" (click)=\"justCloseModal()\">\n        <span class=\"btn2-text\" >No</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_cancel-booking-popup_cancel-booking-popup_page_ts.js.map