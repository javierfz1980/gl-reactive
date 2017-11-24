import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './posts/post/post.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'post', component: PostComponent, children:
    [
      {path: ':id', component: PostComponent},
      {path: '', redirectTo: '/posts', pathMatch: 'full'}
    ]
  },
  {path: '**', redirectTo: 'posts'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

