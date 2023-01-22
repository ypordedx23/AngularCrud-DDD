import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotDetailComponent } from './bot-detail/bot-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'botDetail', component: BotDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
