const data = [
  { id: 1, title: "Card One", description: "This is the first card.", image: "image1.jpg" },
  { id: 2, title: "Card Two", description: "This is the second card.", image: "image2.jpg" }
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cards-container");

  data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
      `;

      container.appendChild(card);
  });
});
