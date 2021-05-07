import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';
import { MatDialog } from '@angular/material/dialog';

import { ContactListRoomModel } from './contact-list-rooms.model';
import { ContactListRoomService } from './contact-list-rooms.service';
import { AddMemberComponent } from '../add-member/add-member.component';
import { DeleteMemberComponent } from '../delete-member/delete-member.component';
import { DeleteRoomComponent } from '../delete-room/delete-room.component';

@Component({
  selector: 'app-list-groups',
  templateUrl: './contact-list-rooms.component.html',
  styleUrls: ['../contact-content.component.css'],
  providers: [ContactListRoomService],
})
export class ListGroupsComponent implements OnInit {
  valHideContactContent = false;

  rooms: ContactListRoomModel[] = [];

  constructor(
    private hideContent: SharingService,
    private roomService: ContactListRoomService,
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
    const dialogRef = this.dialog.open(AddMemberComponent);
  }

  deleteMember() {
    const dialogRef = this.dialog.open(DeleteMemberComponent);
  }

  deleteRoom() {
    const dialogRef = this.dialog.open(DeleteRoomComponent, {});
  }
}
