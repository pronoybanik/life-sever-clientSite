import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDisDEfcYaGklOIYRwNe5kZQw5ylUYnGT0",
    authDomain: "life-sever.firebaseapp.com",
    projectId: "life-sever",
    storageBucket: "life-sever.appspot.com",
    messagingSenderId: "1005021293056",
    appId: "1:1005021293056:web:e8bc992f858d3f971706e5"
};
const app = initializeApp(firebaseConfig);

export default app;