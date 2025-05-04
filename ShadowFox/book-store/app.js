document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("book-list");
  
    books.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col-6 col-sm-4 col-md-3 col-lg-2 mb-3";
  
      col.innerHTML = `
        <div class="card w-100 h-100">
          <img src="assests/${book.image}" class="card-img-top" alt="${book.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text text-muted">${book.author}</p>
             <p class="card-text twxt-muted">${book.genre}</p>
            <p class="card-text fw-bold">₹${book.price}</p>
            
            <div class="mt-auto">
              <button class="btn text-light w-100 mb-2" onclick="addToCart(${book.id})"><i class="bi bi-cart4"></i> Add to Cart</button>
              <button class="btn  text-light w-100" onclick="addToWishlist(${book.id})">
              <i class="bi bi-heart"></i>  Wishlist</button>
            </div>
          </div>
        </div>
      `;
      bookList.appendChild(col);
    });   

  });
  
  function addToCart(id) {
    const selectedBook = books.find(book => book.id === id);
    if (!selectedBook) return;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = cart.find(item => item.id === id);
    if (!alreadyInCart) {
      cart.push(selectedBook); 
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${selectedBook.title} added to cart!`);
    } else {
      alert(`${selectedBook.title} is already in your cart.`);
    }
  }

  function addToWishlist(bookId) {
    bookId = Number(bookId); 
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.includes(bookId)) {
      wishlist.push(bookId);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Book added to wishlist ❤️");
    } else {
      alert("Already in wishlist!");
    }
  }
  function addToWishlist(id) {
    const selectedBook = books.find(book => book.id === id);
    if (!selectedBook) return;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = cart.find(item => item.id === id);
    if (!alreadyInCart) {
      cart.push(selectedBook); 
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${selectedBook.title} added to cart!`);
    } else {
      alert(`${selectedBook.title} is already in your cart.`);
    }
  }


  document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
  
    if (isLoggedIn) {
      loginBtn.classList.add("d-none");
      logoutBtn.classList.remove("d-none");
    }
  
    window.logout = function () {
      localStorage.removeItem("isLoggedIn");
      location.reload();
      welcomeMsg.textContent = `Welcome reader, discover your next favorite book!`;
    };
  });
  



  