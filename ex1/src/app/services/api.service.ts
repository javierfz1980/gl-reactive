import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Post} from '../models/post';
import {Comment} from '../models/comment';

@Injectable()
export class ApiService {

  private readonly url: string = 'https://jsonplaceholder.typicode.com/';

  // TODO: use the new Http Class...
  constructor(private http: Http) {}

  // returns a list of all posts
  getPosts(): Observable<Post[]> {
     return this.http
       .get(this.url + 'posts')
       .map((response: Response) => response.json())
       .catch((error: Error) => Observable.throw(error));
  }

  // returns a single post with comments
  getPostWithComments(postId: number): Observable<Post> {
    const post$: Observable<Post> = this.getPost(postId);
    const comments$: Observable<Comment[]> = this.getComments(postId);

    return Observable
      .forkJoin(post$, comments$)
      .map((data: [Post, Comment[]]) => {
        const post: Post = data[0];
        const comments: Comment[] = data[1];
        post.comments = comments;
        return post;
      });
  }

  // return a single post
  private getPost(postId: number): Observable<Post> {
    return this.http
      .get(this.url + `posts/${postId}`)
      .map((response: Response) => response.json())
      .catch((error: Error) => Observable.throw(error));
  }

  // return a list of comments for the post Id
  private getComments(postId: number): Observable<Comment[]> {
    return this.http
      .get(this.url + `comments?postId=${postId}`)
      .map((response: Response) => response.json())
      .catch((error: Error) => Observable.throw(error));
  }
}
