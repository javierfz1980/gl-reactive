import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostComponent} from './posts/post/post.component';
import {PostsComponent} from './posts/posts.component';
import {ApiService} from './services/api.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
