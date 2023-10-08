document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // You can add your authentication logic here
  if (username === "Tzj5NYwjZrJsYPpuxUJjVnJOAB7WPENS" && password === "ki39EwyTe7nemWvtU8LEaXjpICjaL9pt") {
    document.getElementById("message").textContent = "We're sorry, but we cannot process your request right now.";
  }
  else {
    document.getElementById("message").textContent = "We're sorry, but we cannot process your request right now.";
  }
});
