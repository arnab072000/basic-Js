let todoName = document.getElementById('full-name');
let inputItem = document.getElementById('add-todo');
let listContainer = document.getElementById('list-container');

function addTodo() {
    //let name = todoName.value;
    let todoValue = inputItem.value;
    console.log(name); 
    console.log(todoValue); 
    if(todoValue !== ''){
        createList(todoValue);
        inputItem.value = '';
        // todoName.value="";
    } else {
        alert('write some text ...!')
    }
}

function createList(value) {
    const li = document.createElement('li');
    li.innerHTML = value;
    listContainer.appendChild(li);
}
// function nameOfTodo(value){
//     let todoList = document.getElementById("list");
//     let h3 = document.createElement("h3");
//     h3.innerHTML = value;
//     todoList.appendChild(h3);
// }

function clearTodo(){
    listContainer.innerHTML='';
}



