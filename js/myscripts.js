function toggle(name) {
  let w = document.getElementById(name);
  if (w.style.display == "none") {
    w.style.display = "block";
  } else {
    w.style.display = "none";
    // w.addClass("opacity");
    //='none';
  }
}
