function signIn(){
    console.log("sign in")
    let userName = document.getElementById('userName').value.trim();
    let password = document.getElementById('password').value.trim()
    console.log(userName)
    console.log(password)

    let userError = document.getElementById('userError')
    let passwordError = document.getElementById('passwordError')
     
    let defaultUserName = "admin"
    let defaultPassword = "admin@123"

    userError.innerText = "";
    passwordError.innerText = "";
    let isValid = true;

    if(userName === ""){
        userError.innerText = "Username is required"
        userError.style.color = "red"
        isValid = false
    }
    if(password === ""){
        passwordError.innerText = "Password is required"
        passwordError.style.color = "red"
        isValid = false
    }
    if (isValid) {
        if (defaultUserName === userName && defaultPassword === password) {
            alert("Login Successful!");
            window.location.href = "./home.html"; 
        } else {
            passwordError.innerText = "Invalid username or password";
            passwordError.style.color = "red";
        }
    }
}

// Home js
function taskShow(){
    console.log("add task")
    let taskInput = document.getElementById("taskInput")
    taskInput.style.display = "block"

    let add = document.getElementById("add")
    add.style.display = "none"
    let close = document.getElementById("close")
    close.style.display = "block"
}
function taskClose(){
    let close = document.getElementById("close")
    close.style.display = "none"
     let add = document.getElementById("add")
    add.style.display = "block"
    let taskInput = document.getElementById("taskInput")
    taskInput.style.display = "none"
}

let taskList = []

function addTask(){
    let taskName = document.getElementById("taskName").value.trim()
    let taskDescription = document.getElementById("taskDescription").value.trim()
    let taskDate = document.getElementById("taskDate").value

    if (taskName === "" || taskDescription === "" || taskDate === "") {
        alert("Please fill all fields!");
       return
    }
    let task = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        date: taskDate
    };
    taskList.push(task);
    console.log(taskList)
    displayTasks();
    clearInputs();
}

function displayTasks() {
    let taskListContainer = document.getElementById("taskList");
    taskListContainer.innerHTML = "";

    taskList.forEach(task => {
        let li = document.createElement("li");
        li.classList.add("taskContainer"); 
        li.innerHTML = `
            <div class="task-info">
               <h3>Taske Name: ${task.name}</h3> 
               <p>Task Discription ${task.description} </p>
               <p>Date: ${task.date}</p>
            </div>
            <div class="icons">
                <span class="edit" onclick="editTask(${task.id})"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                <span class="delete" onclick="deleteTask(${task.id})"><i class="fa fa-trash" aria-hidden="true"></i></span>
            </div>
        `;
        taskListContainer.appendChild(li);
    });
}

function editTask(id) {
    let task = taskList.find(t => t.id === id);
    if (task) {
        document.getElementById("taskName").value = task.name;
        document.getElementById("taskDescription").value = task.description;
        document.getElementById("taskDate").value = task.date;
        
        deleteTask(id); 
    }
}

function deleteTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    displayTasks();
}

function clearInputs() {
    document.getElementById("taskName").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskDate").value = "";
}