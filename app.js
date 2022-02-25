const animateBackground = () => {
	let r = 255;
	let g = 0;
	let b = 255;

	let r1 = 0;
	let g1 = 0;
	let b1 = 255;

	let r2 = 255;
	let g2 = 0;
	let b2 = 0;

	function toColorPlus() {
		if (r == 255 && g == 0 && b < 255) {
			b += 5;
		}
		if (g == 0 && b == 255 && r > 0) {
			r -= 5;
		}
		if (r == 0 && b == 255 && g < 255) {
			g += 5;
		}
		if (r == 0 && g == 255 && b > 0) {
			b -= 5;
		}
		if (g == 255 && b == 0 && r < 255) {
			r += 5;
		}
		if (r === 255 && b == 0 && g > 0) {
			g -= 5;
		}
	}

	function toColorPlus1() {
		if (r1 == 255 && g1 == 0 && b1 < 255) {
			b1 += 5;
		}
		if (g1 == 0 && b1 == 255 && r1 > 0) {
			r1 -= 5;
		}
		if (r1 == 0 && b1 == 255 && g1 < 255) {
			g1 += 5;
		}
		if (r1 == 0 && g1 == 255 && b1 > 0) {
			b1 -= 5;
		}
		if (g1 == 255 && b1 == 0 && r1 < 255) {
			r1 += 5;
		}
		if (r1 === 255 && b1 == 0 && g1 > 0) {
			g1 -= 5;
		}
	}

	function toColorPlus2() {
		if (r2 == 255 && g2 == 0 && b2 < 255) {
			b2 += 5;
		}
		if (g2 == 0 && b2 == 255 && r2 > 0) {
			r2 -= 5;
		}
		if (r2 == 0 && b2 == 255 && g2 < 255) {
			g2 += 5;
		}
		if (r2 == 0 && g2 == 255 && b2 > 0) {
			b2 -= 5;
		}
		if (g2 == 255 && b2 == 0 && r2 < 255) {
			r2 += 5;
		}
		if (r2 === 255 && b2 == 0 && g2 > 0) {
			g2 -= 5;
		}
	}

	setInterval(() => {
		toColorPlus();
		toColorPlus1();
		toColorPlus2();

		document.getElementsByTagName(
			"BODY"
		)[0].style.background = `linear-gradient(60deg, rgb(${r},${g},${b}) ,rgb(${r1},${g1},${b1}) ,rgb(${r2},${g2},${b2}))`;
	}, 250);
};

// Variables

const inputBox = document.querySelector(".input-box");
const inputBoxEdit = document.querySelector(".input-box-edit");
const taskName = document.querySelector(".task-name");
const taskDesc = document.querySelector(".task-desc");
const taskList = document.querySelector(".task-list");
const editBtn = document.querySelector(".edit-task");
const editTaskName = document.querySelector(".edit-task-name");
const editTaskDesc = document.querySelector(".edit-task-desc");

const toDoApp = () => {
	// Selecting HTML Elements
	const addBtn = document.querySelector(".add-btn");
	const addTaskBtn = document.querySelector(".add-task");
	const cancelTaskBtn = document.querySelector(".cancel-task");
	const cancelEditTaskBtn = document.querySelector(".cancel-edit-task");

	addBtn.addEventListener("click", openTaskFrom);
	taskList.addEventListener("click", delCheckTask);
	addTaskBtn.addEventListener("click", addTask);
	cancelTaskBtn.addEventListener("click", cancelTask);
	cancelEditTaskBtn.addEventListener("click", cancelEditTask);

	animateBackground();
};

const openTaskFrom = () => {
	inputBox.classList.add("show");
	taskList.style.filter = "blur(10px)";
};

const addTask = (e) => {
	createTask();
	inputBox.classList.remove("show");
	taskList.style.filter = "blur(0)";
};

const cancelTask = (e) => {
	inputBox.classList.remove("show");
	taskList.style.filter = "blur(0)";
};

const cancelEditTask = (e) => {
	inputBoxEdit.classList.remove("show");
	taskList.style.filter = "blur(0)";
};

const editTask = (e) => {
	editTaskName.value = e.target.parentElement.parentElement.children[0].children[0].innerText;
	editTaskDesc.value = e.target.parentElement.parentElement.children[0].children[1].innerText;
	editBtn.addEventListener("click", () => {
		e.target.parentElement.parentElement.children[0].children[0].innerText = editTaskName.value;
		e.target.parentElement.parentElement.children[0].children[1].innerText = editTaskDesc.value;
		cancelEditTask();
	});

	inputBoxEdit.classList.add("show");
	taskList.style.filter = "blur(5px)";
};

const delCheckTask = (e) => {
	const item = e.target;
	if (item.classList[1] === "fa-times") {
		item.parentElement.parentElement.parentElement.remove();
	}
	if (item.classList[1] === "fa-check") {
		item.parentElement.parentElement.firstChild.classList.toggle("checked");
	}
	if (item.classList[1] === "fa-edit") {
		editTask(e);
	}
};

const createTask = () => {
	// Variables to create list items in Javascript
	console.log("create-task-hit!");
	if (taskName.value === "") {
		alert("Please Enter a Task!");
		return;
	}

	const ul = document.querySelector(".task-list");
	const div = document.createElement("div");
	const li = document.createElement("li");
	const divText = document.createElement("div");
	const divIcons = document.createElement("div");
	const crossIcon = document.createElement("i");
	const checkIcon = document.createElement("i");
	const editIcon = document.createElement("i");
	const p1 = document.createElement("p");
	const p2 = document.createElement("p");

	p1.innerText = taskName.value;
	p2.innerText = taskDesc.value;
	li.style.textTransform = "capitalize";
	div.classList.add("task-item");
	divText.classList.add("task-text");
	divIcons.classList.add("div-icons");
	editIcon.classList.add("fas", "fa-edit", "edit-icon");
	crossIcon.classList.add("fas", "fa-times");
	checkIcon.classList.add("fas", "fa-check", "check");

	divText.appendChild(p1);
	divText.appendChild(p2);
	li.appendChild(divText);
	div.appendChild(li);
	divIcons.appendChild(checkIcon);
	divIcons.appendChild(crossIcon);
	divIcons.appendChild(editIcon);
	li.appendChild(divIcons);
	ul.append(div);

	taskName.value = "";
	taskDesc.value = "";
};

toDoApp();
