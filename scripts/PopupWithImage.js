import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

    constructor(selector) {

        super(selector);
        this._fullPopup = document.querySelector(".popup-fullscreen");
        this._popupImageFull = this._fullPopup.querySelector(".popup__image");
        this._popupNameFull = this._fullPopup.querySelector(".popup__name");
        
    }

    open(link, name) {

        this._popupImageFull.setAttribute('src', link);
        this._popupImageFull.setAttribute('alt', name);
        this._popupNameFull.textContent = name;

    }

}


