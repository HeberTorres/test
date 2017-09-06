//Mini examen, encontrar la distancia entre 2 puntos que esten declarados como objetos
//Elaborado por Heber Jhazeel Torres Aragón de la materia de Grafiación

var A = { //*Los objetos manejan atributos*
    x1: 4, //Aqui ponemos las coordenadas del punto A
    y1: 3
};
var B = {
    x2: -3, //Aqui ponemos las coordenadas del punto B
    y2: -1
};
var distancia = Math.sqrt(Math.pow(B.x2 - A.x1, 2) + Math.pow(B.y2 - A.y1, 2)); //Formula para sacar distancia entre 2 puntos
console.log(`La distancia es de ${distancia}`);