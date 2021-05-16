import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { element } from 'protractor';
import { RoomModel } from 'src/app/contact/contact-content/contact-add-room/contact-add-room.model';
import { FriendModel } from 'src/app/contact/contact-content/list-friends/friend.model';
import { ContactListRoomService } from 'src/app/contact/contact-content/list-rooms/contact-list-rooms.service';
import { ProfileService } from 'src/app/personal-information/profile.service';
import { SharingService } from 'src/app/sharing.service';
import { SocketService } from 'src/app/socket/socket.service';
import { MessageModel } from '../chat-roomchat-message.model';


@Component({
  selector: 'app-chat-roomchat-body',
  templateUrl: './chat-roomchat-body.component.html',
  styleUrls: ['./chat-roomchat-body.component.css'],
})
export class ChatRoomchatBodyComponent implements OnInit, AfterViewChecked {
  @Input() chatroom: RoomModel;
  @Input() messages: MessageModel[] = [];
  currentUserId: string = localStorage.getItem('userId');

  @Input() profileOfFriends: Array<any> = [];

  top: number;


  @ViewChild('scrollMe') myScroller: ElementRef<any>;

  constructor(
    private roomService: ContactListRoomService,
    private sharingService: SharingService,
    private socketService: SocketService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.top = 1;
    this.socketService.getMessages().subscribe((message: MessageModel) => {
      this.messages.push(message);
    });

  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      var height = this.myScroller.nativeElement.scrollHeight;
      if (this.top < height) {
        this.myScroller.nativeElement.scrollTop = this.myScroller.nativeElement.scrollHeight;
        this.top = this.myScroller.nativeElement.scrollHeight;
      }
    } catch (error) {}
  }


}
