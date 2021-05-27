import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { Router } from '@angular/router'

import { environment } from "../../../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/images/";

@Injectable({providedIn: 'root'})
export class FileService {

  constructor(private http: HttpClient, private router: Router){};

  sendFile(image: File){
    const formData = new FormData();
    formData.append("file", image);
    return this.http
          .post(BACKEND_URL, formData);
  }

}
