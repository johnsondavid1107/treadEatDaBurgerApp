$(document).ready(function(){

    $.ajax("/burger", {
        type: "GET"
    }).then(function(res){
        console.log(res)

        console.log(res.allInfo[2].id)
    })


















});