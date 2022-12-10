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
    };
    like () {
            const likeButton = evt.target;
            likeButton.classList.toggle("element__like_active");
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
        element.querySelector(".element__like").addEventListener('click', like ());
        element.querySelector(".element__bin").addEventListener('click', deleteCard ());
        elementImage.addEventListener('click', open());
    }
    renderCard(card) {
        elementsList.prepend(card);
    }
}
