$(function() {
    $('#btnForm').on('click', function(event) {
        event.preventDefault();
        let prenom = $('#fname').val();
        let nom = $('#lname').val();
        let date = $('#birth').val();
        console.log(prenom, nom, date);

        $('.rFname').text('Prenom :' + prenom)
        $('.rLname').text('Nom :' + nom)
        $('.rBirth').text('Date :' + date)
    })

})