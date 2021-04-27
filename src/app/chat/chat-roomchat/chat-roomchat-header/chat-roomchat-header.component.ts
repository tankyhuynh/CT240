import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-roomchat-header',
  templateUrl: './chat-roomchat-header.component.html',
  styleUrls: ['./chat-roomchat-header.component.css']
})
export class ChatRoomchatHeaderComponent implements OnInit {

  imgPath = "http://localhost:3000/images/img.jpg";
  @Input() username: string;

  constructor() { }

  ngOnInit(): void {
  }

}
