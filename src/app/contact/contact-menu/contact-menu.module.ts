import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "src/app/angular-material.module";

import { ContactMenuRoutingModule } from "./contact-menu-routing.module";
import { ContactMenuComponent } from "./contact-menu.component";

@NgModule({
  declarations: [
    ContactMenuComponent
  ] ,
  imports: [
    CommonModule,
    AngularMaterialModule,
    ContactMenuRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactMenuComponent
  ]
})
export class ContactMenuModule {

}
