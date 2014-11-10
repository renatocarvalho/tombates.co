/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Iron.Router.hooks.scrollToTop = function () {
  window.scrollTo(0, 0);
  this.next();
};

Router.onBeforeAction('scrollToTop');

Router.map(function () {
  this.route('splash',      { path: '/' });
  this.route('information', { path: '/information' });
  this.route('memex',       { path: '/memex' });
});
