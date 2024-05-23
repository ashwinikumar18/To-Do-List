const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li);
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; //it is the code of cross icon
        li.appendChild(span);
    }
    inputBox.value = '';  //after adding text it clear the text box
    saveData(); //calling the function to save data after adding the tasks.
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // it will save the data after closing the site and reopening it.
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();