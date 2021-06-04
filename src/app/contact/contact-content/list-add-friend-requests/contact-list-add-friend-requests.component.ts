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

  isLoading: boolean = false;

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

    this.fetchAllData();

  }

  fetchAllData(){
    this.listAddFriendRequestService
    .getAll()
    .subscribe( (response:any) => {
      this.listAddFriendRequests = response.data;
    });
  }

  isAcceptFriendRequest(id: string, isAccept: boolean){
    this.isLoading = true;
    this.listAddFriendRequestService
          .isAcceptFriendRequest(id, isAccept)
          .subscribe( (response:any) => {
            this.fetchAllData();
            this.isLoading = false;
          });
  }

  deleteFriendRequest(id: string){
    this.isLoading = true;
    this.listAddFriendRequestService
          .deleteFriendRequest(id)
          .subscribe( response => {
            this.fetchAllData();
            this.isLoading = false;
          });
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
