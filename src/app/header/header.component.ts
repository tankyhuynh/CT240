import { Component, OnDestroy, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Subscription } from "rxjs";
import { AutheService } from "../auth/auth.service";
import { SharingService } from "../sharing.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserAuthenticated = false;
  private authListenerSub: Subscription;

  username: string;

  imgPath = "http://localhost:3000/images/img.jpg";

  constructor(private authService: AutheService, private router: Router, private sharingService: SharingService ){};

  ngOnInit(){
    this.isUserAuthenticated = this.authService.getIsAuthenticated();

    this.authListenerSub = this.authService
                  .getAuthStatusListener()
                  .subscribe(isAuth => {
                    this.username = this.authService.getUsername();
                    this.isUserAuthenticated = isAuth;
                  });
  }

  onClick(){
    this.router.navigate(['/']);
  }

  onLogout(){
    this.sharingService.changeMessage([['msg1', '/message/message1'], ['msg2', '/message/message2']]);
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authListenerSub.unsubscribe();
  }

}
