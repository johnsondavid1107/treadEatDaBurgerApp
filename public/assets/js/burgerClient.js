$(document).ready(function () {

    $.ajax("/burger", {
        type: "GET"
    }).then(function (res) {
        console.log(res)
        // console.log(res.allInfo[2].id)
        console.log(res.allInfo.length)
        let devourSection = $('#devour');
       

        let allInfo = res.allInfo

        for (let i = 0; i < allInfo.length; i++) {
            devourSection.append("<div class=row id=" + i + "><div class='col-md-9 text-center'><li class=show>" + allInfo[i].id + ". " + allInfo[i].burger_name)
            $("#" + i).append("<div class=col-md-3><button class='btn btn-primary burgerBtn'data="+allInfo[i].id+">" + "Devour")

        }
    })
    $('.clickBtn').on("click",".burgerBtn", function (event) {
        let id = $(event.target).attr("data")
        console.log(id)
        console.log("This was clicked");
    })

    $("#userSbmtBtn").on("click", function(event){
        event.preventDefault();

        let burgerEntry = {
            col: "burger_name",
            val:$("#entryField").val().trim()

        } 


        $("#entryField").val('');
        
        console.log(burgerEntry)

        $.ajax("/burger", {
            type: "POST",
            data: burgerEntry,
            dataType: "json"


        }).then(function () {
            console.log(burgerEntry, "line41")
            

        })

       

        

        
    })












});