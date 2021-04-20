import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AutheService } from '../auth/auth.service';

@Component({
  selector: 'app-menu-contact',
  templateUrl: './menu-contact.component.html',
  styleUrls: ['./menu-contact.component.css']
})
export class MenuContactComponent implements OnInit {
  isUserAuthenticated = false;
  private authListenerSub: Subscription;

  @Input() items: string[][];
  @Output() itemsChange: EventEmitter<string[][]> = new EventEmitter();

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
