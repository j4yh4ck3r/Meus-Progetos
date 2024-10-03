const brendinput = document.querySelector("#brend");
const h3 = document.querySelector("#h3");

brendinput.addEventListener("keydown", (e) => {

    if(!checkChar(e)){
        e.preventDefault();
    }

    const inputValue = brendinput.value;
    h3.innerHTML = inputValue;
});

function checkChar(e){

    const Char = String.fromCharCode(e.keyCode);

    console.log(e.keyCode);

    const pattern = '[a-zA-Z0-9]';

    if(Char.match(pattern)){
        console.log(Char);
        return true;
    }

}