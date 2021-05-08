import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-chat-roomchat-send',
  templateUrl: './chat-roomchat-send.component.html',
  styleUrls: ['./chat-roomchat-send.component.css']
})
export class ChatRoomchatSendComponent implements OnInit {

  @Input() roomId: string;

  constructor(
    private socketService: SocketService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  sendMessage(data: string){
    this.socketService.sendMessage(this.roomId, data);
  }

}
