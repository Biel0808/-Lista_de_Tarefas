import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button"

function Tasks({tasks,onTaskClick,onDeleteTask}){
    const navigate = useNavigate(); //navigate utilizado para fazer a navegação da página, neste caso ele faz a rota que leva para a pagina task, e atraves do query params mostra o conteudo

    function onSeeDetailsClick(task){
        const query = new URLSearchParams(); //uma forma adequada de pegar os parametros passados na url, setando as informações e depois passando no navigate
        query.set("title" , task.title);
        query.set("description",task.description)
        navigate(`/task?${query.toString()}`)
    }
    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
            {tasks.map((task) =>
             <li key={task.id} className="flex gap-2">
                <button 
                    onClick={() => onTaskClick(task.id)} 
                    className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                        {task.isCompleted && <CheckIcon/>}
                        {task.title}
                </button>
                <Button onClick={()=> onSeeDetailsClick(task)} className="bg-slate-400  text-white p-2 rounded-md">
                    <ChevronRightIcon/>
                </Button>
                <Button
                    onClick={() => onDeleteTask(task.id)}
                    className="bg-slate-400  text-white p-2 rounded-md">
                        <TrashIcon/>
                </Button>
            </li>
            )}
        </ul>
    );
}
export default Tasks;