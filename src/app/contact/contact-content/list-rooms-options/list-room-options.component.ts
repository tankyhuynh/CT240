import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RoomModel } from '../contact-add-room/contact-add-room.model';
import { ContactAddRoomService } from '../contact-add-room/contact-add-room.service';
import { FriendModel } from '../list-friends/friend.model';
import { ContactListRoomService } from '../list-rooms/contact-list-rooms.service';

@Component({
  selector: 'app-list-room-options',
  templateUrl: './list-room-options.component.html',
  styleUrls: ['../contact-content.component.css'],
})
export class ListRoomOptionsComponent implements OnInit {

  private tokenTimer: any;

  form: FormGroup;

  members: Array<any> = [];

  isShowMessageAlert: boolean = false;


  constructor(@Inject(MAT_DIALOG_DATA) public data: {
                                                roomId: string,
                                                type: string,
                                                className: string,
                                                title: string,
                                                subTitle: string,
                                                friends: FriendModel[]},
              private roomService: ContactAddRoomService,
              private roomsService: ContactListRoomService,
              private dialogRef: MatDialogRef<ListRoomOptionsComponent>,
              private route: Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      'members': new FormControl(null, {
        validators: [Validators.required]
      })
    });

  }

  onSubmit(){

  }

  addMembers(){
    this.members.forEach(member => {
      this.roomService
          .addNewMember(this.data.roomId, member)
          .subscribe( (response:any) => {
            console.log("Add new member to room");
            console.log(response)
          });
    })
    this.dialogRef.close();

  }

  deleteMembers(){
    this.members.forEach(member => {
      this.roomService
          .deleteMember(this.data.roomId, member)
          .subscribe( (response:any) => {
            console.log("Delete member of room");
            console.log(response)
          });
          this.dialogRef.close();
    })

  }

  leaveRoom(){
    this.roomService
          .changeAdminOfRoom(this.data.roomId, this.members)
          .subscribe( (response:any) => {
            console.log('Leave room');
            this.roomService
                  .outRoom(this.data.roomId)
                  .subscribe( (response:any) => {
                    console.log(response);
                  });
          } );

    this.dialogRef.close();
  }


  checkBoxClick(e: any){
    console.log(`isChecked: ${e.target.checked} , value: ${e.target.value}`);
    if (e.target.checked) {
     console.log(e.target.value);
     this.members.push(e.target.value);
    }
    console.log(`members: ${this.members}`);

  }

  radioClick(){
    const memberIdClicked = this.form.controls['members'].value;
    this.members = memberIdClicked;
    console.log(`members: ${this.members}`);
  }


}
