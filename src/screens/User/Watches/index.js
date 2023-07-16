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
  
  // Define the GetAllData function
  function GetAllData() {
    const dbRef = ref(db, "Products");
  
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray = Object.values(data);
          console.log("Data from Realtime Database:");
          console.log(dataArray);
        } else {
          console.log("No data found");
        }
      })
      .catch((error) => {
        console.log("Unsuccessful. Error: " + error);
      });
  }
  
  // Call the GetAllData function
  GetAllData();