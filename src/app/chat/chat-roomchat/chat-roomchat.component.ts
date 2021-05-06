import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/auth/user.model';
import { SharingService } from 'src/app/sharing.service';

import { ChatRoomModel } from './chatroom.model';

@Component({
  selector: 'app-chat-roomchat',
  templateUrl: './chat-roomchat.component.html',
  styleUrls: ['./chat-roomchat.component.css'],
})
export class ChatRoomchatComponent implements OnInit {
  valShowMessContent = false;

  @Input()  tmpImgPath = "https://images.pexels.com/photos/7457830/pexels-photo-7457830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  @Input() currentChatUser: UserData;

  @Input() chatroom: ChatRoomModel;
  constructor(private showContent: SharingService) {}

  ngOnInit(): void {
    this.showContent.showContentMobile.subscribe(
      (show) => (this.valShowMessContent = show)
    );
  }
}
