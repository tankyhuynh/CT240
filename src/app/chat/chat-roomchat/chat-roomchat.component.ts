import { Component, Input, OnInit } from '@angular/core';

import { ChatRoomModel } from './chatroom.model'

@Component({
  selector: 'app-chat-roomchat',
  templateUrl: './chat-roomchat.component.html',
  styleUrls: ['./chat-roomchat.component.css']
})
export class ChatRoomchatComponent implements OnInit {

  imgPath = "http://localhost:3000/images/img.jpg";
  @Input() username: string;

  @Input() chatroom: ChatRoomModel ;


  constructor() { }

  ngOnInit(): void {


  }
}
