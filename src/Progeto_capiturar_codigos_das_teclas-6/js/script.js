const titulo = document.querySelector("#titulo");
const titulo1 = document.querySelector("#titulo1");
const titulo2 = document.querySelector("#titulo2");
const titulo3 = document.querySelector("#titulo3");
const titulo4 = document.querySelector("#titulo4");

document.body.addEventListener('keypress', function (event) {
    const Key = event.key;
    const KeyCode = event.keyCode;
    console.log(`KeyCode: ${event.keyCode}`);
    console.log(`key: ${event.key}`);
    console.log(`Code: ${event.code}`);
    
    titulo.innerHTML = `KeyCode: ${event.keyCode}`;
    titulo1.innerHTML = `Key: ${event.key}`;
    titulo2.innerHTML = `Code: ${event.code}`;
    
    //repetetexto(`${}`, 12);

    parOuImpar(`${KeyCode}`);

    titulo.style.backgroundColor = "red";
    titulo1.style.backgroundColor = "blue";
    titulo2.style.backgroundColor = "yellow";
    titulo4.style.backgroundColor = "darkgreen";

});

const repetetexto = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
        console.log(i);
        titulo3.innerHTML = text;
    };
};

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par", n);
        titulo4.innerHTML = `${n} é Par`;
        return
    };
    console.log("Impar", n);
    titulo4.innerHTML = `${n} é Impar`;
};

const ZeraBTN = () => {
    location.href = "./index.html";
};