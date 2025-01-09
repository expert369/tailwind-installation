let mytodo = ["Develop", "Eat", "Sleep", "Repeat"];

renderToDoList();

function renderToDoList(){
    const todolist = document.querySelector('.js-todo-list');
    console.log(todolist)
    console.log(mytodo)
    mytodo.forEach(todo => {
        const html = `<div><input type="checkbox" class="mr-2 h-5 w-5"><span>${todo}</span></div>`
        todolist.innerHTML += html;
    })
    
    
}

function addToDo() {
    const input = document.querySelector('#js-input');
    const todo = input.value;

    if (todo) {
        mytodo.push(todo); // Add new task to the list
        const todolist = document.querySelector('.js-todo-list');
        const newTodoHTML = `<div><input type="checkbox" class="mr-2 h-5 w-5"><span>${todo}</span></div>`;
        todolist.innerHTML += newTodoHTML; // Append new to-do to the list
        input.value = ''; // Clear input field
    }
}