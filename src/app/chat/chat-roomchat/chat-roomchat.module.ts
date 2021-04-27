import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from '../../../app/angular-material.module';

import { SearchModule } from "src/app/search/search.module";
import { ChatRoomChatRoutingModule } from "./chat-roomchat-routing.module";
import { ChatRoomchatComponent } from "./chat-roomchat.component";
import { ChatRoomchatHeaderComponent } from "./chat-roomchat-header/chat-roomchat-header.component";
import { ChatRoomchatBodyComponent } from "./chat-roomchat-body/chat-roomchat-body.component";
import { ChatRoomchatSendComponent } from "./chat-roomchat-send/chat-roomchat-send.component";


@NgModule({
  declarations: [
    ChatRoomchatComponent,
    ChatRoomchatHeaderComponent,
    ChatRoomchatBodyComponent,
    ChatRoomchatSendComponent
  ] ,
  imports: [
    CommonModule,
    ChatRoomChatRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SearchModule
  ],
  exports:[
    ChatRoomchatComponent
  ]
})
export class ChatRoomChatModule {

}
