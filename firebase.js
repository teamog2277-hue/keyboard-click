// firebase.js

// Import Firebase libraries from CDN
// firebase.js
// Modular Firebase v9+ setup

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvjMlUXm-tYzCxNRJxqxCMq8YiZ_TJHdI",
  authDomain: "typing-9fd22.firebaseapp.com",
  projectId: "typing-9fd22",
  storageBucket: "typing-9fd22.appspot.com",
  messagingSenderId: "540077060670",
  appId: "1:540077060670:web:5ac255906ca6c1ddae576f",
  measurementId: "G-WMVR5C1ZRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export auth for use in other scripts
export const auth = getAuth(app);
