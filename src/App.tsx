import * as C from './styled'

import {useEffect,useState} from 'react'

import { Header } from './components/Header'
import { Photos } from './components/Photos'
import { SendFile } from './components/SendFile'

import { deletePhoto, getPhotos} from './services/photo'

import { Phototypes } from './types/types'

function App() { 
  const [listPhoto,setListPhoto] = useState <Phototypes[]>([])

  useEffect(()=>{
    const getListPhotos = async ()=>{
      let list  = await getPhotos()
      setListPhoto(list)
    }
    getListPhotos()
  },[])

  const removePhoto = async (name:string,key:number)  =>{
    await deletePhoto(name)
    let newList = listPhoto.filter((item,index) => index !== key)
    setListPhoto(newList)
  }
  
  return (
    <C.Contanier>
      <Header/>
      <C.Area>
        <SendFile
          data = {listPhoto}
          setListPhoto = {setListPhoto}
        />
      </C.Area>
      <C.Area>
        <Photos
          data = {listPhoto}
          removePhoto = { removePhoto}
        />
      </C.Area>
    </C.Contanier>
  )
}

export default App
