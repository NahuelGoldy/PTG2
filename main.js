(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PTG2';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _shared_services_people_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/people.service */ "./src/app/shared/services/people.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"]
            ],
            providers: [_shared_services_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/domain/post.ts":
/*!***************************************!*\
  !*** ./src/app/shared/domain/post.ts ***!
  \***************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/shared/services/people.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/people.service.ts ***!
  \***************************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleService = /** @class */ (function () {
    function PeopleService(httpClient) {
        this.httpClient = httpClient;
        this.people = [];
    }
    PeopleService.prototype.getPeople = function () {
        return this.people;
    };
    PeopleService.prototype.setPeople = function (people) {
        var _a;
        (_a = this.people).push.apply(_a, people);
    };
    PeopleService.prototype.getSelectedPerson = function () {
        return this.selectedPerson;
    };
    PeopleService.prototype.setSelectedPerson = function (person) {
        this.selectedPerson = person;
    };
    PeopleService.prototype.initialize = function () {
        return this.httpClient.get('./assets/data/people.json');
    };
    PeopleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/app/ui/content/content.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/content/content.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h1> {{peopleService.getSelectedPerson().name}}</h1>\n\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-lg-12\">\n      <div class=\"card card-default content-table\">\n        <div class=\"card-header card-info\">\n          <i class=\"fa fa-info-circle\"></i> Information\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-lg-4 img-wrapper\">\n              <div class=\"row\">\n                <img src=\"{{peopleService.getSelectedPerson().img}}\">\n              </div>\n              <div class=\"row\">\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"toggleMessageFormFlag()\">{{btnText}}</button>\n              </div>\n            </div>\n            <div class=\"col-sm-8 col-lg-8\">\n              <div class=\"row rating-wrapper\">\n                <div class=\"col-sm-3 col-lg-3\">\n                  <h6>Rating:</h6>\n                </div>\n                <div class=\"col-sm-9 col-lg-6\">\n                  <i *ngFor=\"let h of counter(peopleService.getSelectedPerson().rating)\" class=\"fa fa-heart\"></i>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-lg-12\">\n                  <p class=\"description\">{{peopleService.getSelectedPerson().Description}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!showMessageForm\" class=\"row\">\n    <div class=\"col-xs-12 col-lg-6\">\n      <div class=\"card card-default content-table\">\n        <div class=\"card-header card-success\">\n          <i class=\"fa fa-thumbs-up\"></i> Likes\n        </div>\n        <table class=\"table table-bordered table-striped\">\n          <tbody>\n          <tr *ngFor=\"let like of peopleService.getSelectedPerson().Likes\" style=\"text-align: center;\">\n            <td>{{like}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-lg-6\">\n      <div class=\"card card-default content-table\">\n        <div class=\"card-header card-danger\">\n          <i class=\"fa fa-thumbs-down\"></i> Dislikes\n        </div>\n        <table class=\"table table-bordered table-striped\">\n          <tbody>\n          <tr *ngFor=\"let dislike of peopleService.getSelectedPerson().Dislikes\" style=\"text-align: center;\">\n            <td>{{dislike}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"showMessageForm\" class=\"row\">\n    <div class=\"col-xs-12 col-lg-6\">\n\n      <form>\n        <label>Author: </label>\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Your name (optional)\"\n               id=\"author\" [(ngModel)]=\"messageInput.author\" name=\"author\" #author=\"ngModel\" />\n\n        <label>Message: </label>\n        <textarea class=\"form-control mr-sm-2\" placeholder=\"Your message\"\n                  id=\"message\" [(ngModel)]=\"messageInput.message\" name=\"message\" #message=\"ngModel\" >\n        </textarea>\n\n        <button id=\"btn-submit-msg\" type=\"button\" class=\"btn btn-success\" (click)=\"submitMessage()\">Submit</button>\n      </form>\n    </div>\n\n    <div class=\"col-xs-12 col-lg-6\">\n      <div class=\"card card-default content-table\">\n        <div class=\"card-header card-primary\">\n          <i class=\"fa fa-comment\"></i> Messages\n        </div>\n        <p *ngFor=\"let post of peopleService.getSelectedPerson().messages\" >\n          <i></i> \"{{post.message}}\"\n          <span class=\"float-right text-muted small\"><em>{{post.author}}, {{post.created_at | timeAgo}}</em></span>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/content/content.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ui/content/content.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-success,\n.card-danger,\n.card-primary,\n.card-info {\n  color: #fff;\n  font-weight: bold; }\n\n.content-item {\n  padding: 1%; }\n\n.content-table {\n  margin: 1%; }\n\n.table {\n  margin-bottom: 0; }\n\n.img-wrapper {\n  text-align: center; }\n\n.img-wrapper .row {\n    display: contents; }\n\n.rating-wrapper {\n  padding: 5%;\n  text-align: center; }\n\n.rating-wrapper h6 {\n    padding-top: 2%; }\n\n.rating-wrapper i {\n    font-size: 2rem;\n    margin-right: 1%;\n    color: red; }\n\nh1 {\n  font-size: 2rem;\n  text-align: center;\n  font-family: \"Segoe UI\", sans-serif; }\n\nimg {\n  border-radius: 10%;\n  margin: 3% 5%; }\n\np {\n  margin: 1rem !important; }\n\nform {\n  padding: 0 5% 4% 5%; }\n\nlabel {\n  font-weight: 500;\n  margin-top: 3%; }\n\n#btn-submit-msg, label {\n  margin-top: 5%;\n  width: 100%; }\n\n.card-primary {\n  background-color: #0275d8;\n  border-color: #0275d8; }\n\n.card-primary .card-header,\n  .card-primary .card-footer {\n    background-color: transparent; }\n\n.card-success {\n  background-color: #5cb85c;\n  border-color: #5cb85c; }\n\n.card-success .card-header,\n  .card-success .card-footer {\n    background-color: transparent; }\n\n.card-info {\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.card-info .card-header,\n  .card-info .card-footer {\n    background-color: transparent; }\n\n.card-danger {\n  background-color: #d9534f;\n  border-color: #d9534f; }\n\n.card-danger .card-header,\n  .card-danger .card-footer {\n    background-color: transparent; }\n"

/***/ }),

/***/ "./src/app/ui/content/content.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/content/content.component.ts ***!
  \*************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/people.service */ "./src/app/shared/services/people.service.ts");
/* harmony import */ var _shared_domain_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/domain/post */ "./src/app/shared/domain/post.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = /** @class */ (function () {
    function ContentComponent(peopleService) {
        this.peopleService = peopleService;
        this.isDataAvailable = false;
        this.showMessageForm = false;
        this.btnText = 'LEAVE A MESSAGE!';
        this.messageInput = new _shared_domain_post__WEBPACK_IMPORTED_MODULE_2__["Post"]();
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.isDataAvailable = true;
    };
    ContentComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    ContentComponent.prototype.toggleMessageFormFlag = function () {
        this.showMessageForm = !this.showMessageForm;
        this.btnText = (this.btnText === 'LEAVE A MESSAGE!') ? 'BACK TO PREFERENCES' : 'LEAVE A MESSAGE!';
    };
    ContentComponent.prototype.submitMessage = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.messageInput.author))
            this.messageInput.author = 'Anonymus';
        this.messageInput.created_at = new Date().toISOString();
        this.peopleService.getSelectedPerson().messages.push(this.messageInput);
        this.messageInput = new _shared_domain_post__WEBPACK_IMPORTED_MODULE_2__["Post"]();
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/ui/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/ui/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <button class=\"navbar-toggler navbar-toggler-right\" (click)=\"toggleSidebar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"navbar-nav\">\n    <a href=\"javascript:void(0)\" class=\"nav-link\">\n      <i class=\"fa fa-user\"></i> Nahuel Goldy <i class=\"fa fa-sort-down\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('push-right');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar *ngIf=\"isDataAvailable\" [people]=\"peopleService.getPeople()\"></app-sidebar>\n<div class=\"main-container\">\n  <app-content *ngIf=\"isDataAvailable\"></app-content>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  background-color: #eeeeee;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/people.service */ "./src/app/shared/services/people.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(peopleService) {
        var _this = this;
        this.peopleService = peopleService;
        this.isDataAvailable = false;
        // async initialization of the service
        this.peopleService.initialize().subscribe(function (data) {
            data.People.forEach(function (p) {
                p.hide = false;
                p.messages = [];
            });
            _this.peopleService.setPeople(data.People);
            _this.peopleService.setSelectedPerson(data.People[0]);
            _this.isDataAvailable = true;
        });
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/ui/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/sidebar/sidebar.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/sidebar/sidebar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n\n  <div style=\"text-align: center;\">\n    <form >\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\"\n             id=\"typedinput\" [(ngModel)]=\"typed\" name=\"typedinput\" #typedinput=\"ngModel\" (input)=\"inputChanged()\" />\n    </form>\n  </div>\n\n  <div *ngFor=\"let person of people\">\n    <ul class=\"list-group\">\n      <a class=\"list-group-item\" (click)=\"personSelected(person)\" *ngIf=\"!person.hide\">\n        {{ person.name }}\n        <i class=\"fa fa-angle-double-right\"></i>&nbsp;\n      </a>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/sidebar/sidebar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ui/sidebar/sidebar.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: absolute;\n  z-index: 1000;\n  top: 55px;\n  left: 235px;\n  width: 235px;\n  height: 100%;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px; }\n  .sidebar .list-group a.list-group-item {\n    text-align: center;\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #fff;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-left: 2%; }\n  .sidebar .list-group a:hover {\n    background: #484848;\n    color: #fff;\n    cursor: pointer; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n"

/***/ }),

/***/ "./src/app/ui/sidebar/sidebar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/sidebar/sidebar.component.ts ***!
  \*************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/people.service */ "./src/app/shared/services/people.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(peopleService) {
        this.peopleService = peopleService;
        this.isActive = false;
        this.typed = '';
    }
    SidebarComponent.prototype.personSelected = function (person) {
        this.peopleService.setSelectedPerson(person);
        // toggle sidebar
        var dom = document.querySelector('body');
        dom.classList.toggle('push-right');
    };
    SidebarComponent.prototype.inputChanged = function () {
        var _this = this;
        this.people.forEach(function (p) {
            if (_this.typed !== '' && p.name.toLowerCase().search(_this.typed) === -1) {
                p.hide = true;
            }
            else {
                p.hide = false;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "people", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/ui/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/ui/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/ui/sidebar/sidebar.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/ui/content/content.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ],
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]
            ],
            exports: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nahuel SG\WebstormProjects\PTG2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map