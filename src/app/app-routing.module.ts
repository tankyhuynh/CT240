import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';



const routes: Routes = [
  {path: '', component: MessageComponent},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'menu', component: MenuComponent},
  {path: 'message', component: MessageComponent},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'add-friend', component: AddFriendComponent},
  {path: 'add-group', component: AddGroupComponent},
  {path: 'personal-information', component: PersonalInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
