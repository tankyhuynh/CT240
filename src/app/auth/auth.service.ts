import { HttpClient } from '@angular/common/http';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';
import { ProfileModel } from '../personal-information/profile.model';
import { ProfileService } from '../personal-information/profile.service';
import { SharingService } from '../sharing.service';
import { AuthData } from './auth.model';
import { UserData } from './user.model';

const BACKEND_URL = environment.apiUrl + '/users/';

@Injectable({ providedIn: 'root' })
export class AutheService {
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private reloginStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private userId: string;
  private userData: UserData;

  getUserId() {
    return this.userId;
  }

  getToken() {
    return this.token;
  }

  getReloginStatusListener() {
    return this.reloginStatusListener.asObservable();
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private profileService: ProfileService,
    private sharingService: SharingService
  ) {}

  createUser(name: string, phone: string, password: string, avatar: string) {
    const authData: UserData = {
      name: name,
      phone: phone,
      password: password,
      avatar: avatar,
    };
    this.http.post(BACKEND_URL + 'register', authData).subscribe(
      () => {
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        this.authStatusListener.next(false);
        this.router.navigate(['/auth/signup']);
      }
    );
  }

  confirmLogin(phone: string, password: string) {
    const authData: AuthData = { phone: phone, password: password };
    return this.http
      .post<{ data: { _id: string; token: string; expiresIn: number } }>(
        BACKEND_URL + 'login',
        authData
      )
  }

  login(mobilePhone: string, password: string) {
    const authData: AuthData = { phone: mobilePhone, password: password };
    this.http
      .post<{ data: { _id: string; token: string; expiresIn: number } }>(
        BACKEND_URL + 'login',
        authData
      )
      .subscribe(
        (response:any) => {
          this.token = response.data.token;

          if (this.token) {
            const expiresInDuration = response.data.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.userId = response.data._id;

            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000 * 60
            );

            this.profileService
                  .getOneById(this.userId)
                  .subscribe( (response:any) => {
                    const userData = response.data;

                    this.profileService.changeUserStatusListerner(response.data);
                    this.sharingService.changeUserData(response.data);
                    // console.log("change user data work!!!");
                    this.sharingService.currentUserData
                          .subscribe((user) => {
                            // console.log(user);
                          });

                    this.saveDataToLocalStorage(
                      this.token,
                      expirationDate,
                      this.userId,
                      userData
                    );



                  });

            this.router.navigate(['/chat']);
          }
        },
        (err) => {
          this.router.navigate(['/auth/login']);
        }
      );
    return false;
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.userId = null;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearLocalStorage();
    this.router.navigate(['/auth/login']);
  }

  private saveDataToLocalStorage(
    token: string,
    expiration: Date,
    userId: string,
    userData: ProfileModel
  ) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expiration.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  private clearLocalStorage() {
    localStorage.clear();
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000 * 60);
    // console.log('Setting timer: ' + duration);
  }

  autoAuthUser() {
    const authInformation = this.getLocalStorageData();
    if (!authInformation) {
      return;
    }

    const now = new Date();
    const expiredIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiredIn > 0) {
      this.token = authInformation.token;
      this.userId = authInformation.userId;

      this.isAuthenticated = true;
      this.setAuthTimer(expiredIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private getLocalStorageData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    let userInLocal = JSON?.parse(localStorage.getItem('userData'));

    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
      userData: this.userData
    };
  }
}
