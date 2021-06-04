import { error } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/sharing.service';
import { SocketService } from 'src/app/socket/socket.service';
import { SuccessComponent } from 'src/app/success/success.component';
import { SuccessService } from 'src/app/success/success.service';
import { FriendModel } from '../list-friends/friend.model';
import { ContactAddFriendService } from './contact-addfriend.service';

@Component({
  selector: 'app-contact-add-friend',
  templateUrl: './contact-add-friend.component.html',
  styleUrls: ['../contact-content.component.css'],
  providers: [ContactAddFriendService, SuccessService],
})
export class ContactAddFriendComponent implements OnInit {
  isLoading = false;
  valHideContactContent = false;
  hideFriend: boolean = true;
  isShowMessageAlert: boolean = false;

  friend: FriendModel;
  @ViewChild('friendPhone') friendPhone: ElementRef<any>;
  @ViewChild('introduction') introduction: ElementRef<any>;

  private tokenTimer: any;

  constructor(
    private router: Router,
    private sharingService: SharingService,
    private hideContent: SharingService,
    private addFriendService: ContactAddFriendService,
    private succecssService: SuccessService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
  }

  searchFriend(friendId: string) {
    this.isLoading = true;
    if (!friendId) {
      this.isLoading = false;
      return;
    }

    if (friendId.length === 10) {
      friendId = '?phone=' + friendId;
    }

    try {
      this.addFriendService.getOneById(friendId).subscribe((response: any) => {
        if (response.data) {
          this.isLoading = false;
          this.hideFriend = false;
          this.friend = {
            _id: response.data._id,
            name: response.data.name,
            phone: response.data.phone,
            avatar: response.data.avatar,
          };
        } else {
          this.hideFriend = true;
        }
      }),
        (error) => {
        };
    } catch (error) {}
  }

  addFriend(friendId: string, introduce: string) {
    if (!introduce) {
      introduce = 'Hello';
    }
    this.isLoading = true;
    this.hideFriend = true;
    this.addFriendService.saveOne(friendId, introduce).subscribe((response) => {

      this.isLoading = false;
      this.isShowMessageAlert = true;

      this.setMessageAlertTimer(2);

      this.friendPhone.nativeElement.value = '';
      this.introduction.nativeElement.value = '';
    });
  }

  private setMessageAlertTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.isShowMessageAlert = false;
    }, duration * 1000);
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
