import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(public authSevice: AutheService) { }

  ngOnInit(): void {
    this.authStatusSub = this.authSevice.getAuthStatusListener()
          .subscribe(authStatus => {

          });
  }

  onLogin(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.authSevice.login(form.value.mobilePhone, form.value.password);
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

}
