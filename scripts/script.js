const POPUP_ACTIVE_CLASS = document.querySelector(".popup_active");

const openProfileBtn = document.querySelector(".profile__edit-btn");
const profile = document.querySelector(".popup");
const profileContent = document.querySelector(".popup__content");
const profileCloseButton = document.querySelector(".popup__cross-icon");
const form = document.querySelector(".popup__text");
const nameInput = document.querySelector(".popup__text_name");
const nameInput = document.querySelector(".popup__text_about");

const func = () => 1;

console.log(func());

openProfilePopup.addEventListener("click", function(){
    popup.classList.add(POPUP_ACTIVE_CLASS);
});

popup.addEventListener("submit", (event) => {
    if (!popupContent.contains(event.target) || event.target === profileCloseButton) {
        popup.classList.remove(POPUP_ACTIVE_CLASS);
    }
});

form.addEventListener("submit", () => {
    form.querySelector(".form__text")
});