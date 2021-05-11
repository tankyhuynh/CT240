(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "2yxt":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angular-material.module */ "rhD1");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search.module */ "RmqX");
/* harmony import */ var _chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-menu/chat-menu.component */ "SHIX");
/* harmony import */ var _chat_roomchat_chat_roomchat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-roomchat/chat-roomchat.module */ "lg9e");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-routing.module */ "cC0O");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.component */ "+XlM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class ChatModule {
}
ChatModule.ɵfac = function ChatModule_Factory(t) { return new (t || ChatModule)(); };
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _search_search_module__WEBPACK_IMPORTED_MODULE_3__["SearchModule"],
            _chat_roomchat_chat_roomchat_module__WEBPACK_IMPORTED_MODULE_5__["ChatRoomChatModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
        _chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_4__["ChatMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_3__["SearchModule"],
        _chat_roomchat_chat_roomchat_module__WEBPACK_IMPORTED_MODULE_5__["ChatRoomChatModule"]] }); })();


/***/ }),

/***/ "XjBP":
/*!********************************************************************!*\
  !*** ./src/app/chat/chat-roomchat/chat-roomchat-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ChatRoomChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomChatRoutingModule", function() { return ChatRoomChatRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_roomchat_body_chat_roomchat_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-roomchat-body/chat-roomchat-body.component */ "pDIi");
/* harmony import */ var _chat_roomchat_header_chat_roomchat_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-roomchat-header/chat-roomchat-header.component */ "G1Oq");
/* harmony import */ var _chat_roomchat_send_chat_roomchat_send_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-roomchat-send/chat-roomchat-send.component */ "KxwN");
/* harmony import */ var _chat_roomchat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-roomchat.component */ "rGiC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _chat_roomchat_component__WEBPACK_IMPORTED_MODULE_4__["ChatRoomchatComponent"] },
    { path: 'header', component: _chat_roomchat_header_chat_roomchat_header_component__WEBPACK_IMPORTED_MODULE_2__["ChatRoomchatHeaderComponent"] },
    { path: 'body', component: _chat_roomchat_body_chat_roomchat_body_component__WEBPACK_IMPORTED_MODULE_1__["ChatRoomchatBodyComponent"] },
    { path: 'send', component: _chat_roomchat_send_chat_roomchat_send_component__WEBPACK_IMPORTED_MODULE_3__["ChatRoomchatSendComponent"] }
];
class ChatRoomChatRoutingModule {
}
ChatRoomChatRoutingModule.ɵfac = function ChatRoomChatRoutingModule_Factory(t) { return new (t || ChatRoomChatRoutingModule)(); };
ChatRoomChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ChatRoomChatRoutingModule });
ChatRoomChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ChatRoomChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "cC0O":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-menu/chat-menu.component */ "SHIX");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component */ "+XlM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"] },
    { path: 'menu', component: _chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_1__["ChatMenuComponent"] },
    { path: 'roomchat', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./chat-roomchat/chat-roomchat.module */ "lg9e")).then(m => m.ChatRoomChatModule) },
];
class ChatRoutingModule {
}
ChatRoutingModule.ɵfac = function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); };
ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "lg9e":
/*!************************************************************!*\
  !*** ./src/app/chat/chat-roomchat/chat-roomchat.module.ts ***!
  \************************************************************/
/*! exports provided: ChatRoomChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomChatModule", function() { return ChatRoomChatModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/angular-material.module */ "rhD1");
/* harmony import */ var src_app_search_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/search/search.module */ "RmqX");
/* harmony import */ var _chat_roomchat_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-roomchat-routing.module */ "XjBP");
/* harmony import */ var _chat_roomchat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-roomchat.component */ "rGiC");
/* harmony import */ var _chat_roomchat_header_chat_roomchat_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-roomchat-header/chat-roomchat-header.component */ "G1Oq");
/* harmony import */ var _chat_roomchat_body_chat_roomchat_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-roomchat-body/chat-roomchat-body.component */ "pDIi");
/* harmony import */ var _chat_roomchat_send_chat_roomchat_send_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-roomchat-send/chat-roomchat-send.component */ "KxwN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class ChatRoomChatModule {
}
ChatRoomChatModule.ɵfac = function ChatRoomChatModule_Factory(t) { return new (t || ChatRoomChatModule)(); };
ChatRoomChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ChatRoomChatModule });
ChatRoomChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _chat_roomchat_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatRoomChatRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _app_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            src_app_search_search_module__WEBPACK_IMPORTED_MODULE_3__["SearchModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ChatRoomChatModule, { declarations: [_chat_roomchat_component__WEBPACK_IMPORTED_MODULE_5__["ChatRoomchatComponent"],
        _chat_roomchat_header_chat_roomchat_header_component__WEBPACK_IMPORTED_MODULE_6__["ChatRoomchatHeaderComponent"],
        _chat_roomchat_body_chat_roomchat_body_component__WEBPACK_IMPORTED_MODULE_7__["ChatRoomchatBodyComponent"],
        _chat_roomchat_send_chat_roomchat_send_component__WEBPACK_IMPORTED_MODULE_8__["ChatRoomchatSendComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _chat_roomchat_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatRoomChatRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _app_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        src_app_search_search_module__WEBPACK_IMPORTED_MODULE_3__["SearchModule"]], exports: [_chat_roomchat_component__WEBPACK_IMPORTED_MODULE_5__["ChatRoomchatComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map