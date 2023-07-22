jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import {
    getDatabase,
    set,
    get,
    update,
    remove,
    ref,
    child,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCj9iGoIWDCxlNMaFQgc7Tr8HvtpVSQnKE",
    authDomain: "final-8225b.firebaseapp.com",
    databaseURL: "https://final-8225b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "final-8225b",
    storageBucket: "final-8225b.appspot.com",
    messagingSenderId: "391672046052",
    appId: "1:391672046052:web:03499c4edce5676c75a7f1",
    measurementId: "G-R50HQ2J550"
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
// INSERT DATA FUNCTION
function InsertData() {
    set(ref(db, "Products/" + namebox.value), {
        Name: namebox.value,
        Price: pricebox.value,
        Description: descbox.value
    })
        .then(() => {
            alert("Data stored successfully");
        })
        .catch((error) => {
            alert("Unsuccessful. Error: " + error);
        });
}

// UPDATE DATA FUNCTION
function UpdateData() {
    update(ref(db, "Products/" + namebox.value), {
        Name: namebox.value,
        Price: pricebox.value,
        Description: descbox.value
    })
        .then(() => {
            alert("Data updated successfully");
        })
        .catch((error) => {
            alert("Unsuccessful. Error: " + error);
        });
}

// DELETE DATA FUNCTION
function DeleteData() {
    remove(ref(db, "Products/" + namebox.value))
        .then(() => {
            alert("Data removed successfully");
        })
        .catch((error) => {
            alert("Unsuccessful. Error: " + error);
        });
}

function SelectData() {
    const dbref = ref(db);

    get(child(dbref, "Products/" + namebox.value))
        .then((snapshot) => {
            if (snapshot.exists()) {
                namebox.value = snapshot.val().Name;
                pricebox.value = snapshot.val().Price;
                descbox.value = snapshot.val().Description;
            } else {
                alert("No data found");
            }
        })
        .catch((error) => {
            alert("Unsuccessful. Error: " + error);
        });
}
function GetAllData() {
    const dbref = ref(db, "Products");

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

                    nameCell.textContent = data[key].Name;
                    priceCell.textContent = data[key].Price;
                    descCell.textContent = data[key].Description;

                    row.appendChild(nameCell);
                    row.appendChild(priceCell);
                    row.appendChild(descCell);
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

insBtn.addEventListener('click', InsertData);
updBtn.addEventListener('click', UpdateData);
delBtn.addEventListener('click', DeleteData);
selBtn.addEventListener('click', SelectData);
getTbl.addEventListener('click', GetAllData);
GetAllData()