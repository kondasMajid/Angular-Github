import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ApiReqService } from './shared/api-req.service';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GitHubHttpInterceptor } from './shared/github.interceptor';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ApiReqService,
     {provide: HTTP_INTERCEPTORS,
     useClass:GitHubHttpInterceptor,
    multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
