import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';
import { ContactListFriendService } from './contact-list-friend.service';
import { FriendModel } from './friend.model';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['../contact-content.component.css'],
})
export class ListFriendsComponent implements OnInit {
  valHideContactContent = false;

  listFriends: FriendModel[];

  constructor(
    private hideContent: SharingService,
    private listFriendService: ContactListFriendService) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.listFriendService
            .getAll()
            .subscribe( (response:any) => {
              this.listFriends = response.data.data;
              console.log(this.listFriends);
            });
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
