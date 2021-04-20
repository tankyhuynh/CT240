import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AutheService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserAuthenticated = false;
  private authListenerSub: Subscription;

  @Input() items: string[][];
  @Output() itemsChange: EventEmitter<string[][]> = new EventEmitter();

  @Input() menuClass: string;
  @Output() menuClassChange: EventEmitter<string> = new EventEmitter();

  constructor(private authService: AutheService) {}

  getItems(){
    return this.items;
  }

  ngOnInit(): void {
    this.isUserAuthenticated = this.authService.getIsAuthenticated();

    this.authListenerSub = this.authService
                  .getAuthStatusListener()
                  .subscribe(isAuth => {
                    this.isUserAuthenticated = isAuth;
                  });
  }

}
