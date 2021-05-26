(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharing.service */ "hTjv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.service */ "bZE4");
/* harmony import */ var _contact_contact_content_list_friends_contact_list_friend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact-content/list-friends/contact-list-friend.service */ "QQtj");
/* harmony import */ var _personal_information_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../personal-information/profile.service */ "ctZf");
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socket/socket.service */ "FRSv");
/* harmony import */ var _contact_contact_content_list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact/contact-content/list-rooms/contact-list-rooms.service */ "ywU7");
/* harmony import */ var _chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-menu/chat-menu.component */ "SHIX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chat_roomchat_chat_roomchat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-roomchat/chat-roomchat.component */ "rGiC");











function ChatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-roomchat", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rooms", ctx_r0.rooms)("profileOfFriends", ctx_r0.profileOfFriends)("chatroom", ctx_r0.currentRoom)("messages", ctx_r0.messages);
} }
class ChatComponent {
    constructor(sharingService, route, chatService, listFriendService, profileService, socketService, roomService) {
        this.sharingService = sharingService;
        this.route = route;
        this.chatService = chatService;
        this.listFriendService = listFriendService;
        this.profileService = profileService;
        this.socketService = socketService;
        this.roomService = roomService;
        this.tmpImgPath = 'https://images.pexels.com/photos/7457830/pexels-photo-7457830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
        this.profileOfFriends = [];
        this.rooms = [];
        this.messages = [];
        this.lastMessageOfRooms = [];
        this.currentUserId = localStorage.getItem('userId');
        this.profiles = [];
    }
    ngOnInit() {
        this.fetchAllData();
        this.socketService.onMessage().subscribe((newMessage) => {
            this.updateLastMessageOfAllRoom();
        });
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('roomId')) {
                const roomId = paramMap.get('roomId');
                this.roomService.getOneById(roomId).subscribe((response) => {
                    var _a;
                    this.currentRoom = response.data;
                    this.currentRoom.top = 500;
                    console.log(this.currentRoom);
                    //Change status all message in room read
                    console.log(`currentRoom Name: ${this.currentRoom.name}`);
                    this.sharingService.changeMessageInRoomRead({
                        roomId: (_a = this.currentRoom) === null || _a === void 0 ? void 0 : _a._id,
                        value: false,
                    });
                    this.fetchAllData();
                });
                this.roomService
                    .getAllMessageByIdRoom(roomId)
                    .subscribe((response) => {
                    console.log('get all messages in chat');
                    this.messages = response.data;
                });
                this.roomService.getMembersById(roomId).subscribe((response) => {
                    const responseData = response.data;
                    console.log('members of room: ');
                    console.log(responseData);
                    // this.profileOfFriends = responseData;
                    responseData.forEach((element) => {
                        this.profileOfFriends[element._id] = element;
                    });
                });
            }
        });
    }
    fetchAllData() {
        console.log('fetch all data');
        this.roomService.getAll().subscribe((response) => {
            this.rooms = response.data.data;
            this.sharingService
                .currentMessageInRommReadedSourceStatus
                .subscribe((newMessage) => {
                this.rooms.forEach((room) => {
                    var _a;
                    if ((_a = room.messagelast.data) === null || _a === void 0 ? void 0 : _a.content) {
                        this.lastMessageOfRooms[room._id] = room.messagelast;
                    }
                    else {
                        room.messagelast.data.content = "Image";
                    }
                    this.lastMessageOfRooms[room._id] = room.messagelast;
                    if ((newMessage === null || newMessage === void 0 ? void 0 : newMessage.length) > 0) {
                        newMessage.forEach(element => {
                            if ((element === null || element === void 0 ? void 0 : element.roomId) === room._id) {
                                room.newMessage = element.value;
                            }
                        });
                    }
                });
            });
        });
    }
    updateLastMessageOfAllRoom() {
        console.log('updateLastMessageOfAllRoom');
        //fetch lastMessage of each room from sharing service lastMessage
        this.sharingService
            .lastMessage$
            .subscribe((lastMessage) => {
            this.rooms.forEach((room) => {
                if ((lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.length) > 0) {
                    lastMessage.forEach(element => {
                        if ((element === null || element === void 0 ? void 0 : element.roomId) === room._id) {
                            room.messagelast.data.content = element.value;
                            this.lastMessageOfRooms[room._id] = room.messagelast;
                        }
                    });
                }
            });
        });
    }
    ngAfterViewChecked() { }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sharing_service__WEBPACK_IMPORTED_MODULE_1__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_contact_content_list_friends_contact_list_friend_service__WEBPACK_IMPORTED_MODULE_4__["ContactListFriendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_personal_information_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_contact_content_list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_7__["ContactListRoomService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 4, vars: 4, consts: [[1, "row"], [1, "col-md-4", "col-12", "menu"], [3, "rooms", "lastMessageOfRooms", "currentRoom"], ["class", "col-md-8 col-12 content", 4, "ngIf"], [1, "col-md-8", "col-12", "content"], [3, "rooms", "profileOfFriends", "chatroom", "messages"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_div_3_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rooms", ctx.rooms)("lastMessageOfRooms", ctx.lastMessageOfRooms)("currentRoom", ctx.currentRoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoom);
    } }, directives: [_chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_8__["ChatMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _chat_roomchat_chat_roomchat_component__WEBPACK_IMPORTED_MODULE_10__["ChatRoomchatComponent"]], styles: [".menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem 2rem 0rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbSAwcmVtIDJyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tnhan/CT240/src/main.ts */"zUnb");


/***/ }),

/***/ "09dB":
/*!*********************************************************!*\
  !*** ./src/app/personal-information/account.service.ts ***!
  \*********************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/accounts/";
class AccountService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ;
    changePassword(password) {
        const formData = new FormData();
        formData.append("password", password);
        let reponseUser;
        return this.http
            .put(BACKEND_URL, { password: password });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac });


/***/ }),

/***/ "19mU":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component */ "TGkX");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-routing.module */ "nedP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MenuModule {
}
MenuModule.ɵfac = function MenuModule_Factory(t) { return new (t || MenuModule)(); };
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_1__["MenuRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]], imports: [_menu_routing_module__WEBPACK_IMPORTED_MODULE_1__["MenuRoutingModule"]], exports: [_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 0, vars: 0, template: function HomeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: "/api/v1"
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

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ErrorComponent {
    constructor(data) {
        this.data = data;
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["ng-component"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "mat-body-1"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "An Error occured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Okay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "FRSv":
/*!******************************************!*\
  !*** ./src/app/socket/socket.service.ts ***!
  \******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VCall_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VCall.model */ "brEo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");





class SocketService {
    constructor(authService) {
        this.authService = authService;
        this.message = "Hello from TanKy";
        this.url = 'http://localhost:3000';
        this.signal = {
            on: (handle) => {
                this.socket.on("vCall", handle);
            },
            emit: (data) => {
                this.socket.emit("vCall", data);
            }
        };
        this.vCallAPI = new _VCall_model__WEBPACK_IMPORTED_MODULE_2__["VCallAPI"](this.signal, "http://localhost:3000/public/vcall/index.html");
    }
    setUpConnnection() {
        const token = this.authService.getToken();
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])(this.url, { auth: { token: token } });
    }
    // Message
    sendMessage(room, data) {
        const DATA = {
            content: data
        };
        if ((DATA === null || DATA === void 0 ? void 0 : DATA.content) === '') {
            return;
        }
        this.socket.emit('message:send', { room: room, data: DATA });
        this.socket.on('message:receive', (data) => {
            this.newMessage = data;
            console.log(this.newMessage);
        });
        this.message = '';
    }
    sendImage(room, url) {
        const DATA = {
            url: url
        };
        this.socket.emit('message:send', { room: room, data: DATA });
        this.socket.on('message:receive', (data) => {
            this.newMessage = data;
            console.log(this.newMessage);
        });
        this.message = '';
    }
    onMessage() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
            this.socket.on('message:receive', (data) => {
                console.log("respones in socket receive message: ");
                console.log(data);
                observer.next(data);
            });
        });
    }
    //Listen new video call receive
    onNewVideoCall() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
            this.socket.on("call:new", data => {
                console.log(`from ${data === null || data === void 0 ? void 0 : data.from}`);
                this.vCallAPI.createReceiveView(data.from);
            });
        });
    }
    //Create new video call request
    createNewVideoCall(to) {
        this.socket.emit("call:new", { to });
        console.log(`to ${to}`);
        this.vCallAPI.createCallView(to);
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AutheService"])); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "G1Oq":
/*!*******************************************************************************************!*\
  !*** ./src/app/chat/chat-roomchat/chat-roomchat-header/chat-roomchat-header.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChatRoomchatHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomchatHeaderComponent", function() { return ChatRoomchatHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket/socket.service */ "FRSv");



class ChatRoomchatHeaderComponent {
    constructor(showContent, socketService) {
        this.showContent = showContent;
        this.socketService = socketService;
        this.show = false;
    }
    ngOnInit() { }
    onClickShowContent() {
        this.showContent.showContentMobile.subscribe((isShow) => (this.show = isShow));
        this.showContent.changeShowValue(!this.show);
    }
    onCallVideo() {
        const currentUserId = localStorage.getItem('userId');
        const partnerId = (this.currentRoom.members.filter(member => member.user !== currentUserId))[0].user;
        this.socketService
            .createNewVideoCall(partnerId);
    }
}
ChatRoomchatHeaderComponent.ɵfac = function ChatRoomchatHeaderComponent_Factory(t) { return new (t || ChatRoomchatHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_1__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"])); };
ChatRoomchatHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatRoomchatHeaderComponent, selectors: [["app-chat-roomchat-header"]], inputs: { imgPath: "imgPath", currentRoom: "currentRoom" }, decls: 10, vars: 2, consts: [[1, "row", "chat-box__title", "align-items-center", "justify-content-between"], [1, "icon-close", 2, "display", "none", 3, "click"], [1, "fas", "fa-arrow-left"], ["alt", "", 1, "img-fluid", "chat-box__title--img", 3, "src"], [1, "chat-box__title--desc"], [1, "btn-call-video", 3, "click"], [1, "fas", "fa-video"]], template: function ChatRoomchatHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatRoomchatHeaderComponent_Template_span_click_2_listener() { return ctx.onClickShowContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatRoomchatHeaderComponent_Template_span_click_8_listener() { return ctx.onCallVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentRoom == null ? null : ctx.currentRoom.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentRoom == null ? null : ctx.currentRoom.name, " ");
    } }, styles: [".chat-box__title[_ngcontent-%COMP%] {\n  height: 12.5vh;\n  background-color: var(--color-1);\n  border-bottom: 2px solid var(--color-2);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.chat-box__title--img[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  width: 4rem;\n  height: 4rem;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 2px solid var(--color-2);\n}\n\n.chat-box__title--desc[_ngcontent-%COMP%] {\n  max-width: 10rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n\n\n.btn-call-video[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  padding: 0.8rem;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.btn-call-video[_ngcontent-%COMP%]:hover, .btn-call-video[_ngcontent-%COMP%]:focus {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n@media only screen and (max-width: 480px) {\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n\n  .chat-box__title[_ngcontent-%COMP%] {\n    height: 10vh;\n    background-color: var(--color-1);\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcm9vbWNoYXQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1COztBQUVuQjtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsdUNBQXVDO0VBQ3ZDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUI7QUFDRiIsImZpbGUiOiJjaGF0LXJvb21jaGF0LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2hhdCBCb3ggVGl0bGUgKi9cblxuLmNoYXQtYm94X190aXRsZSB7XG4gIGhlaWdodDogMTIuNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cblxuLmNoYXQtYm94X190aXRsZS0taW1nIHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xufVxuXG4uY2hhdC1ib3hfX3RpdGxlLS1kZXNjIHtcbiAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIENhbGwgVmlkZW8gKi9cblxuLmJ0bi1jYWxsLXZpZGVvIHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tY2FsbC12aWRlbzpob3ZlciwgLmJ0bi1jYWxsLXZpZGVvOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaWNvbi1jbG9zZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cblxuICAuY2hhdC1ib3hfX3RpdGxlIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "Hcoj":
/*!************************************************************************!*\
  !*** ./src/app/personal-information/personal-information.component.ts ***!
  \************************************************************************/
/*! exports provided: PersonalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationComponent", function() { return PersonalInformationComponent; });
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.service */ "ctZf");
/* harmony import */ var _relogin_relogin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../relogin/relogin.component */ "ozsY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_signup_mime_type_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/signup/mime-type.validator */ "nCYL");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.service */ "09dB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharing.service */ "hTjv");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");















const _c0 = ["username"];
const _c1 = ["password"];
function PersonalInformationComponent_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner");
} }
function PersonalInformationComponent_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r6.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function PersonalInformationComponent_div_4_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalInformationComponent_div_4_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r11.changeDiableStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Ch\u1EC9nh s\u1EEDa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PersonalInformationComponent_div_4_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalInformationComponent_div_4_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.changeDiableStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " H\u1EE7y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PersonalInformationComponent_div_4_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " L\u01B0u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PersonalInformationComponent_div_4_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PersonalInformationComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function PersonalInformationComponent_div_4_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.updateInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PersonalInformationComponent_div_4_Template_input_change_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.onFilePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PersonalInformationComponent_div_4_div_15_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, PersonalInformationComponent_div_4_button_17_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, PersonalInformationComponent_div_4_button_18_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PersonalInformationComponent_div_4_button_19_Template, 3, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PersonalInformationComponent_div_4_div_20_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Ch\u1EC9nh s\u1EEDa th\u00F4ng tin: #", ctx_r1.userId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.profile == null ? null : ctx_r1.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.isDiable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.imageURL !== "" && ctx_r1.imageURL && ctx_r1.form.get("avatar").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isDiable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isDiable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isDiable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isChangProfileSuccess);
} }
function PersonalInformationComponent_mat_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner");
} }
function PersonalInformationComponent_div_8_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PersonalInformationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u0110\u1ED5i m\u1EADt kh\u1EA9u: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalInformationComponent_div_8_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.changePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " L\u01B0u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PersonalInformationComponent_div_8_div_19_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx_r3.defaultPlaceHolderText[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx_r3.defaultPlaceHolderText[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", _r18.value !== _r19.value || _r18.value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isChangePassSuccessed);
} }
class PersonalInformationComponent {
    constructor(profileService, accountService, sharingService, dialog, route, fb) {
        this.profileService = profileService;
        this.accountService = accountService;
        this.sharingService = sharingService;
        this.dialog = dialog;
        this.route = route;
        this.fb = fb;
        this.userId = localStorage.getItem('userId');
        this.phone = localStorage.getItem('phone');
        this.isDiable = true;
        this.isLoadingProfileProcess = false;
        this.isLoadingPassProcess = false;
        this.isChangProfileSuccess = false;
        this.isChangePassSuccessed = false;
        this.defaultPlaceHolderText = ["Mật khẩu mới", "Xác nhận mật khẩu"];
    }
    ngOnInit() {
        const dialogRef = this.dialog.open(_relogin_relogin_component__WEBPACK_IMPORTED_MODULE_1__["ReloginComponent"], { disableClose: true });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: null, disabled: true }, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'avatar': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                asyncValidators: [_auth_signup_mime_type_validator__WEBPACK_IMPORTED_MODULE_3__["mimeType"]]
            })
        });
        this.profileService
            .getProfile()
            .subscribe((response) => {
            var _a;
            this.profile = response.data;
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: (_a = response.data) === null || _a === void 0 ? void 0 : _a.name, disabled: true }, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                }),
                'avatar': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    asyncValidators: [_auth_signup_mime_type_validator__WEBPACK_IMPORTED_MODULE_3__["mimeType"]]
                })
            });
        });
    }
    changeDiableStatus() {
        this.isDiable = !this.isDiable;
        if (!this.isDiable) {
            this.form.get('name').enable();
            this.username.nativeElement.focus();
        }
        else {
            this.defaultPlaceHolderText = ["Mật khẩu mới", "Xác nhận mật khẩu"];
            this.resetForm(this.profile.name);
            this.form.get('name').disable();
        }
    }
    resetForm(name) {
        this.form.patchValue({ name: name });
        this.form.get('name').updateValueAndValidity();
        this.form.patchValue({ avatar: null });
        this.form.get('avatar').updateValueAndValidity();
    }
    onFilePicked(event) {
        const file = event.target.files[0];
        this.form.patchValue({ avatar: file });
        this.form.get('avatar').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    }
    updateInfo() {
        console.log("Updated info worked!!");
        this.isLoadingProfileProcess = true;
        this.profileService
            .updateInfo(this.userId, this.form.value.name, this.form.value.avatar)
            .subscribe((response) => {
            this.changeDiableStatus();
            this.isChangProfileSuccess = true;
            this.setMessageChangeProfileSuccess(2);
            console.log(response.data);
            this.isLoadingProfileProcess = false;
            const newProfile = {
                name: response.data.name,
                avatar: response.data.avatar
            };
            this.profileService.changeUserStatusListerner(response.data);
            this.sharingService.changeUserData(response.data);
            localStorage.setItem('userData', JSON.stringify(response.data));
            this.resetForm(newProfile === null || newProfile === void 0 ? void 0 : newProfile.name);
            this.form.get('name').disable();
        });
    }
    changePassword() {
        this.isLoadingPassProcess = true;
        this.accountService
            .changePassword(this.password.nativeElement.value)
            .subscribe((response) => {
            this.isLoadingPassProcess = false;
            this.isChangePassSuccessed = true;
            this.setMessageChangPassSuccess(2);
        });
    }
    setMessageChangeProfileSuccess(duration) {
        this.tokenTimer = setTimeout(() => {
            this.isChangProfileSuccess = false;
        }, duration * 1000);
        console.log('Setting timer alert message: ' + duration);
    }
    setMessageChangPassSuccess(duration) {
        this.tokenTimer = setTimeout(() => {
            this.isChangePassSuccessed = false;
        }, duration * 1000);
        console.log('Setting timer alert message: ' + duration);
    }
}
PersonalInformationComponent.ɵfac = function PersonalInformationComponent_Factory(t) { return new (t || PersonalInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_sharing_service__WEBPACK_IMPORTED_MODULE_6__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
PersonalInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PersonalInformationComponent, selectors: [["app-personal-information"]], viewQuery: function PersonalInformationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_relogin_relogin_component__WEBPACK_IMPORTED_MODULE_1__["ReloginComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.username = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.password = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.reLoginComponent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"], _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])], decls: 9, vars: 4, consts: [[1, "row", "justify-content-center", "setting"], [1, "col-md-5", "col-12"], [1, "row", "justify-content-center"], [4, "ngIf"], ["class", "col-md-11 col-12 setting-content align-self-start", 4, "ngIf"], [1, "col-md-11", "col-12", "setting-content", "align-self-start"], [1, "row", "justify-content-between"], [1, "fas", "fa-cog"], ["method", "POST", 3, "formGroup", "submit"], ["type", "text", "formControlName", "name", "matInput", "", 1, "add-friend__input", "edit-input", 3, "value"], ["username", ""], ["type", "text", "name", "phone", "disabled", "", "matInput", "", 1, "add-friend__input", "edit-input", 3, "value"], ["id", "edit-name-err", 1, "row", "error"], [1, "row", "m-3"], ["type", "file", 3, "disabled", "change"], ["filePicker", ""], ["class", "imagePreview row justify-content-center", 4, "ngIf"], [1, "row", "justify-content-end"], ["type", "button", "class", "add-friend__card--icon", "id", "save-edit-user", 3, "click", 4, "ngIf"], ["type", "submit", "class", "add-friend__card--icon", "id", "save-edit-user", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "imagePreview", "row", "justify-content-center"], [3, "src"], ["type", "button", "id", "save-edit-user", 1, "add-friend__card--icon", 3, "click"], [1, "fas", "fa-edit"], ["type", "submit", "id", "save-edit-user", 1, "add-friend__card--icon"], [1, "fas", "fa-save"], [1, "text-success"], [1, "fas", "fa-key"], ["action", ""], ["id", "edit-password-err", 1, "row", "error"], ["type", "password", "id", "edit-new-password", "matInput", "", 1, "add-friend__input", 3, "placeholder"], ["password", ""], ["id", "edit-new-password-err", 1, "row", "error"], ["matInput", "", "type", "password", "id", "edit-re-password", 1, "add-friend__input", 3, "placeholder"], ["repassword", ""], ["id", "edit-re-password-err", 1, "row", "error"], ["type", "submit", "id", "save-change-password", 1, "add-friend__card--icon", 3, "disabled", "click"]], template: function PersonalInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalInformationComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PersonalInformationComponent_div_4_Template, 21, 10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PersonalInformationComponent_mat_spinner_7_Template, 1, 0, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PersonalInformationComponent_div_8_Template, 20, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoadingProfileProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoadingProfileProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoadingPassProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoadingPassProcess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".labelAvatar[_ngcontent-%COMP%] {\n  margin: 0.5rem 1rem;\n  cursor: pointer;\n}\n\n.imagePreview[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.imagePreview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 7.5rem;\n  height: 7.5rem;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.setting[_ngcontent-%COMP%] {\n  margin: 1rem;\n  border-radius: 20px;\n  z-index: 3;\n}\n\n.setting-content[_ngcontent-%COMP%] {\n  margin: 1rem;\n  padding: 1rem 2rem;\n  border: 2px solid var(--color-1);\n  border-radius: 15px;\n}\n\n.add-friend__input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem 0.5rem;\n  padding: 0 0.5rem;\n  display: block;\n  font-size: 0.9rem;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n}\n\n.add-friend__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n.add-friend__submit[_ngcontent-%COMP%] {\n  margin: 1rem 0.5rem;\n  background-color: var(--color-2);\n  border: none;\n  border-radius: 15px;\n  transition: all 750ms;\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%], .edit-user__card--icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1rem 0.25rem;\n  padding: 0.4rem 1rem;\n  font-size: 0.8rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n\n.add-friend__card--icon[_ngcontent-%COMP%]:hover, .edit-user__card--icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n@media only screen and (max-width: 480px) {\n  .setting-content[_ngcontent-%COMP%] {\n    margin: 0.5rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJwZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsQXZhdGFyIHtcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2VQcmV2aWV3IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2VQcmV2aWV3IGltZyB7XG4gIHdpZHRoOiA3LjVyZW07XG4gIGhlaWdodDogNy41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc2V0dGluZyB7XG4gIG1hcmdpbjogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMztcbn1cblxuLnNldHRpbmctY29udGVudCB7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmFkZC1mcmllbmRfX2lucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5hZGQtZnJpZW5kX19zdWJtaXQge1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi5hZGQtZnJpZW5kX19jYXJkLS1pY29uLFxuLmVkaXQtdXNlcl9fY2FyZC0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtIDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1mcmllbmRfX2NhcmQtLWljb246aG92ZXIsXG4uZWRpdC11c2VyX19jYXJkLS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc2V0dGluZy1jb250ZW50IHtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "KxwN":
/*!***************************************************************************************!*\
  !*** ./src/app/chat/chat-roomchat/chat-roomchat-send/chat-roomchat-send.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChatRoomchatSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomchatSendComponent", function() { return ChatRoomchatSendComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket/socket.service */ "FRSv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sendFile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sendFile.service */ "T8x4");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["message"];
function ChatRoomchatSendComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatRoomchatSendComponent_div_0_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.closePreview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ChatRoomchatSendComponent {
    constructor(socketService, route, sendfileService, sharingService) {
        this.socketService = socketService;
        this.route = route;
        this.sendfileService = sendfileService;
        this.sharingService = sharingService;
        this.currentUserId = localStorage.getItem('userId');
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                asyncValidators: [],
            }),
        });
    }
    sendMessage(data) {
        if (this.form.value.image) {
            console.log("dont have image");
            this.sendFile(this.form.value.image);
            if (this.message.nativeElement.value !== '\n') {
                this.socketService.sendMessage(this.roomId, data);
            }
        }
        else {
            if (this.message.nativeElement.value !== '\n') {
                this.socketService.sendMessage(this.roomId, data);
            }
        }
        this.resetForm();
    }
    sendFile(image) {
        this.sendfileService
            .sendImage(image)
            .subscribe((response) => {
            const imageUrl = response.data.url;
            console.log('send image: ');
            console.log(imageUrl);
            const newMessage = {
                room: this.roomId,
                data: { url: imageUrl },
                sender: this.currentUserId,
                created_at: new Date()
            };
            this.sharingService.changeSendNewImage(newMessage);
            this.socketService.sendImage(this.roomId, imageUrl);
            this.resetForm();
            this.closePreview();
        });
    }
    resetForm() {
        this.form.patchValue({ image: null });
        this.form.get('image').updateValueAndValidity();
        this.message.nativeElement.value = '';
    }
    onFilePicked(event) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
        };
        this.message.nativeElement.focus();
        reader.readAsDataURL(file);
    }
    closePreview() {
        this.imageURL = null;
    }
}
ChatRoomchatSendComponent.ɵfac = function ChatRoomchatSendComponent_Factory(t) { return new (t || ChatRoomchatSendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sendFile_service__WEBPACK_IMPORTED_MODULE_4__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_5__["SharingService"])); };
ChatRoomchatSendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatRoomchatSendComponent, selectors: [["app-chat-roomchat-send"]], viewQuery: function ChatRoomchatSendComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.message = _t.first);
    } }, inputs: { roomId: "roomId" }, decls: 14, vars: 2, consts: [["class", "filePreview row justify-content-between", 4, "ngIf"], [1, "row", "chat-box__send", "align-items-center"], [1, "col-md-11", "col-10"], ["rows", "2", "placeholder", "Tin nh\u1EAFn m\u1EDBi", 1, "chat-box__send--text", 3, "keyup.enter"], ["message", ""], [1, "col-md-1", "col-2"], [1, "row", "justify-content-center"], [1, "chat-box__send--btn", 3, "click"], [1, "fab", "fa-telegram-plane"], [1, "row", "justify-content-center", 3, "formGroup"], ["for", "send_file", 1, "chat-box__send--btn"], [1, "fas", "fa-paperclip"], ["type", "file", "name", "send_file", "id", "send_file", 2, "display", "none", 3, "change"], ["filePicker", ""], [1, "filePreview", "row", "justify-content-between"], [1, "imagePreview", 3, "src"], [1, "filePreview__icon-close", "align-self-start", 3, "click"], [1, "fas", "fa-times"]], template: function ChatRoomchatSendComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChatRoomchatSendComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ChatRoomchatSendComponent_Template_textarea_keyup_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.sendMessage(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatRoomchatSendComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.sendMessage(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ChatRoomchatSendComponent_Template_input_change_12_listener($event) { return ctx.onFilePicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURL !== "" && ctx.imageURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"]], styles: [".chat-box__send[_ngcontent-%COMP%] {\n  height: 15vh;\n  background-color: var(--color-1);\n  border-top: 2px solid var(--color-2);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.chat-box__send--text[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  width: 100%;\n  border: none;\n  border-radius: 15px;\n}\n.chat-box__send--text[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-box__send--text[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n.chat-box__send--btn[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0.25rem 1rem;\n  text-align: center;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: 1px solid var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n.chat-box__send--btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n.filePreview[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 63vw;\n  background-color: rgba(0, 0, 0, 0.125);\n  bottom: 15.3vh;\n  padding: 0.5rem;\n}\n.imagePreview[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: 7.5rem;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.filePreview__icon-close[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.5rem;\n  color: var(--color-3);\n  font-size: 1.1rem;\n  font-weight: 500;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 750ms;\n}\n.filePreview__icon-close[_ngcontent-%COMP%]:hover, .filePreview__icon-close[_ngcontent-%COMP%]:focus {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n@media only screen and (max-width: 480px) {\n  .content.show[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0.5rem;\n  }\n  .content[_ngcontent-%COMP%] {\n    display: none;\n    transition: all 750ms;\n  }\n\n  .tabs-card__item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 15vw;\n    height: 15vw;\n  }\n\n  .chat-box__body[_ngcontent-%COMP%] {\n    height: 72.5vh;\n    max-height: 72.5vh;\n  }\n\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n\n\n\n.filePreview[_ngcontent-%COMP%] {\n  bottom: 17.5vh;\n  width: 101%;\n  padding: 0.5rem 1rem;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcm9vbWNoYXQtc2VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2QjtBQUVBLGlCQUFpQjtBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7QUFFQSxlQUFlO0FBRWY7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztBQUVGLGlCQUFpQjs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBIiwiZmlsZSI6ImNoYXQtcm9vbWNoYXQtc2VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2hhdCBCb3ggU2VuZCAqL1xuLmNoYXQtYm94X19zZW5kIHtcbiAgaGVpZ2h0OiAxNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cblxuLmNoYXQtYm94X19zZW5kLS10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jaGF0LWJveF9fc2VuZC0tdGV4dDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuXG4uY2hhdC1ib3hfX3NlbmQtLXRleHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNoYXQtYm94X19zZW5kLS1idG4ge1xuICBtYXJnaW46IDAuMjVyZW0gMDtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoYXQtYm94X19zZW5kLS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBGaWxlIFByZXZpZXcgKi9cblxuLmZpbGVQcmV2aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjN2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvdHRvbTogMTUuM3ZoO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5pbWFnZVByZXZpZXcge1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogNy41cmVtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZpbGVQcmV2aWV3X19pY29uLWNsb3NlIHtcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLmZpbGVQcmV2aWV3X19pY29uLWNsb3NlOmhvdmVyLFxuLmZpbGVQcmV2aWV3X19pY29uLWNsb3NlOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50LnNob3cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cblxuICAudGFicy1jYXJkX19pdGVtID4gZGl2ID4gaW1nIHtcbiAgICB3aWR0aDogMTV2dztcbiAgICBoZWlnaHQ6IDE1dnc7XG4gIH1cblxuICAuY2hhdC1ib3hfX2JvZHkge1xuICAgIGhlaWdodDogNzIuNXZoO1xuICAgIG1heC1oZWlnaHQ6IDcyLjV2aDtcbiAgfVxuXG4gIC5pY29uLWNsb3NlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmljb24tY2xvc2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICAgIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgfVxuXG4vKiBGaWxlIFByZXZpZXcgKi9cblxuLmZpbGVQcmV2aWV3IHtcbiAgYm90dG9tOiAxNy41dmg7XG4gIHdpZHRoOiAxMDElO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuthenticated();
        if (!isAuth) {
            this.router.navigate(['/auth/login']);
        }
        return isAuth;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AutheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "P/YR":
/*!************************************!*\
  !*** ./src/app/err-interceptor.ts ***!
  \************************************/
/*! exports provided: ErrInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrInterceptor", function() { return ErrInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





class ErrInterceptor {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            var _a;
            let errorMessage = "";
            console.log(err);
            if (err.error.error) {
                errorMessage = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error;
            }
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }));
    }
}
ErrInterceptor.ɵfac = function ErrInterceptor_Factory(t) { return new (t || ErrInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ErrInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrInterceptor, factory: ErrInterceptor.ɵfac });


/***/ }),

/***/ "QQtj":
/*!*************************************************************************************!*\
  !*** ./src/app/contact/contact-content/list-friends/contact-list-friend.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ContactListFriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListFriendService", function() { return ContactListFriendService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/friends/";
class ContactListFriendService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ;
    getAll() {
        return this.http
            .get(BACKEND_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000));
    }
    getOneById(userId) {
        return this.http
            .get(BACKEND_URL + userId);
    }
    saveOne(friend) {
        return this.http
            .post(BACKEND_URL, friend);
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
ContactListFriendService.ɵfac = function ContactListFriendService_Factory(t) { return new (t || ContactListFriendService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ContactListFriendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ContactListFriendService, factory: ContactListFriendService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RmqX":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ "pAzW");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component */ "tq2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__["SearchRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]], imports: [_search_routing_module__WEBPACK_IMPORTED_MODULE_0__["SearchRoutingModule"]], exports: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]] }); })();


/***/ }),

/***/ "SHIX":
/*!*******************************************************!*\
  !*** ./src/app/chat/chat-menu/chat-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: ChatMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMenuComponent", function() { return ChatMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var src_app_contact_contact_content_list_friends_contact_list_friend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/contact/contact-content/list-friends/contact-list-friend.service */ "QQtj");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket/socket.service */ "FRSv");
/* harmony import */ var src_app_contact_contact_content_list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/contact/contact-content/list-rooms/contact-list-rooms.service */ "ywU7");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../search/search.component */ "tq2C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");









function ChatMenuComponent_div_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
} }
const _c0 = function (a1) { return ["/chat", a1]; };
function ChatMenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMenuComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const room_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClickShowContent(room_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatMenuComponent_div_4_span_7_Template, 1, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, room_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", room_r1 == null ? null : room_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](room_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r1.newMessage && ctx_r0.lastMessageOfRooms[room_r1._id].sender !== ctx_r0.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.lastMessageOfRooms[room_r1._id] == null ? null : ctx_r0.lastMessageOfRooms[room_r1._id].data == null ? null : ctx_r0.lastMessageOfRooms[room_r1._id].data.content, " ");
} }
class ChatMenuComponent {
    constructor(sharingService, listFriendService, socketService, roomsService) {
        this.sharingService = sharingService;
        this.listFriendService = listFriendService;
        this.socketService = socketService;
        this.roomsService = roomsService;
        this.currentUserId = localStorage.getItem('userId');
        this.rooms = [];
        this.lastMessageOfRooms = [];
        this.show = false;
        this.haveNewMessage = [];
        this.isMessageInRoomRead = [];
    }
    ngOnInit() {
        this.socketService.onMessage().subscribe((newMessage) => {
            var _a;
            this.updateRoomStatus(newMessage, true);
            if (!((_a = newMessage === null || newMessage === void 0 ? void 0 : newMessage.data) === null || _a === void 0 ? void 0 : _a.content)) {
                newMessage.data.content = "Image";
            }
        });
    }
    updateRoomStatus(newMessage, status) {
        this.sharingService.changeLastMessageOfRoom({ roomId: newMessage.room, value: newMessage.data.content });
        this.rooms.forEach((room) => {
            if (room._id === newMessage.roomId) {
                room.newMessage = status;
            }
        });
    }
    onClickShowContent(id) {
        this.sharingService.showContentMobile.subscribe((isShow) => (this.show = isShow));
        this.sharingService.changeShowValue(!this.show);
        //Seen all message in current room
        this.seenAllMessage(id);
    }
    seenAllMessage(id) {
        this.rooms.forEach((room) => {
            if (room._id === id) {
                room.newMessage = false;
            }
        });
        this.sharingService.changeMessageInRoomRead({
            roomId: id,
            value: false
        });
    }
}
ChatMenuComponent.ɵfac = function ChatMenuComponent_Factory(t) { return new (t || ChatMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_1__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_contact_contact_content_list_friends_contact_list_friend_service__WEBPACK_IMPORTED_MODULE_2__["ContactListFriendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_contact_contact_content_list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_4__["ContactListRoomService"])); };
ChatMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMenuComponent, selectors: [["app-chat-menu"]], inputs: { imgPath: "imgPath", currentRoom: "currentRoom", rooms: "rooms", lastMessageOfRooms: "lastMessageOfRooms" }, decls: 5, vars: 1, consts: [[1, "row", "tabs-list"], [1, "col"], ["class", "row tabs-card__item align-items-center", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "row", "tabs-card__item", "align-items-center", 3, "routerLink", "click"], [1, "col-md-3", "col-4"], ["alt", "", 1, "img-fluid", "card__img", 3, "src"], [1, "col-md-9", "col-8"], [1, "row"], [1, "card__title"], ["style", "float: right", "matBadge", ".", 4, "ngIf"], [1, "card__desc"], ["matBadge", ".", 2, "float", "right"]], template: function ChatMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatMenuComponent_div_4_Template, 11, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rooms);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadge"]], styles: [".mat-badge-content[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n\n\n.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n.tabs-list[_ngcontent-%COMP%] {\n  height: 72.5vh;\n  max-height: 72.5vh;\n  overflow: scroll;\n  margin: 0.5rem -0.5rem;\n  background-color: var(--color-2);\n}\n\n.tabs-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.tabs-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n\n\n\n.tabs-card__item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem 0rem;\n  padding: 0.5rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n  box-shadow: 2px 2px 5px -1px var(--color-1);\n}\n\n.tabs-card__item[_ngcontent-%COMP%]:hover, .tabs-card__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n.tabs-card__item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 4vw;\n  height: 4vw;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.tabs-card__item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  font-size: 1rem;\n  color: var(--color-3);\n  width: 90%;\n  max-width: 85%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tabs-card__item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n  width: 90%;\n  max-width: 85%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 0.8rem;\n  color: var(--color-3);\n}\n\n@media only screen and (max-width: 500px) {\n  .tabs-card__item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 15vw;\n    height: 15vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMkNBQTJDO0FBQzdDOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6ImNoYXQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4vKiBUYWJzIGxpc3QgKi9cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi50YWJzLWxpc3Qge1xuICBoZWlnaHQ6IDcyLjV2aDtcbiAgbWF4LWhlaWdodDogNzIuNXZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW46IDAuNXJlbSAtMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbn1cblxuLnRhYnMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuXG4udGFicy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIFRhYnMgSXRlbSAqL1xuXG4udGFicy1jYXJkX19pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC41cmVtIDByZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggLTFweCB2YXIoLS1jb2xvci0xKTtcbn1cblxuLnRhYnMtY2FyZF9faXRlbTpob3Zlcixcbi50YWJzLWNhcmRfX2l0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLnRhYnMtY2FyZF9faXRlbSA+IGRpdiA+IGltZyB7XG4gIHdpZHRoOiA0dnc7XG4gIGhlaWdodDogNHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udGFicy1jYXJkX19pdGVtID4gZGl2ID4gZGl2ID4gc3BhbiB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFicy1jYXJkX19pdGVtID4gZGl2ID4gZGl2ID4gaSB7XG4gIG1hcmdpbjogMC4yNXJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC50YWJzLWNhcmRfX2l0ZW0gPiBkaXYgPiBpbWcge1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIGhlaWdodDogMTV2dztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharing.service */ "hTjv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _personal_information_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-information/profile.service */ "ctZf");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socket/socket.service */ "FRSv");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AppComponent {
    constructor(profileService, authService, sharingService, socketService) {
        this.profileService = profileService;
        this.authService = authService;
        this.sharingService = sharingService;
        this.socketService = socketService;
        this.isUserAuthenticated = false;
        this.isNewMessageReceive = false;
        this.currentUserId = localStorage.getItem('userId');
        this.menuItems = [
            {
                key: 'message',
                content: 'Tin nhắn',
                url: 'chat',
                showBadge: false,
                numOfPeopleWaitToReply: 0
            },
            {
                key: 'contact',
                content: 'Danh bạ',
                url: 'contact',
                showBadge: false,
            },
            {
                key: 'personal',
                content: 'Chỉnh sửa',
                url: 'personal-information',
                showBadge: false,
            },
        ];
    }
    ngOnInit() {
        // this.sharingService.currentMenuItems.subscribe(newItems => this.itemsInAppComponent = newItems);
        // this.sharingService.currentMenuClass.subscribe(newItems => this.menuClass = newItems);
        // this.itemsInAppComponent = JSON.parse(localStorage.getItem('menuItems'));
        this.authService.autoAuthUser();
        this.isUserAuthenticated = this.authService.getIsAuthenticated();
        this.authListenerSub = this.authService
            .getAuthStatusListener()
            .subscribe((isAuth) => {
            this.isUserAuthenticated = isAuth;
            if (isAuth) {
                this.currentUserId = this.authService.getUserId();
            }
            this.socketService.setUpConnnection();
            this.onMessageReceive();
        });
        this.socketService.setUpConnnection();
        this.onMessageReceive();
        this.onNewVideoCallReceive();
        this.subscribeRoomStatusOfRoom();
    }
    onMessageReceive() {
        this.socketService.onMessage().subscribe((newMessage) => {
            if (newMessage.sender !== this.currentUserId) {
                this.sharingService.changeMessageInRoomRead({ roomId: newMessage.room, value: true });
                this.sharingService.changeLastMessageOfRoom({ roomId: newMessage.room, value: newMessage.data.content });
            }
        });
    }
    onNewVideoCallReceive() {
        this.socketService
            .onNewVideoCall()
            .subscribe((response) => {
            console.log("VIdeo call init");
        });
    }
    subscribeRoomStatusOfRoom() {
        this.sharingService
            .currentMessageInRommReadedSourceStatus
            .subscribe((newMessage) => {
            if ((newMessage === null || newMessage === void 0 ? void 0 : newMessage.length) > 0) {
                let isAllMessagesRead = true;
                newMessage.forEach(message => {
                    if ((message === null || message === void 0 ? void 0 : message.value) === true) {
                        isAllMessagesRead = false;
                    }
                });
                if (isAllMessagesRead) {
                    this.menuItems[0].showBadge = false;
                }
                else {
                    this.menuItems[0].showBadge = true;
                    let numOfPeopleWaitToReply = 0;
                    newMessage.forEach(message => {
                        if ((message === null || message === void 0 ? void 0 : message.value) === true) {
                            numOfPeopleWaitToReply++;
                        }
                    });
                    this.menuItems[0].numOfPeopleWaitToReply = numOfPeopleWaitToReply;
                }
            }
            else {
                this.menuItems[0].showBadge = false;
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_personal_information_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AutheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sharing_service__WEBPACK_IMPORTED_MODULE_0__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_sharing_service__WEBPACK_IMPORTED_MODULE_0__["SharingService"]])], decls: 3, vars: 2, consts: [[1, "container-fluid"], [1, "row", 3, "isUserAuthenticated", "menuItems"], [1, "row"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isUserAuthenticated", ctx.isUserAuthenticated)("menuItems", ctx.menuItems);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".menu[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ "T8x4":
/*!***************************************************************************!*\
  !*** ./src/app/chat/chat-roomchat/chat-roomchat-send/sendFile.service.ts ***!
  \***************************************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/images/";
class FileService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ;
    sendImage(image) {
        const formData = new FormData();
        formData.append("file", image);
        return this.http
            .post(BACKEND_URL, formData);
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MenuComponent_div_2_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3[0], " ");
} }
function MenuComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_div_2_div_1_span_4_Template, 3, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isUserAuthenticated);
} }
function MenuComponent_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_2_div_1_Template, 9, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_div_2_span_2_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isUserAuthenticated);
} }
class MenuComponent {
    constructor(authService) {
        this.authService = authService;
        this.isUserAuthenticated = false;
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuClassChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getItems() {
        return this.items;
    }
    ngOnInit() {
        this.isUserAuthenticated = this.authService.getIsAuthenticated();
        this.authListenerSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuth => {
            this.isUserAuthenticated = isAuth;
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AutheService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { items: "items", menuClass: "menuClass" }, outputs: { itemsChange: "itemsChange", menuClassChange: "menuClassChange" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "tabs-contact__item", "id", "add-friends", "mat-button", "", "routerLinkActive", "highlight", 4, "ngIf"], [1, "row"], [1, "col"], [1, "row", "justify-content-center"], ["class", "tabs-contact__item", "id", "add-friends", "mat-button", "", "routerLinkActive", "highlight", 3, "routerLink", 4, "ngIf"], [1, "notification"], [1, "far", "fa-comment-dots", "notification__icon"], [1, "notification__count"], ["id", "add-friends", "mat-button", "", "routerLinkActive", "highlight", 1, "tabs-contact__item", 3, "routerLink"], [1, "fas", "fa-user-plus"], ["id", "add-friends", "mat-button", "", "routerLinkActive", "highlight", 1, "tabs-contact__item"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu herererereS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_div_2_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.menuClass + "_component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserAuthenticated);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".tabs-contact__item[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 2.5rem;\n  margin: 0.5rem 0;\n  border: 1px solid var(--color-1);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n  box-shadow: 2px 2px 5px -1px var(--color-1);\n}\n\n\n\n\n.tabs-contact__item[_ngcontent-%COMP%]:hover, .tabs-contact__item.active[_ngcontent-%COMP%] {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n\n\n\n\n\n\n\n\n.notification[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  bottom: 2rem;\n  right: 2rem;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-1);\n  border-radius: 50%;\n  transition: all 750ms;\n  z-index: 1;\n  cursor: pointer;\n}\n\n\n\n\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  transition: all 750ms;\n}\n\n\n\n\n.notification__icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n\n\n\n.notification__count[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 0.3rem 0.4rem;\n  margin-top: 2.5rem;\n  margin-left: 2.75rem;\n  font-size: 0.75rem;\n  background-color: var(--color-1);\n  border: 1px solid var(--color-2);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOzs7OztBQUtaO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7Ozs7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7Ozs7QUFFQSxpQkFBaUI7Ozs7O0FBQ2pCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7QUFDakI7Ozs7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7Ozs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7Ozs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29udGFjdCAqL1xuXG5cblxuXG4udGFicy1jb250YWN0X19pdGVtIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMC43NXJlbSAyLjVyZW07XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IC0xcHggdmFyKC0tY29sb3ItMSk7XG59XG5cbi50YWJzLWNvbnRhY3RfX2l0ZW06aG92ZXIsXG4udGFicy1jb250YWN0X19pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi8qIE5vdGlmaWNhdGlvbiAqL1xuLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm90dG9tOiAycmVtO1xuICByaWdodDogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4ubm90aWZpY2F0aW9uX19pY29uIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4ubm90aWZpY2F0aW9uX19jb3VudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogMC4zcmVtIDAuNHJlbTtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBtYXJnaW4tbGVmdDogMi43NXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth-interceptor */ "kuTz");
/* harmony import */ var _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personal-information/personal-information.component */ "Hcoj");
/* harmony import */ var _err_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./err-interceptor */ "P/YR");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular-material.module */ "rhD1");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.module */ "19mU");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.module */ "RmqX");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _personal_information_profile_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./personal-information/profile.service */ "ctZf");
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sharing.service */ "hTjv");
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./socket/socket.service */ "FRSv");
/* harmony import */ var _relogin_relogin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./relogin/relogin.component */ "ozsY");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _err_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrInterceptor"], multi: true },
        _personal_information_profile_service__WEBPACK_IMPORTED_MODULE_15__["ProfileService"],
        _sharing_service__WEBPACK_IMPORTED_MODULE_16__["SharingService"],
        _socket_socket_service__WEBPACK_IMPORTED_MODULE_17__["SocketService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_12__["MenuModule"],
            _search_search_module__WEBPACK_IMPORTED_MODULE_13__["SearchModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_8__["PersonalInformationComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        _relogin_relogin_component__WEBPACK_IMPORTED_MODULE_18__["ReloginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_12__["MenuModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_13__["SearchModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"]] }); })();


/***/ }),

/***/ "bZE4":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/chat/";
class ChatService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ;
    addRoom() {
    }
    sendMessage() {
    }
    searchRoom() {
    }
    fetchRoomByUsername(username) {
        return null;
    }
    deleteRoom() {
    }
    updateRoom() {
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "brEo":
/*!***************************************!*\
  !*** ./src/app/socket/VCall.model.ts ***!
  \***************************************/
/*! exports provided: VCallAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCallAPI", function() { return VCallAPI; });
const errorBoxShow = (content) => {
    alert(content);
};
const profile = { name: "Lê Thành Nhân" };
class VCallAPI {
    constructor(signal, index) {
        this.indexFile = "/video-call.html";
        this.errorBox = { show: errorBoxShow, };
        this.frProfile = profile;
        this.calling = false;
        this.signal = signal;
        this.indexFile = index;
    }
    ;
    /**
     * @param {Object} config
     */
    setErrorBox(config) {
        this.errorBox = config;
    }
    /**
     * @param {Object} config
     */
    setGetProfile(config) {
        this.frProfile = config;
    }
    /**
     *
     */
    createView() {
        if (this.calling) {
            this.errorBox.show("Only one call");
            return;
        }
        this.calling = false;
        const nWindow = window.open(this.indexFile, "_blank", "top=0, left=0, height=720, width=480");
        nWindow.vCall = {};
        console.log("vcall");
        console.log(nWindow.vCall);
        nWindow.vCall.signal = this.signal;
        console.log('signal');
        console.log(this.signal);
        nWindow.vCall.frProfile = this.frProfile;
        nWindow.onunload = (event) => {
            console.log(event);
            this.calling = false;
        };
        return nWindow;
    }
    /**
     * @param {string} to  - Indentify of receiver
     */
    createCallView(to) {
        const nWindow = this.createView();
        nWindow.vCall.to = to;
    }
    /**
     * @param {string} from - Indentify of sender
     */
    createReceiveView(from) {
        console.log(`from: ${from}`);
        const nWindow = this.createView();
        nWindow.vCall.from = from;
    }
}


/***/ }),

/***/ "ctZf":
/*!*********************************************************!*\
  !*** ./src/app/personal-information/profile.service.ts ***!
  \*********************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/profiles/";
class ProfileService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentUserObservable = this.userSource.asObservable();
        this.userStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    changeUserSource(newProfile) {
        this.userSource.next(newProfile);
    }
    changeUserStatusListerner(newProfile) {
        this.userStatusListener.next(newProfile);
    }
    getUserStatusListener() {
        return this.userStatusListener.asObservable();
    }
    getCurrentUserLogin() {
        return this.currentUserLogin;
    }
    ;
    getProfile() {
        return this.http
            .get(BACKEND_URL);
    }
    findProfileOf(id) {
        return this.http.get(BACKEND_URL + id);
    }
    getOneById(id) {
        let reponseUser;
        return this.http
            .get(BACKEND_URL + id);
    }
    changeUserProfileInLocalStorage(profile) {
        this.currentUserLogin = profile;
        this.userStatusListener.next(this.currentUserLogin);
    }
    updateInfo(id, name, image) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("avatar", image);
        let reponseUser;
        return this.http
            .put(BACKEND_URL, formData);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharing.service */ "hTjv");
/* harmony import */ var _personal_information_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../personal-information/profile.service */ "ctZf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");







function HeaderComponent_div_0_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.avatar) || (ctx_r2.userDataInLocalStorage == null ? null : ctx_r2.userDataInLocalStorage.avatar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r3.currentUser == null ? null : ctx_r3.currentUser.name) || (ctx_r3.userDataInLocalStorage == null ? null : ctx_r3.userDataInLocalStorage.name), " ");
} }
function HeaderComponent_div_0_div_7_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 18);
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", (item_r8 == null ? null : item_r8.numOfPeopleWaitToReply) || "...");
} }
function HeaderComponent_div_0_div_7_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + item_r8.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r8.content, " ");
} }
function HeaderComponent_div_0_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_0_div_7_div_2_span_1_Template, 1, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_0_div_7_div_2_span_2_Template, 2, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.showBadge && item_r8.key === "message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isUserAuthenticated);
} }
function HeaderComponent_div_0_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_0_div_7_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0110\u0103ng xu\u1EA5t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_0_div_7_div_2_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_0_div_7_span_4_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.menuItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isUserAuthenticated);
} }
function HeaderComponent_div_0_div_8_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + item_r17.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r17.content, " ");
} }
function HeaderComponent_div_0_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_0_div_8_div_2_span_1_Template, 2, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.isUserAuthenticated);
} }
function HeaderComponent_div_0_div_8_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_0_div_8_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0110\u0103ng xu\u1EA5t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_0_div_8_div_2_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_0_div_8_span_4_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.menuItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isUserAuthenticated);
} }
function HeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_0_img_3_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_0_span_4_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.showMenuMobile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_0_div_7_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_div_0_div_8_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isUserAuthenticated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isUserAuthenticated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.menuMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.menuMobile);
} }
function HeaderComponent_div_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0110\u0103ng nh\u1EADp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0110\u0103ng k\u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { center_sceen: a0 }; };
function HeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_li_1_Template, 3, 0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_1_li_2_Template, 3, 0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r1.isUserAuthenticated));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isUserAuthenticated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isUserAuthenticated);
} }
class HeaderComponent {
    constructor(authService, router, sharingService, profileService) {
        this.authService = authService;
        this.router = router;
        this.sharingService = sharingService;
        this.profileService = profileService;
        this.isUserAuthenticated = false;
        this.menuMobile = false;
        this.tmpImgPath = 'https://images.pexels.com/photos/4397900/pexels-photo-4397900.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
    }
    ngOnChanges() {
        console.log('Data in header changed');
    }
    ngOnInit() {
        this.isUserAuthenticated = this.authService.getIsAuthenticated();
        if (localStorage.getItem('userData')) {
            this.userDataInLocalStorage = JSON.parse(localStorage.getItem('userData'));
        }
        this.authListenerSub = this.authService
            .getAuthStatusListener()
            .subscribe((isAuth) => {
            this.isUserAuthenticated = isAuth;
        });
        this.sharingService.currentUserData.subscribe((currentUser) => {
            if (currentUser) {
                this.currentUser = currentUser;
            }
            else {
                this.userListenerSub = this.profileService
                    .getUserStatusListener()
                    .subscribe((userData) => {
                    this.currentUser = userData;
                    localStorage.setItem('userData', JSON.stringify(userData));
                });
            }
        });
    }
    onClick() {
        this.router.navigate(['/']);
    }
    onTestAuthBackend() {
        this.profileService.getOneById(this.authService.getUserId());
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.authListenerSub.unsubscribe();
    }
    showMenuMobile() {
        this.menuMobile = true;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AutheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sharing_service__WEBPACK_IMPORTED_MODULE_3__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_personal_information_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { isUserAuthenticated: "isUserAuthenticated", socketChangeIn: "socketChangeIn", menuItems: "menuItems" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "row align-items-center header", 4, "ngIf"], ["class", "row justify-content-center align-items-center header", 3, "ngClass", 4, "ngIf"], [1, "row", "align-items-center", "header"], [1, "navbar", "navbar-expand-lg"], [1, "navbar-brand"], ["alt", "", "class", "img-fluid user__avatar", "routerLink", "/personal-information", 3, "src", 4, "ngIf"], ["class", "user__name", "routerLink", "/personal-information", 4, "ngIf"], ["data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "fas", "fa-bars"], ["class", "collapse navbar-collapse", "id", "navbarSupportedContent", 4, "ngIf"], ["alt", "", "routerLink", "/personal-information", 1, "img-fluid", "user__avatar", 3, "src"], ["routerLink", "/personal-information", 1, "user__name"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "row", "justify-content-center"], [4, "ngFor", "ngForOf"], ["class", "user__case--item", 3, "click", 4, "ngIf"], [3, "matBadge", 4, "ngIf"], ["class", "user__case--item", "routerLinkActive", "highlight", 3, "routerLink", 4, "ngIf"], [3, "matBadge"], ["routerLinkActive", "highlight", 1, "user__case--item", 3, "routerLink"], [1, "user__case--item", 3, "click"], ["class", "user__case--item", "routerLinkActive", "highlight", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "highlight", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "user__case--item", 3, "routerLink"], [1, "row", "justify-content-center", "align-items-center", "header", 3, "ngClass"], [4, "ngIf"], ["mat-button", "", "routerLink", "/auth/login", "routerLinkActive", "mat-accent", 1, "user__case--item", "log-res"], ["mat-button", "", "routerLink", "/auth/signup", "routerLinkActive", "mat-accent", 1, "user__case--item", "log-res"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 9, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 3, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserAuthenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".mat-badge-content[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: var(--color-1) !important;\n}\n\n.bg_color[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding: 0rem 1rem;\n  width: 100%;\n  height: 12.5vh;\n  background-color: var(--color-1);\n}\n\n.user__avatar[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 2px solid var(--color-2);\n  cursor: pointer;\n}\n\n.user__name[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  font-size: 1.1rem;\n  font-weight: 700;\n  max-width: 60%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\n.user__case--item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.75rem 2rem;\n  margin: 0.25rem;\n  border: 1px solid var(--color-2);\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n  box-shadow: 2px 2px 10px -1px var(--color-4);\n}\n\n.user__case--item[_ngcontent-%COMP%]:hover, .user__case--item.active[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--color-3);\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n.user__icon-close[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-2);\n  transition: all 750ms;\n}\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  width: 100vw;\n  padding: 0 !important;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  width: 22.5vw;\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  width: 72.5vw;\n  padding-right: 1rem;\n}\n\n\n\n@media only screen and (max-width: 480px) {\n  .header[_ngcontent-%COMP%] {\n    height: 10vh;\n    padding: 0 1rem;\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    position: fixed;\n    margin: 0;\n    padding: 2.5rem 0;\n    width: 100%;\n    top: 10.25vh;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--color-1);\n    z-index: 5;\n  }\n\n  .navbar-toggler[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    background-color: var(--color-2);\n    border-radius: 10px !important;\n  }\n  .user__case--item.log-res[_ngcontent-%COMP%] {\n    width: 9.5rem;\n    margin: 0rem 0.25rem;\n  }\n\n  .user__case--item[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n    text-align: center;\n    width: 16rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsNENBQTRDO0FBQzlDOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpICFpbXBvcnRhbnQ7XG59XG5cbi5iZ19jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmhlYWRlciB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcmVtIDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyLjV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG59XG5cbi51c2VyX19hdmF0YXIge1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlcl9fbmFtZSB7XG4gIG1hcmdpbjogMCAxcmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyX19jYXNlLS1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtIDJyZW07XG4gIG1hcmdpbjogMC4yNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggLTFweCB2YXIoLS1jb2xvci00KTtcbn1cblxuLnVzZXJfX2Nhc2UtLWl0ZW06aG92ZXIsXG4udXNlcl9fY2FzZS0taXRlbS5hY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbn1cblxuLnVzZXJfX2ljb24tY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4vKiBTZXQgQm9vc3RyYXAgKi9cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwdnc7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5uYXZiYXItYnJhbmQge1xuICB3aWR0aDogMjIuNXZ3O1xufVxuXG4ubmF2YmFyLWNvbGxhcHNlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDcyLjV2dztcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cblxuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDIuNXJlbSAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMTAuMjV2aDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG5cbiAgLm5hdmJhci10b2dnbGVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVzZXJfX2Nhc2UtLWl0ZW0ubG9nLXJlcyB7XG4gICAgd2lkdGg6IDkuNXJlbTtcbiAgICBtYXJnaW46IDByZW0gMC4yNXJlbTtcbiAgfVxuXG4gIC51c2VyX19jYXNlLS1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTZyZW07XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "hTjv":
/*!************************************!*\
  !*** ./src/app/sharing.service.ts ***!
  \************************************/
/*! exports provided: SharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingService", function() { return SharingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharingService {
    constructor() {
        this.menuItemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](['Default message']['Default URL']);
        this.currentMenuItems = this.menuItemsSource.asObservable();
        this.menuClassSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('base_class');
        this.currentMenuClass = this.menuClassSource.asObservable();
        this.showSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this.showContentMobile = this.showSource.asObservable();
        this.userDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentUserData = this.userDataSource.asObservable();
        this.reloginSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.currentReloginStatus = this.reloginSource.asObservable();
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentMessageStatus = this.messageSource.asObservable();
        // save history of room
        this.messageInRommReadSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentMessageInRommReadedSourceStatus = this.messageInRommReadSource.asObservable();
        this.messageReadHistory = [];
        // save lastMessage of each room
        // nữa đỗi từ từ qua variable and variable$ dễ đọc hơn
        this.lastMessage = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.lastMessage$ = this.lastMessage.asObservable();
        this.lastMessageHistory = [];
        this.sendNewImageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentSendNewImageStatus = this.sendNewImageSource.asObservable();
    }
    changeSendNewImage(message) {
        this.sendNewImageSource.next(message);
    }
    changeMessageInRoomRead(data) {
        if (this.messageReadHistory.length > 0) {
            this.messageReadHistory.forEach((history) => {
                if ((history === null || history === void 0 ? void 0 : history.roomId) !== (data === null || data === void 0 ? void 0 : data.roomId)) {
                    this.messageReadHistory.push(data);
                }
                else {
                    if ((history === null || history === void 0 ? void 0 : history.value) !== (data === null || data === void 0 ? void 0 : data.value)) {
                        const index = this.messageReadHistory.indexOf(history);
                        this.messageReadHistory[index] = data;
                    }
                }
            });
        }
        else {
            this.messageReadHistory.push(data);
        }
        this.messageInRommReadSource.next(this.messageReadHistory);
    }
    changeLastMessageOfRoom(data) {
        if (this.lastMessageHistory.length > 0) {
            this.lastMessageHistory.forEach((history) => {
                if ((history === null || history === void 0 ? void 0 : history.roomId) !== (data === null || data === void 0 ? void 0 : data.roomId)) {
                    this.lastMessageHistory.push(data);
                }
                else {
                    if ((history === null || history === void 0 ? void 0 : history.value) !== (data === null || data === void 0 ? void 0 : data.value)) {
                        const index = this.lastMessageHistory.indexOf(history);
                        this.lastMessageHistory[index] = data;
                    }
                }
            });
        }
        else {
            this.lastMessageHistory.push(data);
        }
        this.lastMessage.next(this.lastMessageHistory);
    }
    changeMessage(messages) {
        this.messageSource.next(messages);
    }
    changeReloginStatus(isRelogin) {
        this.reloginSource.next(isRelogin);
    }
    changeUserData(userData) {
        this.userDataSource.next(userData);
    }
    changeMenuItems(message) {
        this.menuItemsSource.next(message);
    }
    changeMenuClass(message) {
        this.menuClassSource.next(message);
    }
    changeShowValue(showContentMobile) {
        this.showSource.next(showContentMobile);
    }
}
SharingService.ɵfac = function SharingService_Factory(t) { return new (t || SharingService)(); };
SharingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharingService, factory: SharingService.ɵfac });


/***/ }),

/***/ "kuTz":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "qXBG");


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        let token = authToken;
        if (!authToken) {
            token = "empty";
        }
        const authRequest = req.clone({
            headers: req.headers.set("token", token)
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AutheService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "nCYL":
/*!****************************************************!*\
  !*** ./src/app/auth/signup/mime-type.validator.ts ***!
  \****************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

const mimeType = (control) => {
    if (typeof (control.value) === "string") {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const fileReaderObservable = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((observer) => {
        fileReader.addEventListener('loadend', () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = '';
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ inValidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return fileReaderObservable;
};


/***/ }),

/***/ "nedP":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component */ "TGkX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"] }
];
class MenuRoutingModule {
}
MenuRoutingModule.ɵfac = function MenuRoutingModule_Factory(t) { return new (t || MenuRoutingModule)(); };
MenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MenuRoutingModule });
MenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ozsY":
/*!**********************************************!*\
  !*** ./src/app/relogin/relogin.component.ts ***!
  \**********************************************/
/*! exports provided: ReloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloginComponent", function() { return ReloginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _personal_information_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../personal-information/profile.service */ "ctZf");
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharing.service */ "hTjv");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");










const _c0 = ["closeButton"];
class ReloginComponent {
    constructor(route, authSevice, profileService, sharingService, dialogRef, data) {
        this.route = route;
        this.authSevice = authSevice;
        this.profileService = profileService;
        this.sharingService = sharingService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            })
        });
    }
    // Những cái liên quan đến subscribe thì xảy ra bất đồng bộ
    // nên muốn làm j thì nên làm trong subscribe luôn chứ đừng ra ngoài nó
    onLogin() {
        if (this.form.invalid) {
            return;
        }
        const phone = localStorage.getItem('phone');
        this.authSevice
            .confirmLogin(phone, this.form.value.password)
            .subscribe((response) => {
            this.isLoginSuccess = true;
            this.dialogRef.close();
        }, (error) => {
            this.isLoginSuccess = false;
        });
    }
    onCancel() {
        this.route.navigate(['/']);
        this.dialogRef.close();
    }
    ngOnDestroy() {
    }
}
ReloginComponent.ɵfac = function ReloginComponent_Factory(t) { return new (t || ReloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AutheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_personal_information_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_sharing_service__WEBPACK_IMPORTED_MODULE_6__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ReloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReloginComponent, selectors: [["app-relogin"]], viewQuery: function ReloginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.closeButton = _t.first);
    } }, decls: 15, vars: 1, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [2, "font-size", "1.1rem"], [1, "form-log-res"], [3, "formGroup", "submit"], ["matInput", "", "type", "password", "name", "password", "formControlName", "password", "placeholder", "M\u1EADt kh\u1EA9u", 1, "form-input"], ["mat-dialog-actions", "", 1, "row", "justify-content-end"], ["type", "button", 1, "form-submit", 3, "click"], ["closeButton", ""], ["type", "submit", 1, "form-submit", 3, "keyup.enter", "click"]], template: function ReloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ReloginComponent_Template_form_submit_6_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReloginComponent_Template_button_click_10_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " H\u1EE7y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ReloginComponent_Template_button_keyup_enter_13_listener() { return ctx.onLogin(); })("click", function ReloginComponent_Template_button_click_13_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " X\u00E1c nh\u1EADn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.form-log-res[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  box-sizing: border-box !important;\n  display: inline-block;\n  margin: 1rem;\n  width: 6rem;\n  padding: 0.5rem 0;\n  cursor: pointer;\n  transition: all 750ms;\n  border-bottom: 1px solid transparent;\n}\n\n.form-title[_ngcontent-%COMP%]:hover, .form-title.active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-3);\n  transition: all 750ms;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem 0;\n  padding: 0 0.5rem;\n  display: block;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: none;\n  border-bottom: 1px solid var(--color-3);\n  text-align: left;\n}\n\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-3);\n}\n\n.form-submit[_ngcontent-%COMP%] {\n  margin: 1rem 3rem;\n  margin-bottom: 0;\n  padding: 0.5rem 2rem;\n  background-color: var(--color-2);\n  border: 1px solid var(--color-3);\n  border-radius: 15px;\n  transition: all 750ms;\n}\n\n.form-submit[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  border-color: var(--color-1);\n  transition: all 750ms;\n}\n\n@media only screen and (max-width: 480px) {\n  .form-submit[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    padding: 0.5rem 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFOztBQUVGO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsdUNBQXVDO0VBQ3ZDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7RUFDdEI7QUFDRiIsImZpbGUiOiJyZWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBtYXQtZm9ybS1maWVsZFxuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4gKi9cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLWxvZy1yZXMge1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMXJlbTtcbiAgd2lkdGg6IDZyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS10aXRsZTpob3Zlcixcbi5mb3JtLXRpdGxlLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTMpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi5mb3JtLXN1Ym1pdCB7XG4gIG1hcmdpbjogMXJlbSAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTMpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbi5mb3JtLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLTEpO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmZvcm0tc3VibWl0IHtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "pAzW":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component */ "tq2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"] }
];
class SearchRoutingModule {
}
SearchRoutingModule.ɵfac = function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); };
SearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "pDIi":
/*!***************************************************************************************!*\
  !*** ./src/app/chat/chat-roomchat/chat-roomchat-body/chat-roomchat-body.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChatRoomchatBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomchatBodyComponent", function() { return ChatRoomchatBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_contact_contact_content_list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/contact/contact-content/list-rooms/contact-list-rooms.service */ "ywU7");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket/socket.service */ "FRSv");
/* harmony import */ var src_app_personal_information_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/personal-information/profile.service */ "ctZf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["scrollMe"];
function ChatRoomchatBodyComponent_div_3_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.chatroom == null ? null : ctx_r7.chatroom.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatRoomchatBodyComponent_div_3_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.profileOfFriends[message_r2.sender] == null ? null : ctx_r8.profileOfFriends[message_r2.sender].avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatRoomchatBodyComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatRoomchatBodyComponent_div_3_div_1_img_1_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatRoomchatBodyComponent_div_3_div_1_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.profileOfFriends.length === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.profileOfFriends.length !== 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, message_r2.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2.data == null ? null : message_r2.data.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.profileOfFriends[message_r2.sender] == null ? null : ctx_r3.profileOfFriends[message_r2.sender].name, " ");
} }
function ChatRoomchatBodyComponent_div_3_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.chatroom == null ? null : ctx_r11.chatroom.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatRoomchatBodyComponent_div_3_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.profileOfFriends[message_r2.sender] == null ? null : ctx_r12.profileOfFriends[message_r2.sender].avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatRoomchatBodyComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatRoomchatBodyComponent_div_3_div_2_img_1_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatRoomchatBodyComponent_div_3_div_2_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.profileOfFriends.length === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.profileOfFriends.length !== 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r2.data == null ? null : message_r2.data.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.profileOfFriends[message_r2.sender] == null ? null : ctx_r4.profileOfFriends[message_r2.sender].name, " ");
} }
function ChatRoomchatBodyComponent_div_3_div_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatRoomchatBodyComponent_div_3_div_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.profileOfFriends[message_r2.sender] == null ? null : ctx_r16.profileOfFriends[message_r2.sender].name, " ");
} }
function ChatRoomchatBodyComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatRoomchatBodyComponent_div_3_div_3_span_6_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatRoomchatBodyComponent_div_3_div_3_span_7_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, message_r2.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2.data == null ? null : message_r2.data.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.profileOfFriends[message_r2.sender] == null ? null : ctx_r5.profileOfFriends[message_r2.sender]._id) === ctx_r5.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.profileOfFriends[message_r2.sender] == null ? null : ctx_r5.profileOfFriends[message_r2.sender]._id) !== ctx_r5.currentUserId);
} }
function ChatRoomchatBodyComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r2.data == null ? null : message_r2.data.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatRoomchatBodyComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatRoomchatBodyComponent_div_3_div_1_Template, 10, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatRoomchatBodyComponent_div_3_div_2_Template, 8, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatRoomchatBodyComponent_div_3_div_3_Template, 8, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatRoomchatBodyComponent_div_3_div_4_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r2.sender !== ctx_r1.currentUserId && !(message_r2.data == null ? null : message_r2.data.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r2.sender !== ctx_r1.currentUserId && (message_r2.data == null ? null : message_r2.data.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r2.sender === ctx_r1.currentUserId && !(message_r2.data == null ? null : message_r2.data.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r2.sender === ctx_r1.currentUserId && (message_r2.data == null ? null : message_r2.data.url));
} }
class ChatRoomchatBodyComponent {
    constructor(roomService, sharingService, socketService, profileService) {
        this.roomService = roomService;
        this.sharingService = sharingService;
        this.socketService = socketService;
        this.profileService = profileService;
        this.messages = [];
        this.currentUserId = localStorage.getItem('userId');
        this.profileOfFriends = [];
    }
    ngOnInit() {
        this.socketService.onMessage().subscribe((message) => {
            if (message.room === this.chatroom._id) {
                console.log('new message: ');
                console.log(message);
                this.messages.push(message);
            }
        });
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            var heightRoomChat = this.myScroller.nativeElement.scrollHeight;
            if (this.chatroom.top != heightRoomChat) {
                this.myScroller.nativeElement.scrollTop =
                    this.myScroller.nativeElement.scrollHeight;
                this.chatroom.top = this.myScroller.nativeElement.scrollHeight;
            }
        }
        catch (error) { }
    }
}
ChatRoomchatBodyComponent.ɵfac = function ChatRoomchatBodyComponent_Factory(t) { return new (t || ChatRoomchatBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_contact_contact_content_list_rooms_contact_list_rooms_service__WEBPACK_IMPORTED_MODULE_1__["ContactListRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_2__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_personal_information_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"])); };
ChatRoomchatBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatRoomchatBodyComponent, selectors: [["app-chat-roomchat-body"]], viewQuery: function ChatRoomchatBodyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScroller = _t.first);
    } }, inputs: { chatroom: "chatroom", messages: "messages", profileOfFriends: "profileOfFriends" }, decls: 4, vars: 1, consts: [[1, "row", "chat-box__body"], ["scrollMe", ""], [1, "col"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["class", "row justify-content-end", 4, "ngIf"], [1, "row"], ["class", "user__avatar", 3, "src", 4, "ngIf"], [1, "mess", "mess-left"], [3, "title"], [1, "mess-sender"], [1, "user__avatar", 3, "src"], ["alt", "h\u00ECnh \u1EA3nh", 1, "mess-image", 3, "src"], [1, "row", "justify-content-end"], [1, "mess", "mess-right"], [1, "mess-sender", 2, "text-align", "end"], [4, "ngIf"]], template: function ChatRoomchatBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatRoomchatBodyComponent_div_3_Template, 5, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".user__avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 2px solid var(--color-2);\n  cursor: pointer;\n}\n.chat-box__body[_ngcontent-%COMP%] {\n  height: 55vh;\n  max-height: 55vh;\n  padding: 0.5rem 1rem;\n  overflow-y: auto;\n  background-color: var(--color-2);\n  border-left: 1px solid var(--color-1);\n  border-right: 1px solid var(--color-1);\n}\n.chat-box__body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-box__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n.mess-sender[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 1rem;\n  font-size: 0.6rem;\n}\n.mess[_ngcontent-%COMP%] {\n  display: inline;\n  \n  padding: 1rem;\n  max-width: 32.5rem;\n  font-size: 0.9rem;\n  border-radius: 15px;\n}\n.mess-left[_ngcontent-%COMP%] {\n  margin: 0.5rem 2rem 0.5rem 0;\n  background-color: var(--color-1);\n  box-shadow: 2px 2px 5px 0px var(--color-4);\n}\n.mess-right[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0.5rem 2rem;\n  background-color: var(--color-4);\n  box-shadow: 2px 2px 5px 0px var(--color-1);\n}\n.mess-image[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  max-height: 15rem;\n  object-fit: contain;\n  border-radius: 15px;\n}\n@media only screen and (max-width: 480px) {\n  .chat-box__body[_ngcontent-%COMP%] {\n    height: 72.5vh;\n    max-height: 72.5vh;\n  }\n  .mess[_ngcontent-%COMP%] {\n    max-width: 80vw;\n  }\n\n  .mess-image[_ngcontent-%COMP%] {\n    max-width: 70vw;\n    max-height: 50vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcm9vbWNoYXQtYm9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxxQ0FBcUM7RUFDckMsc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2Y7Ozt1QkFHcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLDBDQUEwQztBQUM1QztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQywwQ0FBMEM7QUFDNUM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImNoYXQtcm9vbWNoYXQtYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2hhdCBCb3ggQm9keSAqL1xuLnVzZXJfX2F2YXRhciB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGF0LWJveF9fYm9keSB7XG4gIGhlaWdodDogNTV2aDtcbiAgbWF4LWhlaWdodDogNTV2aDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcbn1cblxuLmNoYXQtYm94X19ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5jaGF0LWJveF9fYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubWVzcy1zZW5kZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBmb250LXNpemU6IDAuNnJlbTtcbn1cblxuLm1lc3Mge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIC8qIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTA7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAqL1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXgtd2lkdGg6IDMyLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubWVzcy1sZWZ0IHtcbiAgbWFyZ2luOiAwLjVyZW0gMnJlbSAwLjVyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCB2YXIoLS1jb2xvci00KTtcbn1cblxuLm1lc3MtcmlnaHQge1xuICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHZhcigtLWNvbG9yLTEpO1xufVxuXG4ubWVzcy1pbWFnZSB7XG4gIG1heC13aWR0aDogMzByZW07XG4gIG1heC1oZWlnaHQ6IDE1cmVtO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jaGF0LWJveF9fYm9keSB7XG4gICAgaGVpZ2h0OiA3Mi41dmg7XG4gICAgbWF4LWhlaWdodDogNzIuNXZoO1xuICB9XG4gIC5tZXNzIHtcbiAgICBtYXgtd2lkdGg6IDgwdnc7XG4gIH1cblxuICAubWVzcy1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgIG1heC1oZWlnaHQ6IDUwdnc7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AutheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutheService", function() { return AutheService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _personal_information_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../personal-information/profile.service */ "ctZf");
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharing.service */ "hTjv");







const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/users/';
class AutheService {
    constructor(http, router, profileService, sharingService) {
        this.http = http;
        this.router = router;
        this.profileService = profileService;
        this.sharingService = sharingService;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.reloginStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isAuthenticated = false;
    }
    getUserId() {
        return this.userId;
    }
    getToken() {
        return this.token;
    }
    getReloginStatusListener() {
        return this.reloginStatusListener.asObservable();
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getIsAuthenticated() {
        return this.isAuthenticated;
    }
    createUser(name, phone, password, avatar) {
        const authData = {
            name: name,
            phone: phone,
            password: password,
            avatar: avatar,
        };
        this.http.post(BACKEND_URL + 'register', authData).subscribe(() => {
            this.router.navigate(['/auth/login']);
        }, (error) => {
            this.authStatusListener.next(false);
            this.router.navigate(['/auth/signup']);
        });
    }
    confirmLogin(phone, password) {
        const authData = { phone: phone, password: password };
        return this.http
            .post(BACKEND_URL + 'login', authData);
    }
    login(mobilePhone, password) {
        const authData = { phone: mobilePhone, password: password };
        this.http
            .post(BACKEND_URL + 'login', authData)
            .subscribe((response) => {
            this.token = response.data.token;
            if (this.token) {
                const expiresInDuration = response.data.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.data._id;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000 * 60);
                this.profileService
                    .getOneById(this.userId)
                    .subscribe((response) => {
                    const userData = response.data;
                    this.profileService.changeUserStatusListerner(response.data);
                    this.sharingService.changeUserData(response.data);
                    console.log("change user data work!!!");
                    this.sharingService.currentUserData
                        .subscribe((user) => {
                        console.log(user);
                    });
                    this.saveDataToLocalStorage(this.token, expirationDate, this.userId, userData);
                });
                this.router.navigate(['/chat']);
            }
        }, (err) => {
            this.router.navigate(['/auth/login']);
        });
        return false;
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.userId = null;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearLocalStorage();
        this.router.navigate(['/auth/login']);
    }
    saveDataToLocalStorage(token, expiration, userId, userData) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expiration.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    clearLocalStorage() {
        localStorage.clear();
    }
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000 * 60);
        console.log('Setting timer: ' + duration);
    }
    autoAuthUser() {
        const authInformation = this.getLocalStorageData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiredIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiredIn > 0) {
            this.token = authInformation.token;
            this.userId = authInformation.userId;
            this.isAuthenticated = true;
            this.setAuthTimer(expiredIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    getLocalStorageData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        let userInLocal = JSON === null || JSON === void 0 ? void 0 : JSON.parse(localStorage.getItem('userData'));
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            userData: this.userData
        };
    }
}
AutheService.ɵfac = function AutheService_Factory(t) { return new (t || AutheService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_personal_information_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_sharing_service__WEBPACK_IMPORTED_MODULE_6__["SharingService"])); };
AutheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AutheService, factory: AutheService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rGiC":
/*!***************************************************************!*\
  !*** ./src/app/chat/chat-roomchat/chat-roomchat.component.ts ***!
  \***************************************************************/
/*! exports provided: ChatRoomchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomchatComponent", function() { return ChatRoomchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sharing.service */ "hTjv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chat_roomchat_header_chat_roomchat_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-roomchat-header/chat-roomchat-header.component */ "G1Oq");
/* harmony import */ var _chat_roomchat_body_chat_roomchat_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-roomchat-body/chat-roomchat-body.component */ "pDIi");
/* harmony import */ var _chat_roomchat_send_chat_roomchat_send_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-roomchat-send/chat-roomchat-send.component */ "KxwN");






const _c0 = function (a0) { return { show: a0 }; };
class ChatRoomchatComponent {
    constructor(showContent) {
        this.showContent = showContent;
        this.valShowMessContent = false;
        this.messages = [];
        this.profileOfFriends = [];
        this.tmpImgPath = "https://images.pexels.com/photos/7457830/pexels-photo-7457830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
        this.rooms = [];
    }
    ngOnInit() {
        this.showContent.showContentMobile.subscribe((show) => (this.valShowMessContent = show));
    }
}
ChatRoomchatComponent.ɵfac = function ChatRoomchatComponent_Factory(t) { return new (t || ChatRoomchatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sharing_service__WEBPACK_IMPORTED_MODULE_1__["SharingService"])); };
ChatRoomchatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatRoomchatComponent, selectors: [["app-chat-roomchat"]], inputs: { messages: "messages", profileOfFriends: "profileOfFriends", tmpImgPath: "tmpImgPath", rooms: "rooms", chatroom: "chatroom" }, decls: 4, vars: 8, consts: [[1, "content", 3, "ngClass"], [3, "currentRoom"], [3, "chatroom", "messages", "profileOfFriends"], [3, "roomId"]], template: function ChatRoomchatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-roomchat-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat-roomchat-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-chat-roomchat-send", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.valShowMessContent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentRoom", ctx.chatroom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatroom", ctx.chatroom)("messages", ctx.messages)("profileOfFriends", ctx.profileOfFriends);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("roomId", ctx.chatroom._id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _chat_roomchat_header_chat_roomchat_header_component__WEBPACK_IMPORTED_MODULE_3__["ChatRoomchatHeaderComponent"], _chat_roomchat_body_chat_roomchat_body_component__WEBPACK_IMPORTED_MODULE_4__["ChatRoomchatBodyComponent"], _chat_roomchat_send_chat_roomchat_send_component__WEBPACK_IMPORTED_MODULE_5__["ChatRoomchatSendComponent"]], styles: [".chat-box__send[_ngcontent-%COMP%] {\n  height: 15vh;\n  background-color: var(--color-1);\n  border-top: 2px solid var(--color-2);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.chat-box__send--text[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  width: 100%;\n  border: none;\n  border-radius: 15px;\n}\n.chat-box__send--text[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-box__send--text[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-4);\n  border-radius: 5px;\n}\n.chat-box__send--btn[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0.25rem 1rem;\n  text-align: center;\n  color: var(--color-3);\n  background-color: var(--color-2);\n  border: 1px solid var(--color-2);\n  border-radius: 15px;\n  transition: all 750ms;\n  cursor: pointer;\n}\n.chat-box__send--btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-1);\n  transition: all 750ms;\n}\n\n@media only screen and (max-width: 480px) {\n  .content.show[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0 0.5rem;\n  }\n  .content[_ngcontent-%COMP%] {\n    display: none;\n    transition: all 750ms;\n  }\n  .tabs-card__item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 15vw;\n    height: 15vw;\n  }\n  .chat-box__body[_ngcontent-%COMP%] {\n    height: 72.5vh;\n    max-height: 72.5vh;\n  }\n  .icon-close[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin-left: 0.75rem;\n    padding: 0.5rem 0.8rem;\n    border-radius: 50%;\n    transition: all 750ms;\n    background-color: var(--color-2);\n    cursor: pointer;\n  }\n  .icon-close[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-2);\n    transition: all 750ms;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcm9vbWNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7QUFDQSxlQUFlO0FBQ2Y7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtFQUN2QjtBQUNGIiwiZmlsZSI6ImNoYXQtcm9vbWNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENoYXQgQm94IFNlbmQgKi9cbi5jaGF0LWJveF9fc2VuZCB7XG4gIGhlaWdodDogMTV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG4uY2hhdC1ib3hfX3NlbmQtLXRleHQge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5jaGF0LWJveF9fc2VuZC0tdGV4dDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuLmNoYXQtYm94X19zZW5kLS10ZXh0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2hhdC1ib3hfX3NlbmQtLWJ0biB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoYXQtYm94X19zZW5kLS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zO1xufVxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVudC5zaG93IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgfVxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cbiAgLnRhYnMtY2FyZF9faXRlbSA+IGRpdiA+IGltZyB7XG4gICAgd2lkdGg6IDE1dnc7XG4gICAgaGVpZ2h0OiAxNXZ3O1xuICB9XG4gIC5jaGF0LWJveF9fYm9keSB7XG4gICAgaGVpZ2h0OiA3Mi41dmg7XG4gICAgbWF4LWhlaWdodDogNzIuNXZoO1xuICB9XG4gIC5pY29uLWNsb3NlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5pY29uLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNzUwbXM7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]] }); })();


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 4, vars: 0, consts: [[1, "row", "tabs-search", "align-items-center", "justify-content-center"], ["type", "text", "name", "", "id", "", "placeholder", "Search", 1, "tabs-search__input"], [1, "tabs-search__icon"], [1, "fas", "fa-search"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".tabs-search[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.tabs-search__input[_ngcontent-%COMP%]::placeholder {\n  font-size: 0.9rem;\n  color: var(--color-3);\n}\n.tabs-search__input[_ngcontent-%COMP%] {\n  width: 18rem;\n  padding: 0.25rem 1rem;\n  color: var(--color-3);\n  background-color: var(--color-1);\n  border: 1px solid var(--color-1);\n  border-radius: 15px;\n}\n.tabs-search__icon[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n  margin-left: -2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGFicyBTZWFyY2ggKi9cbi50YWJzLXNlYXJjaCB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4udGFicy1zZWFyY2hfX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG59XG5cbi50YWJzLXNlYXJjaF9faW5wdXQge1xuICB3aWR0aDogMThyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi50YWJzLXNlYXJjaF9faWNvbiB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-information/personal-information.component */ "Hcoj");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule) },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"] },
    { path: 'chat', loadChildren: () => __webpack_require__.e(/*! import() | chat-chat-module */ "chat-chat-module").then(__webpack_require__.bind(null, /*! ./chat/chat.module */ "2yxt")).then(m => m.ChatModule), canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'chat/:roomId', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'contact', loadChildren: () => __webpack_require__.e(/*! import() | contact-contact-module */ "contact-contact-module").then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "BjQp")).then(m => m.ContactModule), canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'personal-information', component: _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_4__["PersonalInformationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ywU7":
/*!**********************************************************************************!*\
  !*** ./src/app/contact/contact-content/list-rooms/contact-list-rooms.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ContactListRoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListRoomService", function() { return ContactListRoomService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/rooms/';
class ContactListRoomService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    getAll() {
        return this.http.get(BACKEND_URL);
    }
    getAllMessageByIdRoom(id) {
        return this.http
            .get(BACKEND_URL + id + "/messages");
    }
    getOneById(roomId) {
        return this.http.get(BACKEND_URL + roomId);
    }
    getMembersById(roomId) {
        return this.http.get(BACKEND_URL + roomId + "/members");
    }
    saveOne(name, members) {
        return this.http
            .post(BACKEND_URL, { name: name,
            members: members });
    }
    update(id, room) {
        this.http.put(BACKEND_URL + id, room);
    }
    delete(id) {
        return this.http.delete(BACKEND_URL + id);
    }
}
ContactListRoomService.ɵfac = function ContactListRoomService_Factory(t) { return new (t || ContactListRoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactListRoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactListRoomService, factory: ContactListRoomService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map