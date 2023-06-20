import * as C from './styled';

type props = {
    url : string,
    name : string,
    index:number,
    removePhoto : (name:string,key:number) =>void
}

export const Photo = ({url, name, index, removePhoto}:props)=>{
    return(
        <C.Contanier>
            <C.AreaImg>
                <C.Img src ={url}/>
            </C.AreaImg>
            <C.AreaInfo>
                <C.NamePhoto>{name}</C.NamePhoto>
                <C.AreaButton>
                    <C.Button onClick={()=>removePhoto(name,index)}>Remove</C.Button>
                 </C.AreaButton>  
            </C.AreaInfo>          
        </C.Contanier>
    )
}