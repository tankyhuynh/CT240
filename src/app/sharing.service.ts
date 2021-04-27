import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  constructor() {}

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
