import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';
import { ContactListAddFriendService } from './contact-list-add-friend-requests.service';
import { ListAddFriendRequestModel } from './contact-list-add-friend-requests.model';

@Component({
  selector: 'app-list-add-friends',
  templateUrl: './contact-list-add-friend-requests.component.html',
  styleUrls: ['../contact-content.component.css'],
  providers: [ContactListAddFriendService]
})
export class ListAddFriendsComponent implements OnInit {
  valHideContactContent = false;

  listAddFriendRequests: ListAddFriendRequestModel[];

  constructor(
    private hideContent: SharingService,
    private listAddFriendRequestService: ContactListAddFriendService) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    console.log("List addfriend Component work!!");
    this.listAddFriendRequestService
          .getAll()
          .subscribe(response => {
            this.listAddFriendRequests = response.listAddFriend;
            console.log(this.listAddFriendRequests);
          });
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
