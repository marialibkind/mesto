export class Popup {

    constructor(inputSelector) {
        this._popup = document.querySelector(inputSelector);
    }

    open() {
        this._popup.classList.add("popup_active");
        document.addEventListener("keydown", this._handleEscClose.bind(this));
    }
    close() {
        this._popup.classList.remove("popup_active");
        document.removeEventListener("keydown", this._handleEscClose.bind(this));
    }
    _SetEventListeners() {
        this._popup =  this._popup.forEach((overley) => {
            overley.addEventListener("click", (evt) => {
                if (evt.target.classList.contains('popup_active')) {
                    closePopup(evt.target);
                }
            });
        });
    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            
            this.close();

        }
    }

}
