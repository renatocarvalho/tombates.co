
/*****************************************************************************/
/* GlobalHeader: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.GlobalHeader.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.GlobalHeader.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* GlobalHeader: Lifecycle Hooks */
/*****************************************************************************/
Template.GlobalHeader.created = function () {
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
  }
};

Template.GlobalHeader.rendered = function () {
  this.headroomSetup();
};

Template.GlobalHeader.destroyed = function () {
  this.headroom.destroy();
};


