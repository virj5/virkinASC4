var geoKey = "AIzaSyA0wxHfbgBC9oSjNh4mM_DYSOZoQzy37e8";


//Set database object

var database = firebase.database().ref();
//button executes this function
function updateDB(){
    var partyname = $("#partyname").val();
    var agegroup=$("#agegroup").val();
    var  address= $("#address").val();
//    var address = address.replace(/\s+/g, '+'); //Replaces spaces with + 
//     var googleurl = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+geoKey;
//    $.ajax({
//     url: googleurl,
//     dataType: 'json',
//     success: function(data) {
//         var info = data.results[0];
//          address = info.location;        
//         }
//     });



    //Update database here

    var value={
        PARTYNAME: partyname,
        ADDRESS:address,
        AGEGROUP:agegroup
    }
        database.push(value);
}
database.on("child_added", function(rowData){
    var row = rowData.val();
    var partyname = row.PARTYNAME;
    var address= row.ADDRESS;
    var agegroup = row.AGEGROUP;
}
)
