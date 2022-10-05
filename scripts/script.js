const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__container");
const closeProfileButton = document.querySelector(".popup__cross-icon");
const form = document.querySelector(".popup__text");
const nameInput = document.querySelector(".popup__text_name");
const infoInput = document.querySelector(".popup__text_about");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__info");
const func = () => 1;

console.log(func());

openProfilePopup.addEventListener("click", function () {
    popup.classList.add("popup_active");
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
});

closeProfileButton.addEventListener("click", (event) => {
    if (!popupContent.contains(event.target) || event.target === closeProfileButton) {
        popup.classList.remove("popup_active");
    }
});

form.addEventListener("submit", () => {
    form.querySelector(".popup__text")
});


// let formElement =  document.querySelector(".popup__text");
// let nameInput =  document.querySelector(".popup__text_name");
// let jobInput = document.querySelector(".popup__text_about");

//  function formSubmitHandler (evt) {
//     evt.preventDefault(); 
//      nameInput.value = formElement.textContent;
//      jobInput.value = formElement.textContent;
//      profileName = 
//      profileInfo = 
//  }
// formElement.addEventListener('submit', formSubmitHandler); 