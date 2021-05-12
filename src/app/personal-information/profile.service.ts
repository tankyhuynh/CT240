import { HttpClient, HttpHeaders } from "@angular/common/http";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Subject } from "rxjs";

import { environment } from '../../environments/environment';
import { UserData } from "../auth/user.model";
import { SharingService } from "../sharing.service";
import { ProfileModel } from "./profile.model";


const BACKEND_URL = environment.apiUrl + "/profiles/";

@Injectable()
export class ProfileService {

  private currentUserLogin: ProfileModel;

  private userSource = new BehaviorSubject<UserData>(null);
  currentUserObservable = this.userSource.asObservable();

  private userStatusListener = new Subject<ProfileModel>();
  getUserStatusListener(){
    return this.userStatusListener.asObservable();
  }


  getCurrentUserLogin(){
    return this.currentUserLogin;
  }


  constructor(private http: HttpClient, private router: Router){};

  getProfile(){
    return this.http
            .get(BACKEND_URL);
  }

  findProfileOf(id: string){
    return this.http.get(BACKEND_URL+ id);
  }

  getOneById(id: string) {
    let reponseUser: ProfileModel;
    return this.http
      .get<{data: ProfileModel}>(BACKEND_URL + id)
      .subscribe((response) => {
        reponseUser = {
          name: response.data.name,
          avatar: response.data.avatar,
        };
        // this.currentUserLogin = reponseUser;
        // this.userStatusListener.next(this.currentUserLogin);
        this.changeUserProfileInLocalStorage(reponseUser);

      }, error => {
        console.log(error);
      });

  }

  changeUserProfileInLocalStorage(profile: ProfileModel){
    this.currentUserLogin = profile;
    this.userStatusListener.next(this.currentUserLogin);
  }


  updateInfo(id: string, name: string, image: File){
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", image);
    let reponseUser: ProfileModel;
    return this.http
          .put(BACKEND_URL, formData);

  }




}
