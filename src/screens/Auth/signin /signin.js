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

const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('sub_btn')
// VALIDATION

function isEmptyOrSpaces(str) {
  return str == null || str.match(/^ *$/) !== null;
}

function Validation() {
  let nameregex = /^[a-zA-Z\s]+$/;
  let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
  let userregex = /^[a-zA-Z0-9]{5,}$/;

  if (isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) || isEmptyOrSpaces(pass.value)) {
    alert("You cannot leave any field empty");
    return false;
  }
  
  if (!nameregex.test(name.value)) {
    alert("The name should only contain alphabets!");
    return false;
  }

  if (!emailregex.test(email.value)) {
    alert("Enter a valid email");
    return false;
  }

  if (!userregex.test(username.value)) {
    alert("- Username can only be alphanumeric\n- Username must be at least 5 characters\n- Username cannot contain spaces");
    return false;
  }

  return true;
}

function RegisterUser() {
  
  event.preventDefault();

  if (!Validation()) {
    return;
  }

  const dbRef = ref(db);
  const usernameValue = username.value;

  get(child(dbRef, "UsersList/" + usernameValue)).then((snapshot) => {
    if (snapshot.exists()) {
      alert("Account Already Exists!");
    } else {
      set(ref(db, "UsersList/" + usernameValue), {
        fullname: name.value,
        email: email.value,
        username: username.value,
        password: pass.value,
        role: "user"
      }).then(() => {
        alert("User added successfully");
        window.location.href = "/src/screens/Auth/login /login.html"
      }).catch((error) => {
        alert("Error: " + error);
      });
    }
  }).catch((error) => {
    alert("Error: " + error);
  });
}

submit.addEventListener("click", RegisterUser);