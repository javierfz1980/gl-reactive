import {Injectable} from "@angular/core";
import {Post} from "../models/post";
import {Comment} from "../models/comment";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

/**
 * Mocked comments
 */
export const mockedComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    name: "name 1",
    email: "email 1",
    body: "body 1"
  },
  {
    id: 2,
    postId: 2,
    name: "name 2",
    email: "email 2",
    body: "body 2"
  },
  {
    id: 3,
    postId: 3,
    name: "name 3",
    email: "email 3",
    body: "body 3"
  },
  {
    id: 4,
    postId: 4,
    name: "name 4",
    email: "email 4",
    body: "body 4"
  },
  {
    id: 5,
    postId: 5,
    name: "name 5",
    email: "email 5",
    body: "body 5"
  }
];

/**
 * Mocked Posts
 */
export const mockedPosts: Post[] = [
  {
    id: 1,
    userId: 1,
    body: "body 1",
    title: "title 1",
  },
  {
    id: 2,
    userId: 2,
    body: "body 2",
    title: "title 2",
  },
  {
    id: 3,
    userId: 3,
    body: "body 3",
    title: "title 3",
  },
  {
    id: 4,
    userId: 4,
    body: "body 4",
    title: "title 4",
  },
  {
    id: 5,
    userId: 5,
    body: "body 5",
    title: "title 5",
  }
];


/**
 * Mock Service that simulates fetching data from the API.
 */
@Injectable()
export class MockPostService {

  /**
   * Retrieves a mocked single Post
   * @returns {Observable<Post>}
   */
  getPost(postId: string): Observable<Post> {
    return Observable.of(mockedPosts[0]);
  }

  /**
   * Retrieves mocked list of Posts
   * @returns {Observable<Post[]>}
   */
  getPosts(): Observable<Post[]> {
    return Observable.of(mockedPosts);
  }

  /**
   * Retrieves a mocked single Post with all its comments.
   * @param postId: string ->
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
   * Retrieves a list of mocked comments
   * @param postId: string -> the id of the Post from which to fetch the comments.
   * @returns {Observable<Comment[]>}
   */
  getComments(postId: string): Observable<Comment[]> {
    return Observable.of(mockedComments);
  }

}
