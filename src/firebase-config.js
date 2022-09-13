import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAzUC3PQSKd0hxxox_-NEdc-2h8-fXLcp8",
    authDomain: "intheclouds-b1783.firebaseapp.com",
    projectId: "intheclouds-b1783",
    storageBucket: "intheclouds-b1783.appspot.com",
    messagingSenderId: "891378256458",
    appId: "1:891378256458:web:c1a0190bea8639efdef4b3",
    measurementId: "G-XN8L7SWHJW"
  };

  const app= initializeApp(firebaseConfig);

  export const db = getFirestore(app);