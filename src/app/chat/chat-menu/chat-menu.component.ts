import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { RoomModel } from 'src/app/contact/contact-content/contact-add-room/contact-add-room.model';
import { ContactListFriendService } from 'src/app/contact/contact-content/list-friends/contact-list-friend.service';
import { FriendModel } from 'src/app/contact/contact-content/list-friends/friend.model';
import { ContactListRoomService } from 'src/app/contact/contact-content/list-rooms/contact-list-rooms.service';
import { SharingService } from 'src/app/sharing.service';
import { SocketService } from 'src/app/socket/socket.service';
import { MessageModel } from '../chat-roomchat/chat-roomchat-message.model';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css'],
})
export class ChatMenuComponent implements OnInit {
  @Input() imgPath: string;

  currentUserId: string = localStorage.getItem('userId');

  @Input() currentRoom: RoomModel;
  @Input() rooms: Array<any> = [];
  @Input() lastMessageOfRooms: Array<any> = [];

  show: boolean = false;
  haveNewMessage: Array<boolean> = [];
  isMessageInRoomRead: Array<any> = [];

  constructor(
    private sharingService: SharingService,
    private listFriendService: ContactListFriendService,
    private socketService: SocketService,
    private roomsService: ContactListRoomService
  ) {}

  ngOnInit(): void {

    console.log("Rooms: ");
    console.log(this.rooms)

    this.socketService.onMessage().subscribe((newMessage: any) => {

      if ( !newMessage?.data?.content ) {
        newMessage.data.content =
          ((newMessage.data.url)? (newMessage.data.url) : (newMessage.data.fileName))
            .split('/images/')[1];
      }

      this.updateRoomStatus(newMessage, true);
    });

  }

  updateRoomStatus(newMessage: any, status: boolean){
    this.sharingService.changeLastMessageOfRoom({roomId: newMessage.room, value: newMessage.data.content});

    this.rooms.forEach((room) => {
        if (room._id === newMessage.roomId) {
          room.newMessage = status;
        }
    });
  }

  onClickShowContent(id: string) {
    this.sharingService.showContentMobile.subscribe(
      (isShow) => (this.show = isShow)
    );
    this.sharingService.changeShowValue(!this.show);

    //Seen all message in current room
    this.seenAllMessage(id);
  }

  seenAllMessage(id: string) {
    this.rooms.forEach((room) => {
      if (room._id === id) {
        room.newMessage = false;
      }
    });
    this.sharingService.changeMessageInRoomRead({
      roomId: id,
      value: false
    });

  }
}
