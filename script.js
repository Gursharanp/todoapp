var page = document.querySelector('.outer main');
var dialogBox = document.querySelector('.dialog-box');

function add() {
    dialogBox.style.display = "flex";
}
function re() {
    dialogBox.style.display = "none";

}

function addTodo() {
    let title = document.getElementById("task-title");
    let description = document.getElementById("task-description");
    
    if(title.value == "" || description.value == ""){
        console.log("working");
        alert("please fill the field");
        return; 
    }
    var todo = ` <div class="todo">
    <header>
        <span>${title.value}</span>
        <span class="close"> X </span>
        <span class="minimize"> _</span>
     </header>
        <div class="todo-text">
            <textarea>${description.value}</textarea>
        </div>
         </div>`;

    page.innerHTML += todo;
    title.value = ""; 
    description.value = "";
    dialogBox.style.display = "none";
    let todoArr = document.querySelectorAll(".todo");

    for (var i = 0; i < todoArr.length; i++) {
        todoArr[i].querySelector(".close").addEventListener("click", function (e) {
        let box = e.target.closest(".todo")
        box.remove();
        });
        todoArr[i].querySelector(".minimize").addEventListener("click", function (e) {
            let box =e.target.closest(".todo");
            let todoText = box.querySelector(".todo-text");
            
            if(todoText.style.display != "none"){
                box.style.height="30px";
                todoText.style.display = "none";
            }else{
                box.style.height="300px";
                todoText.style.display = "flex";
            }
            
            });

    }
}

