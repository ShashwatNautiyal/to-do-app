const toDoApp = () => {
	// Selecting HTML Elements
	const addBtn = document.querySelector('.add-btn');
	const taskList = document.querySelector('.task-list');

	addBtn.addEventListener('click', addTodo);
	taskList.addEventListener('click', delCheckTask);
};

const addTodo = (e) => {
	const taskInput = document.querySelector('.task-inp');
	e.preventDefault();
	createTask(taskInput);
};

const delCheckTask = (e) => {
	const item = e.target;
	if (item.classList[1] === 'fa-times') {
		item.parentElement.remove();
	}
	if (item.classList[1] === 'fa-check') {
		e.target.previousSibling.classList.toggle('checked');
	}
};

const createTask = (taskInput) => {
	// Variable to create list items in Javascript
	const ul = document.querySelector('.task-list');
	const div = document.createElement('div');
	const li = document.createElement('li');
	const crossIcon = document.createElement('i');
	const checkIcon = document.createElement('i');

	li.innerText = taskInput.value;
	li.style.textTransform = 'capitalize';
	div.classList.add('task-item');
	crossIcon.classList.add('fas', 'fa-times');
	checkIcon.classList.add('fas', 'fa-check', 'check');
	div.appendChild(li);
	div.appendChild(checkIcon);
	div.appendChild(crossIcon);
	ul.append(div);
	document.querySelector('.task-inp').value = '';
};

toDoApp();
