



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