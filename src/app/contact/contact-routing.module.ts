import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ListAddFriendsComponent } from "./list-add-friends/list-add-friends.component";
import { ListFriendsComponent } from "./list-friends/list-friends.component";
import { ListGroupsComponent } from "./list-groups/list-groups.component";
import { ContactComponent } from "./contact.component";

import { MenuComponent } from '../menu/menu.component';


const routes: Routes = [
  {path: '', component: ContactComponent},
  {path: 'list-friends', component: ListFriendsComponent},
  {path: 'list-groups', component: ListGroupsComponent},
  {path: 'list-add-friends', component: ListAddFriendsComponent}

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
