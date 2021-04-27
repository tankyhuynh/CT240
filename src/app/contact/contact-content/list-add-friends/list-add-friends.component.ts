import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';

@Component({
  selector: 'app-list-add-friends',
  templateUrl: './list-add-friends.component.html',
  styleUrls: ['../contact-content.component.css'],
})
export class ListAddFriendsComponent implements OnInit {
  valHideContactContent = false;

  imgPath = 'http://localhost:3000/images/img.jpg';

  constructor(private hideContent: SharingService) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
