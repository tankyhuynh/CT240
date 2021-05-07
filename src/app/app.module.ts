import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { from } from 'rxjs';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpClientXsrfModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AuthInterceptor } from './auth/auth-interceptor';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ErrInterceptor } from './err-interceptor';
import { ErrorComponent } from './error/error.component';

import { AngularMaterialModule } from './angular-material.module';

import { MenuModule } from './menu/menu.module';
import { SearchModule } from './search/search.module';
import { HomeComponent } from './home/home.component';

import { ProfileService } from './personal-information/profile.service';
import { SharingService } from './sharing.service';
import { SocketService } from './socket/socket.service';
import { ReloginComponent } from './relogin/relogin.component';
import { DeleteRoomComponent } from './contact/contact-content/delete-room/delete-room.component';
import { DeleteMemberComponent } from './contact/contact-content/delete-member/delete-member.component';
import { AddMemberComponent } from './contact/contact-content/add-member/add-member.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInformationComponent,
    ErrorComponent,
    HomeComponent,
    ReloginComponent,
    AddMemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    SearchModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrInterceptor, multi: true },
    ProfileService,
    SharingService,
    SocketService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent],
})
export class AppModule {}
