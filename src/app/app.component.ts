import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { AutheService } from './auth/auth.service';
import { SharingService } from './sharing.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharingService]
})
export class AppComponent implements OnInit {

  isUserAuthenticated = false;
  private authListenerSub: Subscription;

  private itemListenerSub: Subscription;
  @Output() itemsInAppComponent = [['app1', 'url1'], ['app2', 'url2']];

  @Output() menuClass = 'base_class';

  constructor(private authService: AutheService, private sharingData: SharingService){};

  ngOnInit(){

    this.sharingData.currentMenuItems.subscribe(newItems => this.itemsInAppComponent = newItems);

    this.sharingData.currentMenuClass.subscribe(newItems => this.menuClass = newItems);

    this.itemsInAppComponent = JSON.parse(localStorage.getItem('menuItems'));

    this.authService.autoAuthUser();

    this.isUserAuthenticated = this.authService.getIsAuthenticated();

    this.authListenerSub = this.authService
                  .getAuthStatusListener()
                  .subscribe(isAuth => {
                    this.isUserAuthenticated = isAuth;
                  });
  }

}
