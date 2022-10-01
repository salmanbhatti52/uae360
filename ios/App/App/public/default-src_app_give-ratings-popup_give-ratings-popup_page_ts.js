"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_give-ratings-popup_give-ratings-popup_page_ts"],{

/***/ 7227:
/*!***************************************************************!*\
  !*** ./src/app/give-ratings-popup/give-ratings-popup.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiveRatingsPopupPage": () => (/* binding */ GiveRatingsPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _give_ratings_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./give-ratings-popup.page.html?ngResource */ 6274);
/* harmony import */ var _give_ratings_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./give-ratings-popup.page.scss?ngResource */ 3244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let GiveRatingsPopupPage = class GiveRatingsPopupPage {
    constructor(modalCtrlr) {
        this.modalCtrlr = modalCtrlr;
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
        return this.modalCtrlr.dismiss(this.feedback, 'sendFeedback');
    }
    rateStar(val) {
        if (val == 1) {
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
GiveRatingsPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-give-ratings-popup',
        template: _give_ratings_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_give_ratings_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiveRatingsPopupPage);



/***/ }),

/***/ 3244:
/*!****************************************************************************!*\
  !*** ./src/app/give-ratings-popup/give-ratings-popup.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:white !important;\n}\n\n.wrapper {\n  padding: 20px 21px 25px 27px;\n}\n\n.invite_btn {\n  --background:#8000FF;\n  --border-radius:0px;\n  width: 70%;\n  height: 44px;\n  margin-top: 9px;\n  --box-shadow:none;\n}\n\n.btn-text {\n  font-size: 16px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n}\n\n.heading {\n  text-align: center;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 32px;\n  font-weight: 600;\n  color: #8000FF;\n}\n\n.heading_description {\n  text-align: center;\n  width: 78%;\n  margin: 6.5px auto 0px;\n  color: #B0B0B0;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.margin_row {\n  text-align: center;\n  margin-top: 20px;\n  padding-left: 11px;\n}\n\n.textarea {\n  margin-top: 28px;\n  border: 1.5px solid #D4DCE1;\n  border-radius: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  --placeholder-color: #B0B0B0;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n  --color: black;\n  height: auto;\n  max-height: 95px;\n  overflow: scroll;\n}\n\n.characters_limit {\n  text-align: right;\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: #8000FF;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdmUtcmF0aW5ncy1wb3B1cC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFwzNjBVQUVcXHNyY1xcYXBwXFxnaXZlLXJhdGluZ3MtcG9wdXBcXGdpdmUtcmF0aW5ncy1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1FKOztBRE5BO0VBQ0ksaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDU0oiLCJmaWxlIjoiZ2l2ZS1yYXRpbmdzLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIxcHggMjVweCAyN3B4O1xyXG59XHJcbi5pbnZpdGVfYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM4MDAwRkY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MHB4O1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0bi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW5pc3QnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM4MDAwRkY7XHJcbn1cclxuLmhlYWRpbmdfZGVzY3JpcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzglO1xyXG4gICAgbWFyZ2luOiA2LjVweCBhdXRvIDBweDtcclxuICAgIGNvbG9yOiAjQjBCMEIwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm1hcmdpbl9yb3d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG59XHJcbi50ZXh0YXJlYXtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNENERDRTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNCMEIwQjA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA5NXB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG4uY2hhcmFjdGVyc19saW1pdHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzgwMDBGRjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweCAyMXB4IDI1cHggMjdweDtcbn1cblxuLmludml0ZV9idG4ge1xuICAtLWJhY2tncm91bmQ6IzgwMDBGRjtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uYnRuLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4MDAwRkY7XG59XG5cbi5oZWFkaW5nX2Rlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzglO1xuICBtYXJnaW46IDYuNXB4IGF1dG8gMHB4O1xuICBjb2xvcjogI0IwQjBCMDtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWFyZ2luX3JvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMXB4O1xufVxuXG4udGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNENERDRTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiVXJiYW5pc3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjQjBCMEIwO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDk1cHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5jaGFyYWN0ZXJzX2xpbWl0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM4MDAwRkY7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */";

/***/ }),

/***/ 6274:
/*!****************************************************************************!*\
  !*** ./src/app/give-ratings-popup/give-ratings-popup.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"text-align: right;\">\n      <img (click)=\"closeModal()\" src=\"assets/images/icons/close_modal.svg\" alt=\"\">\n    </div>\n    <div class=\"heading\">Ratings</div>\n    <div class=\"heading_description\">Give your Ratings and Feedback</div>\n    <div class=\"margin_row\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar1==false;\" (click)=\"rateStar(1)\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar1==true;\" (click)=\"rateStar(1)\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar2==false;\" (click)=\"rateStar(2)\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar2==true;\" (click)=\"rateStar(2)\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar3==false;\" (click)=\"rateStar(3)\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar3==true;\" (click)=\"rateStar(3)\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar4==false;\" (click)=\"rateStar(4)\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar4==true;\" (click)=\"rateStar(4)\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/not_lighted_star.svg\" alt=\"\" *ngIf=\"rateStar5==false;\" (click)=\"rateStar(5)\">\n      <img style=\"margin-right: 11px;\" src=\"assets/images/icons/lighted_star.svg\" alt=\"\" *ngIf=\"rateStar5==true;\" (click)=\"rateStar(5)\">\n      \n    </div>\n    <ion-textarea auto-grow=\"true\" name=\"feedback\"  type=\"text\" maxlength=\"150\" class=\"textarea\" rows=\"3\" cols=\"20\" placeholder=\"Add your feedback\" [(ngModel)]=\"feedback\"></ion-textarea>\n    <div class=\"characters_limit\">*Maximum 150 characters</div>\n    <div style=\"text-align: center;margin-top: 16px;\">\n      <ion-button class=\"invite_btn\" (click)=\"sendFeedback()\">\n        <span class=\"btn-text\">Okay</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_give-ratings-popup_give-ratings-popup_page_ts.js.map