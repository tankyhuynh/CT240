import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-chat-roomchat-send',
  templateUrl: './chat-roomchat-send.component.html',
  styleUrls: ['./chat-roomchat-send.component.css']
})
export class ChatRoomchatSendComponent implements OnInit {

  @Input() roomId: string;

  @ViewChild("message") message: ElementRef<any>;

  constructor(
    private socketService: SocketService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  sendMessage(data: string){
    this.socketService.sendMessage(this.roomId, data);
    this.message.nativeElement.value = "";
  }

}
