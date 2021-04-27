import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css'],
})
export class ChatMenuComponent implements OnInit {
  imgPath = 'http://localhost:3000/images/img.jpg';

  users = ['user1', 'user2', 'user3'];

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
