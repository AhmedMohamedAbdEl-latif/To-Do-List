let inputTask = document.querySelector("#Task-input");
let button = document.querySelector("#Button-add");
let showTasks = document.querySelector(".up");

let allTasks = [];

let renderTask = () => {
    let newTask = {
        Task: inputTask.value,
    };

    allTasks.push(newTask);
    inputTask.value = "";
    showAllTasks();
}

let deleteTask = (index) => {
    allTasks.splice(index, 1);
    showAllTasks();
}

let editTask = (index) => {
    let taskInput = document.querySelectorAll(".tasks .row input");
    let editBtn = document.querySelectorAll(".tasks .text .edit");
    let updateBtn = document.querySelectorAll(".tasks .text .update");
    editBtn[index].style.display = "none";
    updateBtn[index].style.display = "block";
    taskInput[index].removeAttribute("readonly");
    taskInput[index].style.focus="true"
}

let updateTask = (index) => {
    
    let taskInput = document.querySelectorAll(".tasks .row input");
    let editBtn = document.querySelectorAll(".tasks .text .edit");
    let updateBtn = document.querySelectorAll(".tasks .text .update");
  
    updateBtn[index].style.display = "none";
    editBtn[index].style.display = "block";
    taskInput[index].setAttribute('readonly', 'readonly');
    allTasks[index].Task = taskInput[index].value;
    //editBtn[index].setAttribute("onclick", ` editTask(${index})`);
    //showAllTasks();
}



let showAllTasks = () => {
    showTasks.innerHTML = "";
    allTasks.forEach((element, index) => {
        showTasks.innerHTML += `
            <div class="tasks">
                <div class="row">
                    <input type="text" value="${element.Task}" readonly>
                </div>
                <div class="text">
                    <button onclick="updateTask(${index})" style="display: none" class="btn update"><i class="fa-solid fa-save"></i></button>
                    <button onclick="editTask(${index})" class="btn edit"><i class="fa-solid fa-pen"></i></button>
                    <button onclick="deleteTask(${index})" class="btn delete"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
    `;
    });
}

button.addEventListener("click", renderTask);