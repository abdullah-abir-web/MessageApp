import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCZUeCim7Ycz31KwrOB4uFrRTdv433CzcU",
  authDomain: "messageapp-e3d3f.firebaseapp.com",
  databaseURL:
    "https://messageapp-e3d3f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "messageapp-e3d3f",
  storageBucket: "messageapp-e3d3f.appspot.com",
  messagingSenderId: "491958497717",
  appId: "1:491958497717:web:afd9818f731a5185abe9fc",
};
const app = initializeApp(firebaseConfig);
export default firebaseConfig;
