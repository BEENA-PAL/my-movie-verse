import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHjSNdfJng8sNYPry6HHGkn1ozojbvX0M",
  authDomain: "filmyverse-8d0b7.firebaseapp.com",
  projectId: "filmyverse-8d0b7",
  storageBucket: "filmyverse-8d0b7.appspot.com",
  messagingSenderId: "644511725815",
  appId: "1:644511725815:web:b8b375a2bebab288e93bf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
