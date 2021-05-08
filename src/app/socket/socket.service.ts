import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { AutheService } from '../auth/auth.service';
import { MessageModel } from '../chat/chat-roomchat/chat-roomchat-message.model';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  message: string = "Hello from TanKy";

  private url = 'http://localhost:3000';
  private socket;

  newMessage: MessageModel;

  constructor(private authService: AutheService) {}

  setUpConnnection(){
    const token = this.authService.getToken();
    this.socket = io(this.url, {auth: {token: token}});

  }

  public getMessages = () => {
    return Observable.create((observer) => {
            this.socket.on('message:receive', (message) => {
                observer.next(message);
            });
    });
}

  sendMessage(room: string, data: string) {
    this.socket.emit('message:send', {room: room, data: data});
    this.socket.on('message:receive', (data) => {
      this.newMessage = data;
      console.log(this.newMessage);
    });
    this.message = '';
  }



}
