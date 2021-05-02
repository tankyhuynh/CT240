import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  message: string = "Hello from TanKy";

  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
    console.log(this.socket);
  }


  sendMessage(data) {
    this.socket.emit('message:send', data);
    this.message = '';
  }
}
