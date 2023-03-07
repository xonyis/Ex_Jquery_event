$(document).ready(function() {
    let size =  $('#inSize').val();
    let posX = $('#inPosX').val();
    let posY = $('#inPosY').val();
    $('.sqrt').width('10px')
    $('.sqrt').height('10px')

    $('#carreSubmit').click(function() {
        $('.sqrt').width(size + 'px')
        $('.sqrt').height(size + 'px')

    })
})