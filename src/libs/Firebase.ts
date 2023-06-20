import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey:"AIzaSyBf2Xcn68PqEVuaoSWksF2lCD3HroRVzZ8",
  authDomain:"react-photo-gallery-2f2c7.firebaseapp.com",
  projectId: "react-photo-gallery-2f2c7",
  storageBucket:"react-photo-gallery-2f2c7.appspot.com",
  messagingSenderId: "1038410698576",
  appId:"1:1:1038410698576:web:22db7fc2c117eea1596655"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
