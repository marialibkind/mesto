import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { validationConfig, initialCards } from "../variables/const.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import API from "../components/API.js";
import UserInfo from "../components/UserInfo.js";
import {
  formProfile,
  imageForm,
  openImagePopupButton,
  infoInput,
  nameInput,
  openProfilePopupButton,
  profileAvatarButton,
  profileAvatarImg,
  formAvatar

} from "../variables/elements.js";
import { PopupWithDelete } from "../components/PopupWithDelete.js";
import { changeButtontext } from "../variables/utils.js";

//ЭКЗЕМПЛЯРЫ КЛАССОВ
const popupImage = new PopupWithImage(".popup-fullscreen");

const popupCard = new PopupWithForm(handleSubmitCard, ".popup-image");
popupCard.setEventListeners();

const popupUser = new PopupWithForm(handleProfileFormSubmit, ".popup-profile");
popupUser.setEventListeners();

const popupDelete = new PopupWithDelete(deleteCard, ".popup-delete");
popupDelete.setEventListeners();

const popupAvatar = new PopupWithForm(handleAvatar, ".popup-avatar");
popupAvatar.setEventListeners();


const userInfo = new UserInfo({
  name: ".profile__name",
  info: ".profile__info",
  avatar: ".profile__avatar",
});

const cardsSection = new Section(
  (cardItem, userId) => {
    const element = createCard(cardItem, userId);
    cardsSection.addItem(element);
  },
  ".elements__list"
);


//КОЛБЭК ФУНКЦИИ
function handleSubmitCard(value) {
  const orig = button.textContent;
  changeButtontext(button, 'Сохранить...');
  api.addCard(value.enterName, value.enterInfo).then((card) => {
 
    const newNewCard = createCard(
      card
      , userInfo.id);
    cardsSection.addItem(newNewCard);
    popupCard.close();
  })
  .catch((error) => {
    console.error(error);
  }).finally(() => {
    changeButtontext(button, orig);
  })
}

function handleProfileFormSubmit(value, button) {
  const orig = button.textContent;
  changeButtontext(button, 'Сохранить...');
  api.setUserInfo(value.enterName, value.enterInfo).then((user) => {
    userInfo.setUserInfo(user.name, user.about);
    popupUser.close();

  }).catch((error) => {
    console.error(error);
  }).finally(() => {
    changeButtontext(button, orig)
  })
}

function handleAvatar(link, button){
  const orig = button.textContent;
  changeButtontext(button, 'Сохранить...');
api.setAvatar(link)
  .then((data) => {
  console.log(profileAvatarImg.src);
  profileAvatarImg.src = data.avatar;
  popupAvatar.close();
})
.catch((error) => {
  console.error(error);
}).finally(() => {
  changeButtontext(button, orig)
})
}

function openImagePopup(name, link) {
  popupImage.open({ link, name });
}

function deleteCard(card, cardId) {
  api.deleteCard(cardId).then(() => {
    card.remove();
    popupDelete.close();
  }).catch((error) => 
  console.error(error))
}




//ФУНКЦИИ
function createCard(element, userId) {
  const newCard = new Card(element, { owner: "#element-template-owner", other: "#element-template" }, openImagePopup, deleteCardButton, clickLike, userId);//setAvatarButton
  //console.log(newCard);
  return newCard.createCard();
}

function clickLike(cardId, card, ifLiked) {

  if (ifLiked) {
    api.deleteLike(cardId).then((res) => {
      card.updateLikes(res.likes.length)
    }).catch((error) => {
      console.error(error);
    })
  } else {
    api.addLike(cardId).then((res) => {
      card.updateLikes(res.likes.length)
    }).catch((error) => {
      console.error(error);
    })
  }

}

function deleteCardButton(card, cardId) {
  popupDelete.open(card, cardId);
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

console.log(userInfo.getUserInfo());

profileAvatarButton.addEventListener("click", () => {

  popupAvatarValidation.clearForm();
  popupAvatar.open();

});

//ВАЛИДАЦИИ

const popupImageValidation = new FormValidator(validationConfig, imageForm);
const popupProfileValidation = new FormValidator(validationConfig, formProfile);
const popupAvatarValidation = new FormValidator(validationConfig, formAvatar);

popupImageValidation.enableValidation();
popupProfileValidation.enableValidation();
popupAvatarValidation.enableValidation();


const api = new API({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: '3aab9cc7-eb92-4dff-8990-de77b74458f2',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserInfo(), api.getInitialCards()]).then((res) => {
  //console.log(res);
  const user = res[0];
  cardsSection.renderItems(res[1], user._id);
  userInfo.setUserInfo(user.name, user.about, user.avatar);
  userInfo.id = user._id;
})
