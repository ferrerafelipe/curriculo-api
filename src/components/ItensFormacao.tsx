
type Props= {
    curso: string;
    instutuicao: string;
    periodo: string;
}


export function ItensFormacao({curso, instutuicao, periodo}: Props){
    return(
        <div className="flex justify-between items-center">
            <div>
                <h2 className="font-bold">{curso}</h2>
                <h3 className="text-gray-500">{instutuicao}</h3>
            </div>
            <div>
                <h3>{periodo}</h3>
            </div>
        </div>
    );
}