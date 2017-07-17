function Superhero(realName, ability, gender, name, archEnemy, age, weakness){
    this.realName = realName;
    this.ability = ability;
    this.gender = gender;
    this.archEnemy = archEnemy
    this.age = age;
    this.weakness = weakness;

this.talk = function(){
    console.log("Yo! my name is "+ realName)

}

this.callForHelp = function(call){
    console.log(call);
}

}

var superMan = new Superhero("Clark Kent", "Dat Money", "Male", "El Chapo", "40", "Kryptonite" );
var wonderWoman = new Superhero("Dianne Prince", "Flip", "Super Strength", "Female", "Donald Trump", "20", "Guns");

superMan.ability = "Laser Vision";
console.log(superMan); 
wonderWoman.archEnemy = superMan.realName;

wonderWoman.callForHelp("I'm booling out!");

superMan.callForHelp("It's not looking good right now!");