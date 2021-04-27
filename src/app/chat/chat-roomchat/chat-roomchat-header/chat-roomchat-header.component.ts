import { Component, Input, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';

@Component({
  selector: 'app-chat-roomchat-header',
  templateUrl: './chat-roomchat-header.component.html',
  styleUrls: ['./chat-roomchat-header.component.css'],
})
export class ChatRoomchatHeaderComponent implements OnInit {
  imgPath = 'http://localhost:3000/images/img.jpg';
  @Input() username: string;

  show: boolean = false;

  constructor(private showContent: SharingService) {}

  ngOnInit(): void {}

  onClickShowContent() {
    this.showContent.showContentMobile.subscribe(
      (isShow) => (this.show = isShow)
    );
    this.showContent.changeShowValue(!this.show);
  }
}
