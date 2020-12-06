$(document).ready(function () {

    $.ajax("/burger", {
        type: "GET"
    }).then(function (res) {


        let devourSection = $('#devour');


        let allInfo = res.allInfo

        for (let i = 0; i < allInfo.length; i++) {
            if (res.allInfo[i].devoured === 0) {
                devourSection.append("<div class=row id=" + i + "><div class='col-md-9 text-center'><li class=show>" + allInfo[i].id + ". " + allInfo[i].burger_name)
                $("#" + i).append("<div class=col-md-3><button class='btn btn-primary burgerBtn'data=" + allInfo[i].id + ">" + "Devour")
            }
        }

        for (let i = 0; i < allInfo.length; i++) {

            if (res.allInfo[i].devoured === 1) {
                console.log(res.allInfo[i])

                let deleteSection = $("#delete");
                deleteSection.append("<div class=row><div class='col-md-9 text-center' id=delete" + res.allInfo[i].id + "><li class=show>" +
                    res.allInfo[i].id + ". " + res.allInfo[i].burger_name);

                $("#delete" + res.allInfo[i].id).after(
                    "<div class=col-md-3><button class='btn btn-danger burgerBtn'data=" + res.allInfo[i].id + ">" + "Delete");


            }
        }
    })



    $('.clickBtn').on("click", ".burgerBtn", function (event) {
        let id = $(event.target).attr("data")
        console.log(id)
        console.log("This was clicked");


        $.ajax("/burger/" + id, {
            type: "PUT",

        }).then(function () {
            console.log("Success")
        })

        $("#" + (parseInt(id - 1))).empty();
        console.log(parseInt(id - 1))
        location.reload();




    });

    $('clickBtn').on("click", ".deleteBtn", function (event) {
        let id = $(event.target).attr("data")

        $.ajax("/burger/" + id, {
            type: "DELETE"
        }).then(function (res) {
            console.log(res)
            $("#" + (id - 1)).empty();

        })
    })


    $("#userSbmtBtn").on("click", function (event) {
        event.preventDefault();
        if (!$("#entryField").val()) {
            alert('Please enter a valid input')
            return;
        }

        let burgerEntry = {
            col: "burger_name",
            val: $("#entryField").val().trim()

        }

        $("#entryField").val('');


        $.ajax("/burger", {
            type: "POST",
            data: burgerEntry,
            dataType: "json"

        }).then(function () {
            console.log(burgerEntry, "line41")

        });


        $.ajax("/burger", {
            type: "GET",
        }).then(function (res) {

            let devourSection = $('#devour');
            // devourSection.appendChild()

            let lastEntry = res.allInfo[res.allInfo.length - 1]
            console.log(lastEntry.id)

            for (let i = lastEntry.id; i < lastEntry.id + 1; i++) {
                devourSection.append("<div class=row id=" + i + "><div class='col-md-9 text-center'><li class=show>" + lastEntry.id + ". " + lastEntry.burger_name);

                $("#" + i).append("<div class=col-md-3><button class='btn btn-primary burgerBtn'data=" + lastEntry.id + ">" + "Devour")



            }
        })

    })












});