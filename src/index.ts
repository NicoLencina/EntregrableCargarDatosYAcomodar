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
    console.log(
      "Nombre: " +
        nombres[i] +
        " Edad: " +
        edad[i] +
        " Altura: " +
        altura[i] +
        " centimetros."
    );
  }
}

// Se realiza comparacion de los valores de años y alturas en las posiciones [i] y [j],
// retorno 0 si tienen misma altura y edad, si lo que hay en i es menor de lo que hay en j -1 y si lo que hay en i es mayor que lo que hay en j 1
function comparadorEdadYAltura(edad: number[], altura: number[], i: number) {
  let comparacion: number = 0;
  let b: number = i + 1;
  //comparo por edad, en caso que sean iguales voy por la altura
  if (edad[i] === edad[b]) {
    if (altura[i] === altura[b]) {
      comparacion = 0;
    } else if (altura[i] < altura[b]) {
      comparacion = -1;
    } else {
      comparacion = 1;
    }
  }
  //si las edades no son iguales, retorno el de mayor edad
  else if (edad[i] < edad[b]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}

//Intercambio los datos del arreglo moviendolo 1 posicion, guardo el dato a mover en copia
function intercambiarValores(arreglo: number[], i: number) {
  let copia: number;
  let b: number = i + 1;
  copia = arreglo[i];
  arreglo[i] = arreglo[b];
  arreglo[b] = copia;
}

function burbuja(nombres: string[], edad: number[], altura: number[]) {
  for (let i = 0; i < nombres.length; i++) {
    for (let j = 0; j < nombres.length - 1 - i; j++) {
      if (comparadorEdadYAltura(edad, altura, j) === 1) {
        intercambiarValores(nombres, j);
        intercambiarValores(edad, j);
        intercambiarValores(altura, j);
      }
    }
  }
}
// Se llama a las funciones, se pasan parametros.
cargarPersonas(nombres, edad, altura, dimensionArray);
console.log("Arreglo Ingresado(Sin Ordenar)");
mostrarDatos(nombres, edad, altura, dimensionArray);
console.log("Arreglo Ordenado");
burbuja(nombres, edad, altura);
mostrarDatos(nombres, edad, altura, dimensionArray);
