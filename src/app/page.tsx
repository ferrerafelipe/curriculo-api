
import {Header} from '@/components/Header'
import {Formacao} from '@/components/Formacao'
import {DadosPessoais} from '@/components/DadosPessoais'
import {Tecnologias} from '@/components/Tecnologias';
import {Footer} from '@/components/Footer';

export default function Home(){
  return(
    <div>
      <div><Header/></div>
      <div><Formacao/></div>
      <div><DadosPessoais/></div>
      <div><Tecnologias/></div>
      <div><Footer/></div>
    </div>
  );
}