import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  imgPath = "http://localhost:3000/images/img.jpg";

  constructor(private sharingService: SharingService) {
    const items = [['List add friends', '/contact/list-add-friends'],['List friends', '/contact/list-friends'] ,['List groups', '/contact/list-groups']];
    this.sharingService.changeMenuItems(items);
    sharingService.changeMenuClass("contact");
  }

  ngOnInit(): void {
  }

}
