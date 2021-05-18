import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/socket/socket.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-chat-roomchat-send',
  templateUrl: './chat-roomchat-send.component.html',
  styleUrls: ['./chat-roomchat-send.component.css'],
})
export class ChatRoomchatSendComponent implements OnInit {
  @Input() roomId: string;
  imageURL: string;
  form: FormGroup;

  @ViewChild('message') message: ElementRef<any>;

  constructor(private socketService: SocketService, private route: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      avatar: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [],
      }),
    });
  }

  sendMessage(data: string) {
    this.socketService.sendMessage(this.roomId, data);
    this.message.nativeElement.value = '';
  }

  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ avatar: file });
    this.form.get('avatar').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  closePreview() {
    this.imageURL = null;
  }
}
