import {ItensDados} from '@/components/ItensDados'

export function DadosPessoais(){
    return(
    <div className=" bg-gray-300 border w-full p-5 max-w-[1246px] px-[15px] mx-auto">
        <div className="px-[15px] ">
            <div className="pb-8">
              <h1 className="text-2xl text-blue-800">Dados Pessoais</h1>  
            </div>
            <ul className='pb-5 '>
                <li><ItensDados nascimento='28/05/1996' link='linkedin.com/in/ferrerafelipe' sexo='Masculino'/></li>
            </ul>
        </div>
    </div>
    );
}