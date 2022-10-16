const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup-profile");
const popupContent = document.querySelector(".popup__container");
const closeProfilePopup = document.querySelector(".cross");
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
function closePopup() {
    popup.classList.remove("popup_active");
}
closeProfilePopup.addEventListener('click', closePopup);


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
    { name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' },
    { name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' },
    { name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' },
    { name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' },
    { name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' }
]
const openImagePopup = document.querySelector(".profile__add-btn");
const closeImagePopup = document.querySelector(".cross");
const elements = document.querySelector(".elements");
const elementsTemplate = document.querySelector("#elements-template").content;
const element = elementsTemplate.querySelector(".element").cloneNode(true);
const elementName = element.querySelector(".element__name");
const elementImage = element.querySelector(".element__image");
const popupImage = document.querySelector(".popup-image");
const imageForm = document.querySelector(".popup__form_add_image");
const inputImageName = document.querySelector(".popup__text_type_image-name");
const inputImageSrc = document.querySelector(".popup__text_type_image-src");
const elementsList = document.querySelector('.elements__list');


//нажатие сердечка
const likeButton = element.querySelector('#element-template');
function like(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('element__like_active');
}
likeButton.addEventListener('click', like);


// открытие попапа для добавления картинки
function openImgPopup() {
    popupImage.classList.add("popup_active");
}
openImagePopup.addEventListener('click', openImgPopup);

function closePopup(event, popup) {
    inputImageName.textContent = elementName.value;
    inputImageSrc.textContent = elementImage.value;
    closeImagePopup.addEventListener('click', (event) => closePopup(event, popup))
}



// добавление картинки
// function addElement(link, name) {
//   elementImage.src = link;
//   elementName.textContent = name;
// };

// const uploadElements () {

// }




// //  удаление картинки
// function deleteElement() {
//    element.classList.remove("element__bin");
// }
// deleteElement.addEventListener('click', deleteElement);

// открыть картинку в полный экран
// const openFullscreenPopup = document.querySelector(".popup-fullscreen");
// function opеnImage() {
//     popupImage.classList.add("popup__fullscreen-image_active");
// }
// openImage.addEventListener('click', openImage;