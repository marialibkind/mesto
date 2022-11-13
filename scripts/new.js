const showInputError = (errorElement, inputElement, errorMessage) => {
    inputElement.classList.add('popup__input_active');
    errorElement.classList.add('popup__input-error_active');
    errorElement.textContent = errorMessage;
}

const hideInputError = (errorElement, inputElement) => {
    inputElement.classList.remove('popup__input_active');
    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active');
}

const handleFormInput = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
        showInputError(errorElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(errorElement, inputElement);
    };
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    const buttonElement = formElement.querySelector('.popup__save');
    toggleButtonElement(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            handleFormInput(formElement, inputElement);
            toggleButtonElement(inputList, buttonElement);
          });
    });
  };

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(document.querySelectorAll('.popup__form'));
        fieldsetList.forEach((fieldSet, inputElement) => {
            setEventListeners(fieldSet, inputElement);
    });
});
};

 enableValidation();

function hasValidInput(inputsElement) {
    return inputsElement.some(function(inputElement) {
        return !inputElement.validity.valid;
    });
}

function toggleButtonElement(inputsElement, buttonElement) {
    if (hasValidInput(inputsElement)) {
        buttonElement.classList.add('popup__save_disable');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('popup__save_disable');
        buttonElement.disabled = false;
    };
}