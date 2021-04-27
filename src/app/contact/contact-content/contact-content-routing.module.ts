import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { ContactAddFriendComponent } from "./contact-add-friend/contact-add-friend.component";
import { ContactAddGroupComponent } from "./contact-add-group/contact-add-group.component";

import { ContactContentComponent } from "./contact-content.component";
import { ListAddFriendsComponent } from "./list-add-friends/list-add-friends.component";
import { ListFriendsComponent } from "./list-friends/list-friends.component";
import { ListGroupsComponent } from "./list-groups/list-groups.component";


const routes: Routes = [
  {path: '', component: ContactContentComponent},
  {path: 'add-friend', component: ContactAddFriendComponent},
  {path: 'add-group', component: ContactAddGroupComponent},
  {path: 'list-add-friend', component: ListAddFriendsComponent},
  {path: 'list-friend', component: ListFriendsComponent},
  {path: 'list-group', component: ListGroupsComponent},
 ]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactContentRoutingModule {}
