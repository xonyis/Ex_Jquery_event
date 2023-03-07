$(function() {
    
    $('#btnForm').on('click', function(event) {
        event.preventDefault();
        var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        let prenom = $('#fname').val();
        let nom = $('#lname').val();
        let date = $('#birth').val();
        if ($('#fname').val()=="" || $('#lname').val()=="" || $('#birth').val()=="") {
            alert("Lose")
        }else {
            if (typeof prenom === "string" || typeof nom === "string") {
                alert("Win")
            }else {
                alert('Lose 2')
            }
        }
    })
})