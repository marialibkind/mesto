import "./index.css";
import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { validationConfig, initialCards } from "./variables/const.js";
import { Section } from "./scripts/Section.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";
import {
  formProfile,
  imageForm,
  openImagePopupButton,
  infoInput,
  nameInput,
  openProfilePopupButton,
  sbmtDelete
} from "./variables/elements.js";
import { PopupWithDelete } from "./scripts/PopupWithDelete";

//ЭКЗЕМПЛЯРЫ КЛАССОВ
const popupImage = new PopupWithImage(".popup-fullscreen");

const popupCard = new PopupWithForm(handleSubmitCard, ".popup-image");
popupCard.setEventListeners();

const popupUser = new PopupWithForm(handleProfileFormSubmit, ".popup-profile");
popupUser.setEventListeners();

const popupDelete = new PopupWithDelete(deleteCard, ".popup-delete");
popupDelete.setEventListeners();

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

function deleteCard(card){
  card.remove();
  popupDelete.close();
  // вызывать API ПЕРЕДАТЬ НА СЕРВЕР И ПОТОМ ВЕРНУТЬ
  console.log(card);
}

//ФУНКЦИИ
function createCard(element) {
  const newCard = new Card(element, "#element-template", openImagePopup, deleteCardButton);
  return newCard.createCard();
}

function deleteCardButton(card) {
 console.log(card);
 popupDelete.open(card);
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



const api = new API({url: 'https://nomoreparties.co/v1/cohort-62' ,
headers: { autorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    `Content-Type` : 'application/json'}
});

)