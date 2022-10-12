const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyDx9Z-QWkRiSEtonBCskkE-E28Nu9Rykys",
    authDomain: "pai-da-carona.firebaseapp.com",
    databaseURL: "https://pai-da-carona-default-rtdb.firebaseio.com",
    projectId: "pai-da-carona",
    storageBucket: "pai-da-carona.appspot.com",
    messagingSenderId: "512709664114",
    appId: "1:512709664114:web:43663f09831ba6228151eb",
    measurementId: "G-V6GGDDYMK4"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

module.exports = db;