const openProfilePopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__container");
const closeProfileButton = document.querySelector(".popup__cross-icon");
const form = document.querySelector(".popup__text");
const nameInput = document.querySelector(".popup__text_name");
const infoInput = ".popup__text_about";
const func = () => 1;

console.log(func());

openProfilePopup.addEventListener("click", function () {
    popup.classList.add("popup_active");
    nameInput.value = infoInput.textContent;
});

closeProfileButton.addEventListener("click", (event) => {
    if (!popupContent.contains(event.target) || event.target === closeProfileButton) {
        popup.classList.remove("popup_active");
    }
});

form.addEventListener("submit", () => {
    form.querySelector(".form__text")
});

// // Находим форму в DOM
// let formElement = // Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM
// let nameInput = // Воспользуйтесь инструментом .querySelector()
// let jobInput = // Воспользуйтесь инструментом .querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler); 