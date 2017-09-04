//Vamos a simular una pelea entre goku y superman con numeros aleatrios entre 5 y 12

let gokuvida = 100;
let supermanvida = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

let round = 0;

const gokuSigueVivo = () => gokuvida > 0;

const ambosSiguenVivos = () => gokuvida > 0 && supermanvida > 0;

const ambosMuertos = () => gokuvida === 0 && supermanvida === 0;

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

while (ambosSiguenVivos()) {
    round++;
    console.log(`Round ${round}`);
    const golpeGoku = calcularGolpe();
    const golpeSuperman = calcularGolpe();
    if (golpeGoku > golpeSuperman) {
        console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
        supermanvida -= golpeGoku;
        console.log(`Superman queda con ${supermanvida} de vida`);

    } else {
        console.log(`Superman ataca a Superman con un golpe de ${golpeSuperman}`);
        gokuvida -= golpeSuperman;
        console.log(`Superman queda con ${gokuvida} de vida`);

    }
}
if (gokuSigueVivo()) {
    console.log(`Goku gano la pelea. Su vida es de: ${gokuvida}`)
} else {
    console.log(`Superman gano la pelea. Su vida es de: ${supermanvida}`)
};