import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-roomchat-body',
  templateUrl: './chat-roomchat-body.component.html',
  styleUrls: ['./chat-roomchat-body.component.css']
})
export class ChatRoomchatBodyComponent implements OnInit {

  @Input() chatroom: {
    receive: {
      content: string,
      time: string
    },
    send: {
      content: string,
      time: string
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
