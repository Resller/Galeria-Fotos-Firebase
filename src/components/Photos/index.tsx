import { getPhotos } from '../../services/photo';
import { Phototypes } from '../../types/types';
import { Photo } from '../Photo';
import * as C from './styled';

type props = {
    data : Phototypes[],
    removePhoto: (name:string,key:number)=>void
}

export const Photos = ({data, removePhoto}:props)=>{

    return(
        <C.Contanier>
           <C.HeaderPhotos>
                <C.Title>Últimas fotos</C.Title>
           </C.HeaderPhotos>
           <C.BodyPhotos>
                {data.length>0 &&
                    data.map((i,k)=>(
                        <Photo
                            key={k}
                            url = {i.url}
                            name = {i.name}
                            index={k}
                            removePhoto = {removePhoto}
                        />
                    ))
                }
           </C.BodyPhotos>
        </C.Contanier>
    )
}