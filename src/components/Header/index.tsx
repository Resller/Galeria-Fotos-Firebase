import * as C from './styled';
import {FaCameraRetro} from 'react-icons/fa'

export const Header = ()=>{
    return(
        <C.Contanier>
            <C.Area>
                <FaCameraRetro/>
                <h1>Galeria de Fotos </h1> 
            </C.Area>
          
        </C.Contanier>
    )
}