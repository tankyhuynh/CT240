import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/sharing.service';
import { ContactListFriendService } from '../list-friends/contact-list-friend.service';
import { FriendModel } from '../list-friends/friend.model';
import { ContactListRoomService } from '../list-rooms/contact-list-rooms.service';
import { RoomModel } from './contact-add-room.model';
import { ContactAddRoomService } from './contact-add-room.service';

@Component({
  selector: 'app-contact-add-group',
  templateUrl: './contact-add-room.component.html',
  styleUrls: ['../contact-content.component.css'],
})
export class ContactAddGroupComponent implements OnInit {
  valHideContactContent = false;

  friends: FriendModel[];
  members: Array<any> = [];

  form: FormGroup;

  constructor(
    private router: Router,
    private hideContent: SharingService,
    private friendService: ContactListFriendService,
    private roomService: ContactAddRoomService
  ) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );

    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      members: new FormControl(null, {
        validators: [Validators.required],
      }),
    });

    this.friendService.getAll().subscribe((response: any) => {
      this.friends = response.data.data;
      // console.log(this.friends);
    });
  }

  checkBoxClick(e: any) {
    // console.log(`isChecked: ${e.target.checked} , value: ${e.target.value}`);
    if (e.target.checked) {
      // console.log(e.target.value);
      this.members.push(e.target.value);
    }
    // console.log(`members: ${this.members}`);
  }

  onAddRoom() {
    if (this.form.invalid) {
      return;
    }
    const room: RoomModel = {
      _id: '',
      name: this.form.value.name,
      members: this.members,
      avatar: '',
      admin: '',
      top: 500, // ko biết chỗ này có lối ko
    };
    this.roomService.saveOne(room).subscribe((response) => {
      // console.log(response);
    });
    this.router.navigate(['contact/content/list-rooms']);
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
