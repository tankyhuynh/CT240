import { Component, Input, OnInit } from '@angular/core';

import { ChatRoomModel } from '../chatroom.model'

@Component({
  selector: 'app-chat-roomchat-body',
  templateUrl: './chat-roomchat-body.component.html',
  styleUrls: ['./chat-roomchat-body.component.css']
})
export class ChatRoomchatBodyComponent implements OnInit {

  @Input() chatroom: ChatRoomModel;

  constructor() { }

  ngOnInit(): void {
  }

}
