import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input: input as any, output: output as any });

// 🚫 No eliminar las líneas de arriba ⬆️
// ✍️ Escribe tu código aquí 👇

let systemName: string = 'proyectofunval';
let version: number = 1.0;
let userName: string = 'ivanjg';

console.log("==================================");
console.log(systemName + " v " + version); 
console.log("¡Bienvenido, " + userName + "!");
console.log("==================================");

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];
let nextId: number = 1;

const saveToDB = (task: Task): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[Database] Task [${task.id}] "${task.title}" saved successfully on server!`);
            resolve();
        }, 2000); 
    });
};

const addTask = async (title: string): Promise<void> => {
    try {
                if (!title || title.trim() === "") {
            throw new Error("Error: Task title cannot be empty.");
        }

        const newTask: Task = {
            id: nextId,           
            title: title.trim(),       
            completed: false
        };

        console.log("Saving task to database...");
        
                await saveToDB(newTask);

        tasks.push(newTask);    
        nextId++;               
        console.log(`Task "${newTask.title}" added to local array successfully!`);

    } catch (error: any) {
                console.log(error.message);
    }
};

const markCompleted = (id: number): void => {
    const foundTask = tasks.find(task => task.id === id);
    
    if (foundTask) {
        foundTask.completed = true;
        console.log(`Task [${foundTask.id}] "${foundTask.title}" marked as completed!`);
    } else {
        console.log("No task found with that ID.");
    }
};

const filterPending = (): Task[] => {
    return tasks.filter(task => !task.completed);
};

const filterCompleted = (): Task[] => {
    return tasks.filter(task => task.completed);
};

const listTasks = (): void => {
    if (tasks.length === 0) {
        console.log("No tasks registered.");
        return;
    }

    const formattedTasks = tasks.map(task => {
        const { id, title, completed } = task;
        let status = completed ? "completed" : "pending";
        return `[${id}] ${title} - ${status}`;
    });

    formattedTasks.forEach(formattedTask => {
        console.log(formattedTask);
    });
};

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
        await addTask(taskTitle); 

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