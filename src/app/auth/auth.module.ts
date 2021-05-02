import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";

import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
