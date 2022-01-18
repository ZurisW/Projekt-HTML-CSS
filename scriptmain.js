function myFunction() {
    var x = document.getElementById("links");
    var ogl = document.getElementById("ogl");
    var ph = document.getElementById("ph");
    var news = document.getElementById("news");
    var wiad = document.getElementById("wiad");
    if (x.style.display === "block") {
        x.style.display = "none";
        ogl.innerHTML = "Dodaj ogłoszenie";
        ph.innerHTML = "&phone; Kontakt";
        news.innerHTML = "ጸ Zaloguj";
        wiad.innerHTML = "✉ Wiadomości";
    } else {
        x.style.display = "block";
        ogl.innerHTML = "⌨";
        ph.innerHTML = "&phone;";
        news.innerHTML = "ጸ";
        wiad.innerHTML = "✉";
    }
}

window.addEventListener('resize', function(){
    var x = document.getElementById("links");
    var ogl = document.getElementById("ogl");
    var ph = document.getElementById("ph");
    var news = document.getElementById("news");
    var wiad = document.getElementById("wiad");

    if(window.innerWidth > 1200){
        x.style.display = "block";
        ogl.innerHTML = "Dodaj ogłoszenie";
        ph.innerHTML = "&phone; Kontakt";
        news.innerHTML = "ጸ Zaloguj";
        wiad.innerHTML = "✉ Wiadomości";
    }

    if(window.innerWidth < 1200 && x.style.display === "block") {
        x.style.display = "block";
        ogl.innerHTML = "⌨";
        ph.innerHTML = "&phone;";
        news.innerHTML = "ጸ";
        wiad.innerHTML = "✉";
    }
});
