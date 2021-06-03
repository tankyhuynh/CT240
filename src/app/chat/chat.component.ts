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
  tmpImgPath =
    'https://images.pexels.com/photos/7457830/pexels-photo-7457830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

  currentRoom: RoomModel;
  profileOfFriends: Array<any> = [];

  rooms: RoomModel[] = [];
  fetchedRooms: RoomModel[] = [];

  messages: MessageModel[] = [];
  lastMessageOfRooms: Array<any> = [];

  currentUserId: string = localStorage.getItem('userId');

  profiles: ProfileModel[] = [];

  roomName: string;

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
    this.fetchAllData();

    this.socketService.onMessage().subscribe((newMessage: any) => {
      this.updateLastMessageOfAllRoom();
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('roomId')) {
        const roomId = paramMap.get('roomId');

        this.roomService.getOneById(roomId).subscribe((response: any) => {
          this.currentRoom = response.data;
          this.currentRoom.top = 500;

          // console.log(this.currentRoom);

          //Change status all message in room read
          // console.log(`currentRoom Name: ${this.currentRoom.name}`);
          this.sharingService.changeMessageInRoomRead({
            roomId: this.currentRoom?._id,
            value: false,
          });

          this.fetchAllData();
        });

        this.roomService
          .getAllMessageByIdRoom(roomId)
          .subscribe((response: any) => {
            // console.log('get all messages in chat');
            this.messages = response.data;
          });

        this.roomService.getMembersById(roomId).subscribe((response: any) => {
          const responseData = response.data;

          // this.profileOfFriends = responseData;
          responseData.forEach((element) => {
            this.profileOfFriends[element._id] = element;
          });
        });
      }
    });
  }

  fetchAllData() {
    // console.log('fetch all data');
    this.roomService.getAll().subscribe((response: any) => {
      this.rooms = response.data.data;
      this.fetchedRooms = this.rooms;

      this.sharingService.currentMessageInRommReadedSourceStatus.subscribe(
        (newMessage: any) => {
          this.rooms.forEach((room) => {
            if (room.messagelast.data?.content) {
              this.lastMessageOfRooms[room._id] = room.messagelast;
            }

            // set content of last message if last message is a file or an image
            try {
              if (!room.messagelast?.data?.content) {
                room.messagelast.data.content = (
                  room.messagelast.data.url
                    ? room.messagelast.data.url
                    : room.messagelast.data.fileName
                )?.split('/images/')[1];
              }
            } catch (error) {}

            this.lastMessageOfRooms[room._id] = room.messagelast;
            if (newMessage?.length > 0) {
              newMessage.forEach((element) => {
                if (element?.roomId === room._id) {
                  room.newMessage = element.value;
                }
              });
            }
          });
        }
      );
    });
  }

  private slug(val) {
    val = val.replace(/[áàãâä]/g, 'a');
    val = val.replace(/[ÁÀÃÂÄ]/g, 'a');
    val = val.replace(/[éèêë]/g, 'e');
    val = val.replace(/[ÉÈÊË]/g, 'e');
    val = val.replace(/[íìîï]/g, 'i');
    val = val.replace(/[ÍÌÎÏ]/g, 'i');
    val = val.replace(/[óòõôö]/g, 'o');
    val = val.replace(/[ÓÒÕÔÖ]/g, 'o');
    val = val.replace(/[úùûü]/g, 'u');
    val = val.replace(/[ÚÙÛÜ]/g, 'u');
    val = val.replace(/[ç]/g, 'c');
    val = val.replace(/[Ç]/g, 'c');
    return val;
  }

  searchRoomByName(roomName: any) {
    this.roomName = this.slug(roomName);
    if (roomName) {
      this.rooms = this.fetchedRooms.filter((room) =>
        this.slug(room.name).includes(this.roomName)
      );
    } else {
      this.rooms = this.fetchedRooms;
    }
  }

  updateLastMessageOfAllRoom() {
    // console.log('updateLastMessageOfAllRoom');
    //fetch lastMessage of each room from sharing service lastMessage
    this.sharingService.lastMessage$.subscribe((lastMessage: any) => {
      this.rooms.forEach((room) => {
        if (lastMessage?.length > 0) {
          lastMessage.forEach((element) => {
            if (element?.roomId === room._id) {
              room.messagelast.data.content = element.value;
              this.lastMessageOfRooms[room._id] = room.messagelast;
            }
          });
        }
      });
    });
  }

  ngAfterViewChecked() {}
}
