import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['../contact.component.css']
})
export class ListGroupsComponent implements OnInit {
  valShowContactContent = false;

  imgPath = "http://localhost:3000/images/img.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  contactContent() {
    this.valShowContactContent = !this.valShowContactContent;
  }
}
