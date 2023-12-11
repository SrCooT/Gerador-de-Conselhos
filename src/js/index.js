const titulo = document.querySelector(".title")
const mensage = document.querySelector(".frase")
const btn = document.getElementById('botao');


console.log(mensage);
btn.addEventListener("click",
async function conselhoAleatoria(){
    const  response = await fetch("https://api.adviceslip.com/advice")
    const conselhoGerado = await response.json()


    console.log(conselhoGerado.slip.advice);
    console.log(conselhoGerado.slip.id);

    mensage.textContent = conselhoGerado.slip.advice
    titulo.textContent = `a d v i c e # ${conselhoGerado.slip.id}`
}
);

