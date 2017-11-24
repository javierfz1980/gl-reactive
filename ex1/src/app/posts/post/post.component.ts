import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import {ApiService} from '../../services/api.service';
import {Post} from '../../models/post';
import {Location} from '@angular/common';

@Component({
  selector: 'gl-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {}

  ngOnInit() {
    this.post$ = this.route.url
      .switchMap(() => this.apiService.getPostWithComments(this.route.snapshot.firstChild.params['id']))
  }

  goHistoryBack() {
    this.location.back()
  }

  goParent() {
    this.router.navigate(['../'])
  }



}
