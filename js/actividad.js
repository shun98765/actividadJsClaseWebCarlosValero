const actividad = (num1, num2, num3) => {
    return num1 === num2 && num1 === num3 
        ? "Todos los números son iguales"
        : num1 === num2 
            ? "num1 es igual a num2"
            : num1 === num3 
                ? "num1 es igual a num3"
                : num2 === num3 
                    ? "num2 es igual a num3"
                    : "Ninguno de los números es igual";
};

document.getElementById('Form').addEventListener('submit', function(e) {

    const num1 = parseFloat(document.getElementById('numUno').value);
    const num2 = parseFloat(document.getElementById('numDos').value);
    const num3 = parseFloat(document.getElementById('numTres').value);

    const resultado = actividad(num1, num2, num3);

    document.getElementById('resultado').textContent = resultado;
});
