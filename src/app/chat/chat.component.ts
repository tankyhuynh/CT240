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
import { SharingService } from '../sharing.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  tmpImgPath = "https://images.pexels.com/photos/7457830/pexels-photo-7457830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  users = ['User 1', 'User 2', 'User 3', 'User 4'];
  userId: string;
  currentUser: UserData;

  chatroom = {
    receive: {
      content:
        'Để sử dụng được cái này, ta bắt buộc phải thêm display: -webkit-box, thuộc tính -webkit-line-clamp sẽ quyết định số dòng tối đa được hiển thị. Tuy nhiên, cách làm này có 1 nhược điểm là không thể sử dụng padding, nó sẽ dẫn đến việc hiển thị 1 phần của dòng tiếp theo như này',
      time: 'Chương Quân 22:15',
    },
    send: {
      content:
        'shadgf s fdasfdj gasjhdf sajh gfjas fjsa dfsa fjhsag jhfgsajfgjhas fdjhadfjhs jhfdasjhsadfjhsadjhf áh',
      time: 'Chương Quân 22:20',
    },
  };

  constructor(
    private sharingService: SharingService,
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('userId')) {
        this.userId = paramMap.get('userId');
      }
    });
    // this.chatroom = this.chatService.fetchRoomByUsername(this.currentUser);
  }

  ngAfterViewChecked() {}
}
