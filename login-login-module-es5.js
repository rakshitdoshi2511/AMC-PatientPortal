function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"limiter\">\n  <div class=\"container-login100 tintimage\"> \n    <!-- style=\"background-image: url('./assets/images/bg-01.jpg');\"> -->\n    <div class=\"wrap-login100\">\n      <form class=\"login100-form validate-form\">\n        <!-- <span class=\"login100-form-logo\">\n          <i class=\"zmdi zmdi-landscape\"></i>\n        </span> -->\n        <span class=\"login100-form-logo\"> \n          <img src=\"../assets/images/ahlogo.png\" />\n        </span>\n        <!-- <span class=\"login100-form-title p-b-34 p-t-27\">Log in\n        </span> -->\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Enter username\">\n          <input class=\"input100\" type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"model.username\">\n          <span class=\"focus-input100\" data-placeholder=\"&#xf207;\"></span>\n        </div>\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n          <input class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"Password\" [(ngModel)]=\"model.password\">\n          <span class=\"focus-input100\" data-placeholder=\"&#xf191;\"></span>\n        </div>\n       \n        <div class=\"container-login100-form-btn\">\n          <button class=\"login100-form-btn\" (click)=\"login()\">\n            Login\n          </button>\n        </div>\n        <!-- <div class=\"text-center p-t-90\">\n          <a class=\"txt1\" href=\"#\">\n            Forgot Password?\n          </a>\n        </div> -->\n      </form>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  font-family: Poppins-Regular, sans-serif;\n}\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666;\n  margin: 0;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n  color: #fff;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n}\np {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666;\n  margin: 0;\n}\nul,\nli {\n  margin: 0;\n  list-style-type: none;\n}\ninput {\n  outline: none;\n  border: none;\n}\ntextarea {\n  outline: none;\n  border: none;\n}\ntextarea:focus,\ninput:focus {\n  border-color: transparent !important;\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\ninput::-webkit-input-placeholder {\n  color: #999;\n}\ninput:-moz-placeholder {\n  color: #999;\n}\ninput::-moz-placeholder {\n  color: #999;\n}\ninput:-ms-input-placeholder {\n  color: #999;\n}\ntextarea::-webkit-input-placeholder {\n  color: #fff;\n}\ntextarea:-moz-placeholder {\n  color: #fff;\n}\ntextarea::-moz-placeholder {\n  color: #fff;\n}\ntextarea:-ms-input-placeholder {\n  color: #fff;\n}\nlabel {\n  margin: 0;\n  display: block;\n}\nbutton {\n  outline: none !important;\n  border: none;\n  background: 0 0;\n}\nbutton:hover {\n  cursor: pointer;\n}\niframe {\n  border: none !important;\n}\n.txt1 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #e5e5e5;\n  line-height: 1.5;\n}\n.limiter {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n.container-login100 {\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n.tintimage {\n  background: linear-gradient(rgba(220, 220, 220, 0.45), rgba(220, 220, 220, 0.45)), url('bg-02.jpg');\n}\n.container-login100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n.wrap-login100 {\n  width: 500px;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 55px 55px 37px;\n  background: #fff;\n  background: linear-gradient(top, #fff, #fff);\n}\n.login100-form {\n  width: 100%;\n}\n.login100-form-logo {\n  font-size: 60px;\n  color: #333;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3em;\n  height: 3em;\n  margin: 0 auto;\n}\n.login100-form-title {\n  font-family: Poppins-Medium;\n  font-size: 30px;\n  color: #fff;\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n  display: block;\n}\n.wrap-input100 {\n  width: 100%;\n  position: relative;\n  border-bottom: 2px solid rgba(153, 153, 153, 0.24);\n  margin-bottom: 30px;\n}\n.input100 {\n  font-family: Poppins-Regular;\n  font-size: 16px;\n  color: #999;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: 0 0;\n  padding: 0 5px 0 38px;\n}\n.focus-input100 {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.focus-input100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n  background: #999;\n}\n.focus-input100::after {\n  font-family: Material-Design-Iconic-Font;\n  font-size: 22px;\n  color: #999;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 6px;\n  left: 0;\n  padding-left: 5px;\n  transition: all 0.4s;\n}\n.input100:focus {\n  padding-left: 5px;\n}\n.input100:focus + .focus-input100::after {\n  top: -22px;\n  font-size: 18px;\n}\n.input100:focus + .focus-input100::before {\n  width: 100%;\n}\n.has-val.input100 + .focus-input100::after {\n  top: -22px;\n  font-size: 18px;\n}\n.has-val.input100 + .focus-input100::before {\n  width: 100%;\n}\n.has-val.input100 {\n  padding-left: 5px;\n}\n.contact100-form-checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n  padding-bottom: 35px;\n}\n.input-checkbox100 {\n  display: none;\n}\n.label-checkbox100 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #fff;\n  line-height: 1.2;\n  display: block;\n  position: relative;\n  padding-left: 26px;\n  cursor: pointer;\n}\n.label-checkbox100::before {\n  content: \"\";\n  font-family: Material-Design-Iconic-Font;\n  font-size: 13px;\n  color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  background: #fff;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.input-checkbox100:checked + .label-checkbox100::before {\n  color: #555;\n}\n.container-login100-form-btn {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.login100-form-btn {\n  font-family: Poppins-Medium;\n  font-size: 16px;\n  color: #fff;\n  line-height: 1.2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 120px;\n  height: 50px;\n  border-radius: 25px;\n  background: #ffffff;\n  background: linear-gradient(bottom, #ffffff, #ffffff);\n  position: relative;\n  z-index: 1;\n  transition: all 0.4s;\n}\n.login100-form-btn::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  background-color: #5489ae;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  transition: all 0.4s;\n}\n.login100-form-btn:hover {\n  color: white;\n  background-color: #66cbdd;\n}\n.login100-form-btn:hover:before {\n  opacity: 0;\n}\n@media (max-width: 576px) {\n  .wrap-login100 {\n    padding: 55px 15px 37px;\n  }\n}\n.validate-input {\n  position: relative;\n}\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: #fff;\n  border: 1px solid #c80000;\n  border-radius: 2px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0;\n  pointer-events: none;\n  font-family: Poppins-Regular;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.4s;\n}\n.alert-validate::after {\n  content: \"\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #c80000;\n  display: block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 5px;\n}\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1;\n}\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL1VzZXJzL3Jha3NoaXRkb3NoaS9EZXNrdG9wL0FNQy9Xb3Jrc3BhY2UvUGF0aWVudFBvcnRhbElvbmljL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ29CaEI7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FEbEJEO0FDcUJBOztFQUVDLFlBQUE7RUFDQSx3Q0FBQTtBRGxCRDtBQ3FCQTtFQUNDLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBRGxCRDtBQ3FCQTtFQUNDLHdCQUFBO0FEbEJEO0FDcUJBO0VBQ0MscUJBQUE7RUFDQSxXQUFBO0FEbEJEO0FDcUJBOzs7Ozs7RUFNQyxTQUFBO0FEbEJEO0FDcUJBO0VBQ0MsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRGxCRDtBQ3FCQTs7RUFFQyxTQUFBO0VBQ0EscUJBQUE7QURsQkQ7QUNxQkE7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBRGxCRDtBQ3FCQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0FEbEJEO0FDcUJBOztFQUVDLG9DQUFBO0FEbEJEO0FDcUJBO0VBQ0Msa0JBQUE7QURsQkQ7QUNxQkE7RUFDQyxrQkFBQTtBRGxCRDtBQ3FCQTtFQUNDLGtCQUFBO0FEbEJEO0FDcUJBO0VBQ0Msa0JBQUE7QURsQkQ7QUNxQkE7RUFDQyxrQkFBQTtBRGxCRDtBQ3FCQTtFQUNDLGtCQUFBO0FEbEJEO0FDcUJBO0VBQ0Msa0JBQUE7QURsQkQ7QUNxQkE7RUFDQyxrQkFBQTtBRGxCRDtBQ3FCQTtFQUNDLFdBQUE7QURsQkQ7QUNxQkE7RUFDQyxXQUFBO0FEbEJEO0FDcUJBO0VBQ0MsV0FBQTtBRGxCRDtBQ3FCQTtFQUND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QUE7SUFDQSxVQUFBO0VEakNBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5LFxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhciwgc2Fucy1zZXJpZjtcbn1cblxuYSB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luOiAwO1xufVxuXG51bCxcbmxpIHtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYTpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYTpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAwIDA7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50eHQxIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmxpbWl0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGludGltYWdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjIwLCAyMjAsIDIyMCwgMC40NSksIHJnYmEoMjIwLCAyMjAsIDIyMCwgMC40NSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JnLTAyLmpwZ1wiKTtcbn1cblxuLmNvbnRhaW5lci1sb2dpbjEwMDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG4ud3JhcC1sb2dpbjEwMCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNTVweCA1NXB4IDM3cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZiwgI2ZmZik7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNmZmYpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmYsICNmZmYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZmZmLCAjZmZmKTtcbn1cblxuLmxvZ2luMTAwLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luMTAwLWZvcm0tbG9nbyB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6ICMzMzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogM2VtO1xuICBoZWlnaHQ6IDNlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud3JhcC1pbnB1dDEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMjQpO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaW5wdXQxMDAge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOTk5O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogMCAwO1xuICBwYWRkaW5nOiAwIDVweCAwIDM4cHg7XG59XG5cbi5mb2N1cy1pbnB1dDEwMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYmFja2dyb3VuZDogIzk5OTtcbn1cblxuLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICM5OTk7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLmlucHV0MTAwOmZvY3VzIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMDo6YWZ0ZXIge1xuICB0b3A6IC0yMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXMtdmFsLmlucHV0MTAwICsgLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gIHRvcDogLTIycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhhcy12YWwuaW5wdXQxMDAgKyAuZm9jdXMtaW5wdXQxMDA6OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFzLXZhbC5pbnB1dDEwMCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uY29udGFjdDEwMC1mb3JtLWNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuXG4uaW5wdXQtY2hlY2tib3gxMDAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGFiZWwtY2hlY2tib3gxMDAge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Jq1wiO1xuICBmb250LWZhbWlseTogTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaW5wdXQtY2hlY2tib3gxMDA6Y2hlY2tlZCArIC5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5jb250YWluZXItbG9naW4xMDAtZm9ybS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG4ge1xuICBmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICNmZmZmZmYsICNmZmZmZmYpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZmZmZmZmLCAjZmZmZmZmKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZmZmZmZmLCAjZmZmZmZmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI2ZmZmZmZiwgI2ZmZmZmZik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ4OWFlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZjYmRkO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG46aG92ZXI6YmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC53cmFwLWxvZ2luMTAwIHtcbiAgICBwYWRkaW5nOiA1NXB4IDE1cHggMzdweDtcbiAgfVxufVxuLnZhbGlkYXRlLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWxpZGF0ZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjODAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNHB4IDI1cHggNHB4IDEwcHg7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICByaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGNvbG9yOiAjYzgwMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbn1cblxuLmFsZXJ0LXZhbGlkYXRlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74SqXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2M4MDAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5hbGVydC12YWxpZGF0ZTpob3ZlcjpiZWZvcmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi8vIEBmb250LWZhY2Uge1xuLy8gXHRmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuLy8gXHRzcmM6IHVybCguLi9mb250cy9wb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGYpXG4vLyB9XG5cbi8vIEBmb250LWZhY2Uge1xuLy8gXHRmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4vLyBcdHNyYzogdXJsKC4uL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1NZWRpdW0udHRmKVxuLy8gfVxuXG4vLyBAZm9udC1mYWNlIHtcbi8vIFx0Zm9udC1mYW1pbHk6IFBvcHBpbnMtQm9sZDtcbi8vIFx0c3JjOiB1cmwoLi4vZm9udHMvcG9wcGlucy9Qb3BwaW5zLUJvbGQudHRmKVxuLy8gfVxuXG4vLyBAZm9udC1mYWNlIHtcbi8vIFx0Zm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XG4vLyBcdHNyYzogdXJsKC4uL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZC50dGYpXG4vLyB9XG5cbioge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3hcbn1cblxuYm9keSxcbmh0bWwge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXIsIHNhbnMtc2VyaWZcbn1cblxuYSB7XG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDEuNztcblx0Y29sb3I6ICM2NjY7XG5cdG1hcmdpbjogMDtcblx0dHJhbnNpdGlvbjogYWxsIC40cztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgLjRzO1xuXHQtbW96LXRyYW5zaXRpb246IGFsbCAuNHNcbn1cblxuYTpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmUhaW1wb3J0YW50XG59XG5cbmE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiAjZmZmXG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG5cdG1hcmdpbjogMFxufVxuXG5wIHtcblx0Zm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMS43O1xuXHRjb2xvcjogIzY2Njtcblx0bWFyZ2luOiAwXG59XG5cbnVsLFxubGkge1xuXHRtYXJnaW46IDA7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZVxufVxuXG5pbnB1dCB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogbm9uZVxufVxuXG50ZXh0YXJlYSB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogbm9uZVxufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnRcbn1cblxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiB0cmFuc3BhcmVudFxufVxuXG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiB0cmFuc3BhcmVudFxufVxuXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogdHJhbnNwYXJlbnRcbn1cblxudGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogdHJhbnNwYXJlbnRcbn1cblxudGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiB0cmFuc3BhcmVudFxufVxuXG50ZXh0YXJlYTpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiB0cmFuc3BhcmVudFxufVxuXG50ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogIzk5OVxufVxuXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6ICM5OTlcbn1cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogIzk5OVxufVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogIzk5OVxufVxuXG50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiAjZmZmXG59XG5cbnRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogI2ZmZlxufVxuXG50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiAjZmZmXG59XG5cbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiAjZmZmXG59XG5cbmxhYmVsIHtcblx0bWFyZ2luOiAwO1xuXHRkaXNwbGF5OiBibG9ja1xufVxuXG5idXR0b24ge1xuXHRvdXRsaW5lOiBub25lIWltcG9ydGFudDtcblx0Ym9yZGVyOiBub25lO1xuXHRiYWNrZ3JvdW5kOiAwIDBcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyXG59XG5cbmlmcmFtZSB7XG5cdGJvcmRlcjogbm9uZSFpbXBvcnRhbnRcbn1cblxuLnR4dDEge1xuXHRmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuXHRmb250LXNpemU6IDEzcHg7XG5cdGNvbG9yOiAjZTVlNWU1O1xuXHRsaW5lLWhlaWdodDogMS41XG59XG5cbi5saW1pdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cdG1hcmdpbjogMCBhdXRvXG59XG5cbi5jb250YWluZXItbG9naW4xMDAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdC8vei1pbmRleDogMVxufVxuXG4udGludGltYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiBcbiAgICAgIC8qIHRvcCwgdHJhbnNwYXJlbnQgcmVkLCBmYWtlZCB3aXRoIGdyYWRpZW50ICovIFxuICAgICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgICByZ2JhKDIyMCwgMjIwLCAyMjAsIDAuNDUpLCBcbiAgICAgICAgcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjQ1KVxuICAgICAgKSxcbiAgICAgIC8qIGJvdHRvbSwgaW1hZ2UgKi9cbiAgICAgIHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy0wMi5qcGcnKTtcbiAgfVxuXG4uY29udGFpbmVyLWxvZ2luMTAwOjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAtMTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KVxufVxuXG4ud3JhcC1sb2dpbjEwMCB7XG5cdHdpZHRoOiA1MDBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cGFkZGluZzogNTVweCA1NXB4IDM3cHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZiwgI2ZmZik7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNmZmYpO1xuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmYsICNmZmYpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZmZmLCAjZmZmKVxufVxuXG4ubG9naW4xMDAtZm9ybSB7XG5cdHdpZHRoOiAxMDAlXG59XG5cbi5sb2dpbjEwMC1mb3JtLWxvZ28ge1xuXHRmb250LXNpemU6IDYwcHg7XG5cdGNvbG9yOiAjMzMzO1xuXHQvL2Rpc3BsYXk6IC13ZWJraXQtYm94O1xuXHQvL2Rpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0Ly9kaXNwbGF5OiAtbW96LWJveDtcblx0Ly9kaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiAzZW07XG5cdGhlaWdodDogM2VtO1xuXHQvL2JvcmRlci1yYWRpdXM6IDUwJTtcblx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRtYXJnaW46IDAgYXV0b1xufVxuXG4ubG9naW4xMDAtZm9ybS10aXRsZSB7XG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0bGluZS1oZWlnaHQ6IDEuMjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRkaXNwbGF5OiBibG9ja1xufVxuXG4ud3JhcC1pbnB1dDEwMCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDE1MywgMTUzLCAxNTMsIC4yNCk7XG5cdG1hcmdpbi1ib3R0b206IDMwcHhcbn1cblxuLmlucHV0MTAwIHtcblx0Zm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogIzk5OTtcblx0bGluZS1oZWlnaHQ6IDEuMjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDQ1cHg7XG5cdGJhY2tncm91bmQ6IDAgMDtcblx0cGFkZGluZzogMCA1cHggMCAzOHB4XG59XG5cbi5mb2N1cy1pbnB1dDEwMCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmVcbn1cblxuLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IC0ycHg7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDJweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgLjRzO1xuXHQtbW96LXRyYW5zaXRpb246IGFsbCAuNHM7XG5cdHRyYW5zaXRpb246IGFsbCAuNHM7XG5cdGJhY2tncm91bmQ6ICM5OTlcbn1cblxuLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG5cdGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XG5cdGZvbnQtc2l6ZTogMjJweDtcblx0Y29sb3I6ICM5OTk7XG5cdGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDZweDtcblx0bGVmdDogMDtcblx0cGFkZGluZy1sZWZ0OiA1cHg7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cztcblx0LW8tdHJhbnNpdGlvbjogYWxsIC40cztcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgLjRzO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjRzXG59XG5cbi5pbnB1dDEwMDpmb2N1cyB7XG5cdHBhZGRpbmctbGVmdDogNXB4XG59XG5cbi5pbnB1dDEwMDpmb2N1cysuZm9jdXMtaW5wdXQxMDA6OmFmdGVyIHtcblx0dG9wOiAtMjJweDtcblx0Zm9udC1zaXplOiAxOHB4XG59XG5cbi5pbnB1dDEwMDpmb2N1cysuZm9jdXMtaW5wdXQxMDA6OmJlZm9yZSB7XG5cdHdpZHRoOiAxMDAlXG59XG5cbi5oYXMtdmFsLmlucHV0MTAwKy5mb2N1cy1pbnB1dDEwMDo6YWZ0ZXIge1xuXHR0b3A6IC0yMnB4O1xuXHRmb250LXNpemU6IDE4cHhcbn1cblxuLmhhcy12YWwuaW5wdXQxMDArLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xuXHR3aWR0aDogMTAwJVxufVxuXG4uaGFzLXZhbC5pbnB1dDEwMCB7XG5cdHBhZGRpbmctbGVmdDogNXB4XG59XG5cbi5jb250YWN0MTAwLWZvcm0tY2hlY2tib3gge1xuXHRwYWRkaW5nLWxlZnQ6IDVweDtcblx0cGFkZGluZy10b3A6IDVweDtcblx0cGFkZGluZy1ib3R0b206IDM1cHhcbn1cblxuLmlucHV0LWNoZWNrYm94MTAwIHtcblx0ZGlzcGxheTogbm9uZVxufVxuXG4ubGFiZWwtY2hlY2tib3gxMDAge1xuXHRmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuXHRmb250LXNpemU6IDEzcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRsaW5lLWhlaWdodDogMS4yO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nLWxlZnQ6IDI2cHg7XG5cdGN1cnNvcjogcG9pbnRlclxufVxuXG4ubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMjZiXCI7XG5cdGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxNnB4O1xuXHRoZWlnaHQ6IDE2cHg7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0bGVmdDogMDtcblx0dG9wOiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSlcbn1cblxuLmlucHV0LWNoZWNrYm94MTAwOmNoZWNrZWQrLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuXHRjb2xvcjogIzU1NVxufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxufVxuXG4ubG9naW4xMDAtZm9ybS1idG4ge1xuXHRmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDAgMjBweDtcblx0bWluLXdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiA1MHB4O1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICNmZmZmZmYsICNmZmZmZmYpO1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZmZmZmZmLCAjZmZmZmZmKTtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZmZmZmZmLCAjZmZmZmZmKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI2ZmZmZmZiwgI2ZmZmZmZik7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgLjRzO1xuXHQtbW96LXRyYW5zaXRpb246IGFsbCAuNHM7XG5cdHRyYW5zaXRpb246IGFsbCAuNHNcbn1cblxuLmxvZ2luMTAwLWZvcm0tYnRuOjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAtMTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LDEzNywxNzQpO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdG9wYWNpdHk6IDE7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cztcblx0LW8tdHJhbnNpdGlvbjogYWxsIC40cztcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgLjRzO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjRzXG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XG4gICAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSwxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLDIwMywyMjEpO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG46aG92ZXI6YmVmb3JlIHtcblx0b3BhY2l0eTogMFxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjU3NnB4KSB7XG5cdC53cmFwLWxvZ2luMTAwIHtcblx0XHRwYWRkaW5nOiA1NXB4IDE1cHggMzdweFxuXHR9XG59XG5cbi52YWxpZGF0ZS1pbnB1dCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IGF0dHIoZGF0YS12YWxpZGF0ZSk7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bWF4LXdpZHRoOiA3MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjODAwMDA7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0cGFkZGluZzogNHB4IDI1cHggNHB4IDEwcHg7XG5cdHRvcDogNTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRyaWdodDogMDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG5cdGNvbG9yOiAjYzgwMDAwO1xuXHRmb250LXNpemU6IDEzcHg7XG5cdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0b3BhY2l0eTogMDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC40cztcblx0LW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuNHM7XG5cdC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAuNHM7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjRzXG59XG5cbi5hbGVydC12YWxpZGF0ZTo6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlxcZjEyYVwiO1xuXHRmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICNjODAwMDA7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRyaWdodDogNXB4XG59XG5cbi5hbGVydC12YWxpZGF0ZTpob3ZlcjpiZWZvcmUge1xuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRvcGFjaXR5OiAxXG59XG5cbkBtZWRpYShtYXgtd2lkdGg6OTkycHgpIHtcblx0LmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdFx0b3BhY2l0eTogMVxuXHR9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/loader.service */
    "./src/app/services/loader.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(route, router, _loader, _api) {
        _classCallCheck(this, LoginPage);

        this.route = route;
        this.router = router;
        this._loader = _loader;
        this._api = _api;
        this.model = {};
      }
      /**Screen Interactions */


      _createClass(LoginPage, [{
        key: "onLogin",
        value: function onLogin() {
          this.router.navigateByUrl('home');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          this.onLogin();
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/services/loader.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/loader.service.ts ***!
    \********************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoaderService = function LoaderService() {
      _classCallCheck(this, LoaderService);
    };

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LoaderService);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map