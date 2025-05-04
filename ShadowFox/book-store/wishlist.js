document.addEventListener("DOMContentLoaded", () => {
  const wishlistContainer = document.getElementById("wishlist-books");
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  wishlist.forEach(bookId => {
    const book = books.find(b => b.id === bookId);
    if (book) {
      const div = document.createElement("div");
      div.className = "card m-2 p-2";
      div.innerHTML = `
        <img src="assests/${book.image}" class="card-img-top" style="height: 200px; object-fit: cover;">
        <div class="card-body">
          <h5>${book.title}</h5>
          <p>${book.author}</p>
          <p>₹${book.price}</p>
        </div>
      `;
      wishlistContainer.appendChild(div);
    }
  });
});

function addToWishlist(title, price, image) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Check if the book already exists in the wishlist
  const bookExists = wishlist.some(book => book.title === title && book.price === price && book.image === image);

  if (bookExists) {
    alert("This book is already in your wishlist!");
  } else {
    wishlist.push({ title, price, image });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to wishlist!");
  }
}

  function removeFromWishlist(bookTitle) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter(book => book.title !== bookTitle);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    location.reload(); 
  }
  

  
