import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutheService } from '../auth/auth.service';
import { ProfileService } from '../personal-information/profile.service';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-relogin',
  templateUrl: './relogin.component.html',
  styleUrls: ['./relogin.component.css']
})
export class ReloginComponent implements OnInit {

  isLoginSuccess: boolean;

  form: FormGroup;
  @ViewChild("closeButton") closeButton: ElementRef<any>;

  constructor(
    private route: Router,
    public authSevice: AutheService,
    public profileService: ProfileService,
    private sharingService: SharingService,
    private dialogRef: MatDialogRef<ReloginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {message: string}) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'phone': new FormControl(null, {
        validators: [Validators.required]}),
      'password': new FormControl(null, {
        validators: [Validators.required]
      })

    });
  }

  // Những cái liên quan đến subscribe thì xảy ra bất đồng bộ
  // nên muốn làm j thì nên làm trong subscribe luôn chứ đừng ra ngoài nó
  onLogin(){
    if (this.form.invalid) {
      return;
    }
    this.authSevice.confirmLogin(this.form.value.phone, this.form.value.password);

    this.sharingService.currentReloginStatus.subscribe(isRelogin => {
      this.isLoginSuccess = isRelogin;

      if (this.isLoginSuccess) {
        this.dialogRef.close();
      }
      else {

      }


    });
  }


  onCancel(){
    this.route.navigate(['/']);
    this.dialogRef.close();
  }

  ngOnDestroy(){

  }

}
