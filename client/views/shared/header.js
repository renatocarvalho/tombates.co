_.extend(Template.header, {
  created: function() {
    this.headroom = {};

    this.headroomSetup = function headroomSetup() {
      var headerElement;

      headerElement = document.querySelector('.header');
      this.headroom = new Headroom(headerElement, {
        "tolerance": 5,
        "offset": 150,
        classes : {
          initial : "header",
          pinned : "header--pinned",
          unpinned : "header--unpinned"
        }
      });

      this.headroom.init();

      return this;
    };
  },

  rendered: function() {
    this.headroomSetup();
  },

  destroyed: function() {
    this.headroom.destroy();
  }
});
