const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__container");
const closeProfileButton = document.querySelector(".popup__cross-icon");
const form = document.querySelector(".popup__text");
const nameInput = document.querySelector(".popup__text_name");
const infoInput = document.querySelector(".popup__text_about");
const func = () => 1;

console.log(func());

openProfilePopup.addEventListener("click", function(){
    popup.classList.add("popup_active");
});

closeProfileButton.addEventListener("click", (event) => {
    if (!popupContent.contains(event.target) || event.target === closeProfileButton) {
        popup.classList.remove("popup_active");
    }
});

form.addEventListener("submit", () => {
   form.querySelector(".form__text")
});