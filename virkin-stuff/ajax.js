var yourID = "281ab118";
var yourKey = "d4f11fd49a1e7b88dff824b1651bcd78";
var foodURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + yourID + "&appKey="+ yourKey;

$.ajax({
    url:foodURL,
    success:function(data){
        // console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $("body").append("<h1>This "+name+" has "+ cals+ " kcals</h1>");
    }

});
