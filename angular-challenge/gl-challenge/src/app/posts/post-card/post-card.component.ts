import {Component, Input} from "@angular/core";
import {Post} from "../../common/models/post";
import {Router} from "@angular/router";
import {routePaths} from "../../app-routing.module";

@Component({
  selector: "gl-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.css"]
})
export class PostCardComponent {

  @Input()
  post: Post;

  constructor(private router: Router) {}

  /**
   * Navigates to a single post
   */
  goToSinglePost() {
    this.router.navigate(["/" + routePaths.post + "/" + this.post.id]);
  }

}
