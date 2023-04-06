export class Card {
  constructor(element, template, openPopup, deleteCardButton) {
    this._link = element.link;
    this._name = element.name;
    this._template = template;
    this._popupImageOpen = openPopup;
    this._sbmt = "popup__submit-btn";
    this._delete = deleteCardButton;
  }

  _getTemplate() {
    return document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _like() {
    this._likeButton.classList.toggle("element__like_active");
  }

  _deleteCard() {
    this._delete(this._element);
  }

  _open() {
    this._popupImageOpen(this._name, this._link);
  }

  setEventListeners() {
    this._likeButton.addEventListener("click", () => this._like());
    this._elementDelete.addEventListener("click", () => this._deleteCard());
    this._cardImage.addEventListener("click", () => this._open());
  }

  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__name").textContent = this._name;
    this._cardImage = this._element.querySelector(".element__image");
    this._likeButton = this._element.querySelector(".element__like");
    this._elementDelete = this._element.querySelector(".element__bin");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this.setEventListeners();

    return this._element;
  }
}
