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
  
    cards.forEach((card) => {
      const cardName = card.querySelector(".detail-box h6").textContent.toLowerCase();
      if (cardName.includes(searchInput)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  // Shopping Cart Array to store cart items
  function toggleCart() {
    const cartOverlay = document.querySelector(".cart-overlay");
    cartOverlay.style.display = cartOverlay.style.display === "none" ? "block" : "none";
  }
  