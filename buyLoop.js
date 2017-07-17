var prompt = require('prompt-synce')();

var money = 1000;

var louisVuittonDufflebag = [];

while(money > 100){
console.log("You have $" + money + "left")
var answer = prompt("You can buy yeezy's for 400, or gucci flip flops for 200, or raybans for 100. What do you want to buy ?");

    if(answer.toLowerCase() == "Yeezys" && money >= 500){
        money = money - 400;

        louisVuittonDuffleBag.push("Yeezys");
        console.log("You have successfuly bought these pair of yeezys");
    }
    else if(answer.toLowerCase() == "Gucci Flip Flops" && money >= 300){
        money = money - 200;
        louisVuittonDuffleBag.push("Gucci Flip Flops");
        console.log("You have successfully bought this pair of Gucci Flip Flops")
    }
    else if(answer.toLowerCase() == "Ray Bans" && money >= 200){
        money = money - 100;
        louisVuittonDuffleBag.push("Ray Bans");
        console.log("You have successfuly bought this pair of Ray Bans")
    }
    else{
        console.log("You can't get this item");
    }

}
console.log("Leave, you're broke !");