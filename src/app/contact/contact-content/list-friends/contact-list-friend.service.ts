import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Router } from '@angular/router'

import { environment } from "../../../../environments/environment";
import { FriendModel } from './friend.model';

const BACKEND_URL = environment.apiUrl + "/friends/";

@Injectable({providedIn: 'root'})
export class ContactListFriendService {

  private listFriends: FriendModel[];

  constructor(private http: HttpClient, private router: Router){};

  getAll(): Observable<FriendModel[]> {
    return this.http
      .get<FriendModel[]>
      (BACKEND_URL).pipe(delay(1000));

  }

  getOneById(userId: string) {
    return this.http
      .get<{
        listAddFriend: FriendModel[]
      }>(BACKEND_URL + userId);
  }

  saveOne(friend: FriendModel) {
    return this.http
      .post(BACKEND_URL, friend);
  }

  update(id: string, friend: FriendModel){
    this.http
          .put(BACKEND_URL + id, friend);
  }

  delete(id: string){
    return this.http
            .delete(BACKEND_URL + id);
  }

}
