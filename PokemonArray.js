myPokemonRoster = ["shroomish", "squirtle", "regigigas", "giratina", "cresselia"];
var firstToFight = myPokemonRoster[1];
var secondToFight = myPokemonRoster[2];

console.log(myPokemonRoster);

myPokemonRoster.pop();
console.log(myPokemonRoster);

myPokemonRoster.push("darkrai");
myPokemonRoster.push("reshiram");
console.log(myPokemonRoster);

for (var i=0; i < 5 ; i++){
    console.log(myPokemonRoster[i]);
}
console.log(myPokemonRoster);