let counter = 1;

function CreateId() {
    switch (counter) {
        case 1:
            counter++;
            return "task1";
        default: 
            text = `task${counter}`;
            counter++;
            return text;
        case 21:
            console.log("NÚMEROS MÁXIMOS DE TAREFAS");
            return error;
    }
}

function AddTask() {
    let name = document.getElementById("taskNameInput").value;
    if(name.trim() !== "") {
        try {
            const task = document.createElement("div");
            let id = CreateId();
            //console.log(id)

            task.innerHTML = `
        <div class="col bg-white border border-1 border-dark p-2" id="${id}">
            <div class="col fs-4" id="taskName">
                ${name}
            </div>
            <div class="col">
                <button onclick="FinishTask('${id}')" class="btn">Concluir</button>
                <button onclick="EditTask('${id}')" class="btn">Editar</button>
                <button onclick="RemoveTask('${id}')" class="btn">Remover</button>
            </div>
            <div class="col">
                <input type="text" id="taskNameEditInput">
            </div>
        </div>
        `;
            document.getElementById("new").appendChild(task);
            document.getElementById("taskNameInput").value = "";
            //console.log(document.getElementById(id));
            //console.log(counter);

        } catch (error) {

        }
    }
}

function FinishTask(id) {

    const task = document.getElementById(id);

    document.getElementById("done").appendChild(task);
}

function RemoveTask(id) {

    const task = document.getElementById(id);
    task.remove();
    counter--;

    //console.log(counter);
}

function EditTask(id) {

    const container = document.getElementById(id);
    const taskNameDiv = container.querySelector("#taskName");
    const nameEdit = container.querySelector("#taskNameEditInput");

    if(nameEdit.value.trim() !== "") {
        taskNameDiv.textContent = nameEdit.value;
        nameEdit.value = "";
    }

}