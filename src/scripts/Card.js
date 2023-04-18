export class Card {
  constructor(element, templates, openPopup, deleteCardButton, clickLike, userId) {
    this._link = element.link;
    this._name = element.name;
    this._ownerId = element.owner._id;
    this._id = element._id;
    this._likesArray = element.likes;
    this._countLikes = element.likes.length;
    this._templates = templates;
    this._popupImageOpen = openPopup;
    this._sbmt = "popup__submit-btn";
    this._delete = deleteCardButton;
    this._clickLike = clickLike;
    this._userId = userId;
    //console.log(element);
  }

  _getTemplate(template) {
    return document
      .querySelector(template)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _like() {
    this._likeButton.classList.toggle("element__like_active");
    this._clickLike(this._id, this, this._ifLiked);
    this._ifLiked = !this._ifLiked;
  }

  updateLikes(count) {

    this._likeCount.textContent = count;

  }
  _deleteCard() {
    this._delete(this._element, this._id);
  }

  _open() {
    this._popupImageOpen(this._name, this._link);
  }

  setEventListeners() {
    this._likeButton.addEventListener("click", () => this._like());
    if (this._ifOwner){
    this._elementDelete.addEventListener("click", () => this._deleteCard());
    }
    this._cardImage.addEventListener("click", () => this._open());
  }

  createCard() {
    this._ifLiked = this._likesArray.some((like) => {
      return like._id === this._userId
    })
    this._ifOwner = this._ownerId === this._userId;
    if (this._ifOwner) {
      this._element = this._getTemplate(this._templates.owner);
    } else {
      this._element = this._getTemplate(this._templates.other);
    }
    this._element.querySelector(".element__name").textContent = this._name;
    this._cardImage = this._element.querySelector(".element__image");
    this._likeCount = this._element.querySelector(".element__like_count");
    this._likeCount.textContent = this._countLikes;
    this._likeButton = this._element.querySelector(".element__like");
    if (this._ifLiked) {
      this._likeButton.classList.add("element__like_active");
    }
    if (this._ifOwner){
    this._elementDelete = this._element.querySelector(".element__bin");
    }

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this.setEventListeners();

    return this._element;
  }
}
