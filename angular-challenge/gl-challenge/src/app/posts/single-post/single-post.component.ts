import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Post} from "../../common/models/post";
import {PostService} from "../../common/services/post.service";
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: "gl-post",
  templateUrl: "./single-post.component.html",
  styleUrls: ["./single-post.component.css"]
})
export class SinglePostComponent implements OnInit{

  /**
   * The single Post that should be displayed
   */
  post$: Observable<Post>;

  constructor(private postService: PostService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.post$ = this.route.firstChild.paramMap
        .switchMap((routeMap) => {
          return this.postService.getPostWithComments(routeMap.get("id"));
        })
  }

}
