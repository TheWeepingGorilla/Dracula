Blogger.Router.map(function() {
  this.resource('posts');
});

Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('posts');
  this.resource('about');
  this.resource('contact');
  this.resource('more');
});
