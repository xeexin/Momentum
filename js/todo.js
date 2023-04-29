const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.getElementById("todo-list");

const toDos = [];

//저장
function saveToDo(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

//삭제
function deleteTodo(event){
    //console.dir(event.target.parentElement.innerText);
    //console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}

//화면에 리스트 보이기
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = " ❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

//엔터 키 눌렀을 때
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; //입력 후 공백 만들기
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);