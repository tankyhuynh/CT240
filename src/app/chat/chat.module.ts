import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { SearchModule } from "../search/search.module";
import { ChatMenuComponent } from "./chat-menu/chat-menu.component";
import { ChatRoomchatComponent } from "./chat-roomchat/chat-roomchat.component";
import { ChatRoomChatModule } from "./chat-roomchat/chat-roomchat.module";
import { ChatRoutingModule } from "./chat-routing.module";
import { ChatComponent } from "./chat.component";

import { MatBadgeModule } from '@angular/material/badge'

@NgModule({
  declarations: [
    ChatComponent,
    ChatMenuComponent
  ] ,
  imports: [
    CommonModule,
    AngularMaterialModule,
    ChatRoutingModule,
    ReactiveFormsModule,
    SearchModule,
    ChatRoomChatModule,
    MatBadgeModule
  ]
})
export class ChatModule {

}
