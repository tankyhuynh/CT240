import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';
import { ContactListAddFriendService } from './contact-list-add-friend-requests.service';
import { ListAddFriendRequestModel } from './contact-list-add-friend-requests.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from 'src/app/success/success.component';

@Component({
  selector: 'app-list-add-friends',
  templateUrl: './contact-list-add-friend-requests.component.html',
  styleUrls: ['../contact-content.component.css'],
  providers: [ContactListAddFriendService]
})
export class ListAddFriendsComponent implements OnInit {
  valHideContactContent = false;

  listAddFriendRequests: ListAddFriendRequestModel[] = [];
  currentUserId: string = localStorage.getItem('userId');

  constructor(
    private route: Router,
    private hideContent: SharingService,
    private listAddFriendRequestService: ContactListAddFriendService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.listAddFriendRequestService
          .getAll()
          .subscribe( (response:any) => {
            this.listAddFriendRequests = response.data;
            console.log(response.data);
          });

  }

  isAcceptFriendRequest(id: string, isAccept: boolean){
    this.listAddFriendRequestService
          .isAcceptFriendRequest(id, isAccept)
          .subscribe( (response:any) => {
            console.log(response);
          });
    let data= {message: ""};
    if (isAccept) {
        data.message = "Chấp nhận lời mời kết bạn thành công"
    }else data.message = "Bạn đã xóa lời mời kết bạn"

    this.dialog.open(SuccessComponent, {data: data});
  }

  deleteFriendRequest(id: string){
    this.listAddFriendRequestService
          .deleteFriendRequest(id)
          .subscribe( response => {
            console.log(response);
          });
  this.route.navigate(['/contact/content/list-add-friends']);
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
