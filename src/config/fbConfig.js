import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEw3MHSQjYYcUFowp70PoXcXB6GAz4vd4",
    authDomain: "react-redux-firebase-app-b3821.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-app-b3821.firebaseio.com",
    projectId: "react-redux-firebase-app-b3821",
    storageBucket: "",
    messagingSenderId: "581532817093",
    appId: "1:581532817093:web:652da00ee5aa0769"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({timestampsInSnapshots: true}); deprecated

export default firebase;