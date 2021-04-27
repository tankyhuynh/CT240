import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ChatRoomchatBodyComponent } from "./chat-roomchat-body/chat-roomchat-body.component";
import { ChatRoomchatHeaderComponent } from "./chat-roomchat-header/chat-roomchat-header.component";
import { ChatRoomchatSendComponent } from "./chat-roomchat-send/chat-roomchat-send.component";
import { ChatRoomchatComponent } from "./chat-roomchat.component";



const routes: Routes = [
  {path: '', component: ChatRoomchatComponent},
  {path: 'header', component: ChatRoomchatHeaderComponent},
  {path: 'body', component: ChatRoomchatBodyComponent},
  {path: 'send', component: ChatRoomchatSendComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChatRoomChatRoutingModule {}
