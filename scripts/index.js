const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__container");
const closeProfilePopup = document.querySelector(".popup__cross-icon");
const form = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_type_name");
const infoInput = document.querySelector(".popup__text_type_about");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__info");



function openProfile() {
    popup.classList.add("popup_active");
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
}
openProfilePopup.addEventListener('click', openProfile);

function closeProfile() {
    popup.classList.remove("popup_active");
}
closeProfilePopup.addEventListener('click', closeProfile);

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;

    closeProfile()
}
form.addEventListener('submit', formSubmitHandler); 
