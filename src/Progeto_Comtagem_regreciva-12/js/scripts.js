const h1 = document.querySelector("#h1");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let tempo = 10;
    let timer1 = setInterval(() => {
        h1.innerHTML = tempo;

        if(tempo == 10){
            btn.style.display = "none";
        }

        if(tempo == -1){
            clearInterval(timer1);
            h1.innerHTML = "contagem regreciva";
            btn.style.display = "flex";
        }
        tempo--;
    }, 1000);
});