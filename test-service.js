const db = require('./configs/database.config');
db.config();

const AccountService = require('./src/services/account.service');
const ProfileService = require('./src/services/profile.service');
const FriendService = require('./src/services/friend.service');
async function testAccount(){
    AccountService.create("0868674096", "password");
}

// async function testProfile(){
//     // console.log(await ProfileService.createWithAccountId("6084e382dde11f349429801e", "Le Thanh nhan"));
//     await ProfileService.createWithAccountId("6084ff796ba39b2a3c4681da", "Trung le");
//     await ProfileService.createWithAccountId("6084ff905722590858dbcb9e", "Thanh Nhan A");
//     // console.log(await ProfileService.getWithId("6084e3891ec2671380ab48c8"));
//     // console.log(await ProfileService.update("6084e3891ec2671380ab48c8", {name: "Viet Nam"}))
// }

// testProfile();
// // testAccount();

async function testFriend(){
    // console.log( await FriendService.create("6084ff796ba39b2a3c4681da","6084e3891ec2671380ab48c8"));
    console.log( await FriendService.getWithName("6084e3891ec2671380ab48c8", "w", 0));
}
testFriend();