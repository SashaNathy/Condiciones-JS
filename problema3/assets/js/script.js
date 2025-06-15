const p1 = document.getElementById("n1");
const p2 = document.getElementById("n2");
const p3 = document.getElementById("n3");
const response = document.getElementById("message")

const password1 =  "911";
const password2 =  "714";

document.getElementById("submit").addEventListener("click", () => {
    const passwordOk = p1.value + p2.value + p3.value;
    console.log(passwordOk);
    if (password1 === passwordOk) {
        response.innerHTML = `Password 1 correcto`;
        
    } else if (password2 == passwordOk) {
        response.innerHTML = `Password 2 correcto`;
        
    } else {
        response.innerHTML = `Password introducido es incorrecto`;
        response.style.color = "red";
        response.style.fontSize = "large";
    };

    
});