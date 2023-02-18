import { popupImageFull, openImagePopupButton, closeImagePopupButton} from ".";
яяы
export class PopupWithImage extends Popup {
    constructor() {
        super(selector);
        this._form = this.popup.queryselector('.popup-image');

    }
    openImagePopupButton.addEventListener('click', () => {
        openPopup(popupImage);
     });
    closeImagePopupButton.addEventListener('click', () => closePopup(popupImage));
    
}


