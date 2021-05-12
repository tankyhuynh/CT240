import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';
import { MatDialog } from '@angular/material/dialog';

import { ContactListRoomService } from './contact-list-rooms.service';
import { ContactListFriendService } from '../list-friends/contact-list-friend.service';
import { FriendModel } from '../list-friends/friend.model';
import { ListRoomOptionsComponent } from '../list-rooms-options/list-room-options.component';
import { RoomModel } from '../contact-add-room/contact-add-room.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-groups',
  templateUrl: './contact-list-rooms.component.html',
  styleUrls: ['../contact-content.component.css'],
  providers: [ContactListRoomService],
})
export class ListGroupsComponent implements OnInit {
  valHideContactContent = false;

  friendOfCurrentUser: FriendModel[];
  rooms: RoomModel[] = [];

  currentUserId: string = localStorage.getItem('userId');

  constructor(
    private hideContent: SharingService,
    private roomService: ContactListRoomService,
    private friendService: ContactListFriendService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.roomService.getAll().subscribe((response: any) => {
      const responseData = response.data.data;
      this.rooms = responseData.filter(room => room.members.length > 2);
      console.log(this.rooms);
    });

    this.friendService
          .getAll()
          .subscribe( (response:any) => {
            this.friendOfCurrentUser = response.data.data;
            console.log("Friends of current userId: ");
            console.log(this.friendOfCurrentUser);
          } );

  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }

  addMember(idRoom: string) {

    let friends: FriendModel[];
    this.friendService
          .getAll()
          .subscribe( (response:any) => {
            friends = response.data.data;
            const friendsFilter = friends.filter(friend => friend._id !== this.currentUserId);

            const dialogRef = this.dialog.open(ListRoomOptionsComponent, {
              data: {
                roomId: idRoom,
                friends: friendsFilter,
                type: "add",
                className: "fas fa-user-plus",
                title: "Thêm thành viên",
                subTitle: "Chọn bạn bè thêm vào nhóm",
                }} );
            console.log("getAllFriends in contact listrooms");
            console.log(friends);

          });


  }

  deleteMember(idRoom: string) {

    this.roomService
          .getMembersById(idRoom)
          .subscribe( (response:any) => {
            const members = response.data;
            const membersFilter = members.filter(member => member._id !== this.currentUserId);

            //filter if friends are members => dag FAIL
            const memberFilterWithoutFriendExist = membersFilter.filter(item => !this.friendOfCurrentUser.includes(item));
            console.log("Filter if friends are member");
            console.log(memberFilterWithoutFriendExist);

            const dialogRef = this.dialog.open(ListRoomOptionsComponent, {
              data: {
                roomId: idRoom,
                friends: membersFilter,
                type: "delete",
                className: "fas fa-users-cog",
                title: "Xóa thành viên",
                subTitle: "Thành viên trong nhóm",
                }} );

            console.log(members);
          });



  }

  delete(idRoom: string) {

    this.roomService
          .getMembersById(idRoom)
          .subscribe( (response:any) => {
            const members = response.data;
            const membersFilter = members.filter(member => member._id !== this.currentUserId)

            const dialogRef = this.dialog.open(ListRoomOptionsComponent, {
              data: {
                roomId: idRoom,
                friends: membersFilter,
                type: "leave",
                className: "fas fa-sign-out-alt",
                title: "Rời nhóm",
                subTitle: "Chọn quản trị viên",
                }} );

            console.log(members);
          });


  }


}
