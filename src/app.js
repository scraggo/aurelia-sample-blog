export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'blog-viewedit'], name: 'blog-viewedit', moduleId: 'blog-viewedit', nav: true, title: 'View / Edit Blog' },
      { route: 'blog-post',  name: 'blog-post', moduleId: 'blog-post', nav: true, title: 'New Blog Post' }
    ]);

    this.router = router;
  }
}
