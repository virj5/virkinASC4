
var x = 0;
var y = 0;
var xspeed = 6;
var yspeed = 7;
// var Ry = 150;
var Av = 50;
var Kv = 100;

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
	background (25);

	//distance from center of the screen
	var d = dist(600, 600, mouseX, mouseY);

  	fill ("aqua");
  	ellipse (x, y, 70, 70);
	fill ("white");

	if (keyIsDown (UP_ARROW))
			 Av -= 10;
		
	else if(keyIsDown (DOWN_ARROW))
			Av += 10;
		

	if (keyIsDown (SHIFT))
			 Kv -= 10;
		
	else if(keyIsDown (CONTROL))
			Kv += 10;

	rect(10, Av, 20, 200);
	rect(550, Kv, 20, 200);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	  if (x > 600 || x < 0)  {
     	 xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > 600 || y < 0) {
	 	  yspeed = -yspeed;
  	}
	 // Ry = y;

	if (x >= 550 && y > 150 && y < 350){
		 xspeed = -xspeed;
		 yspeed = -yspeed;
		console.log(x + " " + y)
	}

// function keyIsDown(){
// 		if (keyIsDown (UP_ARROW))
// 			 Av -= 50;
		
// 		else if(keyIsDown (DOWN_ARROW))
// 			Av += 50;
		

// 		if (keyIsDown (SHIFT))
// 			 Kv -= 50;
		
// 		else if(keyIsDown (CONTROL))
// 			Kv += 50;
		
	
	
// }

}

// function keyIsDown(){
// 		if (keyIsDown (UP_ARROW)){
// 			 Av -= 50
// 		}
// 		else if(keyIsDown (DOWN_ARROW)){
// 			Av += 50
// 		}

// 		if (keyIsDown (SHIFT)){
// 			 Kv -= 50
// 		}
// 		else if(keyIsDown (CONTROL)){
// 			Kv += 50
// 		}
	
	
// }








