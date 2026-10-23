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
console.log(systemName + " v " + version); 
console.log("¡Bienvenido, " + userName + "!");
console.log("==================================");

// --- DÍA 3 y 4: Interface Task, Arreglo y Contador ---
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];
let nextId: number = 1;

// --- DÍA 3: Arrow function para agregar tareas ---
const addTask = (title: string): void => {
    const newTask: Task = {
        id: nextId,           
        title: title,       
        completed: false
    };

    tasks.push(newTask);    
    nextId++;               
    console.log(`Task "${title}" added successfully!`);
};

// --- DÍA 4: Nueva función markCompleted usando .find() ---
const markCompleted = (id: number): void => {
    const foundTask = tasks.find(task => task.id === id);
    
    if (foundTask) {
        foundTask.completed = true;
        console.log(`Task [${foundTask.id}] "${foundTask.title}" marked as completed!`);
    } else {
        console.log("No task found with that ID.");
    }
};

// --- DÍA 4: Nuevas funciones de filtrado usando .filter() ---
const filterPending = (): Task[] => {
    return tasks.filter(task => !task.completed);
};

const filterCompleted = (): Task[] => {
    return tasks.filter(task => task.completed);
};

// --- DÍA 4: listTasks actualizado con Desestructuración, .map() y .forEach() ---
const listTasks = (): void => {
    if (tasks.length === 0) {
        console.log("No tasks registered.");
        return;
    }

    // 1. Usamos .map() para transformar el arreglo de objetos en un arreglo de strings formateados
    const formattedTasks = tasks.map(task => {
        const { id, title, completed } = task; // Desestructuración
        let status = completed ? "completed" : "pending";
        return `[${id}] ${title} - ${status}`;
    });

    // 2. Usamos .forEach() para recorrer e imprimir el nuevo arreglo de strings
    formattedTasks.forEach(formattedTask => {
        console.log(formattedTask);
    });
};

// --- DÍA 3: Arrow function para eliminar tareas ---
const removeTask = (idToRemove: number): void => {
    let indexToDelete = -1;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === idToRemove) {
            indexToDelete = i;
            break;
        }
    }
    
    if (indexToDelete !== -1) {
        let removedTask = tasks.splice(indexToDelete, 1)[0];
        console.log(`Task removed: "${removedTask.title}"`);
    } else {
        console.log("No task found with that ID.");
    }
};

// --- DÍAS 2, 3 y 4: Menú interactivo ampliado ---
let running: boolean = true;

while (running) {
    console.log("\n--- MENU ---");
    console.log("1. Add task");
    console.log("2. Remove task");
    console.log("3. List all tasks");
    console.log("4. Mark task as completed");
    console.log("5. List pending tasks");
    console.log("6. List completed tasks");
    console.log("7. Exit");

    let option: string = await rl.question("Choose an option: ");

    if (option === "1") {
        let taskTitle: string = await rl.question("Enter the task title: ");
        addTask(taskTitle);

    } else if (option === "2") {
        let idStr: string = await rl.question("Enter the ID of the task to remove: ");
        removeTask(Number(idStr));

    } else if (option === "3") {
        console.log("Task list:");
        listTasks();

    } else if (option === "4") {
        let idStr: string = await rl.question("Enter the ID of the task to mark as completed: ");
        markCompleted(Number(idStr));

    } else if (option === "5") {
        console.log("Pending tasks:");
        const pending = filterPending();
        if (pending.length === 0) {
            console.log("No pending tasks.");
        } else {
            pending.forEach(task => {
                console.log(`[${task.id}] ${task.title} - pending`);
            });
        }

    } else if (option === "6") {
        console.log("Completed tasks:");
        const completedTasks = filterCompleted();
        if (completedTasks.length === 0) {
            console.log("No completed tasks.");
        } else {
            completedTasks.forEach(task => {
                console.log(`[${task.id}] ${task.title} - completed`);
            });
        }

    } else if (option === "7") {
        console.log("Exiting program...");
        running = false;
        rl.close();

    } else {
        console.log("Invalid option, try again.");
    }
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();