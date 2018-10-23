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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n  fxLayout=\"column\"\r\n  fxLayoutGap=\"10px\">\r\n\r\n  <div fxFlex>\r\n    <div>\r\n        <h3>About Us</h3>\r\n        <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxFlex>\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n      <div fxFlex=\"70\">\r\n        <h2>Our History</h2>\r\n        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\r\n        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\r\n      </div>\r\n      <div fxFlex=\"30\">\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title>\r\n            <h2>Facts At a Glance</h2>\r\n            </mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <dl>\r\n              <dt>Started</dt>\r\n              <dd>3 Feb. 2013</dd>\r\n              <dt>Major Stake Holder</dt>\r\n              <dd>HK Fine Foods Inc.</dd>\r\n              <dt>Last Year's Turnover</dt>\r\n              <dd>$1,250,375</dd>\r\n              <dt>Employees</dt>\r\n              <dd>40</dd>\r\n            </dl>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div fxFlex>\r\n    <mat-card>\r\n      <blockquote>\r\n        <h3>You better cut the pizza in four pieces because\r\n            I'm not hungry enough to eat six.</h3>\r\n        <footer>-- Yogi Berra,\r\n          <cite>The Wit and Wisdom of Yogi Berra,\r\n            P. Pepe, Diversion Books, 2014</cite>\r\n        </footer>\r\n      </blockquote>\r\n    </mat-card>\r\n  </div>\r\n\r\n\r\n  <div fxFlex>\r\n    <h2>Corporate Leadership</h2>\r\n    <mat-list *ngIf=\"leaders\" [@expand]>\r\n        <mat-list-item *ngFor=\"let leader of leaders\">\r\n          <img mat-list-avatar src=\"{{leader.image }}\" alt={{leader.name}}>\r\n          <h4 matLine> {{leader.name}} {{leader.abbr}}</h4>\r\n            <p matLine> {{leader.designation}}</p>\r\n            <p matLine>{{leader.description}}\r\n            </p>\r\n        </mat-list-item>\r\n      </mat-list>\r\n      <div [hidden]=\"leaders || errMess\">\r\n          <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\r\n      </div>\r\n      <div *ngIf=\"errMess\">\r\n        <h2>Error</h2>\r\n        <h4>{{errMess}}</h4>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/leader.service */ "./src/app/services/leader.service.ts");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(leaderservice) {
        this.leaderservice = leaderservice;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.errMess = errmess; });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_2__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_2__["expand"])()
            ]
        }),
        __metadata("design:paramtypes", [_services_leader_service__WEBPACK_IMPORTED_MODULE_1__["LeaderService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/animations/app.animation.ts":
/*!*********************************************!*\
  !*** ./src/app/animations/app.animation.ts ***!
  \*********************************************/
/*! exports provided: visibility, flyInOut, expand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function visibility() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('visibility', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out'))
    ]);
}
function flyInOut() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in')
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
        ])
    ]);
}
function expand() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expand', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-50%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dishdetail/dishdetail.component */ "./src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'aboutus', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"] },
    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__["FavoritesComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contactus', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'dishdetail/:id', component: _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_2__["DishdetailComponent"] }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

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
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dishdetail/dishdetail.component */ "./src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/promotion.service */ "./src/app/services/promotion.service.ts");
/* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/leader.service */ "./src/app/services/leader.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_20__["MenuComponent"],
                _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_21__["DishdetailComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_30__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_31__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_32__["ContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"],
                _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_36__["HighlightDirective"],
                _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_37__["FavoritesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_38__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_41__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_39__["AngularFirestoreModule"].enablePersistence(),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_40__["AngularFireAuthModule"]
            ],
            providers: [
                _services_dish_service__WEBPACK_IMPORTED_MODULE_22__["DishService"],
                _services_promotion_service__WEBPACK_IMPORTED_MODULE_23__["PromotionService"],
                _services_leader_service__WEBPACK_IMPORTED_MODULE_24__["LeaderService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuardService"],
                _services_favorite_service__WEBPACK_IMPORTED_MODULE_26__["FavoriteService"]
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n  fxLayout=\"column\"\r\n  fxLayoutGap=\"10px\">\r\n\r\n  <div fxFlex>\r\n    <div>\r\n        <h3>Contact Us</h3>\r\n        <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxFlex>\r\n    <h3>Location Information</h3> \r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n      <div fxFlex=\"50\" fxFlexOffset=\"20px\">\r\n        <h4>Our Address</h4>\r\n        <address>\r\n          121, Clear Water Bay Road<br>\r\n          Clear Water Bay, Kowloon<br>\r\n          HONG KONG<br>\r\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\r\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\r\n          <i class=\"fa fa-envelope\"></i>: \r\n                <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\r\n        </address>\r\n        <p></p>\r\n        <div>\r\n          <a mat-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\r\n          <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\r\n          <a mat-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\r\n        </div>\r\n        </div>\r\n      <div fxFlex=\"40\">\r\n        <h4>Map of our Location</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\r\n    <h3>Send us your Feedback</h3>\r\n    <p>{{ feedbackForm.value | json }} {{ feedbackForm.status | json }}</p>\r\n\r\n    <form novalidate [formGroup]=\"feedbackForm\" #fform=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"showForm\" [@expand]>\r\n      <p>\r\n        <mat-form-field class=\"half-width\">\r\n          <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\r\n          <mat-error *ngIf=\"formErrors.firstname\">{{formErrors.firstname}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"half-width\">\r\n          <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\r\n          <mat-error *ngIf=\"formErrors.lastname\">{{formErrors.lastname}}</mat-error>\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field class=\"half-width\">\r\n          <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\r\n          <mat-error *ngIf=\"formErrors.telnum\">{{formErrors.telnum}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"half-width\">\r\n          <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email required>\r\n          <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\r\n        </mat-form-field>\r\n      </p>\r\n      <table class=\"form-size\">\r\n        <td>\r\n          <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\r\n        </td>\r\n        <td>\r\n          <mat-select placeholder=\"How?\" formControlName=\"contacttype\">\r\n            <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\r\n              {{ ctype }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </td>\r\n        </table>\r\n      <p>\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\r\n        </mat-form-field>\r\n      </p>\r\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"feedbackForm.invalid\">Submit</button>\r\n    </form>\r\n    <div [hidden]=\"showForm || submitted\" [@expand]>\r\n      <h3>Submitting Form</h3>\r\n      <mat-spinner></mat-spinner>\r\n    </div>\r\n    <div *ngIf=\"submitted\" [@expand]>\r\n      <h3>Your Submission</h3>\r\n        <p>First Name: {{submitted.firstname}}</p>\r\n        <p>Last Name: {{submitted.lastname}}</p>\r\n        <p>Tel. Number: {{submitted.telnum}}</p>\r\n        <p>Email: {{submitted.email}}</p>\r\n        <p>Contact You?: {{submitted.agree}}</p>\r\n        <p>How?: {{submitted.contacttype}}</p>\r\n        <p>Feedback: {{submitted.message}}</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/feedback */ "./src/app/shared/feedback.ts");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.contactType = _shared_feedback__WEBPACK_IMPORTED_MODULE_2__["ContactType"];
        this.submitted = null;
        this.showForm = true;
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'lastname': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 2 characters long.',
                'maxlength': 'Last Name cannot be more than 25 characters long.'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            },
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]],
            telnum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        this.feedbackForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.showForm = false;
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        });
        this.feedbackFormDirective.resetForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fform'),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "feedbackFormDirective", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["expand"])()
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/directives/highlight.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/highlight.directive.ts ***!
  \***************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
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

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/dishdetail/dishdetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/dishdetail/dishdetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n    fxLayout=\"row wrap\"\r\n    fxLayout.sm=\"column\"\r\n    fxLayout.xs=\"column\"\r\n    fxLayoutAlign.gt-md=\"space-around center\"\r\n    fxLayoutGap=\"10px\" \r\n    fxLayoutGap.xs=\"0\">\r\n\r\n  <div fxFlex=\"100\">\r\n    <div>\r\n      <h3 *ngIf=\"dish\">{{dish.name | uppercase}}</h3>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <h3>{{dish.name | uppercase}}</h3>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"{{dish.image}}\" alt={{dish.name}}>\r\n      <mat-card-content>\r\n        <p>{{dish.description}}\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button [routerLink]=\"['/dishdetail', prev]\"><span class=\"fa fa-chevron-left fa-lg\"></span></button>\r\n        <button mat-button (click)=\"goBack()\"><span class=\"fa fa-arrow-left fa-lg\"></span></button>\r\n        <button mat-button (click)=\"addToFavorites()\"><span class=\"{{favorite ? 'fa fa-heart fa-lg' : 'fa fa-heart-o fa-lg'}}\"></span></button>\r\n        <button mat-button><span class=\"fa fa-share fa-lg\"></span></button>\r\n        <span class=\"flex-spacer\"></span>\r\n        <button mat-button [routerLink]=\"['/dishdetail', next]\"><span class=\"fa fa-chevron-right fa-lg\"></span></button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\r\n    <mat-list>\r\n      <h3>Comments</h3>\r\n      <mat-list-item *ngFor=\"let comment of dish.comments\">\r\n        <h4 matLine> {{comment.comment}} </h4>\r\n        <p matLine> {{comment.rating}} Stars</p>\r\n        <p matLine>\r\n          <span> -- {{comment.author.firstname}} {{comment.author.lastname}}, {{comment.updatedAt.toDate() | date }} </span>\r\n        </p>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <form novalidate [formGroup]=\"commentForm\" #cform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n      <p>\r\n        <mat-slider min=\"1\" max=\"5\" step=\"1\" thumbLabel tickInterval=\"1\" name=\"rating\" formControlName=\"rating\"></mat-slider>\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput formControlName=\"comment\" placeholder=\"Your Comment\" rows=12></textarea>\r\n          <mat-error *ngIf=\"formErrors.comment\">{{formErrors.comment}}</mat-error>\r\n        </mat-form-field>\r\n      </p>\r\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"commentForm.invalid\">Submit</button>\r\n    </form>\r\n  </div>\r\n  <div [hidden]=\"dish || errMess\">\r\n      <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\r\n  </div>\r\n  <div *ngIf=\"errMess\">\r\n    <h2>Error</h2>\r\n    <h4>{{errMess}}</h4>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dishdetail/dishdetail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dishdetail/dishdetail.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n"

/***/ }),

/***/ "./src/app/dishdetail/dishdetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dishdetail/dishdetail.component.ts ***!
  \****************************************************/
/*! exports provided: DishdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishdetailComponent", function() { return DishdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, favoriteService, route, location, fb) {
        this.dishservice = dishservice;
        this.favoriteService = favoriteService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.visibility = 'shown';
        this.favorite = false;
        this.formErrors = {
            'comment': ''
        };
        this.validationMessages = {
            'comment': {
                'required': 'Comment is required.'
            }
        };
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.dishservice.getDishIds().subscribe(function (dishIds) { return _this.dishIds = dishIds; });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (params) { _this.visibility = 'hidden'; return _this.dishservice.getDish(params['id']); }))
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.dishservice.getComments(_this.dish._id)
                .subscribe(function (comments) { return _this.dish.comments = comments; });
            _this.setPrevNext(dish._id);
            _this.visibility = 'shown';
            _this.favoriteService.isFavorite(_this.dish._id)
                .then(function (value) {
                _this.favorite = value;
                console.log('Dishdetail favorite ', _this.favorite);
            });
        }, function (errmess) { return _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.setPrevNext = function (dishId) {
        var index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DishdetailComponent.prototype.createForm = function () {
        var _this = this;
        this.commentForm = this.fb.group({
            rating: 5,
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.commentForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    DishdetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dishservice.postComment(this.dish._id, this.commentForm.value)
            .then(function () {
            _this.dishservice.getComments(_this.dish._id)
                .subscribe(function (comments) { return _this.dish.comments = comments; });
        }, function (err) { return console.log('Error ', err); });
        this.commentFormDirective.resetForm();
        this.commentForm.reset({
            rating: 5,
            comment: ''
        });
    };
    DishdetailComponent.prototype.onValueChanged = function (data) {
        if (!this.commentForm) {
            return;
        }
        var form = this.commentForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    DishdetailComponent.prototype.addToFavorites = function () {
        var _this = this;
        if (!this.favorite) {
            this.favoriteService.postFavorite(this.dish._id)
                .then(function (favorites) { console.log(favorites); _this.favorite = true; })
                .catch(function (err) { return console.log('Error ', err); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cform'),
        __metadata("design:type", Object)
    ], DishdetailComponent.prototype, "commentFormDirective", void 0);
    DishdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dishdetail',
            template: __webpack_require__(/*! ./dishdetail.component.html */ "./src/app/dishdetail/dishdetail.component.html"),
            styles: [__webpack_require__(/*! ./dishdetail.component.scss */ "./src/app/dishdetail/dishdetail.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_2__["visibility"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_2__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_2__["expand"])()
            ]
        }),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_3__["DishService"],
            _services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DishdetailComponent);
    return DishdetailComponent;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.component.html":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\nfxLayout=\"column\"\r\nfxLayoutGap=\"10px\">\r\n\r\n<div fxFlex>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"none center\">\r\n <h3 fxFlex=\"80%\">My Favorites</h3>\r\n <span class=\"flex-spacer\"></span> \r\n <mat-slide-toggle fxFlex\r\n [(ngModel)]=\"delete\"\r\n [color]=\"Warn\">\r\n Delete!\r\n </mat-slide-toggle>\r\n</div>\r\n<hr>\r\n</div>\r\n\r\n<div *ngIf=\"favorites || errMess; else loading\">\r\n<div fxFlex *ngIf=\"favorites\" [@expand]>\r\n<mat-grid-list cols=\"2\" rowHeight=\"200px\">\r\n <mat-grid-tile *ngFor=\"let dish of favorites.dishes\">\r\n   <div [routerLink]=\"['/dishdetail', dish._id]\" appHighlight>\r\n   <img height=\"200px\" src=\"{{dish.image}}\" alt={{dish.name}}>\r\n   </div>\r\n   <mat-grid-tile-footer>\r\n     <h1 mat-line>{{dish.name | uppercase}}</h1>\r\n     <span class=\"flex-spacer\"></span>\r\n     <button mat-icon-button *ngIf=\"delete\" (click)=\"deleteFavorite(dish._id)\">\r\n       <span style=\"color: red;\" class=\"fa fa-times fa-lg\"></span>\r\n     </button>\r\n   </mat-grid-tile-footer>\r\n </mat-grid-tile>\r\n</mat-grid-list>\r\n</div>\r\n<div *ngIf=\"errMess\">\r\n<h2>Error</h2>\r\n<h4>{{errMess}}</h4>\r\n</div>\r\n</div>\r\n<ng-template #loading>\r\n  <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\r\n</ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/favorites/favorites.component.scss":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoriteService, dishservice) {
        this.favoriteService = favoriteService;
        this.dishservice = dishservice;
        this.favorites = { user: '', dishes: [] };
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteService.getFavorites()
            .subscribe(function (favorites) {
            _this.favorites = { user: '', dishes: [] };
            favorites.forEach(function (favorite) {
                _this.dishservice.getDish(favorite.dish)
                    .subscribe(function (dish) {
                    _this.favorites.dishes.push(dish);
                });
            });
        }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesComponent.prototype.deleteFavorite = function (id) {
        var _this = this;
        this.favoriteService.deleteFavorite(id)
            .then(function () {
            _this.favoriteService.getFavorites()
                .subscribe(function (favorites) {
                _this.favorites = { user: '', dishes: [] };
                favorites.forEach(function (favorite) {
                    _this.dishservice.getDish(favorite.dish)
                        .subscribe(function (dish) {
                        _this.favorites.dishes.push(dish);
                    });
                });
            });
        }, function (errmess) { return _this.errMess = errmess; });
        this.delete = false;
    };
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.scss */ "./src/app/favorites/favorites.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["expand"])()
            ]
        }),
        __metadata("design:paramtypes", [_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__["FavoriteService"],
            _services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\" \r\n    fxLayout=\"row wrap\" \r\n    fxLayout.lt-md=\"column\" \r\n    fxLayoutAlign=\"center center\" \r\n    fxLayoutGap=\"10px\">\r\n\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n    <div fxLayout=\"row\">\r\n      <div fxFlex=\"40\" fxFlexOffset=\"20px\">\r\n        <h4>Links</h4>\r\n        <mat-list>\r\n          <mat-list-item><a mat-button routerLink=\"/home\">Home</a></mat-list-item>\r\n          <mat-list-item><a mat-button>About</a></mat-list-item>\r\n          <mat-list-item><a mat-button routerLink=\"/menu\">Menu</a></mat-list-item>\r\n          <mat-list-item><a mat-button routerLink=\"/contactus\">Contact</a></mat-list-item>\r\n        </mat-list>\r\n      </div>\r\n      <div fxFlex=\"55\">\r\n        <h4>Our Address</h4>\r\n        <address style=\"text-size: 80%\">\r\n          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\r\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\r\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\r\n          <i class=\"fa fa-envelope\"></i>:\r\n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\r\n        </address>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"45\">\r\n    <div style=\"text-align:center\">\r\n      <a mat-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\"><i class=\"fa fa-google-plus fa-lg\"></i></a>\r\n      <a mat-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i class=\"fa fa-facebook fa-lg\"></i></a>\r\n      <a mat-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i class=\"fa fa-linkedin fa-lg\"></i></a>\r\n      <a mat-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\r\n      <a mat-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube fa-lg\"></i></a>\r\n      <a mat-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div>\r\n      <p>© Copyright 2018 Ristorante Con Fusion</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px; }\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span><img src=\"./assets/images/logo.png\" height=30 width=41></span>\r\n  <a mat-button routerLink=\"/home\" routerLinkActive=\"active\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\r\n  <a mat-button routerLink=\"/aboutus\" routerLinkActive=\"active\"><span class=\"fa fa-info fa-lg\"></span> About</a>\r\n  <a mat-button routerLink=\"/menu\" routerLinkActive=\"active\"><span class=\"fa fa-list fa-lg\"></span> Menu</a>\r\n  <a mat-button routerLink=\"/favorites\" routerLinkActive=\"active\"><span class=\"fa fa-heart fa-lg\"></span> My Favorites</a>\r\n  <a mat-button routerLink=\"/contactus\" routerLinkActive=\"active\"><span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\r\n  <span class=\"flex-spacer\"></span>\r\n  <a *ngIf=\"!username\" mat-button (click)=\"openLoginForm()\"><span class=\"fa fa-sign-in fa-lg\"></span> Login</a>\r\n  <a *ngIf=\"username\">{{username}}</a>\r\n  <a *ngIf=\"username\" mat-button (click)=\"logOut()\"><span class=\"fa fa-sign-out fa-lg\"></span> Logout</a>\r\n</mat-toolbar>\r\n\r\n<div class=\"container jumbotron\"\r\n    fxLayout=\"row\"\r\n    fxLayout.sm=\"column\" \r\n    fxLayout.xs=\"column\" \r\n    fxLayoutAlign.xs=\"start center\"\r\n    fxLayoutAlign.sm=\"start center\" \r\n    fxLayoutAlign.gt-sm=\"center center\" \r\n    fxLayoutGap=\"10px\">\r\n\r\n  <div fxFlex fxFlex.gt-sm=\"50%\">\r\n    <h1>Ristorante Con Fusion</h1>\r\n    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations\r\n      will tickle your culinary senses!</p>\r\n  </div>\r\n  <div fxFlex fxFlex.gt-sm=\"20%\">\r\n    <img src=\"./assets/images/logo.png\" alt=\"Logo\">\r\n  </div>\r\n  <div fxFlex></div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px; }\n\n.active {\n  background: #4527A0; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function HeaderComponent(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
        this.username = undefined;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                console.log('Logged In ', user.email);
                _this.username = user.displayName ? user.displayName : user.email;
            }
            else {
                console.log('Not Logged In');
                _this.username = undefined;
            }
        });
    };
    HeaderComponent.prototype.openLoginForm = function () {
        var loginRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], { width: '500px', height: '450px' });
    };
    HeaderComponent.prototype.logOut = function () {
        this.username = undefined;
        this.authService.logOut();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     fxLayout=\"row\"\r\n     fxLayout.sm=\"column\"\r\n     fxLayout.xs=\"column\"\r\n     fxLayoutAlign.gt-md=\"space-around center\"\r\n     fxLayoutGap=\"10px\">\r\n\r\n<mat-card *ngIf=\"dish\" fxFlex [@expand]>\r\n  <mat-card-header>\r\n    <div mat-card-avatar></div>\r\n    <mat-card-title>\r\n      <h3>{{dish.name | uppercase}}</h3>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <img mat-card-image src=\"{{ dish.image }}\" alt={{dish.name}}>\r\n  <mat-card-content>\r\n    <p>{{dish.description}}\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div [hidden]=\"dish || dishErrMess\">\r\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\r\n</div>\r\n<div *ngIf=\"dishErrMess\">\r\n  <h2>Error</h2>\r\n  <h4>{{dishErrMess}}</h4>\r\n</div>\r\n\r\n<mat-card *ngIf=\"promotion\" fxFlex [@expand]>\r\n  <mat-card-header>\r\n    <div mat-card-avatar></div>\r\n    <mat-card-title>\r\n      <h3>{{promotion.name | uppercase}}</h3>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <img mat-card-image src=\"{{ promotion.image }}\" alt={{promotion.name}}>\r\n  <mat-card-content>\r\n    <p>{{promotion.description}}\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div [hidden]=\"promotion || promoErrMess\">\r\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\r\n</div>\r\n<div *ngIf=\"promoErrMess\">\r\n  <h2>Error</h2>\r\n  <h4>{{promoErrMess}}</h4>\r\n</div>\r\n\r\n<mat-card *ngIf=\"leader\" fxFlex [@expand]>\r\n  <mat-card-header>\r\n    <div mat-card-avatar></div>\r\n    <mat-card-title>\r\n      <h3>{{leader.name | uppercase}} {{leader.abbr}}</h3>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <img mat-card-image src=\"{{ leader.image }}\" alt={{leader.name}}>\r\n  <mat-card-content>\r\n    <p>{{leader.designation}}</p>\r\n    <p>{{leader.description}}\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div [hidden]=\"leader || leaderErrMess\">\r\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\r\n</div>\r\n<div *ngIf=\"leaderErrMess\">\r\n  <h2>Error</h2>\r\n  <h4>{{leaderErrMess}}</h4>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/promotion.service */ "./src/app/services/promotion.service.ts");
/* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leader.service */ "./src/app/services/leader.service.ts");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishservice, promotionservice, leaderservice) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_4__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_4__["expand"])()
            ]
        }),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"],
            _services_promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"],
            _services_leader_service__WEBPACK_IMPORTED_MODULE_3__["LeaderService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    Login\r\n  <span class=\"flex-spacer\"></span>\r\n  <button mat-button mat-dialog-close>&times;</button>\r\n</mat-toolbar>\r\n\r\n<div *ngIf=\"errMess\">\r\n  <h2>Error</h2>\r\n  <h4>{{errMess}}</h4>\r\n</div>\r\n\r\n<form novalidate #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <mat-dialog-content>\r\n    <p>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\"  #username=\"ngModel\" required>\r\n        <mat-error *ngIf=\"username.errors?.required\">Username is required</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required>\r\n        <mat-error *ngIf=\"password.errors?.required\">Password is required</mat-error>\r\n      </mat-form-field>\r\n      <mat-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember Me</mat-checkbox>\r\n    </p>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <span class=\"flex-spacer\"></span>\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n    <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Login</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n<p>&nbsp;</p>\r\n<button mat-button class=\"background-accent text-floral-white\" (click)=\"googleLogin()\">Log In with Google</button>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogRef, authService) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.user = { username: '', password: '', remember: false };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log('User: ', this.user);
        this.authService.logIn(this.user);
        this.dialogRef.close();
    };
    LoginComponent.prototype.googleLogin = function () {
        this.authService.googleLogin();
        this.dialogRef.close();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     fxLayout=\"column\"\r\n     fxLayoutGap=\"10px\">\r\n\r\n  <div fxFlex>\r\n    <div>\r\n      <h3>Menu</h3>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxFlex *ngIf=\"dishes\" [@expand]>\r\n    <mat-grid-list cols=\"2\" rowHeight=\"200px\">\r\n      <mat-grid-tile *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail', dish._id]\" appHighlight>\r\n        <img height=\"200px\" src=\"{{dish.image}}\" alt={{dish.name}}>\r\n        <mat-grid-tile-footer>\r\n          <h1 matLine>{{dish.name | uppercase}}</h1>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n  <div [hidden]=\"dishes || errMess\">\r\n      <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\r\n  </div>\r\n  <div *ngIf=\"errMess\">\r\n    <h2>Error</h2>\r\n    <h4>{{errMess}}</h4>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(dishService) {
        this.dishService = dishService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuComponent.prototype.onSelect = function (dish) {
        this.selectedDish = dish;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_2__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_2__["expand"])()
            ]
        }),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.currentUser = null;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.currentUser) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.currentUser = null;
        this.authState = this.afAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    AuthService.prototype.getAuthState = function () {
        return this.authState;
    };
    AuthService.prototype.signUp = function () {
    };
    AuthService.prototype.logIn = function (user) {
        this.afAuth.auth.signInWithEmailAndPassword(user.username, user.password)
            .then(function (res) { return console.log(res); })
            .catch(function (error) {
            // Handle Errors here.
        });
    };
    AuthService.prototype.logOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.googleLogin = function () {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/dish.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/dish.service.ts ***!
  \******************************************/
/*! exports provided: DishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishService", function() { return DishService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DishService = /** @class */ (function () {
    function DishService(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.currentUser = null;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    DishService.prototype.getDishes = function () {
        return this.afs.collection('dishes').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        }));
    };
    DishService.prototype.getDish = function (id) {
        return this.afs.doc('dishes/' + id).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            var data = action.payload.data();
            var _id = action.payload.id;
            return __assign({ _id: _id }, data);
        }));
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.afs.collection('dishes', function (ref) { return ref.where('featured', '==', true); }).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            })[0];
        }));
    };
    DishService.prototype.getDishIds = function () {
        return this.getDishes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (dishes) { return dishes.map(function (dish) { return dish._id; }); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return error; }));
    };
    DishService.prototype.postComment = function (dishId, comment) {
        if (this.currentUser) {
            return this.afs.collection('dishes').doc(dishId).collection('comments')
                .add({
                author: {
                    '_id': this.currentUser.uid,
                    'firstname': this.currentUser.displayName ? this.currentUser.displayName : this.currentUser.email
                },
                rating: comment.rating,
                comment: comment.comment,
                createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp(),
                updatedAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp()
            });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    DishService.prototype.getComments = function (dishId) {
        return this.afs.collection('dishes').doc(dishId).collection('comments').valueChanges();
    };
    DishService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DishService);
    return DishService;
}());



/***/ }),

/***/ "./src/app/services/favorite.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/favorite.service.ts ***!
  \**********************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoriteService = /** @class */ (function () {
    function FavoriteService(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.userId = undefined;
        this.username = undefined;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.userId = user.uid;
                _this.username = user.email;
            }
            else {
                _this.userId = undefined;
            }
        });
    }
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        if (this.userId) {
            return this.afs.collection('favorites', function (ref) { return ref.where('user', '==', _this.userId); }).valueChanges();
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(new Error('No User Logged In!'));
        }
    };
    /*
      postFavorites(dishids: any) {
        return this.http.post(baseURL + 'favorites/', dishids)
        .catch(error => { return this.processHTTPMsgService.handleError(error); });
      } */
    FavoriteService.prototype.isFavorite = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.collection('favorites').where('user', '==', this.userId).where('dish', '==', id).get()
                .then(function (doc) {
                return !doc.empty;
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    FavoriteService.prototype.postFavorite = function (id) {
        if (this.userId) {
            return this.afs.collection('favorites').add({ user: this.userId, dish: id });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.collection('favorites').where('user', '==', this.userId).where('dish', '==', id).get()
                .then(function (doc) {
                doc.forEach(function (docu) {
                    return db.doc('favorites/' + docu.id).delete();
                });
            });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    FavoriteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ }),

/***/ "./src/app/services/leader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/leader.service.ts ***!
  \********************************************/
/*! exports provided: LeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderService", function() { return LeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaderService = /** @class */ (function () {
    function LeaderService(afs) {
        this.afs = afs;
    }
    LeaderService.prototype.getLeaders = function () {
        return this.afs.collection('leaders').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        }));
    };
    LeaderService.prototype.getLeader = function (id) {
        return this.afs.doc('leaders/' + id).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            var data = action.payload.data();
            var _id = action.payload.id;
            return __assign({ _id: _id }, data);
        }));
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return this.afs.collection('leaders', function (ref) { return ref.where('featured', '==', true); }).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            })[0];
        }));
    };
    LeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], LeaderService);
    return LeaderService;
}());



/***/ }),

/***/ "./src/app/services/promotion.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/promotion.service.ts ***!
  \***********************************************/
/*! exports provided: PromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function() { return PromotionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromotionService = /** @class */ (function () {
    function PromotionService(afs) {
        this.afs = afs;
    }
    PromotionService.prototype.getPromotions = function () {
        return this.afs.collection('promotions').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        }));
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.afs.doc('promotions/' + id).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            var data = action.payload.data();
            var _id = action.payload.id;
            return __assign({ _id: _id }, data);
        }));
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.afs.collection('promotions', function (ref) { return ref.where('featured', '==', true); }).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            })[0];
        }));
    };
    PromotionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], PromotionService);
    return PromotionService;
}());



/***/ }),

/***/ "./src/app/shared/feedback.ts":
/*!************************************!*\
  !*** ./src/app/shared/feedback.ts ***!
  \************************************/
/*! exports provided: Feedback, ContactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Tel', 'Email'];


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB42jGkUBVg6DQOd7xWUu-yg_PghuVJ5_Q",
        authDomain: "confusionserver-9544d.firebaseapp.com",
        databaseURL: "https://confusionserver-9544d.firebaseio.com",
        projectId: "confusionserver-9544d",
        storageBucket: "confusionserver-9544d.appspot.com",
        messagingSenderId: "548707381209"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tmani_000\Documents\Coursera\FireBaseAngular6(heroku)\conFusion-Angular6-Firebase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map