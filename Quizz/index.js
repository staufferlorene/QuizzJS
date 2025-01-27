// Sélectionner un élément avec son ID
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

// Quizz
const response = document.querySelector("p");

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red"
})

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green"
})





