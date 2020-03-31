// Code below is to register the component to handle the curved images to change the video

AFRAME.registerComponent("handle-video", {
  schema: {},
  init: function() {
    var el = this.el;

    el.addEventListener("click", function() {
      var elid = el.id;
      var videoViewer = document.querySelector("#videowall");

      //console.log(videoViewer.src);

      switch (elid) {
        case "redpill-button":
          videoViewer.setAttribute("src", "#redpill-video");
          break;
        case "bluepill-button":
          videoViewer.setAttribute("src", "#bluepill-video");
          break;
        default:
          videoViewer.setAttribute("src", "#matrix-video");
      }
      videoViewer.play();
    });
  },
  update: function() {},
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});

// Code below is to register the component to handle the shapes being clicked for the "game"

AFRAME.registerComponent("handle-shape", {
  schema: {},
  init: function() {
    var el = this.el;

    var cylinderScore = 0;
    var sphereScore = 0;
    var boxScore = 0;

    el.addEventListener("click", function() {
      var elid = el.id;
      var textScoreObject = document.querySelector("#" + elid + "-score");

      switch (elid) {
        case "sphere":
          sphereScore++;
          var score = "Sphere: " + sphereScore;
          textScoreObject.setAttribute("value", score);
          break;
        case "cylinder":
          cylinderScore++;
          var score = "Cylinder: " + cylinderScore;
          textScoreObject.setAttribute("value", score);
          break;
        case "box":
          boxScore++;
          var score = "Box: " + boxScore;
          textScoreObject.setAttribute("value", score);
          break;
      }
      var kapowAnimate = document.querySelector("#kapow-graphic").emit("jump");
    });
  },
  update: function() {},
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});

// Code b

function rockOut() {
  console.log("make stuff");
}
