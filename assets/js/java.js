function toggleOptions() {
    var options = document.getElementById("options");
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
  }
  

  
  document.addEventListener("click", function(event) {
    var options = document.getElementById("options");
    var menu = document.querySelector(".menu");
    var isClickInsideMenu = menu.contains(event.target);
    if (!isClickInsideMenu) {
        options.style.display = "none";
    }
});

function toggleOptions() {
    var options = document.getElementById("options");
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
}
