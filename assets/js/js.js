function showMenu() {
  var menuBar = document.getElementById("menuBar");
  var overlay = document.getElementById("overlay");

  //   if (menuBar.style.display === "none" || menuBar.style.display === "") {
  //     menuBar.style.display = "flex"; // Show the menu
  //   } else {
  //     menuBar.style.display = "none"; // Hide the menu
  //   }

  menuBar.classList.toggle("active");

  overlay.classList.toggle("overlayStyle"); // Add or remove the overlay
}
