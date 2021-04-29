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

  @Input() currentUser: UserData;
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

    this.profileService.currentUserObservable.subscribe(
      (currentUser) => this.currentUser = currentUser
    );
    console.log(this.currentUser);

    this.authListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        this.isUserAuthenticated = isAuth;
      });
  }

  onClick() {
    this.router.navigate(['/']);
  }

  onLogout() {
    this.sharingService.changeMenuItems([
      ['msg1', '/chat/chat1'],
      ['msg2', '/chat/chat2'],
    ]);
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }

  showMenuMobile() {
    this.menuMobile = true;
  }
}
