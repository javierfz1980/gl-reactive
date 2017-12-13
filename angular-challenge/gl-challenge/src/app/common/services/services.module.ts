import {NgModule} from "@angular/core";
import {PostService} from "./post.service";

const declarations = [
  PostService
];

@NgModule({
  providers: [
    ...declarations
  ]
})
export class ServicesModule {}
