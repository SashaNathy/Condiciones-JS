const sticker1 = document.getElementById("sticker1");
const sticker2 = document.getElementById("sticker2");
const sticker3 = document.getElementById("sticker3");
const message = document.getElementById("message");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    const count = (Number(sticker1.value) || 0) + (Number(sticker2.value) || 0) + (Number(sticker3.value) || 0);
    // if (count > 10) {
    //     message.innerHTML = `Llevas demasiados stickers`; 
    //     message.style.color = "red";
    // } else if (count > 0 && count <= 10 ) {
    //     message.innerHTML = `Llevas ${count} stickers`;
    //     message.style.color = "black";
    // } else {
    //     message.innerHTML = `No has seleccionado ningun sticker`;
    // };
    

    //Lo hice con if pero tambien esta intersante para practicar usar el switch.
    switch (true) {
        case (count > 10) :
                message.innerHTML = `Llevas demasiados stickers`; 
                message.style.color = "red";
                break;

        case (count > 0 && count <= 10 ) :
                message.innerHTML = `Llevas ${count} stickers`; 
                message.style.color = "black";
                break;

        default: 
                message.innerHTML = `No has seleccionado ningun sticker`;       
        
} 
});