(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "+5i1":
/*!**************************************************************************************!*\
  !*** ./src/app/contact/contact-content/contact-add-room/contact-add-room.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ContactAddRoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAddRoomService", function() { return ContactAddRoomService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/rooms/";
class ContactAddRoomService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ;
    saveOne(room) {
        return this.http
            .post(BACKEND_URL, room);
    }
    addNewMember(roomId, memberId) {
        return this.http
            .post(BACKEND_URL + roomId + "/members", { _id: memberId });
    }
    update(id, room) {
        this.http
            .put(BACKEND_URL + id, room);
    }
    changeAdminOfRoom(id, memberId) {
        return this.http
            .put(BACKEND_URL + id + "/members/" + memberId, { member: memberId, admin: true });
    }
    outRoom(idRoom) {
        return this.http
            .delete(BACKEND_URL + idRoom + "/members");
    }
    deleteMember(roomId, memberId) {
        return this.http
            .delete(BACKEND_URL + roomId + "/members" + "/" + memberId);
    }
}
ContactAddRoomService.ɵfac = function ContactAddRoomService_Factory(t) { return new (t || ContactAddRoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactAddRoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactAddRoomService, factory: ContactAddRoomService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+Z4U":
/*!*******************************************************************!*\
  !*** ./src/app/contact/contact-content/contact-content.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContactContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactContentModule", function() { return ContactContentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contact_content_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-content-routing.module */ "7OAz");
/* harmony import */ var _contact_add_friend_contact_add_friend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-add-friend/contact-add-friend.component */ "E+Po");
/* harmony import */ var _contact_add_room_contact_add_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-add-room/contact-add-room.component */ "sqoU");
/* harmony import */ var _list_add_friend_requests_contact_list_add_friend_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-add-friend-requests/contact-list-add-friend-requests.component */ "iwqW");
/* harmony import */ var _list_friends_list_friends_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-friends/list-friends.component */ "NFbJ");
/* harmony import */ var _list_rooms_contact_list_rooms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-rooms/contact-list-rooms.component */ "zULN");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/angular-material.module */ "rhD1");
/* harmony import */ var src_app_search_search_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/search/search.module */ "RmqX");
/* harmony import */ var _contact_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-content.component */ "TAlq");
/* harmony import */ var _contact_menu_contact_menu_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contact-menu/contact-menu.module */ "HGq+");
/* harmony import */ var _list_rooms_options_list_room_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-rooms-options/list-room-options.component */ "DgrK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class ContactContentModule {
}
ContactContentModule.ɵfac = function ContactContentModule_Factory(t) { return new (t || ContactContentModule)(); };
ContactContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ContactContentModule });
ContactContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
            _contact_content_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactContentRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            src_app_search_search_module__WEBPACK_IMPORTED_MODULE_9__["SearchModule"],
            _contact_menu_contact_menu_module__WEBPACK_IMPORTED_MODULE_11__["ContactMenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ContactContentModule, { declarations: [_contact_content_component__WEBPACK_IMPORTED_MODULE_10__["ContactContentComponent"],
        _contact_add_friend_contact_add_friend_component__WEBPACK_IMPORTED_MODULE_3__["ContactAddFriendComponent"],
        _contact_add_room_contact_add_room_component__WEBPACK_IMPORTED_MODULE_4__["ContactAddGroupComponent"],
        _list_add_friend_requests_contact_list_add_friend_requests_component__WEBPACK_IMPORTED_MODULE_5__["ListAddFriendsComponent"],
        _list_friends_list_friends_component__WEBPACK_IMPORTED_MODULE_6__["ListFriendsComponent"],
        _list_rooms_contact_list_rooms_component__WEBPACK_IMPORTED_MODULE_7__["ListGroupsComponent"],
        _list_rooms_options_list_room_options_component__WEBPACK_IMPORTED_MODULE_12__["ListRoomOptionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
        _contact_content_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactContentRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        src_app_search_search_module__WEBPACK_IMPORTED_MODULE_9__["SearchModule"],
        _contact_menu_contact_menu_module__WEBPACK_IMPORTED_MODULE_11__["ContactMenuModule"]], exports: [_contact_content_component__WEBPACK_IMPORTED_MODULE_10__["ContactContentComponent"]] }); })();


/***/ }),

/***/ "31SR":
/*!**************************************************************************************************************!*\
  !*** ./src/app/contact/contact-content/list-add-friend-requests/contact-list-add-friend-requests.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ContactListAddFriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListAddFriendService", function() { return ContactListAddFriendService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/requests/";
class ContactListAddFriendService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ;
    getAll() {
        return this.http
            .get(BACKEND_URL);
    }
    getOneById(userId) {
        return this.http
            .get(BACKEND_URL + userId);
    }
    saveOne(addFriendRequest) {
        return this.http
            .post(BACKEND_URL, addFriendRequest);
    }
    update(id, addFriendRequest) {
        this.http
            .put(BACKEND_URL + id, addFriendRequest);
    }
    delete(id) {
        return this.http
            .delete(BACKEND_URL + id);
    }
    isAcceptFriendRequest(id, isAccept) {
        return this.http
            .put(BACKEND_URL + id, { accept: isAccept });
    }
    deleteFriendRequest(id) {
        return this.http
            .delete(BACKEND_URL + id);
    }
}
ContactListAddFriendService.ɵfac = function ContactListAddFriendService_Factory(t) { return new (t || ContactListAddFriendService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactListAddFriendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactListAddFriendService, factory: ContactListAddFriendService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3Zz6":
/*!********************************************!*\
  !*** ./src/app/success/success.service.ts ***!
  \********************************************/
/*! exports provided: SuccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessService", function() { return SuccessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

// const BACKEND_URL = environment.apiUrl + "/contacts/";
class SuccessService {
    setAuthTimer(duration, func) {
        this.tokenTimer = setTimeout(() => {
            func();
        }, duration * 1000);
        console.log('Setting timer alert message: ' + duration);
    }
}
SuccessService.ɵfac = function SuccessService_Factory(t) { return new (t || SuccessService)(); };
SuccessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SuccessService, factory: SuccessService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7OAz":
/*!***************************************************************************!*\
  !*** ./src/app/contact/contact-content/contact-content-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ContactContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactContentRoutingModule", function() { return ContactContentRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_add_friend_contact_add_friend_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-add-friend/contact-add-friend.component */ "E+Po");
/* harmony import */ var _contact_add_room_contact_add_room_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-add-room/contact-add-room.component */ "sqoU");
/* harmony import */ var _contact_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-content.component */ "TAlq");
/* harmony import */ var _list_add_friend_requests_contact_list_add_friend_requests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-add-friend-requests/contact-list-add-friend-requests.component */ "iwqW");
/* harmony import */ var _list_friends_list_friends_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-friends/list-friends.component */ "NFbJ");
/* harmony import */ var _list_rooms_contact_list_rooms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-rooms/contact-list-rooms.component */ "zULN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', component: _contact_content_component__WEBPACK_IMPORTED_MODULE_3__["ContactContentComponent"] },
    { path: 'add-friend', component: _contact_add_friend_contact_add_friend_component__WEBPACK_IMPORTED_MODULE_1__["ContactAddFriendComponent"] },
    { path: 'add-room', component: _contact_add_room_contact_add_room_component__WEBPACK_IMPORTED_MODULE_2__["ContactAddGroupComponent"] },
    { path: 'list-add-friends', component: _list_add_friend_requests_contact_list_add_friend_requests_component__WEBPACK_IMPORTED_MODULE_4__["ListAddFriendsComponent"] },
    { path: 'list-friends', component: _list_friends_list_friends_component__WEBPACK_IMPORTED_MODULE_5__["ListFriendsComponent"] },
    { path: 'list-rooms', component: _list_rooms_contact_list_rooms_component__WEBPACK_IMPORTED_MODULE_6__["ListGroupsComponent"] },
];
class ContactContentRoutingModule {
}
ContactContentRoutingModule.ɵfac = function ContactContentRoutingModule_Factory(t) { return new (t || ContactContentRoutingModule)(); };
ContactContentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ContactContentRoutingModule });
ContactContentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ContactContentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "BjQp":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angular-material.module */ "rhD1");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-routing.module */ "Yuog");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.component */ "bzTf");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu.module */ "19mU");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.module */ "RmqX");
/* harmony import */ var _contact_content_contact_content_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-content/contact-content.module */ "+Z4U");
/* harmony import */ var _contact_menu_contact_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-menu/contact-menu.module */ "HGq+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class ContactModule {
}
ContactModule.ɵfac = function ContactModule_Factory(t) { return new (t || ContactModule)(); };
ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactRoutingModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
            _search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"],
            _contact_content_contact_content_module__WEBPACK_IMPORTED_MODULE_7__["ContactContentModule"],
            _contact_menu_contact_menu_module__WEBPACK_IMPORTED_MODULE_8__["ContactMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _contact_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactRoutingModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"],
        _contact_content_contact_content_module__WEBPACK_IMPORTED_MODULE_7__["ContactContentModule"],
        _contact_menu_contact_menu_module__WEBPACK_IMPORTED_MODULE_8__["ContactMenuModule"]] }); })();


/***/ }),

/***/ "DgrK":
/*!*******************************************************************************************!*\
  !*** ./src/app/contact/contact-content/list-rooms-options/list-room-options.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListRoomOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoomOptionsComponent", function() { return ListRoomOptionsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_add_room_contact_add_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-add-room/contact-add-room.service */ "+5i1");
/* harmony import */ var _list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-rooms/contact-list-rooms.service */ "ywU7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ListRoomOptionsComponent_div_15_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ListRoomOptionsComponent_div_15_input_1_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.checkBoxClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", friend_r5._id);
} }
function ListRoomOptionsComponent_div_15_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ListRoomOptionsComponent_div_15_input_2_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.radioClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", friend_r5._id);
} }
function ListRoomOptionsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListRoomOptionsComponent_div_15_input_1_Template, 1, 1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListRoomOptionsComponent_div_15_input_2_Template, 1, 1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.type !== "leave");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.type === "leave");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", friend_r5 == null ? null : friend_r5.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](friend_r5.name);
} }
function ListRoomOptionsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Kh\u00F4ng c\u00F3 b\u1EA1n b\u00E8 ph\u00F9 h\u1EE3p \u0111i\u1EC1u ki\u1EC7n \u0111\u1EC3 th\u00EAm v\u00E0o nh\u00F3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListRoomOptionsComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListRoomOptionsComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.addMembers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Th\u00EAm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListRoomOptionsComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListRoomOptionsComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.deleteMembers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Xo\u00E1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListRoomOptionsComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListRoomOptionsComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.leaveRoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " R\u1EDDi nh\u00F3m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ListRoomOptionsComponent {
    constructor(data, roomService, roomsService, dialogRef, route) {
        this.data = data;
        this.roomService = roomService;
        this.roomsService = roomsService;
        this.dialogRef = dialogRef;
        this.route = route;
        this.members = [];
        this.isShowMessageAlert = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'members': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            })
        });
    }
    onSubmit() {
    }
    addMembers() {
        this.members.forEach(member => {
            this.roomService
                .addNewMember(this.data.roomId, member)
                .subscribe((response) => {
                console.log("Add new member to room");
                console.log(response);
            });
        });
        this.dialogRef.close();
    }
    deleteMembers() {
        this.members.forEach(member => {
            this.roomService
                .deleteMember(this.data.roomId, member)
                .subscribe((response) => {
                console.log("Delete member of room");
                console.log(response);
            });
            this.dialogRef.close();
        });
    }
    leaveRoom() {
        this.roomService
            .changeAdminOfRoom(this.data.roomId, this.members)
            .subscribe((response) => {
            console.log('Leave room');
            this.roomService
                .outRoom(this.data.roomId)
                .subscribe((response) => {
                console.log(response);
            });
        });
        this.dialogRef.close();
    }
    checkBoxClick(e) {
        console.log(`isChecked: ${e.target.checked} , value: ${e.target.value}`);
        if (e.target.checked) {
            console.log(e.target.value);
            this.members.push(e.target.value);
        }
        console.log(`members: ${this.members}`);
    }
    radioClick() {
        const memberIdClicked = this.form.controls['members'].value;
        this.members = memberIdClicked;
        console.log(`members: ${this.members}`);
    }
}
ListRoomOptionsComponent.ɵfac = function ListRoomOptionsComponent_Factory(t) { return new (t || ListRoomOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_contact_add_room_contact_add_room_service__WEBPACK_IMPORTED_MODULE_3__["ContactAddRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_4__["ContactListRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ListRoomOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListRoomOptionsComponent, selectors: [["app-list-room-options"]], decls: 21, vars: 10, consts: [[1, "row", "justify-content-center"], [1, "add-member"], [1, "row", "justify-content-between", "align-items-center"], ["mat-dialog-close", "", 1, "icon-close"], [1, "fas", "fa-times", 2, "font-size", "1.2rem", "cursor", "pointer"], [3, "formGroup", "submit"], [1, "row", "list-friends-add-groups"], [1, "col"], ["class", "row align-items-center list-friends-add-groups__item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "row", "justify-content-end"], ["class", "sb-add-groups", "type", "button", 3, "click", 4, "ngIf"], [1, "row", "align-items-center", "list-friends-add-groups__item"], ["class", "input-checkbox", "type", "checkbox", "name", "add-groups", "formControlName", "members", 3, "value", "change", 4, "ngIf"], ["class", "input-checkbox", "type", "radio", "formControlName", "members", 3, "value", "change", 4, "ngIf"], ["alt", "", 1, "img-fluid", "item__img", 3, "src"], [1, "item__name"], ["type", "checkbox", "name", "add-groups", "formControlName", "members", 1, "input-checkbox", 3, "value", "change"], ["type", "radio", "formControlName", "members", 1, "input-checkbox", 3, "value", "change"], ["type", "button", 1, "sb-add-groups", 3, "click"]], template: function ListRoomOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ListRoomOptionsComponent_Template_form_submit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ListRoomOptionsComponent_div_15_Template, 6, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ListRoomOptionsComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ListRoomOptionsComponent_button_18_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ListRoomOptionsComponent_button_19_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ListRoomOptionsComponent_button_20_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.data.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data.friends);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.friends.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type === "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type === "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type === "leave");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"]], styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n\n\n\n.tabs-contact__item[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 2.5rem;\n  margin: 0.5rem 0;\n  border: 1px solid var(--color-1);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.tabs-contact__item[_ngcontent-%COMP%]:hover, .tabs-contact__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.list-contacts__title[_ngcontent-%COMP%] {\n  height: 10vh;\n  background-color: var(--color-1);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.list-contacts__title--text[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-weight: 700;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%] {\n  height: 72.5vh;\n  max-height: 72vh;\n  padding: 0 1rem;\n  background-color: var(--color-2);\n  border-top: 2px solid var(--color-2);\n  border-bottom: 1px solid var(--color-1);\n  border-left: 1px solid var(--color-1);\n  border-right: 1px solid var(--color-1);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  overflow-y: scroll;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-contacts__card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 31%;\n  padding: 0.5rem;\n  margin: 1rem 0.5rem;\n  text-align: center;\n  background-color: var(--color-1);\n  border-radius: 20px;\n}\n\n\n\n.card__img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  object-fit: cover;\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  max-width: 8.3rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card__introduce[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 60%;\n}\n\n.card__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.5rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.card__icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.notification[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  bottom: 2rem;\n  right: 2rem;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 50%;\n  transition: all 750ms;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  transition: all 750ms;\n}\n\n.notification__icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n.notification__count[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 0.3rem 0.4rem;\n  margin-top: 2.5rem;\n  margin-left: 2.75rem;\n  font-size: 0.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 50%;\n  transition: all 750ms;\n  background-color: var(--color-2);\n  cursor: pointer;\n}\n\n.icon-close[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-friend[_ngcontent-%COMP%] {\n  width: 35vw;\n  margin: 1rem 0rem;\n  padding: 2rem 3rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n.add-friend__input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem 0.5rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-friend__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n.add-friend__introduction[_ngcontent-%COMP%] {\n  margin: 0.75rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.add-friend__submit[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  background-color: var(--color-2);\n  border: none;\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n\n\n.add-friends__card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n}\n\n.add-friends__card.hide[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 750ms;\n}\n\n.add-friend__card--img[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  width: 5rem;\n  height: 5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.add-friend__card--title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0 1rem;\n  width: 20vw;\n  max-width: 19.5vw;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%], .edit-user__card--icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%]:hover, .edit-user__card--icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.add-groups[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 35vw;\n  padding: 2rem 3rem;\n  padding-bottom: 0.75rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n\n\n\n\n.add-groups__input[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0.75rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-groups__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n\n\n.list-friends-add-groups[_ngcontent-%COMP%] {\n  height: 37.5vh;\n  max-height: 37vh;\n  padding: 1rem;\n  overflow-y: scroll;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-friends-add-groups__item[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n\n\n.input-checkbox[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  transform: scale(1.25);\n}\n\n.item__img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.item__name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  max-width: 12.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sb-add-groups[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  padding: 0.5rem 1.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n}\n\n.sb-add-groups[_ngcontent-%COMP%]:hover, .sb-add-groups[_ngcontent-%COMP%]:focus {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n  width: 35vw;\n  padding: 0 2.5rem;\n}\n\n\n\n@media only screen and (max-width: 480px) {\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0 !important;\n    background-color: rgba(0, 0, 0, 0.32);\n  }\n\n  .content.hide[_ngcontent-%COMP%] {\n    display: none;\n    transition: all 750ms;\n  }\n\n  .list-contacts__tbl[_ngcontent-%COMP%] {\n    height: 90vh;\n    max-height: 90vh;\n  }\n\n  .list-contacts__card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n\n  \n  .add-friend[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-friend__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .add-friend__card--title[_ngcontent-%COMP%] {\n    width: 60vw;\n    max-width: 59.5vw;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1rem;\n    color: var(--color-3);\n  }\n\n  \n\n  .add-groups[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-groups__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  \n  .add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n    width: 100vw;\n    padding: 0 1.5rem;\n  }\n\n  \n  .item__name[_ngcontent-%COMP%] {\n    max-width: 6.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQSx3QkFBd0I7O0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQSxzQkFBc0I7O0FBQ3RCLFVBQVU7O0FBQ1Y7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQSx3QkFBd0I7O0FBQ3hCOzs7RUFHRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztFQUVBLGVBQWU7RUFDZjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBLGNBQWM7O0VBRWQ7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQSxtQkFBbUI7RUFDbkI7OztJQUdFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUEsU0FBUztFQUNUO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRhY3QgKi9cblxuLnRhYnMtY29udGFjdF9faXRlbSB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMi41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFicy1jb250YWN0X19pdGVtOmhvdmVyLFxuLnRhYnMtY29udGFjdF9faXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBDb250ZW50IENvbnRhY3RzICovXG5cbi5saXN0LWNvbnRhY3RzX190aXRsZSB7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1jb250YWN0c19fdGl0bGUtLXRleHQge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymwge1xuICBoZWlnaHQ6IDcyLjV2aDtcbiAgbWF4LWhlaWdodDogNzJ2aDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubGlzdC1jb250YWN0c19fdGJsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpc3QtY29udGFjdHNfX2NhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMSU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ2FyZCAqL1xuLmNhcmRfX2ltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZF9fdGl0bGUge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBtYXgtd2lkdGg6IDguM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkX19pbnRyb2R1Y2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmRfX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRfX2ljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBOb3RpZmljYXRpb24gKi9cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvdHRvbTogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLm5vdGlmaWNhdGlvbl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLm5vdGlmaWNhdGlvbl9fY291bnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjRyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDIuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEljb24gY2xvc2UgKi9cblxuLmljb24tY2xvc2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi8qIFBsdXMgQWRkIEdyb3VwICovXG5cbi5wbHVzLWFkZC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4vKiBBZGQgRnJpZW5kICovXG5cbi5hZGQtZnJpZW5kIHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1hcmdpbjogMXJlbSAwcmVtO1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW46IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGQtZnJpZW5kX19zdWJtaXQge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWRkIEZyaWVuZHMgQ29udGVudCAqL1xuLmFkZC1mcmllbmRzX19jYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hZGQtZnJpZW5kc19fY2FyZC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4uYWRkLWZyaWVuZF9fY2FyZC0taW1nIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS10aXRsZSB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IDE5LjV2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS1pY29uLFxuLmVkaXQtdXNlcl9fY2FyZC0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1mcmllbmRfX2NhcmQtLWljb246aG92ZXIsXG4uZWRpdC11c2VyX19jYXJkLS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLyogQWRkIEdyb3VwICovXG5cbi5hZGQtZ3JvdXBzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDM1dnc7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLyogQWRkIEdyb3VwIENvbnRlbnQgKi9cbi8qIElucHV0ICovXG4uYWRkLWdyb3Vwc19faW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbn1cblxuLmFkZC1ncm91cHNfX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbn1cblxuLyogTGlzdCBGcmllbmRzICovXG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3VwcyB7XG4gIGhlaWdodDogMzcuNXZoO1xuICBtYXgtaGVpZ2h0OiAzN3ZoO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1mcmllbmRzLWFkZC1ncm91cHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLmxpc3QtZnJpZW5kcy1hZGQtZ3JvdXBzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3Vwc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi8qIEl0ZW0gKi9cblxuLmlucHV0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG59XG5cbi5pdGVtX19pbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLml0ZW1fX25hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWF4LXdpZHRoOiAxMi41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNiLWFkZC1ncm91cHMge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi5zYi1hZGQtZ3JvdXBzOmhvdmVyLFxuLnNiLWFkZC1ncm91cHM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4ucGx1cy1hZGQtZ3JvdXAge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbn1cblxuLyogQ2FzZSBMaXN0IFJvb20gQ2hhdCAqL1xuLmFkZC1tZW1iZXIsXG4uZGVsZXRlLW1lbWJlcixcbi5kZWxldGUtcm9vbSB7XG4gIHdpZHRoOiAzNXZ3O1xuICBwYWRkaW5nOiAwIDIuNXJlbTtcbn1cblxuLyogVGFicyBSZXNwb25zaXZlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgfVxuXG4gIC5jb250ZW50LmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB9XG5cbiAgLmxpc3QtY29udGFjdHNfX3RibCB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubGlzdC1jb250YWN0c19fY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuaWNvbi1jbG9zZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cblxuICAvKiBBZGQgRnJpZW5kICovXG4gIC5hZGQtZnJpZW5kIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2NhcmQtLXRpdGxlIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBtYXgtd2lkdGg6IDU5LjV2dztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgfVxuXG4gIC8qIEFkZCBHcm91cCAqL1xuXG4gIC5hZGQtZ3JvdXBzIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1ncm91cHNfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLyogTGlzdCBSb29tIENhc2UgKi9cbiAgLmFkZC1tZW1iZXIsXG4gIC5kZWxldGUtbWVtYmVyLFxuICAuZGVsZXRlLXJvb20ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC8qIEl0ZW0gKi9cbiAgLml0ZW1fX25hbWUge1xuICAgIG1heC13aWR0aDogNi41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "E+Po":
/*!********************************************************************************************!*\
  !*** ./src/app/contact/contact-content/contact-add-friend/contact-add-friend.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ContactAddFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAddFriendComponent", function() { return ContactAddFriendComponent; });
/* harmony import */ var src_app_success_success_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/success/success.service */ "3Zz6");
/* harmony import */ var _contact_addfriend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-addfriend.service */ "hOT3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../search/search.component */ "tq2C");
/* harmony import */ var _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contact-menu/contact-menu.component */ "ZCzq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");













const _c0 = ["friendId"];
const _c1 = ["introduction"];
function ContactAddFriendComponent_mat_spinner_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner");
} }
function ContactAddFriendComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add friend success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { hide: a0 }; };
class ContactAddFriendComponent {
    constructor(router, sharingService, hideContent, addFriendService, succecssService, dialog) {
        this.router = router;
        this.sharingService = sharingService;
        this.hideContent = hideContent;
        this.addFriendService = addFriendService;
        this.succecssService = succecssService;
        this.dialog = dialog;
        this.isLoading = false;
        this.valHideContactContent = false;
        this.hideFriend = true;
        this.isShowMessageAlert = false;
    }
    ngOnInit() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
    }
    searchFriend(friendId) {
        this.isLoading = true;
        if (!friendId) {
            this.isLoading = false;
            return;
        }
        if (friendId.length === 10) {
            console.log("input 10 digits");
            friendId = "?phone=" + friendId;
        }
        try {
            this.addFriendService
                .getOneById(friendId)
                .subscribe((response) => {
                if (response.data) {
                    this.isLoading = false;
                    this.hideFriend = false;
                    this.friend = {
                        _id: response.data._id,
                        name: response.data.name,
                        phone: response.data.phone,
                        avatar: response.data.avatar
                    };
                }
                else {
                    this.hideFriend = true;
                    console.log(`valHideContactContent: ${this.hideFriend}`);
                }
            }),
                (error) => {
                    console.log("Dont find user");
                };
        }
        catch (error) { }
    }
    addFriend(friendId, introduce) {
        if (!introduce) {
            introduce = "Hello";
        }
        this.isLoading = true;
        this.hideFriend = true;
        this.addFriendService
            .saveOne(friendId, introduce)
            .subscribe(response => {
            console.log(response);
            this.isLoading = false;
            this.isShowMessageAlert = true;
            let isShowMessageAlert = this.isShowMessageAlert;
            this.setMessageAlertTimer(2);
            this.friendId.nativeElement.value = "";
            this.introduction.nativeElement.value = "";
        });
    }
    setMessageAlertTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.isShowMessageAlert = false;
        }, duration * 1000);
        console.log('Setting timer alert message: ' + duration);
    }
    contactContent() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
        this.valHideContactContent = true;
    }
}
ContactAddFriendComponent.ɵfac = function ContactAddFriendComponent_Factory(t) { return new (t || ContactAddFriendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_4__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_4__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_contact_addfriend_service__WEBPACK_IMPORTED_MODULE_1__["ContactAddFriendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_success_success_service__WEBPACK_IMPORTED_MODULE_0__["SuccessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
ContactAddFriendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactAddFriendComponent, selectors: [["app-contact-add-friend"]], viewQuery: function ContactAddFriendComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.friendId = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.introduction = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_contact_addfriend_service__WEBPACK_IMPORTED_MODULE_1__["ContactAddFriendService"], src_app_success_success_service__WEBPACK_IMPORTED_MODULE_0__["SuccessService"]])], decls: 40, vars: 12, consts: [[1, "row", "justify-content-center"], [1, "col-md-4", "menu"], [1, "col-md-8", "content", 3, "ngClass"], [1, "add-friend"], [1, "row", "justify-content-between", "align-items-center"], [1, "fas", "fa-user-plus"], [1, "icon-close", 2, "display", "none", 3, "click"], [1, "fas", "fa-times", 2, "font-size", "1.2rem", "cursor", "pointer"], ["action", ""], ["type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ho\u1EB7c ID", "id", "add-friend-ip", 1, "add-friend__input", 3, "keyup"], ["friendPhone", ""], [1, "add-friend__submit"], [1, "fas", "fa-search"], [4, "ngIf"], ["id", "add-friends__card", 1, "row", "add-friends__card", 3, "ngClass"], [1, "col"], ["alt", "", 1, "img-fluid", "add-friend__card--img", 3, "src"], ["type", "hidden", 3, "value"], ["friendId", ""], [1, "add-friend__card--title"], ["type", "text", "placeholder", "Nh\u1EADp l\u1EDDi ch\u00E0o...", 1, "add-friend__introduction"], ["introduction", ""], [1, "add-friend__card--icon", 3, "click"], ["class", "text-success", 4, "ngIf"], [1, "text-success"]], template: function ContactAddFriendComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-contact-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Th\u00EAm b\u1EA1n b\u00E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactAddFriendComponent_Template_span_click_11_listener() { return ctx.contactContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function ContactAddFriendComponent_Template_input_keyup_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17); return ctx.searchFriend(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ContactAddFriendComponent_mat_spinner_21_Template, 1, 0, "mat-spinner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactAddFriendComponent_Template_span_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); return ctx.addFriend(_r2.value, _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " G\u1EEDi l\u1EDDi m\u1EDDi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ContactAddFriendComponent_div_39_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c2, ctx.valHideContactContent));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx.hideFriend));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.friend == null ? null : ctx.friend.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.friend == null ? null : ctx.friend._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.friend == null ? null : ctx.friend.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.friend == null ? null : ctx.friend.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShowMessageAlert);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_7__["ContactMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n\n\n\n.tabs-contact__item[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 2.5rem;\n  margin: 0.5rem 0;\n  border: 1px solid var(--color-1);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.tabs-contact__item[_ngcontent-%COMP%]:hover, .tabs-contact__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.list-contacts__title[_ngcontent-%COMP%] {\n  height: 10vh;\n  background-color: var(--color-1);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.list-contacts__title--text[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-weight: 700;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%] {\n  height: 72.5vh;\n  max-height: 72vh;\n  padding: 0 1rem;\n  background-color: var(--color-2);\n  border-top: 2px solid var(--color-2);\n  border-bottom: 1px solid var(--color-1);\n  border-left: 1px solid var(--color-1);\n  border-right: 1px solid var(--color-1);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  overflow-y: scroll;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-contacts__card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 31%;\n  padding: 0.5rem;\n  margin: 1rem 0.5rem;\n  text-align: center;\n  background-color: var(--color-1);\n  border-radius: 20px;\n}\n\n\n\n.card__img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  object-fit: cover;\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  max-width: 8.3rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card__introduce[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 60%;\n}\n\n.card__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.5rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.card__icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.notification[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  bottom: 2rem;\n  right: 2rem;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 50%;\n  transition: all 750ms;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  transition: all 750ms;\n}\n\n.notification__icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n.notification__count[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 0.3rem 0.4rem;\n  margin-top: 2.5rem;\n  margin-left: 2.75rem;\n  font-size: 0.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 50%;\n  transition: all 750ms;\n  background-color: var(--color-2);\n  cursor: pointer;\n}\n\n.icon-close[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-friend[_ngcontent-%COMP%] {\n  width: 35vw;\n  margin: 1rem 0rem;\n  padding: 2rem 3rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n.add-friend__input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem 0.5rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-friend__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n.add-friend__introduction[_ngcontent-%COMP%] {\n  margin: 0.75rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.add-friend__submit[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  background-color: var(--color-2);\n  border: none;\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n\n\n.add-friends__card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n}\n\n.add-friends__card.hide[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 750ms;\n}\n\n.add-friend__card--img[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  width: 5rem;\n  height: 5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.add-friend__card--title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0 1rem;\n  width: 20vw;\n  max-width: 19.5vw;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%], .edit-user__card--icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%]:hover, .edit-user__card--icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.add-groups[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 35vw;\n  padding: 2rem 3rem;\n  padding-bottom: 0.75rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n\n\n\n\n.add-groups__input[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0.75rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-groups__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n\n\n.list-friends-add-groups[_ngcontent-%COMP%] {\n  height: 37.5vh;\n  max-height: 37vh;\n  padding: 1rem;\n  overflow-y: scroll;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-friends-add-groups__item[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n\n\n.input-checkbox[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  transform: scale(1.25);\n}\n\n.item__img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.item__name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  max-width: 12.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sb-add-groups[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  padding: 0.5rem 1.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n}\n\n.sb-add-groups[_ngcontent-%COMP%]:hover, .sb-add-groups[_ngcontent-%COMP%]:focus {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n  width: 35vw;\n  padding: 0 2.5rem;\n}\n\n\n\n@media only screen and (max-width: 480px) {\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0 !important;\n    background-color: rgba(0, 0, 0, 0.32);\n  }\n\n  .content.hide[_ngcontent-%COMP%] {\n    display: none;\n    transition: all 750ms;\n  }\n\n  .list-contacts__tbl[_ngcontent-%COMP%] {\n    height: 90vh;\n    max-height: 90vh;\n  }\n\n  .list-contacts__card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n\n  \n  .add-friend[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-friend__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .add-friend__card--title[_ngcontent-%COMP%] {\n    width: 60vw;\n    max-width: 59.5vw;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1rem;\n    color: var(--color-3);\n  }\n\n  \n\n  .add-groups[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-groups__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  \n  .add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n    width: 100vw;\n    padding: 0 1.5rem;\n  }\n\n  \n  .item__name[_ngcontent-%COMP%] {\n    max-width: 6.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pC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QUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztFQUVBLGVBQWU7RUFDZjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBLGNBQWM7O0VBRWQ7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQSxtQkFBbUI7RUFDbkI7OztJQUdFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUEsU0FBUztFQUNUO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRhY3QgKi9cblxuLnRhYnMtY29udGFjdF9faXRlbSB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMi41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFicy1jb250YWN0X19pdGVtOmhvdmVyLFxuLnRhYnMtY29udGFjdF9faXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBDb250ZW50IENvbnRhY3RzICovXG5cbi5saXN0LWNvbnRhY3RzX190aXRsZSB7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1jb250YWN0c19fdGl0bGUtLXRleHQge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymwge1xuICBoZWlnaHQ6IDcyLjV2aDtcbiAgbWF4LWhlaWdodDogNzJ2aDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubGlzdC1jb250YWN0c19fdGJsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpc3QtY29udGFjdHNfX2NhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMSU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ2FyZCAqL1xuLmNhcmRfX2ltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZF9fdGl0bGUge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBtYXgtd2lkdGg6IDguM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkX19pbnRyb2R1Y2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmRfX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRfX2ljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBOb3RpZmljYXRpb24gKi9cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvdHRvbTogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLm5vdGlmaWNhdGlvbl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLm5vdGlmaWNhdGlvbl9fY291bnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjRyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDIuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEljb24gY2xvc2UgKi9cblxuLmljb24tY2xvc2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi8qIFBsdXMgQWRkIEdyb3VwICovXG5cbi5wbHVzLWFkZC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4vKiBBZGQgRnJpZW5kICovXG5cbi5hZGQtZnJpZW5kIHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1hcmdpbjogMXJlbSAwcmVtO1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW46IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGQtZnJpZW5kX19zdWJtaXQge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWRkIEZyaWVuZHMgQ29udGVudCAqL1xuLmFkZC1mcmllbmRzX19jYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hZGQtZnJpZW5kc19fY2FyZC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4uYWRkLWZyaWVuZF9fY2FyZC0taW1nIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS10aXRsZSB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IDE5LjV2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS1pY29uLFxuLmVkaXQtdXNlcl9fY2FyZC0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1mcmllbmRfX2NhcmQtLWljb246aG92ZXIsXG4uZWRpdC11c2VyX19jYXJkLS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLyogQWRkIEdyb3VwICovXG5cbi5hZGQtZ3JvdXBzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDM1dnc7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLyogQWRkIEdyb3VwIENvbnRlbnQgKi9cbi8qIElucHV0ICovXG4uYWRkLWdyb3Vwc19faW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbn1cblxuLmFkZC1ncm91cHNfX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbn1cblxuLyogTGlzdCBGcmllbmRzICovXG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3VwcyB7XG4gIGhlaWdodDogMzcuNXZoO1xuICBtYXgtaGVpZ2h0OiAzN3ZoO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1mcmllbmRzLWFkZC1ncm91cHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLmxpc3QtZnJpZW5kcy1hZGQtZ3JvdXBzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3Vwc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi8qIEl0ZW0gKi9cblxuLmlucHV0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG59XG5cbi5pdGVtX19pbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLml0ZW1fX25hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWF4LXdpZHRoOiAxMi41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNiLWFkZC1ncm91cHMge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi5zYi1hZGQtZ3JvdXBzOmhvdmVyLFxuLnNiLWFkZC1ncm91cHM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4ucGx1cy1hZGQtZ3JvdXAge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbn1cblxuLyogQ2FzZSBMaXN0IFJvb20gQ2hhdCAqL1xuLmFkZC1tZW1iZXIsXG4uZGVsZXRlLW1lbWJlcixcbi5kZWxldGUtcm9vbSB7XG4gIHdpZHRoOiAzNXZ3O1xuICBwYWRkaW5nOiAwIDIuNXJlbTtcbn1cblxuLyogVGFicyBSZXNwb25zaXZlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgfVxuXG4gIC5jb250ZW50LmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB9XG5cbiAgLmxpc3QtY29udGFjdHNfX3RibCB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubGlzdC1jb250YWN0c19fY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuaWNvbi1jbG9zZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cblxuICAvKiBBZGQgRnJpZW5kICovXG4gIC5hZGQtZnJpZW5kIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2NhcmQtLXRpdGxlIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBtYXgtd2lkdGg6IDU5LjV2dztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgfVxuXG4gIC8qIEFkZCBHcm91cCAqL1xuXG4gIC5hZGQtZ3JvdXBzIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1ncm91cHNfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLyogTGlzdCBSb29tIENhc2UgKi9cbiAgLmFkZC1tZW1iZXIsXG4gIC5kZWxldGUtbWVtYmVyLFxuICAuZGVsZXRlLXJvb20ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC8qIEl0ZW0gKi9cbiAgLml0ZW1fX25hbWUge1xuICAgIG1heC13aWR0aDogNi41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "HGq+":
/*!*************************************************************!*\
  !*** ./src/app/contact/contact-menu/contact-menu.module.ts ***!
  \*************************************************************/
/*! exports provided: ContactMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMenuModule", function() { return ContactMenuModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/angular-material.module */ "rhD1");
/* harmony import */ var _contact_menu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-menu-routing.module */ "m93s");
/* harmony import */ var _contact_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-menu.component */ "ZCzq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ContactMenuModule {
}
ContactMenuModule.ɵfac = function ContactMenuModule_Factory(t) { return new (t || ContactMenuModule)(); };
ContactMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ContactMenuModule });
ContactMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _contact_menu_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactMenuRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContactMenuModule, { declarations: [_contact_menu_component__WEBPACK_IMPORTED_MODULE_4__["ContactMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _contact_menu_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactMenuRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]], exports: [_contact_menu_component__WEBPACK_IMPORTED_MODULE_4__["ContactMenuComponent"]] }); })();


/***/ }),

/***/ "NFbJ":
/*!********************************************************************************!*\
  !*** ./src/app/contact/contact-content/list-friends/list-friends.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFriendsComponent", function() { return ListFriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var _contact_list_friend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-list-friend.service */ "QQtj");
/* harmony import */ var _list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-rooms/contact-list-rooms.service */ "ywU7");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../search/search.component */ "tq2C");
/* harmony import */ var _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contact-menu/contact-menu.component */ "ZCzq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ListFriendsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListFriendsComponent_div_15_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const friend_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.createNewRoomFor2Users(friend_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Nh\u1EAFn tin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListFriendsComponent_div_15_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const friend_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteFriend(friend_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " X\u00F3a b\u1EA1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", friend_r1 == null ? null : friend_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", friend_r1 == null ? null : friend_r1.name, " ");
} }
const _c0 = function (a0) { return { hide: a0 }; };
class ListFriendsComponent {
    constructor(route, hideContent, listFriendService, roomService) {
        this.route = route;
        this.hideContent = hideContent;
        this.listFriendService = listFriendService;
        this.roomService = roomService;
        this.valHideContactContent = false;
        this.currentUser = localStorage.getItem('userId');
    }
    ngOnInit() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
        this.fetchAllData();
    }
    fetchAllData() {
        this.listFriendService
            .getAll()
            .subscribe((response) => {
            this.listFriends = response.data.data;
            console.log(this.listFriends);
        });
    }
    createNewRoomFor2Users(idPartner) {
        const name = "";
        const members = [idPartner];
        this.roomService
            .saveOne(name, members)
            .subscribe((response) => {
            console.log('create new room');
            console.log(response.data);
            this.route.navigate(['chat', response.data._id]);
        });
    }
    deleteFriend(friendId) {
        this.listFriendService
            .delete(friendId)
            .subscribe(response => {
            console.log(`delete friend ${friendId}`);
            console.log(response);
            this.fetchAllData();
        });
    }
    contactContent() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
        this.valHideContactContent = true;
    }
}
ListFriendsComponent.ɵfac = function ListFriendsComponent_Factory(t) { return new (t || ListFriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_2__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_list_friend_service__WEBPACK_IMPORTED_MODULE_3__["ContactListFriendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_4__["ContactListRoomService"])); };
ListFriendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListFriendsComponent, selectors: [["app-list-friends"]], decls: 16, vars: 4, consts: [[1, "row"], [1, "col-md-4", "menu"], [1, "col-md-8", "content", 3, "ngClass"], ["id", "list-friends", 1, "col"], [1, "row", "list-contacts__title", "align-items-center", "justify-content-between"], [1, "icon-close", 2, "display", "none", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "list-contacts__title--text"], [1, "row", "list-contacts__tbl"], [1, "col"], ["class", "list-contacts__card", 4, "ngFor", "ngForOf"], [1, "list-contacts__card"], ["alt", "", 1, "img-fluid", "card__img", 3, "src"], [1, "row", "justify-content-center"], [1, "card__title"], [1, "card__icon", 3, "click"]], template: function ListFriendsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListFriendsComponent_Template_span_click_8_listener() { return ctx.contactContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Danh s\u00E1ch b\u1EA1n b\u00E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListFriendsComponent_div_15_Template, 11, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.valHideContactContent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listFriends);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_6__["ContactMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n\n\n\n.tabs-contact__item[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 2.5rem;\n  margin: 0.5rem 0;\n  border: 1px solid var(--color-1);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.tabs-contact__item[_ngcontent-%COMP%]:hover, .tabs-contact__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.list-contacts__title[_ngcontent-%COMP%] {\n  height: 10vh;\n  background-color: var(--color-1);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.list-contacts__title--text[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-weight: 700;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%] {\n  height: 72.5vh;\n  max-height: 72vh;\n  padding: 0 1rem;\n  background-color: var(--color-2);\n  border-top: 2px solid var(--color-2);\n  border-bottom: 1px solid var(--color-1);\n  border-left: 1px solid var(--color-1);\n  border-right: 1px solid var(--color-1);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  overflow-y: scroll;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-contacts__card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 31%;\n  padding: 0.5rem;\n  margin: 1rem 0.5rem;\n  text-align: center;\n  background-color: var(--color-1);\n  border-radius: 20px;\n}\n\n\n\n.card__img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  object-fit: cover;\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  max-width: 8.3rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card__introduce[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 60%;\n}\n\n.card__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.5rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.card__icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.notification[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  bottom: 2rem;\n  right: 2rem;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 50%;\n  transition: all 750ms;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  transition: all 750ms;\n}\n\n.notification__icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n.notification__count[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 0.3rem 0.4rem;\n  margin-top: 2.5rem;\n  margin-left: 2.75rem;\n  font-size: 0.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 50%;\n  transition: all 750ms;\n  background-color: var(--color-2);\n  cursor: pointer;\n}\n\n.icon-close[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-friend[_ngcontent-%COMP%] {\n  width: 35vw;\n  margin: 1rem 0rem;\n  padding: 2rem 3rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n.add-friend__input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem 0.5rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-friend__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n.add-friend__introduction[_ngcontent-%COMP%] {\n  margin: 0.75rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.add-friend__submit[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  background-color: var(--color-2);\n  border: none;\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n\n\n.add-friends__card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n}\n\n.add-friends__card.hide[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 750ms;\n}\n\n.add-friend__card--img[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  width: 5rem;\n  height: 5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.add-friend__card--title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0 1rem;\n  width: 20vw;\n  max-width: 19.5vw;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%], .edit-user__card--icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%]:hover, .edit-user__card--icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.add-groups[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 35vw;\n  padding: 2rem 3rem;\n  padding-bottom: 0.75rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n\n\n\n\n.add-groups__input[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0.75rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-groups__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n\n\n.list-friends-add-groups[_ngcontent-%COMP%] {\n  height: 37.5vh;\n  max-height: 37vh;\n  padding: 1rem;\n  overflow-y: scroll;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-friends-add-groups__item[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n\n\n.input-checkbox[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  transform: scale(1.25);\n}\n\n.item__img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.item__name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  max-width: 12.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sb-add-groups[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  padding: 0.5rem 1.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n}\n\n.sb-add-groups[_ngcontent-%COMP%]:hover, .sb-add-groups[_ngcontent-%COMP%]:focus {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n  width: 35vw;\n  padding: 0 2.5rem;\n}\n\n\n\n@media only screen and (max-width: 480px) {\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0 !important;\n    background-color: rgba(0, 0, 0, 0.32);\n  }\n\n  .content.hide[_ngcontent-%COMP%] {\n    display: none;\n    transition: all 750ms;\n  }\n\n  .list-contacts__tbl[_ngcontent-%COMP%] {\n    height: 90vh;\n    max-height: 90vh;\n  }\n\n  .list-contacts__card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n\n  \n  .add-friend[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-friend__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .add-friend__card--title[_ngcontent-%COMP%] {\n    width: 60vw;\n    max-width: 59.5vw;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1rem;\n    color: var(--color-3);\n  }\n\n  \n\n  .add-groups[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-groups__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  \n  .add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n    width: 100vw;\n    padding: 0 1.5rem;\n  }\n\n  \n  .item__name[_ngcontent-%COMP%] {\n    max-width: 6.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pC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QUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztFQUVBLGVBQWU7RUFDZjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBLGNBQWM7O0VBRWQ7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQSxtQkFBbUI7RUFDbkI7OztJQUdFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUEsU0FBUztFQUNUO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRhY3QgKi9cblxuLnRhYnMtY29udGFjdF9faXRlbSB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMi41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFicy1jb250YWN0X19pdGVtOmhvdmVyLFxuLnRhYnMtY29udGFjdF9faXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBDb250ZW50IENvbnRhY3RzICovXG5cbi5saXN0LWNvbnRhY3RzX190aXRsZSB7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1jb250YWN0c19fdGl0bGUtLXRleHQge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymwge1xuICBoZWlnaHQ6IDcyLjV2aDtcbiAgbWF4LWhlaWdodDogNzJ2aDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubGlzdC1jb250YWN0c19fdGJsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpc3QtY29udGFjdHNfX2NhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMSU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ2FyZCAqL1xuLmNhcmRfX2ltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZF9fdGl0bGUge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBtYXgtd2lkdGg6IDguM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkX19pbnRyb2R1Y2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmRfX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRfX2ljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBOb3RpZmljYXRpb24gKi9cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvdHRvbTogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLm5vdGlmaWNhdGlvbl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLm5vdGlmaWNhdGlvbl9fY291bnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjRyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDIuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEljb24gY2xvc2UgKi9cblxuLmljb24tY2xvc2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi8qIFBsdXMgQWRkIEdyb3VwICovXG5cbi5wbHVzLWFkZC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4vKiBBZGQgRnJpZW5kICovXG5cbi5hZGQtZnJpZW5kIHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1hcmdpbjogMXJlbSAwcmVtO1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW46IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGQtZnJpZW5kX19zdWJtaXQge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWRkIEZyaWVuZHMgQ29udGVudCAqL1xuLmFkZC1mcmllbmRzX19jYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hZGQtZnJpZW5kc19fY2FyZC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4uYWRkLWZyaWVuZF9fY2FyZC0taW1nIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS10aXRsZSB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IDE5LjV2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS1pY29uLFxuLmVkaXQtdXNlcl9fY2FyZC0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1mcmllbmRfX2NhcmQtLWljb246aG92ZXIsXG4uZWRpdC11c2VyX19jYXJkLS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLyogQWRkIEdyb3VwICovXG5cbi5hZGQtZ3JvdXBzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDM1dnc7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLyogQWRkIEdyb3VwIENvbnRlbnQgKi9cbi8qIElucHV0ICovXG4uYWRkLWdyb3Vwc19faW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbn1cblxuLmFkZC1ncm91cHNfX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbn1cblxuLyogTGlzdCBGcmllbmRzICovXG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3VwcyB7XG4gIGhlaWdodDogMzcuNXZoO1xuICBtYXgtaGVpZ2h0OiAzN3ZoO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1mcmllbmRzLWFkZC1ncm91cHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLmxpc3QtZnJpZW5kcy1hZGQtZ3JvdXBzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3Vwc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi8qIEl0ZW0gKi9cblxuLmlucHV0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG59XG5cbi5pdGVtX19pbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLml0ZW1fX25hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWF4LXdpZHRoOiAxMi41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNiLWFkZC1ncm91cHMge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi5zYi1hZGQtZ3JvdXBzOmhvdmVyLFxuLnNiLWFkZC1ncm91cHM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4ucGx1cy1hZGQtZ3JvdXAge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbn1cblxuLyogQ2FzZSBMaXN0IFJvb20gQ2hhdCAqL1xuLmFkZC1tZW1iZXIsXG4uZGVsZXRlLW1lbWJlcixcbi5kZWxldGUtcm9vbSB7XG4gIHdpZHRoOiAzNXZ3O1xuICBwYWRkaW5nOiAwIDIuNXJlbTtcbn1cblxuLyogVGFicyBSZXNwb25zaXZlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgfVxuXG4gIC5jb250ZW50LmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB9XG5cbiAgLmxpc3QtY29udGFjdHNfX3RibCB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubGlzdC1jb250YWN0c19fY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuaWNvbi1jbG9zZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cblxuICAvKiBBZGQgRnJpZW5kICovXG4gIC5hZGQtZnJpZW5kIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2NhcmQtLXRpdGxlIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBtYXgtd2lkdGg6IDU5LjV2dztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgfVxuXG4gIC8qIEFkZCBHcm91cCAqL1xuXG4gIC5hZGQtZ3JvdXBzIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1ncm91cHNfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLyogTGlzdCBSb29tIENhc2UgKi9cbiAgLmFkZC1tZW1iZXIsXG4gIC5kZWxldGUtbWVtYmVyLFxuICAuZGVsZXRlLXJvb20ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC8qIEl0ZW0gKi9cbiAgLml0ZW1fX25hbWUge1xuICAgIG1heC13aWR0aDogNi41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "TAlq":
/*!**********************************************************************!*\
  !*** ./src/app/contact/contact-content/contact-content.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactContentComponent", function() { return ContactContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactContentComponent {
    constructor() { }
    ngOnInit() { }
}
ContactContentComponent.ɵfac = function ContactContentComponent_Factory(t) { return new (t || ContactContentComponent)(); };
ContactContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactContentComponent, selectors: [["app-contact-content"]], decls: 0, vars: 0, template: function ContactContentComponent_Template(rf, ctx) { }, styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n\n\n\n.tabs-contact__item[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 2.5rem;\n  margin: 0.5rem 0;\n  border: 1px solid var(--color-1);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.tabs-contact__item[_ngcontent-%COMP%]:hover, .tabs-contact__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.list-contacts__title[_ngcontent-%COMP%] {\n  height: 10vh;\n  background-color: var(--color-1);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.list-contacts__title--text[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-weight: 700;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%] {\n  height: 72.5vh;\n  max-height: 72vh;\n  padding: 0 1rem;\n  background-color: var(--color-2);\n  border-top: 2px solid var(--color-2);\n  border-bottom: 1px solid var(--color-1);\n  border-left: 1px solid var(--color-1);\n  border-right: 1px solid var(--color-1);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  overflow-y: scroll;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-contacts__card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 31%;\n  padding: 0.5rem;\n  margin: 1rem 0.5rem;\n  text-align: center;\n  background-color: var(--color-1);\n  border-radius: 20px;\n}\n\n\n\n.card__img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  object-fit: cover;\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  max-width: 8.3rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card__introduce[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 60%;\n}\n\n.card__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.5rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.card__icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.notification[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  bottom: 2rem;\n  right: 2rem;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 50%;\n  transition: all 750ms;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  transition: all 750ms;\n}\n\n.notification__icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n.notification__count[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 0.3rem 0.4rem;\n  margin-top: 2.5rem;\n  margin-left: 2.75rem;\n  font-size: 0.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 50%;\n  transition: all 750ms;\n  background-color: var(--color-2);\n  cursor: pointer;\n}\n\n.icon-close[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-friend[_ngcontent-%COMP%] {\n  width: 35vw;\n  margin: 1rem 0rem;\n  padding: 2rem 3rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n.add-friend__input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem 0.5rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-friend__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n.add-friend__introduction[_ngcontent-%COMP%] {\n  margin: 0.75rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.add-friend__submit[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  background-color: var(--color-2);\n  border: none;\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n\n\n.add-friends__card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n}\n\n.add-friends__card.hide[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 750ms;\n}\n\n.add-friend__card--img[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  width: 5rem;\n  height: 5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.add-friend__card--title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0 1rem;\n  width: 20vw;\n  max-width: 19.5vw;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%], .edit-user__card--icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%]:hover, .edit-user__card--icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.add-groups[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 35vw;\n  padding: 2rem 3rem;\n  padding-bottom: 0.75rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n\n\n\n\n.add-groups__input[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0.75rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-groups__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n\n\n.list-friends-add-groups[_ngcontent-%COMP%] {\n  height: 37.5vh;\n  max-height: 37vh;\n  padding: 1rem;\n  overflow-y: scroll;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-friends-add-groups__item[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n\n\n.input-checkbox[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  transform: scale(1.25);\n}\n\n.item__img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.item__name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  max-width: 12.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sb-add-groups[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  padding: 0.5rem 1.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n}\n\n.sb-add-groups[_ngcontent-%COMP%]:hover, .sb-add-groups[_ngcontent-%COMP%]:focus {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n  width: 35vw;\n  padding: 0 2.5rem;\n}\n\n\n\n@media only screen and (max-width: 480px) {\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0 !important;\n    background-color: rgba(0, 0, 0, 0.32);\n  }\n\n  .content.hide[_ngcontent-%COMP%] {\n    display: none;\n    transition: all 750ms;\n  }\n\n  .list-contacts__tbl[_ngcontent-%COMP%] {\n    height: 90vh;\n    max-height: 90vh;\n  }\n\n  .list-contacts__card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n\n  \n  .add-friend[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-friend__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .add-friend__card--title[_ngcontent-%COMP%] {\n    width: 60vw;\n    max-width: 59.5vw;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1rem;\n    color: var(--color-3);\n  }\n\n  \n\n  .add-groups[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-groups__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  \n  .add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n    width: 100vw;\n    padding: 0 1.5rem;\n  }\n\n  \n  .item__name[_ngcontent-%COMP%] {\n    max-width: 6.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pC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QUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztFQUVBLGVBQWU7RUFDZjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBLGNBQWM7O0VBRWQ7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQSxtQkFBbUI7RUFDbkI7OztJQUdFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUEsU0FBUztFQUNUO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRhY3QgKi9cblxuLnRhYnMtY29udGFjdF9faXRlbSB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMi41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFicy1jb250YWN0X19pdGVtOmhvdmVyLFxuLnRhYnMtY29udGFjdF9faXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBDb250ZW50IENvbnRhY3RzICovXG5cbi5saXN0LWNvbnRhY3RzX190aXRsZSB7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1jb250YWN0c19fdGl0bGUtLXRleHQge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymwge1xuICBoZWlnaHQ6IDcyLjV2aDtcbiAgbWF4LWhlaWdodDogNzJ2aDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubGlzdC1jb250YWN0c19fdGJsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpc3QtY29udGFjdHNfX2NhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMSU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ2FyZCAqL1xuLmNhcmRfX2ltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZF9fdGl0bGUge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBtYXgtd2lkdGg6IDguM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkX19pbnRyb2R1Y2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmRfX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRfX2ljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBOb3RpZmljYXRpb24gKi9cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvdHRvbTogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLm5vdGlmaWNhdGlvbl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLm5vdGlmaWNhdGlvbl9fY291bnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjRyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDIuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEljb24gY2xvc2UgKi9cblxuLmljb24tY2xvc2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi8qIFBsdXMgQWRkIEdyb3VwICovXG5cbi5wbHVzLWFkZC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4vKiBBZGQgRnJpZW5kICovXG5cbi5hZGQtZnJpZW5kIHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1hcmdpbjogMXJlbSAwcmVtO1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW46IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGQtZnJpZW5kX19zdWJtaXQge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWRkIEZyaWVuZHMgQ29udGVudCAqL1xuLmFkZC1mcmllbmRzX19jYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hZGQtZnJpZW5kc19fY2FyZC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4uYWRkLWZyaWVuZF9fY2FyZC0taW1nIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS10aXRsZSB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IDE5LjV2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS1pY29uLFxuLmVkaXQtdXNlcl9fY2FyZC0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1mcmllbmRfX2NhcmQtLWljb246aG92ZXIsXG4uZWRpdC11c2VyX19jYXJkLS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLyogQWRkIEdyb3VwICovXG5cbi5hZGQtZ3JvdXBzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDM1dnc7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLyogQWRkIEdyb3VwIENvbnRlbnQgKi9cbi8qIElucHV0ICovXG4uYWRkLWdyb3Vwc19faW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbn1cblxuLmFkZC1ncm91cHNfX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbn1cblxuLyogTGlzdCBGcmllbmRzICovXG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3VwcyB7XG4gIGhlaWdodDogMzcuNXZoO1xuICBtYXgtaGVpZ2h0OiAzN3ZoO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1mcmllbmRzLWFkZC1ncm91cHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLmxpc3QtZnJpZW5kcy1hZGQtZ3JvdXBzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3Vwc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi8qIEl0ZW0gKi9cblxuLmlucHV0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG59XG5cbi5pdGVtX19pbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLml0ZW1fX25hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWF4LXdpZHRoOiAxMi41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNiLWFkZC1ncm91cHMge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi5zYi1hZGQtZ3JvdXBzOmhvdmVyLFxuLnNiLWFkZC1ncm91cHM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4ucGx1cy1hZGQtZ3JvdXAge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbn1cblxuLyogQ2FzZSBMaXN0IFJvb20gQ2hhdCAqL1xuLmFkZC1tZW1iZXIsXG4uZGVsZXRlLW1lbWJlcixcbi5kZWxldGUtcm9vbSB7XG4gIHdpZHRoOiAzNXZ3O1xuICBwYWRkaW5nOiAwIDIuNXJlbTtcbn1cblxuLyogVGFicyBSZXNwb25zaXZlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgfVxuXG4gIC5jb250ZW50LmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB9XG5cbiAgLmxpc3QtY29udGFjdHNfX3RibCB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubGlzdC1jb250YWN0c19fY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuaWNvbi1jbG9zZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cblxuICAvKiBBZGQgRnJpZW5kICovXG4gIC5hZGQtZnJpZW5kIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2NhcmQtLXRpdGxlIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBtYXgtd2lkdGg6IDU5LjV2dztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgfVxuXG4gIC8qIEFkZCBHcm91cCAqL1xuXG4gIC5hZGQtZ3JvdXBzIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1ncm91cHNfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLyogTGlzdCBSb29tIENhc2UgKi9cbiAgLmFkZC1tZW1iZXIsXG4gIC5kZWxldGUtbWVtYmVyLFxuICAuZGVsZXRlLXJvb20ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC8qIEl0ZW0gKi9cbiAgLml0ZW1fX25hbWUge1xuICAgIG1heC13aWR0aDogNi41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "Yuog":
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-menu/contact-menu.component */ "ZCzq");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "bzTf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'menu', component: _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_1__["ContactMenuComponent"] },
    { path: 'content', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./contact-content/contact-content.module */ "+Z4U")).then(m => m.ContactContentModule) },
];
class ContactRoutingModule {
}
ContactRoutingModule.ɵfac = function ContactRoutingModule_Factory(t) { return new (t || ContactRoutingModule)(); };
ContactRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContactRoutingModule });
ContactRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ZCzq":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact-menu/contact-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMenuComponent", function() { return ContactMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ContactMenuComponent {
    constructor(hideContent) {
        this.hideContent = hideContent;
        this.hide = false;
    }
    ngOnInit() { }
    onClickHideContent() {
        this.hideContent.showContentMobile.subscribe((isHide) => (this.hide = isHide));
        this.hideContent.changeShowValue(false);
        console.log(this.hide);
    }
}
ContactMenuComponent.ɵfac = function ContactMenuComponent_Factory(t) { return new (t || ContactMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_1__["SharingService"])); };
ContactMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactMenuComponent, selectors: [["app-contact-menu"]], decls: 22, vars: 0, consts: [[1, "col"], [1, "row", "justify-content-center"], ["id", "add-friends", "routerLink", "/contact/content/list-add-friends", "routerLinkActive", "active", 1, "tabs-contact__item", 3, "click"], [1, "fas", "fa-user-plus"], ["id", "friends", "routerLink", "/contact/content/list-friends", "routerLinkActive", "active", 1, "tabs-contact__item", 3, "click"], [1, "fas", "fa-user-friends"], ["id", "group", "routerLink", "/contact/content/list-rooms", "routerLinkActive", "active", 1, "tabs-contact__item", 3, "click"], [1, "fas", "fa-users"], ["id", "group", "routerLink", "/contact/content/add-friend", "routerLinkActive", "active", 1, "tabs-contact__item", 3, "click"], ["id", "group", "routerLink", "/contact/content/add-room", "routerLinkActive", "active", 1, "tabs-contact__item", 3, "click"], [1, "fas", "fa-plus", "plus-add-group"]], template: function ContactMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactMenuComponent_Template_span_click_2_listener() { return ctx.onClickHideContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " L\u1EDDi m\u1EDDi k\u1EBFt b\u1EA1n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactMenuComponent_Template_span_click_6_listener() { return ctx.onClickHideContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " B\u1EA1n b\u00E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactMenuComponent_Template_span_click_10_listener() { return ctx.onClickHideContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Nh\u00F3m chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactMenuComponent_Template_span_click_14_listener() { return ctx.onClickHideContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Th\u00EAm b\u1EA1n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactMenuComponent_Template_span_click_18_listener() { return ctx.onClickHideContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Th\u00EAm nh\u00F3m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n.tabs-contact__item[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 2.5rem;\n  margin: 0.5rem 0;\n  border: 1px solid var(--color-1);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.tabs-contact__item[_ngcontent-%COMP%]:hover, .tabs-contact__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBRVo7RUFDRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjb250YWN0LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbnRhY3QgKi9cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi50YWJzLWNvbnRhY3RfX2l0ZW0ge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDIuNXJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYnMtY29udGFjdF9faXRlbTpob3Zlcixcbi50YWJzLWNvbnRhY3RfX2l0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLyogUGx1cyBHcm91cCAqL1xuXG4ucGx1cy1hZGQtZ3JvdXAge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharing.service */ "hTjv");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ "tq2C");
/* harmony import */ var _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-menu/contact-menu.component */ "ZCzq");
/* harmony import */ var _contact_content_contact_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-content/contact-content.component */ "TAlq");





class ContactComponent {
    constructor(sharingService) {
        this.sharingService = sharingService;
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sharing_service__WEBPACK_IMPORTED_MODULE_1__["SharingService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 6, vars: 0, consts: [[1, "row"], [1, "col-md-4", "menu"], [1, "col-md-8", "content"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_3__["ContactMenuComponent"], _contact_content_contact_content_component__WEBPACK_IMPORTED_MODULE_4__["ContactContentComponent"]], styles: [".menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "hOT3":
/*!*****************************************************************************************!*\
  !*** ./src/app/contact/contact-content/contact-add-friend/contact-addfriend.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ContactAddFriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAddFriendService", function() { return ContactAddFriendService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




// Chỗ này lấy tạm path của profiles, cần path friends
const BACKEND_URL_PROFILE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/profiles/";
const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/requests/";
class ContactAddFriendService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ;
    getOneById(friendId) {
        return this.http
            .get(BACKEND_URL_PROFILE + friendId);
    }
    saveOne(friendId, introduce) {
        return this.http
            .post(BACKEND_URL, { receiver: friendId,
            introduce: introduce });
    }
    update(id, friend) {
        this.http
            .put(BACKEND_URL + id, friend);
    }
    delete(id) {
        return this.http
            .delete(BACKEND_URL + id);
    }
}
ContactAddFriendService.ɵfac = function ContactAddFriendService_Factory(t) { return new (t || ContactAddFriendService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactAddFriendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactAddFriendService, factory: ContactAddFriendService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "iwqW":
/*!****************************************************************************************************************!*\
  !*** ./src/app/contact/contact-content/list-add-friend-requests/contact-list-add-friend-requests.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ListAddFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAddFriendsComponent", function() { return ListAddFriendsComponent; });
/* harmony import */ var _contact_list_add_friend_requests_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-list-add-friend-requests.service */ "31SR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../search/search.component */ "tq2C");
/* harmony import */ var _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contact-menu/contact-menu.component */ "ZCzq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");










function ListAddFriendsComponent_mat_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
function ListAddFriendsComponent_div_16_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const friendRequest_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", friendRequest_r3.sender == null ? null : friendRequest_r3.sender.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ListAddFriendsComponent_div_16_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const friendRequest_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", friendRequest_r3.receiver == null ? null : friendRequest_r3.receiver.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ListAddFriendsComponent_div_16_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friendRequest_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", friendRequest_r3.sender == null ? null : friendRequest_r3.sender.name, " ");
} }
function ListAddFriendsComponent_div_16_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friendRequest_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", friendRequest_r3.receiver == null ? null : friendRequest_r3.receiver.name, " ");
} }
function ListAddFriendsComponent_div_16_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListAddFriendsComponent_div_16_span_13_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const friendRequest_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.isAcceptFriendRequest(friendRequest_r3._id, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0110\u1ED3ng \u00FD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListAddFriendsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListAddFriendsComponent_div_16_img_2_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListAddFriendsComponent_div_16_img_4_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListAddFriendsComponent_div_16_span_6_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListAddFriendsComponent_div_16_span_7_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListAddFriendsComponent_div_16_span_13_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListAddFriendsComponent_div_16_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const friendRequest_r3 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.deleteFriendRequest(friendRequest_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " X\u00F3a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friendRequest_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentUserId !== friendRequest_r3.sender._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentUserId === friendRequest_r3.sender._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentUserId !== friendRequest_r3.sender._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentUserId === friendRequest_r3.sender._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", friendRequest_r3.introduce, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentUserId !== friendRequest_r3.sender._id);
} }
function ListAddFriendsComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Hi\u1EC7n t\u1EA1i b\u1EA1n kh\u00F4ng c\u00F3 l\u1EDDi m\u1EDDi k\u1EBFt b\u1EA1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { hide: a0 }; };
class ListAddFriendsComponent {
    constructor(route, hideContent, listAddFriendRequestService, dialog) {
        this.route = route;
        this.hideContent = hideContent;
        this.listAddFriendRequestService = listAddFriendRequestService;
        this.dialog = dialog;
        this.isLoading = false;
        this.valHideContactContent = false;
        this.listAddFriendRequests = [];
        this.currentUserId = localStorage.getItem('userId');
    }
    ngOnInit() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
        this.fetchAllData();
    }
    fetchAllData() {
        this.listAddFriendRequestService
            .getAll()
            .subscribe((response) => {
            this.listAddFriendRequests = response.data;
            console.log(response.data);
        });
    }
    isAcceptFriendRequest(id, isAccept) {
        this.isLoading = true;
        this.listAddFriendRequestService
            .isAcceptFriendRequest(id, isAccept)
            .subscribe((response) => {
            console.log(response);
            this.fetchAllData();
            this.isLoading = false;
        });
        // let data= {message: ""};
        // if (isAccept) {
        //     data.message = "Chấp nhận lời mời kết bạn thành công"
        // }else data.message = "Bạn đã xóa lời mời kết bạn"
        // this.dialog.open(SuccessComponent, {data: data});
    }
    deleteFriendRequest(id) {
        this.isLoading = true;
        this.listAddFriendRequestService
            .deleteFriendRequest(id)
            .subscribe(response => {
            console.log(response);
            this.fetchAllData();
            this.isLoading = false;
        });
        // this.route.navigate(['/contact/content/list-add-friends']);
    }
    contactContent() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
        this.valHideContactContent = true;
    }
}
ListAddFriendsComponent.ɵfac = function ListAddFriendsComponent_Factory(t) { return new (t || ListAddFriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_3__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contact_list_add_friend_requests_service__WEBPACK_IMPORTED_MODULE_0__["ContactListAddFriendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ListAddFriendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListAddFriendsComponent, selectors: [["app-list-add-friends"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_contact_list_add_friend_requests_service__WEBPACK_IMPORTED_MODULE_0__["ContactListAddFriendService"]])], decls: 18, vars: 6, consts: [[1, "row"], [1, "col-md-4", "menu"], [1, "col-md-8", "content", 3, "ngClass"], ["id", "list-add-friends", 1, "col"], [1, "row", "list-contacts__title", "align-items-center", "justify-content-between"], [1, "icon-close", 2, "display", "none", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "list-contacts__title--text"], [4, "ngIf"], [1, "row", "list-contacts__tbl"], [1, "col"], ["class", "list-contacts__card", 4, "ngFor", "ngForOf"], ["class", "", 4, "ngIf"], [1, "list-contacts__card"], ["alt", "", "class", "img-fluid card__img", 3, "src", 4, "ngIf"], [1, "row", "justify-content-center"], ["class", "card__title", 4, "ngIf"], [1, "card__introduce"], ["class", "card__icon", 3, "click", 4, "ngIf"], [1, "card__icon", 3, "click"], ["alt", "", 1, "img-fluid", "card__img", 3, "src"], [1, "card__title"], [1, ""]], template: function ListAddFriendsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-contact-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListAddFriendsComponent_Template_span_click_8_listener() { return ctx.contactContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " L\u1EDDi m\u1EDDi k\u1EBFt b\u1EA1n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ListAddFriendsComponent_mat_spinner_12_Template, 1, 0, "mat-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListAddFriendsComponent_div_16_Template, 16, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListAddFriendsComponent_p_17_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.valHideContactContent));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listAddFriendRequests);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listAddFriendRequests.length <= 0);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_6__["ContactMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n\n\n\n.tabs-contact__item[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 2.5rem;\n  margin: 0.5rem 0;\n  border: 1px solid var(--color-1);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.tabs-contact__item[_ngcontent-%COMP%]:hover, .tabs-contact__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.list-contacts__title[_ngcontent-%COMP%] {\n  height: 10vh;\n  background-color: var(--color-1);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.list-contacts__title--text[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-weight: 700;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%] {\n  height: 72.5vh;\n  max-height: 72vh;\n  padding: 0 1rem;\n  background-color: var(--color-2);\n  border-top: 2px solid var(--color-2);\n  border-bottom: 1px solid var(--color-1);\n  border-left: 1px solid var(--color-1);\n  border-right: 1px solid var(--color-1);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  overflow-y: scroll;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-contacts__card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 31%;\n  padding: 0.5rem;\n  margin: 1rem 0.5rem;\n  text-align: center;\n  background-color: var(--color-1);\n  border-radius: 20px;\n}\n\n\n\n.card__img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  object-fit: cover;\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  max-width: 8.3rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card__introduce[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 60%;\n}\n\n.card__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.5rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.card__icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.notification[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  bottom: 2rem;\n  right: 2rem;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 50%;\n  transition: all 750ms;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  transition: all 750ms;\n}\n\n.notification__icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n.notification__count[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 0.3rem 0.4rem;\n  margin-top: 2.5rem;\n  margin-left: 2.75rem;\n  font-size: 0.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 50%;\n  transition: all 750ms;\n  background-color: var(--color-2);\n  cursor: pointer;\n}\n\n.icon-close[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-friend[_ngcontent-%COMP%] {\n  width: 35vw;\n  margin: 1rem 0rem;\n  padding: 2rem 3rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n.add-friend__input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem 0.5rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-friend__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n.add-friend__introduction[_ngcontent-%COMP%] {\n  margin: 0.75rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.add-friend__submit[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  background-color: var(--color-2);\n  border: none;\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n\n\n.add-friends__card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n}\n\n.add-friends__card.hide[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 750ms;\n}\n\n.add-friend__card--img[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  width: 5rem;\n  height: 5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.add-friend__card--title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0 1rem;\n  width: 20vw;\n  max-width: 19.5vw;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%], .edit-user__card--icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%]:hover, .edit-user__card--icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.add-groups[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 35vw;\n  padding: 2rem 3rem;\n  padding-bottom: 0.75rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n\n\n\n\n.add-groups__input[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0.75rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-groups__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n\n\n.list-friends-add-groups[_ngcontent-%COMP%] {\n  height: 37.5vh;\n  max-height: 37vh;\n  padding: 1rem;\n  overflow-y: scroll;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-friends-add-groups__item[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n\n\n.input-checkbox[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  transform: scale(1.25);\n}\n\n.item__img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.item__name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  max-width: 12.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sb-add-groups[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  padding: 0.5rem 1.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n}\n\n.sb-add-groups[_ngcontent-%COMP%]:hover, .sb-add-groups[_ngcontent-%COMP%]:focus {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n  width: 35vw;\n  padding: 0 2.5rem;\n}\n\n\n\n@media only screen and (max-width: 480px) {\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0 !important;\n    background-color: rgba(0, 0, 0, 0.32);\n  }\n\n  .content.hide[_ngcontent-%COMP%] {\n    display: none;\n    transition: all 750ms;\n  }\n\n  .list-contacts__tbl[_ngcontent-%COMP%] {\n    height: 90vh;\n    max-height: 90vh;\n  }\n\n  .list-contacts__card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n\n  \n  .add-friend[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-friend__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .add-friend__card--title[_ngcontent-%COMP%] {\n    width: 60vw;\n    max-width: 59.5vw;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1rem;\n    color: var(--color-3);\n  }\n\n  \n\n  .add-groups[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-groups__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  \n  .add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n    width: 100vw;\n    padding: 0 1.5rem;\n  }\n\n  \n  .item__name[_ngcontent-%COMP%] {\n    max-width: 6.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pC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QUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztFQUVBLGVBQWU7RUFDZjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBLGNBQWM7O0VBRWQ7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQSxtQkFBbUI7RUFDbkI7OztJQUdFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUEsU0FBUztFQUNUO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRhY3QgKi9cblxuLnRhYnMtY29udGFjdF9faXRlbSB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMi41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFicy1jb250YWN0X19pdGVtOmhvdmVyLFxuLnRhYnMtY29udGFjdF9faXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBDb250ZW50IENvbnRhY3RzICovXG5cbi5saXN0LWNvbnRhY3RzX190aXRsZSB7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1jb250YWN0c19fdGl0bGUtLXRleHQge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymwge1xuICBoZWlnaHQ6IDcyLjV2aDtcbiAgbWF4LWhlaWdodDogNzJ2aDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubGlzdC1jb250YWN0c19fdGJsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpc3QtY29udGFjdHNfX2NhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMSU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ2FyZCAqL1xuLmNhcmRfX2ltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZF9fdGl0bGUge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBtYXgtd2lkdGg6IDguM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkX19pbnRyb2R1Y2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmRfX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRfX2ljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBOb3RpZmljYXRpb24gKi9cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvdHRvbTogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLm5vdGlmaWNhdGlvbl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLm5vdGlmaWNhdGlvbl9fY291bnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjRyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDIuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEljb24gY2xvc2UgKi9cblxuLmljb24tY2xvc2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi8qIFBsdXMgQWRkIEdyb3VwICovXG5cbi5wbHVzLWFkZC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4vKiBBZGQgRnJpZW5kICovXG5cbi5hZGQtZnJpZW5kIHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1hcmdpbjogMXJlbSAwcmVtO1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW46IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGQtZnJpZW5kX19zdWJtaXQge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWRkIEZyaWVuZHMgQ29udGVudCAqL1xuLmFkZC1mcmllbmRzX19jYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hZGQtZnJpZW5kc19fY2FyZC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4uYWRkLWZyaWVuZF9fY2FyZC0taW1nIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS10aXRsZSB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IDE5LjV2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS1pY29uLFxuLmVkaXQtdXNlcl9fY2FyZC0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1mcmllbmRfX2NhcmQtLWljb246aG92ZXIsXG4uZWRpdC11c2VyX19jYXJkLS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLyogQWRkIEdyb3VwICovXG5cbi5hZGQtZ3JvdXBzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDM1dnc7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLyogQWRkIEdyb3VwIENvbnRlbnQgKi9cbi8qIElucHV0ICovXG4uYWRkLWdyb3Vwc19faW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbn1cblxuLmFkZC1ncm91cHNfX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbn1cblxuLyogTGlzdCBGcmllbmRzICovXG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3VwcyB7XG4gIGhlaWdodDogMzcuNXZoO1xuICBtYXgtaGVpZ2h0OiAzN3ZoO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1mcmllbmRzLWFkZC1ncm91cHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLmxpc3QtZnJpZW5kcy1hZGQtZ3JvdXBzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3Vwc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi8qIEl0ZW0gKi9cblxuLmlucHV0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG59XG5cbi5pdGVtX19pbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLml0ZW1fX25hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWF4LXdpZHRoOiAxMi41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNiLWFkZC1ncm91cHMge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi5zYi1hZGQtZ3JvdXBzOmhvdmVyLFxuLnNiLWFkZC1ncm91cHM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4ucGx1cy1hZGQtZ3JvdXAge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbn1cblxuLyogQ2FzZSBMaXN0IFJvb20gQ2hhdCAqL1xuLmFkZC1tZW1iZXIsXG4uZGVsZXRlLW1lbWJlcixcbi5kZWxldGUtcm9vbSB7XG4gIHdpZHRoOiAzNXZ3O1xuICBwYWRkaW5nOiAwIDIuNXJlbTtcbn1cblxuLyogVGFicyBSZXNwb25zaXZlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgfVxuXG4gIC5jb250ZW50LmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB9XG5cbiAgLmxpc3QtY29udGFjdHNfX3RibCB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubGlzdC1jb250YWN0c19fY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuaWNvbi1jbG9zZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cblxuICAvKiBBZGQgRnJpZW5kICovXG4gIC5hZGQtZnJpZW5kIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2NhcmQtLXRpdGxlIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBtYXgtd2lkdGg6IDU5LjV2dztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgfVxuXG4gIC8qIEFkZCBHcm91cCAqL1xuXG4gIC5hZGQtZ3JvdXBzIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1ncm91cHNfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLyogTGlzdCBSb29tIENhc2UgKi9cbiAgLmFkZC1tZW1iZXIsXG4gIC5kZWxldGUtbWVtYmVyLFxuICAuZGVsZXRlLXJvb20ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC8qIEl0ZW0gKi9cbiAgLml0ZW1fX25hbWUge1xuICAgIG1heC13aWR0aDogNi41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "m93s":
/*!*********************************************************************!*\
  !*** ./src/app/contact/contact-menu/contact-menu-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContactMenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMenuRoutingModule", function() { return ContactMenuRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-menu.component */ "ZCzq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _contact_menu_component__WEBPACK_IMPORTED_MODULE_1__["ContactMenuComponent"] }
];
class ContactMenuRoutingModule {
}
ContactMenuRoutingModule.ɵfac = function ContactMenuRoutingModule_Factory(t) { return new (t || ContactMenuRoutingModule)(); };
ContactMenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContactMenuRoutingModule });
ContactMenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactMenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "sqoU":
/*!****************************************************************************************!*\
  !*** ./src/app/contact/contact-content/contact-add-room/contact-add-room.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ContactAddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAddGroupComponent", function() { return ContactAddGroupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var _list_friends_contact_list_friend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-friends/contact-list-friend.service */ "QQtj");
/* harmony import */ var _contact_add_room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-add-room.service */ "+5i1");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../search/search.component */ "tq2C");
/* harmony import */ var _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contact-menu/contact-menu.component */ "ZCzq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ContactAddGroupComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ContactAddGroupComponent_div_25_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.checkBoxClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", friend_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", friend_r1 == null ? null : friend_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](friend_r1 == null ? null : friend_r1.name);
} }
const _c0 = function (a0) { return { hide: a0 }; };
class ContactAddGroupComponent {
    constructor(router, hideContent, friendService, roomService) {
        this.router = router;
        this.hideContent = hideContent;
        this.friendService = friendService;
        this.roomService = roomService;
        this.valHideContactContent = false;
        this.members = [];
    }
    ngOnInit() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)],
            }),
            members: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
        });
        this.friendService.getAll().subscribe((response) => {
            this.friends = response.data.data;
            console.log(this.friends);
        });
    }
    checkBoxClick(e) {
        console.log(`isChecked: ${e.target.checked} , value: ${e.target.value}`);
        if (e.target.checked) {
            console.log(e.target.value);
            this.members.push(e.target.value);
        }
        console.log(`members: ${this.members}`);
    }
    onAddRoom() {
        if (this.form.invalid) {
            return;
        }
        const room = {
            _id: '',
            name: this.form.value.name,
            members: this.members,
            avatar: '',
            admin: '',
            top: 500,
        };
        this.roomService.saveOne(room).subscribe((response) => {
            console.log(response);
        });
        this.router.navigate(['contact/content/list-rooms']);
    }
    contactContent() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
        this.valHideContactContent = true;
    }
}
ContactAddGroupComponent.ɵfac = function ContactAddGroupComponent_Factory(t) { return new (t || ContactAddGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_3__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_list_friends_contact_list_friend_service__WEBPACK_IMPORTED_MODULE_4__["ContactListFriendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contact_add_room_service__WEBPACK_IMPORTED_MODULE_5__["ContactAddRoomService"])); };
ContactAddGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactAddGroupComponent, selectors: [["app-contact-add-group"]], decls: 29, vars: 5, consts: [[1, "row", "justify-content-center"], [1, "col-md-4", "menu"], [1, "col-md-8", "content", 3, "ngClass"], [1, "add-groups"], [1, "row", "justify-content-between", "align-items-center"], [1, "fas", "fa-users"], [1, "fas", "fa-plus", "plus-add-group"], [1, "icon-close", 2, "display", "none", 3, "click"], [1, "fas", "fa-times", 2, "font-size", "1.2rem", "cursor", "pointer"], [3, "formGroup", "submit"], ["for", ""], ["type", "text", "placeholder", "Nh\u1EADp t\u00EAn nh\u00F3m", "formControlName", "name", "id", "groups-name", 1, "add-groups__input"], [1, "row", "list-friends-add-groups"], [1, "col"], ["class", "row align-items-center list-friends-add-groups__item", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-end"], ["type", "submit", 1, "sb-add-groups"], [1, "row", "align-items-center", "list-friends-add-groups__item"], ["type", "checkbox", "name", "add-groups", "formControlName", "members", 1, "input-checkbox", 3, "value", "change"], ["alt", "", 1, "img-fluid", "item__img", 3, "src"], [1, "item__name"]], template: function ContactAddGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-contact-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " T\u1EA1o nh\u00F3m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactAddGroupComponent_Template_span_click_12_listener() { return ctx.contactContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ContactAddGroupComponent_Template_form_submit_15_listener() { return ctx.onAddRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "T\u00EAn nh\u00F3m:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Ch\u1ECDn b\u1EA1n b\u00E8 th\u00EAm v\u00E0o nh\u00F3m:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ContactAddGroupComponent_div_25_Template, 5, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "T\u1EA1o nh\u00F3m");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.valHideContactContent));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.friends);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_7__["ContactMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"]], styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n\n\n\n.tabs-contact__item[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 2.5rem;\n  margin: 0.5rem 0;\n  border: 1px solid var(--color-1);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.tabs-contact__item[_ngcontent-%COMP%]:hover, .tabs-contact__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.list-contacts__title[_ngcontent-%COMP%] {\n  height: 10vh;\n  background-color: var(--color-1);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.list-contacts__title--text[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-weight: 700;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%] {\n  height: 72.5vh;\n  max-height: 72vh;\n  padding: 0 1rem;\n  background-color: var(--color-2);\n  border-top: 2px solid var(--color-2);\n  border-bottom: 1px solid var(--color-1);\n  border-left: 1px solid var(--color-1);\n  border-right: 1px solid var(--color-1);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  overflow-y: scroll;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-contacts__card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 31%;\n  padding: 0.5rem;\n  margin: 1rem 0.5rem;\n  text-align: center;\n  background-color: var(--color-1);\n  border-radius: 20px;\n}\n\n\n\n.card__img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  object-fit: cover;\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  max-width: 8.3rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card__introduce[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 60%;\n}\n\n.card__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.5rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.card__icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.notification[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  bottom: 2rem;\n  right: 2rem;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 50%;\n  transition: all 750ms;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  transition: all 750ms;\n}\n\n.notification__icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n.notification__count[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 0.3rem 0.4rem;\n  margin-top: 2.5rem;\n  margin-left: 2.75rem;\n  font-size: 0.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 50%;\n  transition: all 750ms;\n  background-color: var(--color-2);\n  cursor: pointer;\n}\n\n.icon-close[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-friend[_ngcontent-%COMP%] {\n  width: 35vw;\n  margin: 1rem 0rem;\n  padding: 2rem 3rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n.add-friend__input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem 0.5rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-friend__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n.add-friend__introduction[_ngcontent-%COMP%] {\n  margin: 0.75rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.add-friend__submit[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  background-color: var(--color-2);\n  border: none;\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n\n\n.add-friends__card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n}\n\n.add-friends__card.hide[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 750ms;\n}\n\n.add-friend__card--img[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  width: 5rem;\n  height: 5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.add-friend__card--title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0 1rem;\n  width: 20vw;\n  max-width: 19.5vw;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%], .edit-user__card--icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%]:hover, .edit-user__card--icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.add-groups[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 35vw;\n  padding: 2rem 3rem;\n  padding-bottom: 0.75rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n\n\n\n\n.add-groups__input[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0.75rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-groups__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n\n\n.list-friends-add-groups[_ngcontent-%COMP%] {\n  height: 37.5vh;\n  max-height: 37vh;\n  padding: 1rem;\n  overflow-y: scroll;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-friends-add-groups__item[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n\n\n.input-checkbox[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  transform: scale(1.25);\n}\n\n.item__img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.item__name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  max-width: 12.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sb-add-groups[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  padding: 0.5rem 1.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n}\n\n.sb-add-groups[_ngcontent-%COMP%]:hover, .sb-add-groups[_ngcontent-%COMP%]:focus {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n  width: 35vw;\n  padding: 0 2.5rem;\n}\n\n\n\n@media only screen and (max-width: 480px) {\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0 !important;\n    background-color: rgba(0, 0, 0, 0.32);\n  }\n\n  .content.hide[_ngcontent-%COMP%] {\n    display: none;\n    transition: all 750ms;\n  }\n\n  .list-contacts__tbl[_ngcontent-%COMP%] {\n    height: 90vh;\n    max-height: 90vh;\n  }\n\n  .list-contacts__card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n\n  \n  .add-friend[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-friend__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .add-friend__card--title[_ngcontent-%COMP%] {\n    width: 60vw;\n    max-width: 59.5vw;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1rem;\n    color: var(--color-3);\n  }\n\n  \n\n  .add-groups[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-groups__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  \n  .add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n    width: 100vw;\n    padding: 0 1.5rem;\n  }\n\n  \n  .item__name[_ngcontent-%COMP%] {\n    max-width: 6.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pC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QUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztFQUVBLGVBQWU7RUFDZjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBLGNBQWM7O0VBRWQ7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQSxtQkFBbUI7RUFDbkI7OztJQUdFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUEsU0FBUztFQUNUO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRhY3QgKi9cblxuLnRhYnMtY29udGFjdF9faXRlbSB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMi41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFicy1jb250YWN0X19pdGVtOmhvdmVyLFxuLnRhYnMtY29udGFjdF9faXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBDb250ZW50IENvbnRhY3RzICovXG5cbi5saXN0LWNvbnRhY3RzX190aXRsZSB7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1jb250YWN0c19fdGl0bGUtLXRleHQge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymwge1xuICBoZWlnaHQ6IDcyLjV2aDtcbiAgbWF4LWhlaWdodDogNzJ2aDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubGlzdC1jb250YWN0c19fdGJsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpc3QtY29udGFjdHNfX2NhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMSU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ2FyZCAqL1xuLmNhcmRfX2ltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZF9fdGl0bGUge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBtYXgtd2lkdGg6IDguM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkX19pbnRyb2R1Y2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmRfX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRfX2ljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBOb3RpZmljYXRpb24gKi9cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvdHRvbTogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLm5vdGlmaWNhdGlvbl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLm5vdGlmaWNhdGlvbl9fY291bnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjRyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDIuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEljb24gY2xvc2UgKi9cblxuLmljb24tY2xvc2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi8qIFBsdXMgQWRkIEdyb3VwICovXG5cbi5wbHVzLWFkZC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4vKiBBZGQgRnJpZW5kICovXG5cbi5hZGQtZnJpZW5kIHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1hcmdpbjogMXJlbSAwcmVtO1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW46IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGQtZnJpZW5kX19zdWJtaXQge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWRkIEZyaWVuZHMgQ29udGVudCAqL1xuLmFkZC1mcmllbmRzX19jYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hZGQtZnJpZW5kc19fY2FyZC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4uYWRkLWZyaWVuZF9fY2FyZC0taW1nIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS10aXRsZSB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IDE5LjV2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS1pY29uLFxuLmVkaXQtdXNlcl9fY2FyZC0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1mcmllbmRfX2NhcmQtLWljb246aG92ZXIsXG4uZWRpdC11c2VyX19jYXJkLS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLyogQWRkIEdyb3VwICovXG5cbi5hZGQtZ3JvdXBzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDM1dnc7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLyogQWRkIEdyb3VwIENvbnRlbnQgKi9cbi8qIElucHV0ICovXG4uYWRkLWdyb3Vwc19faW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbn1cblxuLmFkZC1ncm91cHNfX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbn1cblxuLyogTGlzdCBGcmllbmRzICovXG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3VwcyB7XG4gIGhlaWdodDogMzcuNXZoO1xuICBtYXgtaGVpZ2h0OiAzN3ZoO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1mcmllbmRzLWFkZC1ncm91cHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLmxpc3QtZnJpZW5kcy1hZGQtZ3JvdXBzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3Vwc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi8qIEl0ZW0gKi9cblxuLmlucHV0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG59XG5cbi5pdGVtX19pbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLml0ZW1fX25hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWF4LXdpZHRoOiAxMi41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNiLWFkZC1ncm91cHMge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi5zYi1hZGQtZ3JvdXBzOmhvdmVyLFxuLnNiLWFkZC1ncm91cHM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4ucGx1cy1hZGQtZ3JvdXAge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbn1cblxuLyogQ2FzZSBMaXN0IFJvb20gQ2hhdCAqL1xuLmFkZC1tZW1iZXIsXG4uZGVsZXRlLW1lbWJlcixcbi5kZWxldGUtcm9vbSB7XG4gIHdpZHRoOiAzNXZ3O1xuICBwYWRkaW5nOiAwIDIuNXJlbTtcbn1cblxuLyogVGFicyBSZXNwb25zaXZlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgfVxuXG4gIC5jb250ZW50LmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB9XG5cbiAgLmxpc3QtY29udGFjdHNfX3RibCB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubGlzdC1jb250YWN0c19fY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuaWNvbi1jbG9zZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cblxuICAvKiBBZGQgRnJpZW5kICovXG4gIC5hZGQtZnJpZW5kIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2NhcmQtLXRpdGxlIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBtYXgtd2lkdGg6IDU5LjV2dztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgfVxuXG4gIC8qIEFkZCBHcm91cCAqL1xuXG4gIC5hZGQtZ3JvdXBzIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1ncm91cHNfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLyogTGlzdCBSb29tIENhc2UgKi9cbiAgLmFkZC1tZW1iZXIsXG4gIC5kZWxldGUtbWVtYmVyLFxuICAuZGVsZXRlLXJvb20ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC8qIEl0ZW0gKi9cbiAgLml0ZW1fX25hbWUge1xuICAgIG1heC13aWR0aDogNi41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "zULN":
/*!************************************************************************************!*\
  !*** ./src/app/contact/contact-content/list-rooms/contact-list-rooms.component.ts ***!
  \************************************************************************************/
/*! exports provided: ListGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupsComponent", function() { return ListGroupsComponent; });
/* harmony import */ var _contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-list-rooms.service */ "ywU7");
/* harmony import */ var _list_rooms_options_list_room_options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-rooms-options/list-room-options.component */ "DgrK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var _contact_add_room_contact_add_room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact-add-room/contact-add-room.service */ "+5i1");
/* harmony import */ var _list_friends_contact_list_friend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list-friends/contact-list-friend.service */ "QQtj");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../search/search.component */ "tq2C");
/* harmony import */ var _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contact-menu/contact-menu.component */ "ZCzq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");












function ListGroupsComponent_div_15_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListGroupsComponent_div_15_span_14_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const room_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.deleteMember(room_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListGroupsComponent_div_15_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListGroupsComponent_div_15_span_15_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const room_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.outRoom(room_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListGroupsComponent_div_15_span_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListGroupsComponent_div_15_span_16_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const room_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.leaveRoom(room_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/chat", a1]; };
function ListGroupsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Nh\u1EAFn tin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " R\u1EDDi nh\u00F3m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListGroupsComponent_div_15_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const room_r2 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.addMember(room_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ListGroupsComponent_div_15_span_14_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ListGroupsComponent_div_15_span_15_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ListGroupsComponent_div_15_span_16_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, room_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (room_r2 == null ? null : room_r2.avatar) || "http://localhost:3000/public/images/pexels-cottonbro-4065895.jpg-1620614453299.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", room_r2 == null ? null : room_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", room_r2.admin[room_r2.admin.length - 1] === ctx_r0.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", room_r2.admin[room_r2.admin.length - 1] !== ctx_r0.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", room_r2.admin[room_r2.admin.length - 1] === ctx_r0.currentUserId);
} }
function ListGroupsComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Hi\u1EC7n t\u1EA1i b\u1EA1n kh\u00F4ng c\u00F3 nh\u00F3m chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { hide: a0 }; };
class ListGroupsComponent {
    constructor(hideContent, roomsService, roomService, friendService, dialog) {
        this.hideContent = hideContent;
        this.roomsService = roomsService;
        this.roomService = roomService;
        this.friendService = friendService;
        this.dialog = dialog;
        this.valHideContactContent = false;
        this.rooms = [];
        this.memberIds = [];
        this.currentUserId = localStorage.getItem('userId');
    }
    ngOnInit() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
        this.fetchAllData();
    }
    fetchAllData() {
        this.roomsService.getAll().subscribe((response) => {
            const responseData = response.data.data;
            this.rooms = responseData.filter(room => room.members.length > 2);
            console.log(this.rooms);
        });
        this.friendService
            .getAll()
            .subscribe((response) => {
            this.friendOfCurrentUser = response.data.data;
            console.log("Friends of current userId: ");
            console.log(this.friendOfCurrentUser);
        });
    }
    contactContent() {
        this.hideContent.showContentMobile.subscribe((hide) => (this.valHideContactContent = hide));
        this.valHideContactContent = true;
    }
    addMember(idRoom) {
        let friends;
        this.friendService
            .getAll()
            .subscribe((response) => {
            friends = response.data.data;
            const friendsFilter = friends.filter(friend => friend._id !== this.currentUserId);
            this.memberIds = [];
            this.roomsService
                .getMembersById(idRoom)
                .subscribe((response) => {
                response.data.forEach(element => {
                    this.memberIds.push(element === null || element === void 0 ? void 0 : element._id);
                });
                //Lỗi chỗ này => Đã fix (khi ra khỏi subscribe thì gtri chưa lấy kịp có thể dẫn đến sai sót)
                const friendsFilterTheSecond = friendsFilter.filter(friend => !this.memberIds.includes(friend === null || friend === void 0 ? void 0 : friend._id));
                const dialogRef = this.dialog.open(_list_rooms_options_list_room_options_component__WEBPACK_IMPORTED_MODULE_1__["ListRoomOptionsComponent"], {
                    data: {
                        roomId: idRoom,
                        friends: friendsFilterTheSecond,
                        type: "add",
                        className: "fas fa-user-plus",
                        title: "Thêm thành viên",
                        subTitle: "Chọn bạn bè thêm vào nhóm",
                    }
                });
            });
        });
    }
    deleteMember(idRoom) {
        this.roomsService
            .getMembersById(idRoom)
            .subscribe((response) => {
            const members = response.data;
            const membersFilter = members.filter(member => member._id !== this.currentUserId);
            //filter if friends are members => dag FAIL
            const memberFilterWithoutFriendExist = membersFilter.filter(item => !this.friendOfCurrentUser.includes(item));
            console.log("Filter if friends are member");
            console.log(memberFilterWithoutFriendExist);
            const dialogRef = this.dialog.open(_list_rooms_options_list_room_options_component__WEBPACK_IMPORTED_MODULE_1__["ListRoomOptionsComponent"], {
                data: {
                    roomId: idRoom,
                    friends: membersFilter,
                    type: "delete",
                    className: "fas fa-users-cog",
                    title: "Xóa thành viên",
                    subTitle: "Thành viên trong nhóm",
                }
            });
            console.log(members);
        });
    }
    leaveRoom(idRoom) {
        this.roomsService
            .getMembersById(idRoom)
            .subscribe((response) => {
            const members = response.data;
            const membersFilter = members.filter(member => member._id !== this.currentUserId);
            const dialogRef = this.dialog.open(_list_rooms_options_list_room_options_component__WEBPACK_IMPORTED_MODULE_1__["ListRoomOptionsComponent"], {
                data: {
                    roomId: idRoom,
                    friends: membersFilter,
                    type: "leave",
                    className: "fas fa-sign-out-alt",
                    title: "Rời nhóm",
                    subTitle: "Chọn quản trị viên",
                }
            });
            this.fetchAllData();
            console.log(members);
        });
    }
    outRoom(idRoom) {
        // alert("Hiện tại tính năng đang phát triển");
        this.roomService
            .outRoom(idRoom)
            .subscribe((response) => {
            console.log("Out room: ");
            console.log(response);
            this.fetchAllData();
        });
    }
}
ListGroupsComponent.ɵfac = function ListGroupsComponent_Factory(t) { return new (t || ListGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_3__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_0__["ContactListRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_contact_add_room_contact_add_room_service__WEBPACK_IMPORTED_MODULE_4__["ContactAddRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_list_friends_contact_list_friend_service__WEBPACK_IMPORTED_MODULE_5__["ContactListFriendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
ListGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListGroupsComponent, selectors: [["app-list-groups"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_0__["ContactListRoomService"]])], decls: 17, vars: 5, consts: [[1, "row"], [1, "col-md-4", "menu"], [1, "col-md-8", "content", 3, "ngClass"], [1, "col"], [1, "row", "list-contacts__title", "align-items-center", "justify-content-between"], [1, "icon-close", 2, "display", "none", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "list-contacts__title--text"], [1, "row", "list-contacts__tbl"], ["class", "list-contacts__card", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "list-contacts__card"], [1, "cursor_pointer", 3, "routerLink"], ["alt", "", 1, "img-fluid", "card__img", 3, "src"], [1, "row", "justify-content-center"], [1, "card__title"], [2, "display", "none"], [1, "card__icon"], ["title", "Th\u00EAm th\u00E0nh vi\u00EAn", 1, "card__icon", 3, "click"], [1, "fas", "fa-user-plus"], ["title", "X\u00F3a th\u00E0nh vi\u00EAn", "class", "card__icon", 3, "click", 4, "ngIf"], ["title", "R\u1EDDi nh\u00F3m", "class", "card__icon", 3, "click", 4, "ngIf"], ["title", "Chuy\u1EC3n admin nh\u00F3m", "class", "card__icon", 3, "click", 4, "ngIf"], ["title", "X\u00F3a th\u00E0nh vi\u00EAn", 1, "card__icon", 3, "click"], [1, "fas", "fa-user-minus"], ["title", "R\u1EDDi nh\u00F3m", 1, "card__icon", 3, "click"], [1, "fas", "fa-sign-out-alt"], ["title", "Chuy\u1EC3n admin nh\u00F3m", 1, "card__icon", 3, "click"]], template: function ListGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-contact-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListGroupsComponent_Template_span_click_8_listener() { return ctx.contactContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Danh s\u00E1ch nh\u00F3m chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ListGroupsComponent_div_15_Template, 17, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ListGroupsComponent_p_16_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, ctx.valHideContactContent));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rooms.length <= 0);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], _contact_menu_contact_menu_component__WEBPACK_IMPORTED_MODULE_8__["ContactMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n\n\n\n.tabs-contact__item[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 2.5rem;\n  margin: 0.5rem 0;\n  border: 1px solid var(--color-1);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.tabs-contact__item[_ngcontent-%COMP%]:hover, .tabs-contact__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.list-contacts__title[_ngcontent-%COMP%] {\n  height: 10vh;\n  background-color: var(--color-1);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.list-contacts__title--text[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-weight: 700;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%] {\n  height: 72.5vh;\n  max-height: 72vh;\n  padding: 0 1rem;\n  background-color: var(--color-2);\n  border-top: 2px solid var(--color-2);\n  border-bottom: 1px solid var(--color-1);\n  border-left: 1px solid var(--color-1);\n  border-right: 1px solid var(--color-1);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  overflow-y: scroll;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-contacts__tbl[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-contacts__card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 31%;\n  padding: 0.5rem;\n  margin: 1rem 0.5rem;\n  text-align: center;\n  background-color: var(--color-1);\n  border-radius: 20px;\n}\n\n\n\n.card__img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  object-fit: cover;\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  max-width: 8.3rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card__introduce[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 60%;\n}\n\n.card__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.5rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.card__icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.notification[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  bottom: 2rem;\n  right: 2rem;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 50%;\n  transition: all 750ms;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  transition: all 750ms;\n}\n\n.notification__icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n.notification__count[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 0.3rem 0.4rem;\n  margin-top: 2.5rem;\n  margin-left: 2.75rem;\n  font-size: 0.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 50%;\n  transition: all 750ms;\n  background-color: var(--color-2);\n  cursor: pointer;\n}\n\n.icon-close[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-friend[_ngcontent-%COMP%] {\n  width: 35vw;\n  margin: 1rem 0rem;\n  padding: 2rem 3rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n.add-friend__input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem 0.5rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-friend__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n.add-friend__introduction[_ngcontent-%COMP%] {\n  margin: 0.75rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.add-friend__submit[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  background-color: var(--color-2);\n  border: none;\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n\n\n.add-friends__card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n}\n\n.add-friends__card.hide[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 750ms;\n}\n\n.add-friend__card--img[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  width: 5rem;\n  height: 5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.add-friend__card--title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0 1rem;\n  width: 20vw;\n  max-width: 19.5vw;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%], .edit-user__card--icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%]:hover, .edit-user__card--icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n.add-groups[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 35vw;\n  padding: 2rem 3rem;\n  padding-bottom: 0.75rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 20px;\n  z-index: 3;\n}\n\n\n\n\n\n.add-groups__input[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0.75rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-groups__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n\n\n.list-friends-add-groups[_ngcontent-%COMP%] {\n  height: 37.5vh;\n  max-height: 37vh;\n  padding: 1rem;\n  overflow-y: scroll;\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.list-friends-add-groups[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n.list-friends-add-groups__item[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n\n\n.input-checkbox[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  transform: scale(1.25);\n}\n\n.item__img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.5rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.item__name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  max-width: 12.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sb-add-groups[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  padding: 0.5rem 1.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n}\n\n.sb-add-groups[_ngcontent-%COMP%]:hover, .sb-add-groups[_ngcontent-%COMP%]:focus {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n.plus-add-group[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0.2rem;\n}\n\n\n\n.add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n  width: 35vw;\n  padding: 0 2.5rem;\n}\n\n\n\n@media only screen and (max-width: 480px) {\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0 !important;\n    background-color: rgba(0, 0, 0, 0.32);\n  }\n\n  .content.hide[_ngcontent-%COMP%] {\n    display: none;\n    transition: all 750ms;\n  }\n\n  .list-contacts__tbl[_ngcontent-%COMP%] {\n    height: 90vh;\n    max-height: 90vh;\n  }\n\n  .list-contacts__card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n\n  \n  .add-friend[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-friend__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .add-friend__card--title[_ngcontent-%COMP%] {\n    width: 60vw;\n    max-width: 59.5vw;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1rem;\n    color: var(--color-3);\n  }\n\n  \n\n  .add-groups[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-top: 5rem;\n    padding: 1.5rem 2rem;\n  }\n\n  .add-groups__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  \n  .add-member[_ngcontent-%COMP%], .delete-member[_ngcontent-%COMP%], .delete-room[_ngcontent-%COMP%] {\n    width: 100vw;\n    padding: 0 1.5rem;\n  }\n\n  \n  .item__name[_ngcontent-%COMP%] {\n    max-width: 6.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pC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QUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztFQUVBLGVBQWU7RUFDZjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBLGNBQWM7O0VBRWQ7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQSxtQkFBbUI7RUFDbkI7OztJQUdFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUEsU0FBUztFQUNUO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRhY3QgKi9cblxuLnRhYnMtY29udGFjdF9faXRlbSB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMi41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFicy1jb250YWN0X19pdGVtOmhvdmVyLFxuLnRhYnMtY29udGFjdF9faXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBDb250ZW50IENvbnRhY3RzICovXG5cbi5saXN0LWNvbnRhY3RzX190aXRsZSB7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1jb250YWN0c19fdGl0bGUtLXRleHQge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymwge1xuICBoZWlnaHQ6IDcyLjV2aDtcbiAgbWF4LWhlaWdodDogNzJ2aDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubGlzdC1jb250YWN0c19fdGJsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5saXN0LWNvbnRhY3RzX190Ymw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpc3QtY29udGFjdHNfX2NhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMSU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ2FyZCAqL1xuLmNhcmRfX2ltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZF9fdGl0bGUge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBtYXgtd2lkdGg6IDguM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkX19pbnRyb2R1Y2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmRfX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRfX2ljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBOb3RpZmljYXRpb24gKi9cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvdHRvbTogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLm5vdGlmaWNhdGlvbl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLm5vdGlmaWNhdGlvbl9fY291bnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjRyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDIuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEljb24gY2xvc2UgKi9cblxuLmljb24tY2xvc2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi8qIFBsdXMgQWRkIEdyb3VwICovXG5cbi5wbHVzLWFkZC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4vKiBBZGQgRnJpZW5kICovXG5cbi5hZGQtZnJpZW5kIHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1hcmdpbjogMXJlbSAwcmVtO1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW46IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGQtZnJpZW5kX19zdWJtaXQge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWRkIEZyaWVuZHMgQ29udGVudCAqL1xuLmFkZC1mcmllbmRzX19jYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hZGQtZnJpZW5kc19fY2FyZC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4uYWRkLWZyaWVuZF9fY2FyZC0taW1nIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS10aXRsZSB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IDE5LjV2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS1pY29uLFxuLmVkaXQtdXNlcl9fY2FyZC0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1mcmllbmRfX2NhcmQtLWljb246aG92ZXIsXG4uZWRpdC11c2VyX19jYXJkLS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLyogQWRkIEdyb3VwICovXG5cbi5hZGQtZ3JvdXBzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDM1dnc7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLyogQWRkIEdyb3VwIENvbnRlbnQgKi9cbi8qIElucHV0ICovXG4uYWRkLWdyb3Vwc19faW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbn1cblxuLmFkZC1ncm91cHNfX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbn1cblxuLyogTGlzdCBGcmllbmRzICovXG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3VwcyB7XG4gIGhlaWdodDogMzcuNXZoO1xuICBtYXgtaGVpZ2h0OiAzN3ZoO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdC1mcmllbmRzLWFkZC1ncm91cHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLmxpc3QtZnJpZW5kcy1hZGQtZ3JvdXBzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0LWZyaWVuZHMtYWRkLWdyb3Vwc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi8qIEl0ZW0gKi9cblxuLmlucHV0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG59XG5cbi5pdGVtX19pbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLml0ZW1fX25hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWF4LXdpZHRoOiAxMi41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNiLWFkZC1ncm91cHMge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi5zYi1hZGQtZ3JvdXBzOmhvdmVyLFxuLnNiLWFkZC1ncm91cHM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4ucGx1cy1hZGQtZ3JvdXAge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbn1cblxuLyogQ2FzZSBMaXN0IFJvb20gQ2hhdCAqL1xuLmFkZC1tZW1iZXIsXG4uZGVsZXRlLW1lbWJlcixcbi5kZWxldGUtcm9vbSB7XG4gIHdpZHRoOiAzNXZ3O1xuICBwYWRkaW5nOiAwIDIuNXJlbTtcbn1cblxuLyogVGFicyBSZXNwb25zaXZlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgfVxuXG4gIC5jb250ZW50LmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICB9XG5cbiAgLmxpc3QtY29udGFjdHNfX3RibCB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubGlzdC1jb250YWN0c19fY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuaWNvbi1jbG9zZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cblxuICAvKiBBZGQgRnJpZW5kICovXG4gIC5hZGQtZnJpZW5kIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmFkZC1mcmllbmRfX2NhcmQtLXRpdGxlIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBtYXgtd2lkdGg6IDU5LjV2dztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgfVxuXG4gIC8qIEFkZCBHcm91cCAqL1xuXG4gIC5hZGQtZ3JvdXBzIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG5cbiAgLmFkZC1ncm91cHNfX2lucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLyogTGlzdCBSb29tIENhc2UgKi9cbiAgLmFkZC1tZW1iZXIsXG4gIC5kZWxldGUtbWVtYmVyLFxuICAuZGVsZXRlLXJvb20ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC8qIEl0ZW0gKi9cbiAgLml0ZW1fX25hbWUge1xuICAgIG1heC13aWR0aDogNi41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map