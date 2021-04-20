import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    SearchRoutingModule
  ],
  exports: [SearchComponent]
})
export class SearchModule {}
