function setup(){
    createCanvas(300,300);
    background(225);
    textSize(16);
    textStyle(BOLD);
    text("Type the statement to continue", 10, 30);
    textStyle(NORMAL);
    text("Please Type :", 10, 70);
    textStyle(NORMAL);
    text("Hope you have a Good Morning ", 10, 100);
    textStyle(NORMAL);
    text("Type Here:", 10, 169);
    textStyle(NORMAL);
    text("User Score:" + Score, 10, 240);
}

var Score = 0
function keyTyped(){
    if(key =="Hope you have a Good Morning"){
        console.log("You are correct buddy!")
        Score = 12;
    }else if(key =="")
    console.log("Really?!, You have failed.")


}


    
