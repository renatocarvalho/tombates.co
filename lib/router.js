/* ==================================== */
Router.configure({
  layoutTemplate: 'pageLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});
/* ==================================== */


/* ==================================== */
Router.map(function() {
  this.route('index', {
    path: "/"
  });

  this.route('information', {
    path: "/information"
  });

  this.route('memex', {
    path: "/memex"
  });
});
/* ==================================== */

/* ==================================== */
Router.after(function () {
  window.scrollTo(0, 0);
});
/* ==================================== */
