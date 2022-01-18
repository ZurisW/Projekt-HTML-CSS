document.getElementById('submit').addEventListener('click', function(e){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username != "Norbert" && password != "haslo"){
        alert("Nieprawidłowy login lub hasło!");
        e.preventDefault();
    }
});
