import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";


function TaskPage(){
   const [searchParams] = useSearchParams(); // serve para pegar o query params passado na url, neste caso sendo o title e o description
   const title = searchParams.get("title");
   const description = searchParams.get("description");
   const navigate = useNavigate(); //navigate utilizado para fazer a navegação da página, neste caso o -1 representar o botão de voltar

  
    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            
            <div className='w-[500px] mx-auto space-y-4'>
                <div className="flex justify-center relative mb-6">
                    <button onClick={()=>navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon/>
                    </button>
                    <Title>Detalhes da Tarefa</Title>
                </div>

                <div className="bg-slate-200 p-4 rounded-md" >
                    <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    );
}
export default TaskPage;