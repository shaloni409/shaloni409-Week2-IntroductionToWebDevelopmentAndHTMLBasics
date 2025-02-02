
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let DiskInput = document.getElementById("DiskInput");
    let task = taskInput.value.trim();
    let Description = DiskInput.value.trim();
    let error = document.getElementById("error");
    
    if (task === ""||Description==="") {
        error.textContent = "Task cannot be empty!";
        return;
    }
    
    error.textContent = ""; 
    let ol = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML= `<strong>${task}</strong>:${Description}`;

    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.onclick = function() {
        let confirmation = confirm("You really want to remove this To-Do?");
                if (confirmation) {
                    ol.removeChild(li);
                }
    
    };
    
    li.appendChild(removeBtn);
    ol.appendChild(li);
    input.value = "";
    Description.value="";
}
removeBtn.addEventListener("click",()=>{
    alert ("You really want to remove ToDo")
})
