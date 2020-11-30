let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");


// Event listener
todoButton.addEventListener("click", addTask);
todoList.addEventListener("click", removeCheck); 

// Function addtask

function addTask(event) {
    event.preventDefault();
    // Todo div
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create Li element
    let newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Make checkmark button

    let completedButton = document.createElement("button");
    completedButton.innerHTML= ' <i class="fas fa-check"></i> ';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    // Make check remove button
    let removeButton = document.createElement("button");
    removeButton.innerHTML ='<i class="fas fa-trash"></i>';
    removeButton.classList.add("remove-button");
    todoDiv.appendChild(removeButton);
    // Append to the list
     todoList.appendChild(todoDiv);
    // Remove the input after appending
    todoInput.value = "";
}

function removeCheck(e) {
    let item = e.target;
    if (item.classList[0] === "remove-button") {
        let todo = item.parentElement;
        todo.classList.add("fall");

        setTimeout(function () {
            item.parentElement.remove(item);
        }, 350); 
        
    }

    if (item.classList[0] === "complete-button") {
       let todo = item.parentElement; 
        todo.classList.toggle("completed");
    }
}
