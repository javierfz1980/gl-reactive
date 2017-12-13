import {PostsComponent} from "./posts.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {PostCardComponent} from "./post-card/post-card.component";
import {CapitalizePipe} from "../common/pipes/capitalize.pipe";
import {PostService} from "../common/services/post.service";
import {MockPostService} from "../common/services/mock-post.service";
import {RouterTestingModule} from "@angular/router/testing";

describe("PostsComponent", () => {

  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostsComponent,
        PostCardComponent,
        CapitalizePipe
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: PostService, useValue: new MockPostService()},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;

  }));

  it("it shows a loader spinner while it is loading", () => {
    component.posts$ = undefined;
    fixture.detectChanges();
    expect(compiled.querySelector('.spinner')).toBeTruthy();
  });

  it("it has a title with the string 'All Posts' on an h1 tag", () => {
    const expectedTitle: string = "All Posts";
    expect(compiled.querySelector('h1').textContent).toContain(expectedTitle);
  });

  it("it shows at least one post-card", () => {
    expect(compiled.querySelector('gl-post-card')).toBeTruthy();
  });

})
