
import {ItensTecnologia} from '@/components/ItensTecnologias'

export function Tecnologias() {
    return(
    <div className="border w-full p-5 max-w-[1246px] px-[15px] mx-auto min-h-[300px]">
        <div className="px-[15px] ">
            <div className="pb-8">
              <h1 className="text-2xl text-blue-800">Tecnologias</h1>  
            </div>
        <div className='flex justify-between'>
            <ul className='pb-5'>
                <li><ItensTecnologia tec='HTML & CSS' nivel='Intermediário'/></li>
            </ul>
            <ul className='pb-5'>
                <li><ItensTecnologia tec='JavaScript' nivel='Iniciante'/></li>
            </ul>
            <ul>
                <li className='pb-5'><ItensTecnologia tec='React' nivel='Iniciante'/></li>
            </ul>
            <ul>
                <li><ItensTecnologia tec='Next.Js' nivel='Iniciante'/></li>
            </ul>
        </div>
        </div> 
    </div>
    );
}