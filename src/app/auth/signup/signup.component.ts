import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { repeatWhen } from 'rxjs/operators';
import { AutheService } from '../auth.service';
import { mimeType } from './mime-type.validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  isLoading = false;
  private authStatusSub: Subscription;

  form: FormGroup;

  imageURL: string;

  constructor(public authService: AutheService) { }

  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener()
          .subscribe(authStatus => {

          });

  this.form = new FormGroup({
    'name': new FormControl(null, {
      validators: [Validators.required, Validators.minLength(3)]}),
    'phone': new FormControl(null, {
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]}),
    'password': new FormControl(null, {
      validators: [Validators.required]
    }),
    'repassword': new FormControl(null, {
      validators: [Validators.required]
    }),
    'avatar': new FormControl("https://images.pexels.com/photos/4397900/pexels-photo-4397900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", {
      validators: [Validators.required],
      asyncValidators: [mimeType]
    })
  });
  }


  onSignup(){
    if(this.form.invalid){
      // console.log("Invalid form !!!!");
      return;
    }
    if(this.form.value.password !== this.form.value.repassword){
      // console.log("Password not mat ched !!!!");
      return ;
    }
    this.authService
          .createUser(
            this.form.value.name,
            this.form.value.phone,
            this.form.value.password,
            this.form.value.avatar );

  }

  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('avatar').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

}
