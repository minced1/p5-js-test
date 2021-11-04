let cols, rows;
let scale = 20
let w = 1000;
let h = 1000;
let terrain = [[],[]];

function setup() {
  createCanvas(1000, 1000, WEBGL);
  cols = w/scale;
  rows = h/scale;
  /*for(y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      terrain[x][y] = random(-10, 10);
    }
  }*/
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  translate(w/2, h/2);
  rotateX(PI/3);

  translate(-w, -h);
  for(y = 0; y < rows-1; y++){
    beginShape(TRIANGLE_STRIP);
    for(let x = 0; x < cols; x++){
      vertex(x*scale, y*scale, random(-10, 10));
      vertex(x*scale, (y+1)*scale, random(-10, 10));
    }
    endShape();
  }
}
