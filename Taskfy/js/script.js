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
    try {
        const task = document.createElement("div");
        let id = CreateId();
        console.log(id)
        task.innerHTML = `
        <div class="col bg-danger" id="${id}">
            <div class="col">
                NOME / ${id}
            </div>
            <div class="col">
                <button onclick="FinishTask('${id}')" class="btn">Concluir</button>
                <button onclick="EditTask('${id}')" class="btn">Editar</button>
                <button onclick="RemoveTask('${id}')" class="btn">Remover</button>
            </div>

        </div>
        `;
        document.getElementById("new").appendChild(task);

        //console.log(document.getElementById(id));
        //console.log(counter);

    } catch (error) {
        return;
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

}