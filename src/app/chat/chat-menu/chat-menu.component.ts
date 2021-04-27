import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css']
})
export class ChatMenuComponent implements OnInit {

  imgPath = "http://localhost:3000/images/img.jpg";

  users = ['user1', 'user2', 'user3'];

  constructor() { }

  ngOnInit(): void {
  }

}
