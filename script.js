function todoForm() {
	var task = document.taskForm.task.value;
	var taskInfo = '<div id="todoInfo"><input type="checkbox" />' + task + '</div>';
	document.getElementById("todoInfo").innerHTML += taskInfo;
}