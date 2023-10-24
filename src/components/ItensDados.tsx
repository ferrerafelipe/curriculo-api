
type Props = {
    nascimento: string;
    link: string;
    sexo: string;
}

export function ItensDados({nascimento, link, sexo}: Props){
    return(
        <div className="items-center">
            <div className="pb-5">
                <h2 className="text-gray-500">Sexo</h2>
                <h3 className="text-black">{sexo}</h3>
            </div>
            <div className="pb-5">
                <h2 className="text-gray-500">Data de nascimento</h2>
                <h3 className="text-black">{nascimento}</h3>
            </div>
            <div>
                <h2 className="text-gray-500">Linkedin</h2>
                <h3 className="text-black">{link}</h3>
            </div>  
        </div>
    )
}





        