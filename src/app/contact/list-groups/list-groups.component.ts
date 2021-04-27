import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['../contact.component.css','./list-groups.component.css']
})
export class ListGroupsComponent implements OnInit {
  valShowContactContent = false;
  valShowAddFriendsContent = false;

  imgPath = "http://localhost:3000/images/img.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  contactContent() {
    this.valShowContactContent = !this.valShowContactContent;
  }

  addFriendsContent() {
    this.valShowAddFriendsContent = !this.valShowAddFriendsContent;
  }
}
