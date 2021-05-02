import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from './auth/user.model';

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

  constructor() {}

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
