import { deleteObject, getDownloadURL, getStorage, list, listAll, ref, uploadBytes } from "firebase/storage"
import { Phototypes } from "../types/types"
import { storage } from "../libs/Firebase"
import { v4 } from "uuid"

export const getPhotos = async ()=> {
    let list : Phototypes[] = [] 

    const imagesFolder =  ref(storage,"images");
    const photoList = await listAll(imagesFolder)

    for (let i in photoList.items){
        let url = await getDownloadURL(photoList.items[i]);
        
        list.push({
            name : photoList.items[i].name,
            url
        })
    }
    return list
}
export const sendPhoto =async (file:File,nameImage:string) => {
    if(['image/jpeg','image/png','image/jpg'].includes(file.type)){
        
        const storageRef = ref(storage,`images/${nameImage}`)
        
        let upload = await uploadBytes(storageRef, file) 
        let photo = await getDownloadURL(upload.ref)
       
        return {name:upload.ref.name , url:photo}
    
    }else{
        return new Error ('arquivo não permitido')
    }
}
export const deletePhoto = async (name:string)=>{
    
    const PhotoRef = ref(storage, `images/${name}`);
    await deleteObject(PhotoRef);

    
}
