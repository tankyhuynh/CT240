import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'

import { environment } from "../../../../environments/environment";
import { RoomModel } from './contact-add-room.model';

const BACKEND_URL = environment.apiUrl + "/rooms/";

@Injectable({providedIn: 'root'})
export class ContactAddRoomService {

  constructor(private http: HttpClient, private router: Router){};

  saveOne(room: RoomModel) {
    return this.http
      .post(BACKEND_URL, room);

  }

  update(id: string, room: RoomModel){
    this.http
          .put(BACKEND_URL + id, room);
  }

  delete(id: string){
    return this.http
            .delete(BACKEND_URL + id);
  }

}
