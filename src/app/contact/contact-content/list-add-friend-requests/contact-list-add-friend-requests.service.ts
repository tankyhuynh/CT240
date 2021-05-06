import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Router } from '@angular/router'

import { environment } from "../../../../environments/environment";
import { ListAddFriendRequestModel } from './contact-list-add-friend-requests.model';

const BACKEND_URL = environment.apiUrl + "/requests/";

@Injectable({providedIn: 'root'})
export class ContactListAddFriendService {

  listAddFriendRequest: ListAddFriendRequestModel[];

  constructor(private http: HttpClient, private router: Router){};

  getAll() {
    return this.http
      .get<{friendRequests: []
      }>(BACKEND_URL);
  }

  getOneById(userId: string) {
    return this.http
      .get<{
        listAddFriend: ListAddFriendRequestModel[]
      }>(BACKEND_URL + userId);
  }

  saveOne(addFriendRequest: ListAddFriendRequestModel) {
    return this.http
      .post(BACKEND_URL, addFriendRequest);
  }

  update(id: string, addFriendRequest: ListAddFriendRequestModel){
    this.http
          .put(BACKEND_URL + id, addFriendRequest);
  }

  delete(id: string){
    return this.http
            .delete(BACKEND_URL + id);
  }

  isAcceptFriendRequest(id: string, isAccept: boolean){
    return this.http
          .put(BACKEND_URL + id,
                {accept: isAccept});
  }

  deleteFriendRequest(id: string){
    return this.http
                .delete(BACKEND_URL + id);
  }

}
