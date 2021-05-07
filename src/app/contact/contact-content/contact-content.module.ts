import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactContentRoutingModule } from './contact-content-routing.module';

import { ContactAddFriendComponent } from './contact-add-friend/contact-add-friend.component';
import { ContactAddGroupComponent } from './contact-add-room/contact-add-room.component';
import { ListAddFriendsComponent } from './list-add-friend-requests/contact-list-add-friend-requests.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { ListGroupsComponent } from './list-rooms/contact-list-rooms.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SearchModule } from 'src/app/search/search.module';
import { ContactContentComponent } from './contact-content.component';
import { ContactMenuModule } from '../contact-menu/contact-menu.module';
import { DeleteMemberComponent } from './delete-member/delete-member.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';

@NgModule({
  declarations: [
    ContactContentComponent,
    ContactAddFriendComponent,
    ContactAddGroupComponent,
    ListAddFriendsComponent,
    ListFriendsComponent,
    ListGroupsComponent,
    DeleteMemberComponent,
    DeleteRoomComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ContactContentRoutingModule,
    ReactiveFormsModule,
    SearchModule,
    ContactMenuModule,
  ],
  exports: [ContactContentComponent],
})
export class ContactContentModule {}
