const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__container");
const closeProfilePopup = document.querySelector(".popup__cross-icon");
const form = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_type_name");
const infoInput = document.querySelector(".popup__text_type_about");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__info");
const addImage = document.querySelector(".profile__add-btn");

const element = document.querySelector(".element");

// открытие попапа для изменения профиля

function openProfile() {
    popup.classList.add("popup_active");
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
}
openProfilePopup.addEventListener('click', openProfile);

// закрытие попапа
function closeProfile() {
    popup.classList.remove("popup_active");
}
closeProfilePopup.addEventListener('click', closeProfile);

// сохранение информации при редактировании профиля
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;

    closeProfile()
}
form.addEventListener('submit', formSubmitHandler);

//нажатие сердечка

// function addLike() {
//     const elementTemplate = document.querySelector('#element-template').content;
//     const element = elementTemplate.querySelector('.element').cloneNode(true);
//     element.querySelector('.element__like').addEventListener('click', function (evt) {
//         evt.target.classList.toggle('.element__like_active');
//     });
// }

// let like = document.querySelector('element__like');
// like.addEventListener( 'click', () => 
// like.classList.toggle('element__like_active'))


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]
// открытие попапа для добавления картинки
function openProfile() {
    popup.classList.add("popup_active");
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
}
addImage.addEventListener('click', openProfile);

// добавление картинки
 function addimage(name, src) {
  imageElement.querySelector('.element__name').textContent = name;
  imageElement.querySelector('.element__image').textContent = src;
  element.append(imageElement);
 };


//  удаление картинки
function deleteElement() {
   element.classList.remove("element__bin");
}
deleteElement.addEventListener('click', deleteElement);