(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-reports-medical-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/medical-reports/medical-reports.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medical-reports/medical-reports.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"ahThemeToolBar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" class=\"ahThemeButtonMenu\"></ion-menu-button>\n      <!-- <img src=\"../assets/images/ahlogo.png\" class=\"ahLogo\" /> -->\n      <img src=\"../assets/icon/favico.png\" class=\"ahLogoMini\" />\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\" style=\"padding:0.5em\" (click)=\"openProfile($event)\">\n      <img src=\"../assets/icon/usericon.svg\">\n    </ion-thumbnail>\n    <ion-title class='ion-text-center titleWhite'>Medical Reports</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar showCancelButton=\"never\" (ionInput)=\"filterList($event)\" (ionClear)=\"filterListClear($event)\">\n    </ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <button ion-button (click)=\"sortData()\">\n        <ion-icon name=\"swap-vertical\"></ion-icon>\n      </button>\n      <button ion-button (click)=\"showFilters()\">\n        <ion-icon name=\"funnel\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>  \n</ion-header>\n<ion-content>\n  <div class=\"card\">\n    <div class=\"content\">\n      <div class=\"panel-group\" *ngIf=\"documents\">\n        <ion-list>\n          <div *ngFor=\"let _document of documents | keyvalue: customSort\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading clickable\" (click)=\"toggleGroup(_document)\" [ngClass]=\"{active:isGroupShown(_document)}\">\n                \n                <h4 class=\"panel-title\">\n                  <!-- <div class=\"block\"></div> -->\n                  <span><ion-icon  [name]=\"isGroupShown(_document) ? 'remove-outline' : 'add-outline'\"></ion-icon>Document Date : {{getDateDisplay(documents[_document.key])}}</span>\n                  <!-- <p><span>Pricing Period: {{getPricingDates(orders[cust.key])}}</span></p> -->\n                </h4>\n              </div>\n              <div *ngIf=\"isGroupShown(_document)\">\n                <div class=\"tasks\" id=\"tasks\" *ngFor=\"let document of documents[_document.key].lineItems\">\n                  <div class=\"task-item\" [ngClass]=\"document.class\">\n                    <div class=\"task-text\">\n                      <h5 style=\"color:rgb(87,143,182);font-weight:bold\">Document Number: {{document.documentNo}}</h5>\n                      <h6>{{document.physician}}</h6>\n                      <span>Status : {{document.status}}</span>\n                    </div>\n                    <div class=\"task-footer\">\n                      <div class=\"pull-left\"><span class=\"fa fa-clock-o\"></span> {{document.date}} - {{document.time}}</div>\n                      <div class=\"pull-right\"><h6 style=\"color:rgb(87,143,182);\">{{document.type}}</h6></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button id=\"all\" (click)=\"filterDocuments('ALL')\" [ngClass]=\"model.selectedAll\">\n          <ion-icon name=\"person-circle\"></ion-icon>\n          <!-- <ion-label>All Documents</ion-label> -->\n          <span>All Documents</span>\n          <ion-badge color=\"dark\">{{model.allDocuments}}</ion-badge>\n        </ion-tab-button>\n        <ion-tab-button id=\"emergencyc\" (click)=\"filterDocuments('EME')\" [ngClass]=\"model.selectedEmergency\">\n          <ion-icon name=\"person-circle\"></ion-icon>\n          <span>Emergency Discharge</span>\n          <ion-badge color=\"dark\">{{model.emergencyDocuments}}</ion-badge>\n        </ion-tab-button>\n        <ion-tab-button id=\"physicain\" (click)=\"filterDocuments('PHY')\" [ngClass]=\"model.selectedPhysician\">\n          <ion-icon name=\"person-circle\"></ion-icon>\n          <span>Physician Discharge</span>\n          <ion-badge color=\"dark\">{{model.physicianDocuments}}</ion-badge>\n        </ion-tab-button>\n        <ion-tab-button id=\"medical\" (click)=\"filterDocuments('MED')\" [ngClass]=\"model.selectedMedical\">\n          <ion-icon name=\"person-circle\"></ion-icon>\n          <span>Medical Report</span>\n          <ion-badge color=\"dark\">{{model.medicalDocuments}}</ion-badge>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/medical-reports/medical-reports-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/medical-reports/medical-reports-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MedicalReportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalReportsPageRoutingModule", function() { return MedicalReportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _medical_reports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medical-reports.page */ "./src/app/medical-reports/medical-reports.page.ts");




const routes = [
    {
        path: '',
        component: _medical_reports_page__WEBPACK_IMPORTED_MODULE_3__["MedicalReportsPage"]
    }
];
let MedicalReportsPageRoutingModule = class MedicalReportsPageRoutingModule {
};
MedicalReportsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedicalReportsPageRoutingModule);



/***/ }),

/***/ "./src/app/medical-reports/medical-reports.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/medical-reports/medical-reports.module.ts ***!
  \***********************************************************/
/*! exports provided: MedicalReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalReportsPageModule", function() { return MedicalReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _medical_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medical-reports-routing.module */ "./src/app/medical-reports/medical-reports-routing.module.ts");
/* harmony import */ var _medical_reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-reports.page */ "./src/app/medical-reports/medical-reports.page.ts");







let MedicalReportsPageModule = class MedicalReportsPageModule {
};
MedicalReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medical_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicalReportsPageRoutingModule"]
        ],
        declarations: [_medical_reports_page__WEBPACK_IMPORTED_MODULE_6__["MedicalReportsPage"]]
    })
], MedicalReportsPageModule);



/***/ }),

/***/ "./src/app/medical-reports/medical-reports.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/medical-reports/medical-reports.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ahLogo {\n  display: inline-block;\n  width: 13em;\n  height: 3.5em;\n}\n\n.ahThemeToolBar {\n  --background: rgb(190,230,239);\n}\n\n.ahThemeButtonMenu {\n  --color:rgb(87,143,182);\n}\n\n.titleWhite {\n  color: black;\n}\n\n.title {\n  color: white;\n  font-weight: bold;\n}\n\n.subtitle {\n  color: white;\n  font-style: italic;\n}\n\n.vertical-align-content > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n}\n\n.tasks {\n  padding: 5px;\n  float: left;\n  width: 100%;\n}\n\n.tasks .task-item {\n  width: 100%;\n  float: left;\n  padding: 0px;\n  background: #FFF;\n  border-left: 3px solid #FFF;\n  margin-bottom: 10px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.tasks .task-item:hover {\n  background: #F9F9F9;\n  cursor: pointer;\n}\n\n.tasks .task-item.task-complete {\n  background: #FFF2C5;\n}\n\n.tasks .task-item.task-primary {\n  border-left-color: #1b1e24;\n}\n\n.tasks .task-item.task-success {\n  border-left-color: #95b75d;\n}\n\n.tasks .task-item.task-info {\n  border-left-color: #1caf9a;\n}\n\n.tasks .task-item.task-warning {\n  border-left-color: #1caf9a;\n}\n\n.tasks .task-item.task-danger {\n  border-left-color: #E04B4A;\n}\n\n.tasks .task-item .task-text {\n  margin-bottom: 10px;\n  float: left;\n  width: 100%;\n  font-size: 12px;\n  font-weight: 400;\n  padding: 10px;\n}\n\n.tasks .task-item .task-footer {\n  float: left;\n  width: 100%;\n  font-size: 12px;\n  color: #AAA;\n  line-height: 20px;\n  padding: 10px;\n  background: #F5F5F5;\n}\n\n.tasks .task-item .task-footer a {\n  color: #AAA;\n  display: block;\n  float: left;\n  margin-left: 10px;\n  font-size: 14px;\n}\n\n.tasks .task-item .task-footer a:hover {\n  color: #22262e;\n}\n\n.tasks .task-drop {\n  float: left;\n  width: 100%;\n  padding: 30px 10px;\n  border: 2px dashed #D5D5D5;\n  border-radius: 0px;\n  font-size: 16px;\n  text-align: center;\n  line-height: 20px;\n}\n\n.tasks .task-drop:hover {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  cursor: pointer;\n}\n\nion-tab-bar {\n  --color-selected: #000 !important;\n}\n\nion-card-subtitle {\n  font-size: 14px;\n}\n\nion-tab-button.tab-selected {\n  --background: rgb(87,143,182) !important;\n  --color-selected: #000000;\n}\n\nion-tab-button[aria-selected=true] {\n  --background: rgb(87,143,182) !important;\n  --color-selected: var(--ion-color-medium);\n  --ripple-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n}\n\n.ionLabel {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWtzaGl0ZG9zaGkvRGVza3RvcC9BTUMvV29ya3NwYWNlL1BhdGllbnRQb3J0YWxJb25pYy9zcmMvYXBwL21lZGljYWwtcmVwb3J0cy9tZWRpY2FsLXJlcG9ydHMucGFnZS5zY3NzIiwic3JjL2FwcC9tZWRpY2FsLXJlcG9ydHMvbWVkaWNhbC1yZXBvcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUVLLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FQOztBREdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFHQSwwQ0FBQTtBQ0NKOztBRENFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxtQkFBQTtBQ0dKOztBRERFO0VBQ0UsMEJBQUE7QUNJSjs7QURGRTtFQUNFLDBCQUFBO0FDS0o7O0FESEU7RUFDRSwwQkFBQTtBQ01KOztBREpFO0VBQ0UsMEJBQUE7QUNPSjs7QURMRTtFQUNFLDBCQUFBO0FDUUo7O0FETkU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1NKOztBRFBFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDVUo7O0FEUkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNXSjs7QURURTtFQUNFLGNBQUE7QUNZSjs7QURWRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUdBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNhSjs7QURYRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNjSjs7QURYRTtFQUNFLGlDQUFBO0FDY0o7O0FEWEE7RUFDRSxlQUFBO0FDY0Y7O0FEWEE7RUFDSSx3Q0FBQTtFQUNBLHlCQUFBO0FDY0o7O0FEWEE7RUFDSSx3Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQ2NKOztBRFhBO0VBQ0UsZUFBQTtBQ2NGIiwiZmlsZSI6InNyYy9hcHAvbWVkaWNhbC1yZXBvcnRzL21lZGljYWwtcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWhMb2dve1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTNlbTtcbiAgICBoZWlnaHQ6IDMuNWVtO1xufVxuXG4uYWhUaGVtZVRvb2xCYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTkwLDIzMCwyMzkpO1xufVxuICBcbi5haFRoZW1lQnV0dG9uTWVudXtcbiAgICAtLWNvbG9yOnJnYig4NywxNDMsMTgyKTtcbn1cbiAgXG4udGl0bGVXaGl0ZXtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuLnRpdGxle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnN1YnRpdGxle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgXG4gIC52ZXJ0aWNhbC1hbGlnbi1jb250ZW50ID4gKlxuICB7XG4gICAgICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gICAgICAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbiAgfVxuXG4gIC50YXNrcyB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50YXNrcyAudGFzay1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGRkY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbiAgLnRhc2tzIC50YXNrLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNGOUY5Rjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC50YXNrcyAudGFzay1pdGVtLnRhc2stY29tcGxldGUge1xuICAgIGJhY2tncm91bmQ6ICNGRkYyQzU7XG4gIH1cbiAgLnRhc2tzIC50YXNrLWl0ZW0udGFzay1wcmltYXJ5IHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzFiMWUyNDtcbiAgfVxuICAudGFza3MgLnRhc2staXRlbS50YXNrLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjOTViNzVkO1xuICB9XG4gIC50YXNrcyAudGFzay1pdGVtLnRhc2staW5mbyB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMxY2FmOWE7XG4gIH1cbiAgLnRhc2tzIC50YXNrLWl0ZW0udGFzay13YXJuaW5nIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzFjYWY5YTtcbiAgfVxuICAudGFza3MgLnRhc2staXRlbS50YXNrLWRhbmdlciB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNFMDRCNEE7XG4gIH1cbiAgLnRhc2tzIC50YXNrLWl0ZW0gLnRhc2stdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC50YXNrcyAudGFzay1pdGVtIC50YXNrLWZvb3RlciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjQUFBO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgfVxuICAudGFza3MgLnRhc2staXRlbSAudGFzay1mb290ZXIgYSB7XG4gICAgY29sb3I6ICNBQUE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC50YXNrcyAudGFzay1pdGVtIC50YXNrLWZvb3RlciBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzIyMjYyZTtcbiAgfVxuICAudGFza3MgLnRhc2stZHJvcCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjRDVENUQ1O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC50YXNrcyAudGFzay1kcm9wOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5ID0gNTApO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGlvbi10YWItYmFye1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYig4NywxNDMsMTgyKSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICMwMDAwMDA7XG59XG5cbmlvbi10YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV17XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoODcsMTQzLDE4MikgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4uaW9uTGFiZWx7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iLCIuYWhMb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTNlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbn1cblxuLmFoVGhlbWVUb29sQmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTkwLDIzMCwyMzkpO1xufVxuXG4uYWhUaGVtZUJ1dHRvbk1lbnUge1xuICAtLWNvbG9yOnJnYig4NywxNDMsMTgyKTtcbn1cblxuLnRpdGxlV2hpdGUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udmVydGljYWwtYWxpZ24tY29udGVudCA+ICoge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi50YXNrcyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza3MgLnRhc2staXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4udGFza3MgLnRhc2staXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGOUY5Rjk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2tzIC50YXNrLWl0ZW0udGFzay1jb21wbGV0ZSB7XG4gIGJhY2tncm91bmQ6ICNGRkYyQzU7XG59XG5cbi50YXNrcyAudGFzay1pdGVtLnRhc2stcHJpbWFyeSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMWIxZTI0O1xufVxuXG4udGFza3MgLnRhc2staXRlbS50YXNrLXN1Y2Nlc3Mge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzk1Yjc1ZDtcbn1cblxuLnRhc2tzIC50YXNrLWl0ZW0udGFzay1pbmZvIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxY2FmOWE7XG59XG5cbi50YXNrcyAudGFzay1pdGVtLnRhc2std2FybmluZyB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMWNhZjlhO1xufVxuXG4udGFza3MgLnRhc2staXRlbS50YXNrLWRhbmdlciB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRTA0QjRBO1xufVxuXG4udGFza3MgLnRhc2staXRlbSAudGFzay10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50YXNrcyAudGFzay1pdGVtIC50YXNrLWZvb3RlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0FBQTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG5cbi50YXNrcyAudGFzay1pdGVtIC50YXNrLWZvb3RlciBhIHtcbiAgY29sb3I6ICNBQUE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhc2tzIC50YXNrLWl0ZW0gLnRhc2stZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogIzIyMjYyZTtcbn1cblxuLnRhc2tzIC50YXNrLWRyb3Age1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNENUQ1RDU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi50YXNrcyAudGFzay1kcm9wOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgLS1jb2xvci1zZWxlY3RlZDogIzAwMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoODcsMTQzLDE4MikgIWltcG9ydGFudDtcbiAgLS1jb2xvci1zZWxlY3RlZDogIzAwMDAwMDtcbn1cblxuaW9uLXRhYi1idXR0b25bYXJpYS1zZWxlY3RlZD10cnVlXSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDg3LDE0MywxODIpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmlvbkxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/medical-reports/medical-reports.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/medical-reports/medical-reports.page.ts ***!
  \*********************************************************/
/*! exports provided: MedicalReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalReportsPage", function() { return MedicalReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-popover/user-popover.component */ "./src/app/user-popover/user-popover.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let MedicalReportsPage = class MedicalReportsPage {
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
    filterDocuments(type) {
        console.log(type);
        let that = this;
        switch (type) {
            case 'ALL':
                this.model.selectedAll = 'tab-selected';
                this.model.selectedEmergency = '';
                this.model.selectedPhysician = '';
                this.model.selectedMedical = '';
                let formattedDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](that.documentsOld, 'date');
                lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](formattedDocuments, function (_document) {
                    _document['lineItems'] = _document;
                });
                that.documents = formattedDocuments;
                break;
            case 'EME':
                this.model.selectedAll = '';
                this.model.selectedEmergency = 'tab-selected';
                this.model.selectedPhysician = '';
                this.model.selectedMedical = '';
                let _emergencyDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](that.emergencyDocuments, 'date');
                lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](_emergencyDocuments, function (_document) {
                    _document['lineItems'] = _document;
                });
                that.documents = _emergencyDocuments;
                break;
            case 'PHY':
                this.model.selectedAll = '';
                this.model.selectedEmergency = '';
                this.model.selectedPhysician = 'tab-selected';
                this.model.selectedMedical = '';
                let _physicianDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](that.physicanDocuments, 'date');
                lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](_physicianDocuments, function (_document) {
                    _document['lineItems'] = _document;
                });
                that.documents = _physicianDocuments;
                break;
            case 'MED':
                this.model.selectedAll = '';
                this.model.selectedEmergency = '';
                this.model.selectedPhysician = '';
                this.model.selectedMedical = 'tab-selected';
                let _medicalDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](that.medicalDocuments, 'date');
                lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](_medicalDocuments, function (_document) {
                    _document['lineItems'] = _document;
                });
                that.documents = _medicalDocuments;
                break;
        }
    }
    /**Data API */
    loadData() {
        let _data = [];
        _data.push({
            documentNo: 10000,
            date: '27.10.2019',
            time: '06:28:18 AM',
            type: 'Emergency Discharge Report',
            typeCode: 'EME',
            physician: 'Dr. Suzanne Al Sayed',
            status: 'On Review',
            statusCode: 1,
            class: 'task-primary'
        }, {
            documentNo: 10001,
            date: '28.10.2019',
            time: '01:25:44 AM',
            type: 'Physician Discharge Report',
            typeCode: 'PHY',
            physician: 'Dr. Ghassan Khayyat',
            status: 'On Review',
            statusCode: 1,
            class: 'task-primary'
        }, {
            documentNo: 10002,
            date: '27.10.2019',
            time: '06:51:00 AM',
            type: 'Medical Record',
            typeCode: 'MED',
            physician: 'Dr. Yaman Tai',
            status: 'On Review',
            statusCode: 1,
            class: 'task-primary'
        }, {
            documentNo: 10003,
            date: '29.10.2019',
            time: '12:51:05 AM',
            type: 'Physician Discharge Report',
            typeCode: 'PHY',
            physician: 'Dr. Yaman Tai',
            status: 'On Review',
            statusCode: 1,
            class: 'task-warning'
        }, {
            documentNo: 10004,
            date: '27.10.2019',
            time: '06:28:18 AM',
            type: 'Emergency Discharge Report',
            typeCode: 'EME',
            physician: 'Dr. Violet Asfour',
            status: 'Ready',
            statusCode: 0,
            class: 'task-warning'
        });
        let _emergencyDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["map"](_data, function (o) {
            if (o.typeCode == 'EME')
                return o;
        });
        _emergencyDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["without"](_emergencyDocuments, undefined);
        this.emergencyDocuments = _emergencyDocuments;
        let _physicianDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["map"](_data, function (o) {
            if (o.typeCode == 'PHY')
                return o;
        });
        _physicianDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["without"](_physicianDocuments, undefined);
        this.physicanDocuments = _physicianDocuments;
        let _medicalDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["map"](_data, function (o) {
            if (o.typeCode == 'MED')
                return o;
        });
        _medicalDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["without"](_medicalDocuments, undefined);
        this.medicalDocuments = _medicalDocuments;
        this.model.allDocuments = _data.length;
        this.model.emergencyDocuments = _emergencyDocuments.length;
        this.model.physicianDocuments = _physicianDocuments.length;
        this.model.medicalDocuments = _medicalDocuments.length;
        this.documentsOld = _data;
        let formattedDocuments = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](_data, 'date');
        lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](formattedDocuments, function (_document) {
            _document['lineItems'] = _document;
        });
        this.documents = formattedDocuments;
        this.filterDocuments('ALL');
        console.log(this.documents);
    }
};
MedicalReportsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
MedicalReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medical-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medical-reports.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/medical-reports/medical-reports.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medical-reports.page.scss */ "./src/app/medical-reports/medical-reports.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], MedicalReportsPage);



/***/ })

}]);
//# sourceMappingURL=medical-reports-medical-reports-module-es2015.js.map