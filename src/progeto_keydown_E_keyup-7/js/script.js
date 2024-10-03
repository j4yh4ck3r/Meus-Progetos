const titulo = document.querySelector("#titulo");

// keydown
document.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        console.log("Apertou o enter!");
        titulo.innerHTML = `Apertou o: ${event.key}`;
        
        titulo.style.fontSize = "60px";
        
        titulo.style.backgroundColor = "#000";
        
        titulo.style.color = "#fff";

    }


});
// keyup
document.addEventListener("keyup", (event) => {

    if (event.key === "Enter") {

        setTimeout(() => {
            titulo.innerHTML = " "
        }, 1000);

        console.log("Soltou o enter!");
        
        titulo.innerHTML = `Soltou o: ${event.code}`;
        
        titulo.style.fontSize = "57px"
        
        titulo.style.backgroundColor = "#000";
        
        titulo.style.color = "#fff";
    }


});