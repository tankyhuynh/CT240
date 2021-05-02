import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AutheService } from '../auth/auth.service';
import { SharingService } from '../sharing.service';

import { UserData } from '../auth/user.model'
import { ProfileService } from '../personal-information/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() isUserAuthenticated = false;
  menuMobile = false;

  private authListenerSub: Subscription;
  private userListenerSub: Subscription;

  currentUser: UserData;
  userDataInLocalStorage: UserData;
  tmpImgPath = "https://images.pexels.com/photos/4397900/pexels-photo-4397900.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

  items = [
    ['Tin nhắn', 'chat'],
    ['Danh bạ', 'contact'],
    ['Chỉnh sửa', 'personal-information'],
  ];

  constructor(
    private authService: AutheService,
    private router: Router,
    private sharingService: SharingService,
    public profileService: ProfileService
  ) {}

  ngOnInit() {
    this.isUserAuthenticated = this.authService.getIsAuthenticated();

    if ( localStorage.getItem('userData') ) {
      this.userDataInLocalStorage = JSON.parse(localStorage.getItem('userData'))
    }

    this.authListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        this.isUserAuthenticated = isAuth;
      });

    this.userListenerSub = this.profileService
                      .getUserStatusListener()
                      .subscribe( userData => {
                        this.currentUser = userData;
                        localStorage.setItem('userData', JSON.stringify(userData));
                      });
  }

  onClick() {
    this.router.navigate(['/']);
  }

  onTestAuthBackend(){
    this.profileService.getOneById(this.authService.getUserId());
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }

  showMenuMobile() {
    this.menuMobile = true;
  }
}
