const evaluar = ()=>{
    const edad = prompt("Cual es tu edad?");
    if (edad>=18) {
        document.write("Eres mayor de edad.");
    }else{
        document.write("Eres menor de edad.");
    }
};

setTimeout(evaluar, 5000);