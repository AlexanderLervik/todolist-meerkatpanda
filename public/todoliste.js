let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");


// Event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck); 

// Function 

function addTodo(event) {
    event.preventDefault();
    // Todo div
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create li
    let newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Make checkmark button

    let completedButton = document.createElement("button");
    completedButton.innerHTML= "DONE";
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    // Make check delete button
    let trashButton = document.createElement("button");
    trashButton.innerHTML ="REMOVE";
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
    // Append to the list
     todoList.appendChild(todoDiv);
    // Remove input
    todoInput.value = "";
}

    function deleteCheck(e) {
        let item = e.target;
        if (item.classList[0] === "trash-button") {
        let todo = item.parentElement;
        todo.classList.add("fall");

        setTimeout(function () {
            item.parentElement.remove(item);
        }, 500); 
        
    }

    if (item.classList[0] === "complete-button") {
       let todo = item.parentElement; 
        todo.classList.toggle("completed");
    }
}
