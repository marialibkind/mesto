const cheсkInputValidity = (inputElement, errorElement, invalidInputClass) => {
    if (inputElement.validity.valid) {
        hideInputError(inputElement, errorElement, invalidInputClass);
    }
    else {
        showInputError(inputElement, errorElement, invalidInputClass);
    }
}

const showInputError = (inputElement, errorElement, invalidInputClass) => {
    inputElement.classList.add(invalidInputClass);
    errorElement.textContent = inputElement.validationMessage;
}

const hideInputError = (inputElement, errorElement, invalidInputClass) => {
    inputElement.classList.remove(invalidInputClass);
    errorElement.textContent = "";
}

const disableButton = (buttonElement, disabledButtonClass) => {
    console.log(disabledButtonClass);
    buttonElement.classList.add(disabledButtonClass);
    buttonElement.disabled = true;
}

const enableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.classList.remove(disabledButtonClass);
    buttonElement.disabled = false;
}

const handleFormSubmit = (evt) => {
    evt.preventDefault();
}

const hasInvalidInput = (inputs) => {
    return inputs.some((input) => !input.validity.valid)
}

const toggleButtonState = (config, inputs, submitButton) => {
    console.log(config)
    if (hasInvalidInput(inputs)) {
        disableButton(submitButton, config.inactiveButtonClass)
    }
    else {
        enableButton(submitButton, config.inactiveButtonClass)
    }
}

const handleFormInput = (evt, form, invalidInputClass, formSubmitButtonElement, config, inputs) => {
    const inputElement = evt.target;
    const errorElement = form.querySelector(`.input-error-${inputElement.name}`);
    cheсkInputValidity(inputElement, errorElement, invalidInputClass);
    toggleButtonState(config, inputs, formSubmitButtonElement);
}

const enableValidation = (config) => {
    const formSelector = config.formSelector;
    const inputSelector = config.inputSelector;
    const buttonSelector = config.submitButtonSelector;

    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((form) => {
        form.addEventListener("submit", handleFormSubmit)

        const inputList = Array.from(form.querySelectorAll(inputSelector));
        const submitButton = form.querySelectorAll(buttonSelector);
        inputList.forEach((input) => {
            input.addEventListener("input", (evt) => {
                handleFormInput(evt, form, config.inputErrorClass, submitButton, config, inputList);
              });
        });
    });
}
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: '.popup__error_visible'
});