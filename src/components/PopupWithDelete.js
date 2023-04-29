import { Popup } from "./Popup.js";
export class PopupWithDelete extends Popup {
  constructor(deleteCard, selector) {
    super(selector);
    this._form = this._popup.querySelector(".popup__form");
    this._delete = this._delete.bind(this);
    this._deleteCard = deleteCard;
  }

  open(card, cardId) {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }

  _delete(evt) {
    evt.preventDefault();
    this._deleteCard(this._card, this._cardId);
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
