import {TestBed, async, ComponentFixture} from "@angular/core/testing";

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {PostsComponent} from "./posts/posts.component";
import {PostCardComponent} from "./posts/post-card/post-card.component";
import {SinglePostComponent} from "./posts/single-post/single-post.component";
import {RouterTestingModule} from "@angular/router/testing";
import {CapitalizePipe} from "./common/pipes/capitalize.pipe";

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PostsComponent,
        SinglePostComponent,
        PostCardComponent,
        HeaderComponent,
        CapitalizePipe
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

});
