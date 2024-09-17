const saludo = ()=>{
    document.write("<li>Hola mundo</li>");
};

// Como objeto, se repite cada 5 segundos.
setInterval(saludo,5000);

// Como funcion, se hace solo una vez.
// setInterval(saludo()(5000));
