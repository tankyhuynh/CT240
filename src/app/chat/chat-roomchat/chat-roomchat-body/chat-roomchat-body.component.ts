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

    this.sharingService
          .currentSendNewImageStatus
          .subscribe( (response:any) => {
            console.log("currentSendNewImageStatus: ");
            console.log(response);
            if ( response ) {
              this.messages.push(response);
            }
          });

    this.socketService.getMessages().subscribe((message: MessageModel) => {
      if(message.room === this.chatroom._id){
        this.messages.push(message);
      }
    });


  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      var height = this.myScroller.nativeElement.scrollHeight;
      if (this.chatroom.top > 1000) {
        this.chatroom.top = 500;
      }

      if (this.chatroom.top < height) {
        this.myScroller.nativeElement.scrollTop =
          this.myScroller.nativeElement.scrollHeight;
        this.chatroom.top = this.myScroller.nativeElement.scrollHeight;
      }
    } catch (error) {}
  }
}
