import { Component, Input, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';

import { ChatRoomModel } from './chatroom.model';

@Component({
  selector: 'app-chat-roomchat',
  templateUrl: './chat-roomchat.component.html',
  styleUrls: ['./chat-roomchat.component.css'],
})
export class ChatRoomchatComponent implements OnInit {
  valShowMessContent = false;

  @Input() imgPath = 'http://localhost:3000/images/img.jpg';
  @Input() username: string;

  @Input() chatroom: ChatRoomModel;
  constructor(private showContent: SharingService) {}

  ngOnInit(): void {
    this.showContent.showContentMobile.subscribe(
      (show) => (this.valShowMessContent = show)
    );
  }
}
