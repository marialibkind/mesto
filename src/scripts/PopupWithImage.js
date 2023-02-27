import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImageFull = this._popup.querySelector(".popup__image");
    this._popupNameFull = this._popup.querySelector(".popup__name");
  }

  open({ link, name }) {
    super.open();
    this._popupImageFull.src = link;
    this._popupImageFull.alt = name;
    this._popupNameFull.textContent = name;
  }
}
