/* 
    while (condicion){
    codigo q se repetira n cantidad
    de veces
    }
*/
let nombreEstudiante = "Kevin Rodriguez";
let contador = 0;
while (contador <= 3) {
  console.log("hola buenos dias " + nombreEstudiante);
  contador++;
}
/* 
    do{
        codigo q se ejecutara n cantidad de veces
        pero si o si almenos 1
    }while (condicion)
*/
let superContador = 0;
do {
  console.log("funval somos los mejores");
  superContador++; // superContador = superContador +1
} while (superContador <= 2);
/* 
    for(condiciones){
    codigo q se ejecutara n cantida
    de veces
    }
*/
for (let inicio = 0; inicio < 10; inicio++) {
  console.log("hoy vamos a ver bucles");
}


/* 
    ejercicion 1
    
    quiero q puedan realizar una calculadora de multiplicacion
    pero sin  el simbolo *
    4*5 = 5+5+5+5 o 4+4+4+4+4
*/
/* 
    ejercio 2
    sacar el factorial de un numero
    !5 = 1*2*3*4*5
*/

let numero: number = 30; 
let veces: number = 3;
let resultado: number = 0;
let contadorMultiplicar: number = 0;
while (contadorMultiplicar < veces) {
    resultado = resultado + numero 
    contadorMultiplicar++;
}
console.log("El resultado de la multiplicación es: " + resultado);



let numeroFactorial: number = 5;
let resultadoFactorial: number = 1;
let contadorFactorial: number = 1;
while (contadorFactorial <= numeroFactorial) {
    resultadoFactorial = resultadoFactorial * contadorFactorial; 
    contadorFactorial++; 
} 
console.log ("El factorial de " + numeroFactorial + " es: " + resultadoFactorial);


/*  arrays*/

let estudantesfunval: string [] = ["gustavo", "Roberto", "Sara", "Ivan" ] 
console.log (estudantesfunval [3]);




const estudiantes = [
    { nombre: "gustavo", notas: [80, 90, 85] },           
    { nombre: "Roberto", notas: [70, 60] },            
    { nombre: "Sara", notas: [95, 100, 90, 85, 88] }
];

for (let indiceEstudiante = 0; indiceEstudiante < estudiantes.length; indiceEstudiante++) {
    let alumnoActual = estudiantes[indiceEstudiante];
    let sumaNotas: number = 0;

    for (let indiceNota = 0; indiceNota < alumnoActual.notas.length; indiceNota++) {
        sumaNotas = sumaNotas + alumnoActual.notas[indiceNota];
    }
    let promedio: number = sumaNotas / alumnoActual.notas.length;
    console.log("El promedio de " + alumnoActual.nombre + " es: " + promedio);
}

interface estudiante{
    nombre: string
    apPaterno: string
    edad: number
    pais: string
    celular: number
    notas: number [];
}

let estudianteFunvalero: estudiante = {
  nombre: "Roberto",
    apPaterno: "Trinidad",
    edad: 20,
    pais: "Paraguay",
    celular: 52448855,
    notas: [95, 35, 55, 75, 0]
}

console.log (estudianteFunvalero.nombre)


/*---------------------------MAP---------------*/

let numeros: number[] = [1,2,3,4,5,6,7,8,9,10];

let listanueva = numeros.map((numero: number): string => {
    return "Rodriguez";
});

/*----------------------find index---------------*/

