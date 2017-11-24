import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/post';

@Component({
  selector: 'gl-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.posts$ = this.apiService.getPosts();
  }

}
