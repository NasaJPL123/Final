import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
  getDatabase,
  set,
  get,
  update,
  remove,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDl3s8c7_w2nDjYW0ybBaxdeRuPXfGM0fQ",
  authDomain: "final-user-b9cd0.firebaseapp.com",
  databaseURL: "https://final-user-b9cd0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-user-b9cd0",
  storageBucket: "final-user-b9cd0.appspot.com",
  messagingSenderId: "303024203475",
  appId: "1:303024203475:web:41f138c4443631ac97d626",
  measurementId: "G-TD0V8W6SCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
document.addEventListener("DOMContentLoaded", () => {
  // Get the elements
  const form = document.getElementById("loginForm");
  // Check if the elements are not null before attaching the event listener
  if (form) {
    form.addEventListener("submit", AuthenticateUser);
    event.preventDefault();
  }
});

function AuthenticateUser(event) {
  event.preventDefault(); // Prevent the default form submission
  const dbRef = ref(db);
  const username = document.getElementById("userInp");
  const pass = document.getElementById("passInp");
  const usernameValue = username.value; // Extract the username value from the input
  const passValue = pass.value; // Extract the password value from the input

  get(child(dbRef, "UsersList/" + usernameValue))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const dbpass = snapshot.val().password;
        if (dbpass === passValue) {
          alert("Login successful!");
          window.location.href = "/src/screens/User/HomePage/index.html";
        } else {
          alert("Invalid password");
        }
      } else {
        alert("User does not exist");
      }
    })
    .catch((error) => {
      alert("Error fetching user data: " + error.message);
    });
}

  
  