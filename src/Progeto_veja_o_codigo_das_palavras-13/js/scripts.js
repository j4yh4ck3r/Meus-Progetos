const Divtextos = document.querySelector("#Div-textos");
const Divinputs = document.querySelector("#Div-inputs");
const textInput = document.querySelector("#textInput");
const Btn2 = document.querySelector("#Btn2");
const btn = document.querySelector("#btn");
const H1 = document.querySelector("#H1");
const H2 = document.querySelector("#H2");

const list = [];
function zerandoList() {
    let time = setInterval(() => {
        list.pop(list);
        console.log(list);

        if (list.length === 0) {
            console.log("ok");
            clearInterval(time);
        }

    }, 2);
};

function filterlist() {
    list.forEach((lists) => {
        if (lists === 65 || lists === 66 || lists === 67 || lists === 68 || lists === 69 || lists === 70 || lists === 71 || lists === 72 || lists === 73 || lists === 74 || lists === 75 || lists === 76 || lists === 77 || lists === 78 || lists === 79 || lists === 80 || lists === 81 || lists === 82 || lists === 83 || lists === 84 || lists === 85 || lists === 86 || lists === 87 || lists === 88 || lists === 89 || lists === 90 || lists === 97 || lists === 98 || lists === 99 || lists === 100 || lists === 101 || lists === 102 || lists === 103 || lists === 104 || lists === 105 || lists === 106 || lists === 107 || lists === 108 || lists === 109 || lists === 110 || lists === 111 || lists === 112 || lists === 113 || lists === 114 || lists === 115 || lists === 116 || lists === 117 || lists === 118 || lists === 119 || lists === 120 || lists === 121 || lists === 122) {
            console.log("ok");
        } else {
            console.log("erro");
            list.pop();
        }
        console.log(list);
    })
}

addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
        list.pop();
        console.log(list);
    }
})

function entrouinput(){
    textInput.addEventListener("blur", (e) => {
        return console.log("ok");
    })
}

entrouinput();

textInput.addEventListener("keypress", (e) => {
    list.push(e.keyCode);
    filterlist();
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (!textInput.value) return;

    H1.innerHTML = list;
    H2.innerHTML = String.fromCharCode(...list);
    textInput.value = "";
    Divinputs.style.display = "none";
    Divtextos.style.display = "flex";
    zerandoList();
});

Btn2.addEventListener("click", (e) => {
    e.preventDefault();
    Divinputs.style.display = "flex";
    Divtextos.style.display = "none";
})