function setup(){
    createCanvas(300,300);
    background(225);
    stroke("black");
    strokeWeight(10);

    fill("white");
    arc(width/2, height/2, 200, 200, 0, PI, CHORD);
    
    fill("red");


    arc(width/2, height/2, 200, 200, PI, 0, CHORD);

    fill("white");

    ellipse(150, 150, 55, 55);

    fill("black");
    ellipse(150, 150, 8, 8);
    //  textSize(22);
//text("M", 10, 30);


}