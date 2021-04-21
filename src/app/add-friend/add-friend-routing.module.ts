import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AddFriendComponent } from "./add-friend.component";

const routes: Routes = [
  {path: '', component: AddFriendComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AddFriendRoutingModule {}
