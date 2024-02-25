var inputbox = document.getElementById("input")
var listcontainer = document.getElementById("list-container")

function list(){
    if(inputbox.value === ''){
        alert("Write Something");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputbox.value = "";
saveData();
}
listcontainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){  /*saving data that is added*/
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){  /*diplaying of data whenever we reload*/
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();