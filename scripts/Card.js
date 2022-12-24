import { openPopup, fullPopup, popupImageFull, popupNameFull } from "./index.js";
export class Card {
    constructor(element){
        
        this._link = element.link;
        this._name = element.name;
        this._alt = element.name;
        this._template = document.querySelector("#element-template").content;
    }

    _getTemplate(){
        const cardElement =  this._template.querySelector(".element").cloneNode(true);
        return cardElement;
    }

    _like () {
        const likeButton =  this._element.querySelector('.element__like');
        likeButton.classList.toggle("element__like_active");
        console.log(likeButton)
        }
    _deleteCard () {
        this._element.remove();
        
    }
    _open(){
        openPopup(fullPopup);
        popupImageFull.setAttribute('src', this._link);
        popupImageFull.setAttribute('alt', this._name);
        popupNameFull.textContent = this._name;
        
    }
    setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => { this._like() });
        this._element.querySelector('.element__bin').addEventListener('click', () => { this._deleteCard() });
        this._element.querySelector('.element__image').addEventListener('click', () => { this._open() });
        
    }

    createCard () {
        this._element = this._getTemplate();
        this._element.querySelector('.element__name').textContent = this._name;
        const image = this._element.querySelector('.element__image');
        image.src = this._link;
        image.alt = this._name;
        this.setEventListeners();
        return this._element;
        
    }
   
    renderCard(card) {
        elementsList.prepend(card);
    }

}
