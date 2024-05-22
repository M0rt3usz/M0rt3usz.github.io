let list = document.querySelector("#list");
        let task = document.querySelector("#enterValue");

        function appendTask() {
            const newTask = document.createElement("li");
            newTask.innerText = task.value;
            list.appendChild(newTask);
            list.style.border = "2px solid black";
            newTask.style.fontSize = "25px";
            newTask.style.margin = "5px";

            if (task.value == "") {
                alert("Element nie może być pusty");
                list.removeChild(newTask);
            };
            task.value = "";
        };

        function deleteTask() {
            if (list.lastElementChild) {
                list.removeChild(list.lastElementChild);
            } else {
                alert("Lista jest pusta");
                list.style.border = "";
            }
        };

        function clearList() {
            if (list) {
                list.innerHTML = "";
                list.style.border = "";
            } else {
                alert("Lista jest pusta");
            };
        };