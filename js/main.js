// get the input that we add tasks name in it
let tsk = document.getElementById("task");
// get the ul (we add tasks in it as li)
let listContainer = document.getElementById("list-container");
// get add button
let btn = document.getElementsByClassName("btn-1");
// when we click on add button this function will implement
function addTask(){
    // if the input is empty alert this message
    if(tsk.value === ""){
        alert("no tasks to show!")
    }
    // if the input is not empty
    else{
        // create li take the task name that we add in the input
        let li = document.createElement("li");
        li.innerHTML = tsk.value;
        listContainer.appendChild(li);
        // create wrong sign 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    // make the input empty again after we add task name
    tsk.value = "";
    // sava data in the local storage
    saveData();
}
// when we click on list items(li)
listContainer.addEventListener("click", function(e){
    // if the element is li 
    if(e.target.tagName === "LI"){
        // if it had (checked) class then remove it if it hadn't add it
        e.target.classList.toggle("checked");
        // sava data in the local storage
        saveData();
    }
    // if the element is span 
    else if(e.target.tagName === "SPAN"){
        // we remove the parent element of the span
        e.target.parentElement.remove();
        // sava data in the local storage
        saveData();
    }
}, false);

// save the data that in list container(ul) in the local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// get the data from the local storage 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}




// light and dark
// get the sun icon
let togle = document.getElementById("toggleDark");
// get the main div that contain all elements
let box = document.getElementById("box");
// when we click on the sun icon
togle.addEventListener("click",function(){
    // the sun turned to moon icon
    this.classList.toggle("bi-moon");
    // if the bi-brightness-high-fill class is exist
    if(this.classList.toggle("bi-brightness-high-fill")){
        // change background to white
        box.style.background = "white";
        // change font color and sun icon to black
        box.style.color = "black";
        this.style.color = "black";
    }
    // if it doesn't exist
    else{
        // change the background to black
        box.style.background = "black";
        // change the font and moon icon color to white
        box.style.color = "white";
        this.style.color = "white";
    }
});

// show the data that saved in local storage
showTask();
