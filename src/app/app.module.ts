import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { from } from 'rxjs';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { AuthInterceptor } from './auth/auth-interceptor';
import { SearchComponent } from './search/search.component';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ErrInterceptor } from './err-interceptor';
import { ErrorComponent } from './error/error.component';

import { AngularMaterialModule } from './angular-material.module';

import { ContactModule } from './contact/contact.module';
import { MenuModule } from './menu/menu.module';
import { SearchModule } from './search/search.module';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageComponent,
    AddFriendComponent,
    PersonalInformationComponent,
    ErrorComponent
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
    SearchModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
