var circles = [];

function setup() {
  createCanvas(400, 400);
  for (var a = 10; a < width; a += 50) {
    for (var b = 10; b < height; b += 50) {
      circles.push(new Circle(a, b));
    }
  }
  console.log(circles.length);

}

function draw() {
  background(50);
  for (var b = 0; b < circles.length; b++) {
    circles[b].show();
  }
}

function Circle(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 9, 9);
  }
}
































// function setup(){
//     createCanvas(800,800);
// }


// function draw(){
//     background(225);
//     rect(0,0,799,799);
//     fill("white");
//     line(100,0,100,800);
//     line(200,0,200,800);
//     line(300,0,300,800);
//     line(400,0,400,800);
//     line(500,0,500,800);
//     line(600,0,600,800);
//     line(700,0,700,800);
//     line(800,0,799,800);
//     line(0,100,800,100);
//     line(0,200,800,200);
//     line(0,300,800,300);
//     line(0,400,800,400);
//     line(0,500,800,500);
//     line(0,600,800,600);
//     line(0,700,800,700);
// }