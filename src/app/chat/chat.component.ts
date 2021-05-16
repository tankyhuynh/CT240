import { error } from '@angular/compiler/src/util';
import {
  AfterViewChecked,
  ElementRef,
  ViewChild,
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserData } from '../auth/user.model';
import { RoomModel } from '../contact/contact-content/contact-add-room/contact-add-room.model';
import { ContactAddRoomService } from '../contact/contact-content/contact-add-room/contact-add-room.service';
import { ContactListFriendService } from '../contact/contact-content/list-friends/contact-list-friend.service';
import { FriendModel } from '../contact/contact-content/list-friends/friend.model';
import { ContactListRoomService } from '../contact/contact-content/list-rooms/contact-list-rooms.service';
import { ProfileModel } from '../personal-information/profile.model';
import { ProfileService } from '../personal-information/profile.service';
import { SharingService } from '../sharing.service';
import { SocketService } from '../socket/socket.service';
import { MessageModel } from './chat-roomchat/chat-roomchat-message.model';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  tmpImgPath = "https://images.pexels.com/photos/7457830/pexels-photo-7457830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  currentRoom: RoomModel;
  profileOfFriends: Array<any> = [];

  rooms: RoomModel[] = [];
  messages: MessageModel[] = [];
  lastMessageOfRooms: Array<any> = [];

  currentUserId: string = localStorage.getItem('userId');

  profiles: ProfileModel[] = [];

  constructor(
    private sharingService: SharingService,
    private route: ActivatedRoute,
    private chatService: ChatService,
    private listFriendService: ContactListFriendService,
    private profileService: ProfileService,
    private socketService: SocketService,
    private roomService: ContactListRoomService
  ) {}

  ngOnInit(): void {

    this.socketService.setUpConnnection();

    // this.listFriendService
    // .getAll()
    // .subscribe( (response:any) => {
    //   this.friends = response.data.data;
    //   console.log(this.friends);
    // });


    this.roomService
          .getAll()
          .subscribe( (response:any) => {
            this.rooms = response.data.data;
            console.log("get all room: ");
            console.log(this.rooms);
            this.rooms.forEach(room => {
              this.lastMessageOfRooms[room._id] = room.messagelast;
            });
          });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('roomId')) {

        const roomId = paramMap.get('roomId');

        this.roomService
              .getOneById(roomId)
              .subscribe( (response:any) => {
                this.currentRoom = response.data;
                console.log('get roomId: ');
                console.log(this.currentRoom);

                //Change status all message in room read
                console.log(`currentRoom Name: ${this.currentRoom.name}`);
                this.sharingService
                      .changeMessageInRoomRead({roomId: this.currentRoom?._id, value: true});
              });

        this.roomService
              .getAllMessageByIdRoom(roomId)
              .subscribe( (response:any) => {
                console.log("get all messages in chat");
                this.messages = response.data;
              } );

        this.roomService
              .getMembersById(roomId)
              .subscribe( (response:any) => {
                const responseData = response.data;
                console.log("responseData: ");
                console.log(responseData);

                // this.profileOfFriends = responseData;
                responseData.forEach(element => {
                  this.profileOfFriends[element._id] = element;
                });
              });


      }
    });

  }


  ngAfterViewChecked() {}
}
