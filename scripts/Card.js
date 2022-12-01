
export class Card {
    constructor(element, elementTemplate){
        this._link = element.link;
        this._name = element.name;
        this._alt = element.name;
        this._template = elementTemplate;
    }

    _getTemplate(){
        const element = this.template.querySelector(".element").cloneNode(true);
        return element;
    }

    createCard () {
        this._element = this._getTemplate();
        const elementImage = this._link.querySelector(".element__image");
        const elementName = this._name.querySelector(".element__name");
        elementImage.src = link;
        elementName.textContent = this._name;
        elementImage.alt = this._name;
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
