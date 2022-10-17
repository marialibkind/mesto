const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup-profile");
const popupContent = document.querySelector(".popup__container");
const closeProfilePopup = document.querySelector(".cross");
const form = document.querySelector(".sumbitProfile");
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
function closePopup(popup) {
    popup.classList.remove("popup_active");
}
closeProfilePopup.addEventListener('click', closePopup);


// сохранение информации при редактировании профиля
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;

    closePopup(popup)
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
const closeImagePopup = document.querySelector(".cross-image");
const elements = document.querySelector(".elements");
const elementsTemplate = document.querySelector("#elements-template").content;
const popupImage = document.querySelector(".popup-image");
const imageForm = document.querySelector(".popup__form_add_image");
const inputImageName = document.querySelector(".popup__text_type_image-name");
const inputImageSrc = document.querySelector(".popup__text_type_image-src");
const elementsList = document.querySelector('.elements__list');

// открытие попапа для добавления картинки
function openImgPopup() {
    popupImage.classList.add("popup_active");
}
openImagePopup.addEventListener('click', openImgPopup);


// закрытие попапа для добавления картинки
function closeImgPopup() {
    closePopup(popupImage)
}
closeImagePopup.addEventListener('click', closeImgPopup);

// создание картинки
function createCard(link, name) {
    const element = elementsTemplate.querySelector(".element").cloneNode(true);
    const elementImage = element.querySelector(".element__image");
    const elementName = element.querySelector(".element__name");
    elementImage.src = link;
    elementName.textContent = name;
    elementImage.alt = name;
    element.querySelector(".element__like").addEventListener('click', function (evt) {
        const likeButton = evt.target;
        likeButton.classList.toggle("element__like_active");
    })
    //   удаление картинки
    element.querySelector(".element__bin").addEventListener('click', function (evt) {
        element.remove();
    })
    // // открыть картинку на весь экран
    const fullPopup = document.querySelector(".popup-fullscreen");
    function openFullPopup() {
        fullPopup.classList.add("popup_active");
    }
    elementImage.addEventListener('click', openFullPopup);
    const fullName = document.querySelector(".full-name");
    popupImage.addEventListener('click', () => {
        fullPopup.setAttribute('src', link);
        fullPopup.setAttribute('alt', name);
        elementImage.textContent = placeName;
    });
    return element;
};

// добавление картинки
function renderCard(card) {
    elementsList.prepend(card);
}

initialCards.forEach((card) => {
    renderCard(createCard(card.link, card.name));
})

//  сохранение информации
function imageSubmitHandler(evt) {
    evt.preventDefault();
    const imageName = inputImageName.value;
    const imageLink = inputImageSrc.value;
    if (imageLink || imageLink) {
        renderCard(createCard(imageLink, imageName))
    }
    closePopup(popupImage);

}
imageForm.addEventListener('submit', imageSubmitHandler);
closeImagePopup.addEventListener('click', imageSubmitHandler);



//  закрытие картинки на весь экран
// const closeFullPopup = document.querySelector(".cross-full");
// function closeFullPopup() {
//     closePopup(fullPopup)
// }
// closeFullPopup.addEventListener('click', closeFullPopup);