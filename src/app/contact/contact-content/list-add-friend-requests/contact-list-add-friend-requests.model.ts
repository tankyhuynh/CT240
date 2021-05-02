export interface ListAddFriendRequestModel {
  _id: string,
  sender: {
      _id: string,
      name: string,
      avatar: string
    },
  receiver: {
      _id: string,
      name: string,
      avatar: string
    },
  sended_at: Date
}
