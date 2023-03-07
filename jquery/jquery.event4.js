$(function() {
    $('#rgbSub').on('click', function(event) {
        if ($('#rgb1').val()=="") {
            
            $( "input" ).focus(function() {
                $( this ).css( "border-color", "red" )
              });
        }

        if ($('#rgb2').val()=="") {
            alert("veuillez remplir le champ vert")
        }

        if ($('#rgb3').val()=="") {
            alert("veuillez remplir le champ bleu")
        }


        if ($('#rgb1').val() > 255 || $('#rgb2').val() > 255 || $('#rgb3').val() > 255) {
            alert("entre 0 et 255")
        } else {
            $('.colorContainer').css("background-color", "rgb("+ $('#rgb1').val() +","+ $('#rgb2').val()+","+ $('#rgb3').val()+")");
        }
       
    })

})

