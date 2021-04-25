import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { repeatWhen } from 'rxjs/operators';
import { AutheService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  isLoading = false;
  private authStatusSub: Subscription;

  form: FormGroup;

  constructor(public authService: AutheService) { }

  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener()
          .subscribe(authStatus => {

          });

  this.form = new FormGroup({
    'name': new FormControl(null, {
      validators: [Validators.required, Validators.minLength(3)]}),
    'phone': new FormControl(null, {
      validators: [Validators.required]}),
    'password': new FormControl(null, {
      validators: [Validators.required]
    }),
    'repassword': new FormControl(null, {
      validators: [Validators.required]
    }),
  });
  }


  onSignup(){
    if(this.form.invalid){
      console.log("Invalid form !!!!");
      return;
    }
    if(this.form.value.password !== this.form.value.repassword){
      console.log("Password not mat ched !!!!");
      return ;
    }
    this.authService
          .createUser(this.form.value.name, this.form.value.phone, this.form.value.password);

  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

}
