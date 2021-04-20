import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  imgPath = "http://localhost:3000/images/img.jpg";

  constructor(private sharingService: SharingService) {
    const items = [['msg1', '/message/message1'], ['msg2', '/message/message2']];
    localStorage.setItem("menuItems", JSON.stringify(items));
    this.sharingService.changeMessage(items);
   }

  ngOnInit(): void {
  }

}
