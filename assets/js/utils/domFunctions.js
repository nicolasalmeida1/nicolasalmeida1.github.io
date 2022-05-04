//Funções bem escritas, devem ser simples, curtas e realizando um objetivo

//quando precisamos acessar uma função em outro arquivo é necessário exportá-la.

export function addTask(db, title=""){
    // Criando uma nova tarefa
    const task = document.createElement('div');
    // const id = Number(db.length) + 1;
    task.classList.add('task');
    task.setAttribute('id', db.id);
    const taskBody = `
    <div> <input type="checkbox" id="check_${db.id}"/> </div>
                <div>
                    <div><span class = "title-task">${title ? title : db.title}</span></div>
                </div>
                <div>Star</div>
    `;

    task.innerHTML = taskBody;
    document.querySelector(".tasks").appendChild(task);
}

export function removeTask(){
    alert("Removendo uma nova tarefa")
}

export function updateTask(){
    alert("Alterando uma nova tarefa")
}

export function getAllTasks(db){
    db.forEach((item) => {
        addTask(item);
    });
}

export function getTaskById(){
    alert("Exibindo uma tarefa")
    back
}

//quando for importar do arquivo domFunctions. O JS não sabe quantas funções estão disponíveis.
// Quando eu preciso extrair qualquer recurso, usando a destruturação
//import {addTask} from '.domFunctions.js';