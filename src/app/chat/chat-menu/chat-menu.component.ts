import { Component, Input, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/contact/contact-content/contact-add-room/contact-add-room.model';
import { ContactListFriendService } from 'src/app/contact/contact-content/list-friends/contact-list-friend.service';
import { FriendModel } from 'src/app/contact/contact-content/list-friends/friend.model';
import { SharingService } from 'src/app/sharing.service';
import { SocketService } from 'src/app/socket/socket.service';
import { MessageModel } from '../chat-roomchat/chat-roomchat-message.model';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css'],
})
export class ChatMenuComponent implements OnInit {
  @Input() imgPath: string;

  @Input() lastMessage: string[];
  @Input() tmp: MessageModel; //test get last message of room => Dang fail

  @Input() rooms: RoomModel[] = [];

  show: boolean = false;

  constructor(
    private showContent: SharingService,
    private listFriendService: ContactListFriendService,
    private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.getMessages().subscribe((message: MessageModel) => {
      this.tmp = message;
    });
  }

  onClickShowContent() {
    this.showContent.showContentMobile.subscribe(
      (isShow) => (this.show = isShow)
    );
    this.showContent.changeShowValue(!this.show);
  }
}
