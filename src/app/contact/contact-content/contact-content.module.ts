import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { ContactContentRoutingModule } from "./contact-content-routing.module";

import { ContactAddFriendComponent } from "./contact-add-friend/contact-add-friend.component";
import { ContactAddGroupComponent } from "./contact-add-group/contact-add-group.component";
import { ListAddFriendsComponent } from "./list-add-friends/list-add-friends.component";
import { ListFriendsComponent } from "./list-friends/list-friends.component";
import { ListGroupsComponent } from "./list-groups/list-groups.component";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { SearchModule } from "src/app/search/search.module";
import { ContactContentComponent } from "./contact-content.component";
import { ContactMenuComponent } from "../contact-menu/contact-menu.component";
import { ContactMenuModule } from "../contact-menu/contact-menu.module";

@NgModule({
  declarations: [
    ContactContentComponent,
    ContactAddFriendComponent,
    ContactAddGroupComponent,
    ListAddFriendsComponent,
    ListFriendsComponent,
    ListGroupsComponent
  ] ,
  imports: [
    CommonModule,
    AngularMaterialModule,
    ContactContentRoutingModule,
    ReactiveFormsModule,
    SearchModule,
    ContactMenuModule
  ],
  exports: [
    ContactContentComponent
  ]
})
export class ContactContentModule {

}
