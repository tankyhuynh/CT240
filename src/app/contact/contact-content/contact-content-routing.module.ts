import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ContactAddFriendComponent } from "./contact-add-friend/contact-add-friend.component";
import { ContactAddGroupComponent } from "./contact-add-room/contact-add-room.component";
import { ContactContentComponent } from "./contact-content.component";
import { ListAddFriendsComponent } from "./list-add-friend-requests/contact-list-add-friend-requests.component";
import { ListFriendsComponent } from "./list-friends/list-friends.component";
import { ListGroupsComponent } from "./list-rooms/contact-list-rooms.component";



const routes: Routes = [
  {path: '', component: ContactContentComponent},
  {path: 'add-friend', component: ContactAddFriendComponent},
  {path: 'add-room', component: ContactAddGroupComponent},
  {path: 'list-add-friends', component: ListAddFriendsComponent},
  {path: 'list-friends', component: ListFriendsComponent},
  {path: 'list-rooms', component: ListGroupsComponent},
 ]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactContentRoutingModule {}
