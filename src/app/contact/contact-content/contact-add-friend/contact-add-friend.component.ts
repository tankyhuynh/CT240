import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/sharing.service';
import { SuccessComponent } from 'src/app/success/success.component';
import { FriendModel } from '../list-friends/friend.model';
import { ContactAddFriendService } from './contact-addfriend.service';

@Component({
  selector: 'app-contact-add-friend',
  templateUrl: './contact-add-friend.component.html',
  styleUrls: ['../contact-content.component.css'],
  providers: [ContactAddFriendService]
})
export class ContactAddFriendComponent implements OnInit {
  valHideContactContent = false;

  friend: FriendModel;

  constructor(
    private router: Router,
    private sharingService: SharingService,
    private hideContent: SharingService,
    private addFriendService: ContactAddFriendService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
  }

  searchFriend(friendId: string){
    if (!friendId) {
      return ;
    }
    try {
      this.addFriendService
          .getOneById(friendId)
          .subscribe(response => {
            this.friend = {
              _id: response.data._id,
              name: response.data.name,
              phone: response.data.phone,
              avatar: response.data.avatar
            };
            console.log(response);
            console.log(this.friend);
          });
    } catch (error) {

    }
  }

  addFriend(friendId: string, introduce: string){
    if (!introduce) {
      introduce = "Hello";
    }
    this.addFriendService
          .saveOne(friendId, introduce)
          .subscribe(response => {
            console.log(response);
          });
     this.dialog.open(SuccessComponent, {data: {title: "", message: "Add friend successed"}});

  }



  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
