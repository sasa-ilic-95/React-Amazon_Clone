import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBa3rGnx9uS9xUTd6GTiRe-PggydOT1-M8",
    authDomain: "clone-23855.firebaseapp.com",
    databaseURL: "https://clone-23855.firebaseio.com",
    projectId: "clone-23855",
    storageBucket: "clone-23855.appspot.com",
    messagingSenderId: "1080966473712",
    appId: "1:1080966473712:web:f6db1ec0f2db9df900df35",
    measurementId: "G-WDMWWHLM21",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
