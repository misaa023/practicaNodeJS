function suma(a, b) {
  return a + b;
}

const resta = function(a, b) {
  return a - b;
}

const multiplicacion = (a, b) => {
  return a * b;
}

// ? en una sola linea, se puede hacer de la siguiente manera
const division = (a, b) => a / b;

// vamos a realizar una funcion que recibe otra funcion llamada callback, y que se ejecuta dentro de la funcion principal
function calculadora(a, b, operacion) {
  return operacion(a, b);
}
console.log('====FUNCION CON CALLBACK =====')
console.log(calculadora(2, 5, suma))
console.log(calculadora(2, 5, resta))
console.log(calculadora(2, 5, multiplicacion))
console.log(calculadora(10, 5, division))

console.log('====FUNCIONES =====')
console.log(`La suma es de: ${suma(2, 5)}`)
console.log(`La resta es de: ${resta(2, 5)}`)
console.log(`La multiplicación es de: ${multiplicacion(2, 5)}`)
console.log(`La división es de: ${division(10, 5)}`)