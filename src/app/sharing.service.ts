import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from './auth/user.model';
import { MessageModel } from './chat/chat-roomchat/chat-roomchat-message.model';
import { ProfileModel } from './personal-information/profile.model';

@Injectable()
export class SharingService {
  private menuItemsSource = new BehaviorSubject<string[][]>(
    ['Default message']['Default URL']
  );
  currentMenuItems = this.menuItemsSource.asObservable();

  private menuClassSource = new BehaviorSubject<string>('base_class');
  currentMenuClass = this.menuClassSource.asObservable();

  private showSource = new BehaviorSubject<boolean>(true);
  showContentMobile = this.showSource.asObservable();

  private userDataSource = new BehaviorSubject<ProfileModel>(null);
  currentUserData = this.userDataSource.asObservable();

  private reloginSource = new BehaviorSubject<boolean>(false);
  currentReloginStatus = this.reloginSource.asObservable();

  private messageSource = new BehaviorSubject<MessageModel[]>(null);
  currentMessageStatus = this.messageSource.asObservable();

  // save history of room
  private messageInRommReadSource = new BehaviorSubject<Array<any>>(null);
  currentMessageInRommReadedSourceStatus = this.messageInRommReadSource.asObservable();
  private messageReadHistory: Array<any> = [];

  // save lastMessage of each room
  // nữa đỗi từ từ qua variable and variable$ dễ đọc hơn
  private lastMessage = new BehaviorSubject<Array<any>>(null);
  lastMessage$ = this.lastMessage.asObservable();
  private lastMessageHistory: Array<any> = [];

  private sendNewImageSource = new BehaviorSubject<MessageModel>(null);
  currentSendNewImageStatus = this.sendNewImageSource.asObservable();


  constructor() {}

  changeSendNewImage(message: MessageModel) {
    this.sendNewImageSource.next(message);
  }

  changeMessageInRoomRead(data) {
    if ( this.messageReadHistory.length > 0 ) {
      this.messageReadHistory.forEach((history:any) => {
        if ( history?.roomId !== data?.roomId ) {
          this.messageReadHistory.push(data);
        }
        else {
          if(history?.value !== data?.value){
            const index = this.messageReadHistory.indexOf(history);
            this.messageReadHistory[index]  = data;
          }
        }
      })
    }
    else {
      this.messageReadHistory.push(data);
    }
    this.messageInRommReadSource.next(this.messageReadHistory);
  }

  changeLastMessageOfRoom(data) {
    if ( this.lastMessageHistory.length > 0 ) {
      this.lastMessageHistory.forEach((history:any) => {
        if ( history?.roomId !== data?.roomId ) {
          this.lastMessageHistory.push(data);
        }
        else {
          if(history?.value !== data?.value){
            const index = this.lastMessageHistory.indexOf(history);
            this.lastMessageHistory[index]  = data;
          }
        }
      })
    }
    else {
      this.lastMessageHistory.push(data);
    }
    this.lastMessage.next(this.lastMessageHistory);
  }

  changeMessage(messages: MessageModel[]) {
    this.messageSource.next(messages);
  }

  changeReloginStatus(isRelogin: boolean) {
    this.reloginSource.next(isRelogin);
  }

  changeUserData(userData: ProfileModel) {
    this.userDataSource.next(userData);
  }

  changeMenuItems(message: string[][]) {
    this.menuItemsSource.next(message);
  }

  changeMenuClass(message: string) {
    this.menuClassSource.next(message);
  }

  changeShowValue(showContentMobile: boolean) {
    this.showSource.next(showContentMobile);
  }
}
