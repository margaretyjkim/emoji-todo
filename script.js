var i = 0;

function todoForm() {
	i++;

	var task = document.taskForm.task.value;
	var taskInfo = '<div id="todoInfo' + i + '"><input type="checkbox" onclick="crossedOut(\'todoInfo' + i + '\')" />' + task + '</div>';
	document.getElementById("todoInfo").innerHTML += taskInfo;
}

function crossedOut(item) {
	document.getElementById(item).className = "checkedOff";
}