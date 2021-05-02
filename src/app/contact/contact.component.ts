import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private sharingService: SharingService) {}

  ngOnInit(): void {
  }


}
