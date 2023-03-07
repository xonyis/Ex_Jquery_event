$(function() {
    $('#rgbSub').on('click', function(event) {
        let rouge = $('#rgb1').val();
        let bleu = $('#rgb2').val();
        let vert = $('#rgb3').val();
        
        if (rouge < 255 || blue < 255 || vert < 255) {
            
        } else {
            $(".colorContainer").css('background', 'rgb('+rouge+','+bleu+','+vert+')');
        }


    })

})