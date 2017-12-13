import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "./posts/posts.component";
import {AppRoutingModule} from "./app-routing.module";
import {SinglePostComponent} from "./posts/single-post/single-post.component";
import {ClarityModule} from "clarity-angular";
import {PipesModule} from "./common/pipes/pipes.module";
import {ServicesModule} from "./common/services/services.module";
import {PostCardComponent} from "./posts/post-card/post-card.component";
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SinglePostComponent,
    PostCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PipesModule,
    ServicesModule,
    ClarityModule.forRoot(),
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
