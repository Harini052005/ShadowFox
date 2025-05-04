function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const error = document.getElementById("login-error");

  // Get stored user from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Validate login
  if (storedUser && email === storedUser.email && password === storedUser.password) {
    // Set login status and store name for welcome message
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", storedUser.name);

    // Redirect to home page
    window.location.href = "index.html";
  } else {
    error.classList.remove("d-none");
  }
}

// Optional: Logout logic (you can use this in app.js too)
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedInUser");
  location.reload();
  
}

 