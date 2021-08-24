export const digitalRoot = (n:number):number => {   //Modelo const
    if(n < 10) return n                             // Si es más chico que 10, regresa el numero
  
    return digitalRoot(                             //Regresara el resultado de una funcion
      n.toString()                                  //Convertir el numero a string
        .split("")                                  //Separar los numeros por espacios
        .map(i => parseInt(i))                      //Recorrer los numeros y hacerlos enteros
        .reduce((acumulator, currentValue) => acumulator + currentValue, 0)                 
        //Recorrere el arreglo, en una variable guarda los valores y otra se posiciona en los valores actuales
        // hasta que llega a un parametro, en este caso 0
    )
  };
    /*var arrayNumber = Array.from(String(completeNumber));
    var total=0
    for (let index = 0; index < arrayNumber.length; index++) {
        total += Number(arrayNumber[index]);
    }
    if (total>=10) {
        var secondArray = Array.from(String(total));
        total=0
        for (let index = 0; index < secondArray.length; index++) {
            total += Number(secondArray[index]);
        }
    }
    return total;
}*/