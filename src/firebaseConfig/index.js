import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyAHWllWGHsvw5nXaazIqwRN9M7nf3M_r98",
   authDomain: "wallet-8c702.firebaseapp.com",
   databaseURL: "https://wallet-8c702-default-rtdb.firebaseio.com",
   projectId: "wallet-8c702",
   storageBucket: "wallet-8c702.appspot.com",
   messagingSenderId: "281862918534",
   appId: "1:281862918534:web:a10ab5bb0fb838d4a1dc07"
 };

export const app = initializeApp(firebaseConfig);