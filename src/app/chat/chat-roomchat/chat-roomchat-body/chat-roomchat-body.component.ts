import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RoomModel } from 'src/app/contact/contact-content/contact-add-room/contact-add-room.model';
import { ContactListRoomService } from 'src/app/contact/contact-content/list-rooms/contact-list-rooms.service';
import { SharingService } from 'src/app/sharing.service';
import { SocketService } from 'src/app/socket/socket.service';
import { MessageModel } from '../chat-roomchat-message.model';

import { ChatRoomModel } from '../chatroom.model'

@Component({
  selector: 'app-chat-roomchat-body',
  templateUrl: './chat-roomchat-body.component.html',
  styleUrls: ['./chat-roomchat-body.component.css']
})
export class ChatRoomchatBodyComponent implements OnInit, AfterViewChecked {

  @Input() chatroom: RoomModel;
  @Input() messages: MessageModel[] = [];
  currentUserId: string = localStorage.getItem('userId');

  @ViewChild("scrollMe") myScroller: ElementRef<any>;

  constructor(
    private roomService: ContactListRoomService,
    private sharingService: SharingService,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.socketService
      .getMessages()
      .subscribe((message: MessageModel) => {
        this.messages.push(message);
        console.log('ngOnInit() chat room');
        console.log(this.messages);
      });
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
  }


  scrollToBottom():void {
    try {
      this.myScroller.nativeElement.scrollTop = this.myScroller.nativeElement.scrollHeight;
    } catch (error) {

    }
  }



}
