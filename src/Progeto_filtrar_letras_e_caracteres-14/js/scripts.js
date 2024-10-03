window.addEventListener("load", () => {
    alert("Se você esta vendo. Esta pagina.\nSaiba que ela não esta pronta!\nVolte condo ela estever pronta. até maiss!! :)\nÉ parabéns pelo achado!! você e increvel!!");
    
    location.href = "../../index.html";
});

// const str = "jay@gMail.com";
// const regexp = /[a-zA-Z]/g;
// const matches_array = str.match(regexp);
const H1 = document.querySelector("#H1");

// console.log(matches_array);

const texto = document.querySelector("#texto");
const btn = document.querySelector("#btn");

const list = [];
const list2 = [];

btn.addEventListener("click", (e) => {
    e.preventDefault();
    filter1();
    // console.log(list);
    console.log(list);

});

function filter1(){

    const Texto = texto.value;

    
    const filter = /[a-zA-Z@]/g;
    const filter2 = /(?<gmail>@gmail.com)/;
    
    const textofiltrado = Texto.match(filter);
    list.push(textofiltrado);
    //const textofiltrado2 = list2[0].match(filter2);

    console.log(textofiltrado);

    //H1.innerHTML = textofiltrado2;
    // console.log(Texto);
    // list.push(Texto);
    //console.log(textofiltrado2);

}


// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

// const capturingRegex = /(?<animal>fox|cat) jumps over/;
// const found = paragraph.match(capturingRegex);
// console.log(found.groups);

// const str2 = "nada se perde, tudo se transforma";

// console.log(str2.match());

// const Str1 = "NaN significa 'não é um número'. Infinity contem -Infinity e +Infinity em JavaScript.";
// const Str2 = "Meu avô tem 65 anos e minha avô tem 63.";
// const Str3 = "O contrato foi declarado null (nulo) e void (sem efeito)";
// console.log(Str1.match("número"));
// console.log(Str1.match(NaN));
// console.log(Str1.match(Infinity));
// console.log(Str1.match(+Infinity));
// console.log(Str1.match(-Infinity));
// console.log(Str2.match(65));
// console.log(Str2.match(+65));
// console.log(Str3.match(null));