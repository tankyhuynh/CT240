import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from './profile.service';

import { UserData } from '../auth/user.model'
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';
import { ReloginComponent } from '../relogin/relogin.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mimeType } from '../auth/signup/mime-type.validator';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: [ProfileService]
})
export class PersonalInformationComponent implements OnInit {

  userId: string = localStorage.getItem('userId');
  userData: UserData;
  isDiable: boolean = true;

  imageURL: string;
  form: FormGroup;

  @ViewChild("username") username: ElementRef<any>;
  defaultPlaceHolderText = ["Mật khẩu mới", "Xác nhận mật khẩu"];

  constructor(
    private profileService: ProfileService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'))
    console.log(this.userData);
    const dialogRef = this.dialog.open(ReloginComponent, {disableClose: true});

    this.form = new FormGroup({
      'avatar': new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })

    });

  }

  changeDiableStatus(){
    this.isDiable = !this.isDiable;
    if (!this.isDiable) {
      this.username.nativeElement.focus();
      // this.defaultPlaceHolderText[0] = this.defaultPlaceHolderText[1] = "";
    }
    else this.defaultPlaceHolderText = ["Mật khẩu mới", "Xác nhận mật khẩu"];
  }


  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({avatar: file});
    this.form.get('avatar').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  updateAvatar(){

    console.log("avatar");
    console.log(this.form.value.avatar);
    this.profileService
          .updateAvatar(this.userId, this.userData.name, this.form.value.avatar)
          .subscribe( (reponse:any) => {
            console.log(reponse);
          });
  }

}
