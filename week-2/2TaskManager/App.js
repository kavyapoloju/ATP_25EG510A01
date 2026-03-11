

import { addTask, getAllTasks, completeTask } from './Task.js';

// 1. Add tasks
console.log(addTask("Finish project", "high", "2026-04-10"));
console.log(addTask("Study JS modules", "medium", "2026-03-20"));

// 2. Display all tasks
console.log("All Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(1));

// 4. Display again
console.log("After Completing:");
console.log(getAllTasks());