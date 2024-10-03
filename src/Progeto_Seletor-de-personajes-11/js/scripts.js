const dados = [
    {
        min: 1,
        max: 1,
        nome: "Mago",
        idade: 125,
        altura: 1.70,
        abilidades: "praticante de fetiçaria",
    },
    {
        min: 2,
        max: 2,
        nome: "Elfo",
        idade: 32,
        altura: 1.90,
        abilidades: "arco e flechas",
    },
    {
        min: 3,
        max: 3,
        nome: "Guerreiro",
        idade: 36,
        altura: 1.70,
        abilidades: "armas e escudos",
    },
];

const Input = document.querySelector("#input");
const divconteiner2 = document.querySelector("#div-conteiner2");
const NOME1 = document.querySelector("#NOME1");
const NOME2 = document.querySelector("#NOME2");
const NOME3 = document.querySelector("#NOME3");
const NOME4 = document.querySelector("#NOME4");
const btn = document.querySelector("#btn");
const img = document.getElementById("img");



function user(dados) {

    const valueInput = Input.value;

    let NOMEs1, NOMEs2, NOMEs3, NOMEs4;

    dados.forEach((item) => {
        if (valueInput >= item.min && valueInput <= item.max) {
            NOMEs1 = item.nome;
            NOMEs2 = item.idade;
            NOMEs3 = item.altura;
            NOMEs4 = item.abilidades;
        }
    });

    NOME1.innerText = `Nome: ${NOMEs1}`;
    NOME2.innerText = `Idade: ${NOMEs2}`;
    NOME3.innerText = `Altura: ${NOMEs3}`;
    NOME4.innerText = `abilidades: ${NOMEs4}`;

    setTimeout(() => {
        divconteiner2.style.width = "inherit";
    }, 2000);
    setTimeout(() => {
        divconteiner2.style.width = "0px";
    }, 8000);

    switch (NOMEs1) {
        case "Mago":
            img.src="./img/Mago.jpeg";
            break;
        case "Elfo":
            img.src="./img/Elfo.jpeg";
            break;
        case "Guerreiro":
            img.src="./img/Guerreiro.jpeg";
            break;
    }
}

function sonumeros(text) {
    return text.replace(/[^1-3]/g, "");
}

[Input].forEach((el) => {
    el.addEventListener("input", (e) => {
        const updateValue = sonumeros(e.target.value);

        e.target.value = updateValue;
    });
});

btn.addEventListener("click", (e) => {
    e.preventDefault();

    user(dados);
    btn.setAttribute("value", "caregando...");
    setTimeout(() => {
        btn.setAttribute("value", "escolher");
    }, 8000);
});