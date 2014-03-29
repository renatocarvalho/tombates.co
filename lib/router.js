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
    path: "/",
    onBeforeAction: function() {
      GAnalytics.pageview("/");
    }
  });

  this.route('information', {
    path: "/information",
    onBeforeAction: function() {
      GAnalytics.pageview("/information");
    }
  });

  this.route('memex', {
    path: "/memex",
    onBeforeAction: function() {
      GAnalytics.pageview("/memex");
    }
  });
});
/* ==================================== */

/* ==================================== */
Router.onAfterAction(function () {
  window.scrollTo(0, 0);
});
/* ==================================== */
