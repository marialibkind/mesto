validationConfig =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_type_error',
        errorClass: '.popup__error_visible'}
   export class FormValidator{
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._inputsList = formElement.document.querySelector(".form-profile");
    }
    enableValidation = (config) => {
        const formSelector = config.formSelector;
        const inputSelector = config.inputSelector;
        const buttonSelector = config.submitButtonSelector;
    
        const formList = Array.from(document.querySelectorAll(formSelector));
        formList.forEach((form) => {
            form.addEventListener("submit", handleFormSubmit)
    
            const inputList = Array.from(form.querySelectorAll(inputSelector));
            const submitButton = form.querySelector(buttonSelector);
            
            inputList.forEach((input) => {
                input.addEventListener("input", (evt) => {
                    handleFormInput(evt, form, config.inputErrorClass, submitButton, config, inputList);
                  });
            });
            toggleButtonState(config, inputList, submitButton);
            form.addEventListener('reset', () => {
                setTimeout(() => {
                    toggleButtonState(config, inputList, submitButton);
                }, 0);
            });
    
        });
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
        
       _toggleButtonState = (config, inputs, submitButton) => {
            if (hasInvalidInput(inputs)) {
                disableButton(submitButton, config.inactiveButtonClass)
            }
            else {
                enableButton(submitButton, config.inactiveButtonClass)
            }
        }
        _checkInputValidity = (inputElement, errorElement, invalidInputClass) => {
            if (inputElement.validity.valid) {
                hideInputError(inputElement, errorElement, invalidInputClass);
            }
            else {
                showInputError(inputElement, errorElement, invalidInputClass);
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
        
        _handleFormInput = (evt, form, invalidInputClass, formSubmitButtonElement, config, inputs) => {
            const inputElement = evt.target;
            const errorElement = form.querySelector(`.input-error-${inputElement.name}`);
            checkInputValidity(inputElement, errorElement, invalidInputClass);
            toggleButtonState(config, inputs, formSubmitButtonElement);
        }
    }
}