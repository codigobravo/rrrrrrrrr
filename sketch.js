let img;
let resolution = 10;

function preload(){
  img = loadImage('assets/photo3.jpg')
}
//only run once
function setup(){
  createCanvas(img.width, img.height);
  noStroke();
}

function draw() {
  resolution = round(map(mouseY, 0, width, 5,  15));
  console.log(resolution);
  
  //access the pixel information of the image
  for(let x = 0; x < width; x += resolution){
    for(let y = 0; y < height; y += resolution){
      let c = img.get(x, y);
      fill(color(c));
      rect(x, y, resolution, resolution);
    }   
  }
}