import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ContactMenuComponent } from "./contact-menu/contact-menu.component";

import { ContactComponent } from "./contact.component";

const routes: Routes = [
  {path: '', component: ContactComponent},
  {path: 'menu', component: ContactMenuComponent},
  {path: 'content', loadChildren: () => import('./contact-content/contact-content.module').then(m => m.ContactContentModule)},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
