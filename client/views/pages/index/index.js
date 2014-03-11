_.extend(Template.index, {
  created: function() {
    this.setFirstBlockMargin = function setFirstBlockMargin() {
      var block = document.querySelector(".block[data-margin]"),
          windowHeight = window.innerHeight + "px";

      if (block) {
        block.style.marginTop = windowHeight;
      }

      return this;
    };

    this.eventBinding = function eventBinding() {
      var self = this
;
      window.addEventListener('resize', function(event) {
        Meteor.setTimeout(function() {
          self.setFirstBlockMargin();
        }, 500);
      });

      return this;
    };
  },

  rendered: function() {
    this.setFirstBlockMargin().eventBinding();
  }
});
