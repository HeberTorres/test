//Programa para utilizar ciclos
const nombre = "Heber";

const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
]

function promedioCorrer() {
    const min = 5
    const max = 15

    return Math.round(Math.random() * (max - min) + min);
}

let totalK = 0
const length = dias.length //Refactorizacion de codigo
for (let i = 0; i < length; i++) { //ciclo for, para incrementos, en este caso el transcurrir de los dias
    const kms = promedioCorrer()
    totalK += kms //esto es lo mismo que decir: totalk = total + kms
    console.log(`El dia ${dias[i]}, ${nombre} corrió ${kms} kms`); //Interpolacion de variables
}

const promediokms = totalK / length;
console.log(`En promedio, ${nombre} corrió ${promediokms} kilometros a la semana`); //Interpolacion de variables