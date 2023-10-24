
import {ItensFormacao} from '@/components/ItensFormacao'

export function Formacao(){
    return(
    <div className="border w-full p-5 max-w-[1246px] px-[15px] mx-auto min-h-[300px]">
        <div className="px-[15px]">
            <div className="pb-8">
              <h1 className="text-2xl text-blue-800">Formação</h1>  
            </div>
            <ul className='pb-5'>
                <li><ItensFormacao curso='Gestão e Empreendedorismo' instutuicao='Uniasselvi, Santa Maria' periodo='jan 2021 - jul 2023'/></li>
            </ul>
            <ul className='pb-5'>
                <li><ItensFormacao curso='Pós em Ciência de Dados' instutuicao='Uniasselvi, Santa Maria' periodo='jul 2023 - dez 2023'/></li>
            </ul>
            <ul>
                <li><ItensFormacao curso='Eletrotécnica' instutuicao='Colégio técnico industrial de Santa Maria - CTISM' periodo='jan 2017 - dez 2018'/></li>
            </ul>
        </div>
    </div>
    );
}