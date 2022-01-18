document.getElementById('submit').addEventListener('click', function(e){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('adres').value;

    var checkbox = document.getElementById('checkbox');
    
    passwdChars = /(?=.*\d)(?=.*[!@#$%\^&*)(+=._-])(?=.*[A-Z]).{6,}/g;
    emailChars = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    userChars = /^[a-zA-Z0-9]{1,20}$/;

    if(!username.match(userChars) || !password.match(passwdChars) || !email.match(emailChars)){
        alert("Nieprawidłowy email, login lub hasło!");
        e.preventDefault();
    }

    if(!checkbox.checked) {
        alert("Zaznacz checkboxa!");
        e.preventDefault();
    }
});