function array(arr, num){
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

    if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number");

    if(arr.length !== num) throw new RangeError("Tamanho inválido!");
}

// usando try...catch

 function newArray(arr, num){
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
    
        if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");
    
        if(arr.length !== num) throw new RangeError("Tamanho inválido!");

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError){
            console.log("ReferenceError!");
            console.log(e.message);
            
        } else if (e instanceof TypeError){
            console.log("TypeError!");
            console.log(e.message);
            
        } else if (e instanceof RangeError){
            console.log("RangeError!");
            console.log(e.message);
           
        } else {
            console.log("Erro não esperado:" + e);
        }
    }
 }

 //console.log(array());
 console.log(newArray());