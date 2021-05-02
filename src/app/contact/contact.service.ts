import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'

import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/contacts/";

@Injectable({providedIn: 'root'})
export class ContactService {

  addRoom(){

  }

  sendMessage(){

  }

  searchRoom(){

  }

  fetchRoomByUsername(username: string){
    return null;
  }

  deleteRoom(){

  }

  updateRoom(){

  }

}
