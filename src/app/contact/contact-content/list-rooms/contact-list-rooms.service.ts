import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'

import { environment } from "../../../../environments/environment";
import { ContactListRoomModel } from './contact-list-rooms.model';

const BACKEND_URL = environment.apiUrl + "/rooms/";

@Injectable({providedIn: 'root'})
export class ContactListRoomService {

  private rooms: ContactListRoomModel;

  constructor(private http: HttpClient, private router: Router){};

  getAll() {
    return this.http
      .get(BACKEND_URL);

  }

  getOneById(roomId: string) {
    return this.http
      .get<{
        rooms: ContactListRoomModel[]
      }>(BACKEND_URL + roomId);
  }

  saveOne(room: ContactListRoomModel) {
    return this.http
      .post(BACKEND_URL, room);
  }

  update(id: string, room: ContactListRoomModel){
    this.http
          .put(BACKEND_URL + id, room);
  }

  delete(id: string){
    return this.http
            .delete(BACKEND_URL + id);
  }


}
