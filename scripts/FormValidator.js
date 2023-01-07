export const validationConfig =
{
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: '.popup__error_visible'
}

export class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._inputsList = formElement.querySelector(".form-profile");
    }
    enableValidation = () => {
        const formSelector = this._validationConfig.formSelector;
        const inputSelector = this._validationConfig.inputSelector;
        const buttonSelector = this._validationConfig.submitButtonSelector;

        const formList = Array.from(document.querySelectorAll(formSelector));
        formList.forEach((form) => {
            form.addEventListener("submit", this._handleFormSubmit)
            const inputList = Array.from(form.querySelectorAll(inputSelector));
            const submitButton = form.querySelector(buttonSelector);

            inputList.forEach((input) => {
                input.addEventListener("input", (evt) => {
                    this._handleFormInput(evt, form,  this._validationConfig.inputErrorClass, submitButton, inputList);
                });
            });
            this._toggleButtonState(inputList, submitButton);
            form.addEventListener('reset', () => {
                setTimeout(() => {
                    this._toggleButtonState(inputList, submitButton);
                }, 0);
            });

        });
    }
    _handleFormSubmit = (evt) => {
        evt.preventDefault();
    }

    _disableButton = (buttonElement, disabledButtonClass) => {
        buttonElement.classList.add(disabledButtonClass);
        buttonElement.disabled = true;
    }

    _enableButton = (buttonElement, disabledButtonClass) => {
        buttonElement.classList.remove(disabledButtonClass);
        buttonElement.disabled = false;
    }
    _hasInvalidInput = (inputs) => {
        return inputs.some((input) => !input.validity.valid)
    }

    _toggleButtonState = (inputs, submitButton) => {
        if (this._hasInvalidInput(inputs)) {
            this._disableButton(submitButton,  this._validationConfig.inactiveButtonClass)
        }
        else {
            this._enableButton(submitButton,  this._validationConfig.inactiveButtonClass)
        }
    }
    _checkInputValidity = (inputElement, errorElement, invalidInputClass) => {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement, errorElement, invalidInputClass);
        }
        else {
            this._showInputError(inputElement, errorElement, invalidInputClass);
        }
    }

    _showInputError = (inputElement, errorElement, invalidInputClass) => {
        inputElement.classList.add(invalidInputClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideInputError = (inputElement, errorElement, invalidInputClass) => {
        inputElement.classList.remove(invalidInputClass);
        errorElement.textContent = "";
    }

    _handleFormInput = (evt, form, invalidInputClass, formSubmitButtonElement, inputs) => {
        const inputElement = evt.target;
        const errorElement = form.querySelector(`.input-error-${inputElement.name}`);
        this._checkInputValidity(inputElement, errorElement, invalidInputClass);
        this._toggleButtonState(inputs, formSubmitButtonElement);
    }
}