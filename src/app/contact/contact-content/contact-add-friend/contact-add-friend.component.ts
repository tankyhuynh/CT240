import { error } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  isLoading = false;

  valHideContactContent = false;

  hideFriend: boolean = true;

  friend: FriendModel;
  @ViewChild("friendId") friendId: ElementRef<any>;

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
    this.isLoading = true;
    if (!friendId) {
      this.isLoading = false;
      return ;
    }

    if(friendId.length === 10){
      console.log("input 10 digits");
      friendId= "?phone=" + friendId;
    }

    try {
      this.addFriendService
          .getOneById(friendId)
          .subscribe( (response:any) => {

            if( response.data ){
              this.isLoading = false;
              this.hideFriend = false;
              this.friend = {
                _id: response.data._id,
                name: response.data.name,
                phone: response.data.phone,
                avatar: response.data.avatar
              };

              console.log(`valHideContactContent: ${this.hideFriend}`)
              console.log(response);
              console.log(this.friend);
            }
            else{
              this.hideFriend = true;
              console.log(`valHideContactContent: ${this.hideFriend}`)
            }
          }),
          (error) => {
            console.log("Dont find user");
          };
    } catch (error) {

    }
  }

  addFriend(friendId: string, introduce: string){
    if (!introduce) {
      introduce = "Hello";
    }
    this.isLoading = true;
    this.hideFriend = true;
    this.addFriendService
          .saveOne(friendId, introduce)
          .subscribe(response => {
            console.log(response);
            this.isLoading = false;
            this.friendId.nativeElement.value = "";
          });

    //  this.dialog.open(SuccessComponent, {data: {title: "", message: "Add friend successed"}});

  }



  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
