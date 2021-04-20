import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  constructor(private sharingService: SharingService) {
    const items = [['Personal Information 1', '/add-friend/func1'], ['Personal Information 2', '/add-friend/func2']];
    localStorage.setItem("menuItems", JSON.stringify(items));
    this.sharingService.changeMenuItems(items);
   }

  ngOnInit(): void {
  }

}
