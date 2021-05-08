import { Component, Input, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/contact/contact-content/contact-add-room/contact-add-room.model';
import { ContactListFriendService } from 'src/app/contact/contact-content/list-friends/contact-list-friend.service';
import { FriendModel } from 'src/app/contact/contact-content/list-friends/friend.model';
import { SharingService } from 'src/app/sharing.service';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css'],
})
export class ChatMenuComponent implements OnInit {
  @Input() imgPath: string;

  @Input() rooms: RoomModel[] = [];

  show: boolean = false;

  constructor(
    private showContent: SharingService,
    private listFriendService: ContactListFriendService) {}

  ngOnInit(): void {

  }

  onClickShowContent() {
    this.showContent.showContentMobile.subscribe(
      (isShow) => (this.show = isShow)
    );
    this.showContent.changeShowValue(!this.show);



  }
}
