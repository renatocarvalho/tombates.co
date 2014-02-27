_.extend(Template.index, {
  created: function() {
    this.setFirstBlockMargin = function setFirstBlockMargin() {
      var block = document.querySelector(".block"),
        windowHeight = window.innerHeight + "px";

      block.style.marginTop = windowHeight;

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

      window.addEventListener('scroll', function(event) {
        var hero = document.querySelector(".hero");

        if (document.body.scrollTop > window.innerHeight) {
          hero.classList.add("is-covered");
        }
        else if (document.body.scrollTop < window.innerHeight && hero.classList.contains("is-covered")) {
          hero.classList.remove("is-covered");
        };
      });

      return this;
    };
  },

  rendered: function() {
    this.setFirstBlockMargin().eventBinding();
  }
});
