document.addEventListener("DOMContentLoaded", function () {
  var bookItems = document.querySelectorAll(".book-item");
  var popup = document.querySelector(".book-details-popup");
  var popupContent = document.querySelector(".book-details-popup-content");

  // Event listener for each book item
  bookItems.forEach(function (bookItem) {
    bookItem.addEventListener("click", function () {
      var bookTitle = bookItem.querySelector("h2").textContent;
      var longDescription =
        bookItem.querySelector(".long-description").textContent;
      var bookCover = bookItem.querySelector("img").src;

      // Update the popup content with book details
      popupContent.innerHTML = `
          <img src="${bookCover}" alt="Book Cover">
          <h2>${bookTitle}</h2>
          <p>${longDescription}</p>
          <a id="purchase" href="#">Purchase</a>
        `;

      // Show the popup
      popup.style.display = "flex";
    });
  });

  // Close the popup when clicked outside the content area
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
