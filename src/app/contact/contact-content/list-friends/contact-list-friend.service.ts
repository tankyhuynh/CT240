import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'

import { environment } from "../../../../environments/environment";
import { ListFriendModel } from './list-friend.model';

const BACKEND_URL = environment.apiUrl + "/friends/";

@Injectable({providedIn: 'root'})
export class ContactListFriendService {

  private listFriends: ListFriendModel;

  constructor(private http: HttpClient, private router: Router){};

  getAll() {
    return this.http
      .get<{
        listFriend: ListFriendModel[]
      }>(BACKEND_URL);

  }

  getOneById(userId: string) {
    return this.http
      .get<{
        listAddFriend: ListFriendModel[]
      }>(BACKEND_URL + userId);
  }

  saveOne(friend: ListFriendModel) {
    return this.http
      .post(BACKEND_URL, friend);
  }

  update(id: string, friend: ListFriendModel){
    this.http
          .put(BACKEND_URL + id, friend);
  }

  delete(id: string){
    return this.http
            .delete(BACKEND_URL + id);
  }

}
