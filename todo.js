let inputItem = document.getElementById('add-todo');
let listContainer = document.getElementById('list-container');

function addTodo() {
    let todoValue = inputItem.value; 
    console.log(todoValue); 
    if(todoValue === '' || (!isNaN(todoValue))) {
        alert('write some text ...!')
    } else {
        createList(todoValue);
        inputItem.value = '';
    }
}

function createList(value) {
    const li = document.createElement('li');
    li.innerHTML= `<input type="checkbox">
    <label>
        ${value}
    </label>`;
    listContainer.appendChild(li);
}


function clearTodo() {
    listContainer.innerHTML='';
}



