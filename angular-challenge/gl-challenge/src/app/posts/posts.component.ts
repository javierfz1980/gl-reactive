import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Post} from "../common/models/post";
import {PostService} from "../common/services/post.service";

@Component({
  selector: "gl-posts",
  templateUrl: "posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent {

  /**
   * The Posts collection
   */
  posts$: Observable<Post[]>;

  /**
   * Template title
   * @param postService
   */
  readonly title: string = "All Posts";

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getPosts();
  }
}
