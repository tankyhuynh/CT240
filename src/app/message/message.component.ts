import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  valShowMessContent = false;
  imgPath = "http://localhost:3000/images/img.jpg";

  users = ["User 1", "User 2", "User 3", "User 4"];

  items: string[][];

  constructor(private sharingService: SharingService) {
    const items = [['msg1', ''], ['msg2', '']];
    this.sharingService.changeMenuItems(items);
    sharingService.changeMenuClass('message');
   }

  ngOnInit(): void {
  }

  messContent() {
    this.valShowMessContent = !this.valShowMessContent;
  }
}
