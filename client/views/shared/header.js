_.extend(Template.header, {
  created: function() {
    this.headroom = {};
  },

  rendered: function() {
    var headerElement;

    headerElement = document.querySelector('.header');
    this.headroom = new Headroom(headerElement, {
      "tolerance": 5,
      "offset": 205,
      classes : {
        initial : "header",
        pinned : "header--pinned",
        unpinned : "header--unpinned"
      }
    });
    this.headroom.init();
  },

  destroyed: function() {
    this.headroom.destroy();
  }
});
