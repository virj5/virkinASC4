var Array = ["chicken", "water", "gum"];
var i = 0

// if (i < 2){
    console.log()//"in the first if")
    var k = 0;
    for (var i=0; i < Array.length; i++){
         console.log(Array[i]);
        if(i === Array.length -1){
            i=-1;
            k++;
        }
        if(k == 2) 
        { console.log(Array[0]);
            break;
        }

    }
    //     console.log(i)

    //     if (i > 2){
    //         console.log("trying to reduce i")
    //         i = 0
    //         console.log(i)
    //     }
    // }
//}

// else{
//     console.log("in the else statement")
//     i = 0
//     console.log("made i 0")
//     return i
// }

//var i=0 refers to what index it begins at
//name.length: name is the name of your array plus  .length at the end!