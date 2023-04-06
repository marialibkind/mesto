import { Popup } from "./Popup.js";
export class PopupWithDelete extends Popup {
  constructor(deleteCard, selector) {
    super(selector);
    this._form = this._popup.querySelector(".popup__form");
    // this._submitForm = this._submitForm.bind(this);
    this._delete = this._delete.bind(this);
    this._deleteCard = deleteCard;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  _delete(evt) {
    evt.preventDefault();
    this._deleteCard(this._card);
    // console.log(this._card);
  }

  setEventListeners() {
    this._form.addEventListener("submit", this._delete);
    super.setEventListeners();
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener("submit", this._delete);
  }
}
