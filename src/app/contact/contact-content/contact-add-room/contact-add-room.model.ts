import { MessageModel } from 'src/app/chat/chat-roomchat/chat-roomchat-message.model';

export interface RoomModel {
  _id: string;
  name: string;
  avatar: string;
  members: any[];
  admin: string;
  messagelast?: MessageModel;
  top: number;
}
