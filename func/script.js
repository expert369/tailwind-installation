let mytodo = JSON.parse(localStorage.getItem('mytodo')) || ["Develop", "Eat", "Sleep", "Repeat"];

const input = document.querySelector('#js-input');
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addToDo();
    }
});

renderToDoList();

function renderToDoList(){
    const todolist = document.querySelector('.js-todo-list');
    todolist.innerHTML = '';
    mytodo.forEach((todo, index) => {
        const html = `<div class="flex justify-between">
        <span style="font-weight: 500; text-decoration: underline;">${todo}</span><button class="p-2 mb-1 hover:bg-green-700 bg-green-500" 
        style="color:white; font-weight: 500; border-radius: 5px;" 
        data-index="${index}" onclick="deleteToDo(${index})">Delete</button></div>`
        todolist.innerHTML += html;
    })
    saveToLocalStorage();
    
}

function addToDo() {
    const input = document.querySelector('#js-input');
    const todo = input.value;

    if (todo) {
        mytodo.push(todo); // Add new task to the list
        renderToDoList();  // Re-render the list
        input.value = '';
    }
}

function deleteToDo(index){
    mytodo.splice(index, 1);
    renderToDoList();
}

function saveToLocalStorage() {
    localStorage.setItem('mytodo', JSON.stringify(mytodo)); // Save the list to localStorage
}
