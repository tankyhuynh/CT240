import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';


import { Subscription } from 'rxjs';
import { AutheService } from './auth/auth.service';
import { UserData } from './auth/user.model';
import { ProfileModel } from './personal-information/profile.model';
import { ProfileService } from './personal-information/profile.service';
import { SharingService } from './sharing.service';
import { SocketModel } from './socket/socket.model';
import { SocketService } from './socket/socket.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SharingService]
})
export class AppComponent implements OnInit {

  isUserAuthenticated = false;
  currentUserId: string;
  currentUser: UserData;

  private authListenerSub: Subscription;
  private userListenerSub: Subscription;

  private socketData: SocketModel;

  constructor(
      private profileService: ProfileService,
      private authService: AutheService,
      private sharingData: SharingService,
      private socketService: SocketService
      ){};

  ngOnInit(){

    // this.sharingData.currentMenuItems.subscribe(newItems => this.itemsInAppComponent = newItems);

    // this.sharingData.currentMenuClass.subscribe(newItems => this.menuClass = newItems);

    // this.itemsInAppComponent = JSON.parse(localStorage.getItem('menuItems'));

    this.authService.autoAuthUser();

    this.isUserAuthenticated = this.authService.getIsAuthenticated();

    this.authListenerSub = this.authService
                  .getAuthStatusListener()
                  .subscribe(isAuth => {
                    this.isUserAuthenticated = isAuth;
                  });

  }



}
