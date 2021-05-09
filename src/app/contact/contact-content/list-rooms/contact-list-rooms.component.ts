import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';
import { MatDialog } from '@angular/material/dialog';

import { ContactListRoomModel } from './contact-list-rooms.model';
import { ContactListRoomService } from './contact-list-rooms.service';
import { ContactListFriendService } from '../list-friends/contact-list-friend.service';
import { FriendModel } from '../list-friends/friend.model';
import { ListRoomOptionsComponent } from '../list-rooms-options/list-room-options.component';
import { RoomModel } from '../contact-add-room/contact-add-room.model';

@Component({
  selector: 'app-list-groups',
  templateUrl: './contact-list-rooms.component.html',
  styleUrls: ['../contact-content.component.css'],
  providers: [ContactListRoomService],
})
export class ListGroupsComponent implements OnInit {
  valHideContactContent = false;

  rooms: RoomModel[] = [];
  friends: FriendModel[] = [];

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
      this.rooms = response.data.data;
      console.log(this.rooms);
    });
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }

  addMember() {
    this.getAllFriends();
    const dialogRef = this.dialog.open(ListRoomOptionsComponent, {
      data: {
        type: "add",
        className: "fas fa-user-plus",
        title: "Thêm thành viên",
        subTitle: "Chọn bạn bè thêm vào nhóm",
        friends: this.friends}} );
  }

  deleteMember() {
    this.getAllFriends();
    const dialogRef = this.dialog.open(ListRoomOptionsComponent, {
      data: {
        type: "delete",
        className: "fas fa-users-cog",
        title: "Xóa thành viên",
        subTitle: "Thành viên trong nhóm",
        friends: this.friends}} );
  }

  deleteRoom() {
    this.getAllFriends();
    const dialogRef = this.dialog.open(ListRoomOptionsComponent, {
      data: {
        type: "leave",
        className: "fas fa-sign-out-alt",
        title: "Rời nhóm",
        subTitle: "Chọn quản trị viên",
        friends: this.friends}} );
  }

  getAllFriends(){
    let friends: FriendModel[];
    this.friendService
    .getAll()
    .subscribe( (response:any) => {
      friends = response.data.data;
      console.log(friends);
      this.friends = friends;
    });
  }

}
