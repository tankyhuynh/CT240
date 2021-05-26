import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { AutheService } from '../auth/auth.service';
import { MessageModel } from '../chat/chat-roomchat/chat-roomchat-message.model';

import {VCallAPI}  from './VCall.model'


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  message: string = "Hello from TanKy";

  private url = 'http://localhost:3000';
  private socket;

  newMessage: MessageModel;

  signal = {
    on: (handle) => {
        this.socket.on("vCall" , handle);
    },
    emit: (data) => {
      this.socket.emit("vCall" ,data);
    }
  }

  vCallAPI = new VCallAPI(this.signal, "http://localhost:3000/public/vcall/index.html");


  constructor(private authService: AutheService) {}

  setUpConnnection(){
    const token = this.authService.getToken();
    this.socket = io(this.url, {auth: {token: token}});
  }

  // Message
  sendMessage(room: string, data:any) {
    const DATA = {
      content: data
    };
    if (DATA?.content === '') {
      return;
    }
    this.socket.emit('message:send', {room: room, data: DATA});
    this.socket.on('message:receive', (data) => {
      this.newMessage = data;
      console.log(this.newMessage);
    });
    this.message = '';
  }

  sendImage(room: string, url: string) {
    const DATA = {
      url: url
    };
    this.socket.emit('message:send', {room: room, data: DATA});
    this.socket.on('message:receive', (data) => {
      this.newMessage = data;
      console.log(this.newMessage);
    });
    this.message = '';
  }

  public onMessage(): Observable<MessageModel> {
    return new Observable<MessageModel>(observer => {
        this.socket.on('message:receive', (data: MessageModel) => {
          console.log("respones in socket receive message: ");
          console.log(data);
          observer.next(data)
        });
    });
}



//Listen new video call receive
onNewVideoCall(){
  return new Observable<MessageModel>(observer => {
    this.socket.on("call:new", data=>{
      console.log(`from ${data?.from}`);
       this.vCallAPI.createReceiveView(data.from);
     })
});


}

//Create new video call request
createNewVideoCall(to: string){
  this.socket.emit("call:new", {to});
    console.log(`to ${to}`);
    this.vCallAPI.createCallView(to);

}




}
