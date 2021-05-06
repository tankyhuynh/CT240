export interface ListAddFriendRequestModel {
  _id: string;
  sender: {
    _id: string;
    name: string;
    avatar: string;
  };
  introduce: string;
  receiver: {
    _id: string;
    name: string;
    avatar: string;
  };
  sended_at: Date;
}
