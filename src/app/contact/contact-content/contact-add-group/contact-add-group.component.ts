import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';

@Component({
  selector: 'app-contact-add-group',
  templateUrl: './contact-add-group.component.html',
  styleUrls: ['../contact-content.component.css'],
})
export class ContactAddGroupComponent implements OnInit {
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
