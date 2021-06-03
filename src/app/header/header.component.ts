import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AutheService } from '../auth/auth.service';
import { SharingService } from '../sharing.service';

import { UserData } from '../auth/user.model';
import { ProfileService } from '../personal-information/profile.service';
import { ProfileModel } from '../personal-information/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isUserAuthenticated = false;
  menuMobile = false;
  @Input() socketChangeIn: string;

  private authListenerSub: Subscription;
  private userListenerSub: Subscription;

  currentUser: ProfileModel;
  userDataInLocalStorage: ProfileModel;
  tmpImgPath =
    'https://images.pexels.com/photos/4397900/pexels-photo-4397900.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

  @Input() menuItems: any;

  constructor(
    private authService: AutheService,
    private router: Router,
    private sharingService: SharingService,
    public profileService: ProfileService
  ) {}

  ngOnChanges() {
    // console.log('Data in header changed');
  }

  ngOnInit() {
    this.isUserAuthenticated = this.authService.getIsAuthenticated();

    if (localStorage.getItem('userData')) {
      this.userDataInLocalStorage = JSON.parse(
        localStorage.getItem('userData')
      );
    }

    this.authListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        this.isUserAuthenticated = isAuth;
      });

    this.sharingService.currentUserData.subscribe((currentUser) => {
      if (currentUser) {
        this.currentUser = currentUser;
      } else {
        this.userListenerSub = this.profileService
          .getUserStatusListener()
          .subscribe((userData) => {
            this.currentUser = userData;
            localStorage.setItem('userData', JSON.stringify(userData));
          });
      }
    });
  }

  onClick() {
    this.router.navigate(['/']);
  }

  onTestAuthBackend() {
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
