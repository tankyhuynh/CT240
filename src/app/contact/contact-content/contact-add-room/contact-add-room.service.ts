import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'

import { environment } from "../../../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/group/";

@Injectable({providedIn: 'root'})
export class ContactListGroupService {

}
