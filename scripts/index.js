const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__container");
const closeProfilePopup = document.querySelector(".popup__cross-icon");
const form = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_type_name");
const infoInput = document.querySelector(".popup__text_type_about");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__info");

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

const initialCards = [
    { name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' },
    { name: 'Челябинская область',link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' },
    { name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' },
    { name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' },
    { name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' },
    { name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' }
] 
const openImagePopup = document.querySelector(".profile__add-btn");
const elements =  document.querySelector(".elements");
const elementName = document.querySelector(".element__name");
const elementImage = document.querySelector(".element__image");
const elementsTemplate =  document.querySelector("#elements-template").content;
const popupImage =  document.querySelector(".popup__new-image");
const imageForm =  document.querySelector(".popup__form_add_image");
const inputImageName =  document.querySelector(".popup__text_type_image-name");
const inputImageSrc =  document.querySelector(".popup__text_type_image-src");
const elementsList = document.querySelector('.elements__list');


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


// открытие попапа для добавления картинки
function addImagePopup() {
    popupImage.classList.add("popup_active");
    inputImageName.value = elementName.textContent;
    inputImageSrc.value = elementImage.textContent;
}
openImagePopup.addEventListener('click', addImagePopup);


// добавление картинки
// function addNewElement(evt, initialPlace) {
//     const newElement = addElement(initialPlace);
//     placesList.prepend(newElement);
//     if (evt) {
//         evt.preventDefault();
//         closeProfilePopup(evt);
//     }
// };


// //  удаление картинки
// function deleteElement() {
//    element.classList.remove("element__bin");
// }
// deleteElement.addEventListener('click', deleteElement);



// открыть картинку в полный экран
// function opеnImage() {
//     popupImage.classList.add("popup__fullscreen-image_active");
// }
// openImage.addEventListener('click', openImage;