/* ==================================== */
Paper.install(window);
Colony = {};
/* ==================================== */


/* ==================================== */
_.extend(Template.hackingAnts, {
  created: function() {
    this.setup = function() {
      this.holding = document.querySelector('.hacking-ants__desc');
      this.canvas = document.querySelector("#van-gogh");
      this.dWidth = window.innerWidth;
      this.dHeight = 500;

      Paper.setup(this.canvas);
      this.setCanvasSize();

      return this;
    };

    this.setCanvasSize = function() {

      view.viewSize = new Size(this.dWidth, this.dHeight);

      return this;
    }

    this.eventBinding = function() {
      var self = this;

      window.addEventListener("resize", function(event) {
        Meteor.setTimeout(function() {
          self.dWidth = window.innerWidth;
          self.setCanvasSize();
        }, 100);
      });

      return this;
    }
  },
  rendered: function() {
    var self = this;

    this.eventBinding()
        .setup();

    for (var i = 0; i < 30; i++) {
      x = new Ant({ _id: i });
      Colony[x._id] = x;
    };

    view.onFrame = function() {
      if (window.innerWidth >= 581) {
        for (var key in Colony) {
          Colony[key].checkBounds().march()
        }
      }
    }
  },
  destroyed: function() {}
});
/* ==================================== */


/* ==================================== */
function Ant(options) {
  this.options = options || {};
  this.init();
};

Ant.prototype.init = function() {
  this._id = this.options._id;

  var _randomPoint = new Point(
    this.thinkOfANumber(0, view.size.width),
    this.thinkOfANumber(0, view.size.height)
  );

  this.pos = {
    startPoint: _randomPoint,
    directionLat: this.flipTheCoin(50),
    directionLon: this.flipTheCoin(50),
    speedLat: this.thinkOfANumber(1, 3),
    speedLon: this.thinkOfANumber(1, 3),
    rotation: this.thinkOfANumber(-5, 5)
  };

  this.draw();
};

Ant.prototype.draw = function() {
  this.path = new Path.RegularPolygon({
    center: this.pos.startPoint,
    sides: 6,
    radius: this.thinkOfANumber(8, 15),
    selected: true,
    selectedColor: "red"
  });
};

Ant.prototype.thinkOfANumber = function thinkOfANumber(start, end) {
  var number = Math.floor(
    Math.random() * (end - start + 1) + start
  );

  while (number === 0) {
    number = Math.floor(
      Math.random() * (end - start + 1) + start
    );
  }

  return number;
}

Ant.prototype.flipTheCoin = function flipTheCoin(probability) {
  var _random = this.thinkOfANumber(0, 100),
      _result = (_random >= probability) ? true : false;

  return _result;
}

Ant.prototype.march = function march() {
  var _mv = this.pos;

  if (_mv.directionLat === true) {
    this.path.position.x += _mv.speedLat;
  }
  else {
    this.path.position.x -= _mv.speedLat;
  }

  if (_mv.directionLon === true) {
    this.path.position.y += _mv.speedLon;
  }
  else {
    this.path.position.y -= _mv.speedLon;
  }

  this.path.rotate(this.pos.rotation);

  return this;
}

Ant.prototype.checkBounds = function checkBounds() {
  if (this.path.bounds.x <= 0) {
    this.pos.directionLat = true;
    this.pos.rotation = this.thinkOfANumber(-3, 3);
  }

  if (this.path.bounds.x + this.path.bounds.width >= view.bounds.width) {
    this.pos.directionLat = false;
    this.pos.rotation = this.thinkOfANumber(-3, 3)
  }

  if (this.path.bounds.y <= 0) {
    this.pos.directionLon = true;
    this.pos.rotation = this.thinkOfANumber(-3, 3)
  }

  if (this.path.bounds.y + this.path.bounds.height >= view.bounds.height) {
    this.pos.directionLon = false;
    this.pos.rotation = this.thinkOfANumber(-3, 3)
  }

  return this;
}
/* ==================================== */
