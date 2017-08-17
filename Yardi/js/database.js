var geoKey = "AIzaSyA0wxHfbgBC9oSjNh4mM_DYSOZoQzy37e8";


//Set database object

var database = firebase.database().ref();
//button executes this function
function updateDB(){
    var partyname = $("#partyname").val();
    var agegroup=$("#agegroup").val();
    var addressStore = $("#address").val();
    var  address= $("#address").val();
     var address = address.replace(/\s+/g, '+'); //Replaces spaces with +
     var cord = {}; 
     var latitude = "";
     var longitude = "";
    var googleurl = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+geoKey;
   $.ajax({
    url: googleurl,
    dataType: 'json',
    success: function(data) {
        var info = data.results[0];
         var coordinates = info.geometry.location;   
         useReturnData(coordinates);     
        }
    });
    function useReturnData(coordinates){
        cord = coordinates;
        latitude = cord.lat;
        longitude = cord.lng;
        
        
     

    //Update database here

    var value={
        PARTYNAME: partyname,
        LAT: latitude,
        LONG: longitude,
        ADDRESS: addressStore,
        COORDINATES:cord,
        AGEGROUP:agegroup
    }
        database.push(value);
}
database.on("child_added", function(rowData){
    var row = rowData.val();
    var partyname = row.PARTYNAME;
    var latitude = row.LAT;
    var longitude = row.LONG;
    var addressStore = row.ADDRESS;
    var cord = row.COORDINATES;
    var agegroup = row.AGEGROUP;
}
)
}
