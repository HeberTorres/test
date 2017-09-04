//Crear un script que me diga si la edad de una persona la deja entrar a una funcion.
//Watchmen es clasificacion "C" quiere decir que solo la pueden ver mayores de edad


let edad = 15;
let adulto = 1; //0 = no acompañado de un adulto
const Edad_min = 18;


if (edad < 18 && adulto == 0) {
    console.log("Menor y sin acompañante");
} else {
    console.log("Menor con acompañante");
}
if (edad >= Edad_min) {
    console.log("Es mayor de edad, puede pasar");
} else {
    console.log("Es menor de edad, no puede pasar");
}


//if (edad < Edad_min && acompañado = 0) {
//    console.log("No esta acompañado de un Adulto");

//} else {
//    console.log("Si esta acompañado de un adulto")
//}