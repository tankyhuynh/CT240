import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'

import { environment } from "../../../../environments/environment";
import { ContactAddFriendModel } from './contact-add-friend.model';

const BACKEND_URL = environment.apiUrl + "/friends/";

@Injectable({providedIn: 'root'})
export class ContactAddFriendService {

  private friend: ContactAddFriendModel;

  constructor(private http: HttpClient, private router: Router){};

  saveOne(friend: ContactAddFriendModel) {
    return this.http
      .post(BACKEND_URL, friend);
  }

  update(id: string, friend: ContactAddFriendModel){
    this.http
          .put(BACKEND_URL + id, friend);
  }

  delete(id: string){
    return this.http
            .delete(BACKEND_URL + id);
  }

}
