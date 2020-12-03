$(document).ready(function(){

    $.ajax("/burger", {
        type: "GET"
    }).then(function(res){
        console.log(res)
        // console.log(res.allInfo[2].id)
        console.log(res.allInfo.length)
        let devourSection = $('#devour');

        let allInfo = res.allInfo

        for (let i = 0; i < allInfo.length; i++){
            let element = 
            "<li>"+allInfo[i].id+
            ". "+allInfo[i].burger_name+
           "   <button type='button' class='btn btn-primary move'>Devour</button>";

           devourSection.append(element)

        }


       






        
    })


















});