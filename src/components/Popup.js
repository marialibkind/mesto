export class Popup {
  constructor(inputSelector) {
    this._popup = document.querySelector(inputSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleMouseClose = this._handleMouseClose.bind(this);
    this.close = this.close.bind(this);
    this._closeButton = this._popup.querySelector(".popup__cross-icon");
  }

  open() {
    this._popup.classList.add("popup_active");
    this.setEventListeners();
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popup.classList.remove("popup_active");
    document.removeEventListener("keydown", this._handleEscClose);
    this.removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleMouseClose(event) {
    if (event.target.classList.contains("popup_active")) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mouseup", this._handleMouseClose);
    this._closeButton.addEventListener("click", this.close);
  }

  removeEventListeners() {
    this._popup.removeEventListener("mouseup", this._handleMouseClose);
    this._closeButton.removeEventListener("click", this.close);
  }
}
