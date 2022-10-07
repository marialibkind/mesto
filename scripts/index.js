const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__container");
const closeProfilePopup = document.querySelector(".popup__cross-icon");
const form = document.querySelector(".popup__text");
const nameInput = document.querySelector(".popup__text-name");
const infoInput = document.querySelector(".popup__text-about");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__info");
const saveProfilePopup = document.querySelector(".popup__submit-btn");


function openProfile() {
    popup.classList.add("popup_active");
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
}
openProfilePopup.addEventListener('click', openProfile);

function closeProfile() {
    popup.classList.remove("popup_active");
}
saveProfilePopup.addEventListener('click', closeProfile);

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;

    saveProfilePopup.addEventListener('click', closeProfile);
}
form.addEventListener('submit', formSubmitHandler); 