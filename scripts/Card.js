import { openPopup, fullPopup, popupImageFull, popupNameFull } from "./index.js";
export class Card {
    constructor(element, template) {

        this._link = element.link;
        this._name = element.name;
        this._alt = element.name;
        this._template = template;
    }

    _getTemplate() {
        const cardElement = this._template.querySelector(".element").cloneNode(true);
        return cardElement;
    }

    _like() {
        this._likeButton.classList.toggle("element__like_active");
    }
    _deleteCard() {
        this._element.remove();

    }
    _open() {
        openPopup(fullPopup);
        popupImageFull.setAttribute('src', this._link);
        popupImageFull.setAttribute('alt', this._name);
        popupNameFull.textContent = this._name;

    }
    setEventListeners() {
        this._likeButton.addEventListener('click', () => { this._like() });
        this._element.querySelector('.element__bin').addEventListener('click', () => { this._deleteCard() });
        this._cardImage.addEventListener('click', () => { this._open() });
    }

    createCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__name').textContent = this._name;
        this._cardImage = this._element.querySelector('.element__image');
        this._likeButton = this._element.querySelector('.element__like');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this.setEventListeners();
        return this._element;

    }

}
