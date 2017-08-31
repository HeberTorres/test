//Si la palabra termina en "ar", se le quitan los 2 ultimos caracteres*/
function platzom(str) {
    let translation = str;
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2); //Cortar un string, desde donde empieza hasta donde marquemos que termina

    }

    //*si la palabra inicia con "Z", se le añade "pe" al final de la palabra*/

    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';



    }


    //Si la palabra traducida tiene 10 o mas letras, se debe de partir a la mitad y unir con un guion
    let l = str.length;
    if (str.toLowerCase().length >= 10) {
        let sHalf = str.slice((l / 2));
        let fHalf = str.slice(0, -(l / 2))
        translation = `${fHalf}-${sHalf}`;


    }
    return translation;

}
console.log(platzom("sabanillas"));
console.log(platzom("zorro"));
console.log(platzom("programa"));




//si la palabra original es un palindromo, ninguna de las anteriores reglas funciona, y se devuelve la palabra intercaland
//entre mayuculas y minusculas