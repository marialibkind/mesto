import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator";
const initialCards = [
    { name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' },
    { name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' },
    { name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' },
    { name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' },
    { name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' },
    { name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' }
]

const openProfilePopupButton = document.querySelector(".profile__edit-btn");
const popupProfile = document.querySelector(".popup-profile");
const closeProfilePopupButton = document.querySelector(".cross");
const formProfile = document.querySelector(".form-profile");
const nameInput = document.querySelector(".popup__text_type_name");
const infoInput = document.querySelector(".popup__text_type_about");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__info");

  
// картинка попап на весь экран
const fullPopup = document.querySelector(".popup-fullscreen");

// открытие любого попапа
function openPopup(popup) {
    popup.classList.add("popup_active");
    document.addEventListener("keydown", handleKeyPress)
}

// закрытие любого попапа
function closePopup(popup) {
    popup.classList.remove("popup_active");
    document.removeEventListener("keydown", handleKeyPress)
}

const overleyClosePopups = Array.from(document.querySelectorAll(".popup"));
overleyClosePopups.forEach((overley) => {
  overley.addEventListener("click", (evt) => {
    if (evt.target.classList.contains('popup_active')) {
      closePopup(evt.target);
    }
  });
});              

// закрытие картинки на весь экран
const closeFullPopupButton = document.querySelector(".cross-full");
closeFullPopupButton.addEventListener('click', () => closePopup(fullPopup));


// открытие попапа для изменения профиля

openProfilePopupButton.addEventListener('click', () => {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
});

// закрытие попапа для изменения профиля
closeProfilePopupButton.addEventListener('click', () => closePopup(popupProfile));


// сохранение информации при редактировании профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;

    closePopup(popupProfile);
}
formProfile.addEventListener('submit', handleProfileFormSubmit);

const openImagePopupButton = document.querySelector(".profile__add-btn");
const closeImagePopupButton = document.querySelector(".cross-image");
const elementTemplate = document.querySelector("#element-template").content;
const popupImage = document.querySelector(".popup-image");
const imageForm = document.querySelector(".form-add");
const imageNameInput = document.querySelector(".popup__text_type_image-name");
const imageSrcInput = document.querySelector(".popup__text_type_image-src");
const elementsList = document.querySelector('.elements__list');
const popupImageFull = fullPopup.querySelector(".popup__image");
const popupNameFull = fullPopup.querySelector(".popup__name");

// открытие попапа для добавления картинки
openImagePopupButton.addEventListener('click', () => openPopup(popupImage));


// закрытие попапа для добавления картинки
closeImagePopupButton.addEventListener('click', () => closePopup(popupImage));

initialCards.forEach((card) => {
    renderCard(createCard(card.link, card.name));
})


//  сохранение информации
function handleSubmitImage(evt) {
    evt.preventDefault();
    const imageName = imageNameInput.value;
    const imageLink = imageSrcInput.value;
    renderCard(createCard(imageLink, imageName));
    imageForm.reset();
    closePopup(popupImage);
}
imageForm.addEventListener('submit', handleSubmitImage);

function handleKeyPress (evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_active")
        console.log(openedPopup)
        closePopup(openedPopup)
    }
}

