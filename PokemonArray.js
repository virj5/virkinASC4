myPokemonRoster = ["shroomish", "squirtle", "regigigas", "giratina", "cresselia"];
var firstToFight = myPokemonRoster[1];
var secondToFight = myPokemonRoster[2];
console.log (firstToFight);
console.log (secondToFight);
myPokemonRoster.pop("cresselia");
myPokemonRoster.push("darkrai");
myPokemonRoster.push("reshiram");
for (var i=0; i < 5 ; i++){
    console.log(myPokemonRoster[i]);
}