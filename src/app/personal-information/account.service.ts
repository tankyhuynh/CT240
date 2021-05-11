import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


import { environment } from '../../environments/environment';

import { ProfileModel } from "./profile.model";


const BACKEND_URL = environment.apiUrl + "/accounts/";

@Injectable()
export class AccountService {

  constructor(private http: HttpClient, private router: Router){};


  changePassword(password: string){
    const formData = new FormData();
    formData.append("password", password);
    let reponseUser: ProfileModel;
    return this.http
          .put(BACKEND_URL, {password: password});

  }




}
