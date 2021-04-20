import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
import { MenuComponent } from "./menu.component";
import { MenuRoutingModule } from "./menu-routing.module";



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    MenuRoutingModule
  ],
  exports: [MenuComponent]
})
export class MenuModule {}
