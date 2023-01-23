import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotDetailRoutingModule } from './bot-detail/bot-detail-routing.module';
import { BotDetailComponent } from './bot-detail/bot-detail.component';
import { BotEditFormComponent } from './bot-edit-form/bot-edit-form.component';
import { BotFormComponent } from './bot-form/bot-form.component';
import { BotListComponent } from './bot-list/bot-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'botDetail',
    component: BotDetailComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'botList' },
      { path: 'botList', component: BotListComponent},
      { path: 'botForm', component: BotFormComponent},
      { path: 'botEditForm', component: BotEditFormComponent}
    ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BotDetailRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
