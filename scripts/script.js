const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__container");
const closeProfileButton = document.querySelector(".popup__cross-icon");
const form = document.querySelector(".popup__text");
const nameInput = document.querySelector(".popup__text-name");
const infoInput = document.querySelector(".popup__text-about");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__info");
const func = () => 1;

console.log(func());

openProfilePopup.addEventListener("click", function () {
    popup.classList.add("popup_active");
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
});

closeProfileButton.addEventListener("click", (event) => {
    if (!popupContent.contains(event.target) || event.target === closeProfileButton) {
        popup.classList.remove("popup_active");
    }
});


function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;

    popup.classList.remove("popup_active");
}
formElement.addEventListener('submit', formSubmitHandler); 