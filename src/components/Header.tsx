import {ItensHeader} from '@/components/ItensHeader'
import {FaRegPaperPlane} from "react-icons/fa";
import {FaRegMap} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";

export function Header(){
    return(
        <header className="bg-blue-900 w-full p-5 max-w-[1246px] px-[15px] mx-auto">
            <div className=' px-[15px]'>
                <div className="pb-8">
                    <h1 className="text-5xl text-white pb-3">Felipe Ferreira</h1>
                    <h2 className=" text-1xl text-gray-400">Desenvolvedor Front-End</h2>
                </div>
                <div>
                <ul className="flex gap-10">
                    <li className='flex items-center gap-2'>
                        <FaRegPaperPlane/><ItensHeader 
                        name="fr.felipe@outlook.com"/>
                    </li>
                    <li className='flex items-center gap-2'>
                         <FaPhone/><ItensHeader 
                        name="55 996569893"/>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaRegMap/><ItensHeader 
                        name="Santa Maria - RS"/>
                    </li>
                </ul>
                </div>
            </div>
        </header>
        );
    }
20