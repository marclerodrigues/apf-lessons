const container = document.querySelector(".container");
const newP = document.createElement("p");
const text = document.createTextNode("Olá galera!");

newP.appendChild(text);
container.appendChild(newP);

function printToConsole(element) {
  console.log(element.value)
}

const h1 = document.createElement("h1");

h1.innerHTML = "Formulário";

const formContainer = document.querySelector(".container__form");
const form = formContainer.querySelector("form");

formContainer.insertBefore(h1, form);

const p = document.querySelector(".container > p");
p.remove();

container.removeChild(newP);

// CONFIRM
// if (confirm("Quer mesmo sair daqui?")) {
//   window.location.href = "https://www.google.com.br";
// }

// PROMPT
// const name = prompt("Diga o seu nome: ", "Doidim");
// alert(`Olá, seu ${name}`);