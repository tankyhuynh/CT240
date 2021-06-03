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

  iconList = [ // array of icon class list based on type
    { type: "xlsx", icon: "fa fa-file-excel-o" },
    { type: "pdf", icon: "fa fa-file-pdf-o" },
    { type: "jpg", icon: "fa fa-file-image-o" },
    { type: "doc", icon: "fas fa-file-word" },
    { type: "docx", icon: "fas fa-file-word" },
    { type: "pptx", icon: "fas fa-file-powerpoint" }
  ];

  top: number;

  @ViewChild('scrollMe') myScroller: ElementRef<any>;

  constructor(
    private roomService: ContactListRoomService,
    private sharingService: SharingService,
    private socketService: SocketService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {

    this.socketService.onMessage().subscribe((message: MessageModel) => {
      if(message.room === this.chatroom._id){
        // console.log('new message: ')
        // console.log(message);
        this.messages.push(message);
      }
    });

  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  openFile(href: string){
    window.open(href, '_blank');
  };

  getFileExtension(filename) { // this will give you icon class name

    let ext = filename.split(".").pop();

    if (!this.iconList) {
      return;
    }

    let obj = this.iconList.filter(row => {
      if (row.type === ext) {
        return true;
      }
    });
    if (obj.length > 0) {
      let icon = obj[0].icon;
      return icon;
    } else {
      return "";
    }
  }

  scrollToBottom(): void {
    try {

      var heightRoomChat = this.myScroller.nativeElement.scrollHeight;
      if( this.chatroom.top != heightRoomChat ) {
        this.myScroller.nativeElement.scrollTop =
          this.myScroller.nativeElement.scrollHeight;
        this.chatroom.top = this.myScroller.nativeElement.scrollHeight;
      }
    } catch (error) {}
  }
}
