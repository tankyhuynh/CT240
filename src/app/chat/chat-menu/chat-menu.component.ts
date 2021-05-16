import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/contact/contact-content/contact-add-room/contact-add-room.model';
import { ContactListFriendService } from 'src/app/contact/contact-content/list-friends/contact-list-friend.service';
import { FriendModel } from 'src/app/contact/contact-content/list-friends/friend.model';
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

  currentUserId: string = localStorage.getItem("userId");

  @Input() currentRoom: RoomModel;
  @Input() rooms: RoomModel[] = [];
  @Input() lastMessageOfRooms: Array<any> = [];

  show: boolean = false;
  haveNewMessage: Array<boolean> = [];
  isMessageInRoomRead: Array<any> = [];

  constructor(
    private sharingService: SharingService,
    private listFriendService: ContactListFriendService,
    private socketService: SocketService) {}

  ngOnInit(): void {

    this.socketService
          .onMessage()
          .subscribe( (newMessage:any) => {
            this.haveNewMessage[newMessage?.room] = true;
            this.lastMessageOfRooms[newMessage?.room] = newMessage;
            console.log(newMessage);

            //Change haveNewMessage in roomId status to false
            this.sharingService.changeMessageInRoomRead({roomId: newMessage?.room, value: false});
          } );
  }

  onClickShowContent() {
    this.sharingService.showContentMobile.subscribe(
      (isShow) => (this.show = isShow)
    );
    this.sharingService.changeShowValue(!this.show);

    //Seen all message in current room
    this.seenAllMessage();
  }

  seenAllMessage(){
    this.haveNewMessage[this.currentRoom?._id] = false;
    this.sharingService.changeMessageInRoomRead({roomId: this.currentRoom?._id, value: true});
  }


}
