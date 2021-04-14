// Leave this here! 
// Show the form
const modal = document.querySelector("#modal")
document.querySelector("#make-bake-button").addEventListener("click", () => {
  modal.style.display = "block"
})
// Hide the form
modal.addEventListener("click", e => {
  // e.preventDefault()
  if (e.target.dataset.action === "close") {
    modal.style.display = "none"
  }
})