function toggleSearchBar() {
  const searchBar = document.getElementById("searchBar");
  if (searchBar.style.display === "none") {
    searchBar.style.display = "flex";
  } else {
    searchBar.style.display = "none";
  }
}
function searchCards() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".box");

  const matchedCards = [];

  cards.forEach((card) => {
    const cardName = card.querySelector(".detail-box h6").textContent.toLowerCase();
    if (cardName.includes(searchInput)) {
      matchedCards.push(card);
    }
  });

  // Hide all cards first
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Display matched cards from left to right
  matchedCards.forEach((card) => {
    card.style.display = "block";
  });
}
// Shopping Cart Array to store cart items
const cartItems = [];

function addToCart(item) {
  cartItems.push(item);
}
function calculateTotalPrice() {
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.Price;
  });
  return totalPrice;
}
// Event listener to handle "Add to cart" button click
document.addEventListener("click", function (event) {
  if (event.target && event.target.id === "Insbtn") {
    const cardLink = event.target.parentNode;
    const name = cardLink.querySelector(".detail-box h6").textContent.trim();
    const price = cardLink.querySelector(".detail-box span").textContent.trim().slice(1);
    const item = { Name: name, Price: parseFloat(price) };
    addToCart(item);
    updateCartUI();
    updateCartSummary();
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
function updateCartSummary() {
  const totalItems = cartItems.length;
  const totalValue = calculateTotalPrice();
  const totalPriceBeforeShipping = totalValue.toFixed(2);
  const totalPriceElement = document.getElementById("totalPriceValue");
  const totalPriceWithShippingElement = document.getElementById("totalPrice");

  // Display the total items and price before shipping in the HTML
  const totalItemsElement = document.querySelector(".d-flex.justify-content-between.mb-4 h5.text-uppercase");
  totalItemsElement.textContent = `Items ${totalItems}`;
  totalPriceElement.textContent = `€${totalPriceBeforeShipping}`;

  // Calculate the total price with shipping cost and display it
  const totalPriceWithShipping = (totalValue + 5).toFixed(2);
  totalPriceWithShippingElement.textContent = `€${totalPriceWithShipping}`;
}



function toggleCart() {
  const cartOverlay = document.querySelector(".cart-overlay");
  cartOverlay.style.display = cartOverlay.style.display === "none" ? "block" : "none";
}
