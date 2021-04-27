import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';
import { AutheService } from '../auth/auth.service';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserAuthenticated = false;
  menuMobile = false;

  private authListenerSub: Subscription;

  username: string;

  items = [
    ['Tin nhắn', 'chat'],
    ['Danh bạ', 'contact'],
    ['Chỉnh sửa', 'personal-information'],
  ];

  imgPath = 'http://localhost:3000/images/img.jpg';

  constructor(
    private authService: AutheService,
    private router: Router,
    private sharingService: SharingService
  ) {}

  ngOnInit() {
    this.isUserAuthenticated = this.authService.getIsAuthenticated();

    this.authListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        this.username = this.authService.getUsername();
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
