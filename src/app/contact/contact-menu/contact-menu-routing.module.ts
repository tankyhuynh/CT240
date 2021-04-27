import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ContactMenuComponent } from "./contact-menu.component";


const routes: Routes = [
  {path: '', component: ContactMenuComponent}
 ]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactMenuRoutingModule {}
