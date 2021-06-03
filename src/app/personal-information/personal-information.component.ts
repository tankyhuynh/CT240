import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from './profile.service';

import { UserData } from '../auth/user.model'
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';
import { ReloginComponent } from '../relogin/relogin.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mimeType } from '../auth/signup/mime-type.validator';
import { ProfileModel } from './profile.model';
import { Router } from '@angular/router';
import { windowCount } from 'rxjs/operators';
import { AccountService } from './account.service';
import { profile } from 'node:console';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: [ProfileService, AccountService]
})
export class PersonalInformationComponent implements OnInit {

  userId: string = localStorage.getItem('userId');
  phone: string = localStorage.getItem('phone');

  profile: ProfileModel;

  isDiable: boolean = true;
  isLoadingProfileProcess: boolean = false;
  isLoadingPassProcess: boolean = false;
  isChangProfileSuccess: boolean = false;
  isChangePassSuccessed: boolean = false;

  imageURL: string;
  form: FormGroup;
  initialValue: any;

  @ViewChild("username") username: ElementRef<any>;
  @ViewChild("password") password: ElementRef<any>;
  defaultPlaceHolderText = ["Mật khẩu mới", "Xác nhận mật khẩu"];

  private tokenTimer: any;

  @ViewChild(ReloginComponent)
  public reLoginComponent: ReloginComponent;


  constructor(
    private profileService: ProfileService,
    private accountService: AccountService,
    private sharingService: SharingService,
    private dialog: MatDialog,
    private route: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    const dialogRef = this.dialog.open(ReloginComponent, {disableClose: true});

    this.form = new FormGroup({
      'name': new FormControl({value: null, disabled: true}, {
        validators: [Validators.required]
      }),
      'avatar': new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })

    });

    this.profileService
            .getProfile()
            .subscribe( (response:any) => {
              this.profile = response.data;

              this.form = new FormGroup({
                'name': new FormControl({value: response.data?.name, disabled: true}, {
                  validators: [Validators.required]
                }),
                'avatar': new FormControl(null, {
                  validators: [Validators.required],
                  asyncValidators: [mimeType]
                })

              });


            });

  }

  changeDiableStatus(){
    this.isDiable = !this.isDiable;
    if (!this.isDiable) {
      this.form.get('name').enable();
      this.username.nativeElement.focus();
    }
    else {
      this.defaultPlaceHolderText = ["Mật khẩu mới", "Xác nhận mật khẩu"];

      this.resetForm(this.profile.name);
      this.form.get('name').disable();

    }
  }

  resetForm(name: string){
    this.form.patchValue({name: name});
    this.form.get('name').updateValueAndValidity();

    this.form.patchValue({avatar: null});
    this.form.get('avatar').updateValueAndValidity();
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

  updateInfo(){
    // console.log("Updated info worked!!");
    this.isLoadingProfileProcess = true;
    this.profileService
          .updateInfo(this.userId, this.form.value.name, this.form.value.avatar)
          .subscribe( (response:any) => {
            this.changeDiableStatus();

            this.isChangProfileSuccess = true;
            this.setMessageChangeProfileSuccess(2);

            // console.log(response.data);
            this.isLoadingProfileProcess = false;
            const newProfile = {
              name: response.data.name,
              avatar: response.data.avatar
            }

            this.profileService.changeUserStatusListerner(response.data);
            this.sharingService.changeUserData(response.data);
            localStorage.setItem('userData', JSON.stringify(response.data));

            this.resetForm(newProfile?.name);
            this.form.get('name').disable();

          } );
  }

  changePassword(){
    this.isLoadingPassProcess = true;
    this.accountService
          .changePassword(this.password.nativeElement.value)
          .subscribe( (response:any) => {
            this.isLoadingPassProcess = false;
            this.isChangePassSuccessed = true;
            this.setMessageChangPassSuccess(2);

          });
  }

  private setMessageChangeProfileSuccess(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.isChangProfileSuccess = false;
    }, duration * 1000);
    // console.log('Setting timer alert message: ' + duration);
  }

  private setMessageChangPassSuccess(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.isChangePassSuccessed = false;
    }, duration * 1000);
    // console.log('Setting timer alert message: ' + duration);
  }

}
