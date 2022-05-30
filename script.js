function togglediv(id) {
  document.querySelectorAll(".TableBody").forEach(function(div) {
    if (div.id == id) {
      div.style.display = div.style.display == "none" ? "block" : "none";
    } else {
      div.style.display = "none";
    }
  })
}