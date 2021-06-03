import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';

@Component({
  selector: 'app-contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.css'],
})
export class ContactMenuComponent implements OnInit {
  hide: boolean = false;

  constructor(private hideContent: SharingService) {}

  ngOnInit(): void {}

  onClickHideContent() {
    this.hideContent.showContentMobile.subscribe(
      (isHide) => (this.hide = isHide)
    );
    this.hideContent.changeShowValue(false);
    // console.log(this.hide);
  }
}
