//Segundo parte calcula los valores enviados por terminal 
const interface=require("readline-sync");

//Suma, resta,División,Multiplicacion,Salir

do{
    console.log("1.-suma");
    console.log("2.-Resta");
    console.log("3.-Multiplicación");
    console.log("4.-Divición");
    console.log("5.-salir");
    response=interface.question("Que operacion deseas realizar,escribe un numero: ")
if(response !="5"){
    const firsNumber=interface.question("Dame el primer numero: ");
    const secondNumber=interface.question("Dame el segundo numero: ");

    switch(response){
        case"1": var result= parseInt(firsNumber)+parseInt(secondNumber);
        console.log("El resultado de la suma es :" + result);
        break;
        case"2": var result= parseInt(firsNumber)-parseInt(secondNumber);
        console.log("El resultado de la resta es :" + result);
        break;
        case"3": var result= parseInt(firsNumber)*parseInt(secondNumber);
        console.log("El resultado de la multiplicaón es: " + result);
        break;
        case"4": var result= parseInt(firsNumber)/parseInt(secondNumber);
        console.log("El resultado de la división es: " + result);
        break;
        default:
        break;
    }

    interface.question("presiona Enter para continuar ")
}
}while(response!="5");
