import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input: input as any, output: output as any });
// 🚫 No eliminar las líneas de arriba ⬆️

// 
let systemName: string = 'proyectofunval';
let version: number = 1.0;
let userName: string = 'ivanjg';

console.log("==================================");
console.log(systemName + " " + "v " + (version+0)); 
console.log("¡Bienvenido," + " " + userName + "!");
console.log("==================================");


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();