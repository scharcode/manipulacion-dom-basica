const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.getElementById('#paragraph');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValores);

/*
function sumarInputValores(event) {
    // console.log({ event });
    event.preventDefault();
    const valor1 = Number(input1.value);
    const valor2 = Number(input2.value);
    const sumaDeValores = valor1 + valor2;

    pResult.innerText = "Resultado: " + sumaDeValores;
}
*/

btn.addEventListener('click', btnOnClick);
body.addEventListener('keypress', resultOnKey);

function btnOnClick() {
    const valor1 = Number(input1.value);
    const valor2 = Number(input2.value);
    const sumaDeValores = valor1 + valor2;

    pResult.innerText = sumaDeValores;
}

function resultOnKey(event) {
    if (event.key === 'Enter') {
        btnOnClick();
    }
}
