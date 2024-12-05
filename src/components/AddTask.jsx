import { useState } from "react";
import Input from "./Input";

function AddTask({onAddTask}) {
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col ">

            <Input 
                value={title}
                onChange={event =>{setTitle(event.target.value)}}
                type="text"
                placeholder="Digite o titulo da Tarefa" 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            />
            
            <Input 
                type="text"
                value={description} 
                onChange={event => {setDescription(event.target.value)} }
                placeholder="Digite a Descrição da Tarefa" 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            />
            <button 
                onClick={() =>{
                    if(!title.trim() || !description.trim()){ //trim remove os espaços em branco
                        return alert("OPA, preencha o titulo e descrição da tarefa")
                    }
                    onAddTask(title,description)
                    setTitle("")
                    setDescription("")
                }
                    
                }
                  className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                Adicionar
            </button>
            
        </div>
    );
}
export default AddTask;