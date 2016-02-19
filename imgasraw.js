



function imgAsRaw(img, height, width)
{
  //if not in input argument, default w and h is same as img
  height = height || img.height;
  width = width || img.width;
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage( img, 0, 0 ,canvas.width,canvas.height);
  var pixels = ctx.getImageData(0,0,canvas.width,canvas.height).data;
  return pixels;
}
function loadImages(sources, callback) {
  var images = [];
  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for(var src in sources) {
    numImages++;
  }
  for(var i = 0; i < sources.length; ++i) {
    images[i] = new Image();
    images[i].crossOrigin = "Anonymous";
    images[i].onload = function() {
      if(++loadedImages >= numImages)
        callback(images);
    };
    images[i].src = sources[i];
  }
}