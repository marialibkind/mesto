import { popupImageFull, popupNameFull } from "./index.js";
export class PopupWithImage extends Popup {
    constructor() {
        super(selector);
    }
    _openPopup() {
        popupImageFull.setAttribute('src', this._link);
        popupImageFull.setAttribute('alt', this._name);
        popupNameFull.textContent = this._name;
    }


}


