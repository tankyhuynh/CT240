import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

import { environment } from "../../../../environments/environment";
import { ContactAddFriendModel } from './contact-add-friend.model';

// Chỗ này lấy tạm path của profiles, cần path friends
const BACKEND_URL_PROFILE = environment.apiUrl + "/profiles/";
const BACKEND_URL = environment.apiUrl + "/requests/";

@Injectable({providedIn: 'root'})
export class ContactAddFriendService {

  private friend: ContactAddFriendModel;

  constructor(private http: HttpClient, private router: Router){};

  getOneById(friendId: string){
    return this.http
          .get<{data:{_id: string,
              name: string,
              phone: string,
              avatar: string}}>
          (BACKEND_URL_PROFILE + friendId);
  }

  saveOne(friendId: string, introduce: string) {
    return this.http
      .post(BACKEND_URL,
             {receiver: friendId,
              introduce: introduce});
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
