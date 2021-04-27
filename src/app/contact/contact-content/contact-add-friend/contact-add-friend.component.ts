import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';

@Component({
  selector: 'app-contact-add-friend',
  templateUrl: './contact-add-friend.component.html',
  styleUrls: ['../contact-content.component.css'],
})
export class ContactAddFriendComponent implements OnInit {
  valHideContactContent = false;

  imgPath = 'http://localhost:3000/images/img.jpg';

  constructor(
    private sharingService: SharingService,
    private hideContent: SharingService
  ) {
    const items = [
      ['Addfriend 1', '/add-friend/func1'],
      ['Addfriend 2', '/add-friend/func2'],
    ];
    localStorage.setItem('menuItems', JSON.stringify(items));
    this.sharingService.changeMenuItems(items);
    sharingService.changeMenuClass('addfriend');
  }

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
