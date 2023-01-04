"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_give-ratings-popup_give-ratings-popup_page_ts"],{

/***/ 37227:
/*!***************************************************************!*\
  !*** ./src/app/give-ratings-popup/give-ratings-popup.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiveRatingsPopupPage": () => (/* binding */ GiveRatingsPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _give_ratings_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./give-ratings-popup.page.html?ngResource */ 76274);
/* harmony import */ var _give_ratings_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./give-ratings-popup.page.scss?ngResource */ 43244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ 47852);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);







let GiveRatingsPopupPage = class GiveRatingsPopupPage {
    constructor(modalCtrlr, checkUser, api) {
        this.modalCtrlr = modalCtrlr;
        this.checkUser = checkUser;
        this.api = api;
        this.rateStar1 = false;
        this.rateStar2 = false;
        this.rateStar3 = false;
        this.rateStar4 = false;
        this.rateStar5 = false;
    }
    ngOnInit() {
    }
    closeModal() {
        return this.modalCtrlr.dismiss(null, 'closeModal');
    }
    sendFeedback() {
        let data = {
            users_customers_id: this.checkUser.appUserId,
            cars_id: this.car_id,
            comments: this.textarea.value,
            rate_stars: this.ratingValue
        };
        console.log("Data Obj: ", data);
        this.api.showLoading();
        this.api.sendRequest('rate_cars', data).subscribe((res) => {
            this.api.hideLoading();
            console.log('Response: ', res);
            if (res.status == 'success') {
                this.api.presentToast('Rated Successfully');
            }
            else if (res.status == 'error') {
                this.api.presentToast(res.message);
            }
            else {
            }
        }, (err) => {
            this.api.hideLoading();
            console.log("API Call Error: ", err);
        });
        return this.modalCtrlr.dismiss(this.feedback, 'sendFeedback');
    }
    rateStar(val) {
        if (val == 1) {
            this.ratingValue = val;
            if (this.rateStar1 == false) {
                this.rateStar1 = true;
            }
            else {
                this.rateStar1 = false;
                this.rateStar2 = false;
                this.rateStar3 = false;
                this.rateStar4 = false;
                this.rateStar5 = false;
            }
        }
        else if (val == 2) {
            this.ratingValue = val;
            if (this.rateStar2 == false) {
                this.rateStar1 = true;
                this.rateStar2 = true;
            }
            else {
                this.rateStar2 = false;
                this.rateStar3 = false;
                this.rateStar4 = false;
                this.rateStar5 = false;
            }
        }
        else if (val == 3) {
            this.ratingValue = val;
            if (this.rateStar3 == false) {
                this.rateStar1 = true;
                this.rateStar2 = true;
                this.rateStar3 = true;
            }
            else {
                this.rateStar3 = false;
                this.rateStar4 = false;
                this.rateStar5 = false;
            }
        }
        else if (val == 4) {
            this.ratingValue = val;
            if (this.rateStar4 == false) {
                this.rateStar1 = true;
                this.rateStar2 = true;
                this.rateStar3 = true;
                this.rateStar4 = true;
            }
            else {
                this.rateStar4 = false;
                this.rateStar5 = false;
            }
        }
        else if (val == 5) {
            this.ratingValue = val;
            if (this.rateStar5 == false) {
                this.rateStar1 = true;
                this.rateStar2 = true;
                this.rateStar3 = true;
                this.rateStar4 = true;
                this.rateStar5 = true;
            }
            else {
                this.rateStar5 = false;
            }
        }
        else {
        }
    }
};
GiveRatingsPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _check_user_service__WEBPACK_IMPORTED_MODULE_2__.CheckUserService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
GiveRatingsPopupPage.propDecorators = {
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTextarea,] }],
    car_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
GiveRatingsPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-give-ratings-popup',
        template: _give_ratings_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_give_ratings_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiveRatingsPopupPage);



/***/ }),

/***/ 43244:
/*!****************************************************************************!*\
  !*** ./src/app/give-ratings-popup/give-ratings-popup.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:white !important;\n}\n\n.wrapper {\n  padding: 20px 21px 25px 27px;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 70%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.star_margin {\n  margin-right: 11px;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n.heading {\n  text-align: center;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 32px;\n  font-weight: 600;\n  color: #8000FF;\n}\n\n.heading_description {\n  text-align: center;\n  width: 78%;\n  margin: 6.5px auto 0px;\n  color: #B0B0B0;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.margin_row {\n  text-align: center;\n  margin-top: 20px;\n  padding-left: 11px;\n}\n\n.textarea {\n  margin-top: 28px;\n  border: 1.5px solid #D4DCE1;\n  border-radius: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  --placeholder-color: #B0B0B0;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n  --color: black;\n  height: auto;\n  max-height: 95px;\n  overflow: scroll;\n}\n\n.characters_limit {\n  text-align: right;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: #8000FF;\n  margin-top: 5px;\n}\n\n.btn_div {\n  text-align: center;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdmUtcmF0aW5ncy1wb3B1cC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxnaXZlLXJhdGluZ3MtcG9wdXBcXGdpdmUtcmF0aW5ncy1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURQQTtFQUNJLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1VKOztBRFJBO0VBQ0ksa0JBQUE7RUFBbUIsZ0JBQUE7QUNZdkIiLCJmaWxlIjoiZ2l2ZS1yYXRpbmdzLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIxcHggMjVweCAyN3B4O1xyXG59XHJcbi5pbnZpdGVfYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MHB4O1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLnN0YXJfbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG59XHJcbi5idG4tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1VyYmFuaXN0JyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjODAwMEZGO1xyXG59XHJcbi5oZWFkaW5nX2Rlc2NyaXB0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDc4JTtcclxuICAgIG1hcmdpbjogNi41cHggYXV0byAwcHg7XHJcbiAgICBjb2xvcjogI0IwQjBCMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5tYXJnaW5fcm93e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTFweDtcclxufVxyXG4udGV4dGFyZWF7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjRDREQ0UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjQjBCMEIwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogOTVweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuLmNoYXJhY3RlcnNfbGltaXR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmJ0bl9kaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLXRvcDogMTZweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweCAyMXB4IDI1cHggMjdweDtcbn1cblxuLmludml0ZV9idG4ge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uc3Rhcl9tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG5cbi5idG4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzgwMDBGRjtcbn1cblxuLmhlYWRpbmdfZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3OCU7XG4gIG1hcmdpbjogNi41cHggYXV0byAwcHg7XG4gIGNvbG9yOiAjQjBCMEIwO1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXJnaW5fcm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDExcHg7XG59XG5cbi50ZXh0YXJlYSB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgI0Q0RENFMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJVcmJhbmlzdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNCMEIwQjA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogOTVweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmNoYXJhY3RlcnNfbGltaXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzgwMDBGRjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYnRuX2RpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iXX0= */";

/***/ }),

/***/ 76274:
/*!****************************************************************************!*\
  !*** ./src/app/give-ratings-popup/give-ratings-popup.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: right;\">\n      <img (click)=\"closeModal()\" src=\"assets/images/icons/close_modal.svg\" alt=\"\">\n    </div>\n    <div class=\"heading\">Ratings</div>\n    <div class=\"heading_description\">Give your Ratings and Feedback</div>\n    <div class=\"margin_row\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar1==false;\" (click)=\"rateStar(1)\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar1==true;\" (click)=\"rateStar(1)\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar2==false;\" (click)=\"rateStar(2)\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar2==true;\" (click)=\"rateStar(2)\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar3==false;\" (click)=\"rateStar(3)\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar3==true;\" (click)=\"rateStar(3)\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar4==false;\" (click)=\"rateStar(4)\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar4==true;\" (click)=\"rateStar(4)\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar5==false;\" (click)=\"rateStar(5)\">\n      <img class=\"star_margin\"  src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar5==true;\" (click)=\"rateStar(5)\">\n      \n    </div>\n    <ion-textarea #textarea auto-grow=\"true\" name=\"feedback\"  type=\"text\" maxlength=\"150\" class=\"textarea\" rows=\"3\" cols=\"20\" placeholder=\"Add your feedback\" [(ngModel)]=\"feedback\"></ion-textarea>\n    <div class=\"characters_limit\">*Maximum 150 characters</div>\n    <div class=\"btn_div\">\n      <ion-button class=\"invite_btn\" (click)=\"sendFeedback()\">\n        <span class=\"btn-text\">Okay</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_give-ratings-popup_give-ratings-popup_page_ts.js.map