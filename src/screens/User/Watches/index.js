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

function displayDivCards(dataArray) {
  const rowContainer = document.querySelector('.row');
  const totalImages = 6; // Total number of images
  const startingIndex = 2; // Starting image index

  dataArray.forEach((item, index) => {
    const divCol = document.createElement('div');
    divCol.classList.add('col-sm-6', 'col-xl-3');

    const divBox = document.createElement('div');
    divBox.classList.add('box');

    const cardLink = document.createElement('a');
    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');
    const img = document.createElement('img');
    const imageIndex = ((index + startingIndex - 2) % totalImages) + 1; // Calculate the image index based on the card index
    img.src = `/images/w${imageIndex}.png`;
    img.alt = '';

    imgBox.appendChild(img);

    const detailBox = document.createElement('div');
    detailBox.classList.add('detail-box');
    const nameHeading = document.createElement('h6');
    nameHeading.textContent = item.Name; // Assuming the name property exists in the data

    const priceHeading = document.createElement('h6');
    priceHeading.textContent = 'Price: ';

    const priceSpan = document.createElement('span');
    priceSpan.textContent = '$' + item.Price; // Assuming the price property exists in the data

    priceHeading.appendChild(priceSpan);
    detailBox.appendChild(nameHeading);
    detailBox.appendChild(priceHeading);

    const newSpan = document.createElement('div');
    newSpan.textContent = 'New';
    newSpan.classList.add('new');

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to cart';
    addToCartButton.classList.add('button1');
    addToCartButton.id = 'Insbtn';

    cardLink.appendChild(imgBox);
    cardLink.appendChild(detailBox);
    cardLink.appendChild(newSpan);
    cardLink.appendChild(addToCartButton);

    divBox.appendChild(cardLink);
    divCol.appendChild(divBox);
    rowContainer.appendChild(divCol);
  });
}

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
        displayDivCards(dataArray);
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


