
import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Title from './components/Title'
import {v4} from "uuid"; //Biblioteca que gera um id aleatorio

function App() {
 const [tasks,setTasks] = useState( 
  JSON.parse(localStorage.getItem("tasks")) ||[]);

useEffect(()=>{
  localStorage.setItem("tasks", JSON.stringify(tasks))
},[tasks])

// useEffect(() => { //criando tarefas atráves de uma api
//   async function ApiTask(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10'); //aqui eu chamo a api, limitindo em 10 respostas somente
//     const data = await response.json(); //aqui armazeno os dados tranformando o que vem de response em json
//     setTasks(data) //aqui armazeno esses dados no state Tasks que servem para mostrar na tela;
//   }
//   ApiTask()
// }, []) //No useEffect, quando é chamado com um [] vazio, significa que ele irá ser executado quando o usuario abrir a página

function onTaskClick(taskId){
  const newTasks = tasks.map((task) => {
    if(task.id==taskId){
      return{...task, isCompleted: !task.isCompleted}
    }
    
    return task
  });
  setTasks(newTasks)
}

function onDeleteTask(taskId){
  const newTasks = tasks.filter(task => task.id != taskId) //Metodo filter que filtra e mantem no array todos as tarefas restantes que possuem um id diferente da tarefa clicada
  setTasks(newTasks)
}

function onAddTask(title,description){
  const newTask = {
    id: v4(),
    title,
    description,
    isCompleted: false,
  }
  setTasks([...tasks, newTask])
}

  return (
      <div className='w-screen h-screen bg-slate-500 flex  justify-center p-6'>
        <div className='w-[500px] space-y-4'>
            <Title>Gerenciador de Tarefas</Title>
            <AddTask onAddTask={onAddTask}/>
            <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask}/> 
        </div>
      </div>
  )
}
//No componentes tasks estou passando duas props para o componente onde posso utilizar esse state e essa função
export default App
