import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { ContactListRoomModel } from './contact-list-rooms.model';
import { RoomModel } from '../contact-add-room/contact-add-room.model';

const BACKEND_URL = environment.apiUrl + '/rooms/';

@Injectable({ providedIn: 'root' })
export class ContactListRoomService {
  private rooms: RoomModel;

  constructor(private http: HttpClient, private router: Router) {}

  getAll() {
    return this.http.get(BACKEND_URL);
  }

  getAllMessageByIdRoom(id: string){
    return this.http
          .get(BACKEND_URL+ id + "/messages") ;
  }

  getOneById(roomId: string) {
    return this.http.get<{
      rooms: ContactListRoomModel[];
    }>(BACKEND_URL + roomId);
  }

  getMembersById(roomId: string) {
    return this.http.get<{
      rooms: ContactListRoomModel[];
    }>(BACKEND_URL + roomId + "/members");
  }

  saveOne(name:string, members: string[]) {
    return this.http
                .post(
                  BACKEND_URL,
                  {name: name,
                  members: members});
  }

  update(id: string, room: RoomModel) {
    this.http.put(BACKEND_URL + id, room);
  }

  delete(id: string) {
    return this.http.delete(BACKEND_URL + id);
  }
}
