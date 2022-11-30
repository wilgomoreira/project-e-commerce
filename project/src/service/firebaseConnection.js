
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6Nw3KkWCjPmBelGXRRrjrV0FrOGn3DgE",
    authDomain: "e-commerce-b7f8b.firebaseapp.com",
    projectId: "e-commerce-b7f8b",
    storageBucket: "e-commerce-b7f8b.appspot.com",
    messagingSenderId: "149616693304",
    appId: "1:149616693304:web:64e5a502c09242884a16cd"
};
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;














