import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileModel } from 'src/app/personal-information/profile.model';
import { SharingService } from 'src/app/sharing.service';
import { RoomModel } from '../contact-add-room/contact-add-room.model';
import { ContactListRoomService } from '../list-rooms/contact-list-rooms.service';
import { ContactListFriendService } from './contact-list-friend.service';
import { FriendModel } from './friend.model';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['../contact-content.component.css'],
})
export class ListFriendsComponent implements OnInit {
  valHideContactContent = false;
  isShowMessageAlert:boolean = false;

  currentUser: string = localStorage.getItem('userId');

  listFriends: FriendModel[];

  private tokenTimer: any;


  constructor(
    private route: Router,
    private hideContent: SharingService,
    private listFriendService: ContactListFriendService,
    private roomService: ContactListRoomService) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.fetchAllData();

  }

  fetchAllData(){
    this.listFriendService
            .getAll()
            .subscribe( (response:any) => {
              this.listFriends = response.data.data;
              console.log(this.listFriends);
            });
  }

  createNewRoomFor2Users(idPartner: string){

    const name = "";
    const members = [idPartner];

    this.roomService
          .saveOne(name, members)
          .subscribe( (response:any) => {
            console.log('create new room');
            console.log(response.data);
            this.route.navigate(['chat', response.data._id]);
          });
  }

  deleteFriend(friendId: string){
    this.listFriendService
          .delete(friendId)
          .subscribe( response => {
            console.log(`delete friend ${friendId}`);
            console.log(response);
            this.fetchAllData();

            this.isShowMessageAlert = true;
            this.setMessageAlertTimer(2);
          });

  }

  private setMessageAlertTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.isShowMessageAlert = false;
    }, duration * 1000);
    console.log('Setting timer alert message: ' + duration);
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
