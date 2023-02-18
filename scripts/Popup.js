import { popup, openPopup, closePopup } from ".";

export class Popup{
    constructor() {
        super(selector);
    }

    _open() {
        popup.classList.add("popup_active");
        document.addEventListener("keydown", handleKeyPress)
    }
    _close() {
        popup.classList.remove("popup_active");
        document.removeEventListener("keydown", handleKeyPress)
    }
    _SetEventListeners() {
        const overleyClosePopups = Array.from(document.querySelectorAll(".popup"));
        overleyClosePopups.forEach((overley) => {
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
