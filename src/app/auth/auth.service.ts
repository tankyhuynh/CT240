import { HttpClient } from "@angular/common/http";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Subject } from "rxjs";

import { environment } from '../../environments/environment';
import { SharingService } from "../sharing.service";
import { AuthData } from "./auth.model";
import { UserData } from "./user.model";

const BACKEND_URL = environment.apiUrl + "/users/";

@Injectable({providedIn: 'root'})
export class AutheService {

  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private userId: string;

  private username: string;

  getUsername(){
    return this.username;
  }

  getUserId(){
    return this.userId;
  }

  getToken(){
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }


  getIsAuthenticated(){
    return this.isAuthenticated;
  }

  constructor(private http: HttpClient, private router: Router){}

  createUser(name: string, phone: string, password: string) {
    const authData: UserData = {name: name, phone: phone, password: password };
    this.http
      .post(BACKEND_URL + "register", authData)
      .subscribe(() => {
        this.router.navigate(['/auth/login']);
      }, error => {
        this.authStatusListener.next(false);
        this.router.navigate(['/auth/signup']);
      });
  }

  login(mobilePhone: string, password: string){

    const authData: AuthData = {phone: mobilePhone, password: password};
    this.http
          .post<{token: string, expiresIn: number, userId: string, phone: string}>(BACKEND_URL + "login", authData)
            .subscribe(response => {
              console.log("Success");
              const token = "asdasd";
              console.log(response);
              this.token = "asdasdas";
              if ( true ) {
                console.log("In iff");
                const expiresInDuration =  response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.userId;

                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + (expiresInDuration * 1000));
                this.saveDataToLocalStorage(token, expirationDate, response.userId, mobilePhone);
                console.log(expirationDate);
                console.log(".......");
                this.router.navigate(['/']);
              }
            }, err => {
              console.log("Errrr");
              this.router.navigate(['/auth/login']);
            });
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.userId = null;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearLocalStorage();
    // this.email = null;
    this.router.navigate(['/auth/login']);
    // this.sharingService.changeMessage([['msg1', '/chat/chat1'], ['msg2', '/chat/chat2']]);
  }

  private saveDataToLocalStorage(token: string, expiration: Date, userId: string, email: string){
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expiration.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('email', email);
  }

  private clearLocalStorage(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
  }

  private setAuthTimer(duration: number){
    this.tokenTimer = setTimeout( () => {
      this.logout();
    }, duration * 1000);
    console.log("Setting timer: " + duration);
  }

  autoAuthUser(){
    const authInformation = this.getLocalStorageData();

    console.log("Auto Auth");
    console.log(authInformation);

    if (!authInformation) {
      return;
    }

    const now = new Date();
    const expiredIn = authInformation.expirationDate.getTime() - now.getTime();
    if ( expiredIn > 0 ) {
      this.token = authInformation.token;
      this.userId = authInformation.userId;


      this.isAuthenticated = true;
      this.setAuthTimer( expiredIn/1000 );
      this.authStatusListener.next(true);

    }
  }

  private getLocalStorageData(){
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    const email = localStorage.getItem('email');
    if ( !token || !expirationDate ) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
      email: email
    }
  }



}
