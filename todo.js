document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();

    if (task !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> ${task}`;
        ul.appendChild(li);
        input.value = "";
    }
}
