import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(handleSubmit, selector) {
    super(selector);
    this._handleSubmit = handleSubmit;
    this._inputList = this._popup.querySelectorAll(".popup__text");
    this._form = this._popup.querySelector(".popup__form");
    this._submitForm = this._submitForm.bind(this);
    this._submitButton = this._form.querySelector(".popup__submit-btn")
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _submitForm(evt) {
    evt.preventDefault();
    this._handleSubmit(this._getInputValues(), this._submitButton);
  }

  setEventListeners() {
    this._form.addEventListener("submit", this._submitForm);
    super.setEventListeners();
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener("submit", this._submitForm);
  }
  close() {
    this._form.reset();
    super.close();
  }
}
