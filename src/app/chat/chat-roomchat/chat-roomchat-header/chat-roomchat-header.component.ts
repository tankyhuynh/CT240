import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/auth/user.model';
import { RoomModel } from 'src/app/contact/contact-content/contact-add-room/contact-add-room.model';
import { SharingService } from 'src/app/sharing.service';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-chat-roomchat-header',
  templateUrl: './chat-roomchat-header.component.html',
  styleUrls: ['./chat-roomchat-header.component.css'],
})
export class ChatRoomchatHeaderComponent implements OnInit {
  @Input() imgPath: string;
  @Input() currentRoom: RoomModel;

  show: boolean = false;

  constructor(
    private showContent: SharingService,
    private socketService: SocketService
    ) {}

  ngOnInit(): void {}

  onClickShowContent() {
    this.showContent.showContentMobile.subscribe(
      (isShow) => (this.show = isShow)
    );
    this.showContent.changeShowValue(!this.show);
  }

  onCallVideo(){
    this.socketService
          .setUpVideoCall("60a0a2498bbe743154c42981");
    this.connect();
  }

  connect(){
    this.socketService
          .connect("60a0a2498bbe743154c42981");
  }
}
