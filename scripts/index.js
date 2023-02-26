import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig, initialCards } from "../variables/const.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import {
  formProfile,
  imageForm,
  openImagePopupButton,
  infoInput,
  nameInput,
  openProfilePopupButton,
} from "../variables/elements.js";

//ЭКЗЕМПЛЯРЫ КЛАССОВ
const popupImage = new PopupWithImage(".popup-fullscreen");

const popupCard = new PopupWithForm(handleSubmitCard, ".popup-image");
popupCard.setEventListeners();

const popupUser = new PopupWithForm(handleProfileFormSubmit, ".popup-profile");
popupUser.setEventListeners();

const userInfo = new UserInfo({
  name: ".profile__name",
  info: ".profile__info",
});

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const element = createCard(cardItem);
      cardsSection.addItem(element);
    },
  },
  ".elements__list"
);
cardsSection.renderItems();

//КОЛБЭК ФУНКЦИИ
function handleSubmitCard(value) {
  const newNewCard = createCard({
    name: value.enterName,
    link: value.enterInfo,
  });
  cardsSection.addItem(newNewCard);

  popupCard.close();
}

function handleProfileFormSubmit(value) {
  userInfo.setUserInfo(value.enterName, value.enterInfo);
  popupUser.close();
}

function openImagePopup(name, link) {
  popupImage.open({ link, name });
}

//ФУНКЦИИ
function createCard(element) {
  const newCard = new Card(element, "#element-template", openImagePopup);
  return newCard.createCard();
}

//СЛУШАТЕЛИ
openImagePopupButton.addEventListener("click", () => {

  popupImageValidation.clearForm();
  popupCard.open();

});

openProfilePopupButton.addEventListener("click", () => {

  popupProfileValidation.clearForm();
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  infoInput.value = info;

  popupUser.open();
});

//ВАЛИДАЦИИ
const popupImageValidation = new FormValidator(validationConfig, imageForm);
const popupProfileValidation = new FormValidator(validationConfig, formProfile);

popupImageValidation.enableValidation();
popupProfileValidation.enableValidation();
