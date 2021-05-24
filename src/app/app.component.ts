import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

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
  providers: [SharingService],
})
export class AppComponent implements OnInit {
  isUserAuthenticated = false;
  isNewMessageReceive: boolean = false;

  currentUserId: string = localStorage.getItem('userId');
  currentUser: ProfileModel;

  private authListenerSub: Subscription;
  private userListenerSub: Subscription;

  private socketData: SocketModel;

  menuItems = [
    {
      key: 'message',
      content: 'Tin nhắn',
      url: 'chat',
      showBadge: false,
      numOfPeopleWaitToReply: 0
    },
    {
      key: 'contact',
      content: 'Danh bạ',
      url: 'contact',
      showBadge: false,
    },
    {
      key: 'personal',
      content: 'Chỉnh sửa',
      url: 'personal-information',
      showBadge: false,
    },
  ];

  constructor(
    private profileService: ProfileService,
    private authService: AutheService,
    private sharingService: SharingService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    // this.sharingService.currentMenuItems.subscribe(newItems => this.itemsInAppComponent = newItems);

    // this.sharingService.currentMenuClass.subscribe(newItems => this.menuClass = newItems);

    // this.itemsInAppComponent = JSON.parse(localStorage.getItem('menuItems'));

    this.authService.autoAuthUser();

    this.isUserAuthenticated = this.authService.getIsAuthenticated();

    this.authListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        this.isUserAuthenticated = isAuth;

        if (isAuth) {this.currentUserId = this.authService.getUserId();}

        this.socketService.setUpConnnection();

        this.onMessageReceive();
      });

    this.socketService.setUpConnnection();

    this.onMessageReceive();

    this.subscribeRoomStatusOfRoom();

  }

  onMessageReceive() {
    this.socketService.onMessage().subscribe((newMessage: any) => {
      if (newMessage.sender !== this.currentUserId) {
        this.sharingService.changeMessageInRoomRead({roomId: newMessage.room, value: true});
        this.sharingService.changeLastMessageOfRoom({roomId: newMessage.room, value: newMessage.data.content});
      }
    });
  }


  subscribeRoomStatusOfRoom(){
    this.sharingService
            .currentMessageInRommReadedSourceStatus
            .subscribe( (newMessage:any) => {
              if ( newMessage?.length > 0 ) {
                let isAllMessagesRead = true;
                newMessage.forEach(message => {
                  if (message?.value === true) {
                    isAllMessagesRead = false;
                  }
                });
                if ( isAllMessagesRead ) {
                  this.menuItems[0].showBadge = false;
                }
                else  {
                  this.menuItems[0].showBadge = true;
                  let numOfPeopleWaitToReply = 0;
                  newMessage.forEach(message => {
                    if (message?.value === true) {
                      numOfPeopleWaitToReply ++;
                    }
                  });
                  this.menuItems[0].numOfPeopleWaitToReply = numOfPeopleWaitToReply;
                }

              }
              else {
                this.menuItems[0].showBadge = false;
              }
            } );
  }

}
