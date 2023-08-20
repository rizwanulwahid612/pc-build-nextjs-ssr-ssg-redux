// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7CJKAI3S_m6n1ST91-tqTYy6FytHyaDI",
    authDomain: "pcbuilder-7fd66.firebaseapp.com",
    projectId: "pcbuilder-7fd66",
    storageBucket: "pcbuilder-7fd66.appspot.com",
    messagingSenderId: "716574398772",
    appId: "1:716574398772:web:15e3869f1723096ca76d61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app