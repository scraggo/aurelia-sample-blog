import {inject} from 'aurelia-framework';
import {BlogPost} from './blog-post';
@inject(BlogPost)

export class BlogViewedit extends BlogPost{
  constructor(...rest) {
    super(...rest);
  }
}
