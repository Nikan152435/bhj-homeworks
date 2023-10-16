const popupWindow = document.getElementById("subscribe-modal");
const closeButton = document.querySelector(".modal__close");

window.addEventListener("load", function() {
  if(!getCookie("closed")) {
    popupWindow.classList.add("modal_active");
  }
});

closeButton.addEventListener("click", function() {
    popupWindow.classList.remove("modal_active");
    document.cookie = "closed=true";
})

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift()
  }
}
