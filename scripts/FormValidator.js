export class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._formSelector = this._validationConfig.formSelector;
    this._inputSelector = this._validationConfig.inputSelector;
    this._buttonSelector = this._validationConfig.submitButtonSelector;
    this._inputList = Array.from(
        this._formElement.querySelectorAll(this._inputSelector)
    );
    this._inputListError = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputErrors));
  }
  enableValidation = () => {
    this._formElement.addEventListener("submit", this._handleFormSubmit);
    this._submitButton = this._formElement.querySelector(this._buttonSelector);
    this._inputList.forEach((input) => {
      input.addEventListener("input", (evt) => {
        this._handleFormInput(
          evt,
          this._formElement,
          this._validationConfig.inputErrorClass,
          this._submitButton,
          this._inputList
        );
      });
    });
    this._toggleButtonState(this._inputList, this._submitButton);
    this._formElement.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButtonState(this._inputList, this._submitButton);
      }, 0);
    });
  };

  _handleFormSubmit = (evt) => {
    evt.preventDefault();
  };

  _disableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.classList.add(disabledButtonClass);
    buttonElement.disabled = true;
  };

  _enableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.classList.remove(disabledButtonClass);
    buttonElement.disabled = false;
  };
  _hasInvalidInput = (inputs) => {
    return inputs.some((input) => !input.validity.valid);
  };

  _toggleButtonState = (inputs, submitButton) => {
    if (this._hasInvalidInput(inputs)) {
      this._disableButton(
        submitButton,
        this._validationConfig.inactiveButtonClass
      );
    } else {
      this._enableButton(
        submitButton,
        this._validationConfig.inactiveButtonClass
      );
    }
  };
  _checkInputValidity = (inputElement, errorElement, invalidInputClass) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement, errorElement, invalidInputClass);
    } else {
      this._showInputError(inputElement, errorElement, invalidInputClass);
    }
  };

  _showInputError = (inputElement, errorElement, invalidInputClass) => {
    inputElement.classList.add(invalidInputClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  _hideInputError = (inputElement, errorElement, invalidInputClass) => {
    inputElement.classList.remove(invalidInputClass);
    errorElement.textContent = "";
  };

  _handleFormInput = (
    evt,
    form,
    invalidInputClass,
    formSubmitButtonElement,
    inputs
  ) => {
    const inputElement = evt.target;
    const errorElement = form.querySelector(
      `.input-error-${inputElement.name}`
    );
    this._checkInputValidity(inputElement, errorElement, invalidInputClass);
    this._toggleButtonState(inputs, formSubmitButtonElement);
  };

  clearForm() {
    this._inputList.forEach((input) => {
      input.classList.remove(this._validationConfig.inputErrorClass);
    })

    this._inputListError.forEach((span) => {
      span.textContent = ''
    })
  }
}
