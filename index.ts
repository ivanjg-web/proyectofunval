import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input: input as any, output: output as any });

// 🚫 No eliminar las líneas de arriba ⬆️
// ✍️ Escribe tu código aquí 👇

// --- DÍAS 1 Y 2: Variables del sistema y Banner de bienvenida ---
let systemName: string = 'proyectofunval';
let version: number = 1.0;
let userName: string = 'ivanjg';

console.log("==================================");
console.log(systemName + " v " + (version + 0)); 
console.log("¡Bienvenido, " + userName + "!");
console.log("==================================");

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];
let nextId: number = 1;

const addTask = (title: string): void => {
    const newTask: Task = {
        id: nextId,
        title: title,
        completed: false
    };

    tasks.push(newTask);
nextId++;
console.log(`Task "${title}" added succesfully!`);
};

const ListTask = (): void =>{
    if (tasks.length === 0) {
        console.log("No tasks registered.");
        return;
    }

    for (let i = 0; i < tasks.length; i++){
        let currentTask = tasks[i];
        let status = currentTask.completed ? "completed" : "pending";

        console.log(`[${currentTask.id}] ${currentTask.title} - ${status}`)
    }
};

const removeTask = (idToRemove: number): void =>{
    let indexToDelete = -1;
    for(let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === idToRemove){
            indexToDelete = i;
            break;
        }    
    }

    if (indexToDelete !== -1){
        let removedTask = tasks.splice(indexToDelete, 1)[0];
        console.log(`>Task removed: "${removedTask.title}"`);
    } else{
        console.log("NO task found with that ID.");
    }
};

let running: boolean = true;

while (running) {
    console.log("\n--- MENU ---");
    console.log("1 Add task");
    console.log("2 Remove task");
    console.log("3 List task");
    console.log("4 Exit");

    let option: string = await rl.question("Choose an option: ")

    if (option === "1"){
        let taskTitle: string = await rl.question("Enter the task title: ");
        addTask(taskTitle);

    }else if (option === "2"){
        let idStr: string = await rl.question("Enter the ID of the task to remove: ");
        removeTask(Number(idStr));

    }else if (option === "3"){
        console.log("Task List:");
        ListTask();

    }else if (option === "4"){
        console.log("Exiting program...");
        running = false;
        rl.close();
        
    }else {
        console.log("Invalid option try again.");    
    }
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();