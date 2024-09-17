const sumar = (a, b)=>{
    //Las promesas pueden resolverse (resolve) o rechazar (reject).
    return new Promise((resolve, reject)=>{
        if (a<0 || b<0) {
            reject("No es válido.");
        }else{
            resolve(a+b);
        }
    })
}