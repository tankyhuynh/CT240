import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharingService {
  private messageSource = new BehaviorSubject<string[][]>(['Default message']['Default URL']);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string[][]) {
    this.messageSource.next(message);
  }
}
