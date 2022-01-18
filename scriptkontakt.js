document.getElementById('submit2').addEventListener('click', function(e){
    var tytul = document.getElementById('tytul').value;
    var wiad = document.getElementById('wiadomosc').value;

    if(tytul == "" || wiad == ""){
        alert("Brak tytułu bądź wiadomości!");
        e.preventDefault();
    }
});