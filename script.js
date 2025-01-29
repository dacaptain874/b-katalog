var data = [
  { id: 1, title: "Card One", description: "This is the first card.", image: "image1.jpg" },
  { id: 2, title: "Card Two", description: "This is the second card.", image: "image2.jpg" }
];

document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("cards-container");

  if (!container) {
    console.error("Element with ID 'cards-container' not found.");
    return;
  }

  data.forEach(function (item) {
      var card = document.createElement("div");
      card.className = "card"; // Use className instead of classList.add

      card.innerHTML =
          '<img src="' + item.image + '" alt="' + item.title + '">' +
          '<h3>' + item.title + '</h3>' +
          '<p>' + item.description + '</p>';

      container.appendChild(card);
  });
});
