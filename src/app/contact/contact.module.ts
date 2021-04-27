import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { MenuModule } from "../menu/menu.module";
import { SearchModule } from "../search/search.module";
import { AddfriendModule } from "../add-friend/add-friend.module";
import { ContactMenuComponent } from "./contact-menu/contact-menu.component";
import { ContactContentModule } from "./contact-content/contact-content.module";
import { ContactMenuModule } from "./contact-menu/contact-menu.module";



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ContactRoutingModule,
    MenuModule,
    SearchModule,
    AddfriendModule,
    ContactContentModule,
    ContactMenuModule
  ]
})
export class ContactModule {}
