const actividad = (num1, num2, num3) => {
    let res = num1 === num2 && num1 === num3 
        ? "Todos los números son iguales"
        : num1 === num2 
            ? `El número "a" es igual a número "b"`
            : num1 === num3 
                ? `El número "a" es igual a número "c"`
                : num2 === num3 
                    ? `El número "b" es igual a número "c"`
                    : "Ninguno de los números es igual";
    let mayor = Math.max(num1, num2, num3);
    res += ` y el número mayor es ${mayor}`;

    return res;

};

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado de recargar la página

    const num1 = parseFloat(document.getElementById('numUno').value);
    const num2 = parseFloat(document.getElementById('numDos').value);
    const num3 = parseFloat(document.getElementById('numTres').value);

    const resultado = actividad(num1, num2, num3);

    document.getElementById('resultado').textContent = resultado;
});
