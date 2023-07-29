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
const cartItems = [];

// Event listener to handle "Add to cart" button click
document.addEventListener("click", function (event) {
  if (event.target && event.target.id === "Insbtn") {
    const cardLink = event.target.parentNode;
    const name = cardLink.querySelector(".detail-box h6").textContent.trim();
    const price = cardLink.querySelector(".detail-box span").textContent.trim().slice(1);
    const item = { Name: name, Price: parseFloat(price) };
    addToCart(item);
    updateCartUI();
  }
});
// Helper function to generate random data for the cart item
function generateRandomData() {
  const randomGB = Math.floor(Math.random() * 256) + 1;
  const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return {
    GB: randomGB,
    Color: randomColor,
  };
}

// Function to add an item to the cart
function addToCart(item) {
  const randomData = generateRandomData();
  const cartItem = {
    Name: item.Name,
    Price: item.Price,
    GB: randomData.GB,
    Color: randomData.Color,
  };
  cartItems.push(cartItem);
  console.log("Added to cart:", cartItem);
  updateCartUI();
}
function getRandomImageIndex() {
  // Generate a random number between 1 and 6
  return Math.floor(Math.random() * 6) + 1;
}
// Function to update the shopping cart UI
function updateCartUI() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  cartItems.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.classList.add("d-flex", "justify-content-between", "align-items-center", "mt-3", "p-2", "items", "rounded");

    const itemContent = document.createElement("div");
    itemContent.classList.add("d-flex", "flex-row");
    itemContent.style.width = "500px";
    itemContent.style.padding = "10px";
    itemContent.style.alignItems = "center";

    const itemImage = document.createElement("img");
    const imageIndex = getRandomImageIndex();
    itemImage.src = `/images/w${imageIndex}.png`;
    itemImage.classList.add("rounded");
    itemImage.width = 40;
    itemImage.style.marginRight = "50px"; // Add left margin of 50px

    const itemName = document.createElement("span");
    itemName.classList.add("font-weight-bold", "d-block");
    itemName.textContent = item.Name;

    const itemSpec = document.createElement("span");
    itemSpec.classList.add("spec");
    itemSpec.textContent = `${",‎ "} ${item.GB}GB, ${item.Color}`;


    itemContent.appendChild(itemImage);
    itemContent.appendChild(itemName);
    itemContent.appendChild(itemSpec);

    listItem.appendChild(itemContent);
    cartList.appendChild(listItem);
  });
}
function calculateTotalPrice() {
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.Price;
  });
  return totalPrice;
}

function updateCartSummary() {
  const itemCountElement = document.getElementById("itemCount");
  const totalValueElement = document.getElementById("totalValue");
  const totalPriceElement = document.getElementById("totalPrice");

  const itemCount = cartItems.length;
  const totalPrice = calculateTotalPrice();

  itemCountElement.textContent = itemCount;
  totalValueElement.textContent = totalPrice.toFixed(2);
  totalPriceElement.textContent = (totalPrice + 5).toFixed(2);
}
function toggleCart() {
  const cartOverlay = document.querySelector(".cart-overlay");
  cartOverlay.style.display = cartOverlay.style.display === "none" ? "block" : "none";

  if (cartOverlay.style.display === "block") {
    updateCartUI();
    updateCartSummary();
  }
}


