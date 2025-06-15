const imagen = document.getElementById("photo");

let tieneBorde = false;

imagen.addEventListener ("click", function() {
    if(tieneBorde) {
    imagen.style.border = "none";
    } else {
        imagen.style.border = "2px solid red";
    }
    tieneBorde = !tieneBorde;
});