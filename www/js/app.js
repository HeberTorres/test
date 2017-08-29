var nombre = "Heber"; //Esto es una variable global

function saludar() {
    {
        var nombre = "Eddy"; //Esto es una variable local

    }

    console.log(`Hola ${nombre}`); //Interpolacion de variables
}


//En esta situacion la variable local va a ser la que aparezca en el mensaje.

var nombre = "Heber"; //Esto es una variable global

function saludar() {
    {
        // var nombre = "Eddy";       //Esto es una variable local

    }

    console.log(`Hola ${nombre}`); //Interpolacion de variables
}

//Ahora la variable global se va a utilizar

//Declaracion de una funcion

function saludar10() {
    for (let i = 0; i < 10; i++) { //Iteracion ** i pertenece a la asignacion de let
        console.log(`Hola ${nombre}`);

    }

    console.log(`El valor de i es ${i}`); //Interpolacion

}