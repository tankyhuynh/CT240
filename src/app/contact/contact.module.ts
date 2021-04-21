import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
import { ListAddFriendsComponent } from "./list-add-friends/list-add-friends.component";
import { ListFriendsComponent } from "./list-friends/list-friends.component";
import { ListGroupsComponent } from "./list-groups/list-groups.component";
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { MenuModule } from "../menu/menu.module";
import { SearchModule } from "../search/search.module";
import { AddfriendModule } from "../add-friend/add-friend.module";



@NgModule({
  declarations: [
    ContactComponent,
    ListFriendsComponent,
    ListGroupsComponent,
    ListAddFriendsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ContactRoutingModule,
    MenuModule,
    SearchModule,
    AddfriendModule
  ]
})
export class ContactModule {}
