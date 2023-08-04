import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBB982bHrl1WthWvhijNMbyNif18yoSuGg",
    authDomain: "fit-club-project.firebaseapp.com",
    projectId: "fit-club-project",
    storageBucket: "fit-club-project.appspot.com",
    messagingSenderId: "476294770402",
    appId: "1:476294770402:web:0160719d4e7246c37778bb",
    measurementId: "G-3XQJRRNQEG"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }