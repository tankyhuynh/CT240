import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  imgPath = "http://localhost:3000/images/img.jpg";

  constructor(private sharingService: SharingService) {
    const items = [['Addfriend 1', '/add-friend/func1'], ['Addfriend 2', '/add-friend/func2']];
    localStorage.setItem("menuItems", JSON.stringify(items));
    this.sharingService.changeMenuItems(items);
    sharingService.changeMenuClass("addfriend");
   }

  ngOnInit(): void {
  }

}
