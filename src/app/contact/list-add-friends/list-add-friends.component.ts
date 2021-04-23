import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-add-friends',
  templateUrl: './list-add-friends.component.html',
  styleUrls: ['../contact.component.css']
})
export class ListAddFriendsComponent implements OnInit {
  valShowContactContent = false;

  imgPath = "http://localhost:3000/images/img.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  contactContent() {
    this.valShowContactContent = !this.valShowContactContent;
  }

}
