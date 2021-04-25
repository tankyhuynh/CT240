import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AutheService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;
  private authStatusSub: Subscription;

  form: FormGroup;

  constructor(public authSevice: AutheService) { }

  ngOnInit(): void {
    this.authStatusSub = this.authSevice.getAuthStatusListener()
          .subscribe(authStatus => {

          });

    this.form = new FormGroup({
      'phone': new FormControl(null, {
        validators: [Validators.required]}),
      'password': new FormControl(null, {
        validators: [Validators.required]
      })

    });
  }

  onLogin(){
    if (this.form.invalid) {
      return;
    }
    this.authSevice.login(this.form.value.phone, this.form.value.password);
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

}
