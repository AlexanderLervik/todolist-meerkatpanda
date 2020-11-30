let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");


//event listner
todoButton.addEventListener("click", addTask);
todoList.addEventListener("click", removeCheck); 

//funksjon

function addTask(event) {
    event.preventDefault();
    //todo div
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //lage Li
    let newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //lage check mark button

    let completedButton = document.createElement("button");
    completedButton.innerHTML= "DONE";
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    //lage check delete button
    let removeButton = document.createElement("button");
    removeButton.innerHTML ="REMOVE";
    removeButton.classList.add("remove-button");
    todoDiv.appendChild(removeButton);
 //append to the list
     todoList.appendChild(todoDiv);
//Fjern ut input
    todoInput.value = "";
}

function removeCheck(e) {
    let item = e.target;
    if (item.classList[0] === "remove-button") {
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
