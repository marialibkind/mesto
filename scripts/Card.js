export class Card {
    constructor(element, elementTemplate){
        this._link = element.link;
        this._name = element.name;
        this._alt = element.name;
        this._template = elementTemplate;
    }

    _getTemplate(){
        const cardElement =  this._template.querySelector(".element").cloneNode(true);
        return cardElement;
    }

    createCard () {
        this._element = this._getTemplate();
        this._element.querySelector('.element__name').textContent = this._name;
        const image = this._element.querySelector('.element__image');
        image.src = this._link;
        image.alt = this._name;
        return this._element;
    };
    like () {
        const likeButton =  this._element.querySelector('.element__like');
        likeButton.classList.toggle("element__like_active");
        console.log(likeButton)
        }
    deleteCard () {
        this._element.remove();
        
    }
    open(){
        openPopup(fullPopup);
        popupImageFull.setAttribute('src', link);
        popupImageFull.setAttribute('alt', this._name);
        popupNameFull.textContent = this._name;
        return element;
    }
    setEventListeners() {
        this._element.addEventListener('click', this.like)
        this._element.addEventListener('click', this.deleteCard)
        this._element.addEventListener('click', this.open)
        
    }
    renderCard(card) {
        elementsList.prepend(card);
    }
}
