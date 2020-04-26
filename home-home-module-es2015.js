(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"ahThemeToolBar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" class=\"ahThemeButtonMenu\"></ion-menu-button>\n      <img src=\"../assets/images/ahlogo.png\" class=\"ahLogo\" />\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button color=\"medium\" (click)=\"openProfile()\">\n        <ion-icon src=\"../assets/icon/usericon.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-thumbnail slot=\"end\" style=\"padding:0.5em\" (click)=\"openProfile($event)\">\n      <img src=\"../assets/icon/usericon.svg\">\n    </ion-thumbnail>\n    <ion-title class='ion-text-center titleWhite'>Patient Portal</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background-image\">\n  <section class=\"w-100\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"col-md-3 col-xs-12 col-sm-12\"></div>\n        <div class=\"col-md-6 myrow flip-card\">\n          <div class=\"diamond diamond1 flip-card-inner\" [routerLink]=\"['/laboratory']\">\n            <div class=\"diamondCard text-center flip-card-front\">\n              <img src=\"../../assets/icon/icon_flask.svg\" height=\"40em\">\n              <br />\n              <h3 class=\"title\">LABORATORY</h3>\n              <span class=\"subtitle\">Access to the laboratory reports</span>\n            </div>\n            <div class=\"diamondCard text-center flip-card-back\">\n              <h3 class=\"title\">LABORATORY BACK</h3>\n              <span class=\"subtitle\">Access to the laboratory reports</span>\n            </div>\n          </div>\n          <div class=\"diamond diamond2\" [routerLink]=\"['/nutrition']\">\n            <div class=\"diamondCard text-center\">\n              <img src=\"../../assets/icon/icon_nutrition.svg\" height=\"40em\">\n              <br />\n              <h3 class=\"title\">NUTRITION</h3>\n              <span class=\"subtitle\">Access to the nutrition care reports</span>\n            </div>\n          </div>\n          <div class=\"diamond diamond3\" [routerLink]=\"['/radiology']\">\n            <div class=\"diamondCard text-center\">\n              <img src=\"../../assets/icon/icon_radiology.svg\" height=\"40em\">\n              <br />\n              <h3 class=\"title\">RADIOLOGY</h3>\n              <span class=\"subtitle\">Access to the radiology reports and images</span>\n            </div>\n          </div>\n          <div class=\"diamond diamond4\" [routerLink]=\"['/medical-reports']\">\n            <div class=\"diamondCard text-center\">\n              <img src=\"../../assets/icon/icon_report.svg\" height=\"40em\">\n              <br />\n              <h3 class=\"title\">MEDICAL REPORTS</h3>\n              <span class=\"subtitle\">Access General Medical Reports, ER and Hospital Discharge reports</span>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"col-md-6 col-xs-12 col-sm-12\">\n          <ul>\n            <li class=\"item1\"></li>\n            <li class=\"item2\"></li>\n            <li class=\"item3\"></li>\n            <li class=\"item4\"></li>\n          </ul>\n\n        </div> -->\n        <div class=\"col-md-3 col-xs-12 col-sm-12\"></div>\n      </div>\n    </div>\n  </section>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
        entryComponents: [] //[UserPopoverComponent]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.ahLogo {\n  display: inline-block;\n  width: 13em;\n  height: 3.5em;\n}\n\n.background-image {\n  background: url('bg-02.jpg') no-repeat 100% 100%;\n  --background: url('bg-02.jpg') no-repeat 100% 100%;\n}\n\n.ahThemeToolBar {\n  --background: rgb(190,230,239);\n}\n\n.ahThemeButtonMenu {\n  --color:rgb(87,143,182);\n}\n\n.titleWhite {\n  color: transparent;\n}\n\n.diamond {\n  position: relative;\n  width: 30%;\n  padding-bottom: 30%;\n  margin-right: -100%;\n  float: left;\n  overflow: hidden;\n  transform: rotate(45deg);\n}\n\n.diamond {\n  position: relative;\n  width: 30%;\n  padding-bottom: 30%;\n  margin-right: -100%;\n  float: left;\n  overflow: hidden;\n  transform: rotate(45deg);\n}\n\n.diamond-content {\n  transform: rotate(-45deg);\n}\n\n.diamond1 {\n  background: #578fb6;\n  margin-top: -50.5%;\n  margin-left: 40.25%;\n  width: 18em;\n  height: 18em;\n}\n\n.diamond2 {\n  background: #66cbdd;\n  margin-top: -27.5%;\n  margin-left: 17.5%;\n  width: 18em;\n  height: 18em;\n}\n\n.diamond3 {\n  background: #66cbdd;\n  margin-top: -27.5%;\n  margin-left: 63.5%;\n  width: 18em;\n  height: 18em;\n}\n\n.diamond4 {\n  background: #578fb6;\n  margin-top: -4.5%;\n  margin-left: 40.25%;\n  width: 18em;\n  height: 18em;\n}\n\n.diamondTile {\n  width: 25%;\n  padding-bottom: 25%;\n  background: red;\n  margin-right: -100%;\n  float: left;\n  overflow: hidden;\n  transform: rotate(45deg);\n}\n\n.diamondCard {\n  transform: rotate(-45deg);\n  width: 12.5em;\n  height: 12.5em;\n  margin-left: 15%;\n  margin-top: 15%;\n}\n\n.title {\n  color: white;\n  font-weight: bold;\n}\n\n.subtitle {\n  color: white;\n  font-style: italic;\n}\n\n.vertical-align-content > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n}\n\n.myrow {\n  padding-top: 30%;\n  padding-bottom: 10%;\n}\n\n.diamond {\n  position: relative;\n  width: 30%;\n  padding-bottom: 30%;\n  margin-right: -100%;\n  float: left;\n  overflow: hidden;\n  transform: rotate(45deg);\n}\n\n.diamond-content {\n  transform: rotate(-45deg);\n}\n\n.diamond1 {\n  background: #578fb6;\n  margin-top: -50.5%;\n  margin-left: 40.25%;\n  width: 18em;\n  height: 18em;\n}\n\n.diamond2 {\n  background: #66cbdd;\n  margin-top: -27.5%;\n  margin-left: 17.5%;\n  width: 18em;\n  height: 18em;\n}\n\n.diamond3 {\n  background: #66cbdd;\n  margin-top: -27.5%;\n  margin-left: 63.5%;\n  width: 18em;\n  height: 18em;\n}\n\n.diamond4 {\n  background: #578fb6;\n  margin-top: -4.5%;\n  margin-left: 40.25%;\n  width: 18em;\n  height: 18em;\n}\n\n.diamondTile {\n  width: 25%;\n  padding-bottom: 25%;\n  background: red;\n  margin-right: -100%;\n  float: left;\n  overflow: hidden;\n  transform: rotate(45deg);\n}\n\n.diamondCard {\n  transform: rotate(-45deg);\n  width: 12.5em;\n  height: 12.5em;\n  margin-left: 15%;\n  margin-top: 15%;\n}\n\n.flip-card {\n  background-color: transparent;\n}\n\n.flip-card-inner {\n  position: relative;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.flip-card-back {\n  background: #578fb6;\n  transform: rotateY(180deg);\n}\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotateY(0deg) rotate(-45deg);\n  }\n  to {\n    transform: rotateY(360deg) rotate(-45deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotateY(0deg) rotate(-45deg);\n  }\n  to {\n    transform: rotateY(360deg) rotate(-45deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWtzaGl0ZG9zaGkvRGVza3RvcC9BTUMvV29ya3NwYWNlL1BhdGllbnRQb3J0YWxJb25pYy9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0RBQUE7RUFDQSxrREFBQTtBQ0ZGOztBREtBO0VBQ0UsOEJBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNKRjs7QURPQTtFQUNFLHlCQUFBO0FDSkY7O0FET0E7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTkY7O0FEU0E7RUFFRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNSRjs7QURXQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSRjs7QURXQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ1JGOztBRFdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDUkY7O0FEV0E7RUFFSyx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUNUTDs7QURZQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNURjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ1ZGOztBRGFBO0VBQ0UseUJBQUE7QUNWRjs7QURhQTtFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEY7O0FEY0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1hGOztBRGNBO0VBQ0UsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNaRjs7QURlQTtFQUVFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDYkY7O0FEaUJBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNkRjs7QURpQkE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZEY7O0FEaUJBO0VBQ0UsNkJBQUE7QUNkRjs7QURrQkE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNmRjs7QUR1QkE7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsbUNBQUE7RUFDQSwyQkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0FDdEJGOztBRHlCQTtFQUNFO0lBQ0UsdUNBQUE7RUN0QkY7RUR3QkE7SUFDRSx5Q0FBQTtFQ3RCRjtBQUNGOztBRGdCQTtFQUNFO0lBQ0UsdUNBQUE7RUN0QkY7RUR3QkE7SUFDRSx5Q0FBQTtFQ3RCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5haExvZ297XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEzZW07XG4gIGhlaWdodDogMy41ZW07XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdle1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctMDIuanBnJykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctMDIuanBnJykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcbn1cblxuLmFoVGhlbWVUb29sQmFye1xuICAtLWJhY2tncm91bmQ6IHJnYigxOTAsMjMwLDIzOSk7XG59XG5cbi5haFRoZW1lQnV0dG9uTWVudXtcbiAgLS1jb2xvcjpyZ2IoODcsMTQzLDE4Mik7XG59XG5cbi50aXRsZVdoaXRle1xuICBjb2xvcjp0cmFuc3BhcmVudDtcbn1cblxuLmRpYW1vbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctYm90dG9tOiAzMCU7XG4gIC8vIGJhY2tncm91bmQ6IHJlZDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmRpYW1vbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctYm90dG9tOiAzMCU7XG4gIC8vIGJhY2tncm91bmQ6IHJlZDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmRpYW1vbmQtY29udGVudHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmRpYW1vbmQxIHtcbiAgLy8gYmFja2dyb3VuZDogcmdiKDE5MCwyMzAsMjM5KTtcbiAgYmFja2dyb3VuZDogcmdiKDg3LDE0MywxODIpO1xuICBtYXJnaW4tdG9wOiAtNTAuNSU7XG4gIG1hcmdpbi1sZWZ0OiA0MC4yNSU7XG4gIHdpZHRoOiAxOGVtO1xuICBoZWlnaHQ6IDE4ZW07XG59XG5cbi5kaWFtb25kMiB7XG4gIGJhY2tncm91bmQ6IHJnYigxMDIsMjAzLDIyMSk7XG4gIG1hcmdpbi10b3A6IC0yNy41JTtcbiAgbWFyZ2luLWxlZnQ6IDE3LjUlO1xuICB3aWR0aDogMThlbTtcbiAgaGVpZ2h0OiAxOGVtO1xufVxuXG4uZGlhbW9uZDMge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTAyLDIwMywyMjEpO1xuICBcbiAgbWFyZ2luLXRvcDogLTI3LjUlO1xuICBtYXJnaW4tbGVmdDogNjMuNSU7XG4gIHdpZHRoOiAxOGVtO1xuICBoZWlnaHQ6IDE4ZW07XG59XG5cbi5kaWFtb25kNCB7XG4gIC8vIGJhY2tncm91bmQ6IHJnYigxOTAsMjMwLDIzOSk7XG4gIGJhY2tncm91bmQ6IHJnYig4NywxNDMsMTgyKTtcbiAgbWFyZ2luLXRvcDogLTQuNSU7XG4gIG1hcmdpbi1sZWZ0OiA0MC4yNSU7XG4gIHdpZHRoOiAxOGVtO1xuICBoZWlnaHQ6IDE4ZW07XG59XG5cblxuLmRpYW1vbmRUaWxle1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nLWJvdHRvbTogMjUlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5kaWFtb25kQ2FyZHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgd2lkdGg6IDEyLjVlbTtcbiAgaGVpZ2h0OiAxMi41ZW07XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi10b3A6IDE1JTsgXG59XG5cbi50aXRsZXtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1YnRpdGxle1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnQgPiAqXG57XG4gICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbn1cblxuLm15cm93IHtcbiAgcGFkZGluZy10b3A6IDMwJTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmRpYW1vbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctYm90dG9tOiAzMCU7XG4gIC8vIGJhY2tncm91bmQ6IHJlZDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmRpYW1vbmQtY29udGVudHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmRpYW1vbmQxIHtcbiAgLy8gYmFja2dyb3VuZDogcmdiKDE5MCwyMzAsMjM5KTtcbiAgYmFja2dyb3VuZDogcmdiKDg3LDE0MywxODIpO1xuICBtYXJnaW4tdG9wOiAtNTAuNSU7XG4gIG1hcmdpbi1sZWZ0OiA0MC4yNSU7XG4gIHdpZHRoOiAxOGVtO1xuICBoZWlnaHQ6IDE4ZW07XG59XG5cbi5kaWFtb25kMiB7XG4gIGJhY2tncm91bmQ6IHJnYigxMDIsMjAzLDIyMSk7XG4gIG1hcmdpbi10b3A6IC0yNy41JTtcbiAgbWFyZ2luLWxlZnQ6IDE3LjUlO1xuICB3aWR0aDogMThlbTtcbiAgaGVpZ2h0OiAxOGVtO1xufVxuXG4uZGlhbW9uZDMge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTAyLDIwMywyMjEpO1xuICBcbiAgbWFyZ2luLXRvcDogLTI3LjUlO1xuICBtYXJnaW4tbGVmdDogNjMuNSU7XG4gIHdpZHRoOiAxOGVtO1xuICBoZWlnaHQ6IDE4ZW07XG59XG5cbi5kaWFtb25kNCB7XG4gIC8vIGJhY2tncm91bmQ6IHJnYigxOTAsMjMwLDIzOSk7XG4gIGJhY2tncm91bmQ6IHJnYig4NywxNDMsMTgyKTtcbiAgbWFyZ2luLXRvcDogLTQuNSU7XG4gIG1hcmdpbi1sZWZ0OiA0MC4yNSU7XG4gIHdpZHRoOiAxOGVtO1xuICBoZWlnaHQ6IDE4ZW07XG59XG5cblxuLmRpYW1vbmRUaWxle1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nLWJvdHRvbTogMjUlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5kaWFtb25kQ2FyZHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgd2lkdGg6IDEyLjVlbTtcbiAgaGVpZ2h0OiAxMi41ZW07XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi10b3A6IDE1JTsgXG59XG5cbi5mbGlwLWNhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBcbn1cblxuLmZsaXAtY2FyZC1pbm5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVye1xuICAvLyBhbmltYXRpb246IHNwaW4gM3MgaW5maW5pdGUgbGluZWFyO1xuICAvL3RyYW5zZm9ybTogO1xufVxuXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2t7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5mbGlwLWNhcmQtYmFja3tcbiAgYmFja2dyb3VuZDogcmdiKDg3LDE0MywxODIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7IFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGUoLTQ1ZGVnKTsgXG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHJvdGF0ZSgtNDVkZWcpOyBcbiAgfVxufVxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmFoTG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEzZW07XG4gIGhlaWdodDogMy41ZW07XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy0wMi5qcGdcIikgbm8tcmVwZWF0IDEwMCUgMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JnLTAyLmpwZ1wiKSBuby1yZXBlYXQgMTAwJSAxMDAlO1xufVxuXG4uYWhUaGVtZVRvb2xCYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigxOTAsMjMwLDIzOSk7XG59XG5cbi5haFRoZW1lQnV0dG9uTWVudSB7XG4gIC0tY29sb3I6cmdiKDg3LDE0MywxODIpO1xufVxuXG4udGl0bGVXaGl0ZSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmRpYW1vbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctYm90dG9tOiAzMCU7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5kaWFtb25kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nLWJvdHRvbTogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uZGlhbW9uZC1jb250ZW50IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmRpYW1vbmQxIHtcbiAgYmFja2dyb3VuZDogIzU3OGZiNjtcbiAgbWFyZ2luLXRvcDogLTUwLjUlO1xuICBtYXJnaW4tbGVmdDogNDAuMjUlO1xuICB3aWR0aDogMThlbTtcbiAgaGVpZ2h0OiAxOGVtO1xufVxuXG4uZGlhbW9uZDIge1xuICBiYWNrZ3JvdW5kOiAjNjZjYmRkO1xuICBtYXJnaW4tdG9wOiAtMjcuNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNy41JTtcbiAgd2lkdGg6IDE4ZW07XG4gIGhlaWdodDogMThlbTtcbn1cblxuLmRpYW1vbmQzIHtcbiAgYmFja2dyb3VuZDogIzY2Y2JkZDtcbiAgbWFyZ2luLXRvcDogLTI3LjUlO1xuICBtYXJnaW4tbGVmdDogNjMuNSU7XG4gIHdpZHRoOiAxOGVtO1xuICBoZWlnaHQ6IDE4ZW07XG59XG5cbi5kaWFtb25kNCB7XG4gIGJhY2tncm91bmQ6ICM1NzhmYjY7XG4gIG1hcmdpbi10b3A6IC00LjUlO1xuICBtYXJnaW4tbGVmdDogNDAuMjUlO1xuICB3aWR0aDogMThlbTtcbiAgaGVpZ2h0OiAxOGVtO1xufVxuXG4uZGlhbW9uZFRpbGUge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nLWJvdHRvbTogMjUlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5kaWFtb25kQ2FyZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHdpZHRoOiAxMi41ZW07XG4gIGhlaWdodDogMTIuNWVtO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udmVydGljYWwtYWxpZ24tY29udGVudCA+ICoge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5teXJvdyB7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5kaWFtb25kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nLWJvdHRvbTogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uZGlhbW9uZC1jb250ZW50IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmRpYW1vbmQxIHtcbiAgYmFja2dyb3VuZDogIzU3OGZiNjtcbiAgbWFyZ2luLXRvcDogLTUwLjUlO1xuICBtYXJnaW4tbGVmdDogNDAuMjUlO1xuICB3aWR0aDogMThlbTtcbiAgaGVpZ2h0OiAxOGVtO1xufVxuXG4uZGlhbW9uZDIge1xuICBiYWNrZ3JvdW5kOiAjNjZjYmRkO1xuICBtYXJnaW4tdG9wOiAtMjcuNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNy41JTtcbiAgd2lkdGg6IDE4ZW07XG4gIGhlaWdodDogMThlbTtcbn1cblxuLmRpYW1vbmQzIHtcbiAgYmFja2dyb3VuZDogIzY2Y2JkZDtcbiAgbWFyZ2luLXRvcDogLTI3LjUlO1xuICBtYXJnaW4tbGVmdDogNjMuNSU7XG4gIHdpZHRoOiAxOGVtO1xuICBoZWlnaHQ6IDE4ZW07XG59XG5cbi5kaWFtb25kNCB7XG4gIGJhY2tncm91bmQ6ICM1NzhmYjY7XG4gIG1hcmdpbi10b3A6IC00LjUlO1xuICBtYXJnaW4tbGVmdDogNDAuMjUlO1xuICB3aWR0aDogMThlbTtcbiAgaGVpZ2h0OiAxOGVtO1xufVxuXG4uZGlhbW9uZFRpbGUge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nLWJvdHRvbTogMjUlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5kaWFtb25kQ2FyZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHdpZHRoOiAxMi41ZW07XG4gIGhlaWdodDogMTIuNWVtO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbi5mbGlwLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZsaXAtY2FyZC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmZsaXAtY2FyZC1iYWNrIHtcbiAgYmFja2dyb3VuZDogIzU3OGZiNjtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZykgcm90YXRlKC00NWRlZyk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-popover/user-popover.component */ "./src/app/user-popover/user-popover.component.ts");




let HomePage = class HomePage {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.tiles = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.tiles.push({ id: 1, title: 'Laboratory', subtitle: 'Access to the laboratory reports', icon: 'icon-flask.svg', class: '', pendingDocuments: '', lastDate: '' }, { id: 2, title: 'Nutrition', subtitle: 'Access to the nutrition care reports', icon: 'icon-nutrition.svg', class: '', pendingDocuments: '', lastDate: '' }, { id: 3, title: 'Radiology', subtitle: 'Access to the radiology reports and images', icon: 'icon-radiology.svg', class: '', pendingDocuments: '', lastDate: '' }, { id: 4, title: 'Medical Reports', subtitle: 'Access General Medical Reports, ER and Hospital Discharge reports', icon: 'icon-report.svg', class: '', pendingDocuments: '', lastDate: '' });
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_3__["UserPopoverComponent"],
                event: ev,
                translucent: true,
                animated: true,
            });
            return yield popover.present();
        });
    }
    openProfile(event) {
        this.presentPopover(event);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map