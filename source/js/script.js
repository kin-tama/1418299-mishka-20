var popup = document.querySelector(".pop-up");
var buy = document.querySelector(".buy");

popup.classList.add("hide");
buy.addEventListener("click", function (evt) {
popup.classList.remove("hide")
popup.classList.add("pop-up__js")
});
