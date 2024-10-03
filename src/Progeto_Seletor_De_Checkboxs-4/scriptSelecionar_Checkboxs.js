var checkboxs = document.querySelectorAll(".checkbox");

var selecionados = 0;

var btn = document.querySelector("#send");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    selecionados = 0;

    checkboxs.forEach(function(el) {
        if(el.checked){
            selecionados++;
        }
    });

    console.log(selecionados);
});