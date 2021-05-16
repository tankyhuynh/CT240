import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/auth/user.model';
import { RoomModel } from 'src/app/contact/contact-content/contact-add-room/contact-add-room.model';
import { ProfileModel } from 'src/app/personal-information/profile.model';
import { SharingService } from 'src/app/sharing.service';
import { MessageModel } from './chat-roomchat-message.model';

import { ChatRoomModel } from './chatroom.model';

@Component({
  selector: 'app-chat-roomchat',
  templateUrl: './chat-roomchat.component.html',
  styleUrls: ['./chat-roomchat.component.css'],
})
export class ChatRoomchatComponent implements OnInit {
  valShowMessContent = false;

  @Input() messages: MessageModel[] = [];
  @Input() profileOfFriends: Array<any> = [];

  @Input()  tmpImgPath = "https://images.pexels.com/photos/7457830/pexels-photo-7457830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";


  @Input() rooms: RoomModel[] = [];
  @Input() chatroom: RoomModel;
  constructor(private showContent: SharingService) {}

  ngOnInit(): void {
    this.showContent.showContentMobile.subscribe(
      (show) => (this.valShowMessContent = show)
    );
  }
}
