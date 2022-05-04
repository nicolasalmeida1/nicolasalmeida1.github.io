import { addTask, getAllTasks } from "./utils/domFunctions.js";

// console.log("hello world!");
// console.info("hello world!");
// console.error("hello world!");
// console.warn("hello world!");

const db = [
    {
        id: 1,
        title: 'Concluir App Conexão Arte',
        steps: [
            { step: "Ajustar textos"},
            { step: "Trocar imagem para imagem públicas"},
            { step: "Publicar no Expo"},
            { step: "Publicar no Expo Store Conect"},
        ],
        done: false,
        dueDate: "2022-05-06",
        reminder:"2022-05-02 10:00",
    },

    {
        id: 2,
        title: "Aula 4 Fiap - Avanade",
        steps: [
            { step: "Atributos Globais"},
            { step: "Estrutura CSS"},
        ],
        done: false,
        dueDate: "2022-05-06",
        reminder:"2022-05-02 10:00",
    },
];

getAllTasks(db);

const form = document.querySelector("#addNewTask");
const newTask = document.querySelector("#inputTxtNewTask");

form.addEventListener("submit", (e) => {
    //Form faz um favor? Pois não! Não faz nada...
    e.preventDefault();
  });

console.log(db);
newTask.addEventListener('keyup',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(e.key =="Enter"){
        if(!newTask.value){
            alert("Por favor, digite alguma coisa!")
        }
        else{
        
        const d = new Date();
        const today = `${d.getFullYear()}/0${d.getMonth()+1}/${d.getDate()}}`;

        db.push({
            id: Number(db.length)+1, 
            title: newTask.value, 
            done: false, 
            dueDate: today
        });

        document.querySelector(".tasks").innerHTML="";
        getAllTasks(db);
        newTask.value = "";
        console.log(db);
        }
    }
});