import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from './auth/user.model';
import { MessageModel } from './chat/chat-roomchat/chat-roomchat-message.model';

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

  private userDataSource = new BehaviorSubject<UserData>(null);
  currentUserData = this.userDataSource.asObservable();

  private reloginSource = new BehaviorSubject<boolean>(false);
  currentReloginStatus = this.reloginSource.asObservable();

  private messageSource = new BehaviorSubject<MessageModel[]>(null);
  currentMessageStatus = this.messageSource.asObservable();

  private messageInRommReadSource = new BehaviorSubject<Array<any>>(null);
  currentMessageInRommReadedSourceStatus = this.messageInRommReadSource.asObservable();

  constructor() {}

  changeMessageInRoomRead(data) {
    this.messageInRommReadSource.next(data);
  }

  changeMessage(messages: MessageModel[]) {
    this.messageSource.next(messages);
  }

  changeReloginStatus(isRelogin: boolean) {
    this.reloginSource.next(isRelogin);
  }

  changeUserData(userData: UserData) {
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
