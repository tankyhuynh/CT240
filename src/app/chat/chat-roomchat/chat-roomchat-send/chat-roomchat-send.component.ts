import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/socket/socket.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FileService } from './sendFile.service';
import { SharingService } from 'src/app/sharing.service';
import { MessageModel } from '../chat-roomchat-message.model';
import { url } from 'node:inspector';

@Component({
  selector: 'app-chat-roomchat-send',
  templateUrl: './chat-roomchat-send.component.html',
  styleUrls: ['./chat-roomchat-send.component.css'],
})
export class ChatRoomchatSendComponent implements OnInit {
  @Input() roomId: string;
  imageURL: string;
  form: FormGroup;

  private currentUserId: string = localStorage.getItem('userId');

  @ViewChild('message') message: ElementRef<any>;

  constructor(
    private socketService: SocketService,
    private route: Router,
    private sendfileService: FileService,
    private sharingService: SharingService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [],
      }),
    });
  }

  sendMessage(data: any) {
    if ( this.form.value.image ) {
      console.log("dont have image");
      this.sendFile(this.form.value.image);
      if ( this.message.nativeElement.value !== '\n' ) {
        this.socketService.sendMessage(this.roomId, data);
      }
    }
    else {
      if ( this.message.nativeElement.value !== '\n' ) {
        this.socketService.sendMessage(this.roomId, data);
      }
    }
    this.resetForm();
}

  sendFile(image: File){
    this.sendfileService
          .sendImage(image)
          .subscribe( (response:any) => {
            const imageUrl = response.data.url;
            console.log('send image: ');
            console.log(imageUrl);

            const newMessage:MessageModel = {
              room: this.roomId,
              data: {url: imageUrl},
              sender: this.currentUserId,
              created_at: new Date()
            }

            this.sharingService.changeSendNewImage(newMessage);
            this.socketService.sendImage(this.roomId, imageUrl);
            this.resetForm();
            this.closePreview();
          } );
  }


  resetForm(){
    this.form.patchValue({image: null});
    this.form.get('image').updateValueAndValidity();
    this.message.nativeElement.value = '';
  }

  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    this.message.nativeElement.focus();
    reader.readAsDataURL(file);
  }

  closePreview() {
    this.imageURL = null;
  }
}
