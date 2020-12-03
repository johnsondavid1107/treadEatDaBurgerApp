$(document).ready(function () {

    $.ajax("/burger", {
        type: "GET"
    }).then(function (res) {
        console.log(res)
        // console.log(res.allInfo[2].id)
        console.log(res.allInfo.length)
        let devourSection = $('#devour');
        let divRow = $("<div>").addClass("row")
        let divCol9 = $("<div>").addClass("col-md-9")
        let divCol3 = $("<div>").addClass("col-md-3")

        let allInfo = res.allInfo

        for (let i = 0; i < allInfo.length; i++) {
            devourSection.append("<div class=row id=" + i + "><div class='col-md-9 text-center'><li class=show>" + allInfo[i].id + ". " + allInfo[i].burger_name)
            $("#" + i).append("<div class=col-md-3><button class='btn btn-primary'data="+i+">" + "Devour")

        }



        $("#burgerBtn").on("click", function () {
            console.log("This was clicked");
        })










    })


















});