  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCmDBY9HDFObDFReS_BaDVEwpq2RAOB0Ac",
    authDomain: "habito-4292b.firebaseapp.com",
    projectId: "habito-4292b",
    storageBucket: "habito-4292b.firebasestorage.app",
    messagingSenderId: "853842708098",
    appId: "1:853842708098:web:e0578ae3eb36508f1e169b",
    measurementId: "G-F1NGYTFE3R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);