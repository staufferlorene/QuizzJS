// Sélectionner un élément avec son ID
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn10 = document.getElementById("btn-10");
const btn11 = document.getElementById("btn-11");
const btn12 = document.getElementById("btn-12");
const btn13 = document.getElementById("btn-13");
const btn14 = document.getElementById("btn-14");
const btn15 = document.getElementById("btn-15");
const btn16 = document.getElementById("btn-16");
const btn17 = document.getElementById("btn-17");
const btn18 = document.getElementById("btn-18");
const btn19 = document.getElementById("btn-19");
const btn20 = document.getElementById("btn-20");

// Quizz
const response = document.querySelector("button");

// Fonction pour réinitialiser la couleur des boutons
function resetButtonColors1() {
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
}
function resetButtonColors2() {
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
}

function resetButtonColors3() {
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "";
}

function resetButtonColors4() {
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "";
}

function resetButtonColors5() {
    btn9.style.backgroundColor = "";
    btn10.style.backgroundColor = "";
}

function resetButtonColors6() {
    btn11.style.backgroundColor = "";
    btn12.style.backgroundColor = "";
}

function resetButtonColors7() {
    btn13.style.backgroundColor = "";
    btn14.style.backgroundColor = "";
}

function resetButtonColors8() {
    btn15.style.backgroundColor = "";
    btn16.style.backgroundColor = "";
}

function resetButtonColors9() {
    btn17.style.backgroundColor = "";
    btn18.style.backgroundColor = "";
}

function resetButtonColors10() {
    btn19.style.backgroundColor = "";
    btn20.style.backgroundColor = "";
}

// Changement couleur en fonction de la réponse

btn1.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors1();
    btn1.style.backgroundColor = "red";
});

btn2.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors1();
    btn2.style.backgroundColor = "green";
});

btn3.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors2();
    btn3.style.backgroundColor = "green";
});

btn4.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors2();
    btn4.style.backgroundColor = "red";
});

btn5.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors3();
    btn5.style.backgroundColor = "red";
});

btn6.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors3();
    btn6.style.backgroundColor = "green";
});

btn7.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors4();
    btn7.style.backgroundColor = "green";
});

btn8.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors4();
    btn8.style.backgroundColor = "red";
});

btn9.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors5();
    btn9.style.backgroundColor = "red";
});

btn10.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors5();
    btn10.style.backgroundColor = "green";
});

btn11.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors6();
    btn11.style.backgroundColor = "green";
});

btn12.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors6();
    btn12.style.backgroundColor = "red";
});

btn13.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors7();
    btn13.style.backgroundColor = "red";
});

btn14.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors7();
    btn14.style.backgroundColor = "green";
});

btn15.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors8();
    btn15.style.backgroundColor = "red";
});

btn16.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors8();
    btn16.style.backgroundColor = "green";
});

btn17.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors9();
    btn17.style.backgroundColor = "green";
});

btn18.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors9();
    btn18.style.backgroundColor = "red";
});

btn19.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors10();
    btn19.style.backgroundColor = "red";
});

btn20.addEventListener("click", () => {
    response.classList.add();
    resetButtonColors10();
    btn20.style.backgroundColor = "green";
});