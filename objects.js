var charizard = {
    "attack" : "Blaze",
    "HP" : 266 ,
     "legendary":false,
     "types":["Fire", "Flying"]
};
console.log(charizard.attack);
console.log(charizard.hp = 166);
console.log(charizard["HP"]);
console.log(charizard.types);

function Superhero(realname){
    this.realname = realName;
}
var superman = new Superhero("Clark Kent");
console.log(superman.realname);