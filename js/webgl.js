// webgl.js

window.onload = function() {
  var canvas = document.getElementById('canvas');
  canvas.width = 500;
  canvas.height = 300;

  var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
};
