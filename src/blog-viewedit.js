import 'fetch';
// import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {BlogPost} from './blog-post';

// let httpClient = new HttpClient();

@inject(BlogPost)
export class BlogViewedit extends BlogPost {
  constructor(...rest) {
    super(...rest);
  }
}
// @inject(BlogPost)
// export class BlogViewedit {

//   }
// }
