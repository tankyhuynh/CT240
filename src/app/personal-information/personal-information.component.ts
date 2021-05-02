import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from './profile.service';

import { UserData } from '../auth/user.model'
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';
import { ReloginComponent } from '../relogin/relogin.component';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: [ProfileService]
})
export class PersonalInformationComponent implements OnInit {

  userData: UserData;
  isDiable: boolean = true;

  @ViewChild("username") username: ElementRef<any>;
  defaultPlaceHolderText = ["Mật khẩu mới", "Xác nhận mật khẩu"];

  constructor(
    private profileService: ProfileService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'))
    console.log(this.userData);
    const dialogRef = this.dialog.open(ReloginComponent);

  }

  changeDiableStatus(){
    this.isDiable = !this.isDiable;
    if (!this.isDiable) {
      this.username.nativeElement.focus();
      // this.defaultPlaceHolderText[0] = this.defaultPlaceHolderText[1] = "";
    }
    else this.defaultPlaceHolderText = ["Mật khẩu mới", "Xác nhận mật khẩu"];
  }

}
