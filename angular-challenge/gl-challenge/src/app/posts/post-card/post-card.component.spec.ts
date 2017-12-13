import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {PostCardComponent} from "./post-card.component";
import {CapitalizePipe} from "../../common/pipes/capitalize.pipe";
import {mockedComments, mockedPosts, MockPostService} from "../../common/services/mock-post.service";
import {Router} from "@angular/router";

describe("PostCardComponent", () => {

  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;
  let postService: MockPostService;
  let compiled;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostCardComponent,
        CapitalizePipe
      ],
      providers: [
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    postService = new MockPostService();
    fixture = TestBed.createComponent(PostCardComponent);

    component = fixture.debugElement.componentInstance;
    component.post = mockedPosts[0];
    component.post.comments = mockedComments;

    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;

  }));

  it("it shows the title and body capitalized", () => {
    // "Title" and "Body" strings are based on the mock Posts returned by the mocked MockPostService
    const expectedCapitalizedTtitle: string = "Title";
    const expectedCapitalizedBody: string = "Body";
    expect(compiled.querySelector('.card-header').textContent).toContain(expectedCapitalizedTtitle);
    expect(compiled.querySelector('.card-text').textContent).toContain(expectedCapitalizedBody);
  });

  it("it navigates to the correct single post id", () => {
    compiled.querySelector('.btn-link').click();
    expect(router.navigate).toHaveBeenCalledWith(["/post/" + component.post.id]);
  });

})
