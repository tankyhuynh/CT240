import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/auth/user.model';
import { RoomModel } from 'src/app/contact/contact-content/contact-add-room/contact-add-room.model';
import { SharingService } from 'src/app/sharing.service';

@Component({
  selector: 'app-chat-roomchat-header',
  templateUrl: './chat-roomchat-header.component.html',
  styleUrls: ['./chat-roomchat-header.component.css'],
})
export class ChatRoomchatHeaderComponent implements OnInit {
  @Input() imgPath: string;
  @Input() currentRoom: RoomModel;

  show: boolean = false;

  constructor(private showContent: SharingService) {}

  ngOnInit(): void {}

  onClickShowContent() {
    this.showContent.showContentMobile.subscribe(
      (isShow) => (this.show = isShow)
    );
    this.showContent.changeShowValue(!this.show);
  }
}
