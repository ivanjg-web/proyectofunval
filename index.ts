import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input: input as any, output: output as any });

// // 🚫 No eliminar las líneas de arriba ⬆️

// // 
// let systemName: string = 'proyectofunval';
// let version: number = 1.0;
// let userName: string = 'ivanjg';

// console.log("==================================");
// console.log(systemName + " " + "v " + (version+0)); 
// console.log("¡Bienvenido," + " " + userName + "!");
// console.log("==================================");


// // 🚫 No eliminar las líneas de abajo ⬇️
// rl.close();


const tareas: string[] = [];

let continuar: boolean = true;

while (continuar) {
  
  console.log("\n--- MENÚ ---");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar última tarea");
  console.log("3. Listar tareas");
  console.log("4. Salir");

  
  let opcion: string = await rl.question("Elige una opción: ");

  
  if (opcion === "1") {
    let nuevaTarea: string = await rl.question("Escribe el título de la tarea: ");
    tareas.push(nuevaTarea);
    console.log("Tarea agregada con éxito.");

  } else if (opcion === "2") {
    let tareaEliminada = tareas.pop();
    console.log("Se eliminó la tarea: " + tareaEliminada);

  } else if (opcion === "3") {
    console.log("Lista de tareas:");
    for (let i = 0; i < tareas.length; i++) {
      console.log((i + 1) + ". " + tareas[i]);
    }

  } else if (opcion === "4") {
    console.log("Saliendo del programa...");
    continuar = false;
    rl.close();

  } else {
    console.log("Opción no válida, intenta de nuevo.");
  }
}