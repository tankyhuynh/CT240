const db = require('./configs/database.config');
db.config();

const AccountService = require('./src/services/account.service');
const ProfileService = require('./src/services/profile.service');
const FriendService = require('./src/services/friend.service');

// async function testAccount(){
//     AccountService.create("0868674096", "password");
// }
// testAccount();

// async function testProfile(){
//     // console.log(await ProfileService.createWithAccountId("6084e382dde11f349429801e", "Le Thanh nhan"));
//     await ProfileService.createWithAccountId("6084ff796ba39b2a3c4681da", "Trung le");
//     await ProfileService.createWithAccountId("6084ff905722590858dbcb9e", "Thanh Nhan A");
//     // console.log(await ProfileService.getWithId("6084e3891ec2671380ab48c8"));
//     // console.log(await ProfileService.update("6084e3891ec2671380ab48c8", {name: "Viet Nam"}))
// }
// testProfile();



// async function testFriend(){
//     // console.log( await FriendService.create("6084ff796ba39b2a3c4681da","6084e3891ec2671380ab48c8"));
//     console.log( await FriendService.getWithName("6084e3891ec2671380ab48c8", "w", 0));
// }
// testFriend();

const RequestService = require("./src/services/request.service");
// async function testRequest(){
    // await RequestService.create("6084e3891ec2671380ab48c8", "6084ff796ba39b2a3c4681da", "Hello, toi la nha");
    // return await RequestService.create("6084ff905722590858dbcb9e", "6084ff796ba39b2a3c4681da");
    // console.log(await RequestService.replyRequest("608558434a0c741990d5b4c8",true));
    // console.log(await RequestService.getReceived("6084ff796ba39b2a3c4681da"));
// }
// // testRequest();
// const MessageService = require('./src/services/message.service');
// async function testMessage(){
//     console.log(await MessageService.getMessageWithRoom("60855c9f3f861a139028323d"));
// }
// testMessage();

// const RoomService = require('./src/services/room.service');
// async function testRoom(){
//     // console.log(await RoomService.create("Nhom test!", ["608558434a0c741990d5b4c8", "6084ff905722590858dbcb9e", "6084ff796ba39b2a3c4681da"]));
//     // console.log(await RoomService.getWithId("60855c9f3f861a139028323d", "6084ff905722590858dbcb9e"));
//     // console.log(await RoomService.getWithMember("608558434a0c741990d5b4c8"));
//     // console.log(await RoomService.getMemberWithId("60855c9f3f861a139028323d"));
//     // console.log(await RoomService.addMember("60855c9f3f861a139028323d","608558434a0c741990d5b4c8"))
//     // console.log(await RoomService.memberChecker("60855c9f3f861a139028323d", "608558434a0c741990d5b4c8"))

// }
// testRoom();
