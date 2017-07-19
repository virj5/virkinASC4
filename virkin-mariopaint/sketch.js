function setup(){
    createCanvas(700, 700);
    background(60);
    stroke("white");
    strokeWeight(5);
}
    

function mouseDragged(){
    fill(random(["purple", "blue", "yellow", "orange", "white", "green", "red", "teal", "grey", "aqua"]));
    ellipse(mouseX, mouseY, random(100), random(100));
    rect(mouseX, mouseY, random(100), random(100));
    circle(mouseX, mouseY, random(100), random(100));
    return false;
}
