const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const userInput = document.querySelector(".userInput");
const emailInput = document.querySelector(".emailInput");
const senhaInput = document.querySelector(".senhaInput");

const btn = document.getElementById("btn");

const pu = document.querySelector("#pu");
const pe = document.querySelector("#pe");
const ps = document.querySelector("#ps");

const lista2 = [];


btn.addEventListener("click", (e) => {
    e.preventDefault();


    if (lista2.length >= 3) {
        console.log("cadastrado com sucesso!!")
        setTimeout(() => {
            location.href = "./index.html";
        }, 500);

    } else if (lista2.length <= 0) {
        alert("e obrigatorio o cadastramento");
        userInput.style.border = "solid 9px red";
        emailInput.style.border = "solid 9px red";
        senhaInput.style.border = "solid 9px red";
        setTimeout(() => {
            userInput.style.border = "";
            emailInput.style.border = "";
            senhaInput.style.border = "";
        }, 800);
    }
});


usuario.addEventListener("focus", (e) => {
    console.log("Entrou");
});
usuario.addEventListener("blur", () => {
    console.log("Saiu");
    let uservalue = usuario.value;

    if (uservalue) {
        userInput.style.border = "solid 9px green";
        lista2.push(uservalue);
        pu.textContent = "";
    } else {
        userInput.style.border = "solid 9px red";
        pu.textContent = "e obrigatorio prencher este campo!";

        setTimeout(() => {
            userInput.style.border = "";
            pu.textContent = "";
        }, 800);

    }
    console.log(lista2);
});

email.addEventListener("focus", (e) => {
    console.log("Entrou");
});
email.addEventListener("blur", (e) => {
    console.log("Saiu");
    let Emailvalue = email.value;

    if (Emailvalue) {
        emailInput.style.border = "solid 9px green";
        lista2.push(Emailvalue);
        pe.textContent = "";
    } else {
        emailInput.style.border = "solid 9px red";
        pe.textContent = "e obrigatorio prencher este campo!";

        setTimeout(() => {
            emailInput.style.border = "";
            pe.textContent = "";
        }, 800);
    }
    console.log(lista2);
});

senha.addEventListener("focus", (e) => {
    console.log("Entrou");
});
senha.addEventListener("blur", (e) => {
    console.log("Saiu");
    let Senhavalue = senha.value;

    if (!Senhavalue) {
        senhaInput.style.border = "solid 9px red";
        ps.textContent = "e obrigatorio prencher este campo!";

        setTimeout(() => {
            senhaInput.style.border = "";
            ps.textContent = "";
        }, 800);

    } else if (Senhavalue.length < 8) {
        senhaInput.style.border = "solid 9px yellow";
        ps.textContent = "A senha precissa ter no minimo 8 letras!"

        setTimeout(() => {
            senhaInput.style.border = "";
        }, 800);

    } else {
        senhaInput.style.border = "solid 9px green";
        lista2.push(Senhavalue);
        ps.textContent = "";
    }
    console.log(lista2);
});