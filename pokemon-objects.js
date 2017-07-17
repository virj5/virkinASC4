//var zekrom = {
  //  "name" : "Zekrom",
  //  "types": ["Dragon", "Electric"],
  //  "HP" : 303,
  //  "DEF" : 120,
  //  "ATK" : 150,
  //  "Legendary" : true  
//};

//function printRoster(){
  //  for(var i=0; i<1; i++){
  //      console.log(zekrom.name);
  //      console.log(zekrom.types);
  //      console.log(zekrom["HP"]);
  //      console.log(zekrom["DEF"]);
  //      console.log(zekrom["ATK"]);
  //      console.log(zekrom["Legendary"]);
  //  }
   
//}
//printRoster();


function myPokemon(name, types, HP, DEF, ATK,isLegend){
    this.name = name;
    this.types = types;
    this.HP = HP;
    this.DEF = DEF;
    this.ATK = ATK;
    this.isLegend = isLegend;
}

var zekrom = new myPokemon("Zekrom", ["Dragon", "Electric"], "303", "120", "150","true" );
console.log(zekrom);

//At Home just repeat the steps taken here!!!!


