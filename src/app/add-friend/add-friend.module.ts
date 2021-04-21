import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { AddFriendRoutingModule } from "./add-friend-routing.module";
import { AddFriendComponent } from "./add-friend.component";



@NgModule({
  declarations: [
    AddFriendComponent
  ],
  imports: [
    AddFriendRoutingModule
  ],
  exports: [AddFriendComponent]
})
export class AddfriendModule {}
