type Props= {
    tec: string;
    nivel: string;
}
export function ItensTecnologia({tec, nivel}: Props){
    return(
        <div className="flex justify-between items-center">
                <div>
                <h2 className="font-bold">{tec}</h2>
                <h3 className="text-gray-500">{nivel}</h3>
                </div>
        </div>
    );
}