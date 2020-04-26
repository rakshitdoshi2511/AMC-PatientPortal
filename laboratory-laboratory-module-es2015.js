(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["laboratory-laboratory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/laboratory/laboratory.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/laboratory/laboratory.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"ahThemeToolBar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" class=\"ahThemeButtonMenu\"></ion-menu-button>\n      <!-- <img src=\"../assets/images/ahlogo.png\" class=\"ahLogo\" /> -->\n      <img src=\"../assets/icon/favico.png\" class=\"ahLogoMini\" />\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\" style=\"padding:0.5em\" (click)=\"openProfile($event)\">\n      <img src=\"../assets/icon/usericon.svg\">\n    </ion-thumbnail>\n    <ion-title class='ion-text-center titleWhite'>Laboratory Reports</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar showCancelButton=\"never\" (ionInput)=\"filterList($event)\" (ionClear)=\"filterListClear($event)\">\n    </ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <button ion-button (click)=\"sortData()\">\n        <ion-icon name=\"swap-vertical\"></ion-icon>\n      </button>\n      <button ion-button (click)=\"showFilters()\">\n        <ion-icon name=\"funnel\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>  \n</ion-header>\n<ion-content>\n  <div class=\"card\">\n    <div class=\"content\">\n      <div class=\"panel-group\" *ngIf=\"documents\">\n        <ion-list>\n          <div *ngFor=\"let _document of documents | keyvalue: customSort\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading clickable\" (click)=\"toggleGroup(_document)\" [ngClass]=\"{active:isGroupShown(_document)}\">\n                \n                <h4 class=\"panel-title\">\n                  <!-- <div class=\"block\"></div> -->\n                  <span><ion-icon  [name]=\"isGroupShown(_document) ? 'remove-outline' : 'add-outline'\"></ion-icon>Document Date : {{getDateDisplay(documents[_document.key])}}</span>\n                  <!-- <p><span>Pricing Period: {{getPricingDates(orders[cust.key])}}</span></p> -->\n                </h4>\n              </div>\n              <div *ngIf=\"isGroupShown(_document)\">\n                <div class=\"tasks\" id=\"tasks\" *ngFor=\"let document of documents[_document.key].lineItems\">\n                  <div class=\"task-item\" [ngClass]=\"document.class\">\n                    <div class=\"task-text\">\n                      <h5 style=\"color:rgb(87,143,182);font-weight:bold\">Document Number: {{document.documentNo}}</h5>\n                      <h6>{{document.physician}}</h6>\n                      <span>Status : {{document.status}}</span>\n                    </div>\n                    <div class=\"task-footer\">\n                      <div class=\"pull-left\"><span class=\"fa fa-clock-o\"></span> {{document.date}} - {{document.time}}</div>\n                      <div class=\"pull-right\"><h6 style=\"color:rgb(87,143,182);\">{{document.type}}</h6></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/laboratory/laboratory-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/laboratory/laboratory-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LaboratoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaboratoryPageRoutingModule", function() { return LaboratoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _laboratory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laboratory.page */ "./src/app/laboratory/laboratory.page.ts");




const routes = [
    {
        path: '',
        component: _laboratory_page__WEBPACK_IMPORTED_MODULE_3__["LaboratoryPage"]
    }
];
let LaboratoryPageRoutingModule = class LaboratoryPageRoutingModule {
};
LaboratoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LaboratoryPageRoutingModule);



/***/ }),

/***/ "./src/app/laboratory/laboratory.module.ts":
/*!*************************************************!*\
  !*** ./src/app/laboratory/laboratory.module.ts ***!
  \*************************************************/
/*! exports provided: LaboratoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaboratoryPageModule", function() { return LaboratoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _laboratory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./laboratory-routing.module */ "./src/app/laboratory/laboratory-routing.module.ts");
/* harmony import */ var _laboratory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./laboratory.page */ "./src/app/laboratory/laboratory.page.ts");







let LaboratoryPageModule = class LaboratoryPageModule {
};
LaboratoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _laboratory_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaboratoryPageRoutingModule"]
        ],
        declarations: [_laboratory_page__WEBPACK_IMPORTED_MODULE_6__["LaboratoryPage"]],
        entryComponents: [] //[UserPopoverComponent]
    })
], LaboratoryPageModule);



/***/ }),

/***/ "./src/app/laboratory/laboratory.page.scss":
/*!*************************************************!*\
  !*** ./src/app/laboratory/laboratory.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ahLogo {\n  display: inline-block;\n  width: 13em;\n  height: 3.5em;\n}\n\n.ahThemeToolBar {\n  --background: rgb(190,230,239);\n}\n\n.ahThemeButtonMenu {\n  --color:rgb(87,143,182);\n}\n\n.titleWhite {\n  color: black;\n}\n\n.title {\n  color: white;\n  font-weight: bold;\n}\n\n.subtitle {\n  color: white;\n  font-style: italic;\n}\n\n.vertical-align-content > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n}\n\n.tasks {\n  padding: 5px;\n  float: left;\n  width: 100%;\n}\n\n.tasks .task-item {\n  width: 100%;\n  float: left;\n  padding: 0px;\n  background: #FFF;\n  border-left: 3px solid #FFF;\n  margin-bottom: 10px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.tasks .task-item:hover {\n  background: #F9F9F9;\n  cursor: pointer;\n}\n\n.tasks .task-item.task-complete {\n  background: #FFF2C5;\n}\n\n.tasks .task-item.task-primary {\n  border-left-color: #1b1e24;\n}\n\n.tasks .task-item.task-success {\n  border-left-color: #95b75d;\n}\n\n.tasks .task-item.task-info {\n  border-left-color: #1caf9a;\n}\n\n.tasks .task-item.task-warning {\n  border-left-color: #1caf9a;\n}\n\n.tasks .task-item.task-danger {\n  border-left-color: #E04B4A;\n}\n\n.tasks .task-item .task-text {\n  margin-bottom: 10px;\n  float: left;\n  width: 100%;\n  font-size: 12px;\n  font-weight: 400;\n  padding: 10px;\n}\n\n.tasks .task-item .task-footer {\n  float: left;\n  width: 100%;\n  font-size: 12px;\n  color: #AAA;\n  line-height: 20px;\n  padding: 10px;\n  background: #F5F5F5;\n}\n\n.tasks .task-item .task-footer a {\n  color: #AAA;\n  display: block;\n  float: left;\n  margin-left: 10px;\n  font-size: 14px;\n}\n\n.tasks .task-item .task-footer a:hover {\n  color: #22262e;\n}\n\n.tasks .task-drop {\n  float: left;\n  width: 100%;\n  padding: 30px 10px;\n  border: 2px dashed #D5D5D5;\n  border-radius: 0px;\n  font-size: 16px;\n  text-align: center;\n  line-height: 20px;\n}\n\n.tasks .task-drop:hover {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWtzaGl0ZG9zaGkvRGVza3RvcC9BTUMvV29ya3NwYWNlL1BhdGllbnRQb3J0YWxJb25pYy9zcmMvYXBwL2xhYm9yYXRvcnkvbGFib3JhdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xhYm9yYXRvcnkvbGFib3JhdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFFSyx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUNBUDs7QURHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBR0EsMENBQUE7QUNDSjs7QURDRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFFO0VBQ0UsbUJBQUE7QUNHSjs7QURERTtFQUNFLDBCQUFBO0FDSUo7O0FERkU7RUFDRSwwQkFBQTtBQ0tKOztBREhFO0VBQ0UsMEJBQUE7QUNNSjs7QURKRTtFQUNFLDBCQUFBO0FDT0o7O0FETEU7RUFDRSwwQkFBQTtBQ1FKOztBRE5FO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNTSjs7QURQRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1VKOztBRFJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDV0o7O0FEVEU7RUFDRSxjQUFBO0FDWUo7O0FEVkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFHQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDYUo7O0FEWEU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9sYWJvcmF0b3J5L2xhYm9yYXRvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFoTG9nb3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEzZW07XG4gICAgaGVpZ2h0OiAzLjVlbTtcbn1cblxuLmFoVGhlbWVUb29sQmFye1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDE5MCwyMzAsMjM5KTtcbn1cbiAgXG4uYWhUaGVtZUJ1dHRvbk1lbnV7XG4gICAgLS1jb2xvcjpyZ2IoODcsMTQzLDE4Mik7XG59XG4gIFxuLnRpdGxlV2hpdGV7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cbi50aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5zdWJ0aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIFxuICAudmVydGljYWwtYWxpZ24tY29udGVudCA+ICpcbiAge1xuICAgICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGFza3Mge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudGFza3MgLnRhc2staXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjRkZGO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG4gIC50YXNrcyAudGFzay1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAudGFza3MgLnRhc2staXRlbS50YXNrLWNvbXBsZXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGMkM1O1xuICB9XG4gIC50YXNrcyAudGFzay1pdGVtLnRhc2stcHJpbWFyeSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMxYjFlMjQ7XG4gIH1cbiAgLnRhc2tzIC50YXNrLWl0ZW0udGFzay1zdWNjZXNzIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzk1Yjc1ZDtcbiAgfVxuICAudGFza3MgLnRhc2staXRlbS50YXNrLWluZm8ge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMWNhZjlhO1xuICB9XG4gIC50YXNrcyAudGFzay1pdGVtLnRhc2std2FybmluZyB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMxY2FmOWE7XG4gIH1cbiAgLnRhc2tzIC50YXNrLWl0ZW0udGFzay1kYW5nZXIge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjRTA0QjRBO1xuICB9XG4gIC50YXNrcyAudGFzay1pdGVtIC50YXNrLXRleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAudGFza3MgLnRhc2staXRlbSAudGFzay1mb290ZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0FBQTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIH1cbiAgLnRhc2tzIC50YXNrLWl0ZW0gLnRhc2stZm9vdGVyIGEge1xuICAgIGNvbG9yOiAjQUFBO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAudGFza3MgLnRhc2staXRlbSAudGFzay1mb290ZXIgYTpob3ZlciB7XG4gICAgY29sb3I6ICMyMjI2MmU7XG4gIH1cbiAgLnRhc2tzIC50YXNrLWRyb3Age1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI0Q1RDVENTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAudGFza3MgLnRhc2stZHJvcDpob3ZlciB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eSA9IDUwKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH0iLCIuYWhMb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTNlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbn1cblxuLmFoVGhlbWVUb29sQmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTkwLDIzMCwyMzkpO1xufVxuXG4uYWhUaGVtZUJ1dHRvbk1lbnUge1xuICAtLWNvbG9yOnJnYig4NywxNDMsMTgyKTtcbn1cblxuLnRpdGxlV2hpdGUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udmVydGljYWwtYWxpZ24tY29udGVudCA+ICoge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi50YXNrcyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza3MgLnRhc2staXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4udGFza3MgLnRhc2staXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGOUY5Rjk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2tzIC50YXNrLWl0ZW0udGFzay1jb21wbGV0ZSB7XG4gIGJhY2tncm91bmQ6ICNGRkYyQzU7XG59XG5cbi50YXNrcyAudGFzay1pdGVtLnRhc2stcHJpbWFyeSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMWIxZTI0O1xufVxuXG4udGFza3MgLnRhc2staXRlbS50YXNrLXN1Y2Nlc3Mge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzk1Yjc1ZDtcbn1cblxuLnRhc2tzIC50YXNrLWl0ZW0udGFzay1pbmZvIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxY2FmOWE7XG59XG5cbi50YXNrcyAudGFzay1pdGVtLnRhc2std2FybmluZyB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMWNhZjlhO1xufVxuXG4udGFza3MgLnRhc2staXRlbS50YXNrLWRhbmdlciB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRTA0QjRBO1xufVxuXG4udGFza3MgLnRhc2staXRlbSAudGFzay10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50YXNrcyAudGFzay1pdGVtIC50YXNrLWZvb3RlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0FBQTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG5cbi50YXNrcyAudGFzay1pdGVtIC50YXNrLWZvb3RlciBhIHtcbiAgY29sb3I6ICNBQUE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhc2tzIC50YXNrLWl0ZW0gLnRhc2stZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogIzIyMjYyZTtcbn1cblxuLnRhc2tzIC50YXNrLWRyb3Age1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNENUQ1RDU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi50YXNrcyAudGFzay1kcm9wOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/laboratory/laboratory.page.ts":
/*!***********************************************!*\
  !*** ./src/app/laboratory/laboratory.page.ts ***!
  \***********************************************/
/*! exports provided: LaboratoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaboratoryPage", function() { return LaboratoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-popover/user-popover.component */ "./src/app/user-popover/user-popover.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let LaboratoryPage = class LaboratoryPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.model = {};
    }
    /**Dialog and Loaders*/
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
    /**Helper Methods */
    customSort(a, b) {
        //Do not do anything since originalOrder is not working;
    }
    getDateDisplay(item) {
        console.log(item);
        return item[0].date;
    }
    /**Default Methods*/
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.loadData();
    }
    /**Screen Interaction */
    openProfile(event) {
        this.presentPopover(event);
    }
    toggleGroup(group) {
        console.log(group);
        group.value[0].show = !group.value[0].show;
    }
    isGroupShown(group) {
        return group.value[0].show;
    }
    showFilters() {
        alert("ShowFilters");
    }
    /**Data API */
    loadData() {
        let _data = [];
        _data.push({
            documentNo: 10000,
            date: '27.10.2019',
            time: '06:28:18 AM',
            type: 'Laboratory',
            physician: 'Dr. Suzanne Al Sayed',
            status: 'On Review',
            statusCode: 1,
            class: 'task-primary'
        }, {
            documentNo: 10001,
            date: '28.10.2019',
            time: '01:25:44 AM',
            type: 'Laboratory',
            physician: 'Dr. Ghassan Khayyat',
            status: 'On Review',
            statusCode: 1,
            class: 'task-primary'
        }, {
            documentNo: 10002,
            date: '27.10.2019',
            time: '06:51:00 AM',
            type: 'Laboratory',
            physician: 'Dr. Yaman Tai',
            status: 'On Review',
            statusCode: 1,
            class: 'task-primary'
        }, {
            documentNo: 10003,
            date: '29.10.2019',
            time: '12:51:05 AM',
            type: 'Microbiology',
            physician: 'Dr. Yaman Tai',
            status: 'On Review',
            statusCode: 1,
            class: 'task-warning'
        }, {
            documentNo: 10004,
            date: '27.10.2019',
            time: '06:28:18 AM',
            type: 'Histopathology',
            physician: 'Dr. Violet Asfour',
            status: 'Ready',
            statusCode: 0,
            class: 'task-warning'
        });
        this.documentsOld = _data;
        let formattedDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](_data, 'date');
        lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](formattedDocuments, function (_document) {
            _document['lineItems'] = _document;
        });
        this.documents = formattedDocuments;
        console.log(this.documents);
    }
};
LaboratoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
LaboratoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-laboratory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./laboratory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/laboratory/laboratory.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./laboratory.page.scss */ "./src/app/laboratory/laboratory.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], LaboratoryPage);



/***/ })

}]);
//# sourceMappingURL=laboratory-laboratory-module-es2015.js.map