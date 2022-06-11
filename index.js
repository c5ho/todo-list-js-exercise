function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    markComplete: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}


// Mark a task as complete by setting the task's status in the Complete property to `true`
function completeTask(task) {
  task.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
}

//DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all of the 💩 out of the litter box"); // task
const task2 = newTask("Do Laundry", "😨"); // task 
const tasks = [task1, task2];

console.log(tasks);

task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed
