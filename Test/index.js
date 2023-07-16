// Define the function to display data
function displayData(dataArray) {
  const container = document.querySelector(".container"); // Assuming the container has the class "container"

  // Loop through the data array
  dataArray.forEach((item) => {
    // Create the elements for the data
    const divCard = document.createElement("div");
    divCard.className = "col-sm-6 col-xl-3";

    const box = document.createElement("div");
    box.className = "box";

    const anchor = document.createElement("a");
    anchor.href = "";

    const imgBox = document.createElement("div");
    imgBox.className = "img-box";

    const img = document.createElement("img");
    img.src = "/images/w6.png";
    img.alt = "";

    const detailBox = document.createElement("div");
    detailBox.className = "detail-box";

    const nameHeading = document.createElement("h6");
    nameHeading.textContent = item.name;

    const priceHeading = document.createElement("h6");
    priceHeading.textContent = "Price:";

    const priceSpan = document.createElement("span");
    priceSpan.textContent = item.price;

    // Append the elements to their respective parents
    imgBox.appendChild(img);

    detailBox.appendChild(nameHeading);
    priceHeading.appendChild(priceSpan);
    detailBox.appendChild(priceHeading);

    anchor.appendChild(imgBox);
    anchor.appendChild(detailBox);

    box.appendChild(anchor);

    divCard.appendChild(box);

    // Append the div card to the container
    container.appendChild(divCard);
  });
}

// Modify the GetAllData function to display data
function GetAllData() {
  const dbRef = ref(db, "Products");

  get(dbRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const dataArray = Object.values(data);

        // Call the displayData function to display the data
        displayData(dataArray);
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
