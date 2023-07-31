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
const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const analytics = getAnalytics(app);

  var namebox = document.getElementById("Namebox");
  var pricebox = document.getElementById("Pricebox");
  var descbox = document.getElementById("Descbox");

  var insBtn = document.getElementById("Insbtn");
  var selBtn = document.getElementById("Selbtn");
  var updBtn = document.getElementById("Updbtn");
  var delBtn = document.getElementById("Delbtn");
  var getTbl = document.getElementById("Table");
  

  // UPDATE DATA FUNCTION
  function UpdateData() {
    update(ref(db, "UsersList/" + namebox.value), {
        username: namebox.value,
        email: pricebox.value,
        password: descbox.value,
        fullname: Fullbox.value,
    })
      .then(() => {
        alert("Data updated successfully");
        location.reload(); // Refresh the page after successful update
      })
      .catch((error) => {
        alert("Unsuccessful. Error: " + error);
      });
  }

  // DELETE DATA FUNCTION
  function DeleteData() {
    remove(ref(db, "UsersList/" + namebox.value))
      .then(() => {
        alert("Data removed successfully");
        location.reload(); // Refresh the page after successful deletion
      })
      .catch((error) => {
        alert("Unsuccessful. Error: " + error);
      });
  }

  function SelectData() {
    const dbref = ref(db, "UsersList");
  
    get(child(dbref, namebox.value))
      .then((snapshot) => {
        if (snapshot.exists()) {
          namebox.value = snapshot.val().username;
          pricebox.value = snapshot.val().email;
          descbox.value = snapshot.val().password;
          Fullbox.value = snapshot.val().fullname;
        } else {
          alert("No data found");
        }
      })
      .catch((error) => {
        alert("Unsuccessful. Error: " + error);
      });
  }
  
  function GetAllData() {
    const dbref = ref(db, "UsersList");
  
    get(dbref)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const keys = Object.keys(data);
          const tableBody = document.getElementById("table-body");
  
          // Clear existing table rows
          tableBody.innerHTML = "";
  
          // Loop through the data and create table rows
          keys.forEach((key) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const priceCell = document.createElement("td");
            const descCell = document.createElement("td");
            const firstCell = document.createElement("td");
  
            nameCell.textContent = data[key].username;
            priceCell.textContent = data[key].email;
            descCell.textContent = data[key].password;
            firstCell.textContent = data[key].fullname;
  
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(descCell);
            row.appendChild(firstCell)
            tableBody.appendChild(row);
          });
        } else {
          alert("No data found");
        }
      })
      .catch((error) => {
        alert("Unsuccessful. Error: " + error);
      });
  }

  updBtn.addEventListener('click', UpdateData);
  delBtn.addEventListener('click', DeleteData);
  selBtn.addEventListener('click', SelectData);
  getTbl.addEventListener('click', GetAllData);
  GetAllData();