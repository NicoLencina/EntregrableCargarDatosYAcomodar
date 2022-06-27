//elimino dato de consolas
console.clear();
//Dimension ingresada por el usuario
let dimensionArray: number = Number(prompt("Cuantas personas quiere Ingresar"));
//Datos sobre el usuario; guardadas en arreglos (misma pos)
let nombres: string[] = new Array(dimensionArray);
let edad: number[] = new Array(dimensionArray);
let altura: number[] = new Array(dimensionArray);

//Funcion para cargar los datos del usuario, nombre , edad altura, las guardo todas en la misma pos del array
function cargarPersonas(
  nombres: string[],
  edad: number[],
  altura: number[],
  dimensionArray: number
) {
  for (let i = 0; i < dimensionArray; i++) {
    nombres[i] = String(
      prompt("Ingrese el Nombre del N°" + (i + 1) + "/" + dimensionArray)
    );
    edad[i] = Number(prompt("Ingrese la edad de " + nombres[i]));
    altura[i] = Number(prompt("Ingrese la altura de " + nombres[i]));
  }
}

//Funcion para recorrer el arreglo y mostrar por consola los datos del mismo
function mostrarDatos(
  nombres: string[],
  edad: number[],
  altura: number[],
  dimensionArray: number
) {
  for (let i = 0; i < dimensionArray; i++) {
    console.log("Nombre: " + nombres[i]);
    console.log("Edad: " + edad[i]);
    console.log("Altura: " + altura[i] + " centimetros");
  }
}

// Se realiza comparacion de los valores de años y alturas en las posiciones [i] y [j],
// devolviendo 0 si son iguales. -1 si lo que hay en i es menor de lo que hay en j y 1 si lo que hay en i es mayor que lo que hay en j.
function comparar(edad: number[], altura: number[], i: number, j: number) {
  let comparacion: number;
  if (edad[i] === edad[j]) {
    if (altura[i] === altura[j]) {
      comparacion = 0;
    } else if (altura[i] < altura[j]) {
      comparacion = -1;
    } else {
      comparacion = 1;
    }
  } else if (edad[i] < edad[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}

// Se usa una variable auxiliar para guardar el dato que se va a intercambiar
function intercambiar(arreglo: number[], i: number, j: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}

//Se recorre el arreglo y achicando el recorrido del arreglo mientras se van ubicando en su lugar
//Se realiza la comparacion de valores igualando a 1 para ver si corresponde intercambiar
function burbuja(
  nombres: string[],
  edad: number[],
  altura: number[],
  dimensionArray: number
) {
  let i: number;
  let j: number;
  for (i = 0; i < dimensionArray - 1; i++) {
    for (j = 0; j < dimensionArray - 1 - i; j++) {
      if (comparar(edad, altura, j, j + 1) === 1) {
        intercambiar(nombres, j, j + 1);
        intercambiar(edad, j, j + 1);
        intercambiar(altura, j, j + 1);
      }
    }
  }
}

// Se llama a las funciones, se pasan parametros.
cargarPersonas(nombres, edad, altura, dimensionArray);
console.log(`Arreglo cargado`);
mostrarDatos(nombres, edad, altura, dimensionArray);
console.log(`Arreglo ordenado`);
burbuja(nombres, edad, altura, dimensionArray);
mostrarDatos(nombres, edad, altura, dimensionArray);
1;
