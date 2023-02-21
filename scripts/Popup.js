export class Popup {

    _popupItem;

    constructor(inputSelector) {
        this._popupItem = document.querySelector(inputSelector);
    }

    open() {
        this._popupItem.classList.add("popup_active");
        document.addEventListener("keydown", handleKeyPress)
    }
    close() {
        this._popupItem.classList.remove("popup_active");
        document.removeEventListener("keydown", handleKeyPress)
    }
    _SetEventListeners() {
        this._popup =  this._popupItem.forEach((overley) => {
            overley.addEventListener("click", (evt) => {
                if (evt.target.classList.contains('popup_active')) {
                    closePopup(evt.target);
                }
            });
        });
    }
    _handleEscClose() {
        if (evt.key === "Escape") {
            const openedPopup = document.querySelector(".popup_active")
            console.log(openedPopup)
            closePopup(openedPopup)
        }
    }

}
