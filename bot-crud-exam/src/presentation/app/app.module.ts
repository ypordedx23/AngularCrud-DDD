import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotDetailComponent } from './bot-detail/bot-detail.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomTokenInterceptor } from 'src/data/interceptors/custom-token.interceptor';
import { BotFormComponent } from './bot-form/bot-form.component';
import { BotListComponent } from './bot-list/bot-list.component';
import {MatMenuModule} from '@angular/material/menu';
import { userLoginUseCaseProvider, botDeleteUseCaseProvider, botRegisterUseCaseProvider, botSearchUseCaseProvider, botUpdateUseCaseProvider, botListUseCaseProvider } from 'src/data/data.module';
import { BotImplementationRepository } from 'src/data/repositories/bot/bot-implementation.repository';
import { UserImplementationRepository } from 'src/data/repositories/user/user-implementation.repository';
import { BotRepository } from 'src/domain/repositories/bot.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { BotEditFormComponent } from './bot-edit-form/bot-edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BotDetailComponent,
    LoginComponent,
    BotFormComponent,
    BotListComponent,
    BotEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomTokenInterceptor,multi : true },
    userLoginUseCaseProvider,
    { provide: UserRepository, useClass: UserImplementationRepository },
    botDeleteUseCaseProvider,
    botRegisterUseCaseProvider,
    botSearchUseCaseProvider,
    botUpdateUseCaseProvider,
    botListUseCaseProvider,
    { provide: BotRepository, useClass: BotImplementationRepository },
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
