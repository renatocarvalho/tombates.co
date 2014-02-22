_.extend(Template.index, {
  rendered: function() {
    var block = document.querySelector(".block");

    block.style.marginTop = window.outerHeight + "px";
  }
});
