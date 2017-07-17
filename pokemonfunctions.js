function randletter(){
    var alphabets  = "abcdefghijklmnopqrstuvwxyz";
    var randomNumber = Math.floor(Math.random() * alphabets.length);

    var randomLetter = alphabets[randomNumber];
    
    Math.random() * alphabets.length;

    return randomLetter;
}
//Random Word, creates a word from a random length from random letters
randletter();
console.log(randletter());

function randWord(){
    // Random length of random numbers

    var randomLength = Math.round(Math.random() * 20);

    // Get a random number length of random letters

    
    for (var i=0; i<randomLength; i++){
        var randomLetter = randletter();
        console.log(randomLetter);
    }
}

randWord();


