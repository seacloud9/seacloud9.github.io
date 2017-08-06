webpackJsonp([1,4],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(title) {
        this.title = title;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.title.setTitle('About Angular Wordpress');
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(483),
        styles: [__webpack_require__(437)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(title) {
        this.title = title;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title.setTitle('SeaCloud9 Blog Roll');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(485),
        styles: [__webpack_require__(440)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = (function () {
    function IntroComponent() {
        this.config = {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 0
        };
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    return IntroComponent;
}());
IntroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-intro',
        template: __webpack_require__(486),
        styles: [__webpack_require__(441)]
    }),
    __metadata("design:paramtypes", [])
], IntroComponent);

//# sourceMappingURL=intro.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostDetailComponent = (function () {
    function PostDetailComponent(postsService, route, router, ref) {
        this.postsService = postsService;
        this.route = route;
        this.router = router;
        this.ref = ref;
    }
    PostDetailComponent.prototype.getPost = function (slug) {
        var _this = this;
        window['scrollTo'](0, 0);
        this.postsService
            .getPost(slug)
            .subscribe(function (res) {
            _this.post = res[0];
            _this.ref.detectChanges();
            window['catchAllImgageErrors']();
        });
    };
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var slug = params['slug'];
            _this.getPost(slug);
        });
    };
    PostDetailComponent.prototype.selectPost = function (slug) {
        slug = slug.split('/');
        this.router.navigate([slug[0], slug[1], slug[2], slug[3]]);
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-detail',
        template: __webpack_require__(487),
        styles: [__webpack_require__(442)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__["a" /* WordpressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__["a" /* WordpressService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], PostDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-detail.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SocialDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PostListComponent = (function () {
    function PostListComponent(title, router, route, ref, wordpressService, dialog) {
        var _this = this;
        this.title = title;
        this.router = router;
        this.route = route;
        this.ref = ref;
        this.wordpressService = wordpressService;
        this.dialog = dialog;
        this.route.params.forEach(function (params) {
            if (params['page'] !== undefined) {
                _this._currentPage = params['page'];
            }
            else {
                _this._currentPage = 1;
            }
        });
    }
    PostListComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(SocialDialogComponent);
    };
    PostListComponent.prototype.getPosts = function (page) {
        var _this = this;
        if (page === void 0) { page = null; }
        this.wordpressService
            .getPosts((page === null ? null : page))
            .subscribe(function (res) {
            if (_this._posts === undefined) {
                _this._posts = _this.sortDate(res);
            }
            else {
                _this._posts = _this._posts.concat(_this.sortDate(res));
            }
            _this.ref.detectChanges();
        });
    };
    PostListComponent.prototype.sortDate = function (_data) {
        for (var i = 0; i < _data.length; i++) {
            _data[i].slugFormat = new Date(_data[i].date).toLocaleDateString('en-US', { year: 'numeric' });
            _data[i].slugFormat += "/" + new Date(_data[i].date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
        }
        return _data;
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['page'] !== undefined) {
                _this.getPosts(params['page']);
            }
            else {
                _this.getPosts();
            }
        });
    };
    PostListComponent.prototype.onScrollDown = function () {
        this._currentPage++;
        if (this._currentPage > 0 && this._posts.length !== undefined && this._posts.length < 50) {
            this.getPosts(this._currentPage);
            history.replaceState({}, '', '/page/' + this._currentPage);
        }
    };
    PostListComponent.prototype.selectPost = function (slug) {
        slug = slug.split('/');
        this.router.navigate([slug[0], slug[1], slug[2], slug[3]]);
    };
    return PostListComponent;
}());
PostListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-list',
        template: __webpack_require__(489),
        styles: [__webpack_require__(444)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__["a" /* WordpressService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__["a" /* WordpressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__["a" /* WordpressService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _f || Object])
], PostListComponent);

var SocialDialogComponent = (function () {
    function SocialDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return SocialDialogComponent;
}());
SocialDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <p>This is a dialog</p>\n    <p>\n      <label>\n        This is a text box inside of a dialog.\n        <input #dialogInput>\n      </label>\n    </p>\n    <p> <button md-button (click)=\"dialogRef.close(dialogInput.value)\">CLOSE</button> </p>\n  ",
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialogRef */]) === "function" && _g || Object])
], SocialDialogComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vr_module__ = __webpack_require__(153);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "vrModuleReducer", function() { return __WEBPACK_IMPORTED_MODULE_0__vr_module__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VR_MODULE_REMOVED", function() { return __WEBPACK_IMPORTED_MODULE_0__vr_module__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VR_MODULE_ADDED", function() { return __WEBPACK_IMPORTED_MODULE_0__vr_module__["c"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vr_module_reducer__ = __webpack_require__(275);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vr_module_reducer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vr_module_reducer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__vr_module_reducer__["c"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_core_add_operator_select__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ngrx_core_add_operator_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrModuleService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Provides vr-module loading services. // !!UNUSED!!
 * @type {Injectable}
 */





// State Management with Redux





/**
 * Service for managing vr modules
 *
 * @export
 * @class VrModuleService
 * @extends {Subject<IVrModule>}
 */
var VrModuleService = (function (_super) {
    __extends(VrModuleService, _super);
    function VrModuleService(store, logService) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.logService = logService;
        return _this;
    }
    /**
     * Registers a vr module
     * @return {Observable<IServiceMessage>} Observable stream of IServiceMessage instances
     */
    VrModuleService.prototype.registerModule = function () {
        var _this = this;
        return this.asObservable().map(function (mod) {
            if (!__WEBPACK_IMPORTED_MODULE_8_lodash__["isNil"](mod) &&
                !__WEBPACK_IMPORTED_MODULE_8_lodash__["isNil"](mod.id) &&
                !__WEBPACK_IMPORTED_MODULE_8_lodash__["isNil"](mod.name)) {
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_9__reducers__["VR_MODULE_ADDED"], payload: mod });
                return {
                    id: '0000',
                    content: "Registered vr module '" + mod.name + "'"
                };
            }
            return {
                id: '000',
                content: mod ? "Could not register vr module '" + mod.id + "'" :
                    "Could not register unknown vr module"
            };
        });
    };
    /**
     * Unregisters a vr module
     *
     * @returns {Observable<IServiceMessage>} Observable stream of IServiceMessage instances
     */
    VrModuleService.prototype.unregisterModule = function () {
        var _this = this;
        return this.asObservable().map(function (mod) {
            if (!__WEBPACK_IMPORTED_MODULE_8_lodash__["isNil"](mod) &&
                !__WEBPACK_IMPORTED_MODULE_8_lodash__["isNil"](mod.id)) {
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_9__reducers__["VR_MODULE_REMOVED"], payload: mod });
                return {
                    id: '0000',
                    content: "Unregistered vr module '" + mod.name + "'"
                };
            }
            return {
                id: '000',
                content: mod ? "Could not unregister vr module '" + mod.id + "'" :
                    "Could not unregister unknown vr module"
            };
        });
    };
    return VrModuleService;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]));
VrModuleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__log_service__["a" /* LogService */]) === "function" && _b || Object])
], VrModuleService);

var _a, _b;
//# sourceMappingURL=vr-module.service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordpressService = (function () {
    function WordpressService($http) {
        this.$http = $http;
        this.postsUrl = "https://i-create.org/wp-json/wp/v2/";
    }
    WordpressService.prototype.getPosts = function (page) {
        var _this = this;
        if (page === void 0) { page = null; }
        this.post = this.$http
            .get((page === null ? this.postsUrl + 'posts' : this.postsUrl + 'posts?page=' + page))
            .map(function (res) {
            _this.store = { post: res.json() };
            _this._post = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](Object.assign({}, _this.store).post);
            return _this.store.post;
        });
        return this.post;
    };
    WordpressService.prototype.getPost = function (slug) {
        return this.$http
            .get(this.postsUrl + ("posts?slug=" + slug))
            .map(function (res) { return res.json(); });
    };
    return WordpressService;
}());
WordpressService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WordpressService);

var _a;
//# sourceMappingURL=wordpress.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aframe_aframe_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_log_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_core_add_operator_select__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ngrx_core_add_operator_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Routing


// VR Module
// Services


// State Management with Redux


var Wrapper = (function () {
    /**
     * Creates an instance of Wrapper.
     * This component is responsible for setting up the stage for vr modules.
     *
     * @param {Router} router
     * @param {ActivatedRoute} route
     * @param {ChangeDetectorRef} changeDetectorRef
     * @param {ViewContainerRef} viewContainerRef
     * @param {ComponentResolver} componentResolver
     * @param {Injector} injector
     * @param {LogService} logService
     * @param {VrModuleService} vrModuleService
     * @param {Store<IAppState>} store
     */
    function Wrapper(router, route, changeDetectorRef, logService, store) {
        this.router = router;
        this.route = route;
        this.changeDetectorRef = changeDetectorRef;
        this.logService = logService;
        this.store = store;
        this.componentData = null;
        this.availableModules = [];
        this.vrScripts = [];
    }
    Wrapper.prototype.ngOnInit = function () {
        this.initSubscriptions();
    };
    Wrapper.prototype.ngAfterViewInit = function () {
    };
    Wrapper.prototype.ngOnDestroy = function () {
        this.destroySubscriptions();
    };
    Wrapper.prototype.ngOnChanges = function (changes) {
    };
    Wrapper.prototype.initSubscriptions = function () {
        var _this = this;
        this.modules = this.store.select('vrModuleReducer');
        this.modulesSubscription = this.modules.subscribe(function (mods) { return _this.availableModules = mods; });
        this.routeSubscription = this.route.params.subscribe(function (params) {
            var id = params['id'];
            var mod = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](_this.availableModules, function (_mod) { return _mod.id === id; });
            _this.src = mod ? mod.markup : undefined;
            _this.vrScripts = mod ? mod.scripts : [];
            _this.componentData = {
                component: __WEBPACK_IMPORTED_MODULE_2__aframe_aframe_component__["a" /* AframeComponent */],
                inputs: {
                    html: _this.src
                }
            };
            _this.changeDetectorRef.markForCheck();
        });
    };
    Wrapper.prototype.destroySubscriptions = function () {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
        }
        if (this.modulesSubscription) {
            this.modulesSubscription.unsubscribe();
        }
    };
    return Wrapper;
}());
Wrapper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vr-wrapper',
        styles: [__webpack_require__(447)],
        template: __webpack_require__(492),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_log_service__["a" /* LogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* Store */]) === "function" && _e || Object])
], Wrapper);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=wrapper.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 242;


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_store__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(276);





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_1__app_app_store__["a" /* appStore */]]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_enums__ = __webpack_require__(271);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return predefinedModules; });
// Enums

var hello = {
    id: '001',
    name: 'hello',
    type: __WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* VrModuleType */].AFrame,
    markup: "\n               \n              <a-scene>\n                  <a-sphere position=\"0 1.25 -1\" radius=\"1.25\" color=\"#EF2D5E\"></a-sphere>\n                  <a-box position=\"-1 0.5 1\" rotation=\"0 45 0\" width=\"1\" height=\"1\" depth=\"1\"  \n                  color=\"#4CC3D9\"></a-box>\n                  <a-cylinder position=\"1 0.75 1\" radius=\"0.5\" height=\"1.5\" color=\"#FFC65D\">\n                  </a-cylinder>\n                  <a-plane rotation=\"-90 0 0\" width=\"4\" height=\"4\" color=\"#7BC8A4\"></a-plane>\n                  <a-sky color=\"#ECECEC\"></a-sky>\n              </a-scene>\n              "
};
var tron = {
    id: '666',
    name: 'tron',
    type: __WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* VrModuleType */].AFrame,
    markup: "     \n          <a-scene>\n              <a-assets>\n                  <a-asset-item id=\"logo-obj\" src=\"/assets/model/logo.obj\"></a-asset-item>\n                  <img id=\"sky\" src=\"https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg\" crossorigin=\"anonymous\" />\n              </a-assets>\n              <a-entity obj-model=\"obj: #logo-obj\" id=\"target\" position=\"0 0.6 0\" rotation=\"-90 0 -180\" material=\"color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky; side:double\"></a-entity>\n          \n              <a-sky src=\"#sky\" rotation=\"0 -90 0\"></a-sky>\n          \n              <a-entity position=\"0 0 4\">\n                  <a-camera target=\"#target\" distance=\"1\" orbit-controls look-controls-enabled=false wasd-controls-enabled=false position=\"0 0 0\" ></a-camera>\n        \n              </a-entity>\n          </a-scene>\n          "
};
var curvedMockups = {
    id: '002',
    name: 'curved mockups',
    type: __WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* VrModuleType */].AFrame,
    markup: "\n    <a-scene>\n            <a-assets>\n                <img id=\"mozvr\" src=\"/assets/images/mozvr.png\">\n                <img id=\"shadow2\" src=\"/assets/images/radial-shadow-2.png\">\n                <img id=\"ui1\" src=\"/assets/images/ui-1.png\">\n                <img id=\"ui2\" src=\"/assets/images/ui-2.png\">\n                <img id=\"ui3\" src=\"/assets/images/ui-3.png\">\n            </a-assets>\n            <a-curvedimage src=\"#ui3\" radius=\"5.7\" theta-length=\"180\" height=\"9\"\n                            rotation=\"0 90 0\" scale=\"1.2 1.2 1.2\"></a-curvedimage>\n            <a-curvedimage src=\"#mozvr\" radius=\"5.7\" theta-length=\"17\" height=\".36\"\n                            opacity=\"0.2\" rotation=\"0 250 0\" position=\"0 2 0\"></a-curvedimage>\n            <a-curvedimage src=\"#ui1\" radius=\"5.7\" theta-length=\"72\" height=\"2.6\"\n                        rotation=\"0 80 0\" position=\"0 0.7 0\" scale=\"0.6 0.6 0.6\"></a-curvedimage>\n            <a-curvedimage src=\"#ui2\" radius=\"5.7\" theta-length=\"70\" height=\"3.02\"\n                            rotation=\"0 -130 0\" scale=\"0.8 0.8 0.8\"></a-curvedimage>\n            <a-image position=\"0 -5 0\" src=\"#shadow2\" rotation=\"-90 0 0\" scale=\"6 6 6\"></a-image>\n            <a-sky color=\"#fff\"></a-sky>\n            <a-camera position=\"0 1.8 1.5\"></a-camera>\n            </a-scene>\n    "
};
var spheresAndFog = {
    id: '003',
    name: 'spheres and fog',
    type: __WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* VrModuleType */].AFrame,
    markup: "\n    <a-scene fog=\"type: linear; color: #AAB; far: 30; near: 0\">\n        <a-assets>\n        <img id=\"highlight1\" src=\"/assets/images/radial-highlight.png\">\n        <img id=\"shadow3\" src=\"/assets/images/radial-shadow-3.png\">\n        </a-assets>\n        <!-- Ground Highlight -->\n        <a-image position=\"0 -.2 5\" src=\"#highlight1\" rotation=\"-90 0 0\"\n                scale=\"30 30 30\"></a-image>\n        <!-- Orange -->\n        <a-entity position=\"0 0 -5\">\n        <a-sphere position=\"0 4.2 0\" radius=\"4.2\" color=\"#F16745\"\n                    roughness=\"0.8\" width-segments=\"52\" height-segments=\"52\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"3 3 3\"></a-image>\n        </a-entity>\n        <!-- Green -->\n        <a-entity position=\"-3 0 0\">\n        <a-sphere position=\"0 1.75 0\" radius=\"1.75\" color=\"#7BC8A4\"\n                    roughness=\"0.2\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"1.75 1.75 1.75\"></a-image>\n        </a-entity>\n        <!-- Blue -->\n        <a-entity position=\"1 0 0\">\n        <a-sphere position=\"0 1 0\" radius=\"1\" color=\"#4CC3D9\" metalness=\"0.1\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"1 1 1\"></a-image>\n        </a-entity>\n        <!-- Yellow -->\n        <a-entity position=\"3 0 1\">\n        <a-sphere position=\"0 0.5 0\" radius=\"0.5\" color=\"#FFC65D\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"0.5 0.5 0.5\"></a-image>\n        </a-entity>\n        <!-- Purple -->\n        <a-entity position=\"20 0 -2\">\n        <a-sphere position=\"0 10 0\" radius=\"10\" color=\"#93648D\"\n                    segments-width=\"52\" segments-height=\"52\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"9 9 9\"></a-image>\n        </a-entity>\n        <!-- Yellow -->\n        <a-entity position=\"-24 0 -34\">\n        <a-sphere position=\"0 18 0\" radius=\"18\" color=\"#FFC65D\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"8 8 8\"></a-image>\n        </a-entity>\n        <!-- Green -->\n        <a-entity position=\"25 0 20\">\n        <a-sphere position=\"0 12 0\" radius=\"12\" color=\"#7BC8A4\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"8 8 8\"></a-image>\n        </a-entity>\n        <!-- White -->\n        <a-entity position=\"-15 0 5\">\n        <a-sphere position=\"0 3 0\" radius=\"3\" color=\"#ECECEC\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"3 3 3\"></a-image>\n        </a-entity>\n        <!-- Orange -->\n        <a-entity position=\"-6 0 6\">\n        <a-sphere position=\"0 1 0\" radius=\"1\" color=\"#F16745\" roughness=\"0.8\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"1 1 1\"></a-image>\n        </a-entity>\n        <!-- Yellow -->\n        <a-entity position=\"-20 0 30\">\n        <a-sphere position=\"0 30 0\" radius=\"30\" color=\"#FFC65D\" roughness=\"0.6\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"15 15 15\"></a-image>\n        </a-entity>\n        <!-- Blue -->\n        <a-entity position=\"-1 0 14\">\n        <a-sphere position=\"0 2 0\" radius=\"2\" color=\"#4CC3D9\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"2 2 2\"></a-image>\n        </a-entity>\n        <!-- Orange -->\n        <a-entity position=\"10 0 15\">\n        <a-sphere position=\"0 4 0\" radius=\"4\" color=\"#F16745\" roughness=\"1\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"2 2 2\"></a-image>\n        </a-entity>\n        <!-- Blue -->\n        <a-entity position=\"6 0 4\">\n        <a-sphere position=\"0 1.5 0\" radius=\"1.5\" color=\"#4CC3D9\" metalness=\"0.1\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"1.5 1.5 1.5\"></a-image>\n        </a-entity>\n        <!-- Yellow -->\n        <a-entity position=\"5 0 14\">\n        <a-sphere position=\"0 .6 0\" radius=\".6\" color=\"#FFC65D\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"0.6 0.6 0.6\"></a-image>\n        </a-entity>\n        <!-- Purple -->\n        <a-entity position=\"5 0 25\">\n        <a-sphere position=\"0 2 0\" radius=\"2\" color=\"#93648D\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"2 2 2\"></a-image>\n        </a-entity>\n        <!-- White -->\n        <a-entity position=\"2 0 15\">\n        <a-sphere position=\"0 0.2 0\" radius=\"0.2\" color=\"#ECECEC\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"0.2 0.2 0.2\"\n                opacity=\"0.5\"></a-image>\n        </a-entity>\n        <!-- Purple -->\n        <a-entity position=\"4 0 10\">\n        <a-sphere position=\"0 0.15 0\" radius=\"0.15\" color=\"#93648D\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"0.25 0.25 0.25\"\n                opacity=\"0.6\"></a-image>\n        </a-entity>\n        <!-- Blue -->\n        <a-entity position=\"4 0 11\">\n        <a-sphere position=\"0 0.1 0\" radius=\"0.1\" color=\"#4CC3D9\"></a-sphere>\n        <a-image src=\"#shadow\" rotation=\"-90 0 0\" scale=\"0.15 0.15 0.15\"\n                opacity=\"0.6\"></a-image>\n        </a-entity>\n        <!-- Green -->\n        <a-entity position=\"5 0 11\">\n        <a-sphere position=\"0 0.3 0\" radius=\"0.3\" color=\"#7BC8A4\"></a-sphere>\n        <a-image src=\"#shadow3\" rotation=\"-90 0 0\" scale=\"0.25 0.25 0.25\"\n                opacity=\"0.6\"></a-image>\n        </a-entity>\n        <!-- Background -->\n        <a-sky color=\"#AAB\"></a-sky>\n    </a-scene>\n    "
};
var shopping = {
    id: '004',
    name: 'shopping',
    type: __WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* VrModuleType */].AFrame,
    markup: "\n        <a-scene>\n        <a-assets>\n                <a-asset-item id=\"why-male-models\" \n                                src=\"/assets/images/shopping/man/man.dae\">\n                </a-asset-item>\n                <img id=\"fall\" src=\"/assets/images/shopping/fall.png\">\n                <img id=\"goggles\" src=\"/assets/images/shopping/goggles.png\">\n                <img id=\"mozvr\" src=\"/assets/images/mozvr.png\">\n                <img id=\"price\" src=\"/assets/images/shopping/price.png\">\n                <img id=\"shadow2\" src=\"assets/images/radial-shadow-2.png\">\n                <img id=\"shoes\" src=\"/assets/images/shopping/shoes.png\">\n        </a-assets>\n        <a-camera position=\"0 1.6 0\"></a-camera>\n        <a-entity id=\"model\" position=\"0 0 -2\">\n        <a-animation attribute=\"rotation\" from=\"0 -30 0\" to=\"0 330 0\" dur=\"15000\"\n                        easing=\"linear\" repeat=\"infinite\"></a-animation>\n        <a-collada-model position=\"-.35 0 .55\" rotation=\"0 -20 0\" scale=\"1.5 1.5 1.5\"\n                                src=\"#why-male-models\"></a-collada-model>\n                <a-image src=\"#shadow2\" rotation=\"-90 0 0\" scale=\"0.5 0.5 0.5\"></a-image>\n        </a-entity>\n        <a-curvedimage id=\"mozvr-logo\" src=\"#mozvr\" radius=\"5.7\" theta-length=\"36\" height=\"1\"\n                        position=\"0 2.6 0\" opacity=\"0.5\">\n        <a-animation attribute=\"rotation\" from=\"0 10 0\" to=\"0 200 0\" begin=\"500\"\n                        dur=\"1000\"></a-animation>\n        </a-curvedimage>\n        <a-image id=\"price\" src=\"#price\" width=\"7\" height=\"3.5\" scale=\"0.2 0.2 0.2\">\n        <a-animation attribute=\"position\" from=\"0 2.8 -6\" to=\"2.25 2.8 -6\" begin=\"1000\"\n                        dur=\"1000\"></a-animation>\n        </a-image>\n        <a-cylinder id=\"goggles\" color=\"#101010\" height=\"0.02\" radius=\"0.8\">\n        <a-animation attribute=\"rotation\" from=\"-270 0 0\" to=\"-90 0 0\" dur=\"750\" begin=\"1000\"\n                fill=\"both\"></a-animation>\n        <a-animation attribute=\"position\" from=\"8 0 -9\" to=\"8 3.5 -9\" dur=\"750\" begin=\"1000\"\n                fill=\"both\"></a-animation>\n        <a-image src=\"#goggles\" width=\"2\" height=\"1\" rotation=\"90 0 0\" position=\"0 -.05 0\"\n                scale=\".4 .4 .4\"></a-image>\n        </a-cylinder>\n        <a-curvedimage id=\"stereoscopic-fall-collection-text\" src=\"#fall\" radius=\"5.7\"\n                        theta-length=\"18\" height=\".45\" position=\"0 0.9 0\" scale=\".4 .4 .4\">\n                <a-animation attribute=\"rotation\" from=\"0 180 0\" to=\"0 210 0\" begin=\"750\"\n                        dur=\"1000\"></a-animation>\n        </a-curvedimage>\n        <a-curvedimage id=\"shoes\" src=\"#shoes\" radius=\"5.7\" theta-length=\"18\" height=\".8\"\n                        position=\"0 0.9 0\" scale=\".4 .4 .4\">\n                <a-animation attribute=\"rotation\" from=\"0 180 0\" to=\"0 130 0\" begin=\"750\"\n                        dur=\"1000\"></a-animation>\n        </a-curvedimage>\n        <a-entity>\n        <a-cylinder position=\"0 0.5 0\" radius=\"4\" height=\"1.6\" side=\"back\" open-ended=\"true\"\n                color=\"#FFF\"></a-cylinder>\n        </a-entity>\n            <a-sky color=\"#ECECEC\"></a-sky>\n            <a-light type=\"directional\" color=\"#fff\" intensity=\"0.2\" position=\"-1 2 1\"></a-light>\n            <a-light type=\"ambient\" color=\"#fff\"></a-light>\n        </a-scene>\n    "
};
var dynamicLights = {
    id: '005',
    name: 'dynamic lights',
    type: __WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* VrModuleType */].AFrame,
    markup: "\n          <a-scene>\n                <a-assets>\n                        <a-mixin id=\"light\" geometry=\"primitive: sphere; radius: 1.5\"\n                                material=\"color: #FFF; shader: flat\"\n                                light=\"color: #DDDDFF; distance: 120; intensity: 2; type: point\">\n                        </a-mixin>\n                        <a-mixin id=\"torus-knot\" geometry=\"primitive: torusKnot\"\n                                material=\"color: red\"></a-mixin>\n                </a-assets>\n                <!-- Camera. -->\n                <a-entity position=\"0 0 80\" camera=\"fov: 45\"\n                                look-controls wasd-controls></a-entity>\n                <!-- Skysphere. -->\n                <a-entity geometry=\"primitive: sphere; radius: 300\"\n                                material=\"color: #111; shader: flat\"\n                                scale=\"-1 -1 -1\"></a-entity>\n                <!-- Lights. -->\n                <a-entity position=\"0 0 0\">\n                        <a-animation attribute=\"rotation\" to=\"0 0 360\"\n                                repeat=\"indefinite\" easing=\"linear\" dur=\"4096\">\n                        </a-animation>\n                        <a-entity mixin=\"light\" position=\"30 0 0\"></a-entity>\n                </a-entity>\n                <a-entity position=\"0 0 0\">\n                        <a-animation attribute=\"rotation\" to=\"360 0 0\"\n                                repeat=\"indefinite\" easing=\"linear\" dur=\"4096\">\n                        </a-animation>\n                        <a-entity mixin=\"light\" position=\"0 0 40\"></a-entity>\n                </a-entity>\n           </a-scene>\n        ",
    scripts: [
        "\n                var scene = document.querySelector('a-scene');\n                for (var i = 0; i < 120; i++) {\n                        var obj = document.createElement('a-entity');\n                        obj.setAttribute('geometry', {\n                        primitive: 'torusKnot',\n                        radius: Math.random() * 10,\n                        radiusTubular: Math.random() * .75,\n                        p: Math.round(Math.random() * 10),\n                        q: Math.round(Math.random() * 10)\n                        });\n                        obj.setAttribute('material', {\n                        color: getRandColor(),\n                        metalness: Math.random(),\n                        roughness: Math.random()\n                        });\n                        obj.setAttribute('position', {\n                        x: getRandCoord(),\n                        y: getRandCoord(),\n                        z: getRandCoord()\n                        });\n                        scene.appendChild(obj);\n                }\n                function getRandColor () {\n                        var letters = '0123456789ABCDEF'.split('');\n                        var color = '#';\n                        for (var i = 0; i < 6; i++) {\n                        color += letters[Math.floor(Math.random() * 16)];\n                        }\n                        return color;\n                }\n                function getRandCoord () {\n                        var coord = Math.random() * 60;\n                        return Math.random() < .5 ? coord + 5 : coord * -1 - 5;\n                }\n                "
    ]
};
var predefinedModules = [hello, curvedMockups,
    spheresAndFog, shopping, tron,
    dynamicLights];
//# sourceMappingURL=app-loader.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_loader__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_log_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_vr_module_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Services



var AppComponent = (function () {
    function AppComponent(router, logService, route, vrModuleService, store) {
        this.router = router;
        this.logService = logService;
        this.route = route;
        this.vrModuleService = vrModuleService;
        this.store = store;
        this.title = 'SeaCloud9 Blog';
        this.navOpen = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.logService.logEx("Init", 'App');
        this.availableModules = this.store.select('vrModuleReducer');
        this.initSubscriptions();
        this.registerVrModules(__WEBPACK_IMPORTED_MODULE_2__app_loader__["a" /* predefinedModules */]);
    };
    AppComponent.prototype.initSubscriptions = function () {
        var _this = this;
        this.routeSubscription = this.route.params.subscribe(function (data) {
            _this.logService.logJson(data, 'App');
        });
        this.moduleSubscription = this.vrModuleService.registerModule().subscribe(function (message) {
            _this.logService.logEx(message.content, 'App');
        });
    };
    //registered correctly?
    AppComponent.prototype.registerVrModules = function (modules) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_lodash__["each"](modules, function (mod) { return _this.vrModuleService.next(mod); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(484),
        styles: [__webpack_require__(439)]
        //providers: [Store],
        //changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_log_service__["a" /* LogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_vr_module_service__["a" /* VrModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_vr_module_service__["a" /* VrModuleService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_layout_header_header_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_layout_footer_footer_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_list_post_list_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_pipes_SanitizeHtml__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__post_detail_post_detail_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_responsive__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2share_share_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng_lazyload_image__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_infinite_scroll__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_toastr_ng2_toastr__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_useful_swiper__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_log_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_vr_module_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngrx_store__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_reducers__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__wrapper_wrapper_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dynamic_dynamic_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__aframe_aframe_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__post_list_card_post_list_card_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__intro_intro_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ang2_parallax_ng2parallax__ = __webpack_require__(258);
/* unused harmony export ResponsiveDefinition */
/* unused harmony export createInstrumentOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var config = {
    breakPoints: {
        xs: { max: 600 },
        sm: { min: 601, max: 959 },
        md: { min: 960, max: 1279 },
        lg: { min: 1280, max: 1919 },
        xl: { min: 1920 }
    },
    debounceTime: 100 // allow to debounce checking timer
};
function ResponsiveDefinition() {
    return new __WEBPACK_IMPORTED_MODULE_16_ng2_responsive__["ResponsiveConfig"](config);
}
;
function createInstrumentOptions() {
    return {
        maxAge: 5
    };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__shared_layout_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_layout_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__post_list_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_pipes_SanitizeHtml__["a" /* SanitizeHtml */],
            __WEBPACK_IMPORTED_MODULE_11__post_list_post_list_component__["b" /* SocialDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__post_detail_post_detail_component__["a" /* PostDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_26__wrapper_wrapper_component__["a" /* Wrapper */],
            __WEBPACK_IMPORTED_MODULE_27__dynamic_dynamic_component__["a" /* DynamicComponent */],
            __WEBPACK_IMPORTED_MODULE_28__aframe_aframe_component__["a" /* AframeComponent */],
            __WEBPACK_IMPORTED_MODULE_29__post_list_card_post_list_card_component__["a" /* PostListCardComponent */],
            __WEBPACK_IMPORTED_MODULE_31_ang2_parallax_ng2parallax__["a" /* ng2Parallax */],
            __WEBPACK_IMPORTED_MODULE_30__intro_intro_component__["a" /* IntroComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_11__post_list_post_list_component__["b" /* SocialDialogComponent */], __WEBPACK_IMPORTED_MODULE_27__dynamic_dynamic_component__["a" /* DynamicComponent */], __WEBPACK_IMPORTED_MODULE_28__aframe_aframe_component__["a" /* AframeComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_17_ng2share_share_module__["a" /* ShareModule */],
            __WEBPACK_IMPORTED_MODULE_16_ng2_responsive__["ResponsiveModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18_ng_lazyload_image__["LazyLoadImageModule"],
            __WEBPACK_IMPORTED_MODULE_19_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_21_angular2_useful_swiper__["SwiperModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_24__ngrx_store__["b" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_25__shared_reducers__)
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_16_ng2_responsive__["ResponsiveConfig"],
                useFactory: ResponsiveDefinition
            }, { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["APP_BASE_HREF"], useValue: '/ngwordpress' }, __WEBPACK_IMPORTED_MODULE_22__shared_services_log_service__["a" /* LogService */], __WEBPACK_IMPORTED_MODULE_23__shared_services_vr_module_service__["a" /* VrModuleService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapper_wrapper_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_detail_post_detail_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_list_post_list_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__intro_intro_component__ = __webpack_require__(149);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'intro', component: __WEBPACK_IMPORTED_MODULE_5__intro_intro_component__["a" /* IntroComponent */] },
    {
        path: 'post', component: __WEBPACK_IMPORTED_MODULE_3__post_list_post_list_component__["a" /* PostListComponent */]
    },
    {
        path: 'page/:page', component: __WEBPACK_IMPORTED_MODULE_3__post_list_post_list_component__["a" /* PostListComponent */]
    },
    {
        path: ':year/:month/:day/:slug',
        component: __WEBPACK_IMPORTED_MODULE_2__post_detail_post_detail_component__["a" /* PostDetailComponent */]
    },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
    { path: 'aframe/:id', component: __WEBPACK_IMPORTED_MODULE_0__wrapper_wrapper_component__["a" /* Wrapper */] },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_reducers_vr_module__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appStore; });

// Reducers

var AppStore = (function () {
    function AppStore(logService) {
        this.logService = logService;
        this.logService.logEx("Initialized", 'AppStore');
    }
    return AppStore;
}());
// Define App-Store
var appStore = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* provideStore */])({
    vrModule: __WEBPACK_IMPORTED_MODULE_1__shared_reducers_vr_module__["a" /* vrModuleReducer */]
}, {
    vrModule: this.vrModule
});

//# sourceMappingURL=app.store.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aframe_aframe_component__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicComponent = (function () {
    function DynamicComponent(resolver) {
        this.resolver = resolver;
        this.currentComponent = null;
    }
    Object.defineProperty(DynamicComponent.prototype, "componentData", {
        // component: Class for the component you want to create
        // inputs: An object with key/value pairs mapped to input name/input value
        set: function (data) {
            if (!data) {
                return;
            }
            // Inputs need to be in the following format to be resolved properly
            var inputProviders = Object.keys(data.inputs).map(function (inputName) { return { provide: inputName, useValue: data.inputs[inputName] }; });
            var resolvedInputs = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve(inputProviders);
            // We create an injector out of the data we want to pass down and this components injector
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            // We create a factory out of the component we want to create
            var factory = this.resolver.resolveComponentFactory(data.component);
            // We create the component using the factory and the injector
            var component = factory.create(injector);
            // We insert the component into the dom container
            this.dynamicComponentContainer.insert(component.hostView);
            // We can destroy the old component is we like by calling destroy
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    return DynamicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DynamicComponent.prototype, "html", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dynamicComponentContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object)
], DynamicComponent.prototype, "dynamicComponentContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DynamicComponent.prototype, "componentData", null);
DynamicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vr-component',
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__aframe_aframe_component__["a" /* AframeComponent */]],
        template: "<div #dynamicComponentContainer></div>",
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _b || Object])
], DynamicComponent);

var _a, _b;
//# sourceMappingURL=dynamic.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostListCardComponent = (function () {
    function PostListCardComponent(router) {
        this.router = router;
    }
    PostListCardComponent.prototype.selectPost = function (slug) {
        slug = slug.split('/');
        this.router.navigate([slug[0], slug[1], slug[2], slug[3]]);
    };
    PostListCardComponent.prototype.ngOnInit = function () {
    };
    return PostListCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostListCardComponent.prototype, "PostContent", void 0);
PostListCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'PostListCard',
        template: __webpack_require__(488),
        styles: [__webpack_require__(443)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PostListCardComponent);

var _a;
//# sourceMappingURL=post-list-card.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrModuleType; });
var VrModuleType;
(function (VrModuleType) {
    VrModuleType[VrModuleType["Unknown"] = 0] = "Unknown";
    VrModuleType[VrModuleType["AFrame"] = 1] = "AFrame";
    VrModuleType[VrModuleType["ThreeJs"] = 2] = "ThreeJs";
})(VrModuleType || (VrModuleType = {}));

//# sourceMappingURL=VrModuleType.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations_VrModuleType__ = __webpack_require__(270);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__declarations_VrModuleType__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(490),
        styles: [__webpack_require__(445)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.navOpen = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.outerClick = function (event) {
        if (event.keyCode === 27 && this.navOpen === true) {
            this.navOpen = false;
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "outerClick", null);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(491),
        styles: [__webpack_require__(446)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtml; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtml = (function () {
    function SanitizeHtml(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtml.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    return SanitizeHtml;
}());
SanitizeHtml = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sanitizeHtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object])
], SanitizeHtml);

var _a;
//# sourceMappingURL=SanitizeHtml.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VR_MODULE_REMOVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VR_MODULE_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vrModuleReducer; });

var VR_MODULE_REMOVED = 'VR_MODULE_REMOVED';
var VR_MODULE_ADDED = 'VR_MODULE_ADDED';
var initialState = [];
/**
 * VR Module reducer for managing the available VR modules
 */
var vrModuleReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case VR_MODULE_REMOVED:
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](state, function (mod) { return mod.id === action.payload.id; });
        case VR_MODULE_ADDED:
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["concat"](state, action.payload);
        default:
            return state;
    }
};

//# sourceMappingURL=vr-module.reducer.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".swiper-wrapper md-card {\n  width: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "img {\n  max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "md-card {\n  height: 99%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  float: left; }\n\nmd-card-header {\n  max-height: 333px; }\n\n.mdSm, .mdXs {\n  max-height: 225px; }\n\n.sc9TitlePost {\n  padding: 5px; }\n\n.wpsc9CardActions {\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  bottom: 22px;\n  right: 22px; }\n\n.aspectMainTain {\n  position: relative; }\n  .aspectMainTain:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-top: 56.25%; }\n  .aspectMainTain > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".sprite {\n  -webkit-transform: scale(1.6);\n          transform: scale(1.6);\n  margin: 20px auto; }\n\n.card--media {\n  height: 175px; }\n\n.postContainer, .postContainerWide, .postContainerWide md-card {\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  float: left; }\n\nfigure {\n  min-height: 440px; }\n\nmat-card-header-text {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "footer {\n  background-color: #0D47A1;\n  color: #fff;\n  padding: 16px;\n  font-size: 14px; }\n\na {\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "header {\n  background-color: #0D47A1;\n  color: #fff;\n  padding: 4px 4px 0px 4px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26); }\n\n.logo {\n  font-size: 1.2em;\n  padding: 12px;\n  float: left;\n  color: #fff;\n  text-decoration: none; }\n\n.btn--clear {\n  color: #fff;\n  float: left;\n  padding: 6px 0 0 0;\n  min-width: 54px; }\n  .btn--clear img {\n    width: 34px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<h1>About</h1>\n\n<ul>\n\t<li>Open Source built with <a href=\"https://angular.io\">Angular</a></li>\n</ul>\n"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "<div bp-layout=\"text-center\">\n  <h1>NG-Wordpress</h1>\n  <p>A open source Wordpress built with Angular 2</p>\n  <br />\n\t<a [routerLink]=\"['/post']\" class=\"btn--raised\">SC9 Blog</a>\n  <br /><br />\n</div>\n\n<div class=\"clear-both\"></div>\n\n<a [routerLink]=\"['/post']\">\n\n</a>\n\n"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Visuals</md-card-title>\n  <md-card-content>\n    <swiper [config]=\"config\">\n      <div class=\"swiper-wrapper\">\n\n        <div class=\"swiper-slide\">\n          <img div src=\"/assets/images/p7BabylonHX.jpg\">\n          <div>\n            Slide 1\n          </div>\n        </div>\n        <div class=\"swiper-slide\">\n          <img  src=\"/assets/images/p1fracVader.jpg\">\n          <div>\n            Slide 2\n          </div>\n        </div>\n        <div class=\"swiper-slide\">\n          <img  src=\"/assets/images/p3HypeSketch.jpg\">\n          <div>\n            Slide 3\n          </div>\n        </div>\n        <div class=\"swiper-slide\">\n          <img  src=\"/assets/images/p6BotBlaster.jpg\">\n          <div>\n            Slide 4\n          </div>\n        </div>\n        <div class=\"swiper-slide\">\n          <img  src=\"/assets/images/p5GlamBox.jpg\">\n          <div>\n            Slide 5\n          </div>\n        </div>\n        <div class=\"swiper-slide\">\n          <img  src=\"/assets/images/p4HypeSketch2.jpg\">\n          <div>\n            Slide 6\n          </div>\n        </div>\n        <div class=\"swiper-slide\">\n          <img  src=\"/assets/images/p2SkullCraft.jpg\">\n          <div>\n            Slide 7\n          </div>\n        </div>\n      </div>\n      <!-- Add Pagination -->\n      <div class=\"swiper-pagination\"></div>\n\n    </swiper>\n  </md-card-content>\n</md-card>\n\n\n"

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n  <h1>{{ post.title.rendered }}</h1>\n  <div [innerHTML]=\"post.content.rendered\"></div>\n</div>\n<div *ngIf=\"!post\">\n  <svg class=\"spinner\" width=\"65px\" height=\"65px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\"><circle class=\"circle\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle></svg>\n</div>\n"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"wpsc9\">\n  <md-card-header *xl>\n    <img src=\"{{PostContent.better_featured_image !== null ? (PostContent.better_featured_image.media_details.sizes['post-thumb']?.source_url) : null}}\" md-card-image onerror=\"catchImgErr(this)\"    />\n  </md-card-header>\n  <md-card-header *lg>\n    <img src=\"{{PostContent.better_featured_image !== null ? (PostContent.better_featured_image.media_details.sizes['post-thumb']?.source_url) : null}}\" md-card-image onerror=\"catchImgErr(this)\"   />\n  </md-card-header>\n  <md-card-header *md>\n    <img src=\"{{PostContent.better_featured_image !== null ? (PostContent.better_featured_image.media_details.sizes['post-thumb']?.source_url) : null}}\" md-card-image onerror=\"catchImgErr(this)\"   />\n  </md-card-header>\n  <md-card-header *sm class=\"mdSm\">\n    <img src=\"{{PostContent.better_featured_image !== null ? (PostContent.better_featured_image.media_details.sizes['post-thumb']?.source_url) : null}}\" md-card-image onerror=\"catchImgErr(this)\"   />\n  </md-card-header>\n  <md-card-header *xs class=\"mdXs\">\n    <img src=\"{{PostContent.better_featured_image !== null ? (PostContent.better_featured_image.media_details.sizes['post-thumb']?.source_url) : null}}\" md-card-image onerror=\"catchImgErr(this)\"   />\n  </md-card-header>\n  <md-card-content (click)=\"selectPost((PostContent.slugFormat + '/'+  PostContent.slug))\">\n    <div [innerHTML]=\"PostContent.title.rendered | sanitizeHtml\" class=\"sc9TitlePost\"></div>\n  </md-card-content>\n  <md-card-actions class=\"wpsc9CardActions\">\n    <div [mdMenuTriggerFor]=\"menu\"  class=\"mdi mdi-share-variant mdi-24px box share-variant\">\n    </div>\n    <md-menu #menu=\"mdMenu\">\n      <div md-menu-item>\n        <share-container\n          [direction]=\"vertical\"\n          [expandable]=\"false\"\n          [textEnabled]=\"false\"\n          [platforms]=\"['googlePlus','twitter','facebook']\"></share-container>\n      </div>\n    </md-menu>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<div *xl>\n  <md-grid-list cols=\"4\" gutterSize=\"10px\">\n    <md-grid-tile *ngFor=\"let post of _posts\" infinite-scroll\n                  [infiniteScrollDistance]=\"2\"\n                  [infiniteScrollUpDistance]=\"1.5\"\n                  [infiniteScrollThrottle]=\"15000\"\n                  (scrolled)=\"onScrollDown()\">\n      <PostListCard [PostContent]=\"post\" class=\"postContainerWide\" (click)=\"selectPost((post.slugFormat + '/'+  post.slug))\"></PostListCard>\n    </md-grid-tile>\n  </md-grid-list>\n</div>\n<div *lg>\n  <md-grid-list cols=\"3\"  gutterSize=\"10px\" rowHeight=\"440px\">\n  <md-grid-tile *ngFor=\"let post of _posts\" infinite-scroll\n                [infiniteScrollDistance]=\"2\"\n                [infiniteScrollUpDistance]=\"1.5\"\n                [infiniteScrollThrottle]=\"15000\"\n                (scrolled)=\"onScrollDown()\">\n    <PostListCard [PostContent]=\"post\" class=\"postContainerWide\" ></PostListCard>\n  </md-grid-tile>\n  </md-grid-list>\n</div>\n<div *md>\n  <md-grid-list cols=\"2\" rowHeight=\"440px\" gutterSize=\"10px\">\n    <md-grid-tile *ngFor=\"let post of _posts\" infinite-scroll\n                  [infiniteScrollDistance]=\"2\"\n                  [infiniteScrollUpDistance]=\"1.5\"\n                  [infiniteScrollThrottle]=\"15000\"\n                  (scrolled)=\"onScrollDown()\">\n      <PostListCard [PostContent]=\"post\" class=\"postContainerWide\"></PostListCard>\n    </md-grid-tile>\n  </md-grid-list>\n</div>\n<div *sm>\n  <md-grid-list cols=\"1\" rowHeight=\"440px\" gutterSize=\"10px\" infinite-scroll\n                [infiniteScrollDistance]=\"2\"\n                [infiniteScrollUpDistance]=\"1.5\"\n                [infiniteScrollThrottle]=\"15000\"\n                (scrolled)=\"onScrollDown()\">\n    <md-grid-tile *ngFor=\"let post of _posts\">\n      <PostListCard [PostContent]=\"post\" class=\"postContainerWide\"></PostListCard>\n    </md-grid-tile>\n  </md-grid-list>\n</div>\n<div *xs>\n  <md-grid-list cols=\"1\" rowHeight=\"330px\" gutterSize=\"10px\" infinite-scroll\n                [infiniteScrollDistance]=\"2\"\n                [infiniteScrollUpDistance]=\"1.5\"\n                [infiniteScrollThrottle]=\"15000\"\n                (scrolled)=\"onScrollDown()\">\n    <md-grid-tile *ngFor=\"let post of _posts\">\n      <PostListCard [PostContent]=\"post\" class=\"postContainerWide\"></PostListCard>\n    </md-grid-tile>\n  </md-grid-list>\n</div>\n\n\n"

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<footer>\n\tbuilt by <a href=\"https://github.com/seacloud9/pwa_wordpress_material2_angular2\">SeaCloud9</a>\n</footer>\n"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<header role=\"banner\">\n\t<button (click)=\"navOpen = !navOpen\" aria-label=\"Open Menu\" class=\"btn btn--clear\">\n    <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzIDUzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MyA1MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yLDEzLjVoNDljMS4xMDQsMCwyLTAuODk2LDItMnMtMC44OTYtMi0yLTJIMmMtMS4xMDQsMC0yLDAuODk2LTIsMlMwLjg5NiwxMy41LDIsMTMuNXoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cGF0aCBkPSJNMiwyOC41aDQ5YzEuMTA0LDAsMi0wLjg5NiwyLTJzLTAuODk2LTItMi0ySDJjLTEuMTA0LDAtMiwwLjg5Ni0yLDJTMC44OTYsMjguNSwyLDI4LjV6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTIsNDMuNWg0OWMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkgyYy0xLjEwNCwwLTIsMC44OTYtMiwyUzAuODk2LDQzLjUsMiw0My41eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\" />\n  </button>\n\n\t<a [routerLink]=\"['/']\" class=\"logo\">SeaCloud9 Blog</a>\n\n\t<div [class.open-nav]=\"navOpen\">\n\t\t<div class=\"menu-overlay\" (click)=\"navOpen = !navOpen\"></div>\n\t\t<nav class=\"nav\" (click)=\"navOpen = !navOpen\" [attr.aria-hidden]=\"!navOpen\">\n\t\t\t<a [routerLink]=\"['']\" class=\"nav__link\" [attr.tabindex]=\"navOpen ? 0 : -1\">Home</a>\n\t\t\t<a [routerLink]=\"['/post']\" class=\"nav__link\" [attr.tabindex]=\"navOpen ? 0 : -1\">SeaCloud9 Blog</a>\n      <a [routerLink]=\"['/about']\" class=\"nav__link\" [attr.tabindex]=\"navOpen ? 0 : -1\">About</a>\n\t\t</nav>\n\t</div>\n</header>\n"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<vr-component [html]=\"src\" [scripts]=\"vrScripts\" [componentData]=\"componentData\"></vr-component>\n"

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_circular_json__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bows__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bows___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bows__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Provides simple logging services
 * @type {Injectable}
 */



var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.ngOnInit = function () {
        if (window) {
            window.localStorage.debug = true;
        }
    };
    LogService.prototype.logEx = function (content, component) {
        this.log({
            content: content,
            component: component
        });
    };
    LogService.prototype.logJson = function (content, component) {
        this.log({
            content: __WEBPACK_IMPORTED_MODULE_1_circular_json___default.a.stringify(content, undefined, 4),
            component: component
        });
    };
    LogService.prototype.log = function (entry) {
        if (!entry || !entry.content)
            return;
        var log = undefined;
        if (entry.component) {
            log = __WEBPACK_IMPORTED_MODULE_2_bows___default()(entry.component);
        }
        else {
            log = __WEBPACK_IMPORTED_MODULE_2_bows___default()('LogService');
        }
        log(entry.content);
    };
    return LogService;
}());
LogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LogService);

//# sourceMappingURL=log.service.js.map

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(243);


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AframeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AframeComponent = (function () {
    function AframeComponent(injector, ref, sanitizer) {
        this.injector = injector;
        this.ref = ref;
        this.sanitizer = sanitizer;
        this.html = sanitizer.bypassSecurityTrustHtml(this.injector.get('html'));
    }
    AframeComponent.prototype.ngOnInit = function () {
    };
    return AframeComponent;
}());
AframeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aframe',
        styles: [__webpack_require__(438)],
        template: '<div [innerHTML]="html"></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object])
], AframeComponent);

var _a, _b, _c;
//# sourceMappingURL=aframe.component.js.map

/***/ })

},[738]);
//# sourceMappingURL=main.bundle.js.map
