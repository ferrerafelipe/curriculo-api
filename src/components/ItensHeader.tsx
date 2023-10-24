
type Props = {
    name: String;
}

export function ItensHeader({name}: Props) {
    return(
        <span className= "text-gray-400">{name}</span>
    );
}