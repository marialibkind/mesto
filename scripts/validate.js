{
    type: module
}
import class FormValidator {
    const validationConfig =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: '.popup__error_visible'
}

enableValidation(validationConfig);
}
