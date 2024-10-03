// função de pegar textos do input //

function PegarTexto(){
    const subetitulo = document.getElementById("subetitulo");
    const campoTexto = document.querySelector("#campo");
    let campoTexto1 = campoTexto.value;
    console.log(campoTexto1);
    
    let subetitulo1 = subetitulo.innerText = `Foi isso que voçe escreveu!! ${campoTexto1}`;
};