const inputItem = document.getElementById('add-todo');
const listContainer = document.getElementById('list-container');

loadTodos();

function addTodo() {
    let todoValue = inputItem.value.trim(); 
    console.log(todoValue); 
    if (todoValue === '' || (!isNaN(todoValue))) {
        alert('write some text ...!')
    } else {
        createList(todoValue);
        inputItem.value = '';
        saveTodo();
    }
}

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
        listContainer.removeChild(li);
        saveTodo();
    };
    li.appendChild(deleteButton);

    listContainer.appendChild(li);
}

// deleteButton.addEventListner('click', function() {
//     listContainer.removeChild(li);
// });

function saveTodo() {
    let todos = [];
    listContainer.querySelectorAll('li').forEach(function(item) {
        todos.push(item.innerText.replace('Delete', '').trim());
    });
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


  
