import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Post} from "../models/post";
import {Comment} from "../models/comment";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * Service that fetches data from the API.
 */
@Injectable()
export class PostService {

  /**
   * API base paths.
   */
  private readonly basePath: string = "https://jsonplaceholder.typicode.com/";
  private readonly postsPath: string = "posts";
  private readonly commentsPath: string = "comments";

  constructor(private httpClient: HttpClient) {}

  /**
   * Retrieves a single Posts from the API
   * @returns {Observable<Post>}
   */
  getPost(postId: string): Observable<Post> {
    return this.httpClient
               .get<Post>(this.basePath + this.postsPath + "/" + postId)
               .catch((error: HttpErrorResponse) => Observable.throw(error));
  }

  /**
   * Retrieves all the Posts from the API
   * @returns {Observable<Post[]>}
   */
  getPosts(): Observable<Post[]> {
    return this.httpClient
               .get<Post[]>(this.basePath + this.postsPath)
               .catch((error: HttpErrorResponse) => Observable.throw(error));
  }

  /**
   * Retrieves a single Post with all its comments.
   * @param postId: string -> the id of the Post from which to fetch the comments.
   * @returns {Observable<Post[]>}
   */
  getPostWithComments(postId: string): Observable<Post> {
    const post$: Observable<Post> = this.getPost(postId);
    const comments$: Observable<Comment[]> = this.getComments(postId);

    const postWithComments$ = Observable
      .forkJoin([post$, comments$])
      .map((data:[Post, Comment[]]) => {
        const post: Post = data[0];
        const comments: Comment[] = data[1];
        post.comments = comments;
        return post;
      });

    return postWithComments$;
  }

  /**
   * Retrieves all the comments that belongs to a single Post
   * @param postId: string -> the id of the Post from which to fetch the comments.
   * @returns {Observable<Comment[]>}
   */
  getComments(postId: string): Observable<Comment[]> {
    return this.httpClient
               .get<Comment[]>(this.basePath + this.commentsPath + "?postId=" + postId)
               .catch((error: HttpErrorResponse) => Observable.throw(error));
  }

}
