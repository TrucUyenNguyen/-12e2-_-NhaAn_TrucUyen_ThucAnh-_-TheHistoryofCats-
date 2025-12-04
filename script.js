const topButton = document.createElement("button");
topButton.innerText = "▲ Top";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 14px";
topButton.style.border = "none";
topButton.style.borderRadius = "6px";
topButton.style.background = "#f8b6c1";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 300 ? "block" : "none";
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
console.log("JS loaded!");
