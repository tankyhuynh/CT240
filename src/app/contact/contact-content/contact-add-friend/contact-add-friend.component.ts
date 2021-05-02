import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';
import { ContactAddFriendService } from './contact-addfriend.service';

@Component({
  selector: 'app-contact-add-friend',
  templateUrl: './contact-add-friend.component.html',
  styleUrls: ['../contact-content.component.css'],
  providers: [ContactAddFriendService]
})
export class ContactAddFriendComponent implements OnInit {
  valHideContactContent = false;

  constructor(
    private sharingService: SharingService,
    private hideContent: SharingService,
    private addFriendService: ContactAddFriendService
  ) {}

  ngOnInit(): void {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    console.log("Addfriend service work but dont have get method");
  }

  contactContent() {
    this.hideContent.showContentMobile.subscribe(
      (hide) => (this.valHideContactContent = hide)
    );
    this.valHideContactContent = true;
  }
}
