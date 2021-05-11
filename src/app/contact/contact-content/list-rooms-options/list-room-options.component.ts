import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  form: FormGroup;

  members: Array<any> = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
                                                roomId: string,
                                                type: string,
                                                className: string,
                                                title: string,
                                                subTitle: string,
                                                friends: FriendModel[]},
              private roomService: ContactAddRoomService,
              private dialogRef: MatDialogRef<ListRoomOptionsComponent>,){}

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
          .addNewMembers(this.data.roomId, member)
          .subscribe( (response:any) => {
            console.log("Save room in list-room-options");
            console.log(response)
          });
    })
    this.dialogRef.close();

  }

  deleteMembers(){

  }

  leaveRoom(){

  }

  checkBoxClick(e: any){
    console.log(`isChecked: ${e.target.checked} , value: ${e.target.value}`);
    if (e.target.checked) {
     console.log(e.target.value);
     this.members.push(e.target.value);
    }
    console.log(`members: ${this.members}`);

  }

}
