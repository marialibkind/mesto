export class Card {
    constructor(element, elementTemplate){
        this._link = element.link;
        this._name = element.name;
        this._alt = element.name;
        this._template = elementTemplate;
        console.log(elementTemplate)
    }

    _getTemplate(){
        console.log(this._template)
        const cardElement =  this._template.querySelector("#element-template").cloneNode(true);
        console.log(cardElement)
        return cardElement;
    }

    createCard () {
        console.log(this._link, this._name)
        this._element = this._getTemplate();
        console.log(element.querySelector(".element__name"))
        console.log(this._element.querySelector(".element__name"))
        const elementImage = document.querySelector(".element__image");
        const elementName = document.querySelector(".element__name");
        this._element.querySelector('.element__name').textContent = this._name;
        console.log(this._element)
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
