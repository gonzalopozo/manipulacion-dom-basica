const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2'); 
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

form.addEventListener('submit', sumarInputsValues)

function sumarInputsValues(event) {
    // console.log({event});
    event.preventDefault();
    if (isNaN(input1.value) || isNaN(input2.value)) {
        const errorSuma = "NO ES NÚMERO, INTRODUCE UN NÚMERO!!!!";
        pResult.innerText = errorSuma;
    } else {
        var sumaInputs = Number(input1.value) + Number(input2.value);
        pResult.innerText = `El resultado de la suma es ${sumaInputs}`;
    }
}

