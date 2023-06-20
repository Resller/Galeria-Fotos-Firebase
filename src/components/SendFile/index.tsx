import React, { ChangeEvent, FormEvent, useState } from 'react';
import { sendPhoto } from '../../services/photo';
import * as C from './styled';
import {FaRegImages} from 'react-icons/fa'
import { Phototypes } from '../../types/types';

type props = {
    data : Phototypes[]
    setListPhoto : (list:Phototypes[])=>void
}

export const SendFile = ({data,setListPhoto}:props)=>{

    const [selectedFile,setSelectedFile]= useState<File | undefined>(undefined);
    const [loadingShipping,setLoadingShipping] = useState<Boolean>(false);
    const [send,setSend] = useState<Boolean>(false);
    const [error,setError] = useState<string>('');
    const [nameImage,setNameImage] = useState<string>('')

    const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        if( event.target.files?.[0] !== null && event.target.files?.[0]  ){
            const newfile: File = event.target.files?.[0]
            setNameImage(newfile.name)
            setSelectedFile(newfile);
        }
    };

    const sendImages = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(selectedFile && selectedFile.size > 0){
            setLoadingShipping(true)
           
            let result = await sendPhoto(selectedFile,nameImage)

            if(result instanceof Error){
                setError(result.message)
                setTimeout(()=>{
                    setError('')
                },3000)
            }else{
                let newList = [...data]
                newList.push(result)
                setListPhoto(newList)
            }
            
            setLoadingShipping(false)
            setSelectedFile(undefined)
            setSend(true)
            
            setTimeout(()=>{
                setSend(false)
            },2000)

         
        }
    }

    return(
        <C.Contanier  method="POST" onSubmit={sendImages} >
            {error &&
               <C.Error>{error}</C.Error> 
            }
            { send && !error &&
                <C.Send>Arquivo enviado com sucesso </C.Send>
            }
            {selectedFile !== undefined  && !loadingShipping && selectedFile && 
                <C.Info>Arquivo selecionado: {selectedFile.name}</C.Info>
            }
            {selectedFile === undefined && !loadingShipping && 
                <C.Info>Nenhum arquivo selecionado.</C.Info>
            }
            {loadingShipping && 
                <C.Info>Enviando arquivo ...</C.Info>
            }
            <C.FileUpload>
                <FaRegImages/>
                <label htmlFor="file-upload">Escolha um Foto</label>
                <input 
                    id="file-upload" 
                    type="file"  
                    name='image'
                    onChange={handleFileChange} 
                />
            </C.FileUpload>
            <input 
                type="submit"         
            />
        </C.Contanier>
    )
}