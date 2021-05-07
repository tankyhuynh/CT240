import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  message: string = "Hello from TanKy";

  private url = 'http://localhost:3000';
  private socket;

  private token: string = localStorage.getItem('token');

  constructor() {
    this.socket = io(this.url, {auth: {token: this.token}});
    console.log(this.socket);
    console.log(`token ${this.token}`);
  }


  sendMessage(data) {
    this.socket.emit('message:send', data);
    this.message = '';
  }
}
