const inputItem = document.getElementById('add-todo');
const listContainer = document.getElementById('list-container');

let todos = JSON.parse(localStorage.getItem('todos')) || [];


loadTodos();

function addTodo() {
    let todoValue = inputItem.value.trim(); 
    console.log(todoValue); 
    if (todoValue === '' || (!isNaN(todoValue))) {
        alert('write some text ...!')
    } else {
        todos.push(todoValue);
        // localStorage.setItem('todos', JSON.stringify(todos));
        createList(todoValue);
        inputItem.value = '';
        saveTodo();
    }
}

//console.log(todos);


function createList(value) {
    const li = document.createElement('li');
    li.innerHTML= `<input type="checkbox">
    <label>
        ${value}
    </label>`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTodo';
    deleteButton.onclick = function() {
        todos = todos.filter(todo => todo !== value);
        // localStorage.setItem('todos', JSON.stringify(todos));
        // console.log(li.innerText.replace('Delete', '').trim());
        listContainer.removeChild(li);
        saveTodo();
    };
    li.appendChild(deleteButton);

    listContainer.appendChild(li);
}

// deleteButton.addEventListner('click', function() {
//     listContainer.removeChild(li);
// });
// let listSelector =  listContainer.querySelectorAll('li');
// console.log(listSelector);

// function saveTodo() {
//     let todos = [];
//     listContainer.querySelectorAll('li').forEach(function(item) {
//         todos.push(item.innerText.replace('Delete', '').trim());
//     });
//      localStorage.setItem('todos', JSON.stringify(todos));
// }

//new saveTodo function  

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(createList);
}


function clearTodo() {
    listContainer.innerHTML='';
    todos = [];
    localStorage.setItem('todos', JSON.stringify(todos));
}


  
