import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ChatMenuComponent } from "./chat-menu/chat-menu.component";

import { ChatComponent } from "./chat.component";


const routes: Routes = [
  {path: '', component: ChatComponent},
  {path: 'menu', component: ChatMenuComponent},
  {path: 'roomchat', loadChildren: () => import('./chat-roomchat/chat-roomchat.module').then(m => m.ChatRoomChatModule)},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChatRoutingModule {}
