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
import { mimeType } from 'src/app/auth/signup/mime-type.validator';

@Component({
  selector: 'app-chat-roomchat-send',
  templateUrl: './chat-roomchat-send.component.html',
  styleUrls: ['./chat-roomchat-send.component.css'],
})
export class ChatRoomchatSendComponent implements OnInit {
  @Input() roomId: string;
  imageURL: string;
  fileURL: string;
  isFile:boolean = false;
  form: FormGroup;

  iconList = [ // array of icon class list based on type
    { type: "xlsx", icon: "fa fa-file-excel-o" },
    { type: "pdf", icon: "fa fa-file-pdf-o" },
    { type: "jpg", icon: "fa fa-file-image-o" },
    { type: "doc", icon: "fas fa-file-word" },
    { type: "docx", icon: "fas fa-file-word" },
    { type: "pptx", icon: "fas fa-file-powerpoint" }
  ];

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


  getFileExtension(filename) { // this will give you icon class name

    let ext = filename.split(".").pop();

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

  sendMessage(data: any) {
    if ( this.form.value.image ) {
      console.log("Have image");
      this.sendFile(this.form.value.image);
      if ( this.message.nativeElement.value !== '\n' && this.message.nativeElement.value !== '' ) {
        console.log(`Have message and image ${ this.message.nativeElement.value}`);
        this.socketService.sendMessage(this.roomId, data);
      }
    }
    else {
      if ( this.message.nativeElement.value !== '\n' ) {
        console.log("Have only message");
        this.socketService.sendMessage(this.roomId, data);
      }
    }
    this.resetForm();
}

  sendFile(file: File){

    const isImage = this.isImage(file);

    this.sendfileService
          .sendFile(file)
          .subscribe( (response:any) => {
            const url = response.data.url;
            console.log('send file: ');
            console.log(url);

            let type: string;

            let newMessage:MessageModel = {
              room: this.roomId,
              data: {},
              sender: this.currentUserId,
              created_at: new Date()
            }

            if ( !isImage ) {
              newMessage.data.fileName = url;
              type = 'file';
            }
            else {
              newMessage.data.url = url;
              type = 'image';
            }

            // this.sharingService.changeSendNewImage(newMessage);
            this.socketService.sendFile(this.roomId, type , url);
            this.resetForm();
            this.closePreview();
          } );
  }

  isImage(file: File){
    console.log(`extention: ${file.type}`);
    const imageType = ['image/png', 'image/jpeg', 'image/jpg'];
    let isImage:boolean = false;
    imageType.forEach(type => {
      if (type === file.type) {
        isImage = true;
      }
    });
    return isImage;
  }


  resetForm(){
    this.form.patchValue({image: null});
    this.form.get('image').updateValueAndValidity();
    this.message.nativeElement.value = '';
  }

  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const fileType = file.type;
    console.log(`file picked: ${fileType}`);

    if ( !this.isImage(file) ) {
      this.fileURL = file.name;
      this.isFile = true;
      console.log(`fileName: ${this.fileURL}`);
    } else this.isFile = false;
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
    this.fileURL = null;
  }
}
