import { HttpClient, HttpHeaders } from "@angular/common/http";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Subject } from "rxjs";

import { environment } from '../../environments/environment';
import { UserData } from "../auth/user.model";
import { SharingService } from "../sharing.service";


const BACKEND_URL = environment.apiUrl + "/profiles/";

@Injectable()
export class ProfileService {

  private currentUserLogin: UserData;

  private userSource = new BehaviorSubject<UserData>(null);
  currentUserObservable = this.userSource.asObservable();

  private userStatusListener = new Subject<UserData>();
  getUserStatusListener(){
    return this.userStatusListener.asObservable();
  }


  getCurrentUserLogin(){
    return this.currentUserLogin;
  }


  constructor(private http: HttpClient, private router: Router){};

  getOneById(id: string) {
    let reponseUser: UserData;
    this.http
      .get<{name: string, avatar: string}>(BACKEND_URL + id)
      .subscribe((response) => {
        console.log("In profile service");
        console.log(response);
        reponseUser = {
          name: response.name,
          avatar: response.avatar,
          password: "",
          phone: ""
        };
        this.currentUserLogin = reponseUser;
        this.userStatusListener.next(this.currentUserLogin);

      }, error => {
        console.log(error);
      });

  }




}
