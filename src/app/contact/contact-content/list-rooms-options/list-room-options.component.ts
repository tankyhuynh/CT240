import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FriendModel } from '../list-friends/friend.model';

@Component({
  selector: 'app-add-member',
  templateUrl: './list-room-options.component.html',
  styleUrls: ['../contact-content.component.css'],
})
export class ListRoomOptionsComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
                                                type: string,
                                                className: string,
                                                title: string,
                                                subTitle: string,
                                                friends: FriendModel[]}){}

  ngOnInit(): void {
    this.form = new FormGroup({
      'members': new FormControl(null, {
        validators: [Validators.required]
      })
    });
    console.log("Friends: ");
    console.log(this.data.friends);
  }

  onSubmit(){

  }

}
