Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('recent-comments');
  this.resource('posts');
  this.resource('about');
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email');
  });
  this.resource('more');
});


